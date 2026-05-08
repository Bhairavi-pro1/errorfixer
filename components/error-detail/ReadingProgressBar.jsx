"use client";
import { useState, useEffect } from "react";

export default function ReadingProgressBar() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      if (windowHeight <= 0) return;
      const scroll = totalScroll / windowHeight;
      setProgress(scroll);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-1 z-50 bg-transparent">
      <div 
        className="h-full bg-gradient-to-r from-primary via-tertiary to-primary-container"
        style={{ width: `${progress * 100}%`, transition: "width 0.1s ease-out" }}
      />
    </div>
  );
}
