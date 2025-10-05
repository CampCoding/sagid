"use client";

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
import axios from "axios";
import { base_url } from "../utils/base_url";
import { useEffect, useState } from "react";
import { toast } from "../components/ui/Toast";
import Doctors from "../components/sections/home3/Doctors";

export default function Home() {
  const [homeData, setHomeData] = useState([]);
  const [loading, setLoading] = useState(true);

  const getHome = async () => {
    setLoading(true);
    try {
      const res = await axios.get(`${base_url}homepage/select_home.php`);

      if (res.data.status == "success") {
        setHomeData(res.data?.message);
      } else {
        toast.error("Something went wrong");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getHome();
  }, []);

  return (
    <div>
      <Layout headerStyle={3} footerStyle={3}>
        <Banner banners={homeData?.banners} />
        {/* <Features /> */}
        <div className=" !relative  mt-[100vh] !z-50   ">
          <Services services={homeData?.services} />
          <About about={homeData?.about} />
          <Welcome welcome={homeData?.welcome} />
          {/* <Skill /> */}
          <Skills_Expertise highlights={homeData?.highlights} />
          <Doctors doctors={homeData?.doctors} />
          <Funfact stats={homeData?.stats} />
          <Testimonial testimonials={homeData?.testimonials} />
          <Process workflow={homeData?.workflow} />
          {/* <Brand /> */}
          <Contact />

          {/* <Blog /> */}
        </div>
      </Layout>
    </div>
  );
}
