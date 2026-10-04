import HeroSection from "@/components/home/HeroSection";
import StatsBanner from "@/components/home/StatsBanner";
import MeetDoctor from "@/components/home/MeetDoctor";
import ClinicTourSlider from "@/components/home/ClinicTourSlider";
import ServicesSection from "@/components/home/ServicesSection";
import TransformationsPreview from "@/components/home/TransformationsPreview";
import ReviewsSection from "@/components/home/ReviewsSection";
import { clinicInfo } from "@/data/siteData";

export const metadata = {
  title: `Home | ${clinicInfo.name} | Modern Dental Practice`,
  description:
    `${clinicInfo.name}, led by ${clinicInfo.leadDoctor}. Premier dental treatments, aesthetic smile makeovers, and painless dentistry.`
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <StatsBanner />
      <MeetDoctor />
      <ClinicTourSlider />
      <ServicesSection />
      <TransformationsPreview />
      <ReviewsSection />
    </>
  );
}
