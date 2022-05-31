import gsap from "gsap";

export function clientsShow() {
  gsap.to('.clients__title', { duration: 1, ease: 'expo.out', opacity: 1, x: 0 });
  gsap.to('.clients__add-btn', { delay: .4, duration: 1, ease: 'expo.out', opacity: 1, y: 0 });
}