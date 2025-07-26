"use client";

import Layout from "@/components/layout/Layout";
import Link from "next/link";
import cx from "classnames";
import { useState } from "react";
export default function Home() {
  const [isCompanyContact, setIsCompanyContact] = useState(false);
  return (
    <>
      <Layout headerStyle={3} footerStyle={3} breadcrumbTitle="تواصل معنا">
        {/*Contact Page Start*/}
        <section className="contact-page">
          <div className="container">
            <div className="row">
              <div className="col-xl-6 col-lg-6">
                <div className="contact-page__left glassy-1">
                  <div className="flex items-center justify-between">
                    <h3 className="contact-page__title">تواصل معنا</h3>
                  </div>

                  <form
                    action="assets/inc/sendemail.php"
                    className="contact-page__form contact-form-validated"
                  >
                    <div className="row">
                      <div className="col-xl-6 magnetic-item wow fadeInUp">
                        <div className="contact-page__form-input-box">
                          <input
                            type="text"
                            placeholder={
                              isCompanyContact ? "اسم الشركة" : "الاسم"
                            }
                            name="name"
                            className="glassy border focus:!border-blue-500 focus:scale-105  placeholder:text-black !shadow-none focus:!shadow-2xl transition"
                          />
                        </div>
                      </div>
                      <div className="col-xl-6">
                        <div className="contact-page__form-input-box">
                          <input
                            type="email"
                            placeholder={
                              isCompanyContact
                                ? "البريد الإلكتروني"
                                : "البريد الإلكتروني"
                            }
                            name="email"
                            className="glassy border focus:!border-blue-500 focus:scale-105  placeholder:text-black !shadow-none focus:!shadow-2xl transition"
                          />
                        </div>
                      </div>
                      <div className="col-xl-6">
                        <div className="contact-page__form-input-box">
                          <input
                            type="text"
                            placeholder={
                              isCompanyContact ? "الموضوع" : "الموضوع"
                            }
                            name="Subject"
                            className="glassy border focus:!border-blue-500 focus:scale-105  placeholder:text-black !shadow-none focus:!shadow-2xl transition"
                          />
                        </div>
                      </div>
                      <div className="col-xl-6">
                        <div className="contact-page__form-input-box">
                          <input
                            type="text"
                            placeholder={
                              isCompanyContact ? "رقم الهاتف" : "رقم الهاتف"
                            }
                            name="Phone Number"
                            className="glassy border focus:!border-blue-500 focus:scale-105  placeholder:text-black !shadow-none focus:!shadow-2xl transition"
                          />
                        </div>
                      </div>
                    </div>
                    {isCompanyContact && (
                      <div className="col-xl-12">
                        <div className="contact-page__form-input-box">
                          <input
                            type="text"
                            placeholder="الموقع الإلكتروني (اختياري)"
                            name="Address"
                            className="glassy border focus:!border-blue-500 focus:scale-105  placeholder:text-black !shadow-none focus:!shadow-2xl transition"
                          />
                        </div>
                      </div>
                    )}

                    <div className="row">
                      <div className="col-xl-12">
                        <div className="contact-page__form-input-box text-message-box">
                          <textarea
                            name="message"
                            placeholder={
                              isCompanyContact ? "تعليق الشركة" : "تعليق"
                            }
                            className="glassy border focus:!border-blue-500 focus:scale-105 placeholder:text-black !shadow-none focus:!shadow-2xl transition"
                          ></textarea>
                        </div>
                        <div className=" contact-page__btn-box !flex !items-center !justify-between ">
                          <Link
                            href="about"
                            className="thm-btn contact-page__btn"
                          >
                            إرسال رسالة
                          </Link>

                          {/* <p
                            onClick={() =>
                              setIsCompanyContact(!isCompanyContact)
                            }
                            className="text-sm text-blue-500 font-bold cursor-pointer"
                          >
                            {isCompanyContact ? "تواصل شخصي" : "تواصل شخصي"}
                          </p> */}
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6">
                <div className="contact-page__right">
                  <div className="section-title text-right">
                    <span className="section-title__tagline">تواصل معنا</span>
                    <h2 className="section-title__title">
                      زوروا عيادتنا أو أرسلوا رسالة
                    </h2>
                  </div>
                  <p className="contact-page__right-text">
                    تحتاجون إلى استشارة أو حجز موعد لعناية أسنانكم؟ نحن هنا
                    لخدمتكم. تواصلوا معنا عبر النموذج أدناه أو زورونا مباشرة في
                    العيادة دون موعد مسبق.
                  </p>
                  <div className="contact-page__points-box-inner">
                    <div className="contact-page__points-box">
                      <h3 className="contact-page__points-title">مصر</h3>
                      <ul className="contact-page__points-list list-unstyled">
                        <li>
                          <div className="icon">
                            <span className="icon-send"></span>
                          </div>
                          <div className="text">
                            <p>
                              عيادة الروضة: في منزل الدكتور ساجد لؤي بقرية
                              الروضة مركز طلخا - 01069016472
                              <br />
                              عيادة طلخا: في برج الاطباء بجوار مسجد غنام الدور
                              الخامس للحجز و الاستفسار - 01020760246
                            </p>
                          </div>
                        </li>
                        <li>
                          <div className="icon">
                            <span className="icon-mail"></span>
                          </div>
                          <div className="text">
                            <p>
                              <Link href="mailto:sagedloai884@gmail.com">
                                sagedloai884@gmail.com
                              </Link>
                            </p>
                          </div>
                        </li>
                        <li>
                          <div className="icon">
                            <span className="icon-call"></span>
                          </div>
                          <div className="text">
                            <p>
                              <Link href="tel:+201065014391">01065014391</Link>
                            </p>
                          </div>
                        </li>
                        <li>
                          <div className="icon">
                            <span className="icon-clock"></span>
                          </div>
                          <div className="text">
                            <p>
                              السبت: عيادة الروضة من الساعة ٤ عصرا
                              <br />
                              الأحد: عيادة طلخا من الساعة ٣ عصرا
                              <br />
                              الثلاثاء: عيادة الروضة من الساعة ٤ عصرا
                              <br />
                              الخميس: عيادة طلخا من الساعة ٣ عصرا
                              <br />
                              الجمعة: عيادة الروضة من الساعة ٢ عصرا
                              <br />
                              الاثنين والأربعاء: لحالات الطوارئ فقط في عيادة
                              الروضة
                            </p>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*Contact Page End*/}

        {/*Google Map Start*/}
        <section className="google-map">
          <div className="container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3418.076303925582!2d31.382267984860846!3d31.05197528152703!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzHCsDAzJzA3LjEiTiAzMcKwMjInNDguMyJF!5e0!3m2!1sar!2seg!4v1753182257949!5m2!1sar!2seg"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              className="google-map__one"
            ></iframe>
          </div>
        </section>
        {/*Google Map End*/}
      </Layout>
    </>
  );
}

//======================================
export const EyeCatchingButton_v1 = ({ ...props }) => {
  return (
    <div className="relative overflow-hidden rounded-full dark:bg-zinc-900 bg-white shadow border dark:border-zinc-800 group border-zinc-400 p-0.5">
      <span className="absolute inset-[-1000%] animate-[spin_5s_linear_infinite_reverse] dark:bg-[conic-gradient(from_90deg_at_50%_50%,#fff_0%,#09090B_7%)] bg-[conic-gradient(from_90deg_at_50%_50%,#000_0%,#fff_5%)] group-hover:bg-none" />
      <button
        {...props}
        className={cx(
          "h-10 px-2 rounded-full font-semibold text-zinc-800 dark:text-zinc-200 backdrop-blur-xl bg-zinc-50 dark:bg-zinc-900",
          props.className
        )}
      />
    </div>
  );
};
