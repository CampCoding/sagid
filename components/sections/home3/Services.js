"use client";
import React, { useState, useEffect } from "react";
import {
  Smartphone,
  Tablet,
  Laptop,
  Wrench,
  Zap,
  Shield,
  ArrowRight,
  ArrowLeft,
} from "lucide-react";
import Blurry from "./../../ui/blurry";
import { useRouter } from "next/navigation";
import { LettersPullUp } from "./../../ui/LettersPullUp";

export default function TechRepairServices() {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const services = [
    {
      id: 1,
      title: "الفحص والتنظيف الوقائي",
      description: "علاج الأسنان الاحترافي بتقنيات طبية متقدمة وحرفية عالية",
      icon: Smartphone,
      image:
        "https://res.cloudinary.com/dkc5klynm/image/upload/v1752393734/atikah-akhtar-hKaYlAF1nDw-unsplash_11zon_v3dcjj.jpg",
      features: [
        "كشف شامل باستخدام األشعة الرقمية",
        "إزالة الجير وتلميع الأسنان",
        "حماية بالفلورايد وتوجيهات للعناية المنزلية",
      ],
      color: "from-yellow-500 to-yellow-400",
      path: "appointment",
    },
    {
      id: 2,
      title: "حشوات الأسنان التجميلية",
      description:
        "حشوات تجميلية بلون الأسنان لملء العيوب واستعادة الشكل الطبيعي والقوة في جلسة واحدة.",
      icon: Tablet,
      image:
        "https://res.cloudinary.com/dkc5klynm/image/upload/v1752392183/pexels-cedric-fauntleroy-4269684_11zon_zhdgyn.jpg",
      features: [
        "حشوات بلون السن الطبيعي (كومبوزيت)",
        "علاج يتتسعل واالتسوس والحشوا بالع عالیب",
      ],
      color: "from-yellow-500 to-yellow-400",
      path: "appointment",
    },
    {
      id: 3,
      title: "جراحات الفم",
      description: "جراحات صغيرة لعالج التهابات أو مشاكل فموية",
      icon: Laptop,
      image:
        "https://res.cloudinary.com/dkc5klynm/image/upload/v1752391989/pexels-karolina-grabowska-6627567_11zon_ykqofi.jpg",
      features: [
        "خلع ضروس العقل والضروس المطمورة",
        "جراحات صغيرة لعالج التهابات أو مشاكل فموية",
      ],
      color: "from-yellow-500 to-yellow-400",
      path: "appointment",
    },
  ];

  const router = useRouter();

  return (
    <div className="relative min-h-screen   overflow-hidden">
      {/* Dynamic Background Pattern */}

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full animate-pulse`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 container mx-auto px-6 py-20">
        {/* Header Section */}
        <div
          className={`text-center mb-16 transform transition-all duration-1000 `}
        >
          <div className="  inline-flex items-center gap-2 bg-gradient-to-r  from-blue-500 to-cyan-400 text-white px-6 py-2 rounded-full text-base font-medium mb-6 shadow-lg">
            {/* <Wrench className="w-4 h-4" /> */}
            خدماتنا
          </div>

          {/* <h2 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6 leading-tight">
            Our{" "}
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-500 bg-clip-text text-transparent">
            Efficient
            </span>{" "}
            Solution
          </h2> */}
          <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-500 bg-clip-text text-transparent">
            <div className="text-5xl md:text-6xl font-bold text-gray-800 mb-6 leading-tight">
              خدماتنا المتميزة
            </div>
          </div>

          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            خدمات علاج الأسنان الاحترافية بتقنيات طبية متقدمة وحرفية عالية.
          </p>
        </div>

        {/* Services Grid */}
        <div className="flex  flex-col lg:flex-row  items-start justify-center  gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isHovered = hoveredCard === service.id;

            return (
              <div
                key={service.id}
                className={`group w-full relative transform transition-all duration-700 ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-20 opacity-0"
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
                onMouseEnter={() => setHoveredCard(service.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div
                  className={`relative rounded-3xl p-8 h-full shadow-xl transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 magnetic-item glassy-1 ${
                    isHovered ? "scale-105 " : ""
                  }`}
                >
                  {/* Gradient Border Effect */}
                  <div
                    className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${service.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-xl`}
                  />

                  {/* Service Image */}
                  <div className="relative mb-6 overflow-hidden rounded-2xl">
                    <img
                      src={service.image}
                      alt={service.title}
                      className={`w-full h-48 object-cover transition-transform duration-700 ${
                        isHovered ? "scale-110" : "scale-100"
                      }`}
                    />
                    <div
                      className={`absolute inset-0 bg-gradient-to-r ${service.color} opacity-20 transition-opacity duration-500`}
                    />

                    {/* Floating Icon */}
                  </div>

                  {/* Content */}
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold text-gray-800 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text transition-all duration-300">
                      {service.title}
                    </h3>

                    {/* Features List */}
                    <div
                      className={`space-y-2 overflow-hidden transition-all duration-500 ${
                        isHovered ? "h-32 opacity-100" : "h-0 opacity-0"
                      }`}
                    >
                      {service.features.map((feature, idx) => (
                        <div
                          key={idx}
                          className="flex items-center gap-2 text-sm text-gray-600"
                        >
                          <Zap className="w-3 h-3 text-green-500" />
                          {feature}
                        </div>
                      ))}
                    </div>

                    {/* Action Button */}
                    <div
                      className={`pt-4 transition-all duration-500 ${
                        isHovered
                          ? "translate-y-0 opacity-100"
                          : "translate-y-4 opacity-0 hidden"
                      }`}
                    >
                      <button
                        onClick={() => {
                          router.push(`/${service.path}`);
                        }}
                        className={`w-full bg-gradient-to-r ${service.color} text-white py-3 px-6 rounded-xl font-medium flex items-center justify-center gap-2 hover:shadow-lg transition-all duration-300 group/btn`}
                      >
                        <Shield className="w-4 h-4" />
                        احجز الآن
                        <ArrowLeft className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
