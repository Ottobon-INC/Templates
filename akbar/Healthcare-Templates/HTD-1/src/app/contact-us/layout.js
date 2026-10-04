import { clinicInfo } from "@/data/siteData";

export const metadata = {
  title: `Contact Us & Book Appointment | ${clinicInfo.name}`,
  description:
    `Schedule your dental consultation with ${clinicInfo.leadDoctor} at ${clinicInfo.name}. Convenient appointment booking, direct call, and location directions.`
};

export default function ContactLayout({ children }) {
  return children;
}
