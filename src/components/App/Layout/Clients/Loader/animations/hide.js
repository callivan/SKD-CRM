import gsap from "gsap";

export async function loaderHide() {
  await gsap.to(".loader__icon", {
    duration: 1,
    ease: "elastic.out(1.5, 1)",
    opacity: 0,
  });
}
