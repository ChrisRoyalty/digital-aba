import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import axios from "axios";

const PartnerModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    number: "",
    email: "",
    comment: "",
  });

  const toggleModal = () => setIsOpen(!isOpen);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("YOUR_ENDPOINT_HERE", formData);
      alert("Form submitted successfully!");
      setFormData({ name: "", phone: "", number: "", email: "", comment: "" });
      setIsOpen(false);
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Submission failed. Please try again.");
    }
  };

  return (
    <div className="text-gray-700">
      <motion.button
        // href="https://wa.link/k1urvf"
        className="bg-[#BFD4FA] text-[#163F9E] rounded-lg px-8 py-4 lg:text-[15px] text-[18px] font-bold shadow-lg"
        initial={{ opacity: 0, scale: 0.6 }} // Initial state: button is invisible and small
        whileInView={{
          opacity: 1,
          scale: 1.1, // Slight scale-up effect
          y: [30, 0], // Bounce effect when it enters the view (moves from below)
          transition: {
            delay: 0.3, // Delay before starting animation
            duration: 1.2, // Duration of the animation
            ease: "easeOut",
          },
        }}
        viewport={{ once: false }} // Ensure it animates repeatedly as long as it's in view
        whileHover={{
          scale: 1.1,
          textShadow: "0 0 10px rgba(0, 0, 0, 0.3)",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          transition: { type: "spring", stiffness: 300, damping: 15 },
        }}
        onClick={toggleModal}
      >
        Become a Partner
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="w-full fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={toggleModal}
          >
            <motion.div
              className="bg-white p-6 rounded-lg shadow-lg md:w-96 w-[80%] relative"
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -50, opacity: 0 }}
              onClick={(e) => e.stopPropagation()} // Prevent modal from closing when clicking inside
            >
              <button
                className="absolute top-3 right-3 text-gray-600"
                onClick={toggleModal}
              >
                ✕
              </button>
              <h2 className="text-xl font-bold mb-4">Become a Partner</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Full Name"
                  className="w-full border p-2 rounded"
                  required
                />
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone Number"
                  className="w-full border p-2 rounded"
                  required
                />

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email"
                  className="w-full border p-2 rounded"
                  required
                />
                <textarea
                  name="comment"
                  value={formData.comment}
                  onChange={handleChange}
                  placeholder="Your Comment"
                  className="w-full border p-2 rounded"
                  required
                ></textarea>
                <button
                  type="submit"
                  className="bg-blue-500 text-white w-full py-2 rounded hover:bg-blue-600 transition"
                >
                  Submit
                </button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default PartnerModal;
