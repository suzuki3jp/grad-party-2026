import { list } from "@vercel/blob";
import { Suspense } from "react";
import { PhotoGallerySectionClient } from "@/components/photo-gallery-client";
import { PHOTOS, showMockGallery } from "@/constants/photos";

export const revalidate = 60;

export default function GalleryPage() {
  return (
    <main className="min-h-screen bg-background py-20">
      <div className="container">
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
    />
  );
}
