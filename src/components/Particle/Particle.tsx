"use client";

import React, { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";

const ParticleSystem = ({ count = 5000 }) => {
	const particles = useRef<any>();
	const mouse = useRef([0, 0]);

	const particlesPosition = useMemo(() => {
		const positions = new Float32Array(count * 3);
		for (let i = 0; i < count; i++) {
			positions[i * 3] = (Math.random() - 0.5) * 10;
			positions[i * 3 + 1] = (Math.random() - 0.5) * 10;
			positions[i * 3 + 2] = (Math.random() - 0.5) * 10;
		}
		return positions;
	}, [count]);

	useFrame(() => {
		if (!particles.current) return;

		const positions = particles?.current.geometry.attributes.position.array;
		for (let i = 0; i < count; i++) {
			const i3 = i * 3;
			positions[i3] += (mouse.current[0] - positions[i3]) * 0.01;
			positions[i3 + 1] += (mouse.current[1] - positions[i3 + 1]) * 0.01;
			positions[i3 + 2] +=
				(Math.sin(Date.now() * 0.001 + i) - positions[i3 + 2]) * 0.01;
		}
		particles.current.geometry.attributes.position.needsUpdate = true;
	});

	return (
		<points ref={particles}>
			<bufferGeometry>
				<bufferAttribute
					attach="attributes-position"
					count={particlesPosition.length / 3}
					array={particlesPosition}
					itemSize={3}
				/>
			</bufferGeometry>
			<pointsMaterial size={0.05} color="#ffffff" sizeAttenuation={true} />
		</points>
	);
};

const Scene = () => {
	return (
		<Canvas
			camera={{ position: [0, 0, 5], fov: 75 }}
			onCreated={({ gl }) => {
				gl.setClearColor(new THREE.Color("#000000"));
			}}>
			<ambientLight intensity={0.5} />
			<ParticleSystem />
			<OrbitControls />
		</Canvas>
	);
};

export default function ParticleSystemDemo() {
	return (
		<div style={{ width: "100vw", height: "100vh" }}>
			<Scene />
		</div>
	);
}
