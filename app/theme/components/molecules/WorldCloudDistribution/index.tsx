import SingleWord from "@components/atoms/SingleWord";
import { useMemo } from "react";
import * as THREE from "three";

export interface WordCloudDistributionProps {
  wordList?: string[];
  gridSize?: number;
  sphereRadius?: number;
}

const WordCloudDistribution = ({
  wordList = [],
  gridSize = 4,
  sphereRadius = 20
}: WordCloudDistributionProps) => {
  const wordPositions = useMemo(() => {
    const positions: [THREE.Vector3, string][] = [];
    const sphericalCoordinates = new THREE.Spherical();
    const phiIncrement = Math.PI / (gridSize + 1);
    const thetaIncrement = (Math.PI * 2) / gridSize;
    const wordsToUse =
      wordList.length > 0 ? wordList : Array(gridSize * gridSize).fill("word");

    let wordIndex = 0;
    for (let i = 1; i < gridSize + 1; i++) {
      for (let j = 0; j < gridSize; j++) {
        const position = new THREE.Vector3().setFromSpherical(
          sphericalCoordinates.set(
            sphereRadius,
            phiIncrement * i,
            thetaIncrement * j
          )
        );
        const word = wordsToUse[wordIndex % wordsToUse.length];
        positions.push([position, word]);
        wordIndex++;
      }
    }
    return positions;
  }, [wordList, gridSize, sphereRadius]);

  return wordPositions.map(([position, word], index) => (
    <SingleWord key={index} position={position} text={word} />
  ));
};

export default WordCloudDistribution;
