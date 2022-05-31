import gsap from "gsap";

export function usersShow(flag) {

  if (flag) {
    gsap.to('.users__item', { duration: .5, ease: 'expo.out', stagger: .1, opacity: 1, x: 0 });
    gsap.to('.users__item-line', { delay: .5, duration: .5, ease: 'expo.out', stagger: .1, scaleX: 1 });
  }
}