"use client";
import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import Webcam from "react-webcam";
import WordCloudComponent from "./WordCloud";
import Image from "next/image";

interface Responses {
  [key: string]: number;
}

interface Participant {
  id: number;
  image: string;
  name: string;
  option: string;
  size: number;
  position: { top: number; left: number };
}

export default function Survey() {
  const [responses, setResponses] = useState<Responses>({});
  const [participants, setParticipants] = useState<Participant[]>([]);
  const [step, setStep] = useState<"home" | "participate" | "survey">("home");
  const [name, setName] = useState("");
  const [capturedImage, setCapturedImage] = useState<string | null>(null);
  const webcamRef = useRef<Webcam>(null);

  const options = [
    "Happy",
    "Sad",
    "Excited",
    "Lonely",
    "Nervous",
    "Confident",
    "Relaxed",
    "Angry",
    "Surprised",
    "Motivated",
  ];

  useEffect(() => {
    setResponses(JSON.parse(localStorage.getItem("surveyResponses") || "{}"));
    setParticipants(
      JSON.parse(localStorage.getItem("surveyParticipants") || "[]")
    );
  }, []);

  const capture = () => {
    if (webcamRef.current) {
      const imageSrc = webcamRef.current.getScreenshot();
      setCapturedImage(imageSrc);
    }
  };

  const saveParticipant = () => {
    if (capturedImage && name.trim()) {
      setStep("survey");
    }
  };

  const handleVote = (option: string) => {
    if (!capturedImage || !name.trim()) return;

    const newParticipant: Participant = {
      id: Date.now(),
      image: capturedImage,
      name,
      option,
      size: Math.random() * 80 + 40,
      position: { top: Math.random() * 70 + 10, left: Math.random() * 70 + 10 },
    };

    const updatedParticipants = [...participants, newParticipant];
    setParticipants(updatedParticipants);
    localStorage.setItem(
      "surveyParticipants",
      JSON.stringify(updatedParticipants)
    );

    const updatedResponses = {
      ...responses,
      [option]: (responses[option] || 0) + 1,
    };
    setResponses(updatedResponses);
    localStorage.setItem("surveyResponses", JSON.stringify(updatedResponses));

    setStep("home");
    setCapturedImage(null);
    setName("");
  };

  const words = options.map((option) => ({
    text: option,
    value: responses[option] || 1000,
  }));

  return (
    <div className="relative w-full h-screen flex items-center  bg-opacity-50 justify-center text-white overflow-hidden">
      <div className="relative w-full h-screen flex items-center justify-center text-white overflow-hidden">
        {/* Dark Overlay with Reduced Opacity */}

        {/* Background Image with Horizontal Scroll Animation */}
        <div className="absolute inset-0 img-background-horizontal after:content-[''] after:absolute after:inset-0 after:bg-white after:opacity-20"></div>

        {/* Content */}

        <style jsx>{`
          .img-background-horizontal {
            background-image: url("https://cdn.pixabay.com/photo/2020/12/18/15/29/mountains-5842346_1280.jpg");
            background-position: 0% 0%;
            height: 100vh;
            background-size: cover;
            width: 100vw;
            animation: horizontalMove 50s infinite;
            animation-timing-function: ease;
            position: relative;
            opacity: 0.6;
            background-repeat: no-repeat;
          }

          .img-background-horizontal::after {
            content: "";
            position: absolute;
            inset: 0;
            background: rgba(
              255,
              255,
              255,
              0.2
            ); /* Reducing opacity by adding white transparent layer */
          }

          @keyframes horizontalMove {
            0% {
              background-position: 0% 0%;
            }
            50% {
              background-position: 100% 20%;
            }
            100% {
              background-position: 0% 0%;
            }
          }
        `}</style>
      </div>

      {participants.map((p) => (
        <motion.img
          key={p.id}
          src={p.image}
          alt={p.name}
          className="absolute rounded-full border-4 border-white shadow-lg"
          style={{
            width: p.size,
            height: p.size,
            top: `${p.position.top}%`,
            left: `${p.position.left}%`,
            zIndex: 1,
          }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        />
      ))}

      {step === "home" && (
        <div
          className="absolute inset-0 flex flex-col items-center justify-center text-center"
          onClick={() => setStep("participate")}
        >
          <WordCloudComponent words={words} />
        </div>
      )}

      {step === "participate" && (
        <div className="relative z-10 flex flex-col items-center justify-center p-6 bg-white bg-opacity-90 rounded-lg shadow-xl">
          <h2 className="text-xl font-semibold text-black mb-4">
            Enter Your Name & Capture Photo
          </h2>
          <Webcam
            ref={webcamRef}
            screenshotFormat="image/jpeg"
            className="w-60 h-40 rounded-md mb-4"
          />
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="px-4 py-2 rounded-md text-black border border-gray-300 mb-4 w-full"
          />
          <button
            onClick={capture}
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 mt-4 rounded-md"
          >
            Capture Photo
          </button>
          {capturedImage && (
            <>
              <Image
                src={capturedImage}
                alt="Captured"
                width={100}
                height={100}
                className="w-24 h-24 mt-4 rounded-full"
              />
              <button
                onClick={saveParticipant}
                className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 mt-4 rounded-md"
              >
                Proceed to Survey
              </button>
            </>
          )}
        </div>
      )}

      {step === "survey" && (
        <div className="absolute z-10 flex flex-col items-center justify-center p-6 bg-black bg-opacity-80 rounded-lg shadow-xl">
          <h2 className="text-2xl font-semibold text-white mb-4">
            Select How You Feel
          </h2>
          <div className="grid grid-cols-2 gap-2">
            {options.map((option) => (
              <button
                key={option}
                onClick={() => handleVote(option)}
                className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md m-1"
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
