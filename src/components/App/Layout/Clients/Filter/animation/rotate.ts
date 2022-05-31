import gsap from "gsap";

export function rotateFilterArrow(
  target: HTMLElement | null,
  reverse: boolean
) {
  if (!target) return;

  const arrow: HTMLElement | null = target.querySelector(".filter__arrow");

  if (!arrow) return;

  gsap.to(arrow, {
    duration: 1,
    ease: "elastic.out(1, 0.3)",
    rotate: 180 * (reverse ? 1 : 0),
  });
}
