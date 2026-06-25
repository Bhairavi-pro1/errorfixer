import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex-1 flex flex-col items-center justify-center min-h-[60vh] px-4 text-center">
      <div className="max-w-md w-full space-y-6">
        <h1 className="text-8xl md:text-9xl font-display font-black gradient-text tracking-tighter">
          404
        </h1>
        <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground">
          Page Not Found
        </h2>
        <p className="text-on-surface-variant text-sm md:text-base leading-relaxed">
          The HTTP error code solution or page you are looking for doesn't exist, was moved, or is under construction.
        </p>
        <div className="pt-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-md font-semibold text-white bg-gradient-btn hover:opacity-90 transition-opacity duration-200 shadow-lg cursor-pointer"
          >
            Back to Homepage
          </Link>
        </div>
      </div>
    </div>
  );
}
