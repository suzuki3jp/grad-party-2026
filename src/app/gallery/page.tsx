import { list } from "@vercel/blob";
import { Camera } from "lucide-react";
import { Suspense } from "react";
import { PhotoGallerySectionClient } from "@/components/photo-gallery-client";
import { PHOTOS, showMockGallery } from "@/constants/photos";

export const revalidate = 60;

export default function GalleryPage() {
  return (
    <main className="min-h-screen bg-background py-20">
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
        <Suspense>
          <GalleryContent />
        </Suspense>
      </div>
    </main>
  );
}

async function GalleryContent() {
  const photos = !showMockGallery()
    ? (await list()).blobs.map((blob) => ({
        url: blob.url,
        pathname: blob.pathname,
      }))
    : PHOTOS.map((p) => ({ url: p.url, pathname: p.alt }));

  return (
    <PhotoGallerySectionClient
      photos={photos.sort(() => Math.random() - 0.5)}
      hideHeader
    />
  );
}
