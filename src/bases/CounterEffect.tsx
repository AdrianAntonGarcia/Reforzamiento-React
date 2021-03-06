import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

const MAXIMUN_COUNT = 10;
export const CounterEffect = () => {
  const [counter, setCounter] = useState(5);
  const counterRef = useRef<HTMLHeadingElement>(null);
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

      const tl = gsap.timeline();

      // Animaciones con timeline
      tl.to(counterRef.current, { y: -10, duration: 0.2, ease: 'ease.out' });
      tl.to(counterRef.current, { y: 0, duration: 1, ease: 'bounce.out' });

      // gsap
      //   .to(counterRef.current, { y: -10, duration: 0.2, ease: 'ease.out' })
      //   .then(() => {
      //     gsap.to(counterRef.current, {
      //       y: 0,
      //       duration: 1,
      //       ease: 'bounce.out',
      //     });
      //   });
    }
  }, [counter]);
  return (
    <>
      <h1>CounterEffect:</h1>
      <h2 ref={counterRef}>{counter}</h2>
      <button onClick={handleClick}>+1</button>
    </>
  );
};
