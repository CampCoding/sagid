import React from "react";
import { Modal } from "antd";
import Link from "next/link";
const BookingModal = ({ open, onCancel }) => {
  return (
    <Modal
      // title={<>Last Step To Book Your Service</>}
      open={open}
      onCancel={onCancel}
      footer={null}
      width={"90vw"}
    >
      <section className="contact-page-two md:!p-4">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-6 !p-0 ">
              <div className="contact-page-two__left !p-0 ">
                <form
                  action="assets/inc/sendemail.php"
                  className="contact-page-two__form contact-form-validated"
                >
                  <div className="row">
                    <div className="col-xl-6">
                      <div className="contact-page-two__form-input-box">
                        <input type="text" placeholder="Name" name="name" />
                      </div>
                    </div>
                    <div className="col-xl-6">
                      <div className="contact-page-two__form-input-box ">
                        <input
                          type="text"
                          placeholder="Email"
                          name="email"
                          className="!border-1 !border-[#aaa] focus:!border-baseColor rounded-md  bg-white"
                        />
                      </div>
                    </div>
                    <div className="col-xl-6">
                      <div className="contact-page-two__form-input-box">
                        <input
                          type="text"
                          placeholder="Subject"
                          name="Subject"
                        />
                      </div>
                    </div>
                    <div className="col-xl-6">
                      <div className="contact-page-two__form-input-box">
                        <input
                          type="text"
                          placeholder="Pick a date"
                          name="date"
                          id="datepicker"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-xl-12">
                      <div className="contact-page-two__form-input-box text-message-box">
                        <textarea
                          name="message"
                          placeholder="Comment"
                        ></textarea>
                      </div>
                      <div className="contact-page-two__btn-box">
                        <div
                          onClick={() => onCancel()}
                          className="thm-btn contact-page-two__btn cursor-pointer"
                        >
                          Send Message
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6">
              <div className="contact-page-two__right">
                <div className="section-title text-right">
                  <span className="section-title__tagline">
                    MAKE APPOINTMENT
                  </span>
                  <h2 className="section-title__title">Book A Service</h2>
                </div>
                <p className="contact-page-two__right-text">
                  Whether your device needs a quick fix or a full repair — we’re
                  here to help. Book a service with our expert technicians and
                  get back up and running in no time.
                </p>

                <div className="contact-page__points-box">
                  <h3 className="contact-page__points-title">United Kingdom</h3>
                  <ul className="contact-page__points-list list-unstyled">
                    <li>
                      <div className="icon">
                        <span className="icon-send"></span>
                      </div>
                      <div className="text">
                        <p>
                          220 Upper Fifth Street, Regency Court Milton Keynes,
                          MK9 2HR, United Kingdom
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
                          <Link href="tel:01908 669234">01908 669234</Link>
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="icon">
                        <span className="icon-clock"></span>
                      </div>
                      <div className="text">
                        Monday – Friday: 9:00 am to 5:30 pm Saturday: 10:00 am
                        to 4:00 pm Sunday: CLOSED
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Modal>
  );
};

export default BookingModal;
