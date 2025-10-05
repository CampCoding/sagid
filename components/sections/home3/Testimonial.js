"use client";
import Link from "next/link";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import CustomTilt from "./../../ui/CustomTilt";

const swiperOptions = {
  modules: [Autoplay, Pagination, Navigation],
  slidesPerView: 3,
  spaceBetween: 30,
  // autoplay: {
  //     delay: 2500,
  //     disableOnInteraction: false,
  // },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
  loop: true,

  // Navigation
  navigation: {
    nextEl: ".srn",
    prevEl: ".srp",
  },

  // Pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
};

export default function Testimonial({ testimonials }) {
  // Render stars based on rating
  const renderStars = (rating) => {
    const stars = [];
    const ratingNum = parseInt(rating) || 5;
    for (let i = 0; i < ratingNum; i++) {
      stars.push(<span key={i}>⭐</span>);
    }
    return stars;
  };

  return (
    <>
      {/*Testimonial two Start*/}
      <section className="testimonal-two">
        <div className="container">
          <div className="section-title section-title--two text-center">
            <span className="section-title__tagline">آراء المرضى</span>
            <h2 className="section-title__title">تقييم عملائنا</h2>
            <p className="section-title__text">
              ما يقوله مرضانا عن True Smile Dental Clinic
            </p>
          </div>
          <Swiper
            {...swiperOptions}
            className="testimonial-two__carousel owl-carousel owl-theme thm-owl__carousel"
          >
            {testimonials && testimonials.length > 0 ? (
              testimonials.map((testimonial) => (
                <SwiperSlide key={testimonial.id}>
                  <div className="item">
                    <CustomTilt>
                      <div className="testimonial-two__sinlge glassy-1 !shadow-none">
                        <div className="testimonial-two__sinlge-inner">
                          <div className="testimonial-two__quote">
                            <span className="icon-quote"></span>
                          </div>
                          <p className="testimonial-two__text line-clamp-4">
                            {testimonial.text}
                          </p>
                          <div className="testimonial-two__info">
                            <div className="testimonial-two__client-img">
                              <img
                                src={testimonial.image}
                                alt={testimonial.name}
                              />
                            </div>
                            <div className="testimonial-two__content">
                              <h3 className="testimonial-two__client-name">
                                {testimonial.name}
                              </h3>
                              <p className="testimonial-two__client-title">
                                {renderStars(testimonial.rating)}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CustomTilt>
                  </div>
                </SwiperSlide>
              ))
            ) : (
              // Fallback testimonials
              <>
                <SwiperSlide>
                  <div className="item">
                    <CustomTilt>
                      <div className="testimonial-two__sinlge glassy-1 !shadow-none">
                        <div className="testimonial-two__sinlge-inner">
                          <div className="testimonial-two__quote">
                            <span className="icon-quote"></span>
                          </div>
                          <p className="testimonial-two__text line-clamp-4">
                            "في حفلة عيد ميلاد، شعرت بألم حاد في ضرس العقل. فريق
                            True Smile عالجني في نفس اليوم"
                          </p>
                          <div className="testimonial-two__info">
                            <div className="testimonial-two__client-img">
                              <img
                                src="assets/images/mobilehub/testimonial-2-1.jpg"
                                alt="أحمد إبراهيم"
                              />
                            </div>
                            <div className="testimonial-two__content">
                              <h3 className="testimonial-two__client-name">
                                أحمد إبراهيم
                              </h3>
                              <p className="testimonial-two__client-title">
                                موظف شركة
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CustomTilt>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="item">
                    <CustomTilt>
                      <div className="testimonial-two__sinlge glassy-1 !shadow-none">
                        <div className="testimonial-two__sinlge-inner">
                          <div className="testimonial-two__quote">
                            <span className="icon-quote"></span>
                          </div>
                          <p className="testimonial-two__text line-clamp-4">
                            "تعرضت للتسوس الشديد وخشيت أن أفقد أحد أسناني. بفضل
                            رعاية True Smile Dental Clinic، استعدت ابتسامتي
                            بثقة."
                          </p>
                          <div className="testimonial-two__info">
                            <div className="testimonial-two__client-img">
                              <img
                                src="assets/images/mobilehub/testimonial-2-2.jpg"
                                alt="ليلى محمد"
                              />
                            </div>
                            <div className="testimonial-two__content">
                              <h3 className="testimonial-two__client-name">
                                ليلى محمد
                              </h3>
                              <p className="testimonial-two__client-title">
                                طالبة جامعية
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CustomTilt>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="item">
                    <CustomTilt>
                      <div className="testimonial-two__sinlge glassy-1 !shadow-none">
                        <div className="testimonial-two__sinlge-inner">
                          <div className="testimonial-two__quote">
                            <span className="icon-quote"></span>
                          </div>
                          <p className="testimonial-two__text line-clamp-4">
                            "كنت أعاني من حساسية الأسنان وآلام اللثة المستمرة.
                            بفضل العلاجات المتقدمة في True Smile، تحسنت حالتي
                            تماماً!"
                          </p>
                          <div className="testimonial-two__info">
                            <div className="testimonial-two__client-img">
                              <img
                                src="assets/images/mobilehub/testimonial-2-2.jpg"
                                alt="سارة حسن"
                              />
                            </div>
                            <div className="testimonial-two__content">
                              <h3 className="testimonial-two__client-name">
                                سارة حسن
                              </h3>
                              <p className="testimonial-two__client-title">
                                ممرضة
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CustomTilt>
                  </div>
                </SwiperSlide>
              </>
            )}
          </Swiper>
        </div>
      </section>
      {/*Testimonial two End*/}
    </>
  );
}
