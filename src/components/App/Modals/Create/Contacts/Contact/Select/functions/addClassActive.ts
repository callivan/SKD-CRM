export function addClassActive(target: HTMLElement, parent: HTMLElement) {
  const items = parent.querySelectorAll(".select__item");

  items.forEach((item) => {
    const child = item.firstChild;

    if (!child) return;

    if (child.textContent === target.textContent) {
      item.classList.add("active");
    } else {
      item.classList.remove("active");
    }
  });
}
