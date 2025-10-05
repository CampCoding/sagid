"use client";
import React, { useState, useRef } from "react";
import Link from "next/link";

const Doctors = ({ doctors }) => {
  // State for show more/less functionality
  const [showAllDoctors, setShowAllDoctors] = useState(false);

  // Ref for scrolling to top of section
  const teamSectionRef = useRef(null);

  const handleToggle = () => {
    if (showAllDoctors) {
      teamSectionRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });

      setTimeout(() => {
        setShowAllDoctors(false);
      }, 300);
    } else {
      setShowAllDoctors(true);
    }
  };

  const allDoctors = doctors || [];

  const displayedDoctors = showAllDoctors ? allDoctors : allDoctors.slice(0, 3);

  return (
    <section className="team-one pt-0">
      <div className="container">
        <div className="section-title text-center" ref={teamSectionRef}>
          <span className="section-title__tagline">تعرف على فريقنا</span>
          <h2 className="section-title__title sm:text-7xl text-5xl font-bold">
            فريقنا الطبي المتميز
          </h2>
          <p className="section-title__text">
            <span className="font-bold text-xl text-black">
              تعرف على الأطباء المتخصصين في عيادة True Smile
            </span>
            <br />
            فريق من الخبراء المتفانين في خدمة صحة أسنانك
          </p>
        </div>
        <div className="row">
          {displayedDoctors.length > 0 ? (
            displayedDoctors.map((doctor, index) => (
              <div
                key={doctor.doctor_id}
                className="col-xl-4 col-lg-4 col-md-6 mb-4"
              >
                <div className="team-one__single">
                  <div className="team-one__img-box">
                    <div className="team-one__img">
                      <img
                        src={doctor.doctor_image}
                        alt={doctor.doctor_name}
                        className="w-full h-[400px] md:h-[500px] object-cover"
                      />
                    </div>
                    <div className="team-one__content">
                      <h3 className="team-one__name">
                        <Link href="team">{doctor.doctor_name}</Link>
                      </h3>
                      <p className="team-one__sub-title">
                        {doctor.doctor_spscialise}
                      </p>
                      {doctor.doctor_desc && (
                        <p className="text-sm mt-2 px-3 text-gray-600">
                          {doctor.doctor_desc}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            // Fallback doctors
            <>
              <div className="col-xl-4 col-lg-4">
                <div className="team-one__single">
                  <div className="team-one__img-box">
                    <div className="team-one__img">
                      <img src="assets/images/mobilehub/team-1-1.jpg" alt="" />
                    </div>
                    <div className="team-one__content">
                      <h3 className="team-one__name">
                        <Link href="team">د. لؤي ساجد</Link>
                      </h3>
                      <p className="team-one__sub-title">طبيب أسنان استشاري</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-xl-4 col-lg-4">
                <div className="team-one__single">
                  <div className="team-one__img-box">
                    <div className="team-one__img">
                      <img src="assets/images/mobilehub/team-1-2.jpg" alt="" />
                    </div>
                    <div className="team-one__content">
                      <h3 className="team-one__name">
                        <Link href="team">د. سارة محمد</Link>
                      </h3>
                      <p className="team-one__sub-title">أخصائية تقويم أسنان</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-xl-4 col-lg-4">
                <div className="team-one__single">
                  <div className="team-one__img-box">
                    <div className="team-one__img">
                      <img src="assets/images/mobilehub/team-1-3.jpg" alt="" />
                    </div>
                    <div className="team-one__content">
                      <h3 className="team-one__name">
                        <Link href="team">د. أحمد حسن</Link>
                      </h3>
                      <p className="team-one__sub-title">أخصائي زراعة أسنان</p>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>

        {/* Show More/Less Button - Only show if more than 3 doctors */}
        {allDoctors.length > 3 && (
          <div className="row mt-5">
            <div className="col-xl-12 text-center">
              <button onClick={handleToggle} className="thm-btn">
                {showAllDoctors ? (
                  <>
                    <span className="ml-2">عرض أقل</span>
                    <i className="fa fa-chevron-up"></i>
                  </>
                ) : (
                  <>
                    <span className="ml-2">
                      عرض المزيد ({allDoctors.length - 3} أطباء آخرون)
                    </span>
                    <i className="fa fa-chevron-down"></i>
                  </>
                )}
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Doctors;
