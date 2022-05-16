import gsap from "gsap";

export async function clientsShow() {
  await gsap.to(".clients__title", {
    delay: 0.3,
    duration: 0.5,
    ease: "expo.out",
    opacity: 1,
    y: 0,
  });
  await gsap.to(".clients__add-btn", {
    duration: 0.5,
    ease: "expo.out",
    opacity: 1,
    y: 0,
  }, '-=.2');
}