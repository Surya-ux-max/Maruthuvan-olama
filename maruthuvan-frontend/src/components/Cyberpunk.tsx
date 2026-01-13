import { useEffect, useRef, FC } from 'react';
import * as THREE from 'three';

interface CyberpunkProps {
  className?: string;
}

class CyberpunkEffect {
  container: HTMLElement;
  renderer: THREE.WebGLRenderer;
  camera: THREE.PerspectiveCamera;
  scene: THREE.Scene;
  clock: THREE.Clock;
  disposed: boolean;
  particles: THREE.Mesh[] = [];
  lines: THREE.Line[] = [];
  animationId?: number;

  constructor(container: HTMLElement) {
    this.container = container;
    this.disposed = false;
    this.clock = new THREE.Clock();

    this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    this.renderer.setSize(container.offsetWidth, container.offsetHeight);
    this.renderer.setPixelRatio(window.devicePixelRatio);
    container.appendChild(this.renderer.domElement);

    this.camera = new THREE.PerspectiveCamera(75, container.offsetWidth / container.offsetHeight, 0.1, 1000);
    this.camera.position.z = 50;

    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0x0a0a0a);

    this.init();
  }

  init() {
    const cyberpunkColors = [0xff0080, 0x00ffff, 0xff4000, 0x8000ff, 0x00ff80, 0xffff00, 0xff8000];

    // Create floating particles
    for (let i = 0; i < 100; i++) {
      const geometry = new THREE.SphereGeometry(Math.random() * 0.5 + 0.1, 8, 8);
      const material = new THREE.MeshBasicMaterial({ 
        color: cyberpunkColors[Math.floor(Math.random() * cyberpunkColors.length)],
        transparent: true,
        opacity: Math.random() * 0.8 + 0.2
      });
      const particle = new THREE.Mesh(geometry, material);
      
      particle.position.x = (Math.random() - 0.5) * 200;
      particle.position.y = (Math.random() - 0.5) * 200;
      particle.position.z = (Math.random() - 0.5) * 200;
      
      this.particles.push(particle);
      this.scene.add(particle);
    }

    // Create neon grid lines
    for (let i = 0; i < 20; i++) {
      const points = [];
      for (let j = 0; j < 50; j++) {
        points.push(new THREE.Vector3(
          (Math.random() - 0.5) * 100,
          (Math.random() - 0.5) * 100,
          j * 2 - 50
        ));
      }
      
      const geometry = new THREE.BufferGeometry().setFromPoints(points);
      const material = new THREE.LineBasicMaterial({ 
        color: cyberpunkColors[Math.floor(Math.random() * cyberpunkColors.length)],
        transparent: true,
        opacity: 0.3
      });
      const line = new THREE.Line(geometry, material);
      
      this.lines.push(line);
      this.scene.add(line);
    }

    this.animate();
  }

  animate = () => {
    if (this.disposed) return;

    const time = this.clock.getElapsedTime();

    // Animate particles
    this.particles.forEach((particle, i) => {
      particle.position.z += 0.5;
      particle.rotation.x += 0.01;
      particle.rotation.y += 0.01;
      
      if (particle.position.z > 100) {
        particle.position.z = -100;
        particle.position.x = (Math.random() - 0.5) * 200;
        particle.position.y = (Math.random() - 0.5) * 200;
      }
    });

    // Animate lines
    this.lines.forEach((line, i) => {
      line.rotation.z += 0.001;
      line.position.z = Math.sin(time + i) * 10;
    });

    this.renderer.render(this.scene, this.camera);
    this.animationId = requestAnimationFrame(this.animate);
  };

  dispose() {
    this.disposed = true;
    if (this.animationId) {
      cancelAnimationFrame(this.animationId);
    }
    if (this.renderer) {
      this.renderer.dispose();
    }
    if (this.scene) {
      this.scene.clear();
    }
  }
}

const Cyberpunk: FC<CyberpunkProps> = ({ className = "" }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const appRef = useRef<CyberpunkEffect | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    appRef.current = new CyberpunkEffect(containerRef.current);

    return () => {
      if (appRef.current) {
        appRef.current.dispose();
      }
    };
  }, []);

  return <div ref={containerRef} className={`w-full h-full ${className}`} />;
};

export default Cyberpunk;