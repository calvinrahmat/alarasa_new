"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <div className="relative h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 bg-bottom">
        <Image
          src="/home-page.png"
          alt="Nasi Box"
          width={1920}
          height={1080}
          priority={true}
          quality={85}
          className="object-cover w-full h-full"
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx4eHRoaHSQrJyEwPENDPzE2O0FBNi5RXUFGSYtNTltcYWFhR2N9fUN2XHlwZHOBcW7/2wBDARUXFx4aHR4eHG5gQD5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm7/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
        />
      </div>


      {/* Content */}
      <div className="relative z-20 text-left px-4 sm:px-6 lg:px-8 max-w-xl ml-8 sm:ml-16 md:ml-24 pb-20">
        <div className="flex items-center ">
          <div className="flex flex-col">
            <div className="ml-4 mb-4">
              <Image
                src="/halal-circle.png"
                alt="Halal Certified"
                width={90}
                height={90}
                className="opacity-90"
              />
            </div>
            <div className="flex items-center mb-2">
              <div className="flex">
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
              <p className="text-sm font-medium text-white ml-2">4.8/5</p>
            </div>
            <div className="flex items-center text-white text-sm">
              <span className="font-bold underline">185+</span>
              <span className="ml-2">Pembeli merasa puas</span>
            </div>
          </div>
        </div>

        <h1 className="font-sans text-4xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-yellow-300 max-w-4xl leading-tight sm:leading-snug lg:leading-snug mb-6">
          <span className="text-yellow-300">Nasi Box Andalanmu</span>
        </h1>

        <p className="text-xl sm:text-2xl text-white">
          Percayakan Alarasa Catering untuk melengkapi setiap acara special
          kalian! Enak, higienis dan terjangkau!
        </p>
      </div>
    </div>
  );
}
