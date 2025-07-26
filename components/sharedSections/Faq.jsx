"use client";
import Link from "next/link";
import React, { useState } from "react";

const Faq = () => {
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
    <section className="faq-one">
      <div
        className="faq-one-shape-1 shapeMover"
        style={{
          backgroundImage: "url(assets/images/shapes/faq-one-shape.png)",
        }}
      ></div>
      <div className="container">
        <div className="row">
          <div className="col-xl-6 col-lg-6">
            <div className="faq-one__left">
              <div className="section-title text-right">
                <span className="section-title__tagline">لديك سؤال؟</span>
                <h2 className="section-title__title">الأسئلة المتكررة</h2>
              </div>
              <p className="faq-one__text-1">
                نتفهم أنه قد تكون لديك بعض الأسئلة قبل البدء. لذلك قمنا بجمع
                الإجابات على الأسئلة الأكثر شيوعاً التي نتلقاها.
              </p>
              <p className="faq-one__text-2">
                سواء كان ذلك حول عملية العلاج، تغطية الضمان، أو خدمات الأسنان -
                نحن هنا لمساعدتك. إذا لم تجد سؤالك في القائمة، لا تتردد في
                التواصل مع فريق الدعم في أي وقت.
              </p>
              <div className="faq-one__btn-box">
                <Link href="#" className=" thm-btn faq-one__btn">
                  اسأل أسئلتك هنا
                </Link>
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6">
            <div className="faq-one__right">
              <div
                className="accrodion-grp faq-one-accrodion"
                data-grp-name="faq-one-accrodion"
              >
                <div
                  className={
                    isActive.key == 1 ? "accrodion active" : "accrodion"
                  }
                  onClick={() => handleToggle(1)}
                >
                  <div className="accrodion-title">
                    <h4>هل تقدمون خدمات تنظيف الأسنان؟</h4>
                  </div>
                  <div className="accrodion-content">
                    <div className="inner">
                      <p>
                        نعم! نقدم خدمات تنظيف الأسنان المهنية والعميقة، مما
                        يساعد على إزالة الجير واللويحات وتحسين صحة الفم.
                      </p>
                    </div>
                    {/* /.inner */}
                  </div>
                </div>
                {/* <div
                  className={
                    isActive.key == 2 ? "accrodion active" : "accrodion"
                  }
                  onClick={() => handleToggle(2)}
                >
                  <div className="accrodion-title">
                    <h4>هل تقدمون ضمان على العلاج؟</h4>
                  </div>
                  <div className="accrodion-content">
                    <div className="inner">
                      <p>
                        بالطبع. معظم علاجاتنا تأتي مع ضمان من 30 إلى 90 يوماً،
                        حسب نوع الخدمة. تطبق الشروط والأحكام.
                      </p>
                    </div>
                
                  </div>
                </div> */}

                <div
                  className={
                    isActive.key == 3 ? "accrodion active" : "accrodion"
                  }
                  onClick={() => handleToggle(3)}
                >
                  <div className="accrodion-title">
                    <h4>هل تقدمون علاج تقويم الأسنان؟</h4>
                  </div>
                  <div className="accrodion-content">
                    <div className="inner">
                      <p>
                        نعم، نقدم خدمات تقويم الأسنان المختلفة بما في ذلك
                        التقويم المعدني والشفاف. نبدأ بفحص شامل لتحديد الخطة
                        المناسبة لحالتك.
                      </p>
                    </div>
                  </div>
                </div>

                {/* <div
                  className={
                    isActive.key == 4 ? "accrodion active" : "accrodion"
                  }
                  onClick={() => handleToggle(4)}
                >
                  <div className="accrodion-title">
                    <h4>هل هناك رسوم على خدمات الطوارئ؟</h4>
                  </div>
                  <div className="accrodion-content">
                    <div className="inner">
                      <p>
                        خدمات الطوارئ متوفرة مع علاجات مختارة. قد يتطلب الأمر
                        دفع رسوم إضافية. التوفر قد يختلف حسب الفرع.
                      </p>
                    </div>
                    
                  </div>
                </div> */}

                <div
                  className={
                    isActive.key == 5 ? "accrodion active" : "accrodion"
                  }
                  onClick={() => handleToggle(5)}
                >
                  <div className="accrodion-title">
                    <h4>كم تستغرق عملية زراعة الأسنان؟</h4>
                  </div>
                  <div className="accrodion-content">
                    <div className="inner">
                      <p>
                        عملية زراعة الأسنان تختلف حسب حالة المريض. عادة ما
                        تتراوح من 3 إلى 6 أشهر للشفاء الكامل، مع متابعة دورية
                        لضمان النجاح.
                      </p>
                    </div>
                    {/* /.inner */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
