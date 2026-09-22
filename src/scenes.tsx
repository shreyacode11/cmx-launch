// import React from "react";
// import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
// import { BRAND, CANVAS, DEMO_NAMES } from "./theme";
// import { FONT_DISPLAY, FONT_BODY } from "./fonts";
// import { Headline } from "./components/Headline";
// import { PhoneMockup } from "./components/PhoneMockup";

// const Center: React.FC<{ children: React.ReactNode }> = ({ children }) => (
//   <AbsoluteFill style={{ alignItems: "center", justifyContent: "center", padding: "6% 8%" }}>
//     {children}
//   </AbsoluteFill>
// );

// const ScreenHeader: React.FC<{ title: string }> = ({ title }) => (
//   <div style={{ fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 22, color: BRAND.text, marginBottom: 14 }}>
//     {title}
//   </div>
// );

// /* S1 — Hook: chaotic collage glitches then wipes */
// export const S1_Hook: React.FC = () => {
//   const frame = useCurrentFrame();
//   const { fps } = useVideoConfig();
//   const items = ["📊", "💬", "📝", "🛑"];
//   const wipe = spring({ frame: frame - 100, fps, config: { damping: 20, stiffness: 120 } });
//   return (
//     <AbsoluteFill>
//       <AbsoluteFill style={{ alignItems: "center", justifyContent: "center" }}>
//         {items.map((it, i) => {
//           const jitterX = Math.sin((frame + i * 12) * 0.7) * 6;
//           const jitterY = Math.cos((frame + i * 9) * 0.6) * 6;
//           const s = spring({ frame: frame - i * 6, fps, config: { damping: 8, stiffness: 200 } });
//           const positions = [
//             { x: -260, y: -160 },
//             { x: 240, y: -100 },
//             { x: -220, y: 140 },
//             { x: 200, y: 180 },
//           ];
//           return (
//             <div
//               key={i}
//               style={{
//                 position: "absolute",
//                 transform: `translate(${positions[i].x + jitterX}px, ${positions[i].y + jitterY}px) scale(${s})`,
//                 fontSize: 70,
//                 opacity: 0.85,
//               }}
//             >
//               {it}
//             </div>
//           );
//         })}
//         <Headline text="Spreadsheets. Group chats. Proxy attendance." size={58} delay={35} />
//       </AbsoluteFill>
//       {/* light-sweep wipe */}
//       <AbsoluteFill
//         style={{
//           background: `linear-gradient(100deg, transparent 0%, rgba(255,255,255,0.9) 50%, transparent 100%)`,
//           transform: `translateX(${(wipe - 1) * 0 + (1 - wipe) * 100}%)`,
//           opacity: wipe > 0 && wipe < 1 ? 1 : 0,
//         }}
//       />
//       <AbsoluteFill
//         style={{
//           background: CANVAS.navyDeep,
//           opacity: wipe,
//         }}
//       />
//     </AbsoluteFill>
//   );
// };

// /* S2 — Logo reveal */
// export const S2_Logo: React.FC = () => {
//   const frame = useCurrentFrame();
//   const { fps } = useVideoConfig();
//   const s = spring({ frame, fps, config: { damping: 13, stiffness: 130 } });
//   const flash = interpolate(frame, [8, 14, 24], [0, 0.7, 0], { extrapolateRight: "clamp" });
//   return (
//     <Center>
//       <AbsoluteFill style={{ background: "#fff", opacity: flash }} />
//       <div
//         style={{
//           width: 120,
//           height: 120,
//           borderRadius: 32,
//           background: CANVAS.gradient,
//           marginBottom: 36,
//           transform: `scale(${0.7 + s * 0.3})`,
//           boxShadow: "0 20px 60px rgba(47,95,255,0.5)",
//         }}
//       />
//       <div
//         style={{
//           fontFamily: FONT_DISPLAY,
//           fontWeight: 800,
//           fontSize: 58,
//           color: "#fff",
//           textAlign: "center",
//           transform: `scale(${0.85 + s * 0.15})`,
//         }}
//       >
//         Code Morphicx <span style={{ color: BRAND.secondaryBlue }}>InternXpert</span>
//       </div>
//       <div style={{ marginTop: 60 }}>
//         <Headline text="Manage less. Mentor more." size={40} delay={40} gradient />
//       </div>
//     </Center>
//   );
// };

// /* S3 — Four roles */
// export const S3_Roles: React.FC = () => {
//   const frame = useCurrentFrame();
//   const { fps } = useVideoConfig();
//   const roles = [
//     { label: "Intern", sub: "Student access" },
//     { label: "Mentor", sub: "Mentor Portal" },
//     { label: "HR", sub: "HR Dashboard" },
//     { label: "Admin", sub: "Control Center" },
//   ];
//   return (
//     <AbsoluteFill style={{ alignItems: "center", justifyContent: "center" }}>
//       <div style={{ marginBottom: 40 }}>
//         <Headline text="One app. Four roles." size={54} />
//       </div>
//       <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
//         {roles.map((r, i) => {
//           const local = frame - 25 - i * 8;
//           const s = spring({ frame: local, fps, config: { damping: 13, stiffness: 150 } });
//           return (
//             <div
//               key={r.label}
//               style={{
//                 width: 260,
//                 height: 170,
//                 borderRadius: 20,
//                 background: "rgba(255,255,255,0.06)",
//                 border: "1px solid rgba(255,255,255,0.14)",
//                 backdropFilter: "blur(6px)",
//                 display: "flex",
//                 flexDirection: "column",
//                 alignItems: "center",
//                 justifyContent: "center",
//                 gap: 8,
//                 transform: `translateY(${(1 - s) * 40}px) scale(${s})`,
//                 opacity: s,
//               }}
//             >
//               <div style={{ fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 26, color: "#fff" }}>
//                 {r.label}
//               </div>
//               <div style={{ fontFamily: FONT_BODY, fontSize: 15, color: "rgba(255,255,255,0.6)" }}>
//                 {r.sub}
//               </div>
//             </div>
//           );
//         })}
//       </div>
//     </AbsoluteFill>
//   );
// };

// /* S4 — Attendance hero (real Face Liveness Verification screen) */
// export const S4_Attendance: React.FC = () => {
//   const frame = useCurrentFrame();
//   const { fps } = useVideoConfig();
//   const attendanceGeoLocationBadges = ["📸", "📍", "🗺️", "🧭", "📡", "🛰️"];
//   const positions = [
//     { x: -360, y: -180 },
//     { x: 360, y: -160 },
//     { x: -400, y: 60 },
//     { x: 400, y: 40 },
//     { x: -340, y: 220 },
//     { x: 340, y: 210 },
//   ];
//   return (
//     <AbsoluteFill style={{ alignItems: "center", justifyContent: "center" }}>
//       <div style={{ transform: "scale(0.72)" }}>
//         <PhoneMockup image="features/face-verify.jpg" animateIn />
//       </div>
//       <div style={{ position: "absolute", top: "12%" }}>
//         <Headline text="Proxy-proof. Audit-ready." size={54} />
//       </div>
//     </AbsoluteFill>
//   );
// };

// /* S5 — Tasks & mentoring (real Objectives & Task Board screen) */
// export const S5_Tasks: React.FC = () => {
//   const frame = useCurrentFrame();
//   const { fps } = useVideoConfig();
//   const taskBoardBadges = ["📋", "✅", "🗂️", "📌", "🧩", "🚀"];
//   const positions = [
//     { x: -360, y: -180 },
//     { x: 360, y: -160 },
//     { x: -400, y: 60 },
//     { x: 400, y: 40 },
//     { x: -340, y: 220 },
//     { x: 340, y: 210 },
//   ];
  
//   return (
//     <AbsoluteFill style={{ alignItems: "center", justifyContent: "center" }}>
//       <div style={{ transform: "scale(0.72)" }}>
//         <PhoneMockup image="features/task-board.jpg" animateIn />
//       </div>
//       <div style={{ position: "absolute", top: "12%" }}>
//         <Headline text="Assign. Review. Grow." size={54} />
//       </div>
//     </AbsoluteFill>
//   );
// };

// /* S6 — Gamification (real Verified Skill Cloud + Badges screen, badges float around it) */
// export const S6_Gamify: React.FC = () => {
//   const frame = useCurrentFrame();
//   const { fps } = useVideoConfig();
//   const badges = ["🔥", "🌅", "⭐", "🤝", "✅", "🏅"];
//   const positions = [
//     { x: -360, y: -180 },
//     { x: 360, y: -160 },
//     { x: -400, y: 60 },
//     { x: 400, y: 40 },
//     { x: -340, y: 220 },
//     { x: 340, y: 210 },
//   ];
//   return (
//     <AbsoluteFill style={{ alignItems: "center", justifyContent: "center" }}>
//       <div style={{ position: "absolute", top: "8%" }}>
//         <Headline text="Progress that feels like momentum." size={46} />
//       </div>
//       {badges.map((b, i) => {
//         const local = frame - i * 5;
//         const s = spring({ frame: local, fps, config: { damping: 7, stiffness: 220 } });
//         return (
//           <div
//             key={i}
//             style={{
//               position: "absolute",
//               transform: `translate(${positions[i].x}px, ${positions[i].y}px) scale(${s})`,
//               width: 64,
//               height: 64,
//               borderRadius: "50%",
//               background: `radial-gradient(circle, ${CANVAS.amberGlow}55, transparent 70%)`,
//               display: "flex",
//               alignItems: "center",
//               justifyContent: "center",
//               fontSize: 30,
//             }}
//           >
//             {b}
//           </div>
//         );
//       })}
//       <div style={{ transform: "scale(0.6)" }}>
//         <PhoneMockup image="features/skill-cloud.jpg" animateIn />
//       </div>
//     </AbsoluteFill>
//   );
// };

// /* S7 — Certificates (real Certificate of Completion screen) */
// export const S7_Certificates: React.FC = () => {
//   const frame = useCurrentFrame();
//   const { fps } = useVideoConfig();
//   const certificateGenerationBadges = ["📜", "🎓", "🏆", "🖋️", "🎖️", "📄"];
//   const positions = [
//     { x: -360, y: -180 },
//     { x: 360, y: -160 },
//     { x: -400, y: 60 },
//     { x: 400, y: 40 },
//     { x: -340, y: 220 },
//     { x: 340, y: 210 },
//   ];
//   return (
//     <AbsoluteFill style={{ alignItems: "center", justifyContent: "center" }}>
//       <div style={{ position: "absolute", top: "10%" }}>
//         <Headline text="Verified certificates. In seconds." size={48} />
//       </div>
//       <div style={{ transform: "scale(0.72)" }}>
//         <PhoneMockup image="features/certificates.jpg" animateIn />
//       </div>
//     </AbsoluteFill>
//   );
// };

// /* S8 — Bento montage */
// export const S8_Bento: React.FC = () => {
//   const frame = useCurrentFrame();
//   const { fps } = useVideoConfig();
//   const items = [
//     "Document verification",
// "Sign-up approvals",
// "Live org telemetry",
// "CSV export",
// "Push notifications",
// "Offline sync",
// "Google sign-in",
// "Role-based access control",
// "Audit logs",
//   ];
//   return (
//     <AbsoluteFill style={{ alignItems: "center", justifyContent: "center" }}>
//       <div style={{ marginBottom: 30 }}>
//         <Headline text="Built for the whole program." size={48} />
//       </div>
//       <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 14, maxWidth: 760 }}>
//         {items.map((it, i) => {
//           const local = frame - i * 5;
//           const s = spring({ frame: local, fps, config: { damping: 12, stiffness: 200 } });
//           return (
//             <div
//               key={it}
//               style={{
//                 width: 220,
//                 height: 90,
//                 borderRadius: 14,
//                 background: "rgba(255,255,255,0.06)",
//                 border: "1px solid rgba(255,255,255,0.12)",
//                 display: "flex",
//                 alignItems: "center",
//                 justifyContent: "center",
//                 textAlign: "center",
//                 padding: 10,
//                 fontFamily: FONT_BODY,
//                 fontSize: 14,
//                 color: "#fff",
//                 transform: `scale(${s})`,
//                 opacity: s,
//               }}
//             >
//               {it}
//             </div>
//           );
//         })}
//       </div>
//     </AbsoluteFill>
//   );
// };

// /* S9 — Close and CTA */
// export const S9_CTA: React.FC = () => {
//   const frame = useCurrentFrame();
//   const glow = interpolate(frame % 40, [0, 20, 40], [0.4, 1, 0.4]);
//   return (
//     <Center>
//       <div style={{ fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 60, color: "#fff", textAlign: "center" }}>
//         Code Morphicx <span style={{ color: BRAND.secondaryBlue }}>InternXpert</span>
//       </div>
//       <div style={{ marginTop: 16, marginBottom: 34 }}>
//         <Headline text="Manage less. Mentor more." size={34} gradient />
//       </div>
//       <div
//         style={{
//           padding: "18px 46px",
//           borderRadius: 50,
//           background: CANVAS.gradient,
//           color: "#fff",
//           fontFamily: FONT_DISPLAY,
//           fontWeight: 700,
//           fontSize: 24,
//           boxShadow: `0 0 ${36 * glow}px ${BRAND.primaryBlue}`,
//         }}
//       >
//         {/* PLACEHOLDER — confirm real CTA/link before final render */}
//         Now live on Google Play
//       </div>
//       <div style={{ marginTop: 24, fontFamily: FONT_BODY, fontSize: 16, color: "rgba(255,255,255,0.5)" }}>
//         Code Morphicx EdTech
//       </div>
//     </Center>
//   );
// };
import React from "react";
import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig ,staticFile,Img} from "remotion";
import { BRAND, CANVAS } from "./theme";
import { FONT_DISPLAY, FONT_BODY } from "./fonts";
import { Headline } from "./components/Headline";
import { PhoneMockup } from "./components/PhoneMockup";

const Center: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <AbsoluteFill style={{ alignItems: "center", justifyContent: "center", padding: "6% 8%" }}>
    {children}
  </AbsoluteFill>
);

const BADGE_POSITIONS = [
  { x: -360, y: -180 },
  { x: 360, y: -160 },
  { x: -400, y: 60 },
  { x: 400, y: 40 },
  { x: -340, y: 220 },
  { x: 340, y: 210 },
];

/* Shared floating-badge ring used by S4, S5, S6, S7 */
const FloatingBadges: React.FC<{ badges: string[] }> = ({ badges }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  return (
    <>
      {badges.map((b, i) => {
        const local = frame - i * 5;
        const s = spring({ frame: local, fps, config: { damping: 7, stiffness: 220 } });
        return (
          <div
            key={i}
            style={{
              position: "absolute",
              transform: `translate(${BADGE_POSITIONS[i].x}px, ${BADGE_POSITIONS[i].y}px) scale(${s})`,
              width: 64,
              height: 64,
              borderRadius: "50%",
              background: `radial-gradient(circle, ${CANVAS.amberGlow}55, transparent 70%)`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 30,
            }}
          >
            {b}
          </div>
        );
      })}
    </>
  );
};

/* S1 — Hook: chaotic collage glitches then wipes */
export const S1_Hook: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const items = ["📊", "💬", "📝", "🛑"];
  const wipe = spring({ frame: frame - 100, fps, config: { damping: 20, stiffness: 120 } });
  return (
    <AbsoluteFill>
      <AbsoluteFill style={{ alignItems: "center", justifyContent: "center" }}>
        {items.map((it, i) => {
          const jitterX = Math.sin((frame + i * 12) * 0.7) * 6;
          const jitterY = Math.cos((frame + i * 9) * 0.6) * 6;
          const s = spring({ frame: frame - i * 6, fps, config: { damping: 8, stiffness: 200 } });
          const positions = [
            { x: -260, y: -160 },
            { x: 240, y: -100 },
            { x: -220, y: 140 },
            { x: 200, y: 180 },
          ];
          return (
            <div
              key={i}
              style={{
                position: "absolute",
                transform: `translate(${positions[i].x + jitterX}px, ${positions[i].y + jitterY}px) scale(${s})`,
                fontSize: 70,
                opacity: 0.85,
              }}
            >
              {it}
            </div>
          );
        })}
        <Headline text="Spreadsheets. Group chats. Proxy attendance." size={58} delay={35} />
      </AbsoluteFill>
      {/* light-sweep wipe */}
      <AbsoluteFill
        style={{
          background: `linear-gradient(100deg, transparent 0%, rgba(255,255,255,0.9) 50%, transparent 100%)`,
          transform: `translateX(${(wipe - 1) * 0 + (1 - wipe) * 100}%)`,
          opacity: wipe > 0 && wipe < 1 ? 1 : 0,
        }}
      />
      <AbsoluteFill
        style={{
          background: CANVAS.navyDeep,
          opacity: wipe,
        }}
      />
    </AbsoluteFill>
  );
};



/* S2 — Logo reveal */
export const S2_Logo: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const s = spring({ frame, fps, config: { damping: 13, stiffness: 130 } });
  const flash = interpolate(frame, [8, 14, 24], [0, 0.7, 0], { extrapolateRight: "clamp" });
  return (
    <Center>
      <AbsoluteFill style={{ background: "#fff", opacity: flash }} />
      <Img
        src={staticFile("features/logo.png")}
        style={{
          width: 160,
          height: 160,
          borderRadius: 32,
          marginBottom: 36,
          transform: `scale(${0.7 + s * 0.3})`,
          boxShadow: "0 20px 60px rgba(47,95,255,0.5)",
          objectFit: "contain",
        }}
      />
      <div
        style={{
          fontFamily: FONT_DISPLAY,
          fontWeight: 800,
          fontSize: 58,
          color: "#fff",
          textAlign: "center",
          transform: `scale(${0.85 + s * 0.15})`,
        }}
      >
        Code Morphicx <span style={{ color: BRAND.secondaryBlue }}>InternXpert</span>
      </div>
      <div style={{ marginTop: 60 }}>
        <Headline text="Manage less. Mentor more." size={40} delay={40} gradient />
      </div>
    </Center>
  );
};

/* S3 — Four roles */
export const S3_Roles: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const roles = [
    { label: "Intern", sub: "Student access" },
    { label: "Mentor", sub: "Mentor Portal" },
    { label: "HR", sub: "HR Dashboard" },
    { label: "Admin", sub: "Control Center" },
  ];
  return (
    <AbsoluteFill style={{ alignItems: "center", justifyContent: "center" }}>
      <div style={{ marginBottom: 40 }}>
        <Headline text="One app. Four roles." size={54} />
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
        {roles.map((r, i) => {
          const local = frame - 25 - i * 8;
          const s = spring({ frame: local, fps, config: { damping: 13, stiffness: 150 } });
          return (
            <div
              key={r.label}
              style={{
                width: 260,
                height: 170,
                borderRadius: 20,
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.14)",
                backdropFilter: "blur(6px)",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: 8,
                transform: `translateY(${(1 - s) * 40}px) scale(${s})`,
                opacity: s,
              }}
            >
              <div style={{ fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 26, color: "#fff" }}>
                {r.label}
              </div>
              <div style={{ fontFamily: FONT_BODY, fontSize: 15, color: "rgba(255,255,255,0.6)" }}>
                {r.sub}
              </div>
            </div>
          );
        })}
      </div>
    </AbsoluteFill>
  );
};

/* S4 — Attendance hero (real Face Liveness Verification screen) */
export const S4_Attendance: React.FC = () => {
  const attendanceGeoLocationBadges = ["📸", "📍", "🗺️", "🧭", "📡", "🛰️"];
  return (
    <AbsoluteFill style={{ alignItems: "center", justifyContent: "center" }}>
      <FloatingBadges badges={attendanceGeoLocationBadges} />
      <div style={{ transform: "scale(0.72)" }}>
        <PhoneMockup image="features/face-verify.jpg" animateIn />
      </div>
      <div style={{ position: "absolute", top: "12%" }}>
        <Headline text="Proxy-proof. Audit-ready." size={54} />
      </div>
    </AbsoluteFill>
  );
};

/* S5 — Tasks & mentoring (real Objectives & Task Board screen) */
export const S5_Tasks: React.FC = () => {
  const taskBoardBadges = ["📋", "✅", "🗂️", "📌", "🧩", "🚀"];
  return (
    <AbsoluteFill style={{ alignItems: "center", justifyContent: "center" }}>
      <FloatingBadges badges={taskBoardBadges} />
      <div style={{ transform: "scale(0.72)" }}>
        <PhoneMockup image="features/task-board.jpg" animateIn />
      </div>
      <div style={{ position: "absolute", top: "12%" }}>
        <Headline text="Assign. Review. Grow." size={54} />
      </div>
    </AbsoluteFill>
  );
};

/* S6 — Gamification (real Verified Skill Cloud + Badges screen, badges float around it) */
export const S6_Gamify: React.FC = () => {
  const badges = ["🔥", "🌅", "⭐", "🤝", "✅", "🏅"];
  return (
    <AbsoluteFill style={{ alignItems: "center", justifyContent: "center" }}>
      <div style={{ position: "absolute", top: "8%" }}>
        <Headline text="Progress that feels like momentum." size={46} />
      </div>
      <FloatingBadges badges={badges} />
      <div style={{ transform: "scale(0.6)" }}>
        <PhoneMockup image="features/skill-cloud.jpg" animateIn />
      </div>
    </AbsoluteFill>
  );
};

/* S7 — Certificates (real Certificate of Completion screen) */
export const S7_Certificates: React.FC = () => {
  const certificateGenerationBadges = ["📜", "🎓", "🏆", "🖋️", "🎖️", "📄"];
  return (
    <AbsoluteFill style={{ alignItems: "center", justifyContent: "center" }}>
      <div style={{ position: "absolute", top: "10%" }}>
        <Headline text="Verified certificates. In seconds." size={48} />
      </div>
      <FloatingBadges badges={certificateGenerationBadges} />
      <div style={{ transform: "scale(0.72)" }}>
        <PhoneMockup image="features/certificates.jpg" animateIn />
      </div>
    </AbsoluteFill>
  );
};

/* S8 — Bento montage */
export const S8_Bento: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const items = [
    "Document verification",
    "Sign-up approvals",
    "Live org telemetry",
    "CSV export",
    "Push notifications",
    "Offline sync",
    "Google sign-in",
    "Role-based access control",
    "Audit logs",
  ];
  return (
    <AbsoluteFill style={{ alignItems: "center", justifyContent: "center" }}>
      <div style={{ marginBottom: 30 }}>
        <Headline text="Built for the whole program." size={48} />
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 14, maxWidth: 760 }}>
        {items.map((it, i) => {
          const local = frame - i * 5;
          const s = spring({ frame: local, fps, config: { damping: 12, stiffness: 200 } });
          return (
            <div
              key={it}
              style={{
                width: 220,
                height: 90,
                borderRadius: 14,
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.12)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
                padding: 10,
                fontFamily: FONT_BODY,
                fontSize: 14,
                color: "#fff",
                transform: `scale(${s})`,
                opacity: s,
              }}
            >
              {it}
            </div>
          );
        })}
      </div>
    </AbsoluteFill>
  );
};

/* S9 — Close and CTA */
export const S9_CTA: React.FC = () => {
  const frame = useCurrentFrame();
  const glow = interpolate(frame % 40, [0, 20, 40], [0.4, 1, 0.4]);
  return (
    <Center>
      <div style={{ fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 60, color: "#fff", textAlign: "center" }}>
        Code Morphicx <span style={{ color: BRAND.secondaryBlue }}>InternXpert</span>
      </div>
      <div style={{ marginTop: 16, marginBottom: 34 }}>
        <Headline text="Manage less. Mentor more." size={34} gradient />
      </div>
      <div
        style={{
          padding: "18px 46px",
          borderRadius: 50,
          background: CANVAS.gradient,
          color: "#fff",
          fontFamily: FONT_DISPLAY,
          fontWeight: 700,
          fontSize: 24,
          boxShadow: `0 0 ${36 * glow}px ${BRAND.primaryBlue}`,
        }}
      >
        {/* PLACEHOLDER — confirm real CTA/link before final render */}
        Coming Soon on Google Play
      </div>
      <div style={{ marginTop: 24, fontFamily: FONT_BODY, fontSize: 16, color: "rgba(255,255,255,0.5)" }}>
        Code Morphicx EdTech
      </div>
    </Center>
  );
};