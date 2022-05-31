import gsap from "gsap";

export function contactShow() {
  gsap.to('.contact', { duration: .5, ease: 'expo.out', opacity: 1, x: 0 })
}