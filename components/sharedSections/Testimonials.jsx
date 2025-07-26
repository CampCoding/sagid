"use client";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const swiperOptions = {
  modules: [Autoplay, Pagination, Navigation],
  slidesPerView: 1,
  spaceBetween: 30,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
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

const Testimonials = () => {
  return (
    <section className="testimonial-one bg-transparent">
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="section-title text-right">
              <span className="section-title__tagline">
                آراء مرضانا السعداء
              </span>
              <h2 className="section-title__title">تجارب المرضى</h2>
            </div>

            <Swiper {...swiperOptions} className="testimonial-one__carousel">
              {/* Testimonial 1 */}
              <SwiperSlide>
                <div className="item glassy">
                  <div className="testimonial-one__single">
                    <div className="testimonial-one__client-img-box">
                      <div className="testimonial-one__client-img">
                        <img
                          src="assets/images/mobilehub/testimonial-1-1.jpg"
                          alt="صورة المريض كريم سمير"
                        />
                      </div>
                    </div>
                    <div className="testimonial-one__client-info-box">
                      <div className="testimonial-one__quote">
                        <span className="icon-quote"></span>
                      </div>
                      <p className="testimonial-one__text">
                        "كان عندي تسوس عميق والـ root canal كان ممكن يكون مرهق،
                        لكن الجلسة سريعة ومريحة. ملم بكل حاجة وحسيت إنه أمانة في
                        شغله."
                      </p>
                      <div className="testimonial-one__client-info">
                        <h3>كريم سمير</h3>
                        <p>مريض علاج جذور الأسنان</p>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              {/* Testimonial 2 */}
              <SwiperSlide>
                <div className="item glassy">
                  <div className="testimonial-one__single">
                    <div className="testimonial-one__client-img-box">
                      <div className="testimonial-one__client-img">
                        <img
                          src="assets/images/mobilehub/testimonial-1-1.jpg"
                          alt="صورة المريض كريم سمير"
                        />
                      </div>
                    </div>
                    <div className="testimonial-one__client-info-box">
                      <div className="testimonial-one__quote">
                        <span className="icon-quote"></span>
                      </div>
                      <p className="testimonial-one__text">
                        "كان عندي تسوس عميق والـ root canal كان ممكن يكون مرهق،
                        لكن الجلسة سريعة ومريحة. ملم بكل حاجة وحسيت إنه أمانة في
                        شغله."
                      </p>
                      <div className="testimonial-one__client-info">
                        <h3>كريم سمير</h3>
                        <p>مريض علاج جذور الأسنان</p>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              {/* Testimonial 3 */}
              <SwiperSlide>
                <div className="item glassy">
                  <div className="testimonial-one__single">
                    <div className="testimonial-one__client-img-box">
                      <div className="testimonial-one__client-img">
                        <img
                          src="assets/images/mobilehub/testimonial-1-1.jpg"
                          alt="صورة المريض كريم سمير"
                        />
                      </div>
                    </div>
                    <div className="testimonial-one__client-info-box">
                      <div className="testimonial-one__quote">
                        <span className="icon-quote"></span>
                      </div>
                      <p className="testimonial-one__text">
                        "كان عندي تسوس عميق والـ root canal كان ممكن يكون مرهق،
                        لكن الجلسة سريعة ومريحة. ملم بكل حاجة وحسيت إنه أمانة في
                        شغله."
                      </p>
                      <div className="testimonial-one__client-info">
                        <h3>كريم سمير</h3>
                        <p>مريض علاج جذور الأسنان</p>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>

              {/* pagination bullets */}
              <div className="swiper-pagination"></div>
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
