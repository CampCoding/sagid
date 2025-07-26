import CounterUp from "@/components/elements/CounterUp";

export default function Funfacts() {
  return (
    <>
      {/*Counter One Start*/}
      <section className="counter-one">
        <div
          className="counter-one__bg jarallax"
          style={{
            backgroundImage:
              "url(https://res.cloudinary.com/dkc5klynm/image/upload/v1752398182/1_czmbuo.png)",
          }}
        ></div>
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <ul className="counter-one__list list-unstyled">
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
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/*Counter One End*/}
    </>
  );
}
