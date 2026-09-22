// import React from "react";
// import { Composition } from "remotion";
// import { LaunchVideo } from "./LaunchVideo";

// // 65s at 30fps = 1950 frames
// const DURATION = 1950;
// const FPS = 30;

// export const Root: React.FC = () => {
//   return (
//     <>
//       <Composition
//         id="Launch16x9"
//         component={LaunchVideo}
//         durationInFrames={DURATION}
//         fps={FPS}
//         width={1920}
//         height={1080}
//         defaultProps={{ layout: "wide" as const }}
//       />
//       <Composition
//         id="Launch4x5"
//         component={LaunchVideo}
//         durationInFrames={DURATION}
//         fps={FPS}
//         width={1080}
//         height={1350}
//         defaultProps={{ layout: "feed" as const }}
//       />
//     </>
//   );
// };
import React from "react";
import { Composition } from "remotion";
import { LaunchVideo } from "./LaunchVideo";

// 71s at 30fps = 2130 frames (69s voiceover + 2s buffer)
const DURATION = 2130;
const FPS = 30;

export const Root: React.FC = () => {
  return (
    <>
      <Composition
        id="Launch16x9"
        component={LaunchVideo}
        durationInFrames={DURATION}
        fps={FPS}
        width={1920}
        height={1080}
        defaultProps={{ layout: "wide" as const }}
      />
      <Composition
        id="Launch4x5"
        component={LaunchVideo}
        durationInFrames={DURATION}
        fps={FPS}
        width={1080}
        height={1350}
        defaultProps={{ layout: "feed" as const }}
      />
    </>
  );
};