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

import { FaRegCheckCircle } from "react-icons/fa";

import cx from "classnames";

import { useEffect, useId, useState } from "react";
const DeviceFixPrice = ({selectedData , setSelectedData}) => {
  const fixingServices = [
    {
      title: "Cracked Screen",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      icon: "icon-tap",
    },
    {
      title: "Battery Replacement",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      icon: "icon-cell",
    },
    {
      title: "OS Update",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      icon: "icon-os",
    },
    {
      title: "Water Damage",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      icon: "icon-setting",
    },
    {
      title: "Charging Repair",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      icon: "icon-smartphone-1",
    },
    {
      title: "Speaker Not Working",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      icon: "icon-speaker",
    },
    {
      title: "Headphone Jack",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      icon: "icon-headphones",
    },
    {
      title: "Wifi / Bluetooth",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      icon: "icon-nfc",
    },
  ];

  const [selected, setSelected] = useState([]);

  const handleSelectItem = (item) => {
    setSelected((prev) => {
      const exists = prev.find((i) => i.title === item.title);
      if (exists) {
        // remove from selection
        return prev.filter((i) => i.title !== item.title);

      } else {
        // add to selection
        return [...prev, item];
      }
    });
  };

  useEffect(() => {
    setSelectedData((prev) => ({ ...prev, whatToFix: selected }));
  }, [selected]);

  return (
    <section className="services-two !p-0">
      <div className="container rounded-lg ">
        <div className="section-title section-title--two text-center">
          <span className="section-title__tagline">How To fix?</span>
          <h2 className="section-title__title">Tell Us How Do You Want To Solve Your Device?</h2>
        
        </div>
        <div className="row">
          <div className="fixing-one__points-box">
            <ul className="fixing-one__points !grid !grid-cols-2 !gap-4 list-unstyled">
              {fixingServices.map((item, index) => (
                <li
                  key={index}
                  className={cx("cursor-pointer group glassy h-full m-0")}
                  onClick={() => handleSelectItem(item)}
                >
                  <div className="icon">
                    <span className={item.icon}></span>
                  </div>
                  <div className="content">
                    <h3
                      className={cx(
                        "group-hover:text-baseColor group-hover:underline flex items-center gap-2",
                        selected?.find((i) => i.title == item.title)
                          ? "text-baseColor"
                          : ""
                      )}
                    >
                      {item.title}

                      {Boolean(
                        selected?.find((i) => i.title == item.title)
                      ) && <FaRegCheckCircle className="text-green-400" />}
                    </h3>

                    <p>{item.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DeviceFixPrice;
