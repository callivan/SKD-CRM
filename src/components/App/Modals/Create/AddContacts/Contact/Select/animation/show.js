import gsap from "gsap";

export function selectItemShow() {

  function selectPointerHide() {
    gsap.to('.select__btn', { duration: 0, pointerEvents: 'none' })
  }

  function selectPointerShow() {
    gsap.to('.select__btn', { duration: 0, pointerEvents: 'visible' })
  }

  gsap.to('.select__list', { duration: 1, ease: 'elastic.out(1, 0.3)', scaleY: 1, onStart: selectPointerHide });
  gsap.to('.select__item', { delay: .3, duration: .5, ease: 'expo.out', stagger: .05, opacity: 1, x: 0 });
  gsap.to('.select__btn-arrow', {
    duration: 1, ease: 'elastic.out(1, 0.3)', rotate: 180,
    onComplete: selectPointerShow
  });
}