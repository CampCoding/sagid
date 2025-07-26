import Layout from "@/components/layout/Layout";
import Link from "next/link";

export default function Error404() {
  return (
    <>
      <Layout headerStyle={3} footerStyle={3}>
        {/*Error Page Start*/}
        <section className="error-page">
          <div
            className="error-page__bg"
            style={{
              backgroundImage:
                "url(https://res.cloudinary.com/dkc5klynm/image/upload/v1752755180/3_r2d3ks.png)",
            }}
          ></div>
          <div className="container">
            <div className="row">
              <div className="col-xl-12">
                <div className="error-page__inner">
                  <div className="error-page__title-box">
                    <h2 className="error-page__title">
                      <span className="clr-primary">404</span>
                    </h2>
                  </div>
                  <h3 className="error-page__tagline">
                    للأسف لم نجد الصفحة التي تبحث عنها
                  </h3>
                  <p className="error-page__text">
                    يمكنك العودة إلى الصفحة الرئيسية أو التواصل معنا للحصول على
                    المساعدة
                  </p>
                  <Link href="/" className="thm-btn error-page__btn">
                    العودة إلى الصفحة الرئيسية
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*Error Page End*/}
      </Layout>
    </>
  );
}
