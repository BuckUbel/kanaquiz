import {useEffect, useRef} from "react";

const scrollSnappingClassName = "scroll-snapping";

export const useScrollableContainer = () => {
  const scrollableContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!!scrollableContainerRef.current) {
      const scrollableContainer = scrollableContainerRef.current;

      let isDragging = false;
      let startX = 0;
      let scrollLeft = 0;

      scrollableContainer.addEventListener('mousedown', (e) => {
        isDragging = true;
        scrollableContainer.classList.remove(scrollSnappingClassName);
        scrollableContainer.style.cursor = 'grabbing';
        startX = e.pageX - scrollableContainer.offsetLeft;
        scrollLeft = scrollableContainer.scrollLeft;
      });

      scrollableContainer.addEventListener('mouseleave', () => {
        isDragging = false;
        scrollableContainer.classList.add(scrollSnappingClassName);
      });

      scrollableContainer.addEventListener('mouseup', () => {
        isDragging = false;
        scrollableContainer.classList.add(scrollSnappingClassName);
      });

      scrollableContainer.addEventListener('mousemove', (e) => {
        if (!isDragging) return;
        e.preventDefault();
        const x = e.pageX - scrollableContainer.offsetLeft;
        const walk = (x - startX);
        scrollableContainer.scrollLeft = scrollLeft - walk;
      });

      scrollableContainer.addEventListener('touchstart', (e) => {
        isDragging = true;
        scrollableContainer.classList.remove(scrollSnappingClassName);
        startX = e.touches[0].pageX - scrollableContainer.offsetLeft;
        scrollLeft = scrollableContainer.scrollLeft;
      });

      scrollableContainer.addEventListener('touchend', () => {
        isDragging = false;
        scrollableContainer.classList.add(scrollSnappingClassName);
      });

      scrollableContainer.addEventListener('touchmove', (e) => {
        if (!isDragging) return;
        const x = e.touches[0].pageX - scrollableContainer.offsetLeft;
        const walk = (x - startX);
        scrollableContainer.scrollLeft = scrollLeft - walk;
      });
    }
  }, [scrollableContainerRef]);

  return {
    ref: scrollableContainerRef,
    scrollClassName: scrollSnappingClassName
  };
}
