"use client"; // Add this line at the top

import Head from "next/head";
import Init from "./components/init";
import { useEffect } from "react";

export default function Main() {
  useEffect(() => {
    console.log("Main component mounted"); // Debug log
  }, []);

  return (
    <>
      <Head>
        <title>Swyber Legends</title>
      </Head>
      <div className="w-full h-screen bg-gray-700 flex justify-center items-center">
        <div
          id="game-container"
          className="game-container h-56 relative border-2 rounded-md scale-300 translate-y-2/4"
        >
          <canvas id="game-canvas" className="w-full"></canvas>
        </div>
      </div>
      <Init /> {/* Ensure Init is called here */}
    </>
  );
}
