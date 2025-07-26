
"use client";


import { motion, useInView } from 'framer-motion';
import React, { useRef } from 'react';
import cx from 'classnames';

export function LettersPullUp({ text, className = '' }) {
  const splittedText = text.split('');

  const pullupVariant = {
    initial: { y: 10, opacity: 0 },
    animate: (i) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: i * 0.05,
      },
    }),
  };

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div className="flex justify-center ">
      {splittedText.map((current, i) => (
        <motion.h2
          key={i}
          ref={ref}
          variants={pullupVariant}
          initial="initial"
          animate={isInView ? 'animate' : ''}
          custom={i}
          className={cx(
            'text-5xl md:text-6xl !font-bold text-gray-800 mb-6 leading-tight  ',
            className
          )}
        >
          {current === ' ' ? <span>&nbsp;</span> : current}
        </motion.h2>
      ))}
    </div>
  );
}
