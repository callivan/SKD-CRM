import gsap from "gsap";

export async function modalHide(target) {
  if (!target) return;
  await gsap.to(target, { duration: .5, ease: 'expo.out', y: 100, opacity: 0 });
}