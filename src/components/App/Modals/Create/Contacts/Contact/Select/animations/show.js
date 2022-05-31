import gsap from "gsap";

export function selectShow(list, items, arrow) {

  gsap.to(list, {
    duration: 0.5, ease: "expo.out", scaleY: 1, onStart: () => {
      gsap.to(list.previousElementSibling, { duration: 0, pointerEvents: 'none' })
    }
  });
  gsap.to(items, {
    delay: 0.2,
    duration: 0.5,
    stagger: 0.1,
    ease: "expo.out",
    opacity: 1,
    x: 0,
    onComplete: () => {
      gsap.to(list.previousElementSibling, { duration: 0, pointerEvents: 'visible' })
    }
  });
  gsap.to(arrow, { duration: 1, ease: "expo.out", rotate: 180 });
}
