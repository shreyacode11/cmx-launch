// Line-level VO timing (seconds). True word-level timestamps would need an
// STT pass (e.g. Whisper) against the final recorded VO — not available in
// this environment, so captions render per-line rather than per-word.
export const VO_LINES: { start: number; end: number; text: string }[] = [
  { start: 0, end: 5, text: "Running an internship program shouldn't feel like chasing spreadsheets." },
  { start: 5, end: 11, text: "Meet Code Morphicx InternXpert — the all-in-one platform that takes interns from day one to certified." },
  { start: 11, end: 19, text: "One app. Four roles. Interns, mentors, HR and admins — each with a dashboard built for how they work." },
  { start: 19, end: 30, text: "Attendance that can't be faked: scan the QR, get verified by location, and confirm with a live face scan." },
  { start: 30, end: 38, text: "Assign objectives, set the rubric, review submissions, and give feedback — all in one place. Schedule live classes in a tap." },
  { start: 38, end: 46, text: "Keep interns hungry with points, streaks, badges, and a leaderboard that turns progress into momentum." },
  { start: 46, end: 54, text: "When the work is done, generate verified certificates — beautifully designed, in bulk, in seconds." },
  { start: 54, end: 59, text: "With real-time notifications, audit trails and offline sync, nothing slips through the cracks." },
  { start: 59, end: 69, text: "Code Morphicx InternXpert. Manage less. Mentor more. Coming Soon." },
];
