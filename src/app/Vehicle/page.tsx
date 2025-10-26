"use client";
import React from 'react';
import Image from 'next/image';

const washServices = [
  {
    id: 1,
    vehicleName: 'Mahindra Thar',
   
    serviceType: 'Premium SUV Wash',
    description: 'Deep cleaning for off-road SUVs, including exterior foam wash, interior vacuuming, and tire shine.',
    image: '/thar1.jpg',
    price: '₹900',
    duration: '15 min'
  },
  {
    id: 2,
    vehicleName: 'Mahindra Scorpio',

    serviceType: 'Deluxe SUV Wash',
    description: 'Comprehensive wash with wax, underbody cleaning, and dashboard polishing.',
    image: '/scorpio1.jpg',
    price: '₹800',
    duration: '20 min'
  },
  {
    id: 3,
    vehicleName: 'BMW X5',
  
    serviceType: 'Luxury Wash & Polish',
    description: 'Premium wash with ceramic coating and interior detailing for luxury vehicles.',
    image: '/bmw.jpg',
    price: '₹1000',
    duration: '20 min'
  },
  {
    id: 4,
    vehicleName: 'Maruti Suzuki Swift',
   
    serviceType: 'Standard Hatchback Wash',
    description: 'Quick exterior wash, interior cleaning, and glass polishing for compact cars.',
    image: '/clean.jpg',
    price: '₹600',
    duration: '15 min'
  },
  {
    id: 5,
    vehicleName: 'Royal Enfield',

    serviceType: 'Bike Deep Clean',
    description: 'Detailed bike wash with chain cleaning, polish, and chrome detailing.',
    image: '/royal.jpg',
    price: '₹500',
    duration: '10 min'
  },
  {
    id: 6,
    vehicleName: 'Bajaj Pulsar',
 
    serviceType: 'Bike Express Wash',
    description: 'Fast wash with foam cleaning and tire polish for sporty bikes.',
    image: '/pulsor.jpg',
    price: '₹300',
    duration: '10 min'
  },
  {
    id: 7,
    vehicleName: 'Hero Splendor Plus',

    serviceType: 'Commuter Bike Wash',
    description: 'Affordable wash for daily commuters with exterior cleaning and shine.',
    image: '/bike1.jpg',
    price: '₹250',
    duration: '10 min'
  },
  {
    id: 8,
    vehicleName: 'Honda Shine',

    serviceType: 'Bike Standard Wash',
    description: 'Complete cleaning with focus on engine bay and wheels for 125cc bikes.',
    image: '/honda.jpg',
    price: '₹350',
    duration: '10 min'
  },
    {
    id: 9,
    vehicleName: 'Activa',

    serviceType: 'Activa Standard Wash',
    description: 'Complete cleaning with focus on engine.',
    image: '/activa.jpg',
    price: '₹250',
    duration: '10 min'
  },

  {
    id: 10,
    vehicleName: 'Hyundai Creta',
   
    serviceType: 'Premium Compact SUV Wash',
    description: 'Detailed cleaning with eco-friendly foam and interior detailing.',
    image: '/hundai.jpg',
    price: '₹800',
    duration: '20 min'
  },
   {
    id: 11,
    vehicleName: 'Mahindra Bolero',

    serviceType: 'Deluxe SUV Wash',
    description: 'Comprehensive wash with wax, underbody cleaning, and dashboard polishing.',
    image: '/bolero.jpg',
    price: '₹800',
    duration: '20 min'
  },
    {
    id: 12,
    vehicleName: 'Maruti Suzuki ',
   
    serviceType: 'Standard Hatchback Wash',
    description: 'Quick exterior wash, interior cleaning, and glass polishing for compact cars.',
    image: '/maruti.jpg',
    price: '₹600',
    duration: '15 min'
  },
];

export default function CarWashServicesPage() {
  return (
    <div className="min-h-screen bg-sky-800 text-white p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl font-bold text-center mb-12 bg-gradient-to-r from-gray-300 to-gray-300 bg-clip-text text-transparent">
          Car Wash Services
        </h1>
        <p className="text-center text-xl text-gray-300 mb-16">
          Keep your vehicle sparkling clean with our top-notch car and bike wash services. From SUVs to commuter bikes, we’ve got you covered!
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {washServices.map((service) => (
            <div
              key={service.id}
              className="bg-sky-700 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 border border-sky-600"
            >
              <div className="relative h-48 w-full">
                <Image
                  src={service.image}
                  alt={service.vehicleName}
                  fill
                  className="object-cover hover:opacity-90 transition-opacity"
                />
             
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">{service.vehicleName}</h3>
                <h4 className="text-lg font-semibold text-cyan-300 mb-2">{service.serviceType}</h4>
                <p className="text-gray-300 mb-4 line-clamp-2">{service.description}</p>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-2xl font-bold text-green-400">{service.price}</span>
                  <span className="text-gray-300">{service.duration}</span>
                </div>
               
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
