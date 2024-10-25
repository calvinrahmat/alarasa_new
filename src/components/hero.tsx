"use client";

export default function Hero() {
  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('/prasmanan1.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50 z-10" />

      {/* Content */}
      <div className="relative z-20 text-center sm:text-left px-4 sm:px-6 lg:px-8 max-w-xl mx-auto sm:mx-0 sm:ml-16 md:ml-24">
        <div className="flex flex-col mb-4 items-center sm:items-start">
          <div className="flex flex-col sm:flex-row items-center">
            <div className="flex mb-2 sm:mb-0">
              {[...Array(5)].map((_, index) => (
                <svg
                  key={index}
                  className={`w-6 h-6 ${index < 4 ? "text-yellow-400" : ""}`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {index < 4 ? (
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  ) : (
                    <>
                      <defs>
                        <linearGradient id="halfColorGradient">
                          <stop offset="50%" stopColor="#FACC15" />
                          <stop offset="50%" stopColor="#1C2C1C" />
                        </linearGradient>
                      </defs>
                      <path
                        fill="url(#halfColorGradient)"
                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                      />
                    </>
                  )}
                </svg>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row sm:ml-2 items-center">
              <p className="text-sm font-medium text-white mb-2 sm:mb-0 sm:mr-4">
                4.5/5
              </p>
            </div>
          </div>
        </div>
        <h1 className="font-sans md:font-sans text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight">
          SOLUSI CATERINGMU!
        </h1>
        <p className="mt-6 text-xl sm:text-2xl text-gray-300">
          Percayakan Alarasa Catering untuk melengkapi setiap acara special
          kalian! Enak, higienis dan terjangkau!
        </p>
      </div>

      {/* Attribution for screen readers */}
      <div className="sr-only">
        Background image: Our product in use in a modern office setting
      </div>
    </div>
  );
}
