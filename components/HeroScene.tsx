'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import styles from './HeroScene.module.css';

/**
 * Full-viewport Three.js scene that responds to scroll.
 * - Layered wireframe geometry (icosahedron + torus knot) in brand cyan
 * - Camera dolly + rotation bound to scroll progress
 * - Particle field for depth
 * - Pointer parallax for extra life
 * - Stops render loop when off-screen for battery / GPU
 */
export default function HeroScene() {
  const mountRef = useRef<HTMLDivElement | null>(null);
  const rafRef = useRef<number | null>(null);
  const scrollProgressRef = useRef(0);
  const pointerRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced) return;

    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x020f23, 0.08);

    const camera = new THREE.PerspectiveCamera(
      60,
      mount.clientWidth / mount.clientHeight,
      0.1,
      100
    );
    camera.position.set(0, 0, 6);

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance',
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    renderer.setClearColor(0x000000, 0);
    mount.appendChild(renderer.domElement);

    // Main wireframe icosahedron
    const icoGeo = new THREE.IcosahedronGeometry(1.6, 1);
    const icoMat = new THREE.MeshBasicMaterial({
      color: 0x29f2f2,
      wireframe: true,
      transparent: true,
      opacity: 0.55,
    });
    const ico = new THREE.Mesh(icoGeo, icoMat);
    scene.add(ico);

    // Inner solid shell
    const innerMat = new THREE.MeshBasicMaterial({
      color: 0x051e40,
      transparent: true,
      opacity: 0.6,
    });
    const inner = new THREE.Mesh(new THREE.IcosahedronGeometry(1.45, 1), innerMat);
    scene.add(inner);

    // Outer torus knot
    const torusGeo = new THREE.TorusKnotGeometry(2.2, 0.04, 200, 16);
    const torusMat = new THREE.MeshBasicMaterial({
      color: 0x29f2f2,
      transparent: true,
      opacity: 0.25,
    });
    const torus = new THREE.Mesh(torusGeo, torusMat);
    scene.add(torus);

    // Particle field
    const particleCount = 800;
    const positions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 30;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 30;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 30;
    }
    const particleGeo = new THREE.BufferGeometry();
    particleGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    const particleMat = new THREE.PointsMaterial({
      color: 0x29f2f2,
      size: 0.025,
      transparent: true,
      opacity: 0.7,
      sizeAttenuation: true,
    });
    const particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);

    // Lighting not needed (MeshBasic), but we keep fog.

    const onResize = () => {
      if (!mount) return;
      camera.aspect = mount.clientWidth / mount.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(mount.clientWidth, mount.clientHeight);
    };
    window.addEventListener('resize', onResize);

    const onPointerMove = (e: PointerEvent) => {
      pointerRef.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      pointerRef.current.y = (e.clientY / window.innerHeight) * 2 - 1;
    };
    window.addEventListener('pointermove', onPointerMove);

    let visible = true;
    const onVisibility = () => {
      visible = document.visibilityState === 'visible';
    };
    document.addEventListener('visibilitychange', onVisibility);

    const clock = new THREE.Clock();

    const tick = () => {
      rafRef.current = requestAnimationFrame(tick);
      if (!visible) return;
      const t = clock.getElapsedTime();
      const p = scrollProgressRef.current;

      // Continuous gentle rotation
      ico.rotation.x = t * 0.15 + p * Math.PI;
      ico.rotation.y = t * 0.2 + p * Math.PI * 0.7;
      inner.rotation.x = -t * 0.1 - p * Math.PI * 0.5;
      inner.rotation.y = -t * 0.12 - p * Math.PI * 0.4;
      torus.rotation.x = t * 0.08 + p * 2;
      torus.rotation.y = t * 0.1 + p * 1.5;

      // Camera dolly out as user scrolls, with pointer parallax
      const targetZ = 6 + p * 3;
      const targetX = pointerRef.current.x * 0.4;
      const targetY = -pointerRef.current.y * 0.3;
      camera.position.x += (targetX - camera.position.x) * 0.05;
      camera.position.y += (targetY - camera.position.y) * 0.05;
      camera.position.z += (targetZ - camera.position.z) * 0.05;
      camera.lookAt(0, 0, 0);

      // Particle slow drift
      particles.rotation.y = t * 0.02 + p * 0.5;
      particles.rotation.x = t * 0.01;

      renderer.render(scene, camera);
    };
    tick();

    return () => {
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
      window.removeEventListener('resize', onResize);
      window.removeEventListener('pointermove', onPointerMove);
      document.removeEventListener('visibilitychange', onVisibility);
      icoGeo.dispose();
      icoMat.dispose();
      innerMat.dispose();
      torusGeo.dispose();
      torusMat.dispose();
      particleGeo.dispose();
      particleMat.dispose();
      renderer.dispose();
      if (renderer.domElement.parentNode === mount) {
        mount.removeChild(renderer.domElement);
      }
    };
  }, []);

  useEffect(() => {
    const onScroll = () => {
      const max =
        document.documentElement.scrollHeight - window.innerHeight;
      scrollProgressRef.current = max > 0 ? window.scrollY / max : 0;
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return <div ref={mountRef} className={styles.scene} aria-hidden="true" />;
}
