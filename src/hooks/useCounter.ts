import { useLayoutEffect, useRef, useState, useEffect } from 'react';
import { gsap } from 'gsap';

export const useCounter = ({ maxCount = 10 }) => {
  const [counter, setCounter] = useState(5);
  const elementToAnimate = useRef<any>(null);
  const tl = useRef(gsap.timeline());
  const handleClick = () => {
    setCounter((counter) => Math.min(counter + 1, maxCount));
  };

  useLayoutEffect(() => {
    // Animaciones con timeline
    if (!elementToAnimate.current) return;
    tl.current.to(elementToAnimate.current, {
      y: -10,
      duration: 0.2,
      ease: 'ease.out',
    });
    tl.current.to(elementToAnimate.current, {
      y: 0,
      duration: 1,
      ease: 'bounce.out',
    });
    tl.current.pause();
  }, []);
  useEffect(() => {
    // if (counter < maxCount) return;
    tl.current.play(0);
  }, [counter]);
  return { counter, handleClick, elementToAnimate };
};
