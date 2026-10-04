import Link from "next/link";
import { Shield, ArrowLeft } from "lucide-react";
import { hospitalInfo } from "@/data/hospitalData";

export const metadata = {
  title: "Privacy Policy | Patient Data Confidentiality",
  description: `Privacy policy of ${hospitalInfo.name} regarding patient personal data, privacy compliance, and website usage.`
};

export default function PrivacyPolicyPage() {
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
              <Shield className="w-3.5 h-3.5" />
              <span>Legal & Compliance</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
              Privacy Policy
            </h1>
            <p className="text-sm text-slate-500 mt-1">
              {hospitalInfo.name} (Demo Template Privacy Policy)
            </p>
          </div>

          <div className="prose prose-slate max-w-none text-sm leading-relaxed text-slate-700 space-y-6">
            <section>
              <h3 className="text-lg font-bold text-slate-900 mb-2">1. Introduction</h3>
              <p>
                {hospitalInfo.name} is committed to protecting the privacy and confidentiality of personal information shared by users of this website. This Privacy Policy explains how we collect, use, store, and safeguard personal data.
              </p>
            </section>

            <section>
              <h3 className="text-lg font-bold text-slate-900 mb-2">2. Information We Collect</h3>
              <p>
                For the purposes of applicable data protection laws, {hospitalInfo.name} shall be the data controller of personal information collected through this website.
              </p>
              <p>We may collect the following personal information through enquiry or contact forms:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Name</li>
                <li>Contact phone number</li>
                <li>Email address</li>
                <li>Details provided in the enquiry or appointment message</li>
              </ul>
              <p>
                Additionally, standard technical information such as IP address, browser type, and access time may be collected automatically for website security and analytics purposes.
              </p>
            </section>

            <section>
              <h3 className="text-lg font-bold text-slate-900 mb-2">3. Purpose of Data Collection</h3>
              <p>The information collected is used solely for:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Responding to patient inquiries and confirming appointments</li>
                <li>Providing clinical information about hospital specialties</li>
                <li>Internal administrative and record-keeping purposes</li>
              </ul>
              <p>
                We do not collect personal data for third-party commercial marketing campaigns through this website.
              </p>
            </section>

            <section>
              <h3 className="text-lg font-bold text-slate-900 mb-2">4. Data Sharing and Disclosure</h3>
              <p>
                Personal information collected through this website is not sold, rented, or shared with third parties, except when required by law or judicial authorities, or for internal clinical use by authorized hospital personnel.
              </p>
            </section>

            <section>
              <h3 className="text-lg font-bold text-slate-900 mb-2">5. Data Security</h3>
              <p>
                {hospitalInfo.name} implements reasonable administrative and technical safeguards to protect personal information against unauthorized access, alteration, or disclosure.
              </p>
            </section>

            <section>
              <h3 className="text-lg font-bold text-slate-900 mb-2">6. User Rights</h3>
              <p>
                Users may request access to, correction, or deletion of their personal information by contacting the Hospital using the details provided below.
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
