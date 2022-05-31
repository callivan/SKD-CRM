import gsap from "gsap";

export function selectHide(list, items, arrow) {

  gsap.to(list, {
    delay: 0.5, duration: 1, ease: "expo.out", scaleY: 0,
    onComplete: () => {
      gsap.to(list.previousElementSibling, { duration: 0, pointerEvents: 'visible' })
    }
  });
  gsap.to(items, {
    duration: 0.5,
    stagger: 0.1,
    ease: "expo.out",
    opacity: 0,
    x: -50,
    onStart: () => {
      gsap.to(list.previousElementSibling, { duration: 0, pointerEvents: 'none' })
    }
  });
  gsap.to(arrow, {
    duration: 1, ease: "expo.out", rotate: 0
  });
}
