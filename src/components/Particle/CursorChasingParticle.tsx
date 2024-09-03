// @ts-nocheck
// @ts-ignore
"use client";

import React, { useRef, useMemo, useEffect } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

const ParticleSystem = ({ count = 5000 }) => {
	const particles = useRef();
	const mouse = useRef(new THREE.Vector3());
	const { viewport } = useThree();

	const particlesPosition = useMemo(() => {
		const positions = new Float32Array(count * 3);
		for (let i = 0; i < count; i++) {
			positions[i * 3] = (Math.random() - 0.5) * 10;
			positions[i * 3 + 1] = (Math.random() - 0.5) * 10;
			positions[i * 3 + 2] = (Math.random() - 0.5) * 10;
		}
		return positions;
	}, [count]);

	useEffect(() => {
		const updateMousePosition = (event) => {
			mouse.current.x = (event.clientX / window.innerWidth) * 2 - 1;
			mouse.current.y = -(event.clientY / window.innerHeight) * 2 + 1;
			mouse.current.z = 0;
		};

		window.addEventListener("mousemove", updateMousePosition);

		return () => {
			window.removeEventListener("mousemove", updateMousePosition);
		};
	}, []);

	useFrame(({ camera }) => {
		const positions = particles.current.geometry.attributes.position.array;

		// Project mouse position to 3D space
		mouse.current.unproject(camera);
		const target = mouse.current.clone();
		target.sub(camera.position).normalize();
		const distance = -camera.position.z / target.z;
		mouse.current.copy(camera.position).add(target.multiplyScalar(distance));

		for (let i = 0; i < count; i++) {
			const i3 = i * 3;

			// Calculate direction towards mouse
			const dx = mouse.current.x - positions[i3];
			const dy = mouse.current.y - positions[i3 + 1];
			const dz = mouse.current.z - positions[i3 + 2];

			// Normalize direction and apply speed
			const length = Math.sqrt(dx * dx + dy * dy + dz * dz);
			const speed = 0.05; // Adjust this value to change particle speed

			if (length > 0.1) {
				// Avoid division by zero and jittering when close to target
				positions[i3] += (dx / length) * speed;
				positions[i3 + 1] += (dy / length) * speed;
				positions[i3 + 2] += (dz / length) * speed;
			}
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
			<ParticleSystem />
		</Canvas>
	);
};

export default function CursorChasingParticles() {
	return (
		<div style={{ width: "100vw", height: "100vh" }}>
			<Scene />
		</div>
	);
}
