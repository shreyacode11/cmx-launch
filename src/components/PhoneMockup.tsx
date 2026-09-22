import React from "react";
import { Img, interpolate, spring, staticFile, useCurrentFrame, useVideoConfig } from "remotion";
import { BRAND } from "../theme";

export const PhoneMockup: React.FC<{
  children?: React.ReactNode;
  /** staticFile-relative path to a real screenshot, e.g. "features/task-board.jpg".
   *  When set, this renders full-bleed inside the phone instead of `children`. */
  image?: string;
  tilt?: number;
  width?: number;
  height?: number;
  /** Tilt-in / settle / gentle float entrance, matching the promogen.app reference clips.
   *  Uses the Sequence-local frame, so just drop it in — no extra wiring needed. */
  animateIn?: boolean;
}> = ({ children, image, tilt = 10, width = 460, height = 940, animateIn = false }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const settle = animateIn
    ? spring({ frame, fps, config: { damping: 14, stiffness: 90, mass: 0.9 } })
    : 1;

  const idleFloat = animateIn ? Math.sin(frame / 18) * 5 : 0;

  const dynamicTilt = animateIn ? interpolate(settle, [0, 1], [38, tilt]) : tilt;
  const dynamicRotateX = animateIn ? interpolate(settle, [0, 1], [-10, 4]) : 4;
  const dynamicY = animateIn ? interpolate(settle, [0, 1], [90, 0]) + idleFloat : 0;
  const dynamicScale = animateIn ? interpolate(settle, [0, 1], [0.86, 1]) : 1;
  const dynamicOpacity = animateIn ? interpolate(frame, [0, 12], [0, 1], { extrapolateRight: "clamp" }) : 1;

  return (
    <div
      style={{
        perspective: 1600,
      }}
    >
      <div
        style={{
          width,
          height,
          borderRadius: 54,
          background: "#0B0F1C",
          border: "5px solid rgba(255,255,255,0.10)",
          boxShadow:
            "0 50px 120px rgba(0,0,0,0.6), 0 0 0 1px rgba(47,95,255,0.18), 0 0 90px rgba(47,95,255,0.18)",
          position: "relative",
          overflow: "hidden",
          opacity: dynamicOpacity,
          transform: `translateY(${dynamicY}px) scale(${dynamicScale}) rotateY(${dynamicTilt}deg) rotateX(${dynamicRotateX}deg)`,
          transformStyle: "preserve-3d",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 18,
            left: "50%",
            transform: "translateX(-50%)",
            width: 130,
            height: 24,
            borderRadius: 16,
            background: "#050710",
            zIndex: 6,
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 10,
            borderRadius: 44,
            background: BRAND.lightBg,
            overflow: "hidden",
          }}
        >
          {image ? (
            <Img
              src={staticFile(image)}
              style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top" }}
            />
          ) : (
            children
          )}
        </div>
        {/* glass reflection sweep */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(115deg, rgba(255,255,255,0.16) 0%, rgba(255,255,255,0) 22%, rgba(255,255,255,0) 78%, rgba(255,255,255,0.08) 100%)",
            pointerEvents: "none",
          }}
        />
      </div>
    </div>
  );
};
