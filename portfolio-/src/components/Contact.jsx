import React, { useRef, useState } from "react";
import { CONTACT } from "../constants";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";

const Contact = () => {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    emailjs
      .sendForm(
        "service_ydmb9pm", // Replace with EmailJS service ID
        "template_xy13oau", // Replace with EmailJS template ID
        formRef.current,
        "LmmKqURbHV427-tPf" // Replace with EmailJS public key
      )
      .then(
        () => {
          setLoading(false);
          setMessage("✅ Message sent successfully!");
          formRef.current.reset();
        },
        (error) => {
          setLoading(false);
          setMessage("❌ Failed to send message. Please try again.");
          console.error("EmailJS Error:", error);
        }
      );
  };

  return (
    <div className="border-b border-neutral-900 min-h-screen flex flex-col justify-center">
      {/* Section Title */}
      <motion.h1
        whileInView={{ y: 0, opacity: 1 }}
        initial={{ y: 75, opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-10 text-center text-4xl bg-gradient-to-r from-cyan-600 via-slate-500 to-purple-600 bg-clip-text text-transparent animate-pulse"
      >
        Get in Touch
      </motion.h1>

      {/* Two-Column Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto px-6 w-full">
        {/* Left Column - Contact Info */}
        <motion.div
          whileInView={{ x: 0, opacity: 1 }}
          initial={{ x: -150, opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col justify-center text-center md:text-left space-y-6"
        >
          <p className="text-lg text-neutral-300">📍 {CONTACT.address}</p>
          <p className="text-lg text-neutral-300">📞 {CONTACT.phoneNo}</p>
          <a
            href={`https://mail.google.com/mail/?view=cm&fs=1&to=${CONTACT.email}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg text-cyan-400 hover:underline hover:text-cyan-300 transition-all"
          >
            ✉️ {CONTACT.email}
          </a>
        </motion.div>

        {/* Right Column - Contact Form */}
        <motion.form
          ref={formRef}
          onSubmit={sendEmail}
          whileInView={{ x: 0, opacity: 1 }}
          initial={{ x: 150, opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="bg-neutral-900 p-8 rounded-xl shadow-lg border border-neutral-800 space-y-6"
        >
          {/* Name */}
          <div>
            <label className="block text-neutral-400 text-sm mb-2">Name</label>
            <input
              type="text"
              name="user_name"
              placeholder="Your Name"
              className="w-full p-3 rounded-lg bg-neutral-800 text-white border border-neutral-700 focus:outline-none focus:border-cyan-400 transition-all"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-neutral-400 text-sm mb-2">Email</label>
            <input
              type="email"
              name="user_email"
              placeholder="Your Email"
              className="w-full p-3 rounded-lg bg-neutral-800 text-white border border-neutral-700 focus:outline-none focus:border-cyan-400 transition-all"
              required
            />
          </div>

          {/* Message */}
          <div>
            <label className="block text-neutral-400 text-sm mb-2">Message</label>
            <textarea
              name="message"
              placeholder="Your Message"
              rows="4"
              className="w-full p-3 rounded-lg bg-neutral-800 text-white border border-neutral-700 focus:outline-none focus:border-cyan-400 transition-all"
              required
            ></textarea>
          </div>

          {/* Submit Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            disabled={loading}
            className={`w-full py-3 rounded-lg bg-gradient-to-r from-cyan-600 to-purple-600 text-white font-semibold shadow-lg transition-all ${
              loading ? "opacity-50 cursor-not-allowed" : "hover:shadow-cyan-500/30"
            }`}
          >
            {loading ? "Sending..." : "Send Message"}
          </motion.button>

          {/* Success/Error Message */}
          {message && (
            <p
              className={`text-center text-sm ${
                message.includes("✅") ? "text-green-400" : "text-red-400"
              }`}
            >
              {message}
            </p>
          )}
        </motion.form>
      </div>
    </div>
  );
};

export default Contact;
