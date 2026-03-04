import { list } from "@vercel/blob";
import { unstable_noStore as noStore } from "next/cache";
import { PHOTOS, showMockGallery } from "@/constants/photos";
import { PhotoGallerySectionClient } from "./photo-gallery-client";

export async function PhotoGallerySection() {
  noStore();

  const photos = !showMockGallery()
    ? (await list()).blobs.map((blob) => ({
        url: blob.url,
        pathname: blob.pathname,
      }))
    : PHOTOS.map((p) => ({ url: p.url, pathname: p.alt }));

  const shuffled = photos.sort(() => Math.random() - 0.5);

  return (
    <PhotoGallerySectionClient
      photos={shuffled.slice(0, 8)}
      hasMore={shuffled.length > 8}
    />
  );
}
