import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCalendarDays} from '@fortawesome/free-solid-svg-icons';
const PrivacyPolicy = () => {
  return (
    <div className="flex flex-row gap-8 px-4 py-6 sm:px-8 font-poppins">      
      <div className="flex-1">
        <div
        className="text-3xl whitespace-nowrap text-slate-800 sm:text-4xl md:text-3xl pt-10  font-bold"
        style={{ "line-height": "1" }}
        >
            Privacy Policy
        </div>
        <div className="pt-5 text-lg">
          <FontAwesomeIcon icon={faCalendarDays} className="text-xl mr-2" />Updated April 3rd, 2024.
        </div>
        <div className="pt-5 font-bold text-xl">
          Welcome to Hostelmatch!
        </div>

        <div className="pt-3">
        Your privacy is important to us, and we want you to feel comfortable and confident<br/>
        using our services. This Privacy Policy explains how HostelHop Platform Ltd.<br/>
        ("Hostelmatch," "we," "us," or "our") collects, uses, and protects your information when<br/>
        you visit our website at hostelmatch.com (the "Website") and use our services.
        </div>        

        <div className="pt-5 text-xl font-bold">
          Updates to This Policy
        </div>

        <div className="pt-3">
          We may update this Privacy Policy from time to time. Any changes will be effective<br/>
          immediately upon posting the updated Privacy Policy on our Website. We encourage<br/>
          you to review this Privacy Policy periodically for any updates. 
        </div>

        <div className="pt-5 text-xl font-bold">
          Information We Collect
        </div>

        <div className="pt-3">
          When you use our Website, we may collect and process the following information:
            <ul className='list-disc p-5'>
              <li>Your IP address</li>
              <li>Your contact details, such as name, location, and email address, when you sign<br/> up or log in</li>
              <li>Other information you provide, such as interests and preferences</li>
              <li>Data about your online behavior and how you use our Website</li>              
            </ul>
            We use this information to improve our services, personalize your experience, and<br/>
            communicate with you about promotions and surveys. 
        </div>

        <div className="pt-5 text-xl font-bold">
          Tracking Reservations
        </div>

        <div className="pt-3">
          We use tracking technologies, primarily affiliate links, to enhance your user experience.<br/>
          The data we track may include booking details, such as accommodation name,<br/>
          destination, and reservation dates. You have control over your data and can manage<br/>
          your tracking preferences.
        </div>

        <div className="pt-5 text-xl font-bold">
          Account Deletion
        </div>

        <div className="pt-3">
          You have the right to request the deletion of your account and related data. Contact us<br/>
          directly, and we will process your request promptly.
        </div>

        <div className="pt-5 text-xl font-bold">
          Securing Your Data
        </div>

        <div className="pt-3">
          We take the security of your data seriously and implement measures to prevent data<br/>
          theft. Your personal information is kept confidential and used in accordance with<br/>
          relevant regulations.
        </div>

        <div className="pt-5 text-xl font-bold">
          Cookies
        </div>

        <div className="pt-3">
          Our Website uses cookies to enhance your browsing experience. Cookies are small<br/>
          pieces of data stored on your device that help us analyze web traffic and customize<br/>
          content. You can control cookies through your browser settings.
        </div>

        <div className="pt-5 text-xl font-bold">
          Log Files
        </div>

        <div className="pt-3">
          Like many websites, we use log files to analyze trends and administer the site. Log file<br/>
          data may include IP addresses, browser type, and other non-personally identifiable<br/>
          information.
        </div>

        <div className="pt-5 text-xl font-bold">
          Restricting Data Collection
        </div>

        <div className="pt-3">
          You can restrict the collection of your personal data by adjusting your preferences when<br/>
          filling out forms on our Website or by contacting us directly.
        </div>

        <div className="pt-5 text-xl font-bold">
          Third-Party Disclosure
        </div>

        <div className="pt-3">
          We do not sell or distribute your personal information to third parties without your<br/>
          consent, except as required by law. We may use your information to send you relevant<br/>
          promotions with your consent. This is in line with the California Online Privacy<br/>
          Protection Act.
        </div>

        <div className="pt-5 text-xl font-bold">
          Children's Privacy
        </div>

        <div className="pt-3">
          Our services are not directed to children under 13, and we do not knowingly collect<br/>
          personal information from children as per the requirements of COPPA (Children’s Online<br/>
          Privacy Protection Act).
        </div>

        <div className="pt-5 text-xl font-bold">
          Your Consent
        </div>

        <div className="pt-3">
          By using our Website, you consent to the terms of this Privacy Policy.
        </div>

        <div className="pt-5 text-xl font-bold">
          Contact Us
        </div>

        <div className="pt-3">
          If you have any questions or feedback about our Privacy Policy, please contact us<br/>
          through the Contact Us page on our Website or email us at <strong>info@hostelmatch.com.</strong>
          <br/>
          <br/>
          <span className='font-bold text-2xl'> Thank you for choosing Hostelmatch! </span>
        </div>


      </div>
    </div>
  );
}

export default PrivacyPolicy;
