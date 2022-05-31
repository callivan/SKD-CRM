import gsap from "gsap";

export function modalShow(traget) {
  gsap.to(traget, { duration: 1, ease: 'expo.out', opacity: 1, y: 0 });
}