export default function AdBanner() {
  return (
    <div className="w-full py-6 flex justify-center">
      <div className="max-w-[728px] w-full h-[90px] bg-surface-high border border-outline-variant border-dashed rounded-md flex items-center justify-center relative overflow-hidden group">
        {/* Subtle background glow for aesthetics */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-tertiary/5 opacity-50"></div>
        <span className="text-sm uppercase tracking-wider font-display font-semibold text-on-surface-variant group-hover:text-foreground transition-colors z-10">
          Advertisement Placeholder
        </span>
      </div>
    </div>
  );
}
