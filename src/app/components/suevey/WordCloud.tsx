import React from "react";
import dynamic from "next/dynamic";

const WordCloud = dynamic(() => import("react-d3-cloud"), { ssr: false });

const fontSizeMapper = (word: any) => Math.log2(word.value) * 5 + 40;
const rotate = () => 0;
const padding = 5;

interface Props {
  words: { text: string; value: number }[];
}

const WordCloudComponent: React.FC<Props> = ({ words }) => {
  return (
    <div className="relative w-full h-[500px]">
      <div className="absolute w-full h-full z-10">
        <WordCloud
          data={words}
          font="sans-serif"
          fontSize={fontSizeMapper}
          rotate={rotate}
          padding={padding}
          fill={(word: any) => {
            const colors = [
              "#FCCA46",
              "#386659",
              "#E63946",
              "#F4A261",
              "#2A9D8F",
              "#E76F51",
              "#264653",
            ];
            return colors[Math.floor(Math.random() * colors.length)];
          }}
          width={800}
          height={600}
        />
      </div>
    </div>
  );
};

export default WordCloudComponent;
