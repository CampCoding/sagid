"use client";
import Layout from "@/components/layout/Layout";
import Link from "next/link";
import { useState } from "react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import cx from "classnames";
import Testimonials from "../../components/sharedSections/Testimonials";
import BeforeAfterSliderComponent from "../../components/BeforeAndAfter";
const swiperOptions = {
  modules: [Autoplay, Pagination, Navigation],
  slidesPerView: 1,
  spaceBetween: 30,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  loop: true,

  // Navigation
  navigation: {
    nextEl: ".srn",
    prevEl: ".srp",
  },

  // Pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
};
export default function Gallery() {
  const [selectedTab, setSelectedTab] = useState("before-and-after");

  return (
    <>
      <Layout
        headerStyle={3}
        footerStyle={3}
        breadcrumbTitle="أيد تعيد ابتسامتك"
        caption="كل صورة تبرز العناية والأدوات والمهارة التي تعيد ابتسامتك إلى الحياة"
      >
        {/*Gallery Page Start*/}
        <section className="gallery-page pb-0">
          <div className=" mb-5">
            <div className="sm:flex sm:justify-center lg:justify-center gap-4 ">
              <div className="rounded-md shadow">
                <button
                  onClick={() => setSelectedTab("gallery")}
                  className={cx(
                    "w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-mobihubBaseColor bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10",
                    selectedTab == "gallery" &&
                      "!text-white !bg-mobihubBaseColor"
                  )}
                >
                  المعرض
                </button>
              </div>
              <div className="">
                <button
                  onClick={() => setSelectedTab("before-and-after")}
                  className={cx(
                    "w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-mobihubBaseColor bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10",
                    selectedTab == "before-and-after" &&
                      " !bg-mobihubBaseColor text-white"
                  )}
                >
                  قبل وبعد
                </button>
              </div>
            </div>
          </div>
          <div
            className={cx(
              "container hidden",
              selectedTab == "gallery" && "!block"
            )}
          >
            <div className="row">
              {/*Gallery Page Single Start*/}
              <div className="col-xl-4 col-lg-4 col-md-6">
                <div className="gallery-page__single">
                  <div className="gallery-page__img h-[400px]">
                    <img
                      src="https://res.cloudinary.com/dkc5klynm/image/upload/v1752913579/1_vjcoje.png"
                      alt=""
                    />
                    <div className="gallery-page__icon">
                      <Link
                        className="img-popup"
                        href="https://res.cloudinary.com/dkc5klynm/image/upload/v1752913579/1_vjcoje.png"
                      >
                        <span className="icon-search"></span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              {/*Gallery Page Single End*/}
              {/*Gallery Page Single Start*/}
              <div className="col-xl-4 col-lg-4 col-md-6">
                <div className="gallery-page__single">
                  <div className="gallery-page__img h-[400px]">
                    <img
                      src="https://res.cloudinary.com/dkc5klynm/image/upload/v1752913747/7_tlwjfl.png"
                      alt=""
                    />
                    <div className="gallery-page__icon">
                      <Link
                        className="img-popup"
                        href="https://res.cloudinary.com/dkc5klynm/image/upload/v1752913747/7_tlwjfl.png"
                      >
                        <span className="icon-search"></span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              {/*Gallery Page Single End*/}
              {/*Gallery Page Single Start*/}
              <div className="col-xl-4 col-lg-4 col-md-6">
                <div className="gallery-page__single">
                  <div className="gallery-page__img h-[400px]">
                    <img
                      src="https://res.cloudinary.com/dkc5klynm/image/upload/v1752913822/12_uatg43.png"
                      alt=""
                    />
                    <div className="gallery-page__icon">
                      <Link
                        className="img-popup"
                        href="https://res.cloudinary.com/dkc5klynm/image/upload/v1752913822/12_uatg43.png"
                      >
                        <span className="icon-search"></span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              {/*Gallery Page Single End*/}
              {/*Gallery Page Single Start*/}
              <div className="col-xl-4 col-lg-4 col-md-6">
                <div className="gallery-page__single">
                  <div className="gallery-page__img h-[400px]">
                    <img
                      src="https://res.cloudinary.com/dkc5klynm/image/upload/v1752913831/19_lpvo4j.png"
                      alt=""
                    />
                    <div className="gallery-page__icon">
                      <Link
                        className="img-popup"
                        href="https://res.cloudinary.com/dkc5klynm/image/upload/v1752913831/19_lpvo4j.png"
                      >
                        <span className="icon-search"></span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              {/*Gallery Page Single End*/}
              {/*Gallery Page Single Start*/}
              <div className="col-xl-4 col-lg-4 col-md-6">
                <div className="gallery-page__single">
                  <div className="gallery-page__img h-[400px]">
                    <img
                      src="https://res.cloudinary.com/dkc5klynm/image/upload/v1752913897/25_jdrdzo.png"
                      alt=""
                    />
                    <div className="gallery-page__icon">
                      <Link
                        className="img-popup"
                        href="https://res.cloudinary.com/dkc5klynm/image/upload/v1752913897/25_jdrdzo.png"
                      >
                        <span className="icon-search"></span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              {/*Gallery Page Single End*/}
              {/*Gallery Page Single Start*/}
              <div className="col-xl-4 col-lg-4 col-md-6">
                <div className="gallery-page__single">
                  <div className="gallery-page__img h-[400px]">
                    <img
                      src="https://res.cloudinary.com/dkc5klynm/image/upload/v1752913974/18_cipq6k.png"
                      alt=""
                    />
                    <div className="gallery-page__icon">
                      <Link
                        className="img-popup"
                        href="https://res.cloudinary.com/dkc5klynm/image/upload/v1752913974/18_cipq6k.png"
                      >
                        <span className="icon-search"></span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              {/*Gallery Page Single End*/}
            </div>
          </div>

          <section
            className={cx(
              "block",
              selectedTab == "before-and-after" && "!block"
            )}
          >
            <div className="container my-7" dir="ltr">
              <div className="columns-1 sm:columns-2 lg:columns-2 gap-4 space-y-4">
                <div className="break-inside-avoid">
                  <BeforeAfterSliderComponent
                    firstImage={{
                      imageUrl:
                        "https://downtownmc.valueims.com/wp-content/uploads/2025/06/1.1after-1024x683.jpg.webp",
                      alt: "Before Image",
                    }}
                    secondImage={{
                      imageUrl:
                        "https://downtownmc.valueims.com/wp-content/uploads/2025/06/1.1before-1024x683.jpg.webp",
                      alt: "After Image",
                    }}
                  />
                </div>
                <div className="break-inside-avoid">
                  <BeforeAfterSliderComponent
                    firstImage={{
                      imageUrl:
                        "https://downtownmc.valueims.com/wp-content/uploads/2025/06/1.1before-1024x683.jpg.webp",
                      alt: "After Image",
                    }}
                    secondImage={{
                      imageUrl:
                        "https://downtownmc.valueims.com/wp-content/uploads/2025/06/16.1before-1024x683.jpg.webp",
                      alt: "Before Image",
                    }}
                  />
                </div>
                <div className="break-inside-avoid">
                  <BeforeAfterSliderComponent
                    firstImage={{
                      imageUrl:
                        "https://downtownmc.valueims.com/wp-content/uploads/2025/06/8.1after.jpg.webp",
                      alt: "Before Image",
                    }}
                    secondImage={{
                      imageUrl:
                        "https://downtownmc.valueims.com/wp-content/uploads/2025/06/8.1before.jpg.webp",
                      alt: "After Image",
                    }}
                  />
                </div>
                {/* <div className="break-inside-avoid">
                  <BeforeAfterSliderComponent
                    firstImage={{
                      imageUrl: "/assets/images/before_after/image_5.png",
                      alt: "Before Image",
                    }}
                    secondImage={{
                      imageUrl: "/assets/images/before_after/image5-5.png",
                      alt: "After Image",
                    }}
                  />
                </div>
                <div className="break-inside-avoid">
                  <BeforeAfterSliderComponent
                    firstImage={{
                      imageUrl: "/assets/images/before_after/image_6.png",
                      alt: "Before Image",
                    }}
                    secondImage={{
                      imageUrl: "/assets/images/before_after/image_6-6.png",
                      alt: "After Image",
                    }}
                  />
                </div>
                <div className="break-inside-avoid">
                  <BeforeAfterSliderComponent
                    firstImage={{
                      imageUrl: "/assets/images/before_after/image_8.png",
                      alt: "Before Image",
                    }}
                    secondImage={{
                      imageUrl: "/assets/images/before_after/image_8-8.png",
                      alt: "After Image",
                    }}
                  />
                </div> */}
              </div>
            </div>
          </section>
        </section>

        {/*Gallery Page End*/}

        {/*Testimonial One Start*/}
        <Testimonials />
        {/*Testimonial One End*/}
      </Layout>
    </>
  );
}
