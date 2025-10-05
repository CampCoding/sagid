"use client";
import CounterUp from "@/components/elements/CounterUp";

export default function Funfacts({ stats }) {
  // Get first stats section
  const statsData = stats?.[0];

  // Sort metrics by display_order
  const sortedMetrics = statsData?.stats?.sort(
    (a, b) => parseInt(a.display_order) - parseInt(b.display_order)
  );

  // Format suffix
  const formatSuffix = (suffix) => {
    if (!suffix || suffix.trim() === "") return "+";
    if (suffix.toUpperCase() === "K") return "k+";
    return suffix;
  };

  return (
    <>
      {/*Counter One Start*/}
      <section className="counter-one">
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
                {sortedMetrics && sortedMetrics.length > 0 ? (
                  sortedMetrics.map((metric) => (
                    <li key={metric.id} className="counter-one__single">
                      <CounterUp end={parseInt(metric.value)} />
                      <span className="counter-one__plus">
                        {formatSuffix(metric.suffix)}
                      </span>
                      <p className="counter-one__text">{metric.label}</p>
                    </li>
                  ))
                ) : (
                  // Fallback data
                  <>
                    <li className="counter-one__single">
                      <CounterUp end={10} />
                      <span className="counter-one__plus">+</span>
                      <p className="counter-one__text">سنوات مجيدة</p>
                    </li>
                    <li className="counter-one__single">
                      <CounterUp end={22} />
                      <span className="counter-one__plus">k+</span>
                      <p className="counter-one__text">عملاء سعداء</p>
                    </li>
                    <li className="counter-one__single">
                      <CounterUp end={10} />
                      <span className="counter-one__plus">k+</span>
                      <p className="counter-one__text">خدمات مكتملة</p>
                    </li>
                    <li className="counter-one__single">
                      <CounterUp end={99} />
                      <span className="counter-one__plus">%</span>
                      <p className="counter-one__text">رضا العملاء</p>
                    </li>
                  </>
                )}
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/*Counter One End*/}
    </>
  );
}
