"use client";
import React, { useState, useEffect } from 'react';
import { ArrowLeft, Check } from 'lucide-react';
import Image from 'next/image';

// TypeScript Interfaces
interface Vehicle {
  id: number;
  name: string;
  models: string;
  image: string;
  basePrice: number;
}

interface Service {
  id: number;
  title: string;
  duration: string;
  multiplier: number;
  features: string[];
}

interface Testimonial {
  name: string;
  vehicle: string;
  rating: number;
  text: string;
  location: string;
}

interface Stat {
  number: string;
  label: string;
}

interface WhyChooseUs {
  title: string;
  description: string;
}

interface FormData {
  name: string;
  phone: string;
  date: string;
  time: string;
}

export default function CarWashWebsite() {
  const [selectedVehicle, setSelectedVehicle] = useState<Vehicle | null>(null);
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [showBookingForm, setShowBookingForm] = useState<boolean>(false);
  const [currentTestimonial, setCurrentTestimonial] = useState<number>(0);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    date: '',
    time: ''
  });

  // Testimonials
  const testimonials: Testimonial[] = [
    { name: 'Rahul Sharma', vehicle: 'Mahindra Thar', rating: 3, text: 'Amazing service for my Thar! The team made it look brand new. Best car cleaning in Delhi!', location: 'Delhi' },
    { name: 'Priya Patel', vehicle: 'Maruti Swift', rating: 4, text: 'Very professional service. My Swift looks sparkling clean. Highly recommend!', location: 'Gurgaon' },
    { name: 'Arjun Singh', vehicle: 'BMW 3 Series', rating: 4, text: 'Premium detailing for my BMW was exceptional. Worth every penny!', location: 'Noida' },
    { name: 'Vikram Kumar', vehicle: 'Royal Enfield', rating: 4, text: 'Great bike cleaning service. My bike shines like new after their service.', location: 'Faridabad' },
    { name: 'Anita Yadav', vehicle: 'Hyundai Creta', rating: 3, text: 'Excellent service in Patna. My Creta looks spotless, and the team was very professional.', location: 'Patna' },
    { name: 'Ravi Kumar', vehicle: 'Hero Splendor', rating: 4, text: 'Quick and affordable bike wash in Chapra. Highly satisfied with the results!', location: 'Chapra' },
    { name: 'Suman Singh', vehicle: 'Tata Nexon', rating: 4, text: 'Fantastic service in Siwan. My Nexon looks amazing after the premium wash.', location: 'Siwan' },
    { name: 'Mohan Prasad', vehicle: 'Bajaj Pulsar', rating: 4, text: 'Best bike cleaning in Gopalganj. The team is skilled and uses eco-friendly products.', location: 'Gopalganj' },
    { name: 'Rohit Sharma', vehicle: 'Mahindra Bolero', rating: 3, text: 'Great service for my Bolero! Looks brand new after the wash in Delhi.', location: 'Delhi' }
  ];

  // Stats
  const stats: Stat[] = [
    { number: '1500+', label: 'Happy Customers' },
    { number: '7+', label: 'Years Experience' },
    { number: '60+', label: 'Expert Team' },
    { number: '4.8', label: 'Average Rating' }
  ];

  // Why Choose Us
  const whyChooseUs: WhyChooseUs[] = [
    { title: 'Doorstep Service', description: 'We come to your location' },
    { title: 'Eco-Friendly Products', description: 'Safe for your vehicle and environment' },
    { title: 'Trained Professionals', description: 'Experienced and certified team' },
    { title: 'Quality Guarantee', description: '100% satisfaction assured' },
    { title: 'Affordable Pricing', description: 'Best prices in Delhi NCR & Bihar' },
    { title: 'Quick Service', description: 'Fast and efficient cleaning' }
  ];

  // Vehicles
  const vehicles: Vehicle[] = [
    { id: 1, name: 'Car', models: 'Maruti, Honda, Hyundai', image: '/clean.jpg', basePrice: 399 },
    { id: 2, name: 'BMW', models: 'Luxury Sedan', image: '/bmw.jpg', basePrice: 999 },
    { id: 3, name: 'Thar', models: 'Off-road SUV', image: '/thar1.jpg', basePrice: 800 },
    { id: 4, name: 'Scorpio', models: 'SUV', image: '/scorpio1.jpg', basePrice: 799 },
    { id: 5, name: 'Bolero', models: 'MUV', image: '/bolero.jpg', basePrice: 699 },
    { id: 6, name: 'Bike', models: 'Two Wheeler', image: '/bike.jpg', basePrice: 350 }
  ];

  // Services
  const services: Service[] = [
    { id: 1, title: 'Basic Wash', duration: '10 minutes', multiplier: 1, features: ['Exterior body wash', 'Tire cleaning', 'Window cleaning', 'Water drying'] },
    { id: 2, title: 'Deep Cleaning', duration: '15 minutes', multiplier: 1.5, features: ['Complete exterior wash', 'Interior vacuuming', 'Dashboard cleaning', 'Seat cleaning', 'Door panel cleaning'] },
    { id: 3, title: 'Premium Detailing', duration: '30 minutes', multiplier: 2.5, features: ['Full exterior detailing', 'Complete interior detailing', 'Wax and polish', 'Engine bay cleaning', 'Leather treatment', 'UV protection coating'] }
  ];

  // Auto testimonial slider
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial(prev => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // Scroll to top when booking form shows
  useEffect(() => {
    if (showBookingForm || selectedVehicle) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [showBookingForm, selectedVehicle]);

  // Calculate Price
  const calculatePrice = (vehicle: Vehicle | null, service: Service | null): number => {
    if (!vehicle || !service) return 0;
    return Math.round(vehicle.basePrice * service.multiplier);
  };

  // Service selection
  const handleServiceSelect = (service: Service) => {
    setSelectedService(service);
    setShowBookingForm(true);
  };

  // Booking via WhatsApp
  const handleBooking = () => {
    if (formData.name && formData.phone && formData.date && formData.time) {
      const message = `New Car Wash Booking:
Name: ${formData.name}
Phone: ${formData.phone}
Vehicle: ${selectedVehicle?.name}
Service: ${selectedService?.title}
Price: ₹${calculatePrice(selectedVehicle, selectedService)}
Date: ${formData.date}
Time: ${formData.time}`;

      const whatsappNumber = '917779829030'; // 91 + number
      const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
      window.open(url, '_blank');

      // Reset
      setSelectedVehicle(null);
      setSelectedService(null);
      setShowBookingForm(false);
      setFormData({ name: '', phone: '', date: '', time: '' });
    } else {
      alert('Please fill all the required fields');
    }
  };

  // Back button
  const goBack = () => {
    if (showBookingForm) {
      setShowBookingForm(false);
      setSelectedService(null);
    } else if (selectedVehicle) {
      setSelectedVehicle(null);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-slate-50">
      {/* Header with Back Button */}
      {(selectedVehicle || showBookingForm) && (
        <div className="container mx-auto px-4 py-4">
          <button onClick={goBack} className="flex items-center gap-2 text-sky-800 font-semibold hover:text-sky-900 transition">
            <ArrowLeft className="w-5 h-5" /> Back
          </button>
        </div>
      )}

      {/* Banner */}
      <div className="bg-gradient-to-r from-sky-800 to-slate-900 text-white py-16">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-2/2 relative h-98 md:h-[500px] animate-fadeIn">
            <Image src="/man.jpg" alt="Car Wash Banner" fill className="object-cover rounded-lg shadow-2xl" />
          </div>
          <div className="md:w-1/2 text-center md:text-left animate-slideInRight">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Sparkle & Shine Car Wash</h1>
            <p className="text-lg md:text-xl text-gray-200 mb-6">Professional car and bike cleaning services at your doorstep.</p>
            <button 
              onClick={() => {
                const sec = document.querySelector('#vehicles') as HTMLDivElement | null;
                if (sec) window.scrollTo({ top: sec.offsetTop, behavior: 'smooth' });
              }}
              className="bg-gradient-to-r from-sky-600 to-blue-700 hover:from-sky-700 hover:to-blue-800 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
            >
              Book Your Wash Now
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      {!selectedVehicle ? (
        <div>
          {/* Services Overview */}
          <div className="container mx-auto px-4 py-16 bg-white">
            <h3 className="text-3xl font-bold text-center text-slate-800 mb-4 animate-fadeIn">Our Services</h3>
            <p className="text-center text-slate-600 mb-12 text-lg">Professional car washing at competitive prices</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {services.map(service => (
                <div key={service.id} className="bg-gradient-to-br from-slate-50 to-sky-50 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 animate-slideInUp">
                  <div className="relative h-80 w-full">
                    <Image src={service.id === 1 ? '/clean.jpg' : service.id === 2 ? '/bmw.jpg' : '/thar1.jpg'} fill alt={service.title} className="object-cover opacity-80 hover:scale-110 transition-transform duration-500" />
                  </div>
                  <div className="p-6">
                    <h4 className="text-2xl font-bold text-slate-800 mb-2">{service.title}</h4>
                    <p className="text-slate-600 mb-4">{service.duration}</p>
                    <div className="bg-sky-100 rounded-lg p-3 mb-4">
                      <p className="text-center text-sm text-slate-700 mb-1">Book Now</p>
                      <p className="text-center text-3xl font-bold text-sky-800">₹{Math.round(400 * service.multiplier)}</p>
                    </div>
                    <ul className="space-y-2 text-sm text-slate-700">
                      {service.features.slice(0, 3).map((f, idx) => (
                        <li key={idx} className="flex items-start gap-2"><Check className="w-4 h-4 text-sky-800 flex-shrink-0 mt-0.5" />{f}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Stats Section */}
          <div className="bg-gradient-to-r from-sky-800 to-slate-900 py-16">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
                {stats.map((stat, idx) => (
                  <div key={idx} className="text-center animate-slideInUp" style={{ animationDelay: `${idx*0.2}s` }}>
                    <div className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.number}</div>
                    <div className="text-sky-200 text-lg">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Why Choose Us */}
          <div className="container mx-auto px-4 py-16 bg-gradient-to-br from-blue-50 to-slate-50">
            <h3 className="text-3xl font-bold text-center text-slate-800 mb-4 animate-fadeIn">Why Choose Us</h3>
            <p className="text-center text-slate-600 mb-12 text-lg">We provide the best car wash service in Delhi NCR and Bihar</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {whyChooseUs.map((item, idx) => (
                <div key={idx} className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-slideInUp" style={{ animationDelay: `${idx*0.2}s` }}>
                  <h4 className="text-xl font-bold text-slate-800 mb-2">{item.title}</h4>
                  <p className="text-slate-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Vehicles */}
          <div id="vehicles" className="container mx-auto px-4 py-16">
            <h3 className="text-3xl font-bold text-center text-slate-800 mb-12 animate-fadeIn">Select Your Vehicle</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {vehicles.map(vehicle => (
                <div key={vehicle.id} onClick={() => setSelectedVehicle(vehicle)} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer transform hover:scale-105">
                  <div className="relative h-80 w-full">
                    <Image src={vehicle.image} fill alt={vehicle.name} className="object-cover hover:scale-110 transition-transform duration-500" />
                  </div>
                  <div className="p-6">
                    <h4 className="text-2xl font-bold text-slate-800 mb-2">{vehicle.name}</h4>
                    <p className="text-slate-600 mb-4">{vehicle.models}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-sky-800 font-semibold">Book Now</span>
                      <span className="text-2xl font-bold text-slate-800">₹{vehicle.basePrice}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : !showBookingForm ? (
        // Services page
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold text-slate-800 mb-4 animate-fadeIn">Choose Your Service</h3>
            <p className="text-xl text-slate-600">for {selectedVehicle.name}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {services.map(service => (
              <div key={service.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:scale-105 animate-slideInUp">
                <div className="bg-gradient-to-r from-sky-800 to-slate-900 text-white p-6">
                  <h4 className="text-2xl font-bold mb-2">{service.title}</h4>
                  <p className="text-sky-200">{service.duration}</p>
                </div>
                <div className="p-6">
                  <div className="mb-6">
                    <div className="text-3xl font-bold text-slate-800 mb-2">₹{calculatePrice(selectedVehicle, service)}</div>
                  </div>
                  <ul className="space-y-3 mb-6">
                    {service.features.map((f, idx) => (
                      <li key={idx} className="flex items-start gap-2"><Check className="w-5 h-5 text-sky-800 flex-shrink-0 mt-0.5" />{f}</li>
                    ))}
                  </ul>
                  <button onClick={() => handleServiceSelect(service)} className="w-full bg-gradient-to-r from-sky-800 to-slate-900 text-white py-3 rounded-lg font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105">Book Now</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        // Booking Form
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-md mx-auto bg-white rounded-lg shadow-xl p-8 animate-fadeIn">
            <h3 className="text-3xl font-bold text-slate-800 mb-6 text-center">Book Your Service</h3>
            <div className="bg-sky-50 rounded-lg p-4 mb-6 border-2 border-sky-200">
              <div className="flex justify-between mb-2">
                <span className="text-slate-700 font-semibold">{selectedVehicle.name}</span>
                <span className="text-slate-700 font-semibold">{selectedService?.title}</span>
              </div>
              <div className="text-center text-sky-800 text-xl font-bold">₹{calculatePrice(selectedVehicle, selectedService)}</div>
            </div>
            <div className="space-y-4">
              <input type="text" placeholder="Name" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} className="w-full p-3 border rounded-lg" />
              <input type="tel" placeholder="Phone" value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} className="w-full p-3 border rounded-lg" />
              <input type="date" value={formData.date} onChange={e => setFormData({...formData, date: e.target.value})} className="w-full p-3 border rounded-lg" />
              <input type="time" value={formData.time} onChange={e => setFormData({...formData, time: e.target.value})} className="w-full p-3 border rounded-lg" />
              <button onClick={handleBooking} className="w-full bg-gradient-to-r from-sky-800 to-slate-900 text-white py-3 rounded-lg font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105">Send Booking via WhatsApp</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
