"use client";

import { useState } from "react";

export default function BasicWashPage() {
  const [selectedPackage, setSelectedPackage] = useState<number | null>(null);
  const [showModal, setShowModal] = useState(false);

  // ✅ Typed FormData Interface
  interface FormData {
    name: string;
    phone: string;
    carType: string;
    date: string;
    time: string;
  }

  const [formData, setFormData] = useState<FormData>({
    name: "",
    phone: "",
    carType: "",
    date: "",
    time: "",
  });

  const packages = [
    {
      id: 1,
      name: "Express Wash",
      price: 299,
      duration: "10 mins",
      features: ["Exterior Hand Wash", "Wheel Cleaning", "Window Cleaning", "Quick Dry"],
    },
    {
      id: 2,
      name: "Standard Wash",
      price: 499,
      duration: "20 mins",
      features: [
        "Complete Exterior Wash",
        "Wheel & Tire Cleaning",
        "Window & Mirror Clean",
        "Dashboard Wipe",
        "Vacuum Interior",
        "Air Freshener",
      ],
      popular: true,
    },
    {
      id: 3,
      name: "Premium Wash",
      price: 799,
      duration: "25 mins",
      features: [
        "Deep Exterior Wash",
        "Wheel Polish",
        "Complete Interior Vacuum",
        "Dashboard Polish",
        "Door Panel Cleaning",
        "Seat Cleaning",
        "Premium Air Freshener",
        "Tire Shine",
      ],
    },
  ];

  // ✅ FIXED HANDLER TYPE — supports input, textarea & select
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleBooking = () => {
    if (selectedPackage && formData.name && formData.phone && formData.carType && formData.date && formData.time) {
      setShowModal(true);
    } else {
      alert("Please fill all fields");
    }
  };

  const closeModal = () => {
    setShowModal(false);
    setFormData({ name: "", phone: "", carType: "", date: "", time: "" });
    setSelectedPackage(null);
  };

  return (
    <div>
      {/* Header Section */}
      <div className="bg-gradient-to-r from-gray-800 via-sky-800 to-gray-800 py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-5xl font-bold text-white mb-4">Basic Wash Packages</h2>
          <p className="text-xl text-sky-100 max-w-2xl mx-auto">
            Choose from our professional car wash packages designed to meet your needs and budget
          </p>
        </div>
      </div>

      {/* Packages Section */}
      <div className="max-w-7xl mx-auto px-4 py-16 grid md:grid-cols-3 gap-8">
        {packages.map((pkg) => (
          <div
            key={pkg.id}
            className={`bg-white rounded-2xl shadow-2xl overflow-hidden transform transition-all duration-300 hover:scale-105 ${
              selectedPackage === pkg.id ? "ring-4 ring-sky-800" : ""
            } ${pkg.popular ? "md:-mt-4 md:mb-0" : ""}`}
          >
            {pkg.popular && (
              <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-center py-2 font-bold text-sm">
                MOST POPULAR
              </div>
            )}
            <div className="p-8">
              <h3 className="text-2xl font-bold text-sky-900 mb-2">{pkg.name}</h3>
              <div className="flex items-baseline mb-4">
                <span className="text-5xl font-extrabold text-sky-900">₹{pkg.price}</span>
                <span className="text-gray-500 ml-2">/{pkg.duration}</span>
              </div>
              <ul className="space-y-3 mb-8">
                {pkg.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start text-gray-700">
                    <span className="text-sky-500 mr-2 text-xl">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <button
                onClick={() => setSelectedPackage(pkg.id)}
                className={`w-full py-3 rounded-lg font-bold transition-all duration-300 ${
                  selectedPackage === pkg.id
                    ? "bg-sky-600 text-white"
                    : "bg-sky-900 text-white hover:bg-sky-800"
                }`}
              >
                {selectedPackage === pkg.id ? "Selected" : "Select Package"}
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Booking Form Section */}
      {selectedPackage && (
        <div className="max-w-3xl mx-auto px-4 pb-16">
          <div className="bg-white rounded-2xl shadow-2xl p-8">
            <h3 className="text-3xl font-bold text-sky-900 mb-6 text-center">
              Book Your Appointment
            </h3>
            <div className="space-y-6">
              {/* Name */}
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-sky-900 focus:outline-none transition-colors"
                  placeholder="Enter your name"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-sky-900 focus:outline-none transition-colors"
                  placeholder="Enter your phone number"
                />
              </div>

              {/* Car Type */}
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Car Type</label>
                <select
                  name="carType"
                  value={formData.carType}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-sky-900 focus:outline-none transition-colors"
                >
                  <option value="">Select car type</option>
                  <option value="hatchback">Hatchback</option>
                  <option value="sedan">Sedan</option>
                  <option value="suv">SUV</option>
                  <option value="luxury">Luxury</option>
                </select>
              </div>

              {/* Date & Time */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Date</label>
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleInputChange}
                    min={new Date().toISOString().split("T")[0]}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-sky-900 focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Time</label>
                  <select
                    name="time"
                    value={formData.time}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-sky-900 focus:outline-none transition-colors"
                  >
                    <option value="">Select time</option>
                    <option value="09:00">09:00 AM</option>
                    <option value="10:00">10:00 AM</option>
                    <option value="11:00">11:00 AM</option>
                    <option value="12:00">12:00 PM</option>
                    <option value="14:00">02:00 PM</option>
                    <option value="15:00">03:00 PM</option>
                    <option value="16:00">04:00 PM</option>
                    <option value="17:00">05:00 PM</option>
                  </select>
                </div>
              </div>

              <button
                onClick={handleBooking}
                className="w-full bg-gradient-to-r from-sky-800 to-sky-800 text-white py-4 rounded-lg font-bold text-lg transform transition-all duration-300 hover:scale-105 shadow-lg"
              >
                Confirm Booking
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Confirmation Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full shadow-2xl transform transition-all">
            <div className="text-center">
              <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-5xl">✓</span>
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">Booking Confirmed!</h3>
              <p className="text-gray-600 mb-6">
                Your car wash appointment has been successfully booked.
              </p>
              <div className="bg-sky-50 rounded-lg p-4 mb-6 text-left">
                <p className="text-sm text-gray-700 mb-1">
                  <strong>Name:</strong> {formData.name}
                </p>
                <p className="text-sm text-gray-700 mb-1">
                  <strong>Package:</strong> {packages.find((p) => p.id === selectedPackage)?.name}
                </p>
                <p className="text-sm text-gray-700 mb-1">
                  <strong>Date:</strong> {formData.date}
                </p>
                <p className="text-sm text-gray-700">
                  <strong>Time:</strong> {formData.time}
                </p>
              </div>
              <button
                onClick={closeModal}
                className="w-full bg-sky-900 text-white py-3 rounded-lg font-bold hover:bg-sky-800 transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
