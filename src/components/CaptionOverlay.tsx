import React from "react";
import { useCurrentFrame, useVideoConfig, interpolate } from "remotion";
import { FONT_BODY } from "../fonts";
import { CANVAS } from "../theme";
import { VO_LINES } from "../voLines";

export const CaptionOverlay: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps, height } = useVideoConfig();
  const t = frame / fps;
  const active = VO_LINES.find((l) => t >= l.start && t < l.end);
  if (!active) return null;

  const inT = active.start * fps;
  const outT = active.end * fps;
  const opacity = interpolate(frame, [inT, inT + 6, outT - 6, outT], [0, 1, 1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <div
      style={{
        position: "absolute",
        left: "10%",
        right: "10%",
        bottom: Math.round(height * 0.1),
        textAlign: "center",
        opacity,
      }}
    >
      <span
        style={{
          fontFamily: FONT_BODY,
          fontWeight: 600,
          fontSize: 30,
          lineHeight: 1.3,
          color: "#fff",
          background: "rgba(5,8,22,0.55)",
          padding: "10px 20px",
          borderRadius: 12,
          boxDecorationBreak: "clone",
          WebkitBoxDecorationBreak: "clone",
          textShadow: `0 2px 16px rgba(47,95,255,0.4)`,
        }}
      >
        {active.text}
      </span>
    </div>
  );
};
