import Layout from "@/components/layout/Layout";
import About from "@/components/sections/home3/About";
import Banner from "@/components/sections/home3/Banner";
import Services from "@/components/sections/home3/Services";
import Blog from "@/components/sections/home3/Blog";
import Testimonial from "@/components/sections/home3/Testimonial";
import Features from "@/components/sections/home3/Features";
import Welcome from "@/components/sections/home3/Welcome";
import Skill from "@/components/sections/home3/Skill";
import Process from "@/components/sections/home3/Process";
import Brand from "@/components/sections/home3/Brand";
import Contact from "@/components/sections/home3/Contact";
import Funfact from "@/components/sections/home3/Funfacts";
import Skills_Expertise from "../components/sharedSections/Skills_Expertise";
import BeforeAndAfter from "./before-and-after/page";
import WhatsAppButton from "@/components/whatsappButton/WhatsAppButton";

export default function Home() {
  return (
    <div>
      <Layout headerStyle={3} footerStyle={3}>
        <Banner />
        {/* <Features /> */}
        <div className=" !relative  mt-[100vh] !z-50   ">
          <Services />
          <About />
          <Welcome />
          {/* <Skill /> */}
          <Skills_Expertise />
          <Funfact />
          <Testimonial />
          <Process />
          {/* <Brand /> */}
          <Contact />
          {/* <Blog /> */}
        </div>
      </Layout>
    </div>
  );
}
