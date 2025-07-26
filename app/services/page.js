"use client";
import CounterUp from "@/components/elements/CounterUp";
import Layout from "@/components/layout/Layout";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
import Testimonials from "../../components/sharedSections/Testimonials";
import WhyChoose from "../../components/sharedSections/WhyChoose";
import Faq from "../../components/sharedSections/Faq";

const swiperOptions = {
  modules: [Autoplay, Pagination, Navigation],
  slidesPerView: 1,
  spaceBetween: 30,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
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
export default function Home() {
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

  return (
    <>
      <Layout
        headerStyle={3}
        footerStyle={3}
        breadcrumbTitle="خدمات طب الأسنان"
        caption="كل علاج هو فرصة لاستعادة ابتسامتك بأفضل حال"
      >
        {/*Services Two Start*/}
        <section className="services-two" dir="rtl">
          <div className="container">
            <div className="section-title section-title--two text-center">
              <span className="section-title__tagline">خدماتنا</span>
              <h2 className="section-title__title">
                رعاية أسنان متكاملة بابتسامة صحية
              </h2>
              <p className="section-title__text">
                نقدم لك خدمات طب الأسنان الاحترافية — سريعة،
                <br /> دقيقة، وبعناية يمكنك الثقة بها.
              </p>
            </div>
            <div className="row">
              {/* تنظيف الأسنان */}
              <div
                className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
                data-wow-delay="100ms"
              >
                <div className="services-two__single glassy-1 h-full">
                  <div className="services-two__single-inner">
                    <div className="services-two__icon">
                      <span className="icon-phone"></span>
                    </div>
                    <h3 className="services-two__title">
                      <Link href="/services-details/cleaning">
                        تنظيف الأسنان
                      </Link>
                    </h3>
                    <p className="services-two__text">
                      إزالة الجير والبلاك وتنظيف شامل لصحة فموية أفضل.
                    </p>
                  </div>
                </div>
              </div>
              {/* حشوات الأسنان */}
              <div
                className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
                data-wow-delay="200ms"
              >
                <div className="services-two__single glassy-1 h-full">
                  <div className="services-two__single-inner">
                    <div className="services-two__icon services-two__icon--two">
                      <span className="icon-tap"></span>
                    </div>
                    <h3 className="services-two__title">
                      <Link href="/services-details/filling">
                        حشوات الأسنان
                      </Link>
                    </h3>
                    <p className="services-two__text">
                      علاج التسوس واستبدال الأجزاء المتضررة بمواد عالية الجودة.
                    </p>
                  </div>
                </div>
              </div>
              {/* علاج قناة الجذر */}
              <div
                className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
                data-wow-delay="300ms"
              >
                <div className="services-two__single glassy-1 h-full">
                  <div className="services-two__single-inner">
                    <div className="services-two__icon services-two__icon--three">
                      <span className="icon-laptop"></span>
                    </div>
                    <h3 className="services-two__title">
                      <Link href="/services-details/root-canal">
                        علاج قناة الجذر
                      </Link>
                    </h3>
                    <p className="services-two__text">
                      علاج الألم والعدوى داخل جذور الأسنان لاستعادة صحتها.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/*Services Two End*/}

        {/*Newsletter One Start*/}
        <section className="newsletter-one">
          <div
            className="newsletter-one-bg jarallax"
            style={{
              backgroundImage:
                "url(https://res.cloudinary.com/dkc5klynm/image/upload/v1752398655/4_wthzyt.png)",
            }}
          ></div>
          <div className="container">
            <div className="section-title section-title--two text-center">
              <span className="section-title__tagline">النشرة الإخبارية</span>
              <h2 className="section-title__title">أبقى على تواصل معنا</h2>
              <p className=" section-title__text">
                اشترك للحصول على أخبار وتحديثات وعروض خاصة - مباشرة إلى بريدك
                الإلكتروني.
              </p>
            </div>
            <form className="newsletter-one__form">
              <div className="newsletter-one__input-box">
                <input
                  type="email"
                  placeholder="البريد الإلكتروني"
                  name="email"
                />
                <button type="submit" className="thm-btn newsletter-one__btn">
                  اشترك الآن
                </button>
              </div>
            </form>
          </div>
        </section>
        {/*Newsletter One End*/}

        {/*Testimonial One Start*/}
        <Testimonials />
        {/*Testimonial One End*/}

        {/*FAQ One Start*/}
        <Faq />
        {/*FAQ One End*/}

        {/*Counter One Start*/}
        <section className="counter-one" dir="rtl">
          <div
            className="counter-one__bg jarallax"
            style={{
              backgroundImage:
                "url(https://res.cloudinary.com/dkc5klynm/image/upload/v1752398182/1_czmbuo.png)",
            }}
          ></div>
          <div className="container">
            <div className="row">
              <div className="col-xl-12">
                <ul className="counter-one__list list-unstyled">
                  {/* سنوات الخبرة */}
                  <li className="counter-one__single text-center">
                    <CounterUp end={15} />
                    <span className="counter-one__plus">+</span>
                    <p className="counter-one__text">سنوات الخبرة</p>
                  </li>

                  {/* المرضى السعداء */}
                  <li className="counter-one__single text-center">
                    <CounterUp end={2000} />
                    <span className="counter-one__plus">+</span>
                    <p className="counter-one__text">مريض سعيد</p>
                  </li>

                  {/* العلاجات المكتملة */}
                  <li className="counter-one__single text-center">
                    <CounterUp end={5000} />
                    <span className="counter-one__plus">+</span>
                    <p className="counter-one__text">علاج مكتمل</p>
                  </li>

                  {/* نسبة رضا المرضى */}
                  <li className="counter-one__single text-center">
                    <CounterUp end={99} />
                    <span className="counter-one__plus">%</span>
                    <p className="counter-one__text">رضا المرضى</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/*Counter One End*/}

        {/*Why Choose One Start*/}
        <WhyChoose />
        {/*Why Choose One End*/}
      </Layout>
    </>
  );
}
