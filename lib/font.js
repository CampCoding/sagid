import { Saira, Nunito_Sans, Markazi_Text } from "next/font/google";

export const nunitoSans = Nunito_Sans({
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--saged-font",
  display: "swap",
});
export const saira = Saira({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--saged-font-two",
  display: "swap",
});

export const markazi = Markazi_Text({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-markazi",
});
