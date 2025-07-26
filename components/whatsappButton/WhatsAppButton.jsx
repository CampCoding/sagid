"use client";
import { X } from "lucide-react";
import { useState, useEffect } from "react";

const WhatsAppButton = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isRotating, setIsRotating] = useState(false);

  // Close popup when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isPopupOpen &&
        !event.target.closest(".whatsapp-popup") &&
        !event.target.closest(".whatsapp-button")
      ) {
        setIsPopupOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isPopupOpen]);

  const handleButtonClick = () => {
    setIsRotating(true);
    setIsPopupOpen(!isPopupOpen);
    setTimeout(() => setIsRotating(false), 600);
  };

  return (
    <>
      <div className="fixed bottom-5 left-5 z-[9999]">
        {!isPopupOpen && (
          <div className="absolute inset-0 rounded-full animate-pulse-ring"></div>
        )}

        <div
          className="whatsapp-button relative cursor-pointer"
          onClick={handleButtonClick}
        >
          <div
            className={`bg-[#25D366] h-14 w-14 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-all duration-300 overflow-hidden ${
              isRotating ? "animate-spin-bounce" : ""
            }`}
          >
            <div
              className={`transform transition-all duration-300 ${
                isRotating ? "rotate-180 scale-110" : "rotate-0 scale-100"
              }`}
            >
              {isPopupOpen ? (
                <X className="w-7 h-7 text-white transition-all duration-300" />
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                  className="w-7 h-7 fill-white transition-all duration-300"
                >
                  <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
                </svg>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* WhatsApp Popup */}
      <div
        className={`whatsapp-popup fixed bottom-24 left-5 z-[9999] bg-transparent rounded-lg py-2 w-72 transition-all duration-500 ease-out transform ${
          isPopupOpen
            ? "opacity-100 translate-y-0 scale-100"
            : "opacity-0 translate-y-10 scale-95 pointer-events-none"
        }`}
      >
        <div className="space-y-3">
          <a
            href="https://chat.whatsapp.com/DvsxpuWg2Co4ou5PTtFDLA?mode=ac_c"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center p-3 gap-2 bg-gray-100 rounded-lg hover:bg-gray-200 hover:shadow-md transition-all duration-200 hover:scale-105 animate-slide-up"
          >
            <div className="bg-[#25D366] h-10 w-10 rounded-full flex items-center justify-center hover:rotate-12 transition-transform duration-200">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 512"
                className="w-5 h-5 fill-white"
              >
                <path d="M320 96a96 96 0 1 1 0 192 96 96 0 1 1 0-192zm0 224a128 128 0 1 0 0-256 128 128 0 1 0 0 256zm0 32c53 0 101.8 17.9 140.6 48H179.4c38.8-30.1 87.6-48 140.6-48zm0 32c-78.3 0-145.1 48.5-172.8 116.8C170.2 467.2 189 480 210.6 480H429.4c21.7 0 40.4-12.8 63.4-29.2C465.1 382.5 398.3 384 320 384zm320 48c0 44.2-35.8 80-80 80H80c-44.2 0-80-35.8-80-80V128c0-44.2 35.8-80 80-80h480c44.2 0 80 35.8 80 80V432z" />
              </svg>
            </div>
            <div>
              <p className="font-medium text-gray-800">انضم إلى مجموعتنا</p>
              <p className="text-sm text-gray-600">
                انقر للانضمام إلى مجموعة WhatsApp
              </p>
            </div>
          </a>

          <a
            href="https://wa.me/201065014391"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center p-3 gap-2 bg-gray-100 rounded-lg hover:bg-gray-200 hover:shadow-md transition-all duration-200 hover:scale-105 animate-slide-up-delay"
          >
            <div className="bg-[#25D366] h-10 w-10 rounded-full flex items-center justify-center hover:rotate-12 transition-transform duration-200">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                className="w-5 h-5 fill-white"
              >
                <path d="M304 128a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM49.3 464H398.7c-8.9-63.3-63.3-112-129-112H178.3c-65.7 0-120.1 48.7-129 112zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3z" />
              </svg>
            </div>
            <div>
              <p className="font-medium text-gray-800">رسالة مباشرة</p>
              <p className="text-sm text-gray-600">
                انقر للتواصل معنا عبر WhatsApp
              </p>
            </div>
          </a>
        </div>
      </div>
    </>
  );
};

export default WhatsAppButton;
