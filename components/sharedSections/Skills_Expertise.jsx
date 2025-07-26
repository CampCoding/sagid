"use client";

import React from "react";

import { useState } from "react";

import CustomTilt from "@/components/ui/CustomTilt";
import ModalVideo from "react-modal-video";
const Skills_Expertise = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <section className="skill-one about-page__skill-one">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-6">
              <div className="skill-one__left">
                <div className="section-title text-right">
                  <span className="section-title__tagline">
                    خدماتنا المتميزة
                  </span>
                  <h2 className="section-title__title">
                    نتميز بالسرعة والكفاءة
                    <br /> في علاج الأسنان
                  </h2>
                </div>
                <p className="skill-one__text">
                  نعالج جميع حالات الأسنان في نفس اليوم باستخدام مواد طبيّة
                  <br />
                  وخبرة طبية ودعم ودود يمكنك الاعتماد عليه.
                </p>
                <p className="skill-one__text-2">
                  نقوم بتشخيص وعلاج مختلف مشاكل الفم والأسنان، من التسوّس
                  والشقوق إلى أمراض اللثة وعلاجات الجذور — باستخدام أحدث
                  التقنيات والمواد الطبية المعتمدة.
                </p>

                <div className="skill-one__progress">
                  <div className="skill-one__progress-single">
                    <div className="bar">
                      <div
                        className="bar-inner count-bar"
                        data-percent="99%"
                        style={{ width: "99%" }}
                      >
                        <div className="count-text">99%</div>
                        <h4 className="skill-one__progress-title">
                          تشخيص دقيق
                        </h4>
                      </div>
                    </div>
                  </div>
                  <div className="skill-one__progress-single">
                    <div className="bar">
                      <div
                        className="bar-inner count-bar"
                        data-percent="95%"
                        style={{ width: "95%" }}
                      >
                        <div className="count-text">95%</div>
                        <h4 className="skill-one__progress-title">
                          حشوات تجميلية
                        </h4>
                      </div>
                    </div>
                  </div>
                  <div className="skill-one__progress-single">
                    <div className="bar marb-0">
                      <div
                        className="bar-inner count-bar"
                        data-percent="95%"
                        style={{ width: "95%" }}
                      >
                        <div className="count-text">95%</div>
                        <h4 className="skill-one__progress-title">
                          علاج قناة الجذر
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6">
              <div className="skill-one__right">
                <div
                  className="skill-one__right-img-box wow slideInRight"
                  data-wow-delay="100ms"
                  data-wow-duration="2500ms"
                >
                  <div className="skill-one__right-img">
                    <img
                      src="https://res.cloudinary.com/dkc5klynm/image/upload/v1752395619/ozkan-guner-0gI0IXURDgo-unsplash_11zon_cadcwp.jpg"
                      alt=""
                    />
                    <div className="skill-one__video-link">
                      <a onClick={() => setOpen(true)} className="video-popup">
                        <div className="skill-one__video-icon">
                          <span className="fa fa-play"></span>
                          <i className="ripple"></i>
                        </div>
                      </a>
                    </div>
                  </div>
                  <CustomTilt className="skill-one__video-content glassy">
                    <p className="text-black">
                      تحسين خدمات علاج وترميم الأسنان بأحدث التقنيات وأعلى
                      معايير الجودة
                    </p>
                  </CustomTilt>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId="WBG-84oZlyk"
        onClose={() => setOpen(false)}
      />
    </>
  );
};

export default Skills_Expertise;
