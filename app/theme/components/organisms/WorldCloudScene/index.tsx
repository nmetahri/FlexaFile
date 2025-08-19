import WordCloudDistribution from "@components/molecules/WorldCloudDistribution";
import { TrackballControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { memo, Suspense } from "react";

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
      <Suspense fallback={null}>
        <group>
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

export default memo(WordCloudScene);
