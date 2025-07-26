import Link from "next/link";

export default function Process() {
  return (
    <>
      {/*Process One Start*/}
      <section className="process-one">
        <div
          className="process-one__bg jarallax"
          style={{
            backgroundImage:
              "url(https://res.cloudinary.com/dkc5klynm/image/upload/v1752398418/2_11zon_zyu7xc.png)",
          }}
        ></div>
        <div className="container">
          <div className="section-title text-center">
            <span className="section-title__tagline">آلية العمل</span>
            <h2 className="section-title__title">
              خطوات العلاج الأربع السهلة معنا
            </h2>
          </div>
          <div className="row">
            {/*Process One Single Start*/}
            <div className="col-xl-3 col-lg-6 col-md-6">
              <div className="process-one__single">
                <div className="process-one__icon">
                  <span className="icon-computer"></span>
                  <div className="process-one__count-box"></div>
                </div>
                <h3 className="process-one__title">حجز الموعد</h3>
              </div>
            </div>
            {/*Process One Single End*/}
            {/*Process One Single Start*/}
            <div className="col-xl-3 col-lg-6 col-md-6">
              <div className="process-one__single">
                <div className="process-one__icon">
                  <span className="icon-send"></span>
                  <div className="process-one__count-box"></div>
                </div>
                <h3 className="process-one__title">الفحص والتشخيص</h3>
              </div>
            </div>
            {/*Process One Single End*/}
            {/*Process One Single Start*/}
            <div className="col-xl-3 col-lg-6 col-md-6">
              <div className="process-one__single">
                <div className="process-one__icon">
                  <span className="icon-setting"></span>
                  <div className="process-one__count-box"></div>
                </div>
                <h3 className="process-one__title">العلاج والتنظيف</h3>
              </div>
            </div>
            {/*Process One Single End*/}
            {/*Process One Single Start*/}
            <div className="col-xl-3 col-lg-6 col-md-6">
              <div className="process-one__single">
                <div className="process-one__icon">
                  <span className="icon-product"></span>
                  <div className="process-one__count-box"></div>
                </div>
                <h3 className="process-one__title">المتابعة والرعاية</h3>
              </div>
            </div>
            {/*Process One Single End*/}
          </div>
        </div>
      </section>
      {/*Process One End*/}
    </>
  );
}
