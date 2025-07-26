"use client";

import CounterUp from "@/components/elements/CounterUp";
import VideoPopup from "@/components/elements/VideoPopup";
import Link from "next/link";
import IntersectedBgs from "../../ui/IntersectedBgs";
import CustomTilt from "../../ui/CustomTilt";

export default function About() {
  return (
    <>
      {/*About One Start*/}
      <section className="about-one my-4 relative glassy-1 !rounded-none">
        {/* <div
          className="about-one__bg float-bob-y"
          style={{
            backgroundImage:
              "url(assets/images/backgrounds/about-one-bg-img-1.jpg)",
          }}
        ></div> */}
        <div className="container  magnetic-item">
          <div className="row">
            <div className="col-xl-6 col-lg-6">
              <div className="about-one__right">
                <div className="section-title text-right">
                  <span className="section-title__tagline">من نحن</span>
                  <h2 className="section-title__title">
                    مرحبا بك في True Smile Dental Clinic – خدمات طب الأسنان
                    المتميزة
                  </h2>
                </div>
                <p className="about-one__right-text-1">
                  بقيادة د. ساجد لؤي، بنقّدم لك رعایة متكاملة في مجال طب
                  الأسنان، باستخدام أحدث التقنیات الطبیة، وبأعلى معاییر الجودة
                  والراحة
                </p>
                <ul className="about-one__points list-unstyled">
                  <li className="!bg-blue-500/20 backdrop-blur-sm border border-blue-200/20 text-white ">
                    <CustomTilt>
                      <div className="about-one__points-single">
                        <div className="about-one__points-icon">
                          <span className="icon-repair"></span>
                        </div>
                        <div className="about-one__points-text ">
                          <h3 className="about-one__points-title">
                            <Link href="#">علاج جذور الأسنان </Link>
                          </h3>
                          <p className="about-one__points-subtitle">
                            علاج جذور الأسنان بأحدث التقنيات الطبية والحرفية
                          </p>
                        </div>
                      </div>
                    </CustomTilt>
                  </li>
                  <li className="!bg-blue-500/20 backdrop-blur-sm border border-blue-200/20 text-white ">
                    <CustomTilt>
                      <div className="about-one__points-single">
                        <div className="about-one__points-icon">
                          <span className="icon-phone"></span>
                        </div>
                        <div className="about-one__points-text">
                          <h3 className="about-one__points-title">
                            <Link href="#">لتركيبات التجميلية</Link>
                          </h3>
                          <p className="about-one__points-subtitle">
                            تيجان وجسور وزركون بتصميم عالي الجودة والدقة
                          </p>
                        </div>
                      </div>
                    </CustomTilt>
                  </li>
                </ul>
                <Link href="contact" className="thm-btn">
                  تواصل معنا
                </Link>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6">
              <div className="about-one__left">
                <div
                  className="about-one__img wow slideInLeft h-[730px]"
                  data-wow-delay="100ms"
                  data-wow-duration="2500ms"
                >
                  <img
                    src="https://res.cloudinary.com/dkc5klynm/image/upload/v1752395483/ozkan-guner-KRJwZrjuKpE-unsplash_11zon_mobcoo.jpg"
                    alt=""
                    className="h-full object-cover"
                  />
                  <div className="about-one__our-goal !bg-blue-500/20 backdrop-blur-md border border-blue-200/20 ">
                    <p className="about-one__our-goal-sub-title">هدفنا:</p>
                    <h3 className="about-one__our-goal-title text-black">
                      تحقيق ابتسامة صحية ومشرقة لكل مريض بأحدث التقنيات وأعلى
                      معايير الراحة."
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*About One End*/}
    </>
  );
}
