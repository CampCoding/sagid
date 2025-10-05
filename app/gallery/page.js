"use client";
import Layout from "@/components/layout/Layout";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import cx from "classnames";
import Testimonials from "../../components/sharedSections/Testimonials";
import BeforeAfterSliderComponent from "../../components/BeforeAndAfter";
import axios from "axios";
import { base_url } from "../../utils/base_url";
import { toast } from "../../components/ui/Toast";

const swiperOptions = {
  modules: [Autoplay, Pagination, Navigation],
  slidesPerView: 1,
  spaceBetween: 30,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  loop: true,
  navigation: {
    nextEl: ".srn",
    prevEl: ".srp",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
};

export default function Gallery() {
  const [selectedTab, setSelectedTab] = useState("before-and-after");
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  // Fetch gallery data
  const getGalleryData = async () => {
    setLoading(true);
    try {
      const res = await axios.get(`${base_url}gallarypage/select_gallary.php`);

      if (res.data.status === "success") {
        setData(res.data);
      } else {
        toast.error("Something went wrong");
      }
    } catch (error) {
      console.log(error);
      toast.error("Failed to load gallery data");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getGalleryData();
  }, []);

  // Get gallery info
  const galleryInfo = data?.galary?.[0];

  // Filter images by category
  const galleryImages =
    data?.gallary_imgs?.filter((img) => img.category === "gallery") || [];

  const beforeAfterImages =
    data?.gallary_imgs?.filter((img) => img.category === "before_after") || [];

  // Get testimonials
  const testimonials = data?.testimonials || [];

  // Loading state
  if (loading) {
    return (
      <Layout headerStyle={3} footerStyle={3}>
        <div className="flex items-center justify-center min-h-screen">
          <div className="text-center">
            <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-500 mx-auto"></div>
            <p className="mt-4 text-gray-600">جاري التحميل...</p>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <>
      <Layout
        headerStyle={3}
        footerStyle={3}
        breadcrumbTitle={galleryInfo?.title || "أيد تعيد ابتسامتك"}
        caption={
          galleryInfo?.description ||
          "كل صورة تبرز العناية والأدوات والمهارة التي تعيد ابتسامتك إلى الحياة"
        }
      >
        {/*Gallery Page Start*/}
        <section className="gallery-page pb-0">
          <div className="mb-5">
            <div className="sm:flex sm:justify-center lg:justify-center gap-4">
              <div className="mb-2 flex items-center justify-center">
                <button
                  onClick={() => setSelectedTab("gallery")}
                  className={cx(
                    "w-fit flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-mobihubBaseColor bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10",
                    selectedTab === "gallery" &&
                      "!text-white !bg-mobihubBaseColor"
                  )}
                >
                  المعرض
                </button>
              </div>
              <div className=" flex items-center justify-center">
                <button
                  onClick={() => setSelectedTab("before-and-after")}
                  className={cx(
                    "w-fit flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-mobihubBaseColor bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10",
                    selectedTab === "before-and-after" &&
                      "!bg-mobihubBaseColor text-white"
                  )}
                >
                  قبل وبعد
                </button>
              </div>
            </div>
          </div>

          {/* Gallery Tab */}
          <div
            className={cx(
              "container hidden",
              selectedTab === "gallery" && "!block"
            )}
          >
            <div className="row">
              {galleryImages.length > 0 ? (
                galleryImages.map((image) => (
                  <div key={image.id} className="col-xl-4 col-lg-4 col-md-6">
                    <div className="gallery-page__single">
                      <div className="gallery-page__img max-h-[400px]">
                        <img
                          src={image.image}
                          alt="Gallery"
                          className="w-full h-full object-cover"
                        />
                        <div className="gallery-page__icon">
                          <Link
                            className="img-popup"
                            href={image.image}
                            target="_blank"
                          >
                            <span className="icon-search"></span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="col-12 text-center py-10">
                  <p className="text-gray-500 text-xl">
                    لا توجد صور في المعرض حالياً
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Before & After Tab */}
          <section
            className={cx(
              "hidden",
              selectedTab === "before-and-after" && "!block"
            )}
          >
            <div className="container my-7" dir="ltr">
              <div className="columns-1 sm:columns-2 lg:columns-2 gap-4 space-y-4">
                {beforeAfterImages.length > 0 ? (
                  beforeAfterImages.map((item) => {
                    // Split images by **camp**
                    const [beforeImage, afterImage] = item.image
                      .split("**camp**")
                      .map((img) => img.trim());

                    return (
                      <div key={item.id} className="break-inside-avoid">
                        <BeforeAfterSliderComponent
                          firstImage={{
                            imageUrl: beforeImage || "",
                            alt: "Before Image",
                          }}
                          secondImage={{
                            imageUrl: afterImage || beforeImage || "",
                            alt: "After Image",
                          }}
                        />
                      </div>
                    );
                  })
                ) : (
                  <div className="col-span-2 text-center py-10">
                    <p className="text-gray-500 text-xl">
                      لا توجد صور قبل وبعد حالياً
                    </p>
                  </div>
                )}
              </div>
            </div>
          </section>
        </section>
        {/*Gallery Page End*/}

        {/*Testimonial One Start*/}
        <Testimonials testimonials={testimonials} />
        {/*Testimonial One End*/}
      </Layout>
    </>
  );
}
