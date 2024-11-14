import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styled from 'styled-components';

gsap.registerPlugin(ScrollTrigger);

const AnimateStyles = styled.div`
    opacity: 0;
    transform: translateY(2rem) scale(0.9);
`;

export default function Animate({ children }) {
  const container = useRef(null);
  const tl = useRef(null);

  useEffect(() => {
    tl.current = gsap.timeline({
      scrollTrigger: {
        trigger: container.current,
        start: 'top bottom',
        end: 'top 10px',
        markers: false,
        toggleActions: 'play pause resume reset',
        scrub: 1.5,
      },
    });

    // Animate the main container
    tl.current.to(container.current, {
      y: 0,
      opacity: 1,
      scale: 1,
    });

    // Check if there are `.card` elements inside the container
    const cardElements = container.current.querySelectorAll('.card');
    console.log(cardElements)
    if (cardElements.length > 0) {
      tl.current.to(cardElements, {
        y: 0,
        opacity: 1,
        scale: 1,
        stagger: {
          each: 0.25,
        },
      });
    }
  }, []);

  return <AnimateStyles ref={container}>{children}</AnimateStyles>;
}
