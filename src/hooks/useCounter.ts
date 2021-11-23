import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

const MAXIMUN_COUNT = 10;

export const useCounter = () => {
  const [counter, setCounter] = useState(5);
  const counterRef = useRef<HTMLHeadingElement>(null);
  const tl = useRef(gsap.timeline());
  const handleClick = () => {
    setCounter((counter) => Math.min(counter + 1, MAXIMUN_COUNT));
  };
  useEffect(() => {
    if (counter < 10) {
      return;
    } else {
      console.log(
        '%cSe llego al valor máximo',
        'color: red; background-color:black;'
      );

      // Animaciones con timeline
      tl.current.to(counterRef.current, {
        y: -10,
        duration: 0.2,
        ease: 'ease.out',
      });
      tl.current.to(counterRef.current, {
        y: 0,
        duration: 1,
        ease: 'bounce.out',
      });
    }
  }, [counter]);
  return { counter, handleClick, elementToAnimate: counterRef };
};
