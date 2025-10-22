// "use client";
// import { useState, useEffect } from 'react';
// import { ArrowLeft, Check } from 'lucide-react';
// import Image from 'next/image';

// export default function CarWashWebsite() {
//   const [selectedVehicle, setSelectedVehicle] = useState(null);
//   const [selectedService, setSelectedService] = useState(null);
//   const [showBookingForm, setShowBookingForm] = useState(false);
//   const [currentTestimonial, setCurrentTestimonial] = useState(0);
//   const [formData, setFormData] = useState({
//     name: '',
//     phone: '',
//     date: '',
//     time: ''
//   });

//   const testimonials = [
//     { 
//       name: 'Rahul Sharma', 
//       vehicle: 'Mahindra Thar', 
//       rating: 3, 
//       text: 'Amazing service for my Thar! The team made it look brand new. Best car cleaning in Delhi!', 
//       location: 'Delhi' 
//     },
//     { 
//       name: 'Priya Patel', 
//       vehicle: 'Maruti Swift', 
//       rating: 4, 
//       text: 'Very professional service. My Swift looks sparkling clean. Highly recommend!', 
//       location: 'Gurgaon' 
//     },
//     { 
//       name: 'Arjun Singh', 
//       vehicle: 'BMW 3 Series', 
//       rating: 4, 
//       text: 'Premium detailing for my BMW was exceptional. Worth every penny!', 
//       location: 'Noida' 
//     },
//     { 
//       name: 'Vikram Kumar', 
//       vehicle: 'Royal Enfield', 
//       rating: 4, 
//       text: 'Great bike cleaning service. My bike shines like new after their service.', 
//       location: 'Faridabad' 
//     },
//     { 
//       name: 'Anita Yadav', 
//       vehicle: 'Hyundai Creta', 
//       rating: 3, 
//       text: 'Excellent service in Patna. My Creta looks spotless, and the team was very professional.', 
//       location: 'Patna' 
//     },
//     { 
//       name: 'Ravi Kumar', 
//       vehicle: 'Hero Splendor', 
//       rating: 4, 
//       text: 'Quick and affordable bike wash in Chapra. Highly satisfied with the results!', 
//       location: 'Chapra' 
//     },
//     { 
//       name: 'Suman Singh', 
//       vehicle: 'Tata Nexon', 
//       rating: 4, 
//       text: 'Fantastic service in Siwan. My Nexon looks amazing after the premium wash.', 
//       location: 'Siwan' 
//     },
//     { 
//       name: 'Mohan Prasad', 
//       vehicle: 'Bajaj Pulsar', 
//       rating: 4, 
//       text: 'Best bike cleaning in Gopalganj. The team is skilled and uses eco-friendly products.', 
//       location: 'Gopalganj' 
//     },
//     { 
//       name: 'Rohiit Sharma', 
//       vehicle: 'Mahindra Bolero', 
//       rating: 3, 
//       text: 'Amazing service for my Thar! The team made it look brand new. Best car cleaning in Delhi!', 
//       location: 'Delhi' 
//     }
//   ];

//   const stats = [
//     { number: '1500+', label: 'Happy Customers' },
//     { number: '7+', label: 'Years Experience' },
//     { number: '60+', label: 'Expert Team' },
//     { number: '4.8', label: 'Average Rating' }
//   ];

//   const whyChooseUs = [
//     { title: 'Doorstep Service', description: 'We come to your location' },
//     { title: 'Eco-Friendly Products', description: 'Safe for your vehicle and environment' },
//     { title: 'Trained Professionals', description: 'Experienced and certified team' },
//     { title: 'Quality Guarantee', description: '100% satisfaction assured' },
//     { title: 'Affordable Pricing', description: 'Best prices in Delhi NCR & Bihar' },
//     { title: 'Quick Service', description: 'Fast and efficient cleaning' }
//   ];

//   // const locations = [
//   //   { name: 'Delhi NCR', description: 'Serving Delhi, Gurgaon, Noida, and Faridabad' },
//   //   { name: 'Patna', description: 'Top car wash services in the heart of Bihar' },
//   //   { name: 'Chapra', description: 'Quality cleaning for vehicles in Chapra' },
//   //   { name: 'Siwan', description: 'Professional car and bike wash in Siwan' },
//   //   { name: 'Gopalganj', description: 'Eco-friendly wash services in Gopalganj' }
//   // ];

//   const vehicles = [
//     { 
//       id: 1, 
//       name: 'Car', 
//       models: 'Maruti, Honda, Hyundai',
//       image: '/pre.jpg',
//       basePrice: 599
//     },
//     { 
//       id: 2, 
//       name: 'BMW', 
//       models: 'Luxury Sedan',
//       image: '/bmw.jpg',
//       basePrice: 1499
//     },
//     { 
//       id: 3, 
//       name: 'Thar', 
//       models: 'Off-road SUV',
//       image: '/thar1.jpg',
//       basePrice: 899
//     },
//     { 
//       id: 4, 
//       name: 'Scorpio', 
//       models: 'SUV',
//       image: '/scorpio1.jpg',
//       basePrice: 799
//     },
//     { 
//       id: 5, 
//       name: 'Bolero', 
//       models: 'MUV',
//       image: '/bolero.jpg',
//       basePrice: 699
//     },
//     { 
//       id: 6, 
//       name: 'Bike', 
//       models: 'Two Wheeler',
//       image: '/bike1.jpg',
//       basePrice: 350
//     }
//   ];

//   const services = [
//     {
//       id: 1,
//       title: 'Basic Wash',
//       duration: '10 minutes',
//       multiplier: 1,
//       features: [
//         'Exterior body wash',
//         'Tire cleaning',
//         'Window cleaning',
//         'Water drying'
//       ]
//     },
//     {
//       id: 2,
//       title: 'Deep Cleaning',
//       duration: '15 minutes',
//       multiplier: 1.5,
//       features: [
//         'Complete exterior wash',
//         'Interior vacuuming',
//         'Dashboard cleaning',
//         'Seat cleaning',
//         'Door panel cleaning'
//       ]
//     },
//     {
//       id: 3,
//       title: 'Premium Detailing',
//       duration: '30 minutes',
//       multiplier: 2.5,
//       features: [
//         'Full exterior detailing',
//         'Complete interior detailing',
//         'Wax and polish',
//         'Engine bay cleaning',
//         'Leather treatment',
//         'UV protection coating'
//       ]
//     }
//   ];

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
//     }, 4000);
//     return () => clearInterval(interval);
//   }, []);

//   const calculatePrice = (vehicle, service) => {
//     if (!vehicle || !service) return 0;
//     return Math.round(vehicle.basePrice * service.multiplier);
//   };

//   const handleServiceSelect = (service) => {
//     setSelectedService(service);
//     setShowBookingForm(true);
//   };

//   const handleBooking = () => {
//     if (formData.name && formData.phone && formData.date && formData.time) {
//       alert(`Booking Confirmed!\n\nVehicle: ${selectedVehicle.name}\nService: ${selectedService.title}\nPrice: ₹${calculatePrice(selectedVehicle, selectedService)}\nDate: ${formData.date}\nTime: ${formData.time}\n\nWe will contact you at ${formData.phone}`);
//       setSelectedVehicle(null);
//       setSelectedService(null);
//       setShowBookingForm(false);
//       setFormData({ name: '', phone: '', date: '', time: '' });
//     } else {
//       alert('Please fill all the required fields');
//     }
//   };

//   const goBack = () => {
//     if (showBookingForm) {
//       setShowBookingForm(false);
//       setSelectedService(null);
//     } else if (selectedVehicle) {
//       setSelectedVehicle(null);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-slate-50">
//       {/* Header with Back Button */}
//       {(selectedVehicle || showBookingForm) && (
//         <div className="container mx-auto px-4 py-4">
//           <button
//             onClick={goBack}
//             className="flex items-center gap-2 text-sky-800 font-semibold hover:text-sky-900 transition"
//           >
//             <ArrowLeft className="w-5 h-5" /> Back
//           </button>
//         </div>
//       )}

//       {/* Banner Section */}
//       <div className="bg-gradient-to-r from-sky-800 to-slate-900 text-white py-16">
//         <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-8">
//           <div className="md:w-1/1 relative h-96 md:h-[500px] animate-fadeIn">
//             <Image
//               src="/man.jpg" // Replace with your banner image
//               alt="Car Wash Banner"
//               fill
//               className="object-cover rounded-lg shadow-2xl"
//             />
//           </div>
//           <div className="md:w-1/2 text-center md:text-left animate-slideInRight">
//             <h1 className="text-4xl md:text-5xl font-bold mb-4">Sparkle & Shine Car Wash</h1>
//             <p className="text-lg md:text-xl text-gray-200 mb-6">
//               Professional car and bike cleaning services at your doorstep. Book now for a spotless ride in Delhi NCR and Bihar!
//             </p>
//             <button
//               onClick={() => window.scrollTo({ top: document.querySelector('#vehicles').offsetTop, behavior: 'smooth' })}
//               className="bg-gradient-to-r from-sky-600 to-blue-700 hover:from-sky-700 hover:to-blue-800 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
//             >
//               Book Your Wash Now
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Main Content */}
//       {!selectedVehicle ? (
//         // Home Page - Vehicle Selection
//         <div>
//           {/* Services Overview Section */}
//           <div className="container mx-auto px-4 py-16 bg-white">
//             <h3 className="text-3xl font-bold text-center text-slate-800 mb-4 animate-fadeIn">Our Services</h3>
//             <p className="text-center text-slate-600 mb-12 text-lg">Professional car washing at competitive prices</p>
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
//               {services.map((service) => (
//                 <div
//                   key={service.id}
//                   className="bg-gradient-to-br from-slate-50 to-sky-50 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 animate-slideInUp"
//                 >
//                   <div className="h-64 overflow-hidden bg-gradient-to-r from-sky-800 to-slate-900 flex items-center justify-center">
//                     <Image
//                       src={service.id === 1 ? '/basic.jpg' : service.id === 2 ? '/wash.jpg' : '/pre.jpg'}
//                       alt={service.title}
//                       width={400}
//                       height={256}
//                       className="object-cover opacity-80 hover:scale-110 transition-transform duration-500"
//                     />
//                   </div>
//                   <div className="p-6">
//                     <h4 className="text-2xl font-bold text-slate-800 mb-2">{service.title}</h4>
//                     <p className="text-slate-600 mb-4">{service.duration}</p>
//                     <div className="bg-sky-100 rounded-lg p-3 mb-4">
//                       <p className="text-center text-sm text-slate-700 mb-1">Starting from</p>
//                       <p className="text-center text-3xl font-bold text-sky-800">₹{Math.round(400 * service.multiplier)}</p>
//                     </div>
//                     <ul className="space-y-2 text-sm text-slate-700">
//                       {service.features.slice(0, 3).map((feature, idx) => (
//                         <li key={idx} className="flex items-start gap-2">
//                           <Check className="w-4 h-4 text-sky-800 flex-shrink-0 mt-0.5" />
//                           <span>{feature}</span>
//                         </li>
//                       ))}
//                     </ul>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Stats Section */}
//           <div className="bg-gradient-to-r from-sky-800 to-slate-900 py-16">
//             <div className="container mx-auto px-4">
//               <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
//                 {stats.map((stat, idx) => (
//                   <div key={idx} className="text-center animate-slideInUp" style={{ animationDelay: `${idx * 0.2}s` }}>
//                     <div className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.number}</div>
//                     <div className="text-sky-200 text-lg">{stat.label}</div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>

//           {/* Why Choose Us Section */}
//           <div className="container mx-auto px-4 py-16 bg-gradient-to-br from-blue-50 to-slate-50">
//             <h3 className="text-3xl font-bold text-center text-slate-800 mb-4 animate-fadeIn">Why Choose Us</h3>
//             <p className="text-center text-slate-600 mb-12 text-lg">We provide the best car wash service in Delhi NCR and Bihar</p>
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
//               {whyChooseUs.map((item, idx) => (
//                 <div
//                   key={idx}
//                   className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-slideInUp"
//                   style={{ animationDelay: `${idx * 0.2}s` }}
//                 >
//                   <h4 className="text-xl font-bold text-slate-800 mb-2">{item.title}</h4>
//                   <p className="text-slate-600">{item.description}</p>
//                 </div>
//               ))}
//             </div>
//           </div>

       

//           {/* Vehicle Cards */}
//           <div id="vehicles" className="container mx-auto px-4 py-16">
//             <h3 className="text-3xl font-bold text-center text-slate-800 mb-12 animate-fadeIn">Select Your Vehicle</h3>
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
//               {vehicles.map((vehicle) => (
//                 <div
//                   key={vehicle.id}
//                   onClick={() => setSelectedVehicle(vehicle)}
//                   className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer transform hover:scale-105"
//                 >
//                   <div className="relative h-64 w-full">
//                     <Image
//                       src={vehicle.image}
//                       alt={vehicle.name}
//                       fill
//                       className="object-cover hover:scale-110 transition-transform duration-500"
//                     />
//                   </div>
//                   <div className="p-6">
//                     <h4 className="text-2xl font-bold text-slate-800 mb-2">{vehicle.name}</h4>
//                     <p className="text-slate-600 mb-4">{vehicle.models}</p>
//                     <div className="flex justify-between items-center">
//                       <span className="text-sky-800 font-semibold">Starting from</span>
//                       <span className="text-2xl font-bold text-slate-800">₹{ vehicle.basePrice}</span>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Testimonials Section */}
//           <div className="bg-gradient-to-br from-blue-50 to-slate-50 py-16">
//             <div className="container mx-auto px-4">
//               <h3 className="text-3xl font-bold text-center text-slate-800 mb-4 animate-fadeIn">What Our Customers Say</h3>
//               <p className="text-center text-slate-600 mb-12 text-lg">Real reviews from satisfied customers</p>
//               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
//                 {testimonials.map((testimonial, idx) => (
//                   <div
//                     key={idx}
//                     className={`bg-white rounded-xl shadow-lg p-6 transition-all duration-300 transform hover:-translate-y-2 animate-slideInUp ${
//                       idx === currentTestimonial ? 'border-2 border-sky-800' : ''
//                     }`}
//                     style={{ animationDelay: `${idx * 0.2}s` }}
//                   >
//                     <div className="flex justify-center mb-4">
//                       {[...Array(testimonial.rating)].map((_, i) => (
//                         <span key={i} className="text-yellow-500 text-xl">★</span>
//                       ))}
//                     </div>
//                     <p className="text-slate-700 italic mb-4">"{testimonial.text}"</p>
//                     <div className="border-t-2 border-slate-300 pt-4">
//                       <p className="text-lg font-bold text-slate-800">{testimonial.name}</p>
//                       <p className="text-slate-600">{testimonial.vehicle}</p>
//                       <p className="text-sky-800 font-semibold">{testimonial.location}</p>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       ) : !showBookingForm ? (
//         // Services Page
//         <div className="container mx-auto px-4 py-16">
//           <div className="text-center mb-12">
//             <h3 className="text-4xl font-bold text-slate-800 mb-4 animate-fadeIn">Choose Your Service</h3>
//             <p className="text-xl text-slate-600">for {selectedVehicle.name}</p>
//           </div>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
//             {services.map((service) => (
//               <div
//                 key={service.id}
//                 className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:scale-105 animate-slideInUp"
//               >
//                 <div className="bg-gradient-to-r from-sky-800 to-slate-900 text-white p-6">
//                   <h4 className="text-2xl font-bold mb-2">{service.title}</h4>
//                   <p className="text-sky-200">{service.duration}</p>
//                 </div>
//                 <div className="p-6">
//                   <div className="mb-6">
//                     <div className="text-3xl font-bold text-slate-800 mb-2">
//                       ₹{calculatePrice(selectedVehicle, service)}
//                     </div>
//                   </div>
//                   <ul className="space-y-3 mb-6">
//                     {service.features.map((feature, index) => (
//                       <li key={index} className="flex items-start gap-2">
//                         <Check className="w-5 h-5 text-sky-800 flex-shrink-0 mt-0.5" />
//                         <span className="text-slate-700">{feature}</span>
//                       </li>
//                     ))}
//                   </ul>
//                   <button
//                     onClick={() => handleServiceSelect(service)}
//                     className="w-full bg-gradient-to-r from-sky-800 to-slate-900 text-white py-3 rounded-lg font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105"
//                   >
//                     Book Now
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       ) : (
//         // Booking Form
//         <div className="container mx-auto px-4 py-16">
//           <div className="max-w-md mx-auto bg-white rounded-lg shadow-xl p-8 animate-fadeIn">
//             <h3 className="text-3xl font-bold text-slate-800 mb-6 text-center">Book Your Service</h3>
//             <div className="bg-sky-50 rounded-lg p-4 mb-6 border-2 border-sky-200">
//               <div className="flex justify-between mb-2">
//                 <span className="text-slate-700">Vehicle:</span>
//                 <span className="font-semibold text-slate-800">{selectedVehicle.name}</span>
//               </div>
//               <div className="flex justify-between mb-2">
//                 <span className="text-slate-700">Service:</span>
//                 <span className="font-semibold text-slate-800">{selectedService.title}</span>
//               </div>
//               <div className="flex justify-between pt-2 border-t-2 border-sky-300">
//                 <span className="text-slate-700 font-semibold">Total Price:</span>
//                 <span className="text-2xl font-bold text-sky-800">₹{calculatePrice(selectedVehicle, selectedService)}</span>
//               </div>
//             </div>
//             <div className="space-y-4">
//               <input
//                 type="text"
//                 placeholder="Your Name"
//                 value={formData.name}
//                 onChange={(e) => setFormData({ ...formData, name: e.target.value })}
//                 className="w-full px-4 py-3 border-2 border-slate-300 rounded-lg focus:outline-none focus:border-sky-800 transition"
//               />
//               <input
//                 type="tel"
//                 placeholder="Phone Number"
//                 value={formData.phone}
//                 onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
//                 className="w-full px-4 py-3 border-2 border-slate-300 rounded-lg focus:outline-none focus:border-sky-800 transition"
//               />
//               <input
//                 type="date"
//                 value={formData.date}
//                 onChange={(e) => setFormData({ ...formData, date: e.target.value })}
//                 className="w-full px-4 py-3 border-2 border-slate-300 rounded-lg focus:outline-none focus:border-sky-800 transition"
//               />
//               <input
//                 type="time"
//                 value={formData.time}
//                 onChange={(e) => setFormData({ ...formData, time: e.target.value })}
//                 className="w-full px-4 py-3 border-2 border-slate-300 rounded-lg focus:outline-none focus:border-sky-800 transition"
//               />
//               <button
//                 onClick={handleBooking}
//                 className="w-full bg-gradient-to-r from-sky-800 to-slate-900 text-white py-3 rounded-lg font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105"
//               >
//                 Confirm Booking
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

import React from 'react'

const page = () => {
  return (
    <div>
      <h1>Main Page</h1>
    </div>
  )
}

export default page
