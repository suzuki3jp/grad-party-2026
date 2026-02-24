import { Suspense } from "react";
import { AccessSection } from "@/components/access";
import { CountdownSection } from "@/components/countdown";
import { DetailsSection } from "@/components/details";
import { Footer } from "@/components/footer";
import { HeroSection } from "@/components/hero";
import { PhotoGallerySection } from "@/components/photo-gallery";
import { SurveySection } from "@/components/survey";

export default function Home() {
  return (
    <>
      <HeroSection />
      <DetailsSection />
      <CountdownSection />
      <SurveySection />
      <Suspense>
        <PhotoGallerySection />
      </Suspense>
      <AccessSection />
      <Footer />
    </>
  );
}
