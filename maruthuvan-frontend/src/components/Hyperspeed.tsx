import { useEffect, useRef, FC } from 'react';
import * as THREE from 'three';

interface Colors {
  roadColor: number;
  islandColor: number;
  background: number;
  shoulderLines: number;
  brokenLines: number;
  leftCars: number[];
  rightCars: number[];
  sticks: number;
}

interface HyperspeedOptions {
  onSpeedUp?: (ev: MouseEvent | TouchEvent) => void;
  onSlowDown?: (ev: MouseEvent | TouchEvent) => void;
  distortion?: string;
  length: number;
  roadWidth: number;
  islandWidth: number;
  lanesPerRoad: number;
  fov: number;
  fovSpeedUp: number;
  speedUp: number;
  carLightsFade: number;
  totalSideLightSticks: number;
  lightPairsPerRoadWay: number;
  shoulderLinesWidthPercentage: number;
  brokenLinesWidthPercentage: number;
  brokenLinesLengthPercentage: number;
  lightStickWidth: [number, number];
  lightStickHeight: [number, number];
  movingAwaySpeed: [number, number];
  movingCloserSpeed: [number, number];
  carLightsLength: [number, number];
  carLightsRadius: [number, number];
  carWidthPercentage: [number, number];
  carShiftX: [number, number];
  carFloorSeparation: [number, number];
  colors: Colors;
}

interface HyperspeedProps {
  effectOptions?: Partial<HyperspeedOptions>;
}

const defaultOptions: HyperspeedOptions = {
  onSpeedUp: () => {},
  onSlowDown: () => {},
  distortion: 'turbulentDistortion',
  length: 400,
  roadWidth: 10,
  islandWidth: 2,
  lanesPerRoad: 4,
  fov: 90,
  fovSpeedUp: 150,
  speedUp: 2,
  carLightsFade: 0.4,
  totalSideLightSticks: 20,
  lightPairsPerRoadWay: 40,
  shoulderLinesWidthPercentage: 0.05,
  brokenLinesWidthPercentage: 0.1,
  brokenLinesLengthPercentage: 0.5,
  lightStickWidth: [0.12, 0.5],
  lightStickHeight: [1.3, 1.7],
  movingAwaySpeed: [60, 80],
  movingCloserSpeed: [-120, -160],
  carLightsLength: [400 * 0.03, 400 * 0.2],
  carLightsRadius: [0.05, 0.14],
  carWidthPercentage: [0.3, 0.5],
  carShiftX: [-0.8, 0.8],
  carFloorSeparation: [0, 5],
  colors: {
    roadColor: 0x080808,
    islandColor: 0x0a0a0a,
    background: 0x000000,
    shoulderLines: 0xffffff,
    brokenLines: 0xffffff,
    leftCars: [0xd856bf, 0x6750a2, 0xc247ac],
    rightCars: [0x03b3c3, 0x0e5ea5, 0x324555],
    sticks: 0x03b3c3
  }
};

class SimpleHyperspeed {
  container: HTMLElement;
  options: HyperspeedOptions;
  renderer: THREE.WebGLRenderer;
  camera: THREE.PerspectiveCamera;
  scene: THREE.Scene;
  clock: THREE.Clock;
  disposed: boolean;
  road!: THREE.Mesh;
  lights: THREE.Mesh[] = [];
  animationId?: number;

  constructor(container: HTMLElement, options: HyperspeedOptions) {
    this.container = container;
    this.options = options;
    this.disposed = false;
    this.clock = new THREE.Clock();

    this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    this.renderer.setSize(container.offsetWidth, container.offsetHeight);
    this.renderer.setPixelRatio(window.devicePixelRatio);
    container.appendChild(this.renderer.domElement);

    this.camera = new THREE.PerspectiveCamera(
      options.fov,
      container.offsetWidth / container.offsetHeight,
      0.1,
      1000
    );
    this.camera.position.set(0, 5, 0);

    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(options.colors.background);

    this.init();
  }

  init() {
    // Create road
    const roadGeometry = new THREE.PlaneGeometry(this.options.roadWidth, this.options.length);
    const roadMaterial = new THREE.MeshBasicMaterial({ 
      color: this.options.colors.roadColor,
      transparent: false,
      opacity: 1.0
    });
    this.road = new THREE.Mesh(roadGeometry, roadMaterial);
    this.road.rotation.x = -Math.PI / 2;
    this.road.position.z = -this.options.length / 2;
    this.scene.add(this.road);

    // Add road lines
    const lineGeometry = new THREE.PlaneGeometry(0.2, this.options.length);
    const lineMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff });
    const centerLine = new THREE.Mesh(lineGeometry, lineMaterial);
    centerLine.rotation.x = -Math.PI / 2;
    centerLine.position.y = 0.01;
    centerLine.position.z = -this.options.length / 2;
    this.scene.add(centerLine);

    // Create moving lights
    for (let i = 0; i < 60; i++) {
      const lightGeometry = new THREE.SphereGeometry(0.3, 8, 8);
      const lightMaterial = new THREE.MeshBasicMaterial({ 
        color: i % 2 === 0 ? 0xff0080 : 0x00ffff,
        transparent: false,
        opacity: 1.0
      });
      const light = new THREE.Mesh(lightGeometry, lightMaterial);
      
      light.position.x = (Math.random() - 0.5) * this.options.roadWidth * 0.8;
      light.position.y = 0.2;
      light.position.z = -Math.random() * this.options.length;
      
      this.lights.push(light);
      this.scene.add(light);
    }

    this.animate();
  }

  animate = () => {
    if (this.disposed) return;

    const time = this.clock.getElapsedTime();

    // Move lights
    this.lights.forEach((light, i) => {
      light.position.z += (i % 2 === 0 ? 4 : -4);
      
      if (light.position.z > 50) {
        light.position.z = -this.options.length;
        light.position.x = (Math.random() - 0.5) * this.options.roadWidth * 0.8;
      }
      if (light.position.z < -this.options.length) {
        light.position.z = 50;
        light.position.x = (Math.random() - 0.5) * this.options.roadWidth * 0.8;
      }
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

const Hyperspeed: FC<HyperspeedProps> = ({ effectOptions = {} }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const appRef = useRef<SimpleHyperspeed | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const options = { ...defaultOptions, ...effectOptions };
    appRef.current = new SimpleHyperspeed(containerRef.current, options);

    return () => {
      if (appRef.current) {
        appRef.current.dispose();
      }
    };
  }, [effectOptions]);

  return <div ref={containerRef} className="w-full h-full" />;
};

export default Hyperspeed;