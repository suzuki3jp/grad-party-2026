"use client";

import { Camera, X } from "lucide-react";
import Image from "next/image";
import { useQueryState } from "nuqs";
import { SELECTED_PHOTO_KEY } from "@/constants/keys";
import { Button } from "./ui/button";

interface Photo {
  url: string;
  pathname: string;
}

interface PhotoGalleryClientProps {
  photos: Photo[];
}

export function PhotoGallerySectionClient({ photos }: PhotoGalleryClientProps) {
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
        <PhotoGallery photos={photos} />
      </div>
    </section>
  );
}

function PhotoGallery({ photos }: PhotoGalleryClientProps) {
  const [_, setSelectedPhoto] = useQueryState(SELECTED_PHOTO_KEY);

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
      {photos.map((photo, index) => (
        <Button
          key={photo.url}
          onClick={() => setSelectedPhoto(String(index))}
          className="relative aspect-square h-auto w-full overflow-hidden rounded-lg group cursor-pointer transition-transform duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
        >
          <Image
            src={photo.url}
            alt={photo.pathname}
            loading="lazy"
            unoptimized
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            fill
          />
        </Button>
      ))}
      <PhotoViewer photos={photos} />
    </div>
  );
}

function PhotoViewer({ photos }: PhotoGalleryClientProps) {
  const [selectedPhotoIndex, setSelectedPhoto] =
    useQueryState(SELECTED_PHOTO_KEY);

  const selectedPhoto = photos[Number(selectedPhotoIndex)];
  if (selectedPhotoIndex === null || selectedPhoto === undefined) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
      onClick={() => setSelectedPhoto(null)}
    >
      <Button
        onClick={() => setSelectedPhoto(null)}
        className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white z-50"
        aria-label="閉じる"
      >
        <X className="w-6 h-6" />
      </Button>

      <div
        className="max-w-6xl max-h-[90vh] w-full"
        onClick={(e) => e.stopPropagation()}
      >
        <Image
          src={selectedPhoto.url}
          alt={selectedPhoto.pathname}
          unoptimized
          className="w-full h-full object-contain rounded-lg animate-fade-in"
          fill
        />
      </div>
    </div>
  );
}
