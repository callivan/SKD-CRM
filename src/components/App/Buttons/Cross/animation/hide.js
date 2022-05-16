import gsap from "gsap";

export function crossHide() {

  gsap.to('.cross-btn > span', {
    onStart: () => { gsap.to('.cross-btn', { duration: 0, pointerEvents: 'none' }) },
    duration: 1, keyframes: [{ ease: "elastic.out(1, 0.3)", rotate: 0 }, { ease: 'expo.out', scaleX: 0 }]
  });
}