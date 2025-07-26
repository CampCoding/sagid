"use client";
import ModalVideo from "react-modal-video";
import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
export default function Welcome() {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      {/*Welcome One Start*/}
      <section className="welcome-one py-5 md:py-10">
        <div
          className="welcome-one__bg"
          style={{
            backgroundImage:
              "url(https://res.cloudinary.com/dkc5klynm/image/upload/v1752398655/4_wthzyt.png)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
        <div className="container px-4 sm:px-6 md:px-8">
          <div className="row flex flex-col lg:flex-row">
            <motion.div className="col-xl-6 order-2 lg:order-2 col-lg-6 glassy-1 magnetic-item wow bounceInUp w-full lg:w-1/2 px-3 md:px-4 mt-8 lg:mt-0">
              <div className="welcome-one__left p-4 md:p-6">
                <div className="section-title text-right mb-4 md:mb-6">
                  <span className="section-title__tagline text-base md:text-lg">
                    مرحبا بك
                  </span>
                  <h2 className="section-title__title text-xl md:text-2xl lg:text-3xl">
                    True Smile Dental Clinic – خدمات طب الأسنان المتميزة
                  </h2>
                </div>
                <p className="welcome-one__text-1 text-sm md:text-base mb-3 md:mb-4">
                  بقيادة د. ساجد لؤي، بنقّدم لك رعایة متكاملة في مجال طب
                  الأسنان، باستخدام أحدث التقنیات الطبیة، وبأعلى معاییر الجودة
                  والراحة.
                </p>
                <p className="welcome-one__text-2 text-sm md:text-base mb-5 md:mb-6">
                  نعالج جميع حالات الأسنان في نفس اليوم باستخدام مواد طبيّة
                  أصلية
                  <br className="hidden md:block" />
                  وخبرة طبية ودعم ودود يمكنك الاعتماد عليه.
                </p>
                <div className="welcome-one__btn-box flex flex-wrap gap-3 md:gap-4">
                  <Link
                    href="contact"
                    className="welcome-one__btn thm-btn text-sm md:text-base"
                  >
                    تواصل معنا
                  </Link>
                  <Link
                    href="about"
                    className="welcome-one__btn-2 thm-btn text-sm md:text-base"
                  >
                    اكتشف المزيد
                  </Link>
                </div>
              </div>
            </motion.div>
            <div className="col-xl-6 col-lg-6 order-1 lg:order-1 w-full lg:w-1/2 px-3 md:px-4">
              <div className="welcome-one__right">
                <div
                  className="welcome-one__right-img wow fadeInRight"
                  data-wow-delay="100ms"
                  data-wow-duration="2500ms"
                >
                  <img
                    src="https://res.cloudinary.com/dkc5klynm/image/upload/v1752395024/vecteezy_ai-generated-dental-clinic-advertisment-background-with-copy_36594488_11zon_m3bybr.jpg"
                    alt="Dental clinic"
                    className="w-full h-auto rounded-lg shadow-lg"
                  />
                  {/* <div className="welcome-one__video-link">
                    <a onClick={() => setOpen(true)} className="video-popup">
                      <div className="welcome-one__video-icon">
                        <span className="fa fa-play"></span>
                        <i className="ripple"></i>
                      </div>
                    </a>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*Welcome One End*/}
      {/* <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId="Get7rqXYrbQ"
        onClose={() => setOpen(false)}
      /> */}
    </>
  );
}
