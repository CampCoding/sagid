"use client";
import CounterUp from "@/components/elements/CounterUp";
import Layout from "@/components/layout/Layout";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
import Testimonials from "../../components/sharedSections/Testimonials";
import WhyChoose from "../../components/sharedSections/WhyChoose";
import Faq from "../../components/sharedSections/Faq";
import axios from "axios";
import { base_url } from "../../utils/base_url";
import { toast } from "../../components/ui/Toast";

const swiperOptions = {
  modules: [Autoplay, Pagination, Navigation],
  slidesPerView: 1,
  spaceBetween: 30,
  autoplay: {
    delay: 2500,
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

export default function Services() {
  const [isActive, setIsActive] = useState({
    status: false,
    key: 1,
  });
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  // Fetch services data
  const getServicesData = async () => {
    setLoading(true);
    try {
      const res = await axios.get(
        `${base_url}servicespage/select_services.php`
      );

      if (res.data.status === "success") {
        setData(res.data);
      } else {
        toast.error("Something went wrong");
      }
    } catch (error) {
      console.log(error);
      toast.error("Failed to load services data");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getServicesData();
  }, []);

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

  // Get data
  const bannerData = data?.banner?.[0];
  const services = data?.services?.filter((s) => s.selected === "yes") || [];
  const testimonials = data?.testimonials || [];
  const faqs = data?.faqs || [];
  const statsData = data?.stats?.[0];
  const whyUs = data?.why_us || [];

  // Loading state
  if (loading) {
    return (
      <Layout headerStyle={3} footerStyle={3}>
        <div className="flex items-center justify-center min-h-screen">
          <div className="text-center">
            <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-500 mx-auto"></div>
            <p className="mt-4 text-gray-600">جاري التحميل...</p>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <>
      <Layout
        headerStyle={3}
        footerStyle={3}
        breadcrumbTitle={bannerData?.title || "خدمات طب الأسنان"}
        caption={
          bannerData?.subtitle || "كل علاج هو فرصة لاستعادة ابتسامتك بأفضل حال"
        }
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
              {services.length > 0 ? (
                services.map((service, index) => {
                  const delays = ["100ms", "200ms", "300ms", "400ms", "500ms"];
                  const iconClasses = [
                    "icon-phone",
                    "icon-tap",
                    "icon-laptop",
                    "icon-computer",
                    "icon-smartphone",
                  ];
                  const iconColorClasses = [
                    "",
                    "services-two__icon--two",
                    "services-two__icon--three",
                    "services-two__icon--four",
                    "services-two__icon--five",
                  ];

                  return (
                    <div
                      key={service.id}
                      className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
                      data-wow-delay={delays[index] || "100ms"}
                    >
                      <div className="services-two__single glassy-1 h-full">
                        <div className="services-two__single-inner">
                          <div
                            className={`services-two__icon ${
                              iconColorClasses[index] || ""
                            }`}
                          >
                            <span
                              className={iconClasses[index] || "icon-phone"}
                            ></span>
                          </div>
                          <h3 className="services-two__title">
                            <Link href={`/services-details/${service.id}`}>
                              {service.title}
                            </Link>
                          </h3>
                          <p className="services-two__text">
                            {service.features?.split("**CAMP**")[0] || ""}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })
              ) : (
                <div className="col-12 text-center py-10">
                  <p className="text-gray-500 text-xl">
                    لا توجد خدمات متاحة حالياً
                  </p>
                </div>
              )}
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
        <Testimonials testimonials={testimonials} />
        {/*Testimonial One End*/}

        {/*FAQ One Start*/}
        <Faq faqs={faqs} />
        {/*FAQ One End*/}

        {/*Counter One Start*/}
        <section className="counter-one" dir="rtl">
          <div
            className="counter-one__bg jarallax"
            style={{
              backgroundImage: `url(${
                statsData?.background_image ||
                "https://res.cloudinary.com/dkc5klynm/image/upload/v1752398182/1_czmbuo.png"
              })`,
            }}
          ></div>
          <div className="container">
            <div className="row">
              <div className="col-xl-12">
                <ul className="counter-one__list list-unstyled">
                  {statsData?.stats && statsData.stats.length > 0 ? (
                    statsData.stats
                      .sort(
                        (a, b) =>
                          parseInt(a.display_order) - parseInt(b.display_order)
                      )
                      .map((stat) => {
                        const formatSuffix = (suffix) => {
                          if (!suffix || suffix.trim() === "") return "+";
                          if (suffix.toUpperCase() === "K") return "k+";
                          return suffix;
                        };

                        return (
                          <li
                            key={stat.id}
                            className="counter-one__single text-center"
                          >
                            <CounterUp end={parseInt(stat.value)} />
                            <span className="counter-one__plus">
                              {formatSuffix(stat.suffix)}
                            </span>
                            <p className="counter-one__text">{stat.label}</p>
                          </li>
                        );
                      })
                  ) : (
                    <>
                      <li className="counter-one__single text-center">
                        <CounterUp end={15} />
                        <span className="counter-one__plus">+</span>
                        <p className="counter-one__text">سنوات الخبرة</p>
                      </li>
                      <li className="counter-one__single text-center">
                        <CounterUp end={2000} />
                        <span className="counter-one__plus">+</span>
                        <p className="counter-one__text">مريض سعيد</p>
                      </li>
                      <li className="counter-one__single text-center">
                        <CounterUp end={5000} />
                        <span className="counter-one__plus">+</span>
                        <p className="counter-one__text">علاج مكتمل</p>
                      </li>
                      <li className="counter-one__single text-center">
                        <CounterUp end={99} />
                        <span className="counter-one__plus">%</span>
                        <p className="counter-one__text">رضا المرضى</p>
                      </li>
                    </>
                  )}
                </ul>
              </div>
            </div>
          </div>
        </section>
        {/*Counter One End*/}

        {/*Why Choose One Start*/}
        <WhyChoose whyUs={whyUs} />
        {/*Why Choose One End*/}
      </Layout>
    </>
  );
}
