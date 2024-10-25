"use client";

export default function Hero() {
  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('/kitchen3.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/90 z-10" />

      {/* Content */}
      <div className="relative z-20 text-center px-4 sm:px-6 lg:px-8 max-w-3xl">
        <h1 className="font-sans md:font-serif text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight">
          RICE BOX
        </h1>
      </div>

      {/* Attribution for screen readers */}
      <div className="sr-only">
        Background image: Our product in use in a modern office setting
      </div>
    </div>
  );
}
