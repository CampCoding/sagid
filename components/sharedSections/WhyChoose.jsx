import Link from "next/link";
import React from "react";

const WhyChoose = () => {
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
          <div
            className="col-xl-6 col-lg-6 wow fadeInUp"
            data-wow-delay="100ms"
          >
            <div className="why-choose-one__single glassy-1">
              <div className="why-choose-one__icon">
                <span className="icon-award"></span>
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
              <div className="why-choose-one__icon">
                <span className="icon-customer-service"></span>
              </div>
              <div className="why-choose-one__content">
                <h3 className="why-choose-one__title">خدمة ودودة وصادقة</h3>
                <p className="why-choose-one__text">
                  عملاؤنا يثقون بنا لنصائحنا الواضحة، أسعارنا العادلة، ووعدنا
                  بعدم تحصيل أي رسوم إذا لم نتمكن من العلاج.
                </p>
              </div>
            </div>
          </div>
          <div
            className="col-xl-6 col-lg-6 wow fadeInUp"
            data-wow-delay="300ms"
          >
            <div className="why-choose-one__single glassy-1">
              <div className="why-choose-one__icon">
                <span className="icon-security"></span>
              </div>
              <div className="why-choose-one__content">
                <h3 className="why-choose-one__title">سلامة المريض أولاً</h3>
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
              <div className="why-choose-one__icon">
                <span className="icon-computer-1"></span>
              </div>
              <div className="why-choose-one__content">
                <h3 className="why-choose-one__title">ضمان تعقيم كامل</h3>
                <p className="why-choose-one__text">
                  من أدوات التعقيم وحتى بيئة العيادة، نضمن تعقيماً كاملاً لتجربة
                  آمنة وصحية.
                </p>
              </div>
            </div>
          </div>
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
