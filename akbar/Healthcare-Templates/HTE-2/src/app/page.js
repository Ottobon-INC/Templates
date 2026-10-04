import HeroSlider from "@/components/home/HeroSlider";
import FeatureCards from "@/components/home/FeatureCards";
import AboutPreview from "@/components/home/AboutPreview";
import ServicesGrid from "@/components/home/ServicesGrid";
import InfrastructureSlider from "@/components/home/InfrastructureSlider";
import TimingsWidget from "@/components/home/TimingsWidget";
import RecentNews from "@/components/home/RecentNews";

export default function HomePage() {
  return (
    <>
      <HeroSlider />
      <FeatureCards />
      <AboutPreview />
      <ServicesGrid />
      <InfrastructureSlider />
      <TimingsWidget />
      <RecentNews />
    </>
  );
}
