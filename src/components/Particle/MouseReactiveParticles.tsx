// @ts-nocheck
"use client";

import React, { useRef, useMemo, useEffect } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

const ParticleSystem = ({ count = 10000 }) => {
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

	const particleSizes = useMemo(
		() => new Float32Array(count).fill(0.05),
		[count]
	);
	const particleOpacities = useMemo(
		() => new Float32Array(count).fill(0),
		[count]
	);

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
		const sizes = particles.current.geometry.attributes.size.array;
		const opacities = particles.current.geometry.attributes.opacity.array;

		// Project mouse position to 3D space
		mouse.current.unproject(camera);
		const target = mouse.current.clone();
		target.sub(camera.position).normalize();
		const distance = -camera.position.z / target.z;
		mouse.current.copy(camera.position).add(target.multiplyScalar(distance));

		for (let i = 0; i < count; i++) {
			const i3 = i * 3;

			// Calculate distance to mouse
			const dx = mouse.current.x - positions[i3];
			const dy = mouse.current.y - positions[i3 + 1];
			const dz = mouse.current.z - positions[i3 + 2];
			const distanceToMouse = Math.sqrt(dx * dx + dy * dy + dz * dz);

			// Update size and opacity based on distance to mouse
			const maxDistance = 2; // Adjust this value to change the area of effect
			const scale = Math.max(0, 1 - distanceToMouse / maxDistance);
			sizes[i] = 0.05 + scale * 0.2; // Adjust these values to change min and max sizes
			opacities[i] = scale;

			// Slowly move particles
			positions[i3] += (Math.random() - 0.5) * 0.01;
			positions[i3 + 1] += (Math.random() - 0.5) * 0.01;
			positions[i3 + 2] += (Math.random() - 0.5) * 0.01;
		}

		particles.current.geometry.attributes.position.needsUpdate = true;
		particles.current.geometry.attributes.size.needsUpdate = true;
		particles.current.geometry.attributes.opacity.needsUpdate = true;
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
				<bufferAttribute
					attach="attributes-size"
					count={particleSizes.length}
					array={particleSizes}
					itemSize={1}
				/>
				<bufferAttribute
					attach="attributes-opacity"
					count={particleOpacities.length}
					array={particleOpacities}
					itemSize={1}
				/>
			</bufferGeometry>
			<pointsMaterial
				size={1}
				color="#ffffff"
				sizeAttenuation={true}
				transparent={true}
				depthWrite={false}
			/>
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

export default function MouseReactiveParticles() {
	return (
		<div style={{ width: "100vw", height: "100vh" }}>
			<Scene />
		</div>
	);
}
