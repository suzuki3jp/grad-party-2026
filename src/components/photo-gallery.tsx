import { list } from "@vercel/blob";
import { unstable_noStore as noStore } from "next/cache";
import { EVENT_END } from "@/constants/event";
import { GALLERY_MOCK_ENABLED, PHOTOS } from "@/constants/photos";
import { PhotoGallerySectionClient } from "./photo-gallery-client";

export async function PhotoGallerySection() {
  noStore();

  const photos =
    GALLERY_MOCK_ENABLED && new Date() < EVENT_END
      ? PHOTOS.map((p) => ({ url: p.url, pathname: p.alt }))
      : (await list()).blobs.map((blob) => ({
          url: blob.url,
          pathname: blob.pathname,
        }));

  return (
    <PhotoGallerySectionClient photos={photos.sort(() => Math.random() - 0.5)} />
  );
}
