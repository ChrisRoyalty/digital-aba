import React, { useState } from "react";
import emailjs from "emailjs-com";

const Action = () => {
  const [email, setEmail] = useState("");
  const [modalVisible, setModalVisible] = useState(false);

  const handleJoinNow = async () => {
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!email) {
      alert("Please enter a valid email address.");
      return;
    }

    console.log(
      "Service ID:",
      serviceId,
      "Template ID:",
      templateId,
      "Public Key:",
      publicKey
    );

    const templateParams = {
      email: email,
    };

    try {
      const result = await emailjs.send(
        serviceId,
        templateId,
        templateParams,
        publicKey
      );

      console.log("Email sent:", result.text);
      setModalVisible(true);
      setEmail(""); // Clear input field
    } catch (error) {
      console.error("Error sending email:", error);
      alert(
        "An error occurred while sending the email. Please try again later."
      );
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
          MSMEs in Aba.
        </p>
        <div className="rounded-[17px] sm:w-[60%] border-[1px] border-[#BFD4FA] mx-auto flex">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter Email"
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

      {/* Success Modal */}
      {modalVisible && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
          <div className="bg-gray-300 text-black p-8 rounded-md shadow-lg text-center">
            <h3 className="text-lg font-bold mb-4">Success!</h3>
            <p>
              Thank you for joining! You’ll receive an email shortly with
              further information.
            </p>
            <button
              onClick={() => setModalVisible(false)}
              className="mt-4 text-[#BFD4FA] bg-black shadow-lg px-4 py-2 rounded-md"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Action;
