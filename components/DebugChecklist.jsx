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
    <div className="bg-surface-container-high rounded-md p-6 mt-12 border border-outline-variant">
      <h2 className="text-xl font-display font-bold text-foreground mb-4">Debug Checklist</h2>
      <div className="space-y-3">
        {checklist.map((item) => (
          <div 
            key={item.id} 
            onClick={() => toggleCheck(item.id)}
            className={`flex items-center gap-3 p-3 rounded-md cursor-pointer transition-colors border border-transparent hover:border-outline-variant hover:bg-surface-high ${
              item.checked ? "bg-surface text-foreground opacity-50 line-through" : "bg-surface-container text-foreground"
            }`}
          >
            <span className="text-sm select-none flex-1">{item.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
