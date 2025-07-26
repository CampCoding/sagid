import CustomTilt from "../../ui/CustomTilt";

export default function Contact() {
  return (
    <>
      {/*Contact One Start*/}
      <section className="contact-one">
        <div
          className="contact-one-bg jarallax"
          style={{
            backgroundImage:
              "url(https://res.cloudinary.com/dkc5klynm/image/upload/v1752398288/4_r9x7ds.png)",
          }}
        ></div>

        <div className="container glassy magnetic-item">
          <div className="section-title section-title--two text-center">
            <span className="section-title__tagline !text-white">
              تواصل معنا
            </span>
            <h2 className="section-title__title">
              دعنا نتحدث – نحن هنا لمساعدتك
            </h2>
            <p className="section-title__text">
              هل لديك سؤال أو تحتاج لتقدير تكلفة العلاج؟ اترك لنا رسالة أو اتصل
              بنا — وسنعاود التواصل بسرعة.
            </p>
          </div>
          <div className="contact-one__form-box">
            <form
              action="assets/inc/sendemail.php"
              className="contact-one__form contact-form-validated"
            >
              <div className="row">
                <div className="col-xl-6 col-lg-6">
                  <div className="contact-form__input-box">
                    <input
                      type="text"
                      placeholder="الاسم"
                      name="name"
                      className="text-white placeholder:text-gray-200"
                    />
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6">
                  <div className="contact-form__input-box">
                    <input
                      type="text"
                      placeholder="رقم الهاتف"
                      name="phone"
                      className="text-white placeholder:text-gray-200"
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-xl-12 col-lg-12">
                  <div className="contact-form__input-box text-message-box">
                    <textarea
                      name="message"
                      placeholder="رسالتك"
                      className="text-white placeholder:text-gray-200"
                    ></textarea>
                  </div>
                  <div className="contact-form__btn-box magnetic-item">
                    <button type="submit" className="thm-btn contact-form__btn">
                      أرسل الرسالة
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
      {/*Contact One End*/}
    </>
  );
}
