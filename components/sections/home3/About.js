"use client";

import CounterUp from "@/components/elements/CounterUp";
import VideoPopup from "@/components/elements/VideoPopup";
import Link from "next/link";
import IntersectedBgs from "../../ui/IntersectedBgs";
import CustomTilt from "../../ui/CustomTilt";

// Import Dental Icons from React Icons
import { FaTooth, FaTeeth, FaTeethOpen } from "react-icons/fa";
import { GiToothbrush, GiTooth } from "react-icons/gi";
import { MdOutlineMedicalServices } from "react-icons/md";
import { FaUserDoctor } from "react-icons/fa6";
import { RiStethoscopeLine } from "react-icons/ri";

export default function About({ about }) {
  // Get first about section
  const aboutData = about?.[0];

  // Icon mapping for features
  const iconMap = [FaTooth, FaTeethOpen];

  // Sort features by display_order
  const sortedFeatures = aboutData?.features?.sort(
    (a, b) => parseInt(a.display_order) - parseInt(b.display_order)
  );

  return (
    <>
      {/*About One Start*/}
      <section className="about-one my-4 relative glassy-1 !rounded-none">
        <div className="container magnetic-item">
          <div className="row">
            <div className="col-xl-6 col-lg-6">
              <div className="about-one__right">
                <div className="section-title text-right">
                  <span className="section-title__tagline">
                    {aboutData?.section_title || "من نحن"}
                  </span>
                  <h2 className="section-title__title">
                    {aboutData?.title ||
                      "مرحبا بك في True Smile Dental Clinic – خدمات طب الأسنان المتميزة"}
                  </h2>
                </div>
                <p className="about-one__right-text-1">
                  {aboutData?.description ||
                    "بقيادة د. ساجد لؤي، بنقّدم لك رعایة متكاملة في مجال طب الأسنان، باستخدام أحدث التقنیات الطبیة، وبأعلى معاییر الجودة والراحة"}
                </p>
                <ul className="about-one__points list-unstyled">
                  {sortedFeatures && sortedFeatures.length > 0 ? (
                    sortedFeatures.map((feature, index) => {
                      const Icon = iconMap[index] || FaTooth;
                      return (
                        <li
                          key={feature.id}
                          className="!bg-blue-500/20 backdrop-blur-sm border border-blue-200/20 text-white "
                        >
                          <CustomTilt>
                            <div className="about-one__points-single">
                              <div className="about-one__points-icon">
                                <div className="w-[50px] h-[50px] bg-[var(--saged-base)] transition-all duration-300 rounded-full flex justify-center items-center">
                                  <Icon className="text-3xl hover:text-[var(--saged-base)] text-white transition-all duration-300" />
                                </div>
                              </div>
                              <div className="about-one__points-text ">
                                <h3 className="about-one__points-title">
                                  <Link href="#">{feature.title}</Link>
                                </h3>
                                <p className="about-one__points-subtitle">
                                  {feature.description}
                                </p>
                              </div>
                            </div>
                          </CustomTilt>
                        </li>
                      );
                    })
                  ) : (
                    // Fallback features if no data
                    <>
                      <li className="!bg-blue-500/20 backdrop-blur-sm border border-blue-200/20 text-white ">
                        <CustomTilt>
                          <div className="about-one__points-single">
                            <div className="about-one__points-icon">
                              <div className="w-[50px] h-[50px] bg-[var(--saged-base)] transition-all duration-300 rounded-full flex justify-center items-center">
                                <FaTooth className="text-3xl hover:text-[var(--saged-base)] text-white transition-all duration-300" />
                              </div>
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
                              <div className="w-[50px] h-[50px] bg-[var(--saged-base)] transition-all duration-300 rounded-full flex justify-center items-center">
                                <FaTeethOpen className="text-3xl hover:text-[var(--saged-base)] text-white transition-all duration-300" />
                              </div>
                            </div>
                            <div className="about-one__points-text">
                              <h3 className="about-one__points-title">
                                <Link href="#">التركيبات التجميلية</Link>
                              </h3>
                              <p className="about-one__points-subtitle">
                                تيجان وجسور وزركون بتصميم عالي الجودة والدقة
                              </p>
                            </div>
                          </div>
                        </CustomTilt>
                      </li>
                    </>
                  )}
                </ul>
                <Link href="contact" className="thm-btn">
                  تواصل معنا
                </Link>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 mt-4">
              <div className="about-one__left">
                <div
                  className="about-one__img wow slideInLeft h-[730px]"
                  data-wow-delay="100ms"
                  data-wow-duration="2500ms"
                >
                  <img
                    src={
                      aboutData?.image ||
                      "https://res.cloudinary.com/dkc5klynm/image/upload/v1752395483/ozkan-guner-KRJwZrjuKpE-unsplash_11zon_mobcoo.jpg"
                    }
                    alt="True Smile Dental Clinic"
                    className="h-full object-cover"
                  />
                  <div className="about-one__our-goal !bg-blue-500/20 backdrop-blur-md border border-blue-200/20 ">
                    <p className="about-one__our-goal-sub-title">هدفنا:</p>
                    <h3 className="about-one__our-goal-title text-black">
                      {aboutData?.our_goal ||
                        'تحقيق ابتسامة صحية ومشرقة لكل مريض بأحدث التقنيات وأعلى معايير الراحة."'}
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
