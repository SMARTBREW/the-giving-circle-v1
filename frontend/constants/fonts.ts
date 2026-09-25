import { Inter, Instrument_Serif, Poppins } from "next/font/google";
import localFont from "next/font/local";

export const InterFont = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  weight: ["400", "500", "600", "700"],
});

export const InstrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-instrument-serif",
  preload: false,
});

export const PoppinsFont = Poppins({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
  variable: "--font-poppins",
  preload: false,
});

export const SatoshiBold = InterFont;

export const SegoeUI = localFont({
  src: [
    { path: "../fonts/selawk.woff2", weight: "400", style: "normal" },
    { path: "../fonts/selawksb.woff2", weight: "500", style: "normal" },
    { path: "../fonts/selawksb.woff2", weight: "600", style: "normal" },
    { path: "../fonts/selawkb.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-segoe-loaded",
  display: "swap",
  fallback: ["Segoe UI", "sans-serif"],
});
