import { list } from "@vercel/blob";
import { unstable_noStore as noStore } from "next/cache";
import { EVENT_END } from "@/constants/event";
import { GALLERY_MOCK_ENABLED, PHOTOS } from "@/constants/photos";
import { PhotoGallerySectionClient } from "./photo-gallery-client";

export async function PhotoGallerySection() {
  noStore();

  if (GALLERY_MOCK_ENABLED && new Date() < EVENT_END) {
    const photos = PHOTOS.map((p) => ({ url: p.url, pathname: p.alt }));
    return <PhotoGallerySectionClient photos={photos} />;
  }

  const { blobs } = await list();
  const photos = blobs.map((blob) => ({
    url: blob.url,
    pathname: blob.pathname,
  }));

  return <PhotoGallerySectionClient photos={photos} />;
}
