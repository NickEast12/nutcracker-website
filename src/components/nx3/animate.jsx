import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styled from 'styled-components';

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

const AnimateStyles = styled.div`
    opacity: 0;
    transform: translateY(2rem) scale(0.9);
`

export default function Animate({ children }) {
  const container = useRef(null);
  const tl = useRef(null);
  useGSAP(
    () => {
      tl.current = gsap
        .timeline({
          scrollTrigger: {
            trigger: container.current,
            start: 'top bottom', // Starts when the top of ".yourElement" hits the bottom of the viewport
            end: 'top 20%', //
            markers: false,
            toggleActions: 'play pause resume reset',
            scrub: 1.5,
          },
        })
        .to(container.current, {
          y: 0,
          opacity: 1,
          scale: 1,
        })
        .to('.cards div', {
          y: 0,
          opacity: 1,
          scale: 1,
          stagger: {
            each: 0.25
          }
        })
    },
    { scope: container },
  );

  return (
    <AnimateStyles ref={container}>
      {children}
    </AnimateStyles>
  );
}