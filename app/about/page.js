"use client";
import CounterUp from "@/components/elements/CounterUp";
import Layout from "@/components/layout/Layout";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import ReactCurvedText from "react-curved-text";
import ModalVideo from "react-modal-video";
import CustomTilt from "@/components/ui/CustomTilt";
import Skills_Expertise from "../../components/sharedSections/Skills_Expertise";
import { base_url } from "../../utils/base_url";
import axios from "axios";
import { toast } from "../../components/ui/Toast";

const swiperOptions = {
  modules: [Autoplay, Pagination, Navigation],
  slidesPerView: 1,
  spaceBetween: 30,
  autoplay: {
    delay: 3000,
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

export default function About({}) {
  const [isOpen, setOpen] = useState(false);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showAllDoctors, setShowAllDoctors] = useState(false);

  const getAboutData = async () => {
    setLoading(true);
    try {
      const res = await axios.get(`${base_url}aboutpage/select_about.php`);

      if (res.data.status == "success") {
        // ✅ Store full response data
        setData(res.data);
      } else {
        toast.error("Something went wrong");
      }
    } catch (error) {
      console.log(error);
      toast.error("Failed to load data");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getAboutData();
  }, []);

  // Helper function to find section by type
  const findSection = (type) => {
    // ✅ Fixed: Now correctly accessing data.about
    return data?.about?.find((section) => section.section_type === type);
  };

  // Get all sections
  const bannerSection = findSection("banner");
  const whoWeAreSection = findSection("who_we_are");
  const visionSection = findSection("vision");
  const missionSection = findSection("mission");
  const ourServicesSection = findSection("our_services");
  const aboutUsSection = findSection("about_us");
  const contactUsSection = findSection("contact_us");
  const ourExperienceSection = findSection("our_experience");

  // Parse helper function
  const parseByCAMP = (str) => {
    return str ? str.split("**CAMP**").filter(Boolean) : [];
  };

  const aboutUsFeatures = parseByCAMP(aboutUsSection?.features);
  const aboutUsImages = parseByCAMP(aboutUsSection?.images);
  const experienceServices = parseByCAMP(ourExperienceSection?.services);

  // ✅ Get testimonials and doctors from API
  const testimonials = data?.testimonials || [];
  const allDoctors = data?.doctors || [];

  const displayedDoctors = showAllDoctors ? allDoctors : allDoctors.slice(0, 3);

  const teamSectionRef = useRef(null);

  const handleToggle = () => {
    if (showAllDoctors) {
      teamSectionRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });

      setTimeout(() => {
        setShowAllDoctors(false);
      }, 300);
    } else {
      // If showing less, just expand
      setShowAllDoctors(true);
    }
  };

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
    <Layout
      headerStyle={3}
      footerStyle={3}
      breadcrumbTitle={bannerSection?.title || "True Smile Dental Clinic"}
      caption={bannerSection?.description || "خدمات طب الأسنان المتميزة"}
    >
      {/*About Two Start*/}
      <section className="about-two about-page bg-transparent">
        <div className="container">
          <div className="row">
            <div className="col-xl-5 col-lg-6">
              <div className="about-two__left">
                <div className="about-two__main-progress-box glassy !mb-2 md:!mb-0">
                  <div className="about-two__progress-single">
                    <div className="about-two__progress-box">
                      <div
                        className="circle-progress"
                        data-options='{ "value": 0.99,"thickness": 10,"emptyFill": "#f1f1f1","lineCap": "square", "size": 110, "fill": { "color": "#cf1f1f" } }'
                        style={{ width: "99%" }}
                      ></div>
                      <div className="about-two__pack">
                        <p>99%</p>
                      </div>
                    </div>
                    <div className="about-two__progress-content">
                      <p> تشخيص دقيق</p>
                    </div>
                  </div>
                  <div className="about-two__progress-single">
                    <div className="about-two__progress-box">
                      <div
                        className="circle-progress"
                        data-options='{ "value": 0.9,"thickness": 10,"emptyFill": "#f1f1f1","lineCap": "square", "size": 110, "fill": { "color": "#cf1f1f" } }'
                        style={{ width: "95%" }}
                      ></div>
                      <div className="about-two__pack">
                        <p>95%</p>
                      </div>
                    </div>
                    <div className="about-two__progress-content">
                      <p>علاج سريع</p>
                    </div>
                  </div>
                </div>
                <div className="about-two__img-box">
                  <CustomTilt>
                    <div className="about-two__img glassy relative z-[1000] ">
                      <img
                        className="w-full h-full max-w-[200px] object-cover max-h-[300px] mx-auto"
                        src={
                          aboutUsImages[0] ||
                          "https://res.cloudinary.com/dkc5klynm/image/upload/v1752395619/ozkan-guner-0gI0IXURDgo-unsplash_11zon_cadcwp.jpg"
                        }
                        alt="True Smile Dental Clinic"
                      />
                    </div>
                  </CustomTilt>
                  <div className="about-two__img-two glassy">
                    <img
                      className="max-w-[200px] object-cover"
                      src={
                        aboutUsImages[1] ||
                        "https://res.cloudinary.com/dkc5klynm/image/upload/v1752395483/ozkan-guner-KRJwZrjuKpE-unsplash_11zon_mobcoo.jpg"
                      }
                      alt="True Smile Dental Clinic"
                    />
                  </div>
                </div>
                <div className="about-two__shape-1 shapeMover">
                  <img
                    src="assets/images/shapes/about-two-shape-1.png"
                    alt=""
                  />
                </div>
                <div className="about-two__shape-2 float-bob-y">
                  <img
                    src="assets/images/shapes/about-two-shape-2.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="col-xl-7 col-lg-6">
              <div
                className="about-two__right glassy magnetic-item wow fadeInUp"
                data-wow-delay="100ms"
              >
                <div className="section-title text-right">
                  <span className="section-title__tagline">
                    هنا تبدأ واثقة لابتسامتك
                  </span>
                  <h2 className="section-title__title">
                    {aboutUsSection?.title ||
                      "ابتسامتك المثالية تبدأ معنا – رعاية أسنان متكاملة بأحدث التقنيات"}
                  </h2>
                </div>
                <p className="about-two__text-1">
                  {aboutUsSection?.description ||
                    "تحت قيادة د. لؤي ساجد، تقدّم عيادة True Smile رعاية أسنان متكاملة بمعايير طبية عالية وتقنيات رقمية متطورة."}
                </p>
                <ul className="list-unstyled about-two__points">
                  {aboutUsFeatures.length > 0 ? (
                    aboutUsFeatures.map((feature, index) => {
                      const icons = [
                        "icon-award",
                        "icon-community",
                        "icon-warranty",
                      ];
                      return (
                        <li key={index}>
                          <div className="icon">
                            <span
                              className={icons[index] || "icon-award"}
                            ></span>
                          </div>
                          <div className="text">
                            <p>{feature}</p>
                          </div>
                        </li>
                      );
                    })
                  ) : (
                    <>
                      <li>
                        <div className="icon">
                          <span className="icon-award"></span>
                        </div>
                        <div className="text">
                          <p>أحدث الأجهزة والتقنيات العالمية للتشخيص والعلاج</p>
                        </div>
                      </li>
                      <li>
                        <div className="icon">
                          <span className="icon-community"></span>
                        </div>
                        <div className="text">
                          <p>خبرة وكفاءة عالية في التعامل مع جميع الحالات</p>
                        </div>
                      </li>
                      <li>
                        <div className="icon">
                          <span className="icon-warranty"></span>
                        </div>
                        <div className="text">
                          <p>خصوصية وراحة نفسية تامة لكل مريض</p>
                        </div>
                      </li>
                    </>
                  )}
                </ul>
                <p className="about-two__text-2">
                  {aboutUsSection?.sub_description ||
                    "خدماتنا تشمل: الفحص والتنظيف الوقائي، حشوات تجميلية..."}
                </p>
                <Link href="/contact" className="thm-btn">
                  تواصل معنا
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*About Two End*/}

      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId={aboutUsSection?.videos || "vfhzo499OeA"}
        onClose={() => setOpen(false)}
      />

      {/*Experience One Start*/}
      <section className="experience-one about-page__experience">
        <div
          className="experience-one-shape-1 shapeMover"
          style={{
            backgroundImage:
              "url(assets/images/shapes/experience-one-shape-1.png)",
          }}
        ></div>
        <div className="container">
          <div className="section-title text-center">
            <span className="section-title__tagline">خبرتنا</span>
            <h2 className="section-title__title">
              {ourExperienceSection?.title ||
                "لدينا أكثر من 20 عاماً من الخبرة في خدمات طب الأسنان الشاملة"}
            </h2>
          </div>

          <div className="row items-center">
            {experienceServices.length > 0 ? (
              experienceServices.map((service, index) => {
                const [title, description] = service.split("**");
                const delays = ["100ms", "200ms", "300ms"];
                const animations = ["fadeInLeft", "fadeInUp", "fadeInRight"];
                const icons = [
                  "icon-service",
                  "icon-management",
                  "icon-headphones",
                ];

                return (
                  <div
                    key={index}
                    className={`col-xl-4 col-lg-4 wow h-full ${animations[index]}`}
                    data-wow-delay={delays[index]}
                  >
                    <div className="experience-one__single h-full">
                      <div className="experience-one__icon">
                        <span className={icons[index]}></span>
                      </div>
                      <div className="experience-one__content">
                        <h3 className="experience-one__title">
                          <Link href="services-details">{title}</Link>
                        </h3>
                        <p className="experience-one__text">{description}</p>
                      </div>
                    </div>
                  </div>
                );
              })
            ) : (
              <>
                <div
                  className="col-xl-4 col-lg-4 wow h-full fadeInLeft"
                  data-wow-delay="100ms"
                >
                  <div className="experience-one__single h-full">
                    <div className="experience-one__icon">
                      <span className="icon-service"></span>
                    </div>
                    <div className="experience-one__content">
                      <h3 className="experience-one__title">
                        <Link href="services-details">خدمات عالية الجودة</Link>
                      </h3>
                      <p className="experience-one__text">
                        فحص وقائي، تنظيف، حشوات تجميلية، وعلاج جذور الأسنان
                        بأحدث التقنيات.
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className="col-xl-4 col-lg-4 wow h-full fadeInUp"
                  data-wow-delay="200ms"
                >
                  <div className="experience-one__single h-full">
                    <div className="experience-one__icon">
                      <span className="icon-management"></span>
                    </div>
                    <div className="experience-one__content">
                      <h3 className="experience-one__title">
                        <Link href="team">فريق متخصص</Link>
                      </h3>
                      <p className="experience-one__text">
                        طاقم من أطباء أسنان وأخصائيين ذوي خبرة يقدمون رعاية
                        شخصية لكل مريض.
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className="col-xl-4 col-lg-4 wow h-full fadeInRight"
                  data-wow-delay="300ms"
                >
                  <div className="experience-one__single h-full">
                    <div className="experience-one__icon">
                      <span className="icon-headphones"></span>
                    </div>
                    <div className="experience-one__content">
                      <h3 className="experience-one__title">
                        <Link href="contact">سرعة في الإنجاز والدعم</Link>
                      </h3>
                      <p className="experience-one__text">
                        خدمات طوارئ دون حجز مسبق، وضمان "لا علاج، لا رسوم".
                      </p>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>

          <div className="row">
            <div className="col-xl-12">
              <ul className="counter-one__list list-unstyled">
                <li className="counter-one__single">
                  <CounterUp end={20} />
                  <span className="counter-one__plus">+</span>
                  <p className="counter-one__text">سنوات خبرة</p>
                </li>
                <li className="counter-one__single">
                  <CounterUp end={2} />
                  <span className="counter-one__plus">k+</span>
                  <p className="counter-one__text">مرضى سعداء</p>
                </li>
                <li className="counter-one__single">
                  <CounterUp end={5} />
                  <span className="counter-one__plus">k+</span>
                  <p className="counter-one__text">خدمة مكتملة</p>
                </li>
                <li className="counter-one__single">
                  <CounterUp end={99} />
                  <span className="counter-one__plus">%</span>
                  <p className="counter-one__text">رضا المرضى</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/*Experience One End*/}

      {/*Skill One Start*/}
      <Skills_Expertise highlights={data?.highlights || []} />
      {/*Skill One End*/}

      {/*Company Details Start*/}
      <div className="company-details">
        <div className="container">
          <div className="row">
            {/* Who We Are */}
            <div
              className="col-xl-4 col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="100ms"
            >
              <div className="company-details__single glassy h-full">
                <div className="company-details__single-inner">
                  <div className="company-details__icon">
                    <span className="icon-management"></span>
                  </div>
                  <h3 className="company-details__title">
                    <div>{whoWeAreSection?.title || "من نحن"}</div>
                  </h3>
                  <p className="company-details__text">
                    {whoWeAreSection?.description ||
                      "تقدّم عيادة True Smile Dental Clinic رعاية أسنان متكاملة..."}
                  </p>
                </div>
              </div>
            </div>

            {/* Our Vision */}
            <div
              className="col-xl-4 col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="200ms"
            >
              <div className="company-details__single glassy h-full">
                <div className="company-details__single-inner">
                  <div className="company-details__icon">
                    <span className="icon-book"></span>
                  </div>
                  <h3 className="company-details__title">
                    <div>{visionSection?.title || "رؤيتنا"}</div>
                  </h3>
                  <p className="company-details__text">
                    {visionSection?.description ||
                      "أن نكون الوجهة الأولى والموثوقة..."}
                  </p>
                </div>
              </div>
            </div>

            {/* Our Mission */}
            <div
              className="col-xl-4 col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="300ms"
            >
              <div className="company-details__single glassy h-full">
                <div className="company-details__single-inner">
                  <div className="company-details__icon">
                    <span className="icon-award"></span>
                  </div>
                  <h3 className="company-details__title">
                    <div>{missionSection?.title || "رسالتنا"}</div>
                  </h3>
                  <p className="company-details__text">
                    {missionSection?.description ||
                      "تقديم خدمات أسنان شاملة بجودة عالية..."}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*Company Details End*/}

      {/*Contact Two Start*/}
      <section className="contact-two">
        <div
          className="contact-two-bg jarallax"
          style={{
            backgroundImage:
              "url(https://res.cloudinary.com/dkc5klynm/image/upload/v1752398655/4_wthzyt.png)",
          }}
        ></div>
        <div className="container glassy">
          <div className="contact-two__inner">
            <div className="section-title section-title--two text-center">
              <span className="section-title__tagline">تواصل معنا</span>
              <h2 className="section-title__title">
                {contactUsSection?.title ||
                  "احصل على الدعم الخبيري — نحن على بُعد رسالة واحدة"}
              </h2>
              <p className="section-title__text">
                {contactUsSection?.description ||
                  "سواء كان لديك استفسار أو تحتاج إلى تحديد موعد للفحص..."}
              </p>
            </div>
            <div className="contact-two__details-box">
              <ul className="list-unstyled contact-two__details">
                <li>
                  <div className="icon">
                    <span className="fa fa-envelope"></span>
                  </div>
                  <div className="content">
                    <span>راسلنا عبر الواتساب</span>
                    <p style={{ direction: "ltr" }}>
                      <Link href="https://wa.me/201065014391">
                        +20 10 6501 4391
                      </Link>
                    </p>
                  </div>
                </li>
                <li className="!mr-0 md:!mr-[30px]">
                  <div className="icon">
                    <span className="fa fa-phone"></span>
                  </div>
                  <div className="content">
                    <span>اتصل بنا هاتفياً</span>
                    <p style={{ direction: "ltr" }}>
                      <Link href="tel:+201065014391">+20 10 6501 4391</Link>
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/*Contact Two  End*/}

      {/*Testimonial One Start*/}
      <section className="testimonial-one bg-transparent">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="section-title text-right">
                <span className="section-title__tagline">عملاؤنا السعداء</span>
                <h2 className="section-title__title">
                  تقييمات مرضى True Smile
                </h2>
              </div>
              <Swiper
                {...swiperOptions}
                className="testimonial-one__carousel owl-carousel owl-theme thm-owl__carousel"
              >
                {testimonials.length > 0 ? (
                  testimonials.map((testimonial) => (
                    <SwiperSlide key={testimonial.id}>
                      <div className="item glassy">
                        <div className="testimonial-one__single">
                          <div className="testimonial-one__client-img-box">
                            <div className="testimonial-one__client-img">
                              <img
                                src={testimonial.image}
                                alt={testimonial.name}
                              />
                            </div>
                          </div>
                          <div className="testimonial-one__client-info-box">
                            <div className="testimonial-one__quote">
                              <span className="icon-quote"></span>
                            </div>
                            <p className="testimonial-one__text">
                              {testimonial.text}
                            </p>
                            <div className="testimonial-one__client-info">
                              <h3>{testimonial.name}</h3>
                              <p>
                                {[...Array(parseInt(testimonial.rating))].map(
                                  (_, i) => (
                                    <span key={i}>⭐</span>
                                  )
                                )}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))
                ) : (
                  <SwiperSlide>
                    <div className="item glassy">
                      <div className="testimonial-one__single">
                        <div className="testimonial-one__client-img-box">
                          <div className="testimonial-one__client-img">
                            <img
                              src="assets/images/mobilehub/testimonial-1-1.jpg"
                              alt=""
                            />
                          </div>
                        </div>
                        <div className="testimonial-one__client-info-box">
                          <div className="testimonial-one__quote">
                            <span className="icon-quote"></span>
                          </div>
                          <p className="testimonial-one__text">
                            "عالجتني العيادة بسرعة ودقة من ألم قناة الجذر..."
                          </p>
                          <div className="testimonial-one__client-info">
                            <h3>محمد عبد الله</h3>
                            <p>مهندس</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                )}
              </Swiper>
            </div>
          </div>
        </div>
      </section>
      {/*Testimonial One End*/}

      <section className="team-one pt-0">
        <div className="container">
          <div className="section-title text-center" ref={teamSectionRef}>
            <span className="section-title__tagline">تعرف على فريقنا</span>
            <h2 className="section-title__title sm:text-7xl text-5xl font-bold">
              فريقنا الطبي المتميز
            </h2>
            <p className="section-title__text">
              <span className="font-bold text-xl text-black">
                تعرف على الأطباء المتخصصين في عيادة True Smile
              </span>
              <br />
              فريق من الخبراء المتفانين في خدمة صحة أسنانك
            </p>
          </div>
          <div className="row">
            {displayedDoctors.length > 0 ? (
              displayedDoctors.map((doctor, index) => (
                <div
                  key={doctor.doctor_id}
                  className="col-xl-4 col-lg-4 col-md-6 mb-4"
                >
                  <div className="team-one__single">
                    <div className="team-one__img-box">
                      <div className="team-one__img">
                        <img
                          src={doctor.doctor_image}
                          alt={doctor.doctor_name}
                          className="w-full h-[400px] md:h-[500px] object-cover"
                        />
                      </div>
                      <div className="team-one__content">
                        <h3 className="team-one__name">
                          <Link href="team">{doctor.doctor_name}</Link>
                        </h3>
                        <p className="team-one__sub-title">
                          {doctor.doctor_spscialise}
                        </p>
                        {doctor.doctor_desc && (
                          <p className="text-sm mt-2 px-3 text-gray-600">
                            {doctor.doctor_desc}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              // Fallback doctors
              <>
                <div className="col-xl-4 col-lg-4">
                  <div className="team-one__single">
                    <div className="team-one__img-box">
                      <div className="team-one__img">
                        <img
                          src="assets/images/mobilehub/team-1-1.jpg"
                          alt=""
                        />
                      </div>
                      <div className="team-one__content">
                        <h3 className="team-one__name">
                          <Link href="team">د. لؤي ساجد</Link>
                        </h3>
                        <p className="team-one__sub-title">
                          طبيب أسنان استشاري
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-xl-4 col-lg-4">
                  <div className="team-one__single">
                    <div className="team-one__img-box">
                      <div className="team-one__img">
                        <img
                          src="assets/images/mobilehub/team-1-2.jpg"
                          alt=""
                        />
                      </div>
                      <div className="team-one__content">
                        <h3 className="team-one__name">
                          <Link href="team">د. سارة محمد</Link>
                        </h3>
                        <p className="team-one__sub-title">
                          أخصائية تقويم أسنان
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-xl-4 col-lg-4">
                  <div className="team-one__single">
                    <div className="team-one__img-box">
                      <div className="team-one__img">
                        <img
                          src="assets/images/mobilehub/team-1-3.jpg"
                          alt=""
                        />
                      </div>
                      <div className="team-one__content">
                        <h3 className="team-one__name">
                          <Link href="team">د. أحمد حسن</Link>
                        </h3>
                        <p className="team-one__sub-title">
                          أخصائي زراعة أسنان
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>

          {/* Show More/Less Button - Only show if more than 3 doctors */}
          {allDoctors.length > 3 && (
            <div className="row mt-5">
              <div className="col-xl-12 text-center">
                <button onClick={handleToggle} className="thm-btn">
                  {showAllDoctors ? (
                    <>
                      <span className="ml-2">عرض أقل</span>
                      <i className="fa fa-chevron-up"></i>
                    </>
                  ) : (
                    <>
                      <span className="ml-2">عرض المزيد</span>
                      <i className="fa fa-chevron-down"></i>
                    </>
                  )}
                </button>
              </div>
            </div>
          )}
        </div>
      </section>
      {/*Team One End */}
    </Layout>
  );
}
