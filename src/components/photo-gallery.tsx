"use client";

import { useState } from "react";
import { X, Camera } from "lucide-react";
import { PHOTOS } from "@/constants/photos";

export function PhotoGallerySection() {
  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="container">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Camera className="w-8 h-8 text-primary" />
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
              フォトギャラリー
            </h2>
          </div>
          <div className="w-16 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto leading-relaxed">
            これまでの思い出の写真をご覧ください。
          </p>
        </div>
        <PhotoGallery />
      </div>
    </section>
  );
}

function PhotoGallery() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
        {PHOTOS.map((photo, index) => (
          <button
            key={index}
            onClick={() => setSelectedIndex(index)}
            className="
              relative aspect-square overflow-hidden rounded-lg
              group cursor-pointer
              transition-transform duration-300 hover:scale-105
              focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2
            "
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={photo.url}
              alt={photo.alt}
              loading="lazy"
              className="
                w-full h-full object-cover
                transition-transform duration-500
                group-hover:scale-110
              "
            />
            <div className="
              absolute inset-0 bg-primary/0 group-hover:bg-primary/10
              transition-colors duration-300
            "></div>
          </button>
        ))}
      </div>

      {selectedIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          onClick={() => setSelectedIndex(null)}
        >
          <button
            onClick={() => setSelectedIndex(null)}
            className="
              absolute top-4 right-4 p-2 rounded-full
              bg-white/10 hover:bg-white/20
              text-white
              transition-colors duration-200
              focus:outline-none focus:ring-2 focus:ring-white
            "
            aria-label="閉じる"
          >
            <X className="w-6 h-6" />
          </button>

          <div
            className="max-w-6xl max-h-[90vh] w-full"
            onClick={(e) => e.stopPropagation()}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={PHOTOS[selectedIndex].url}
              alt={PHOTOS[selectedIndex].alt}
              className="w-full h-full object-contain rounded-lg animate-fade-in"
            />
          </div>
        </div>
      )}
    </>
  );
}
