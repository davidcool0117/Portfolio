import "./Three.css";
import * as THREE from "three";
import { useState, useEffect, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useLoader } from "@react-three/fiber";
import {
    Environment,
    OrbitControls,
    Html,
    useProgress,
} from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Suspense } from "react";

function Loader() {
    const { progress } = useProgress();
    return <Html>{progress} % loaded</Html>;
}

const Model = () => {
    const group = useRef();
    const gltf = useLoader(GLTFLoader, "./gift/scene.gltf");
    const boundingBox = new THREE.Box3().setFromObject(gltf.scene);
    const center = new THREE.Vector3();
    boundingBox.getCenter(center);

    useFrame(() => {
        group.current.rotation.y += 0.01;
    });

    return (
        <group ref={group}>
            <primitive
                object={gltf.scene}
                scale={1.3}
                position={[-center.x, -center.y, -center.z]}
                rotation={[-Math.PI / 18, Math.PI / 4, 0]}
                pivot={[center.x, center.y, center.z]}
            />
        </group>
    );
};

export default function Three() {
    return (
        <div className="App Three">
            <Canvas>
                <Suspense fallback={<Loader />}>
                    <Model />
                    <OrbitControls />
                    <Environment preset="sunset" />
                </Suspense>
            </Canvas>
        </div>
    );
}
