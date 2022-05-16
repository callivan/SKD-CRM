import gsap from "gsap";

export async function errorShow() {
  await gsap.to('.error > *', { duration: .5, ease: 'expo.out', stagger: .1, opacity: 1, x: 0 })
}