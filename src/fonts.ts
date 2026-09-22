import { loadFont as loadJakarta } from "@remotion/google-fonts/PlusJakartaSans";
import { loadFont as loadInter } from "@remotion/google-fonts/Inter";

const jakarta = loadJakarta("normal", { weights: ["800"] });
const inter = loadInter("normal", { weights: ["500", "600"] });

export const FONT_DISPLAY = jakarta.fontFamily;
export const FONT_BODY = inter.fontFamily;
