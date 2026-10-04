import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingContact from "@/components/layout/FloatingContact";
import { hospitalInfo } from "@/data/hospitalData";

export const metadata = {
  metadataBase: new URL("https://demoeyehospital.com"),
  title: {
    default: `${hospitalInfo.name} | Advanced Eye Care & Microsurgery (Demo Template)`,
    template: `%s | ${hospitalInfo.name}`
  },
  description: `${hospitalInfo.name} is an accredited tertiary eye care hospital offering comprehensive cataract, cornea, retina, glaucoma, refractive LASIK, and pediatric eye care.`,
  keywords: [
    "Eye Hospital Template",
    "Demo Eye Hospital",
    "Advanced Eye Care",
    "Cataract Surgery",
    "Cornea Transplant",
    "Retina Surgery",
    "Glaucoma Treatment",
    "Accredited Eye Hospital"
  ],
  authors: [{ name: hospitalInfo.name }],
  creator: hospitalInfo.name,
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://demoeyehospital.com",
    siteName: hospitalInfo.name,
    title: `${hospitalInfo.name} | Advanced Eye Care & Microsurgery (Demo Template)`,
    description: "Accredited premier eye hospital demo template with over 50,000 successful surgeries.",
    images: [
      {
        url: "/images/2025/10/newslider-2.jpg",
        width: 1200,
        height: 630,
        alt: hospitalInfo.name,
      },
    ],
  },
};

export default function RootLayout({ children }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Hospital",
    "name": hospitalInfo.name,
    "alternateName": "Demo Eye Hospital",
    "description": "Accredited tertiary eye hospital template providing comprehensive ophthalmic surgical care and community services.",
    "url": "https://demoeyehospital.com",
    "logo": "https://demoeyehospital.com/images/branding/demo-logo.png",
    "telephone": hospitalInfo.phone,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": hospitalInfo.address.street,
      "addressLocality": hospitalInfo.address.city,
      "addressRegion": hospitalInfo.address.state,
      "postalCode": hospitalInfo.address.pincode,
      "addressCountry": "US"
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "opens": "09:00",
        "closes": "19:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Sunday"],
        "opens": "09:00",
        "closes": "13:00"
      }
    ]
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-slate-50 text-slate-900 antialiased selection:bg-cyan-500 selection:text-white">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
        <FloatingContact />
      </body>
    </html>
  );
}
