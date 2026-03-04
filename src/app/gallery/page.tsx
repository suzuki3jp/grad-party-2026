import { list } from "@vercel/blob";
import { PhotoGallerySectionClient } from "@/components/photo-gallery-client";
import { EVENT_END } from "@/constants/event";
import { GALLERY_MOCK_ENABLED, PHOTOS } from "@/constants/photos";

export const revalidate = 60;

export default function GalleryPage() {
  return (
    <main className="min-h-screen bg-background py-20">
      <div className="container">
        <GalleryContent />
      </div>
    </main>
  );
}

async function GalleryContent() {
  const photos =
    GALLERY_MOCK_ENABLED && new Date() < EVENT_END
      ? PHOTOS.map((p) => ({ url: p.url, pathname: p.alt }))
      : (await list()).blobs.map((blob) => ({
          url: blob.url,
          pathname: blob.pathname,
        }));

  return (
    <PhotoGallerySectionClient
      photos={photos.sort(() => Math.random() - 0.5)}
    />
  );
}
