import WordCloudDistribution from "@components/molecules/WorldCloudDistribution";
import { TrackballControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";

interface WordCloudSceneProps {
  wordList?: string[];
  gridSize?: number;
  sphereRadius?: number;
}

const WordCloudScene = ({
  wordList = [],
  gridSize = 8,
  sphereRadius = 20
}: WordCloudSceneProps) => {
  return (
    <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 35], fov: 90 }}>
      <fog attach="fog" args={["#202025", 0, 80]} />
      <Suspense fallback={null}>
        <group rotation={[10, 10.5, 10]}>
          <WordCloudDistribution
            wordList={wordList}
            gridSize={gridSize}
            sphereRadius={sphereRadius}
          />
        </group>
      </Suspense>
      <TrackballControls />
    </Canvas>
  );
};

export default WordCloudScene;
