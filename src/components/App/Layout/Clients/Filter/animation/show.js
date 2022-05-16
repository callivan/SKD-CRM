import gsap from "gsap";

export function filterShow() {
  gsap.to('.filter > *', { duration: .5, ease: 'expo.out', stagger: .05, opacity: 1, y: 0 })
}