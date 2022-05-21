import gsap from "gsap";

export function rotateFilterArrow(target, direction) {
  gsap.to(target, { duration: 1, ease: "elastic.out(1, 0.3)", rotate: 180 * (direction ? 0 : 1) })
}