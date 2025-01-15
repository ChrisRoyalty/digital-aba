import React from "react";
import Footer from "../components/Footer";
const PrivacyPolicy = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center bg-black text-white">
      <div className="w-[90%] mt-[12vh] py-[5vh] bg-black text-white px-6">
        <h1 className="text-4xl font-bold mb-4">
          Privacy Policy for Digital Aba
        </h1>
        <p className=" text-sm mb-8">
          Effective Date: Thursday, 2 January 2025
        </p>

        <div className="space-y-6 text-[#C7C7CC]">
          <p className="leading-relaxed">
            At Digital Aba, we are committed to protecting your privacy and
            ensuring that your personal information is handled in a safe and
            responsible manner. This Privacy Policy outlines the types of
            information we collect, how we use it, and the steps we take to
            safeguard your data.
          </p>
          <p className="leading-relaxed">
            By using our website and services, you consent to the practices
            described in this Privacy Policy.
          </p>

          <div>
            <h2 className="text-2xl font-semibold mb-3">
              1. Information We Collect
            </h2>
            <ul className="list-disc list-inside space-y-2">
              <li>
                <strong>Personal Identification Information:</strong> Name,
                business name, email address, phone number (including WhatsApp
                number), location, and other identifiable information.
              </li>
              <li>
                <strong>Business Information:</strong> Details about your MSME,
                such as industry, size, digital tools used, and additional
                business-related data.
              </li>
              <li>
                <strong>Usage Data:</strong> Interaction data including IP
                addresses, browser type, referring URLs, and interaction times.
              </li>
              <li>
                <strong>Cookies and Tracking Data:</strong> We may use cookies
                or similar technologies to enhance user experience and collect
                analytics.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-3">
              2. How We Use Your Information
            </h2>
            <p className="leading-relaxed">
              We use the information we collect for various purposes, including:
            </p>
            <ul className="list-decimal list-inside space-y-2">
              <li>Providing services to MSMEs and partners.</li>
              <li>Communicating updates, offers, and new services.</li>
              <li>Processing requests and inquiries.</li>
              <li>Improving our website and services.</li>
              <li>Complying with legal obligations and resolving disputes.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-3">
              3. How We Protect Your Information
            </h2>
            <p className="leading-relaxed">
              We implement security measures such as encryption, secure servers,
              and firewalls. While we strive to protect your data, no method of
              transmission over the internet is completely secure.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-3">
              4. Sharing of Your Information
            </h2>
            <p className="leading-relaxed">
              We do not sell or lease your personal information. Sharing occurs
              only with service providers, partners, or when required by law.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-3">
              5. Your Rights and Choices
            </h2>
            <ul className="list-disc list-inside space-y-2">
              <li>
                Access: Request a copy of the information we hold about you.
              </li>
              <li>Correction: Update or correct your information.</li>
              <li>
                Deletion: Request the deletion of your personal data, subject to
                legal obligations.
              </li>
              <li>Opt-Out: Unsubscribe from marketing communications.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-3">
              6. Cookies and Tracking Technologies
            </h2>
            <p className="leading-relaxed">
              We use cookies to analyze traffic and personalize content. You can
              control cookies in your browser settings.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-3">
              7. Links to Third-Party Websites
            </h2>
            <p className="leading-relaxed">
              We are not responsible for the privacy practices of external
              websites. Review their privacy policies before use.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-3">
              8. Children’s Privacy
            </h2>
            <p className="leading-relaxed">
              Our services are not intended for individuals under 18. We do not
              knowingly collect data from children.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-3">
              9. Changes to This Privacy Policy
            </h2>
            <p className="leading-relaxed">
              Updates will be posted on this page with a revised effective date.
              Please review periodically.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-3">10. Contact Us</h2>
            <p className="leading-relaxed">
              If you have questions, contact us at:
            </p>
            <p className="leading-relaxed">
              <strong>Email:</strong> digitalabacenter@gmail.com
              <br />
              <strong>Phone:</strong> +234 803 761 6823
              <br />
              <strong>Address:</strong> 7 Factory Road Aba, Nigeria
            </p>
          </div>
        </div>
      </div>
      <Footer useBackgroundImage={true} textColor="text-white" />
    </div>
  );
};

export default PrivacyPolicy;
