// components/sharedSections/Testimonials.jsx
"use client";
import Link from "next/link";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import CustomTilt from "./../ui/CustomTilt";

const swiperOptions = {
  modules: [Autoplay, Pagination, Navigation],
  slidesPerView: 3,
  spaceBetween: 30,
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
  navigation: {
    nextEl: ".srn",
    prevEl: ".srp",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
};

export default function Testimonials({ testimonials }) {
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
            <SwiperSlide>
              <div className="item">
                <CustomTilt>
                  <div className="testimonial-two__sinlge glassy-1 !shadow-none">
                    <div className="testimonial-two__sinlge-inner">
                      <div className="testimonial-two__quote">
                        <span className="icon-quote"></span>
                      </div>
                      <p className="testimonial-two__text line-clamp-4">
                        "تجربة رائعة مع True Smile Dental Clinic"
                      </p>
                      <div className="testimonial-two__info">
                        <div className="testimonial-two__client-img">
                          <img
                            src="assets/images/mobilehub/testimonial-2-1.jpg"
                            alt="عميل"
                          />
                        </div>
                        <div className="testimonial-two__content">
                          <h3 className="testimonial-two__client-name">
                            عميل سعيد
                          </h3>
                          <p className="testimonial-two__client-title">
                            ⭐⭐⭐⭐⭐
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CustomTilt>
              </div>
            </SwiperSlide>
          )}
        </Swiper>
      </div>
    </section>
  );
}
