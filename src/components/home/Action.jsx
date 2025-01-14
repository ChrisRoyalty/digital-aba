import React, { useState } from "react";
import Footer from "../Footer";
import emailjs from "emailjs-com";

const Action = () => {
  const [email, setEmail] = useState("");
  const [modalVisible, setModalVisible] = useState(false);

  const handleJoinNow = async () => {
    if (!email) {
      alert("Please enter a valid email address.");
      return;
    }

    // EmailJS configuration
    const templateParams = {
      email: email, // The email input value
    };

    try {
      // Send the email using EmailJS
      const result = await emailjs.send(
        "service_gjjmq39", // Your EmailJS service ID
        "template-eedsyow", // Your EmailJS template ID
        templateParams,
        "your_user_id" // Your EmailJS user ID (available in your EmailJS account)
      );

      console.log("Email sent:", result.text);

      // Show modal to user
      setModalVisible(true);
      setEmail(""); // Clear input
    } catch (error) {
      console.error("Error sending email:", error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <div className="w-full h-fit flex flex-col items-center justify-center text-white pt-16 bg-transparent">
      <div className="w-[90%] h-fit text-center flex flex-col gap-8">
        <h2 className="lg:text-[32px] text-[20px] font-bold">
          Take Action Today!
        </h2>
        <p className="w-[90%] sm:w-[80%] lg:w-[65%] m-auto lg:text-[24px] text-[17px] text-[#D1D1D6]">
          Join the Digital Aba Movement and help shape the digital future of
          MSMEs in Aba. Whether you're an MSME, tech company, innovator,
          sponsor, or partner, your contribution is vital.
        </p>
        <div className="rounded-[17px] sm:w-[60%] border-[1px] border-[#BFD4FA] mx-auto flex">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter Email "
            className="px-4 bg-transparent rounded-[17px] border-none focus:ring-0 outline-none h-[43px] w-[60%]"
          />
          <button
            onClick={handleJoinNow}
            className="bg-[#BFD4FA] text-[#163F9E] rounded-[17px] h-[43px] w-[40%] hover:bg-[#BFD4FA]/95"
          >
            Join Now
          </button>
        </div>
      </div>

      {/* Modal */}
      {modalVisible && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
          <div className="bg-white p-8 rounded-md shadow-lg text-center">
            <h3 className="text-lg font-bold mb-4">Success!</h3>
            <p>
              Thank you for joining! You’ll receive an email shortly with
              further information. Stay connected!
            </p>
            <button
              onClick={() => setModalVisible(false)}
              className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md"
            >
              Close
            </button>
          </div>
        </div>
      )}
      {/* <Footer bgColor=""/> */}
    </div>
  );
};

export default Action;
