"use client";
import { useEffect, useState, useRef } from "react";
import Counter from "./Counter";

export default function CounterUp({ end }) {
  const [inViewport, setInViewport] = useState(false);
  const counterRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !inViewport) {
            setInViewport(true);
          }
        });
      },
      {
        threshold: 0.5, // Trigger when 50% of element is visible
      }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current);
      }
    };
  }, [inViewport]);

  return (
    <>
      <span className="count-text" ref={counterRef}>
        {inViewport ? <Counter end={end} duration={20} /> : 0}
      </span>
    </>
  );
}
