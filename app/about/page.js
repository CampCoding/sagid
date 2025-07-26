"use client";
import CounterUp from "@/components/elements/CounterUp";
import Layout from "@/components/layout/Layout";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import Link from "next/link";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import ReactCurvedText from "react-curved-text";
import ModalVideo from "react-modal-video";
import CustomTilt from "@/components/ui/CustomTilt";
import Skills_Expertise from "../../components/sharedSections/Skills_Expertise";

const swiperOptions = {
  modules: [Autoplay, Pagination, Navigation],
  slidesPerView: 1,
  spaceBetween: 30,
  autoplay: {
    delay: 1000,
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

export default function About() {
  const [isOpen, setOpen] = useState(false);
  return (
    <Layout
      headerStyle={3}
      footerStyle={3}
      breadcrumbTitle="True Smile Dental Clinic"
      caption="خدمات طب الأسنان المتميزة "
    >
      {/*About Two Start*/}
      <section className="about-two about-page bg-transparent">
        <div className="container">
          <div className="row">
            <div className="col-xl-5 col-lg-6">
              <div className="about-two__left">
                <div className="about-two__main-progress-box glassy">
                  <div className="about-two__progress-single">
                    <div className="about-two__progress-box">
                      <div
                        className="circle-progress"
                        data-options='{ "value": 0.99,"thickness": 10,"emptyFill": "#f1f1f1","lineCap": "square", "size": 110, "fill": { "color": "#cf1f1f" } }'
                        style={{ width: "99%" }}
                      ></div>
                      {/* /.circle-progress */}
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
                      {/* /.circle-progress */}
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
                    <div className="about-two__img glassy ">
                      <img
                        className="w-full h-full max-w-[200px] object-cover max-h-[300px] mx-auto"
                        src="https://res.cloudinary.com/dkc5klynm/image/upload/v1752395619/ozkan-guner-0gI0IXURDgo-unsplash_11zon_cadcwp.jpg"
                        alt=""
                      />
                    </div>
                  </CustomTilt>
                  <div className="about-two__img-two glassy">
                    <img
                      className="max-w-[200px] object-cover"
                      src="https://res.cloudinary.com/dkc5klynm/image/upload/v1752395483/ozkan-guner-KRJwZrjuKpE-unsplash_11zon_mobcoo.jpg"
                      alt=""
                    />
                    {/* <div className="about-two__video-link">
                      <a onClick={() => setOpen(true)} className="video-popup">
                        <div className="about-two__video-icon">
                          <span className="fa fa-play"></span>
                          <i className="ripple"></i>
                        </div>
                      </a>
                    </div> */}
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
                    ابتسامتك المثالية تبدأ معنا – رعاية أسنان متكاملة بأحدث
                    التقنيات
                  </h2>
                </div>
                <p className="about-two__text-1">
                  تحت قيادة د. لؤي ساجد، تقدّم عيادة True Smile رعاية أسنان
                  متكاملة بمعايير طبية عالية وتقنيات رقمية متطورة، في بيئة مريحة
                  وآمنة لراحتك ورضاك.
                </p>
                <ul className="list-unstyled about-two__points">
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
                </ul>
                <p className="about-two__text-2">
                  خدماتنا تشمل: الفحص والتنظيف الوقائي، حشوات تجميلية بلون
                  الأسنان، علاج جذور الأسنان (القنوات الجذرية)، جراحات الفم،
                  زراعة الأسنان وزراعة العظم (Bone Grafting)، رفع الجيوب الأنفية
                  (Sinus Lift)، التركيبات التجميلية (تيجان، جسور وزركون)، تصميم
                  الابتسامة الرقمي (Digital Smile Design)، تقويم الأسنان، تبييض
                  الأسنان، وطب أسنان الأطفال.
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
        videoId="vfhzo499OeA"
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
              لدينا أكثر من 20 عاماً من الخبرة في
              <br />
              خدمات طب الأسنان الشاملة
            </h2>
          </div>

          <div className="row items-center">
            {/* Experience One Single Start */}
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
                    فحص وقائي، تنظيف، حشوات تجميلية، وعلاج جذور الأسنان بأحدث
                    التقنيات.
                  </p>
                </div>
              </div>
            </div>
            {/* Experience One Single End */}

            {/* Experience One Single Start */}
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
                    طاقم من أطباء أسنان وأخصائيين ذوي خبرة يقدمون رعاية شخصية
                    لكل مريض.
                  </p>
                </div>
              </div>
            </div>
            {/* Experience One Single End */}

            {/* Experience One Single Start */}
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
                    خدمات طوارئ دون حجز مسبق، وضمان “لا علاج، لا رسوم”.
                  </p>
                </div>
              </div>
            </div>
            {/* Experience One Single End */}
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
      <Skills_Expertise />
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
                    <div>من نحن</div>
                  </h3>
                  <p className="company-details__text">
                    تقدّم عيادة True Smile Dental Clinic، بقيادة د. لؤي ساجد،
                    رعاية أسنان متكاملة بأعلى المعايير الطبية والتقنيات الرقمية،
                    في بيئة مريحة وآمنة لراحتك ورضاك.
                  </p>
                </div>
              </div>
            </div>

            {/* Our Vision */}
            <div
              className="col-xl-4 col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="100ms"
            >
              <div className="company-details__single glassy h-full">
                <div className="company-details__single-inner">
                  <div className="company-details__icon">
                    <span className="icon-book"></span>
                  </div>
                  <h3 className="company-details__title">
                    <div>رؤيتنا</div>
                  </h3>
                  <p className="company-details__text">
                    أن نكون الوجهة الأولى والموثوقة لكل من يبحث عن ابتسامة صحية
                    وجميلة، من خلال الابتكار المستمر وتطبيق أحدث تقنيات طب
                    الأسنان العالمية.
                  </p>
                </div>
              </div>
            </div>

            {/* Our Mission */}
            <div
              className="col-xl-4 col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="100ms"
            >
              <div className="company-details__single glassy h-full">
                <div className="company-details__single-inner">
                  <div className="company-details__icon">
                    <span className="icon-award"></span>
                  </div>
                  <h3 className="company-details__title">
                    <div>رسالتنا</div>
                  </h3>
                  <p className="company-details__text">
                    تقديم خدمات أسنان شاملة بجودة عالية وشفافية كاملة في
                    الأسعار، مع حرص دائم على راحة المريض ورضاه من خلال فريق عمل
                    محترف وخبرة تمتد لأكثر من 20 عاماً.
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
                احصل على الدعم الخبيري — نحن على بُعد رسالة واحدة
              </h2>
              <p className="section-title__text">
                سواء كان لديك استفسار أو تحتاج إلى تحديد موعد للفحص أو العلاج،
                فريق True Smile جاهز لخدمتك. <br />
                نسهل عليك متابعة رعايتك دون عناء أو توتر.
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
                    <p>
                      <Link href="https://wa.me/201065014391">
                        +20 10 6501 4391
                      </Link>
                    </p>
                  </div>
                </li>
                <li>
                  <div className="icon">
                    <span className="fa fa-phone"></span>
                  </div>
                  <div className="content">
                    <span>اتصل بنا هاتفياً</span>
                    <p>
                      <Link href="tel:+201065014391">+20 10 6501 4391</Link>{" "}
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
                {/* Testimonial 1 */}
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
                          “عالجتني العيادة بسرعة ودقة من ألم قناة الجذر، ولم
                          أشعر بأي ألم أثناء الجلسة. تجربة احترافية بكل
                          المقاييس.”
                        </p>
                        <div className="testimonial-one__client-info">
                          <h3>محمد عبد الله</h3>
                          <p>مهندس</p>
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
                            alt=""
                          />
                        </div>
                      </div>
                      <div className="testimonial-one__client-info-box">
                        <div className="testimonial-one__quote">
                          <span className="icon-quote"></span>
                        </div>
                        <p className="testimonial-one__text">
                          “التصميم الرقمي لابتسامتي قبل العلاج وفّر علي الكثير
                          من الوقت والقلق. النتيجة كانت مطابقة تماماً لتوقعاتي.”
                        </p>
                        <div className="testimonial-one__client-info">
                          <h3>خالد مصطفى</h3>
                          <p>مهندس</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </section>
      {/*Testimonial One End*/}

      {/*Team One Start*/}
      {/* <section className="team-one">
        <div className="container">
          <div className="section-title text-center">
            <span className="section-title__tagline">Meet Our Team</span>
            <h2 className="section-title__title">Friendly & Trustworthy</h2>
            <p className="section-title__text">
              <span className="font-bold text-xl text-black">
                Meet the Experts Behind True Smile Dental Clinic
              </span>
              <br />
              The people who bring your tech back to life
            </p>
          </div>
          <div className="row">
            <div className="col-xl-4 col-lg-4">
              <div className="team-one__single">
                <div className="team-one__img-box">
                  <div className="team-one__img">
                    <img src="assets/images/mobilehub/team-1-1.jpg" alt="" />
                  </div>
                  <div className="team-one__content">
                    <h3 className="team-one__name">
                      <Link href="team">Nicolas Marko</Link>
                    </h3>
                    <p className="team-one__sub-title">Master Technician</p>
                  </div>
                  <ul className="team-one__social list-unstyled">
                    <li>
                      <Link href="#">
                        <span className="fab fa-facebook-f"></span>
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <span className="fab fa-twitter"></span>
                      </Link>
                    </li>
                    <li>
                      <Link href="https://www.instagram.com/mobihubmk/" target="_blank"> 
                        <span className="fab fa-instagram"></span>
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <span className="fab fa-pinterest-p"></span>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
           
            <div className="col-xl-4 col-lg-4">
              <div className="team-one__single">
                <div className="team-one__img-box">
                  <div className="team-one__img">
                    <img src="assets/images/mobilehub/team-1-2.jpg" alt="" />
                  </div>
                  <div className="team-one__content">
                    <h3 className="team-one__name">
                      <Link href="team">Joseph Dico</Link>
                    </h3>
                    <p className="team-one__sub-title">Digital Marketing</p>
                  </div>
                  <ul className="team-one__social list-unstyled">
                    <li>
                      <Link href="#">
                        <span className="fab fa-facebook-f"></span>
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <span className="fab fa-twitter"></span>
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <span className="fab fa-instagram"></span>
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <span className="fab fa-pinterest-p"></span>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          
            <div className="col-xl-4 col-lg-4">
              <div className="team-one__single">
                <div className="team-one__img-box">
                  <div className="team-one__img">
                    <img src="assets/images/mobilehub/team-1-3.jpg" alt="" />
                  </div>
                  <div className="team-one__content">
                    <h3 className="team-one__name">
                      <Link href="team">Nicolas Marko</Link>
                    </h3>
                    <p className="team-one__sub-title">Master Technician</p>
                  </div>
                  <ul className="team-one__social list-unstyled">
                    <li>
                      <Link href="#">
                        <span className="fab fa-facebook-f"></span>
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <span className="fab fa-twitter"></span>
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <span className="fab fa-instagram"></span>
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <span className="fab fa-pinterest-p"></span>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      {/*Team One End*/}
    </Layout>
  );
}
