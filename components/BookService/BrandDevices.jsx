"use client";

import Link from "next/link";
import {
  AppleIcon,
  GoogleIcon,
  HuaweiIcon,
  NokiaIcon,
  SamsungIcon,
  XiaomiIcon,
} from "../../public/assets/svgicons";
import cx from "classnames";
import { FaCheckCircle } from "react-icons/fa";

const BrandDevices = ({ goToNext, selectedData }) => {
  const devices = [
    {
      brand: "APPLE",
      model: "iPhone 16 Pro Max",
      image: "/assets/images/iphons/20231026083627.png",
    },
    {
      brand: "APPLE",
      model: "iPhone 16 Pro",
      image: "/assets/images/iphons/20231026084716.png",
    },
    {
      brand: "APPLE",
      model: "iPhone 16 Plus",
      image: "/assets/images/iphons/20250204232629.png",
    },
    {
      brand: "APPLE",
      model: "iPhone 16",
      image: "/assets/images/iphons/20250205000737.png",
    },
    {
      brand: "APPLE",
      model: "iPhone 15 Pro Max",
      image: "/assets/images/iphons/20231026084716.png",
    },
    {
      brand: "APPLE",
      model: "iPhone 15 Pro",
      image: "/assets/images/iphons/20231026083627.png",
    },
  ];

  return (
    <section className="services-two !p-0">
      <div className="container  rounded-lg ">
        <div className="section-title section-title--two text-center">
          <span className="section-title__tagline">Device Name</span>
          <h2 className="section-title__title">Choose Device Title</h2>
        </div>
        <div className="row">
          {devices.map((item, index) => {
            return (
              //Services Two Single Start

              <div
                className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp cursor-pointer group"
                data-wow-delay="100ms"
                onClick={() => goToNext(item.model)}
              >
                <div
                  className={cx(
                    "services-two__single smallCard relative glassy",
                    selectedData?.ver == item.model &&
                      "!border-2 !border-mobihubBaseColor !shadow-2xl"
                  )}
                >
                  {selectedData?.ver == item.model && (
                    <div className="absolute top-5 left-5  text-2xl ">
                      <FaCheckCircle className="text-mobihubBaseColor shadow-md rounded-full " />
                    </div>
                  )}
                  <div className="services-two__single-inner">
                    <div className="services-two__icon">
                      <img src={item.image} alt="" width={"100"} />
                    </div>
                    <h3 className="services-two__title">
                      <div className="services-details group-hover:text-mobihubBaseColor cursor-pointer transition-all duration-500">
                        {item.model}
                      </div>
                    </h3>
                  </div>
                </div>
              </div>
              //Services Two Single End
            );
          })}

          {/*Services Two Single Start*/}
          {/* <div
            className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
            data-wow-delay="100ms"
          >
            <div className="services-two__single smallCard">
              <div className="services-two__single-inner">
                <div className="services-two__icon">
                  <AppleIcon />
                </div>
                <h3 className="services-two__title">
                  <Link href="/services/apple">Apple Products</Link>
                </h3>
                <p className="services-two__text">
                  Discover the latest iPhones, MacBooks, iPads, and other Apple
                  devices with premium support and services.
                </p>
              </div>
            </div>
          </div> */}

          {/*Services Two Single End*/}
          {/*Services Two Single Start*/}
          {/* <div
            className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
            data-wow-delay="100ms"
          >
            <div className="services-two__single smallCard">
              <div className="services-two__single-inner">
                <div className="services-two__icon">
                  <SamsungIcon />
                </div>
                <h3 className="services-two__title">
                  <Link href="/services/samsung">Samsung Devices</Link>
                </h3>
                <p className="services-two__text">
                  Explore Samsung smartphones, tablets, and accessories with
                  advanced features and reliable performance.
                </p>
              </div>
            </div>
          </div> */}
          {/*Services Two Single End*/}
          {/*Services Two Single Start*/}
          {/* <div
            className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
            data-wow-delay="100ms"
          >
            <div className="services-two__single smallCard">
              <div className="services-two__single-inner">
                <div className="services-two__icon">
                  <HuaweiIcon />
                </div>
                <h3 className="services-two__title">
                  <Link href="/services/huawei">Huawei Devices</Link>
                </h3>
                <p className="services-two__text">
                  Discover innovative Huawei smartphones, tablets, and smart
                  devices offering top-notch performance and design.
                </p>
              </div>
            </div>
          </div> */}
          {/*Services Two Single End*/}
          {/*Services Two Single Start*/}
          {/* <div
            className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
            data-wow-delay="400ms"
          >
            <div className="services-two__single smallCard">
              <div className="services-two__single-inner">
                <div className="services-two__icon">
                  <GoogleIcon />
                </div>
                <h3 className="services-two__title">
                  <Link href="services-details">Google Devices</Link>
                </h3>
                <p className="services-two__text">
                  Duis aute irure dolor in repreh enderit in volup tate velit
                  esse cillum dolore fugiat nulla dolor atur
                </p>
              </div>
            </div>
          </div> */}
          {/*Services Two Single End*/}
          {/*Services Two Single Start*/}
          {/* <div
            className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
            data-wow-delay="500ms"
          >
            <div className="services-two__single smallCard">
              <div className="services-two__single-inner">
                <div className="services-two__icon">
                  <NokiaIcon />
                </div>
                <h3 className="services-two__title">
                  <Link href="services-details">Nokia Devices</Link>
                </h3>
                <p className="services-two__text">
                  Duis aute irure dolor in repreh enderit in volup tate velit
                  esse cillum dolore fugiat nulla dolor atur
                </p>
              </div>
            </div>
          </div> */}
          {/*Services Two Single End*/}
          {/*Services Two Single Start*/}
          {/* <div
            className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
            data-wow-delay="600ms"
          >
            <div className="services-two__single smallCard">
              <div className="services-two__single-inner">
                <div className="services-two__icon services-two__icon--two">
                  <XiaomiIcon />
                </div>
                <h3 className="services-two__title">
                  <Link href="services-details">Xiaomi Devices</Link>
                </h3>
                <p className="services-two__text">
                  Duis aute irure dolor in repreh enderit in volup tate velit
                  esse cillum dolore fugiat nulla dolor atur
                </p>
              </div>
            </div>
          </div> */}
          {/*Services Two Single End*/}
        </div>
      </div>
    </section>
  );
};

export default BrandDevices;
