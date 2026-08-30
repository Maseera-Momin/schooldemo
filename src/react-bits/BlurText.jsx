import React, { useRef, useEffect } from 'react';
import { motion, useInView } from 'motion/react';

export default function BlurText({
  text = '',
  delay = 100,
  className = '',
  animateBy = 'words', // 'words' or 'letters'
  direction = 'top',
  threshold = 0.1,
  rootMargin = '0px',
  onAnimationComplete,
}) {
  const elements = animateBy === 'words' ? text.split(' ') : text.split('');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: threshold });

  const getInitialPosition = () => {
    switch (direction) {
      case 'top':
        return { y: -30, filter: 'blur(10px)', opacity: 0 };
      case 'bottom':
        return { y: 30, filter: 'blur(10px)', opacity: 0 };
      default:
        return { filter: 'blur(10px)', opacity: 0 };
    }
  };

  return (
    <span ref={ref} className={`inline-block ${className}`}>
      {elements.map((el, i) => (
        <motion.span
          key={i}
          initial={getInitialPosition()}
          animate={isInView ? { y: 0, filter: 'blur(0px)', opacity: 1 } : getInitialPosition()}
          transition={{
            duration: 0.6,
            delay: (i * delay) / 1000,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
          onAnimationComplete={i === elements.length - 1 ? onAnimationComplete : undefined}
          className="inline-block"
        >
          {el === ' ' ? '\u00A0' : el}
          {animateBy === 'words' && i < elements.length - 1 && '\u00A0'}
        </motion.span>
      ))}
    </span>
  );
}
