import gsap from "gsap";

export function crossShow() {

  gsap.to('.cross-btn > span:nth-of-type(1)', {
    onStart: () => { gsap.to('.cross-btn', { duration: 0, pointerEvents: 'none' }) },
    duration: 1, keyframes: [{ ease: 'expo.out', scaleX: 1 }, { ease: "elastic.out(1, 0.3)", rotate: 45 }]
  });
  gsap.to('.cross-btn > span:nth-of-type(2)', {
    onComplete: () => { gsap.to('.cross-btn', { duration: 0, pointerEvents: 'visible' }) },
    duration: 1, keyframes: [{ ease: 'expo.out', scaleX: 1 }, { ease: "elastic.out(1, 0.3)", rotate: -45 }]
  });
}