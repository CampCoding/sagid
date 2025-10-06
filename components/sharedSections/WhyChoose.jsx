import Link from "next/link";
import React from "react";
import {
  FaAward,
  FaUserMd,
  FaShieldAlt,
  FaHandHoldingMedical,
} from "react-icons/fa";
import {
  MdVerifiedUser,
  MdHealthAndSafety,
  MdSanitizer,
  MdCleanHands,
} from "react-icons/md";
import { GiHealthNormal, GiMedicalPack } from "react-icons/gi";
import { BsShieldCheck, BsHeartPulseFill } from "react-icons/bs";
import { RiCustomerService2Fill, RiServiceFill } from "react-icons/ri";

const WhyChoose = ({ whyUs }) => {
  // Dental-themed icons array
  const dentalIcons = [
    <FaAward className="text-5xl" />, // For warranty/guarantee
    <RiCustomerService2Fill className="text-5xl" />, // For customer service
    <FaShieldAlt className="text-5xl" />, // For safety/security
    <MdSanitizer className="text-5xl" />, // For sterilization
  ];

  const delays = ["100ms", "200ms", "300ms", "400ms"];

  // Function to select appropriate icon based on content
  const getIcon = (title, index) => {
    const lowerTitle = title?.toLowerCase() || "";

    if (lowerTitle.includes("جودة")) {
      return <FaAward className="text-5xl text-[var(--saged-base)]" />;
    } else if (lowerTitle.includes("خدمة") || lowerTitle.includes("عملاء")) {
      return (
        <RiCustomerService2Fill className="text-5xl text-[var(--saged-base)]" />
      );
    } else if (lowerTitle.includes("سلامة") || lowerTitle.includes("أمان")) {
      return (
        <MdHealthAndSafety className="text-5xl text-[var(--saged-base)]" />
      );
    } else if (lowerTitle.includes("تعقيم") || lowerTitle.includes("نظافة")) {
      return <MdSanitizer className="text-5xl text-[var(--saged-base)]" />;
    } else if (lowerTitle.includes("طبي") || lowerTitle.includes("علاج")) {
      return (
        <FaHandHoldingMedical className="text-5xl text-[var(--saged-base)]" />
      );
    } else {
      // Default to cycling through dental icons
      return dentalIcons[index % dentalIcons.length];
    }
  };

  return (
    <section className="why-choose-one" dir="rtl">
      <div className="container">
        <div className="section-title section-title--two text-center">
          <span className="section-title__tagline">لماذا تختارنا</span>
          <h2 className="section-title__title">رعاية أسنان متميزة للجميع</h2>
          <p className="section-title__text">
            لا نقوم فقط بعلاج الأسنان — بل نعيد ابتسامتك بحب وسرعة،
            <br /> مع أكثر من 20 عاماً من الخبرة الموثوقة.
          </p>
        </div>
        <div className="row">
          {whyUs && whyUs.length > 0 ? (
            whyUs.map((item, index) => (
              <div
                key={item.id}
                className="col-xl-6 col-lg-6 wow fadeInUp"
                data-wow-delay={delays[index] || "100ms"}
              >
                <div className="why-choose-one__single glassy-1">
                  <div className="why-choose-one__icon flex items-center justify-center">
                    {getIcon(item.title, index)}
                  </div>
                  <div className="why-choose-one__content">
                    <h3 className="why-choose-one__title">{item.title}</h3>
                    <p className="why-choose-one__text">{item.description}</p>
                  </div>
                </div>
              </div>
            ))
          ) : (
            // Fallback with React Icons
            <>
              <div
                className="col-xl-6 col-lg-6 wow fadeInUp"
                data-wow-delay="100ms"
              >
                <div className="why-choose-one__single glassy-1">
                  <div className="why-choose-one__icon flex items-center justify-center">
                    <FaAward className="text-5xl" />
                  </div>
                  <div className="why-choose-one__content">
                    <h3 className="why-choose-one__title">
                      ضمان على جميع العلاجات
                    </h3>
                    <p className="why-choose-one__text">
                      نوقف خلف عملنا — جميع العلاجات تأتي بضمان موثوق لراحتك.
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="col-xl-6 col-lg-6 wow fadeInUp"
                data-wow-delay="200ms"
              >
                <div className="why-choose-one__single glassy-1">
                  <div className="why-choose-one__icon flex items-center justify-center">
                    <RiCustomerService2Fill className="text-5xl" />
                  </div>
                  <div className="why-choose-one__content">
                    <h3 className="why-choose-one__title">خدمة ودودة وصادقة</h3>
                    <p className="why-choose-one__text">
                      عملاؤنا يثقون بنا لنصائحنا الواضحة، أسعارنا العادلة،
                      ووعدنا بعدم تحصيل أي رسوم إذا لم نتمكن من العلاج.
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="col-xl-6 col-lg-6 wow fadeInUp"
                data-wow-delay="300ms"
              >
                <div className="why-choose-one__single glassy-1">
                  <div className="why-choose-one__icon flex items-center justify-center">
                    <MdHealthAndSafety className="text-5xl" />
                  </div>
                  <div className="why-choose-one__content">
                    <h3 className="why-choose-one__title">
                      سلامة المريض أولاً
                    </h3>
                    <p className="why-choose-one__text">
                      سلامتُك وصحتُك في مقدمة أولوياتنا. نتعامل مع كل حالة كأنها
                      حالتنا الخاصة.
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="col-xl-6 col-lg-6 wow fadeInUp"
                data-wow-delay="400ms"
              >
                <div className="why-choose-one__single glassy-1">
                  <div className="why-choose-one__icon flex items-center justify-center">
                    <MdSanitizer className="text-5xl" />
                  </div>
                  <div className="why-choose-one__content">
                    <h3 className="why-choose-one__title">ضمان تعقيم كامل</h3>
                    <p className="why-choose-one__text">
                      من أدوات التعقيم وحتى بيئة العيادة، نضمن تعقيماً كاملاً
                      لتجربة آمنة وصحية.
                    </p>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
        <div className="row">
          <div className="col-xl-12">
            <div className="why-choose-one__bottom">
              <p className="why-choose-one__bottom-text">
                احصل على رعاية احترافية منّا{" "}
                <Link href="about">المزيد من الإرشادات والمعلومات</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
