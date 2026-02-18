import { useEffect, useRef, useState } from "react";

const CopperFormWidget = () => {
  const [visible, setVisible] = useState(false);
  const sentinelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Show widget when sentinel (placed after About) has been scrolled past
        setVisible(!entry.isIntersecting && entry.boundingClientRect.top < 0);
      },
      { threshold: 0 }
    );

    if (sentinelRef.current) {
      observer.observe(sentinelRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!visible) return;

    // Check if script already loaded
    const existing = document.querySelector('script[src*="copper.com"]');
    if (existing) return;

    const script = document.createElement("script");
    script.src = "https://forms.copper.com/j/wtpyhfwJG2bScj3GvmyLG2";
    script.type = "text/javascript";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Don't remove — Copper may have initialized
    };
  }, [visible]);

  return (
    <>
      {/* Sentinel element placed inline to detect scroll position */}
      <div ref={sentinelRef} aria-hidden="true" />

      {/* Sticky container for the Copper form */}
      {visible && (
        <div className="fixed bottom-4 right-4 z-40 transition-opacity duration-300">
          <div id="copper-form-widget" />
        </div>
      )}
    </>
  );
};

export default CopperFormWidget;
