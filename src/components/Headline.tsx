import React from "react";
import { spring, useCurrentFrame, useVideoConfig } from "remotion";
import { FONT_DISPLAY } from "../fonts";
import { CANVAS } from "../theme";

export const Headline: React.FC<{
  text: string;
  delay?: number;
  size?: number;
  gradient?: boolean;
  maxWidth?: number;
}> = ({ text, delay = 0, size = 76, gradient = false, maxWidth = 1100 }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const words = text.split(" ");

  return (
    <div
      style={{
        width: "100%",
        maxWidth,
        margin: "0 auto",
        textAlign: "center",
        fontFamily: FONT_DISPLAY,
        fontWeight: 800,
        fontSize: size,
        letterSpacing: "-0.02em",
        lineHeight: 1.08,
        color: "#fff",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        rowGap: 6,
      }}
    >
      {words.map((w, i) => {
        const local = Math.max(0, frame - delay - i * 3);
        const s = spring({ frame: local, fps, config: { damping: 12, stiffness: 160, mass: 0.6 } });
        const opacity = Math.min(1, local / 6);
        return (
          <span
            key={i}
            style={{
              display: "inline-block",
              marginRight: 18,
              opacity,
              transform: `translateY(${(1 - s) * 30}px) scale(${0.9 + s * 0.1})`,
              background: gradient
                ? `linear-gradient(90deg, #fff, ${CANVAS.amberGlow})`
                : undefined,
              WebkitBackgroundClip: gradient ? "text" : undefined,
              WebkitTextFillColor: gradient ? "transparent" : undefined,
            }}
          >
            {w}
          </span>
        );
      })}
    </div>
  );
};
