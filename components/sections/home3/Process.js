import Link from "next/link";
import { FaCalendarAlt, FaStethoscope } from "react-icons/fa";
import { GiToothbrush } from "react-icons/gi";
import { FaHeartPulse } from "react-icons/fa6";

export default function Process({ workflow }) {
  // Get first workflow section
  const workflowData = workflow?.[0];

  // Sort steps by step_order
  const sortedSteps = workflowData?.steps?.sort(
    (a, b) => parseInt(a.step_order) - parseInt(b.step_order)
  );

  // Icon mapping for each step
  const iconMap = {
    0: FaCalendarAlt,
    1: FaStethoscope,
    2: GiToothbrush,
    3: FaHeartPulse,
  };

  return (
    <>
      {/*Process One Start*/}
      <section className="process-one">
        <div
          className="process-one__bg jarallax"
          style={{
            backgroundImage: `url(${
              workflowData?.background_image ||
              "https://res.cloudinary.com/dkc5klynm/image/upload/v1752398418/2_11zon_zyu7xc.png"
            })`,
          }}
        ></div>
        <div className="container">
          <div className="section-title text-center">
            <span className="section-title__tagline">
              {workflowData?.title || "آلية العمل"}
            </span>
            <h2 className="section-title__title">
              {workflowData?.description || "خطوات العلاج الأربع السهلة معنا"}
            </h2>
          </div>
          <div className="row">
            {sortedSteps && sortedSteps.length > 0 ? (
              sortedSteps.map((step, index) => {
                const Icon = iconMap[index] || FaCalendarAlt;
                const isLastStep = index === 3;

                return (
                  <div key={step.id} className="col-xl-3 col-lg-6 col-md-6">
                    <div className="process-one__single">
                      <div className="process-one__icon">
                        {isLastStep ? (
                          <span className="icon-product"></span>
                        ) : (
                          <Icon className="text-5xl text-white" />
                        )}
                        <div className="process-one__count-box"></div>
                      </div>
                      <h3 className="process-one__title">{step.title}</h3>
                    </div>
                  </div>
                );
              })
            ) : (
              // Fallback steps
              <>
                <div className="col-xl-3 col-lg-6 col-md-6">
                  <div className="process-one__single">
                    <div className="process-one__icon">
                      <FaCalendarAlt className="text-5xl text-white" />
                      <div className="process-one__count-box"></div>
                    </div>
                    <h3 className="process-one__title">حجز الموعد</h3>
                  </div>
                </div>

                <div className="col-xl-3 col-lg-6 col-md-6">
                  <div className="process-one__single">
                    <div className="process-one__icon">
                      <FaStethoscope className="text-5xl text-white" />
                      <div className="process-one__count-box"></div>
                    </div>
                    <h3 className="process-one__title">الفحص والتشخيص</h3>
                  </div>
                </div>

                <div className="col-xl-3 col-lg-6 col-md-6">
                  <div className="process-one__single">
                    <div className="process-one__icon">
                      <GiToothbrush className="text-5xl text-white" />
                      <div className="process-one__count-box"></div>
                    </div>
                    <h3 className="process-one__title">العلاج والتنظيف</h3>
                  </div>
                </div>

                <div className="col-xl-3 col-lg-6 col-md-6">
                  <div className="process-one__single">
                    <div className="process-one__icon">
                      <span className="icon-product"></span>
                      <div className="process-one__count-box"></div>
                    </div>
                    <h3 className="process-one__title">المتابعة والرعاية</h3>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </section>
      {/*Process One End*/}
    </>
  );
}
