import gsap from "gsap";

export async function headerShow(isSearch) {
  await gsap.to(".header", { duration: .5, ease: "expo.out", scaleY: 1 });

  await gsap.to(".header__logo", {
    duration: .4,
    ease: "expo.out",
    opacity: 1,
    x: 0,
  });


  if (isSearch) {
    await gsap.to(".header__search", {
      duration: .4,
      ease: "expo.out",
      opacity: 1,
      x: 0,
    });
  }
}
