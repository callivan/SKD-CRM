import gsap from "gsap";

export async function filterShow() {
  await gsap.to('.filter > *', { duration: 1, ease: 'expo.out', stagger: .1, opacity: 1, y: 0 })
}