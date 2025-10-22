"use client";

import { useState, ChangeEvent, FormEvent } from "react";
import { FaPhone, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";

interface FormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

interface Errors {
  name?: string;
  email?: string;
  phone?: string;
  subject?: string;
  message?: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<Errors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = (): Errors => {
    const newErrors: Errors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required.";
    else if (!/^[a-zA-Z\s]+$/.test(formData.name)) newErrors.name = "Only letters allowed.";

    if (!formData.email.trim()) newErrors.email = "Email is required.";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Invalid email.";

    if (!formData.phone.trim()) newErrors.phone = "Phone is required.";
    else if (!/^\d{10}$/.test(formData.phone)) newErrors.phone = "Must be 10 digits.";

    if (!formData.subject.trim()) newErrors.subject = "Subject is required.";
    if (!formData.message.trim()) newErrors.message = "Message is required.";

    return newErrors;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Message sent successfully!");
        setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
        setErrors({});
      } else {
        alert("Failed to send message. Please try again.");
      }
    } catch (err) {
          console.error(err); // log for debugging
          alert("An error occurred. Please try again.");
        } finally {
          setIsSubmitting(false);
        }
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Banner Section */}
      <section className="relative h-[100px] sm:h-[100px] md:h-[245px] overflow-hidden flex items-center justify-center text-white">

        <div className="absolute inset-0 bg-gradient-to-r from-gray-800 via-sky-800 to-gray-800"></div>
        <div className="relative z-10 text-center px-4 max-w-screen-md">
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="border-4 border-white rounded-lg px-8 sm:px-16 md:px-20 py-3 bg-black/50 text-white text-3xl sm:text-5xl md:text-6xl font-extrabold drop-shadow-xl leading-tight text-center inline-block"
          >
            Contact Us
          </motion.h1>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Information Cards */}
          <div className="lg:col-span-1 space-y-6">
            {/* Address Card */}
            {/* <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-sky-700 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <div className="bg-sky-100 p-3 rounded-lg">
                  <FaMapMarkerAlt className="text-sky-700 text-2xl" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-gray-800 mb-2">Our Location</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                 
                 
                   India
                  </p>
                  <a 
                    href="https://maps.google.com/?q=Bhatti+Gate+Jhaljjar+Near+Punjab+Sindh+Bank+Haryana+124103" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-3 text-green-800 font-medium hover:text-green-800 transition-colors text-sm"
                  >
                    Get Directions →
                  </a>
                </div>
              </div>
            </div> */}

            {/* Phone Card */}
            <div className="bg-white rounded-lg shadow-md p-6 mt-30 border-l-4 border-sky-700 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <div className="bg-sky-100 p-3 rounded-lg">
                  <FaPhone className="text-sky-700 text-2xl" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-gray-800 mb-2">Phone Number</h3>
                  <a href="tel:+917779829030" className="text-sky-700 font-medium hover:text-sky-800 transition-colors">
                    +91 7779829030
                  </a>
                </div>
              </div>
            </div>

            {/* Email Card */}
            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-sky-700 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <div className="bg-sky-100 p-3 rounded-lg">
                  <FaEnvelope className="text-sky-700 text-2xl" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-gray-800 mb-2">Email Address</h3>
                  <a href="mailto:info@sparkle.in" className="text-sky-700 font-medium hover:text-sky-800 transition-colors break-all">
                    info@sparkle.in
                  </a>
                </div>
              </div>
            </div>

        
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md p-8">
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-3">Contact Us</h2>
                
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name and Email Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      value={formData.name}
                      onChange={(e: ChangeEvent<HTMLInputElement>) =>
                        setFormData({ ...formData, name: e.target.value.replace(/[^a-zA-Z\s]/g, "") })
                      }
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent outline-none transition-all"
                      placeholder="Enter your Name"
                    />
                    {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={(e: ChangeEvent<HTMLInputElement>) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent outline-none transition-all"
                      placeholder="Enter your Email"
                    />
                    {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                  </div>
                </div>

                {/* Phone and Subject Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      value={formData.phone}
                      onChange={(e: ChangeEvent<HTMLInputElement>) =>
                        setFormData({ ...formData, phone: e.target.value.replace(/\D/g, "").slice(0, 10) })
                      }
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent outline-none transition-all"
                      placeholder="10-digit mobile number"
                    />
                    {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                      Subject <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="subject"
                      value={formData.subject}
                      onChange={(e: ChangeEvent<HTMLInputElement>) =>
                        setFormData({ ...formData, subject: e.target.value })
                      }
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent outline-none transition-all"
                      placeholder="Course Inquiry"
                    />
                    {errors.subject && <p className="text-red-500 text-xs mt-1">{errors.subject}</p>}
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    rows={6}
                    value={formData.message}
                    onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent outline-none transition-all resize-none"
                    placeholder="Tell us about your inquiry or question..."
                  />
                  {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-sky-700 text-white py-4 px-6 rounded-lg font-semibold text-lg hover:bg-sky-800 transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-md hover:shadow-lg"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      {/* <section className="bg-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Find Us on Map</h2>
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3498.123456789!2d76.656789!3d28.606789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDM2JzI0LjQiTiA3NsKwMzknMjQuNCJF!5e0!3m2!1sen!2sin!4v1234567890"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Air Aviation Institute Location"
            ></iframe>
          </div>
        </div>
      </section> */}
    </div>
  );
}
