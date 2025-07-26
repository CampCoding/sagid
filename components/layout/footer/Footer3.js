import Link from "next/link";

export default function Footer3() {
  return (
    <>
      {/*Site Footer Start*/}
      <footer className="site-footer site-footer-two">
        <div
          className="site-footer-shape-1 float-bob-y-2"
          style={{
            backgroundImage:
              "url(assets/images/shapes/site-footer-shape-1.png)",
          }}
        ></div>
        <div className="site-footer__top">
          <div className="container">
            <div className="row">
              <div
                className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
                data-wow-delay="100ms"
              >
                <div className="footer-widget__column footer-widget__about">
                  <div className="footer-widget__logo">
                    <Link href="#">
                      <img
                        width={150}
                        height={150}
                        src="https://res.cloudinary.com/dkc5klynm/image/upload/v1752307208/logo_saged_wngsmj.png"
                        alt="True Smile Dental Clinic"
                      />
                    </Link>
                  </div>
                  <div className="footer-widget__about-text-box">
                    <p className="footer-widget__about-text">
                      عيادة True Smile لطب الأسنان هي وجهتك الموثوقة للعناية
                      بصحة فمك. من علاج القنوات إلى التجميل، فريقنا المتميز يعيد
                      ابتسامتك للحياة بسرعة ودقة.
                    </p>
                  </div>
                  <div className="footer-widget__social-box">
                    <h4 className="footer-widget__social-title">تواصل معنا</h4>
                    <div className="site-footer__social">
                      <Link href="https://www.twitter.com/" target="_blank">
                        <i className="fab fa-twitter"></i>
                      </Link>
                      <Link href="https://www.facebook.com/" target="_blank">
                        <i className="fab fa-facebook"></i>
                      </Link>
                      <Link href="https://www.instagram.com/" target="_blank">
                        <i className="fab fa-instagram"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-xl-2 col-lg-6 col-md-6 wow fadeInUp"
                data-wow-delay="200ms"
              >
                <div className="footer-widget__column footer-widget__links">
                  <div className="footer-widget__title-box">
                    <h3 className="footer-widget__title">روابط سريعة</h3>
                  </div>
                  <ul className="footer-widget__Explore-list list-unstyled">
                    <li>
                      <Link href="/">الرئيسية</Link>
                    </li>
                    <li>
                      <Link href="about">من نحن</Link>
                    </li>
                    <li>
                      <Link href="services">خدماتنا</Link>
                    </li>
                    <li>
                      <Link href="contact">تواصل معنا</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div
                className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp"
                data-wow-delay="300ms"
              >
                <div className="footer-widget__column footer-widget__services">
                  <div className="footer-widget__title-box">
                    <h3 className="footer-widget__title">خدماتنا</h3>
                  </div>
                  <ul className="footer-widget__services-list list-unstyled">
                    <li>
                      <Link href="/services-details/cleaning">
                        تنظيف الأسنان
                      </Link>
                    </li>
                    <li>
                      <Link href="/services-details/filling">
                        حشوات تجميلية
                      </Link>
                    </li>
                    <li>
                      <Link href="/services-details/root-canal">
                        علاج قناة الجذر
                      </Link>
                    </li>
                    <li>
                      <Link href="/services-details/root-canal">
                        التركيبات التجميلية
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div
                className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp"
                data-wow-delay="400ms"
              >
                <div className="footer-widget__column footer-widget__subscribe">
                  <div className="footer-widget__title-box">
                    <h3 className="footer-widget__title">اشترك</h3>
                  </div>
                  <form className="footer-widget__subscribe-box">
                    <div className="footer-widget__subscribe-input-box">
                      <input
                        type="email"
                        placeholder="بريدك الإلكتروني"
                        name="email"
                      />
                      <button
                        type="submit"
                        className="footer-widget__subscribe-btn thm-btn"
                      >
                        اشترك الآن
                      </button>
                    </div>
                  </form>
                  <p className="footer-widget__subscribe-text">
                    كن على تواصل دائم واشترك في نشرتنا الإخبارية.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="site-footer__bottom">
          <div className="container">
            <div className="site-footer__bottom-inner">
              <p className="site-footer__bottom-text">
                © 2025 جميع الحقوق محفوظة لعيادة True Smile لطب الأسنان
              </p>
            </div>
          </div>
        </div>
      </footer>

      {/*Site Footer End*/}
    </>
  );
}
