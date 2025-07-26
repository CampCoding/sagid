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
      <section className="welcome-one">
        <div
          className="welcome-one__bg"
          style={{
            backgroundImage:
              "url(https://res.cloudinary.com/dkc5klynm/image/upload/v1752398655/4_wthzyt.png)",

            backgroundSize: "cover",
          }}
        ></div>
        <div className="container">
          <div className="row">
            <motion.div className="col-xl-6 order-2 col-lg-6 glassy-1 magnetic-item wow bounceInUp">
              <div className="welcome-one__left ">
                <div className="section-title text-right">
                  <span className="section-title__tagline">مرحبا بك</span>
                  <h2 className="section-title__title">
                    True Smile Dental Clinic – خدمات طب الأسنان المتميزة
                  </h2>
                </div>
                <p className="welcome-one__text-1">
                  بقيادة د. ساجد لؤي، بنقّدم لك رعایة متكاملة في مجال طب
                  الأسنان، باستخدام أحدث التقنیات الطبیة، وبأعلى معاییر الجودة
                  والراحة.
                </p>
                <p className="welcome-one__text-2">
                  نعالج جميع حالات الأسنان في نفس اليوم باستخدام مواد طبيّة
                  أصلية
                  <br />
                  وخبرة طبية ودعم ودود يمكنك الاعتماد عليه.
                </p>
                <div className="welcome-one__btn-box">
                  <Link href="contact" className="welcome-one__btn thm-btn">
                    تواصل معنا
                  </Link>
                  <Link href="about" className="welcome-one__btn-2 thm-btn">
                    اكتشف المزيد
                  </Link>
                </div>
              </div>
            </motion.div>
            <div className="col-xl-6 col-lg-6 order-1">
              <div className="welcome-one__right">
                <div
                  className="welcome-one__right-img wow fadeInRight"
                  data-wow-delay="100ms"
                  data-wow-duration="2500ms"
                >
                  <img
                    src="https://res.cloudinary.com/dkc5klynm/image/upload/v1752395024/vecteezy_ai-generated-dental-clinic-advertisment-background-with-copy_36594488_11zon_m3bybr.jpg"
                    alt=""
                  />
                  <div className="welcome-one__video-link">
                    <a onClick={() => setOpen(true)} className="video-popup">
                      <div className="welcome-one__video-icon">
                        <span className="fa fa-play"></span>
                        <i className="ripple"></i>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*Welcome One End*/}
      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId="Get7rqXYrbQ"
        onClose={() => setOpen(false)}
      />
    </>
  );
}
