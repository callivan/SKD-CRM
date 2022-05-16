import gsap from "gsap";

export function selectItemHide() {

  function selectPointerHide() {
    gsap.to('.select__btn', { duration: 0, pointerEvents: 'none' })
  }

  function selectPointerShow() {
    gsap.to('.select__btn', { duration: 0, pointerEvents: 'visible' })
  }

  gsap.to('.select__list', { delay: .3, duration: .5, ease: 'expo.out', scaleY: 0, onStart: selectPointerHide });
  gsap.to('.select__item', { duration: .5, ease: 'expo.out', stagger: .05, opacity: 0, x: -50 });
  gsap.to('.select__btn-arrow', {
    duration: 1, ease: 'elastic.out(1, 0.3)', rotate: 0,
    onComplete: selectPointerShow
  });
}