"use client";

import Link from "next/link";
import {
  AppleIcon,
  GoogleIcon,
  HuaweiIcon,
  LaptopIcon,
  NokiaIcon,
  PcDeviceIcon,
  SamsungIcon,
  XiaomiIcon,
} from "../../public/assets/svgicons";
import cx from "classnames";
import { FaCheckCircle } from "react-icons/fa";
import { useEffect, useState } from "react";

const DeviceBrand = ({ goToNext, selectedData }) => {
  const [types , setTypes] = useState([])

  const mobileAndTabletTypes =  [
    {
      label: "Apple Products",
      Icon: AppleIcon,
      delay: "100ms",
    },
    {
      label: "Samsung Devices",
      Icon: SamsungIcon,
      delay: "100ms",
    },
    {
      label: "Huawei Devices",
      Icon: HuaweiIcon,
      delay: "100ms",
    },
    {
      label: "Google Devices",
      Icon: GoogleIcon,
      delay: "400ms",
    },
    {
      label: "Nokia Devices",
      Icon: NokiaIcon,
      delay: "500ms",
    },
    {
      label: "Xiaomi Devices",
      Icon: XiaomiIcon,
      delay: "600ms",
    },
  ]

  const pcOrLaptopsTypes = [
    {
      label: "Laptops",
      Icon: LaptopIcon,
      delay: "100ms",
    },
    {
      label: "Pcs",
      Icon: PcDeviceIcon,
      delay: "200ms",
    }
  ]

  useEffect(()=>{

    if(selectedData.type == "Mobile Phone" || selectedData.type == "Tablet")
      setTypes(mobileAndTabletTypes)
    else
    setTypes(pcOrLaptopsTypes)

  },[selectedData])



  const brandDevices =
    selectedData.value === "mobile" || selectedData.value === "tablet"
      ? [
          {
            label: "Apple Products",
            Icon: AppleIcon,
            delay: "100ms",
          },
          {
            label: "Samsung Devices",
            Icon: SamsungIcon,
            delay: "100ms",
          },
          {
            label: "Huawei Devices",
            Icon: HuaweiIcon,
            delay: "100ms",
          },
          {
            label: "Google Devices",
            Icon: GoogleIcon,
            delay: "400ms",
          },
          {
            label: "Nokia Devices",
            Icon: NokiaIcon,
            delay: "500ms",
          },
          {
            label: "Xiaomi Devices",
            Icon: XiaomiIcon,
            delay: "600ms",
          },
        ]
      : [];
  return (
    <section className="services-two !p-0">
      <div className="container  rounded-lg ">
        <div className="section-title section-title--two text-center">
          <span className="section-title__tagline">Brands</span>
          <h2 className="section-title__title">Choose your device brand</h2>
        </div>
        <div className="row">
          {types?.map((item, index) => {
            const isSelected = selectedData?.brand === item.label;
            return (
              <div
                key={index}
                className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp cursor-pointer group"
                data-wow-delay={item.delay}
                onClick={() => {
                  goToNext(item.label);
                }}
              >
                <div
                  className={cx(
                    "services-two__single smallCard relative glassy",
                    selectedData?.brand == item.label &&
                      "!border-2 !border-mobihubBaseColor !shadow-2xl"
                  )}
                >
                  {selectedData?.brand == item.label && (
                    <div className="absolute top-5 left-5  text-2xl ">
                      <FaCheckCircle className="text-mobihubBaseColor shadow-md rounded-full " />
                    </div>
                  )}
                  <div className="services-two__single-inner">
                    <div className="services-two__icon">
                      <item.Icon />
                    </div>
                    <h3 className="services-two__title">
                      <div className="services-details group-hover:text-mobihubBaseColor cursor-pointer transition-all duration-500">
                        {item.label}
                      </div>
                    </h3>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default DeviceBrand;
