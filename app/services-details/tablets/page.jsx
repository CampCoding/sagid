"use client";
import Layout from "@/components/layout/Layout";
import Link from "next/link";
import { useState } from "react";
import CounterUp from "@/components/elements/CounterUp";
import ModalVideo from "react-modal-video";
import CustomTilt from "../../../components/ui/CustomTilt";
import WhyChoose from './../../../components/sharedSections/WhyChoose';
import Faq from "../../../components/sharedSections/Faq";
import Skills_Expertise from './../../../components/sharedSections/Skills_Expertise';
export default function TabletsDetails() {
  const [isActive, setIsActive] = useState({
    status: false,
    key: 1,
  });

  const handleToggle = (key) => {
    if (isActive.key === key) {
      setIsActive({
        status: false,
      });
    } else {
      setIsActive({
        status: true,
        key,
      });
    }
  };
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <Layout headerStyle={3} footerStyle={3} breadcrumbTitle="Tablets Repair">
        {/*Fixing One Start*/}
        <section className="fixing-one">
          <div
            className="fixing-one__bg float-bob-y"
            style={{
              backgroundImage:
                "url(/assets/images/backgrounds/fixing-one-bg-img-1.png)",
            }}
          ></div>
          <div className="container">
            <div className="section-title section-title--two text-center">
              <span className="section-title__tagline">WHAT WE FIXING</span>
              <h2 className="section-title__title">Tablet Repair Solutions</h2>
              <p className="section-title__text">
                We specialize in fixing all kinds of tablet issues — from screen
                cracks to software glitches. <br /> Here’s how we can help:
              </p>
            </div>
            <div className="row">
              <div className="col-xl-4 col-lg-4">
                <div className="fixing-one__left">
                  <div className="fixing-one__img">
                    <img src="/assets/images/mobilehub/team-1-2.jpg" alt="" />
                  </div>
                </div>
              </div>
              <div className="col-xl-8 col-lg-8">
                <div className="fixing-one__right">
                  <div className="fixing-one__points-box">
                    <ul className="fixing-one__points list-unstyled">
                      <li>
                        <div className="icon">
                          <span className="icon-tap"></span>
                        </div>
                        <div className="content">
                          <h3>Touchscreen Problems</h3>
                          <p>
                            Glitchy or unresponsive screen? We’ll restore smooth
                            touch functionality.
                          </p>
                        </div>
                      </li>
                      <li>
                        <div className="icon">
                          <span className="icon-cell"></span>
                        </div>
                        <div className="content">
                          <h3>Battery Replacement</h3>
                          <p>
                            Battery drains fast or won’t hold a charge? We’ll
                            install a new one.
                          </p>
                        </div>
                      </li>
                      <li>
                        <div className="icon">
                          <span className="icon-os"></span>
                        </div>
                        <div className="content">
                          <h3>Software & OS Updates</h3>
                          <p>
                            Running slow or outdated system? We'll update and
                            optimize it.
                          </p>
                        </div>
                      </li>
                      <li>
                        <div className="icon">
                          <span className="icon-setting"></span>
                        </div>
                        <div className="content">
                          <h3>Water or Liquid Damage</h3>
                          <p>
                            Spilled on your tablet? We’ll clean and restore it
                            to full function.
                          </p>
                        </div>
                      </li>
                    </ul>
                    <ul className="fixing-one__points list-unstyled">
                      <li>
                        <div className="icon">
                          <span className="icon-smartphone-1"></span>
                        </div>
                        <div className="content">
                          <h3>Charging Port Repair</h3>
                          <p>
                            Tablet not charging or loose port? We’ll repair or
                            replace it quickly.
                          </p>
                        </div>
                      </li>
                      <li>
                        <div className="icon">
                          <span className="icon-speaker"></span>
                        </div>
                        <div className="content">
                          <h3>Speaker Malfunction</h3>
                          <p>
                            Low, crackling, or no sound at all? We'll fix your
                            audio output.
                          </p>
                        </div>
                      </li>
                      <li>
                        <div className="icon">
                          <span className="icon-headphones"></span>
                        </div>
                        <div className="content">
                          <h3>Headphone Jack Issues</h3>
                          <p>
                            No sound from headphones? We’ll fix the jack or
                            offer alternatives.
                          </p>
                        </div>
                      </li>
                      <li>
                        <div className="icon">
                          <span className="icon-nfc"></span>
                        </div>
                        <div className="content">
                          <h3>Wi-Fi / Bluetooth Problems</h3>
                          <p>
                            Connectivity issues? We’ll get your wireless
                            features back online.
                          </p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*Fixing One End*/}

        {/*Why Choose One Start*/}
       <WhyChoose />
        {/*Why Choose One End*/}

        {/*FAQ One Start*/}
       <Faq />
        {/*FAQ One End*/}

        {/*Counter One Start*/}
        <section className="counter-one">
          <div
            className="counter-one__bg jarallax"
            style={{
              backgroundImage:
                "url(/assets/images/mobilehub/counter-one-bg.jpg)",
            }}
          ></div>
          <div className="container">
            <div className="row">
              <div className="col-xl-12">
                <ul className="counter-one__list list-unstyled">
                  <li className="counter-one__single">
                    <CounterUp end={20} />
                    <span className="counter-one__plus">+</span>
                    <p className="counter-one__text">Glorious Years</p>
                  </li>
                  <li className="counter-one__single">
                    <CounterUp end={2} />
                    <span className="counter-one__plus">k+</span>
                    <p className="counter-one__text">Happy Customer</p>
                  </li>
                  <li className="counter-one__single">
                    <CounterUp end={5} />
                    <span className="counter-one__plus">k+</span>
                    <p className="counter-one__text">Service Complete</p>
                  </li>
                  <li className="counter-one__single">
                    <CounterUp end={99} />
                    <span className="counter-one__plus">%</span>
                    <p className="counter-one__text">Satisfactions</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        {/*Counter One End*/}

        {/*Skill One Start*/}
      <Skills_Expertise />
        {/*Skill One End*/}
        <ModalVideo
          channel="youtube"
          autoplay
          isOpen={isOpen}
          videoId="vfhzo499OeA"
          onClose={() => setOpen(false)}
        />
      </Layout>
    </>
  );
}
