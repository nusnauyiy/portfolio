import { useRef, useState, useEffect } from 'react';

export const useIntersectionObserver = (options = {}) => {
  const [visibleElements, setVisibleElements] = useState(new Set());
  const [hiddenElements, setHiddenElements] = useState(new Set());
  const elementsRef = useRef(new Map());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = entry.target.dataset.observerId;
          if (entry.isIntersecting) {
            setVisibleElements((prev) => new Set([...prev, id]));
            setHiddenElements((prev) => {
              const next = new Set(prev);
              next.delete(id);
              return next;
            });
          } else {
            setHiddenElements((prev) => new Set([...prev, id]));
            setVisibleElements((prev) => {
              const next = new Set(prev);
              next.delete(id);
              return next;
            });
          }
        });
      },
      { threshold: 0.2, ...options }
    );

    elementsRef.current.forEach((element) => {
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [options]);

  const registerElement = (id) => (element) => {
    if (element) {
      element.dataset.observerId = id;
      elementsRef.current.set(id, element);
    }
  };

  return { registerElement, visibleElements, hiddenElements };
};
