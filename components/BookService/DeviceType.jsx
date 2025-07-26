"use client";

import Link from "next/link";
import { useState } from "react";
import cx from "classnames";
import { FaCheckCircle } from "react-icons/fa";

const deviceTypes = [
  {
    label: "Mobile Phone",
    value: "mobile",
    iconClass: "icon-phone",
    delay: "100ms",
  },
  {
    label: "Tablet",
    value: "tablet",
    iconClass: "icon-tap",
    delay: "200ms",
  },
  {
    label: "Laptop / PC",
    value: "laptop",
    iconClass: "icon-laptop",
    delay: "300ms",
  },
];

const DeviceType = ({ goToNext, selectedData }) => {
  const [selected, setSelected] = useState(null);

  return (
    <section className=" ">
      <div className="container  rounded-lg ">
        <div className="row">
          {deviceTypes.map((item, index) => (
            // Services Two Single Start
            <div
              key={index}
              className={cx(
                "col-xl-4 col-lg-6 col-md-6 wow fadeInUp cursor-pointer group  "
              )}
              data-wow-delay={item.delay}
              onClick={() => goToNext(item.label)}
            >
              <div
                className={cx(
                  "services-two__single smallCard border relative glassy",
                  selectedData?.type == item.label &&
                    "!border-2 !border-mobihubBaseColor !shadow-2xl glassy-1"
                )}
              >
                {" "}
                {selectedData?.type == item.label && (
                  <div className="absolute top-5 left-5  text-2xl ">
                    <FaCheckCircle className="text-baseColor shadow-md rounded-full " />
                  </div>
                )}
                <div className="services-two__single-inner">
                  <div className="services-two__icon">
                    <span className={item.iconClass}></span>
                  </div>
                  <h3 className="services-two__title">
                    <div className="services-details group-hover:text-baseColor cursor-pointer transition-all duration-500">
                      {item.label}
                    </div>
                  </h3>
                </div>
              </div>
            </div>
            //Services Two Single End
          ))}
        </div>
      </div>
    </section>
  );
};

export default DeviceType;
