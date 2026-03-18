import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export function Scene3D() {
  const containerRef = useRef<HTMLDivElement>(null);
  const mousePosition = useRef({ x: 0, y: 0 });

  useEffect(() => {
    if (!containerRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      containerRef.current.clientWidth / containerRef.current.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({ 
      antialias: true, 
      alpha: true 
    });
    renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    containerRef.current.appendChild(renderer.domElement);

    // Characters for the code tunnel
    const characters = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲンABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789<>[]{}()';
    
    // Create text sprites for code streams
    const codeStreams: Array<{
      particles: THREE.Points;
      speeds: number[];
      resetPositions: number[];
    }> = [];

    const numStreams = 50;
    const particlesPerStream = 30;

    for (let i = 0; i < numStreams; i++) {
      const geometry = new THREE.BufferGeometry();
      const positions: number[] = [];
      const colors: number[] = [];
      const sizes: number[] = [];
      const speeds: number[] = [];
      const resetPositions: number[] = [];

      const streamX = (Math.random() - 0.5) * 40;
      const streamZ = (Math.random() - 0.5) * 40;

      for (let j = 0; j < particlesPerStream; j++) {
        // Position
        const x = streamX + (Math.random() - 0.5) * 0.5;
        const y = Math.random() * 50 - 25;
        const z = streamZ + (Math.random() - 0.5) * 0.5;
        positions.push(x, y, z);
        resetPositions.push(y);

        // Color - green with variations
        const greenIntensity = 0.3 + Math.random() * 0.7;
        colors.push(0.2, greenIntensity, 0.3);

        // Size
        sizes.push(Math.random() * 0.3 + 0.2);

        // Speed
        speeds.push(0.05 + Math.random() * 0.1);
      }

      geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
      geometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));
      geometry.setAttribute('size', new THREE.Float32BufferAttribute(sizes, 1));

      // Create canvas texture with random character
      const canvas = document.createElement('canvas');
      const size = 64;
      canvas.width = size;
      canvas.height = size;
      const ctx = canvas.getContext('2d')!;
      
      const char = characters[Math.floor(Math.random() * characters.length)];
      ctx.fillStyle = '#00ff41';
      ctx.font = 'bold 48px Space Mono, monospace';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(char, size / 2, size / 2);

      const texture = new THREE.CanvasTexture(canvas);

      const material = new THREE.PointsMaterial({
        size: 1,
        map: texture,
        vertexColors: true,
        transparent: true,
        opacity: 0.8,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
        sizeAttenuation: true,
      });

      const particles = new THREE.Points(geometry, material);
      scene.add(particles);

      codeStreams.push({ particles, speeds, resetPositions });
    }

    // Add dust particles in background
    const dustGeometry = new THREE.BufferGeometry();
    const dustCount = 1000;
    const dustPositions: number[] = [];
    const dustColors: number[] = [];

    for (let i = 0; i < dustCount; i++) {
      dustPositions.push(
        (Math.random() - 0.5) * 100,
        (Math.random() - 0.5) * 100,
        (Math.random() - 0.5) * 100
      );
      
      const intensity = Math.random() * 0.3;
      dustColors.push(0.2, intensity, 0.3);
    }

    dustGeometry.setAttribute('position', new THREE.Float32BufferAttribute(dustPositions, 3));
    dustGeometry.setAttribute('color', new THREE.Float32BufferAttribute(dustColors, 3));

    const dustMaterial = new THREE.PointsMaterial({
      size: 0.05,
      vertexColors: true,
      transparent: true,
      opacity: 0.3,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    const dust = new THREE.Points(dustGeometry, dustMaterial);
    scene.add(dust);

    // Lighting for glow effect
    const ambientLight = new THREE.AmbientLight(0x00ff41, 0.2);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0x00ff41, 1, 100);
    pointLight.position.set(0, 0, 10);
    scene.add(pointLight);

    // Animation loop
    let animationFrameId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      const elapsedTime = clock.getElapsedTime();

      // Move camera forward slowly
      camera.position.z = 5 + Math.sin(elapsedTime * 0.1) * 2;

      // Mouse parallax
      camera.position.x += (mousePosition.current.x * 2 - camera.position.x) * 0.05;
      camera.position.y += (mousePosition.current.y * 2 - camera.position.y) * 0.05;
      camera.lookAt(0, 0, 0);

      // Animate code streams
      codeStreams.forEach(({ particles, speeds, resetPositions }) => {
        const positions = particles.geometry.attributes.position.array as Float32Array;
        
        for (let i = 0; i < positions.length / 3; i++) {
          const idx = i * 3;
          
          // Move particles down
          positions[idx + 1] -= speeds[i];
          
          // Reset when off screen
          if (positions[idx + 1] < -25) {
            positions[idx + 1] = 25;
          }
        }
        
        particles.geometry.attributes.position.needsUpdate = true;
        
        // Rotate slightly for dynamic effect
        particles.rotation.z = Math.sin(elapsedTime * 0.1) * 0.02;
      });

      // Rotate dust particles slowly
      dust.rotation.y = elapsedTime * 0.02;
      dust.rotation.x = elapsedTime * 0.01;

      renderer.render(scene, camera);
    };

    animate();

    // Handle window resize
    const handleResize = () => {
      if (!containerRef.current) return;
      
      camera.aspect = containerRef.current.clientWidth / containerRef.current.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
      renderer.dispose();
      
      codeStreams.forEach(({ particles }) => {
        particles.geometry.dispose();
        (particles.material as THREE.PointsMaterial).dispose();
      });
      
      dustGeometry.dispose();
      dustMaterial.dispose();
      
      if (containerRef.current && renderer.domElement) {
        containerRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -((e.clientY - rect.top) / rect.height) * 2 + 1;
      mousePosition.current = { x, y };
    }
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="w-full h-full relative"
    >
      {/* Glow overlay effect */}
      <div className="absolute inset-0 bg-gradient-radial from-green-500/10 via-transparent to-transparent pointer-events-none" />
      
      {/* Note overlay */}
      <div className="absolute bottom-2 right-2 text-[10px] text-muted-foreground/50 z-10">
        3D built with Three.js
      </div>
    </div>
  );
}
