import React from "react";
import { AbsoluteFill, Audio, Sequence, staticFile } from "remotion";
import { Canvas } from "./components/Canvas";
import { CaptionOverlay } from "./components/CaptionOverlay";
import {
  S1_Hook,
  S2_Logo,
  S3_Roles,
  S4_Attendance,
  S5_Tasks,
  S6_Gamify,
  S7_Certificates,
  S8_Bento,
  S9_CTA,
} from "./scenes";

const SCENES: { Component: React.FC; from: number; duration: number; amber?: boolean }[] = [
  { Component: S1_Hook, from: 0, duration: 150 },
  { Component: S2_Logo, from: 150, duration: 180 },
  { Component: S3_Roles, from: 330, duration: 240 },
  { Component: S4_Attendance, from: 570, duration: 330 },
  { Component: S5_Tasks, from: 900, duration: 240 },
  { Component: S6_Gamify, from: 1140, duration: 240, amber: true },
  { Component: S7_Certificates, from: 1380, duration: 240, amber: true },
  { Component: S8_Bento, from: 1620, duration: 150 },
  { Component: S9_CTA, from: 1770, duration: 360 },
];

export const LaunchVideo: React.FC<{ layout: "wide" | "feed" }> = ({ layout }) => {
  return (
    <AbsoluteFill
      style={{
        translate: "2px 0px",
        scale: 1.028
      }}
    >
      <Canvas>
        {SCENES.map(({ Component, from, duration }, i) => (
          <Sequence key={i} from={from} durationInFrames={duration} name={Component.displayName || Component.name}>
            <Component />
          </Sequence>
        ))}
        <CaptionOverlay />
      </Canvas>

      {/* voiceover.wav generated per-paragraph and laid at correct timestamps — see log.md */}
       <Audio src={staticFile("voiceover.mp3")} />
      {/* music-mix.wav: placeholder synthesized beat, ducked under VO — swap with a licensed track */}
      <Audio src={staticFile("music-mix.mp3")} volume={0.20} />
    </AbsoluteFill>
  );
};
