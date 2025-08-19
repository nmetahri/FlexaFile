import { makeToolLink } from "@models/tool/tools.tsx";
import { Billboard, Text } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router";
import * as THREE from "three";

interface SingleWordProps {
  text: string;
  position: THREE.Vector3;
}

const SingleWord = ({ text, ...props }: SingleWordProps) => {
  const navigate = useNavigate();
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

  const color = new THREE.Color();

  useFrame(() => {
    if (textRef.current) {
      (textRef.current.material as THREE.MeshStandardMaterial).color.lerp(
        color.set(isHovered ? "#0a74da" : "#444"),
        0.1
      );
    }
  });

  const fontProperties = {
    font: "/Inter-Bold.woff",
    fontSize: 4,
    letterSpacing: -0.05,
    lineHeight: 1,
    "material-toneMapped": false
  };

  return (
    <Billboard {...props}>
      <Text
        ref={textRef}
        onPointerOver={handlePointerOver}
        onPointerOut={handlePointerOut}
        onClick={() => navigate(makeToolLink(text))}
        {...fontProperties}
      >
        {text}
      </Text>
    </Billboard>
  );
};

export default SingleWord;
