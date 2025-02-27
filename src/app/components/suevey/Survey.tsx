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
    if (capturedImage && name) {
      setStep("survey");
    }
  };

  const handleVote = (option: string) => {
    if (!capturedImage || !name) return;

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
  };

  const words = options.map((option) => ({
    text: option,
    value: responses[option] || 1000,
  }));

  return (
    <div className="relative w-full h-screen flex items-center justify-center text-white overflow-hidden">
      <div className="absolute inset-0">
        <Image
          alt="background"
          src="/background.jpg"
          className="absolute w-full h-full object-cover opacity-50"
          width={1920}
          height={1080}
        />
        <WordCloudComponent words={words} />
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
          <h2 className="text-4xl font-bold">Click Anywhere to Participate</h2>
        </div>
      )}

      {step === "participate" && (
        <div className="relative z-10 flex flex-col items-center justify-center p-6 bg-white bg-opacity-80 rounded-lg">
          <h2 className="text-2xl mb-4">Enter Your Name & Capture Photo</h2>
          <Webcam
            ref={webcamRef}
            screenshotFormat="image/jpeg"
            className="w-64 h-48 rounded-md mb-4"
          />
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="px-4 py-2 rounded-md text-black border-gray-300 mb-4"
          />
          <button
            onClick={capture}
            className="bg-blue-500 px-4 py-2 mt-4 rounded-md"
          >
            Capture Photo
          </button>
          {capturedImage && (
            <Image
              src={capturedImage}
              alt="Captured"
              width={100}
              height={100}
              className="w-24 h-24 mt-4 rounded-full"
            />
          )}
          {capturedImage && (
            <button
              onClick={saveParticipant}
              className="bg-green-500 px-4 py-2 mt-4 rounded-md"
            >
              Proceed to Survey
            </button>
          )}
        </div>
      )}

      {step === "survey" && (
        <div className="absolute z-10 flex flex-col items-center justify-center p-6 bg-black bg-opacity-80 rounded-lg">
          <h2 className="text-2xl mb-4">Select How You Feel</h2>
          <div className="grid grid-cols-2 gap-2">
            {options.map((option) => (
              <button
                key={option}
                onClick={() => handleVote(option)}
                className="bg-blue-500 px-4 py-2 rounded-md m-1"
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
