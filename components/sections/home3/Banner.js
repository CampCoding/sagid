"use client";
import Link from "next/link";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";

const swiperOptions = {
  modules: [Autoplay, Pagination, Navigation],
  slidesPerView: 1,
  spaceBetween: 0,
  autoplay: {
    delay: 6000,
    disableOnInteraction: false,
  },
  loop: true,

  // Navigation
  navigation: {
    nextEl: ".h1n",
    prevEl: ".h1p",
  },

  // Pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
};

export default function Banner() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  // Smooth scale
  const rawScale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 2, 4]);
  const scale = useSpring(rawScale, {
    stiffness: 100,
    damping: 30,
  });

  // Smooth opacity
  const rawOpacity = useTransform(
    scrollYProgress,
    [0, 0.2, 0.4, 0.6, 0.8, 1],
    [1, 0.8, 0.6, 0, 0, 0]
  );
  const opacity = useSpring(rawOpacity, {
    stiffness: 100,
    damping: 30,
  });

  // smooth x position
  const rawX = useTransform(scrollYProgress, [0, 1], [0, -400]);
  const x = useSpring(rawX, {
    stiffness: 100,
    damping: 30,
  });
  return (
    <>
      {/*Main Slider Start*/}
      <motion.section
        style={{ opacity }}
        ref={ref}
        className="main-slider-two main-slider-three clearfix  !fixed top-[100px] inset-0 z-[1] h-screen overflow-hidden select-none"
      >
        <Swiper
          {...swiperOptions}
          className="swiper-container thm-swiper__slider"
        >
          <div className="swiper-wrapper">
            <SwiperSlide>
              <motion.div className="swiper-slide" style={{ scale }}>
                <div
                  className="image-layer-two"
                  style={{
                    backgroundImage:
                      "url(https://res.cloudinary.com/dkc5klynm/image/upload/v1752331061/ozkan-guner-8K2vv2JMRBQ-unsplash_11zon_rxukim.jpg)",
                  }}
                ></div>
                {/* /.image-layer */}
                <motion.div style={{ opacity, x }} className="container">
                  <div className="row">
                    <div className="col-xl-12">
                      <div className="main-slider-two__content">
                        <p className="main-slider-two__sub-title">
                          مرحبا بك في
                        </p>
                        <h2 className="main-slider-two__title">
                          True Smile Dental Clinic <br />
                        </h2>
                        <p className="main-slider-two__text">
                          بقيادة د. ساجد لؤي، بنقّدم لك رعایة متكاملة في مجال طب
                          الأسنان، باستخدام أحدث التقنیات الطبیة، وبأعلى معاییر
                          الجودة والراحة.
                        </p>
                        <div className="main-slider-two__btn-box">
                          <Link
                            href="/appointment"
                            className="thm-btn main-slider-two__btn"
                          >
                            احجز موعدك الآن
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </SwiperSlide>
            <SwiperSlide>
              <motion.div className="swiper-slide" style={{ scale }}>
                <div
                  className="image-layer-two"
                  style={{
                    backgroundImage:
                      "url(https://res.cloudinary.com/dkc5klynm/image/upload/v1752331477/ozkan-guner-R8MoN4FV5q0-unsplash_11zon_kuqa60.jpg)",
                  }}
                ></div>
                {/* /.image-layer */}
                <motion.div style={{ opacity, x }} className="container">
                  <div className="row">
                    <div className="col-xl-12">
                      <div className="main-slider-two__content">
                        <p className="main-slider-two__sub-title">
                          عيادة أسنان احترافية
                        </p>
                        <h2 className="main-slider-two__title">
                          خبراء في علاج وتجميل الأسنان
                          <br />
                          لابتسامة صحية وجميلة
                        </h2>
                        <p className="main-slider-two__text">
                          سواء كان لديك ألم ضرس، تنظيف عميق، أو زراعة
                          أسنان—فريقنا الطبي المعتمد
                          <br />
                          جاهز لتقديم أفضل رعاية بأسلوب سريع ودقيق.
                        </p>
                        <div className="main-slider-two__btn-box">
                          <Link
                            href="/appointment"
                            className="thm-btn main-slider-two__btn"
                          >
                            احجز موعدك الآن
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </SwiperSlide>
            {/* <SwiperSlide>
              <motion.div className="swiper-slide" style={{ scale }}>
                <div
                  className="image-layer-two"
                  style={{
                    backgroundImage:
                      "url(assets/images/mobilehub/blog-1-3.jpg)",
                  }}
                ></div>
             
                <motion.div style={{ opacity, x }} className="container">
                  <div className="row">
                    <div className="col-xl-12">
                      <div className="main-slider-two__content">
                        <p className="main-slider-two__sub-title">
                          Pro Tech Repair
                        </p>
                        <h2 className="main-slider-two__title">
                          Cracked Screen? Sluggish Laptop? <br /> We Bring Tech
                          Back to Life!
                        </h2>
                        <p className="main-slider-two__text">
                          From smartphones to gaming rigs, our expert hands
                          handle it all. Fast fixes, real parts, no tech jargon
                          — just your device working like new.
                        </p>
                        <div className="main-slider-two__btn-box">
                          <Link
                            href="/appointment"
                            className="thm-btn main-slider-two__btn"
                          >
                            Repair My Device
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </SwiperSlide> */}
          </div>

          <div className="swiper-pagination" id="main-slider-pagination"></div>
          {/* If we need navigation buttons */}
          <div className="main-slider-two__nav">
            <div
              className="swiper-button-prev h1p cursor-pointer"
              id="main-slider__swiper-button-next"
            >
              <i className="icon-right-arrow"></i>
            </div>
            <div
              className="swiper-button-next h1n cursor-pointer"
              id="main-slider__swiper-button-prev"
            >
              <i className="icon-left-arrow"></i>
            </div>
          </div>
        </Swiper>
      </motion.section>
      {/*Main Slider End*/}
    </>
  );
}
