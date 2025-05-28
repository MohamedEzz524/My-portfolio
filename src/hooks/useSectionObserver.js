import { useEffect, useState, useRef, useCallback } from "react";

export function useSectionObserver(sectionIds) {
  const [activeSection, setActiveSection] = useState(sectionIds[0]);
  const observerRef = useRef(null);

  const callback = useCallback((entries) => {
    const visible = entries.find((entry) => entry.isIntersecting);
    if (visible) {
      setActiveSection(visible.target.id);
    }
  }, []);

  useEffect(() => {
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    if (observerRef.current) observerRef.current.disconnect();

    observerRef.current = new IntersectionObserver(callback, {
      root: null,
      threshold: 0.1,
      rootMargin: "0px 0px -100px 0px",
    });

    elements.forEach((el) => observerRef.current.observe(el));

    return () => observerRef.current?.disconnect();
  }, [sectionIds, callback]);

  return activeSection;
}
