import gsap from "gsap";

export async function userRemove(id) {
  const items = document.querySelectorAll('.users__item');
  const item = Array.from(items).find((elem) => Number(elem.id) === id);
  await gsap.to(item, { duration: .5, ease: 'expo.out', opacity: 0, x: -100 });
}