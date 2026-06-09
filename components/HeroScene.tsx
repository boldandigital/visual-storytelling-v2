'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import styles from './HeroScene.module.css';

/**
 * Full-viewport Three.js scene — matches the scroll-bg.mp4 aesthetic.
 *
 * Layers (back to front):
 *  1. Warp tunnel — radial light streaks that pulse with scroll
 *  2. Wireframe city — instanced rectangular blocks forming a grid floor
 *  3. Cyan particle field — 1500 points for depth
 *  4. Central wireframe octahedron — focal point, slow rotation
 *
 * Camera dollies + rotates with scroll progress.
 * Pauses when tab is hidden or user has prefers-reduced-motion.
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
    scene.background = new THREE.Color(0x000000);
    scene.fog = new THREE.FogExp2(0x000000, 0.045);

    const camera = new THREE.PerspectiveCamera(
      70,
      mount.clientWidth / mount.clientHeight,
      0.1,
      200
    );
    camera.position.set(0, 4, 18);

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance',
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    renderer.setClearColor(0x000000, 1);
    mount.appendChild(renderer.domElement);

    // === 1. Warp tunnel — radial lines from center ===
    const tunnelGroup = new THREE.Group();
    const tunnelLineCount = 64;
    for (let i = 0; i < tunnelLineCount; i++) {
      const angle = (i / tunnelLineCount) * Math.PI * 2;
      const points = [];
      for (let j = 0; j < 8; j++) {
        points.push(
          new THREE.Vector3(
            Math.cos(angle) * (2 + j * 0.8),
            Math.sin(angle) * (2 + j * 0.8),
            -j * 8
          )
        );
      }
      const geo = new THREE.BufferGeometry().setFromPoints(points);
      const mat = new THREE.LineBasicMaterial({
        color: 0x00ffff,
        transparent: true,
        opacity: 0.4,
      });
      const line = new THREE.Line(geo, mat);
      tunnelGroup.add(line);
    }
    scene.add(tunnelGroup);

    // === 2. Wireframe city — instanced cubes ===
    const cityGroup = new THREE.Group();
    const cityGeo = new THREE.BoxGeometry(1, 1, 1);
    const cityMat = new THREE.MeshBasicMaterial({
      color: 0x00ffff,
      wireframe: true,
      transparent: true,
      opacity: 0.5,
    });
    const cityCount = 300;
    const cityMesh = new THREE.InstancedMesh(cityGeo, cityMat, cityCount);
    const dummy = new THREE.Object3D();
    for (let i = 0; i < cityCount; i++) {
      const x = (Math.random() - 0.5) * 80;
      const z = -Math.random() * 80;
      const h = 1 + Math.random() * 6;
      dummy.position.set(x, h / 2, z);
      dummy.scale.set(0.5 + Math.random() * 1.5, h, 0.5 + Math.random() * 1.5);
      dummy.updateMatrix();
      cityMesh.setMatrixAt(i, dummy.matrix);
    }
    cityGroup.add(cityMesh);
    cityGroup.position.y = -1.5;
    scene.add(cityGroup);

    // === 3. Particle field ===
    const particleCount = 1500;
    const positions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 80;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 40;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 80;
    }
    const particleGeo = new THREE.BufferGeometry();
    particleGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    const particleMat = new THREE.PointsMaterial({
      color: 0x00ffff,
      size: 0.04,
      transparent: true,
      opacity: 0.85,
      sizeAttenuation: true,
    });
    const particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);

    // === 4. Central wireframe octahedron ===
    const octGeo = new THREE.OctahedronGeometry(2, 0);
    const octMat = new THREE.MeshBasicMaterial({
      color: 0x00ffff,
      wireframe: true,
      transparent: true,
      opacity: 0.85,
    });
    const octahedron = new THREE.Mesh(octGeo, octMat);
    octahedron.position.set(0, 4, -10);
    scene.add(octahedron);

    // Inner solid icosahedron
    const innerGeo = new THREE.IcosahedronGeometry(1.6, 1);
    const innerMat = new THREE.MeshBasicMaterial({
      color: 0x0a192f,
      transparent: true,
      opacity: 0.7,
    });
    const inner = new THREE.Mesh(innerGeo, innerMat);
    inner.position.copy(octahedron.position);
    scene.add(inner);

    // === 5. Wireframe grid floor ===
    const grid = new THREE.GridHelper(80, 40, 0x00ffff, 0x00ffff);
    (grid.material as THREE.Material).opacity = 0.15;
    (grid.material as THREE.Material).transparent = true;
    grid.position.y = -1.5;
    scene.add(grid);

    // === Resize / pointer / visibility ===
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

      // Camera dolly forward + slight up-tilt as you scroll
      const targetZ = 18 - p * 24;
      const targetY = 4 - p * 2;
      const targetX = pointerRef.current.x * 1.5;
      const targetYP = -pointerRef.current.y * 0.8;
      camera.position.x += (targetX - camera.position.x) * 0.04;
      camera.position.y += (targetY + targetYP - camera.position.y) * 0.04;
      camera.position.z += (targetZ - camera.position.z) * 0.04;
      camera.lookAt(0, 2, -10);

      // Octahedron rotates faster as scroll progresses
      octahedron.rotation.x = t * 0.4 + p * Math.PI * 2;
      octahedron.rotation.y = t * 0.3 + p * Math.PI * 1.5;
      octahedron.scale.setScalar(1 + Math.sin(t * 1.5) * 0.05);
      inner.rotation.x = -t * 0.25 - p * Math.PI;
      inner.rotation.y = -t * 0.2 - p * Math.PI * 0.7;

      // City drifts forward (simulating flight)
      cityGroup.position.z = (t * 0.5) % 8;
      grid.position.z = (t * 0.5) % 2;

      // Tunnel rotates + pulses with scroll
      tunnelGroup.rotation.z = t * 0.1 + p * Math.PI;
      tunnelGroup.children.forEach((line) => {
        const mat = (line as THREE.Line).material as THREE.LineBasicMaterial;
        mat.opacity = 0.25 + p * 0.5;
      });

      // Particles drift
      particles.rotation.y = t * 0.03 + p * 0.5;
      particles.rotation.x = t * 0.015;

      renderer.render(scene, camera);
    };
    tick();

    return () => {
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
      window.removeEventListener('resize', onResize);
      window.removeEventListener('pointermove', onPointerMove);
      document.removeEventListener('visibilitychange', onVisibility);
      cityGeo.dispose();
      cityMat.dispose();
      octGeo.dispose();
      octMat.dispose();
      innerGeo.dispose();
      innerMat.dispose();
      particleGeo.dispose();
      particleMat.dispose();
      (grid.material as THREE.Material).dispose();
      grid.geometry.dispose();
      tunnelGroup.children.forEach((line) => {
        const l = line as THREE.Line;
        (l.material as THREE.Material).dispose();
        l.geometry.dispose();
      });
      renderer.dispose();
      if (renderer.domElement.parentNode === mount) {
        mount.removeChild(renderer.domElement);
      }
    };
  }, []);

  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      scrollProgressRef.current = max > 0 ? window.scrollY / max : 0;
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return <div ref={mountRef} className={styles.scene} aria-hidden="true" />;
}
