import "./Three.css";
import * as THREE from "three";
import { useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
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
    const gltf = useLoader(GLTFLoader, "./gift/scene.gltf");
    const boundingBox = new THREE.Box3().setFromObject(gltf.scene);
    const center = new THREE.Vector3();
    boundingBox.getCenter(center);
    return (
        <primitive
            object={gltf.scene}
            scale={1.3}
            rotation={[-Math.PI / 18 + 0.7, Math.PI / 4, 0]}
            position={[-center.x, -center.y - 0.2, -center.z]}
        />

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
