import gsap from "gsap";

export async function contactHide(traget) {
  await gsap.to(traget, { duration: .5, ease: 'expo.out', opacity: 0, x: -100 })
}