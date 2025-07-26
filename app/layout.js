import "@/node_modules/react-modal-video/css/modal-video.css";
import "public/assets/css/fixnix.css";
import "swiper/css";
// import "swiper/css/navigation"
import "swiper/css/pagination";
import "swiper/css/free-mode";
import { saira, nunitoSans } from "@/lib/font";
import { Providers } from "./providers";
import AnimateCursor from "../components/common/AnimateCursor";
import { markazi } from "@/lib/font";
import WhatsAppButton from "@/components/whatsappButton/WhatsAppButton";
export const metadata = {
  title: "True Smile",
  description: "True Smile Dental Clinic",
};

export default function RootLayout({ children }) {
  // Markazi font

  return (
    <html lang="ar" dir="rtl" className={`${markazi.variable}`}>
      <body className="">
        <Providers>
          {children}
          <WhatsAppButton />
        </Providers>
      </body>
    </html>
  );
}
