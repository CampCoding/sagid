"use client";
import Layout from "@/components/layout/Layout";
import Link from "next/link";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

import Testimonials from "../../components/sharedSections/Testimonials";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { registerLocale } from "react-datepicker";
import ar from "date-fns/locale/ar";
import { useState } from "react";
import LoadingButton from "@/components/ui/LoadingButton";
import Toast, { toast } from "@/components/ui/Toast";

registerLocale("ar", ar);

export default function Home() {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState("");
  const [selectedType, setSelectedType] = useState("");
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });

  const timeSlots = [];
  for (let hour = 2; hour < 8; hour++) {
    timeSlots.push(`${hour}:00 - ${hour}:30`);
    timeSlots.push(`${hour}:30 - ${hour + 1}:00`);
  }

  timeSlots.push("8:00 - 8:30");

  const CustomDateInput = ({ value, onClick }) => (
    <div
      className="glassy border py-0 h-[56px] focus:!border-blue-500 focus-visible:outline-none w-full focus:scale-103 placeholder:text-black !shadow-none focus:!shadow-2xl transition flex items-center px-4 cursor-pointer"
      onClick={onClick}
    >
      {value || "اختر التاريخ"}
    </div>
  );

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Validate form
    if (
      !formData.name ||
      !formData.phone ||
      !selectedDate ||
      !selectedTimeSlot ||
      !selectedType
    ) {
      toast.error("يرجى ملء جميع الحقول المطلوبة");
      setLoading(false);
      return;
    }

    // Simulate API call
    try {
      // Simulate network delay
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // Show success message
      toast.success("تم حجز موعدك بنجاح، سنتواصل معك قريباً");

      // Reset form
      setFormData({
        name: "",
        phone: "",
        message: "",
      });
      setSelectedDate(null);
      setSelectedTimeSlot("");
      setSelectedType("");
    } catch (error) {
      toast.error("حدث خطأ أثناء حجز موعدك، يرجى المحاولة مرة أخرى");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative bg-[#ffffff61]">
      <Layout headerStyle={3} footerStyle={3} breadcrumbTitle="احجز كشف">
        {/*Book Service Start*/}

        <section
          className="book-service bg-transparent"
          style={{
            backgroundImage: "url(`/assets/images/ttten-2.svg`)",
          }}
        >
          <div className="container">
            <div className="section-title section-title--two text-center">
              <span className="section-title__tagline">لنعالج ابتسامتك</span>
              <h2 className="section-title__title">
                أخبرنا بالخدمة التي تحتاج إليها
              </h2>
            </div>

            <div className="contact-page__left glassy-1 !overflow-visible">
              <div className="flex items-center justify-between">
                <h3 className="contact-page__title">تواصل معنا</h3>
              </div>

              <form
                onSubmit={handleSubmit}
                className="contact-page__form contact-form-validated"
              >
                <div className="row">
                  <div className="col-xl-6 magnetic-item wow fadeInUp">
                    <div className="contact-page__form-input-box">
                      <input
                        type="text"
                        placeholder={"الاسم"}
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="glassy border focus:!border-blue-500 focus:scale-103 placeholder:text-black !shadow-none focus:!shadow-2xl transition"
                      />
                    </div>
                  </div>
                  <div className="col-xl-6">
                    <div className="contact-page__form-input-box">
                      <input
                        type="text"
                        placeholder={"رقم الهاتف"}
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="glassy border focus:!border-blue-500 focus:scale-103 placeholder:text-black !shadow-none focus:!shadow-2xl transition"
                      />
                    </div>
                  </div>

                  <div className="col-xl-4">
                    <div className="contact-page__form-input-box">
                      <DatePicker
                        selected={selectedDate}
                        onChange={(date) => setSelectedDate(date)}
                        locale="ar"
                        dateFormat="dd/MM/yyyy"
                        customInput={<CustomDateInput />}
                        calendarClassName="rtl"
                        minDate={new Date()}
                      />
                    </div>
                  </div>
                  <div className="col-xl-4">
                    <div className="contact-page__form-input-box">
                      <select
                        name="timeSlot"
                        value={selectedTimeSlot}
                        onChange={(e) => setSelectedTimeSlot(e.target.value)}
                        className="glassy border !px-[17px] py-0 h-[56px] focus:!border-blue-500 focus-visible:outline-none w-full focus:scale-103 placeholder:text-black !shadow-none focus:!shadow-2xl transition"
                      >
                        <option value="">اختر وقت الموعد</option>
                        {timeSlots.map((slot, index) => (
                          <option key={index} value={slot}>
                            {slot}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div className="col-xl-4">
                    <div className="contact-page__form-input-box">
                      <select
                        name="type"
                        value={selectedType}
                        onChange={(e) => setSelectedType(e.target.value)}
                        className="glassy border !px-[17px] py-0 h-[56px] focus:!border-blue-500 focus-visible:outline-none w-full focus:scale-103 placeholder:text-black !shadow-none focus:!shadow-2xl transition"
                      >
                        <option className="text-[18px]" value="">
                          اختر نوع الكشف
                        </option>
                        <option className="text-[18px]" value="1">
                          أول مرة
                        </option>
                        <option className="text-[18px]" value="2">
                          إعادة
                        </option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-xl-12">
                    <div className="contact-page__form-input-box text-message-box">
                      <textarea
                        name="message"
                        placeholder={"تعليق"}
                        value={formData.message}
                        onChange={handleInputChange}
                        className="glassy border focus:!border-blue-500 focus:scale-103 placeholder:text-black !shadow-none focus:!shadow-2xl transition"
                      ></textarea>
                    </div>
                    <div className="contact-page__btn-box !flex !items-center !justify-between">
                      <LoadingButton
                        type="submit"
                        loading={loading}
                        className="contact-page__btn"
                      >
                        إرسال رسالة
                      </LoadingButton>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </section>

        <section className="book-service">
          <div
            className="book-service__bg"
            style={{
              backgroundImage:
                "url(assets/images/backgrounds/book-services-bg-img-1.jpg)",
            }}
          ></div>
          <div className="container">
            <div className="row">
              <div className="col-xl-6 h-full col-lg-6">
                <div className="book-service__left">
                  <div className="section-title text-right">
                    <span className="section-title__tagline">احجز موعد</span>
                    <h2 className="section-title__title">
                      خيارات علاج مرنة
                      <br /> تناسبك
                    </h2>
                  </div>
                  <div className="row">
                    <div className="col-xl-6 h-full">
                      <div className="book-service__single h-full min-h-[250px]">
                        <div className="book-service__icon">
                          <span className="icon-calendar"></span>
                        </div>
                        <h3 className="book-service__title">فحص دوري</h3>
                        <p className="book-service__text">
                          نقدم فحوصات شاملة لضمان صحة أسنانك واستمرار ابتسامتك.
                        </p>
                      </div>
                    </div>
                    <div className="col-xl-6 h-full">
                      <div className="book-service__single h-full min-h-[250px]">
                        <div className="book-service__icon">
                          <span className="icon-low-price"></span>
                        </div>
                        <h3 className="book-service__title">أسعار مناسبة</h3>
                        <p className="book-service__text">
                          خدمات سنية عالية الجودة بأسعار منافسة دون رسوم مخفية.
                        </p>
                      </div>
                    </div>
                    <div className="col-xl-6 h-full">
                      <div className="book-service__single h-full min-h-[250px]">
                        <div className="book-service__icon">
                          <span className="icon-delivery-man"></span>
                        </div>
                        <h3 className="book-service__title">رعاية عاجلة</h3>
                        <p className="book-service__text">
                          خدمات طوارئ للأسنان بتدخل سريع لاستعادة راحة فمك.
                        </p>
                      </div>
                    </div>
                    <div className="col-xl-6 h-full">
                      <div className="book-service__single h-full min-h-[250px]">
                        <div className="book-service__icon">
                          <span className="icon-headphones"></span>
                        </div>
                        <h3 className="book-service__title">دعم 24/7</h3>
                        <p className="book-service__text">
                          فريقنا جاهز للرد على استفساراتك في أي وقت.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-6 h-full col-lg-6">
                <div className="book-service__right">
                  <p className="book-service__right-text ">
                    في عيادة True Smile، ندرك أهمية ابتسامتك وصحة فمك — لذلك
                    نوفر أفضل الخدمات السنية بأعلى معايير الجودة.
                  </p>
                  <div className="book-service__right-img">
                    <img
                      src="https://res.cloudinary.com/dkc5klynm/image/upload/v1752395483/ozkan-guner-KRJwZrjuKpE-unsplash_11zon_mobcoo.jpg"
                      alt="صورة لعيادة True Smile"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Two Start */}
        <section className="contact-two">
          <div
            className="contact-two-bg jarallax"
            style={{
              backgroundImage:
                "url(https://res.cloudinary.com/dkc5klynm/image/upload/v1752398655/4_wthzyt.png)",
            }}
          ></div>
          <div className="container">
            <div className="contact-two__inner">
              <div className="section-title section-title--two text-center">
                <span className="section-title__tagline">تواصل معنا</span>
                <h2 className="section-title__title">
                  دعنا نتحدث – نحن هنا لمساعدتك
                </h2>
                <p className="section-title__text">
                  هل لديك سؤال أو تحتاج لتقدير تكلفة العلاج؟ اترك لنا رسالة أو
                  اتصل بنا — وسنعاود التواصل بسرعة.
                </p>
              </div>
              <div className="contact-two__details-box">
                <ul className="list-unstyled contact-two__details">
                  <li>
                    <div className="icon">
                      <span className="fa fa-envelope"></span>
                    </div>
                    <div className="content">
                      <span>أرسل لنا بريدًا إلكترونيًا</span>
                      <p>
                        <Link href="mailto:sagedloai884@gmail.com">
                          sagedloai884@gmail.com
                        </Link>
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="fa fa-phone"></span>
                    </div>
                    <div className="content">
                      <span>اتصل بنا</span>
                      <p>
                        <Link href="tel:0123456789">0123 456 789</Link>
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/*Contact Two  End*/}
        <Testimonials />
        {/*Testimonial One End*/}
      </Layout>
    </div>
  );
}
