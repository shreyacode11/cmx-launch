import React, { useMemo } from "react";
import { AbsoluteFill, useCurrentFrame, useVideoConfig, random } from "remotion";
import { CANVAS } from "../theme";

export const Canvas: React.FC<{ children?: React.ReactNode; amber?: boolean }> = ({
  children,
  amber,
}) => {
  const frame = useCurrentFrame();
  const { width, height, durationInFrames } = useVideoConfig();
  const t = frame / durationInFrames;
  const gx = 50 + Math.sin(t * Math.PI * 2 * 0.5) * 22;
  const gy = 40 + Math.cos(t * Math.PI * 2 * 0.35) * 18;
  const glow = amber ? CANVAS.amberGlow : "#2F5FFF";

  return (
    <AbsoluteFill style={{ backgroundColor: CANVAS.navyDeep }}>
      <AbsoluteFill
        style={{
          background: `radial-gradient(circle at ${gx}% ${gy}%, ${glow}33 0%, rgba(124,92,255,0.10) 30%, rgba(5,8,22,0) 58%)`,
        }}
      />
      <AbsoluteFill
        style={{
          background: `linear-gradient(180deg, ${CANVAS.navyDeep} 0%, ${CANVAS.navyMid} 100%)`,
          opacity: 0.5,
          mixBlendMode: "multiply",
        }}
      />
      <AbsoluteFill
        style={{
          background:
            "radial-gradient(circle at 50% 50%, rgba(0,0,0,0) 30%, rgba(0,0,0,0.5) 100%)",
        }}
      />
      <Grain width={width} height={height} />
      {children}
    </AbsoluteFill>
  );
};

const Grain: React.FC<{ width: number; height: number }> = ({ width, height }) => {
  const frame = useCurrentFrame();
  const seed = Math.floor(frame / 2);
  const dx = (random(`gx-${seed}`) - 0.5) * 6;
  const dy = (random(`gy-${seed}`) - 0.5) * 6;
  const svg = useMemo(
    () =>
      `data:image/svg+xml;utf8,${encodeURIComponent(
        `<svg xmlns='http://www.w3.org/2000/svg' width='120' height='120'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/><feColorMatrix type='matrix' values='0 0 0 0 1  0 0 0 0 1  0 0 0 0 1  0 0 0 0.07 0'/></filter><rect width='100%' height='100%' filter='url(#n)'/></svg>`
      )}`,
    []
  );
  return (
    <div
      style={{
        position: "absolute",
        top: dy,
        left: dx,
        width: width + 12,
        height: height + 12,
        backgroundImage: `url("${svg}")`,
        opacity: 0.16,
        mixBlendMode: "overlay",
      }}
    />
  );
};
