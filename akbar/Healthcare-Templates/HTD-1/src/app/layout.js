import "./globals.css";
import TopBar from "@/components/layout/TopBar";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingWhatsApp from "@/components/layout/FloatingWhatsApp";
import { clinicInfo, doctorBio } from "@/data/siteData";

export const metadata = {
  metadataBase: new URL("https://www.auradentalstudio.demo"),
  title: {
    default: `${clinicInfo.name} | Modern Aesthetic Dental Care`,
    template: `%s | ${clinicInfo.name}`
  },
  description:
    `${clinicInfo.name} offers expert cosmetic and family dental care led by ${clinicInfo.leadDoctor} with personalized treatments, advanced technology, and a gentle approach.`,
  keywords: [
    "Cosmetic Dentist",
    "Dental Clinic Template",
    "Laser Teeth Whitening",
    "Dental Implants",
    "Clear Aligners",
    "Painless Dentistry",
    "Emergency Dental Care"
  ],
  authors: [{ name: clinicInfo.leadDoctor }],
  creator: clinicInfo.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.auradentalstudio.demo",
    title: `${clinicInfo.name} | Premier Modern Dental Care`,
    description:
      `Expert dental care led by ${doctorBio.name}. Specialized in painless dentistry, aesthetic smile makeovers, laser whitening, and family preventive care.`,
    siteName: clinicInfo.name,
    images: [
      {
        url: "/images/hero-clinic.jpg",
        width: 1200,
        height: 630,
        alt: `${clinicInfo.name} Modern Operatory`
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: `${clinicInfo.name} | Premier Dental Care`,
    description: `Expert dental treatments and smile transformations by ${doctorBio.name}.`,
    images: ["/images/hero-clinic.jpg"]
  },
  icons: {
    icon: "/images/aura-dental-logo.svg",
    apple: "/images/aura-dental-logo.svg"
  }
};

export default function RootLayout({ children }) {
  // Structured JSON-LD schema for LocalBusiness / Dentist
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Dentist",
    "name": clinicInfo.name,
    "image": "https://www.auradentalstudio.demo/images/hero-clinic.jpg",
    "@id": "https://www.auradentalstudio.demo",
    "url": "https://www.auradentalstudio.demo",
    "telephone": clinicInfo.phoneRaw,
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": clinicInfo.address,
      "addressLocality": clinicInfo.city,
      "addressCountry": "US"
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "opens": "09:00",
        "closes": "18:30"
      }
    ],
    "founder": {
      "@type": "Person",
      "name": doctorBio.name,
      "jobTitle": doctorBio.role,
      "honorificPrefix": "Dr."
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": clinicInfo.rating,
      "reviewCount": "100"
    }
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-white text-slate-800 antialiased">
        <TopBar />
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
