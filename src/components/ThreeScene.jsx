import React, { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial } from "@react-three/drei";
import * as THREE from "three";

const FloatingShape = ({ position, color, speed, distort, scale = 1 }) => {
    const meshRef = useRef();

    useFrame((state) => {
        if (meshRef.current) {
            meshRef.current.rotation.x = state.clock.elapsedTime * speed * 0.3;
            meshRef.current.rotation.y = state.clock.elapsedTime * speed * 0.2;
        }
    });

    return (
        <Float speed={speed} rotationIntensity={0.5} floatIntensity={1.5}>
            <mesh ref={meshRef} position={position} scale={scale}>
                <icosahedronGeometry args={[1, 1]} />
                <MeshDistortMaterial
                    color={color}
                    attach="material"
                    distort={distort}
                    speed={2}
                    roughness={0.2}
                    metalness={0.8}
                />
            </mesh>
        </Float>
    );
};

const FloatingSphere = ({ position, color, speed, scale = 1 }) => {
    const meshRef = useRef();

    useFrame((state) => {
        if (meshRef.current) {
            meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * speed) * 0.3;
        }
    });

    return (
        <Float speed={speed * 0.5} rotationIntensity={0.3} floatIntensity={1}>
            <mesh ref={meshRef} position={position} scale={scale}>
                <sphereGeometry args={[1, 32, 32]} />
                <meshStandardMaterial
                    color={color}
                    roughness={0.1}
                    metalness={0.9}
                    emissive={color}
                    emissiveIntensity={0.1}
                />
            </mesh>
        </Float>
    );
};

const FloatingTorus = ({ position, color, speed, scale = 1 }) => {
    const meshRef = useRef();

    useFrame((state) => {
        if (meshRef.current) {
            meshRef.current.rotation.x = state.clock.elapsedTime * speed * 0.5;
            meshRef.current.rotation.z = state.clock.elapsedTime * speed * 0.3;
        }
    });

    return (
        <Float speed={speed} rotationIntensity={0.8} floatIntensity={1.2}>
            <mesh ref={meshRef} position={position} scale={scale}>
                <torusGeometry args={[1, 0.4, 16, 32]} />
                <meshStandardMaterial
                    color={color}
                    roughness={0.2}
                    metalness={0.8}
                    emissive={color}
                    emissiveIntensity={0.05}
                />
            </mesh>
        </Float>
    );
};

const ParticleField = () => {
    const count = 100;
    const positions = useMemo(() => {
        const pos = new Float32Array(count * 3);
        for (let i = 0; i < count; i++) {
            pos[i * 3] = (Math.random() - 0.5) * 20;
            pos[i * 3 + 1] = (Math.random() - 0.5) * 20;
            pos[i * 3 + 2] = (Math.random() - 0.5) * 20;
        }
        return pos;
    }, []);

    const pointsRef = useRef();

    useFrame((state) => {
        if (pointsRef.current) {
            pointsRef.current.rotation.y = state.clock.elapsedTime * 0.02;
        }
    });

    return (
        <points ref={pointsRef}>
            <bufferGeometry>
                <bufferAttribute
                    attach="attributes-position"
                    count={count}
                    array={positions}
                    itemSize={3}
                />
            </bufferGeometry>
            <pointsMaterial
                size={0.05}
                color="#60a5fa"
                transparent
                opacity={0.6}
                sizeAttenuation
            />
        </points>
    );
};

const ThreeScene = () => {
    return (
        <div className="absolute inset-0 -z-10">
            <Canvas
                camera={{ position: [0, 0, 8], fov: 60 }}
                dpr={[1, 2]}
                gl={{ antialias: true, alpha: true }}
            >
                <color attach="background" args={["#111827"]} />

                {/* Lighting */}
                <ambientLight intensity={0.4} />
                <directionalLight position={[10, 10, 5]} intensity={1} color="#ffffff" />
                <pointLight position={[-10, -10, -5]} intensity={0.5} color="#3b82f6" />
                <pointLight position={[10, -10, 5]} intensity={0.3} color="#8b5cf6" />

                {/* Floating Shapes */}
                <FloatingShape
                    position={[-4, 2, -2]}
                    color="#3b82f6"
                    speed={0.8}
                    distort={0.4}
                    scale={1.2}
                />
                <FloatingShape
                    position={[4, -1, -3]}
                    color="#8b5cf6"
                    speed={0.6}
                    distort={0.3}
                    scale={0.9}
                />
                <FloatingSphere
                    position={[3, 2.5, -1]}
                    color="#06b6d4"
                    speed={1}
                    scale={0.6}
                />
                <FloatingSphere
                    position={[-3, -2, -2]}
                    color="#ec4899"
                    speed={0.7}
                    scale={0.5}
                />
                <FloatingTorus
                    position={[0, -3, -4]}
                    color="#10b981"
                    speed={0.5}
                    scale={0.8}
                />
                <FloatingTorus
                    position={[-5, 0, -5]}
                    color="#f59e0b"
                    speed={0.4}
                    scale={0.6}
                />

                {/* Particle Field */}
                <ParticleField />
            </Canvas>
        </div>
    );
};

export default ThreeScene;
