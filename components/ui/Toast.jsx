"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { createRoot } from "react-dom/client";

const Toast = ({
  message,
  type = "success",
  duration = 3000,
  onClose,
  position = "top-left",
}) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
      if (onClose) setTimeout(onClose, 300);
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onClose]);

  const getIcon = () => {
    switch (type) {
      case "success":
        return (
          <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clipRule="evenodd"
            />
          </svg>
        );
      case "error":
        return (
          <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
              clipRule="evenodd"
            />
          </svg>
        );
      default:
        return null;
    }
  };

  const getPositionClass = () => {
    switch (position) {
      case "top-right":
        return "top-4 right-4";
      case "top-left":
        return "top-4 left-4";
      case "bottom-right":
        return "bottom-4 right-4";
      case "bottom-left":
        return "bottom-4 left-4";
      case "top-center":
        return "top-4 left-1/2 -translate-x-1/2";
      case "bottom-center":
        return "bottom-4 left-1/2 -translate-x-1/2";
      default:
        return "top-4 right-4";
    }
  };

  const bgColor = type === "success" ? "bg-green-50" : "bg-red-50";
  const textColor = type === "success" ? "text-green-600" : "text-red-600";
  const borderColor =
    type === "success" ? "border-green-400" : "border-red-400";
  const iconColor = type === "success" ? "text-green-500" : "text-red-500";

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className={`fixed ${getPositionClass()} z-50 glassy ${bgColor} ${textColor} border ${borderColor} rounded-md shadow-lg max-w-sm`}
          initial={{ opacity: 0, y: -50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -20, scale: 0.9 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          <div className="flex p-4 items-center">
            <div className={`flex-shrink-0 ${iconColor}`}>{getIcon()}</div>
            <div className="ml-3">
              <p className="text-sm font-medium">{message}</p>
            </div>
            <div className="ml-auto pl-3">
              <button
                onClick={() => {
                  setVisible(false);
                  if (onClose) setTimeout(onClose, 300);
                }}
                className={`inline-flex ${textColor} focus:outline-none`}
              >
                <svg
                  className="w-4 h-4"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

// Helper functions to show toasts
let toastContainer = null;
let toastId = 0;
const roots = new Map();

// Create container element if it doesn't exist
const createContainer = () => {
  if (typeof document !== "undefined") {
    if (!toastContainer) {
      toastContainer = document.createElement("div");
      toastContainer.id = "toast-container";
      toastContainer.style.position = "fixed";
      toastContainer.style.zIndex = "9999";
      toastContainer.style.top = "0";
      toastContainer.style.right = "0";
      toastContainer.style.padding = "1rem";
      document.body.appendChild(toastContainer);
    }
    return toastContainer;
  }
  return null;
};

// Render a toast
const renderToast = (message, type, duration) => {
  if (typeof document !== "undefined" && typeof window !== "undefined") {
    const container = createContainer();
    const id = `toast-${toastId++}`;

    const toastElement = document.createElement("div");
    toastElement.id = id;
    container.appendChild(toastElement);

    const root = createRoot(toastElement);
    roots.set(id, root);

    root.render(
      <Toast
        message={message}
        type={type}
        duration={duration}
        onClose={() => {
          if (toastElement && container) {
            // Unmount and cleanup
            setTimeout(() => {
              if (roots.has(id)) {
                roots.get(id).unmount();
                roots.delete(id);
                container.removeChild(toastElement);
              }
            }, 300);
          }
        }}
      />
    );
  }
};

// Export toast functions
export const toast = {
  success: (message, duration = 3000) =>
    renderToast(message, "success", duration),
  error: (message, duration = 3000) => renderToast(message, "error", duration),
};

export default Toast;
