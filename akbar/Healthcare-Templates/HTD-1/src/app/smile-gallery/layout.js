import { clinicInfo } from "@/data/siteData";

export const metadata = {
  title: `Smile Transformations Gallery | ${clinicInfo.name}`,
  description:
    `Explore Before and After smile transformations by ${clinicInfo.leadDoctor}. Real cases of cosmetic dentistry, laser teeth whitening, orthodontic alignment, and biomimetic veneers.`
};

export default function GalleryLayout({ children }) {
  return children;
}
