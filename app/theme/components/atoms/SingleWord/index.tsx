import { Billboard, Text } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";

interface SingleWordProps {
  text: string;
  position: THREE.Vector3;
}

const SingleWord = ({ text, ...props }: SingleWordProps) => {
  const color = new THREE.Color();
  const fontProperties = {
    font: "/Inter-Bold.woff",
    fontSize: 2.5,
    letterSpacing: -0.05,
    lineHeight: 1,
    "material-toneMapped": false
  };
  const textRef = useRef<THREE.Mesh>(null);
  const [isHovered, setIsHovered] = useState(false);

  const handlePointerOver = (event: React.PointerEvent) => {
    event.stopPropagation();
    setIsHovered(true);
  };
  const handlePointerOut = () => setIsHovered(false);

  useEffect(() => {
    if (isHovered) {
      document.body.style.cursor = "pointer";
      return () => {
        document.body.style.cursor = "auto";
      };
    }
    document.body.style.cursor = "auto";
    return undefined;
  }, [isHovered]);

  useFrame(() => {
    if (textRef.current) {
      (textRef.current.material as THREE.MeshStandardMaterial).color.lerp(
        color.set(isHovered ? "#fa2720" : "white"),
        0.1
      );
    }
  });

  return (
    <Billboard {...props}>
      <Text
        ref={textRef}
        onPointerOver={handlePointerOver}
        onPointerOut={handlePointerOut}
        onClick={() => console.log(`Clicked: ${text}`)}
        {...fontProperties}
      >
        {text}
      </Text>
    </Billboard>
  );
};

export default SingleWord;
