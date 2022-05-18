import gsap from "gsap";

export function rotateFilterArrow(direction, target) {
  gsap.to(target, { duration: 1, ease: "elastic.out(1, 0.3)", rotate: 180 * direction })
}