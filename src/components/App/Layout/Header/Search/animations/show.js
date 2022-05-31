import gsap from "gsap";

export function searchShow() {
  gsap.to('.search', { delay: .5, duration: 1, ease: 'expo.out', stagger: .1, opacity: 1, x: 0 });
}