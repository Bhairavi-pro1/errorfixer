"use client";

import { useState } from "react";

export default function DebugChecklist() {
  const [checklist, setChecklist] = useState([
    { id: 1, text: "Check URL for typos or incorrect paths", checked: false },
    { id: 2, text: "Check application and server logs", checked: false },
    { id: 3, text: "Verify routing configuration", checked: false },
    { id: 4, text: "Restart server / Clear cache", checked: false },
  ]);

  const toggleCheck = (id) => {
    setChecklist(
      checklist.map((item) =>
        item.id === id ? { ...item, checked: !item.checked } : item
      )
    );
  };

  return (
    <div className="bg-surface-container-high rounded-md p-3 sm:p-6 mt-6 sm:mt-12 border border-outline-variant">
      <h2 className="text-sm sm:text-xl font-display font-bold text-foreground mb-2 sm:mb-4">Debug Checklist</h2>
      <div className="space-y-2 sm:space-y-3">
        {checklist.map((item) => (
          <div 
            key={item.id} 
            onClick={() => toggleCheck(item.id)}
            className={`flex items-center gap-2 sm:gap-3 p-2.5 sm:p-3 rounded-md cursor-pointer transition-colors border border-transparent hover:border-outline-variant hover:bg-surface-high ${
              item.checked ? "bg-surface text-foreground opacity-50 line-through" : "bg-surface-container text-foreground"
            }`}
          >
            <span className="text-xs sm:text-sm select-none flex-1 text-justify hyphens-auto">{item.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
