import { HeroSection } from "@/components/hero";
import { DetailsSection } from "@/components/details";
import { CountdownSection } from "@/components/countdown";
import { SurveySection } from "@/components/survey";
import { PhotoGallerySection } from "@/components/photo-gallery";
import { AccessSection } from "@/components/access";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <HeroSection />
      <DetailsSection />
      <CountdownSection />
      <SurveySection />
      <PhotoGallerySection />
      <AccessSection />
      <Footer />
    </>
  );
}
