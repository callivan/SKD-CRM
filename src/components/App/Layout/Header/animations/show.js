import gsap from "gsap";

export function headerShow() {
  gsap.to('.header', { duration: 1, ease: 'expo.out', stagger: .1, opacity: 1, scaleY: 1 })
  gsap.to('.header__logo', { delay: .5, duration: 1, ease: 'expo.out', stagger: .1, opacity: 1, x: 0 });
}