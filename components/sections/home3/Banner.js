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

export default function Banner({ banners }) {
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

  // Filter active banners and sort by display_order
  const activeBanners = banners
    ?.filter((banner) => banner.is_active === "1")
    ?.sort((a, b) => parseInt(a.display_order) - parseInt(b.display_order));

  return (
    <>
      {/*Main Slider Start*/}
      <motion.section
        style={{ opacity }}
        ref={ref}
        className="main-slider-two main-slider-three clearfix !fixed top-[100px] inset-0 z-[1] h-screen overflow-hidden select-none"
      >
        <Swiper
          {...swiperOptions}
          className="swiper-container thm-swiper__slider"
        >
          <div className="swiper-wrapper">
            {activeBanners && activeBanners.length > 0 ? (
              activeBanners.map((banner) => (
                <SwiperSlide key={banner.id}>
                  <motion.div className="swiper-slide" style={{ scale }}>
                    <div
                      className="image-layer-two"
                      style={{
                        backgroundImage: `url(${banner.image})`,
                      }}
                    ></div>
                    {/* /.image-layer */}
                    <motion.div style={{ opacity, x }} className="container">
                      <div className="row">
                        <div className="col-xl-12">
                          <div className="main-slider-two__content">
                            <p className="main-slider-two__sub-title">
                              {banner.title}
                            </p>
                            <h2 className="main-slider-two__title">
                              {banner.subtitle}
                            </h2>
                            <p className="main-slider-two__text">
                              {banner.description}
                            </p>
                            <div className="main-slider-two__btn-box">
                              <Link
                                href={"/appointment"}
                                className="thm-btn main-slider-two__btn"
                              >
                                {banner.cta_text || "احجز موعدك الآن"}
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </motion.div>
                </SwiperSlide>
              ))
            ) : (
              // Fallback slide if no banners available
              <SwiperSlide>
                <motion.div className="swiper-slide" style={{ scale }}>
                  <div
                    className="image-layer-two"
                    style={{
                      backgroundImage:
                        "url(https://res.cloudinary.com/dkc5klynm/image/upload/v1752331061/ozkan-guner-8K2vv2JMRBQ-unsplash_11zon_rxukim.jpg)",
                    }}
                  ></div>
                  <motion.div style={{ opacity, x }} className="container">
                    <div className="row">
                      <div className="col-xl-12">
                        <div className="main-slider-two__content">
                          <p className="main-slider-two__sub-title">
                            مرحبا بك في
                          </p>
                          <h2 className="main-slider-two__title">
                            True Smile Dental Clinic
                          </h2>
                          <p className="main-slider-two__text">
                            بقيادة د. ساجد لؤي، بنقّدم لك رعایة متكاملة في مجال
                            طب الأسنان
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
            )}
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
