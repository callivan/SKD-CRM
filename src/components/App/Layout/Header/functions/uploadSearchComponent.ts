export function uploadSearch(
  flag: React.Dispatch<React.SetStateAction<boolean>>
) {
  let media = window.matchMedia("(min-width: 768px)");
  let width = document.documentElement.offsetWidth;

  const resizeObserver = new ResizeObserver((entries) => {
    entries.forEach((entry) => {
      if (width !== entry.contentRect.width) {
        if (media.matches) {
          flag(true);
        } else {
          flag(false);
        }
        width = entry.contentRect.width;
      }
    });
  });

  return resizeObserver;
}
