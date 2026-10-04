import Link from "next/link";
import { Scale, ArrowLeft } from "lucide-react";
import { hospitalInfo } from "@/data/hospitalData";

export const metadata = {
  title: "Terms & Conditions | Website Usage & Medical Disclaimer",
  description: `Official terms and conditions for users of ${hospitalInfo.name} website, including medical disclaimers and appointment terms.`
};

export default function TermsConditionsPage() {
  return (
    <div className="bg-slate-50 min-h-screen py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="inline-flex items-center space-x-2 text-xs font-bold text-[#0e3b64] hover:text-[#1380be] mb-6 uppercase tracking-wider"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Home</span>
        </Link>

        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-100 shadow-xl space-y-8">
          <div className="border-b border-slate-100 pb-6">
            <div className="inline-flex items-center space-x-2 bg-blue-50 text-[#1380be] px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-2">
              <Scale className="w-3.5 h-3.5" />
              <span>Legal Guidelines</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
              Terms & Conditions
            </h1>
            <p className="text-sm text-slate-500 mt-1">
              {hospitalInfo.name} (Demo Template Terms & Conditions)
            </p>
          </div>

          <div className="prose prose-slate max-w-none text-sm leading-relaxed text-slate-700 space-y-6">
            <section>
              <h3 className="text-lg font-bold text-slate-900 mb-2">1. Introduction</h3>
              <p>
                Welcome to the official website of {hospitalInfo.name} (&ldquo;Hospital&rdquo;). By accessing or using this website, you agree to comply with and be bound by the following Terms &amp; Conditions. If you do not agree with any part of these terms, please refrain from using the website.
              </p>
            </section>

            <section>
              <h3 className="text-lg font-bold text-slate-900 mb-2">2. Purpose of Website Information & Medical Disclaimer</h3>
              <p>
                The information provided on this website is intended solely for general informational purposes related to eye care services, hospital facilities, consultation hours, and ophthalmic education. The content is not intended to be a substitute for professional medical advice, diagnosis, or clinical treatment.
              </p>
              <p>
                Visitors are strongly advised not to rely solely on website content for medical decisions and are encouraged to consult qualified ophthalmic surgeons directly at our hospital.
              </p>
            </section>

            <section>
              <h3 className="text-lg font-bold text-slate-900 mb-2">3. Enquiry & Appointment Forms</h3>
              <p>
                The website contains enquiry and contact forms to facilitate communication with our scheduling desk. Submission of an enquiry:
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Does not establish a formal doctor&ndash;patient relationship</li>
                <li>Does not guarantee immediate appointment slot or diagnosis</li>
                <li>Requires users to provide accurate and truthful contact information</li>
              </ul>
            </section>

            <section>
              <h3 className="text-lg font-bold text-slate-900 mb-2">4. Limitation of Liability</h3>
              <p>
                While we endeavor to keep all clinical and scheduling information accurate and up to date, {hospitalInfo.name} makes no warranties regarding the completeness or absolute reliability of website content. The Hospital shall not be liable for any loss or inconvenience arising from the use or interpretation of website text.
              </p>
            </section>

            <section>
              <h3 className="text-lg font-bold text-slate-900 mb-2">5. Intellectual Property</h3>
              <p>
                All content on this website, including clinical articles, doctor portraits, hospital branding, logos, and graphic materials, is the intellectual property of {hospitalInfo.name}. Unauthorized reproduction, scraping, or commercial republishing is strictly prohibited.
              </p>
            </section>

            <section>
              <h3 className="text-lg font-bold text-slate-900 mb-2">6. Governing Law & Jurisdiction</h3>
              <p>
                These Terms &amp; Conditions shall be governed by and construed in accordance with applicable laws. Any legal disputes shall be subject to the exclusive jurisdiction of the competent courts in {hospitalInfo.address.city}, {hospitalInfo.address.state}.
              </p>
            </section>

            <section className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
              <h3 className="text-base font-bold text-slate-900 mb-2">7. Contact Information</h3>
              <p>
                <strong>{hospitalInfo.name}</strong><br />
                {hospitalInfo.address.full}<br />
                Phone: {hospitalInfo.phoneDisplay}<br />
                Email: <a href={`mailto:${hospitalInfo.email}`} className="text-[#1380be] underline">{hospitalInfo.email}</a>
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
