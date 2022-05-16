import gsap from "gsap";

export function contactShow() {

}

export function contactCloseBtnShow() {
  gsap.to('.contact__btn-close', { duration: .5, ease: 'expo.out', opacity: 1, y: 0 });
  gsap.to('.contact__btn-cross', { delay: .5, duration: .5, ease: 'expo.out', opacity: 1, x: 0 });
  gsap.to('.contact__btn-cross > span', { delay: .3, duration: .5, ease: 'expo.out', scaleX: 1 });
  gsap.to('.contact__btn-cross > span:nth-of-type(1)', { delay: .5, duration: .5, ease: "elastic.out(1, 0.3)", rotate: 45 });
  gsap.to('.contact__btn-cross > span:nth-of-type(2)', { delay: .5, duration: .5, ease: "elastic.out(1, 0.3)", rotate: -45 });
}