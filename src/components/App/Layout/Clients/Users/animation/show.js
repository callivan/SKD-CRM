import gsap from "gsap";

export async function usersShow() {
  gsap.fromTo('.users > *', { opacity: 0, x: 50 }, { duration: .5, ease: 'expo.out', stagger: .05, opacity: 1, x: 0 });
  gsap.to('.users__item-line', { delay: .2, duration: 1, ease: 'expo.out', stagger: .1, scaleX: 1 })
}