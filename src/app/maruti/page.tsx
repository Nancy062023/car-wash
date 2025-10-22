"use client";

import React, { useState, ChangeEvent, FormEvent } from "react";
import {Check } from "lucide-react";

interface Package {
  id: number;
  name: string;
  price: number;
  features: string[];
}

interface BookingForm {
  name: string;
  phone: string;
  carModel: string;
  date: string;
  time: string;
}

const Maruti: React.FC = () => {
  const [selectedPackage, setSelectedPackage] = useState<number | null>(null);
  const [bookingForm, setBookingForm] = useState<BookingForm>({
    name: "",
    phone: "",
    carModel: "",
    date: "",
    time: "",
  });

  const packages: Package[] = [
    {
      id: 1,
      name: "Basic Wash",
      price: 499,
      features: ["Exterior wash", "Tyre cleaning", "Dashboard wipe"],
      
    },
    {
      id: 2,
      name: "Deep Cleaning",
      price: 999,
      features: ["Interior deep clean", "Wax polish", "Vacuum cleaning"],
      
    },
    {
      id: 3,
      name: "Premium Detailing",
      price: 1999,
      features: ["Complete detailing", "Engine bay cleaning", "Ceramic coat"],
     
    },
  ];

  const handlePackageSelect = (pkgId: number) => {
    setSelectedPackage(pkgId);
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setBookingForm({ ...bookingForm, [name]: value });
  };

  const handleBooking = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (typeof window !== "undefined") {
      const selected = packages.find((p) => p.id === selectedPackage);
      if (!selected) {
        alert("Please select a package first.");
        return;
      }

      alert(
        `✅ Booking Confirmed!\n\n` +
          `Package: ${selected.name}\n` +
          `Name: ${bookingForm.name}\n` +
          `Phone: ${bookingForm.phone}\n` +
          `Model: ${bookingForm.carModel}\n` +
          `Date: ${bookingForm.date}\n` +
          `Time: ${bookingForm.time}`
      );
    }
  };

  return (
    <div
      suppressHydrationWarning
      className="min-h-screen bg-gradient-to-br from-sky-50 via-white to-blue-50 py-12 px-6 md:px-20"
    >
      <section className="text-center mb-16">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-2">
          Maruti Suzuki Premium Car Care
        </h1>
        <p className="text-gray-600">
          Trusted vehicle detailing and cleaning services since 2021.
        </p>
      </section>

      {/* Packages Section */}
      <section className="grid md:grid-cols-3 gap-8 mb-20">
        {packages.map((pkg) => (
          <div
            key={pkg.id}
            onClick={() => handlePackageSelect(pkg.id)}
            className={`p-6 rounded-2xl shadow-md border transition-transform duration-300 cursor-pointer hover:scale-105 ${
              selectedPackage === pkg.id
                ? "bg-gradient-to-br from-sky-600 to-blue-700 text-white"
                : "bg-white hover:shadow-lg"
            }`}
          >
            <div className="flex items-center space-x-3 mb-4">
              
              <h3 className="text-xl font-semibold">{pkg.name}</h3>
            </div>
            <p
              className={`text-lg font-bold mb-3 ${
                selectedPackage === pkg.id ? "text-yellow-300" : "text-sky-600"
              }`}
            >
              ₹{pkg.price}
            </p>
            <ul className="space-y-2">
              {pkg.features.map((feature, index) => (
                <li
                  key={index}
                  className={`flex items-center space-x-2 ${
                    selectedPackage === pkg.id ? "text-white" : "text-gray-700"
                  }`}
                >
                  <Check className="w-4 h-4 text-green-500" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      {/* Booking Form Section */}
      <section className="bg-white p-8 rounded-2xl shadow-md max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
          Book Your Cleaning Slot
        </h2>
        <form onSubmit={handleBooking} className="space-y-5">
          <div>
            <label className="block font-semibold mb-2 text-gray-700">
              Name
            </label>
            <input
              type="text"
              name="name"
              value={bookingForm.name}
              onChange={handleInputChange}
              required
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500"
            />
          </div>
          <div>
            <label className="block font-semibold mb-2 text-gray-700">
              Phone
            </label>
            <input
              type="tel"
              name="phone"
              value={bookingForm.phone}
              onChange={handleInputChange}
              required
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500"
            />
          </div>
          <div>
            <label className="block font-semibold mb-2 text-gray-700">
              Car Model
            </label>
            <input
              type="text"
              name="carModel"
              value={bookingForm.carModel}
              onChange={handleInputChange}
              required
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500"
            />
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block font-semibold mb-2 text-gray-700">
                Date
              </label>
              <input
                type="date"
                name="date"
                value={bookingForm.date}
                onChange={handleInputChange}
                required
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500"
              />
            </div>
            <div>
              <label className="block font-semibold mb-2 text-gray-700">
                Time
              </label>
              <input
                type="time"
                name="time"
                value={bookingForm.time}
                onChange={handleInputChange}
                required
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500"
              />
            </div>
          </div>
          <button
            type="submit"
            className="w-full py-3 rounded-lg bg-sky-600 text-white font-semibold hover:bg-sky-700 transition-all duration-300"
          >
            Confirm Booking
          </button>
        </form>
      </section>
    </div>
  );
};

export default Maruti;
