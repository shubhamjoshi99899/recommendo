import React from "react";
import dynamic from "next/dynamic";

const WordCloud = dynamic(() => import("react-d3-cloud"), { ssr: false });

const data = [
  { text: "Hey", value: 1000 },
  { text: "lol", value: 200 },
  { text: "first", value: 200 },
  { text: "very", value: 10000 },
  { text: "duck", value: 10 },
];
const fontSizeMapper = (word: any) => Math.log2(word.value) * 1 + 20; // Increase font size scaling
const rotate = () => 0; // Keep words horizontal
const padding = 5; // Adjust padding to prevent words from being too close

interface Props {
  words: any;
}
const WordCloudComponent: React.FC<Props> = ({ words }) => {
  return (
    <div style={{ width: "100%", height: "500px", position: "relative" }}>
      <div
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          zIndex: 1,
        }}
      >
        <WordCloud
          data={words}
          font="sans-serif"
          fontSize={fontSizeMapper}
          rotate={rotate}
          padding={padding}
          fill={(word: any) => {
            const colors = ["#A1C181", "#FCCA46", "#619B8A", "#3D348B"];
            return colors[Math.floor(Math.random() * colors.length)];
          }}
          width={800}
          height={400}
        />
      </div>
    </div>
  );
};

export default WordCloudComponent;
