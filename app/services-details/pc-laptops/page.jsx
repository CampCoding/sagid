"use client";
import Layout from "@/components/layout/Layout";
import Link from "next/link";
import { useState } from "react";
import CounterUp from "@/components/elements/CounterUp";
import ModalVideo from "react-modal-video";
import CustomTilt from "../../../components/ui/CustomTilt";
import WhyChoose from "./../../../components/sharedSections/WhyChoose";
import Faq from "../../../components/sharedSections/Faq";
import Skills_Expertise from "./../../../components/sharedSections/Skills_Expertise";
export default function PcTabletsDetails() {
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
      <Layout
        headerStyle={3}
        footerStyle={3}
        breadcrumbTitle="Pc & laptops Reapir"
      >
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
              <h2 className="section-title__title">
                PC & Laptop Repair Solutions
              </h2>
              <p className="section-title__text">
                From sluggish performance to hardware issues, <br />
                we fix all major and minor PC & laptop problems with precision
                and care:
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
                          <h3>Screen / Display Repair</h3>
                          <p>
                            Cracked screen? Flickering or black display? We
                            repair or replace displays for all laptop brands. .
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
                            Laptop dying too soon? We'll replace the battery to
                            restore portability.
                          </p>
                        </div>
                      </li>
                      <li>
                        <div className="icon">
                          <span className="icon-os"></span>
                        </div>
                        <div className="content">
                          <h3>Software Troubleshooting</h3>
                          <p>
                            Experiencing freezes, crashes, or strange errors?
                            We'll diagnose and repair software issues.
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
                          <span className="icon-nfc"></span>
                        </div>
                        <div className="content">
                          <h3>Wi-Fi / Bluetooth Problems</h3>
                          <p>
                            Can’t connect to wireless networks? We’ll troubleshoot your connectivity.


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
