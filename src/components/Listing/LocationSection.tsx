"use client";

import React from "react";
import { MapPin, Navigation } from "lucide-react";
import { ListingData } from "@/data/listing";

interface LocationSectionProps {
  location: ListingData["location"];
}

export const LocationSection: React.FC<LocationSectionProps> = ({ location }) => {
  return (
    <section id="location-section" className="py-8 border-b border-airbnb-gray-100" aria-label="Location">
      <h2 className="text-xl sm:text-[22px] font-semibold text-airbnb-black mb-4">
        Where you&apos;ll be
      </h2>
      <div className="text-base text-airbnb-black font-medium mb-6">
        {location.city}, {location.state}, {location.country}
      </div>

      {/* Styled Map Container */}
      <div className="relative w-full h-80 sm:h-96 rounded-2xl overflow-hidden bg-slate-100 border border-airbnb-gray-200 shadow-sm flex items-center justify-center">
        {/* Subtle Map Grid Background */}
        <div
          className="absolute inset-0 opacity-40 bg-[radial-gradient(#94a3b8_1px,transparent_1px)] [background-size:16px_16px]"
          aria-hidden="true"
        />

        {/* Decorative Map Roads / Coastline */}
        <svg className="absolute inset-0 w-full h-full stroke-slate-300 fill-none opacity-60" aria-hidden="true">
          <path d="M0,180 Q200,120 400,200 T800,160 T1200,240" strokeWidth="6" />
          <path d="M0,220 Q300,180 600,260 T1200,200" strokeWidth="4" />
          <path d="M400,0 Q350,150 450,400" strokeWidth="4" />
          <path d="M850,0 Q900,200 800,400" strokeWidth="3" />
        </svg>

        {/* Custom Airbnb Map Pin / Radar */}
        <div className="relative z-10 flex flex-col items-center">
          <div className="w-16 h-16 rounded-full bg-airbnb-red/20 flex items-center justify-center animate-pulse">
            <div className="w-10 h-10 rounded-full bg-airbnb-red text-white flex items-center justify-center shadow-lg">
              <MapPin className="w-5 h-5 fill-current" />
            </div>
          </div>
          <div className="mt-2 bg-white px-3 py-1 rounded-full shadow-md border border-airbnb-gray-200 text-xs font-semibold text-airbnb-black flex items-center gap-1.5">
            <Navigation className="w-3 h-3 text-airbnb-red" />
            Exact location provided after booking
          </div>
        </div>
      </div>

      <div className="mt-6 text-sm sm:text-base text-airbnb-gray-600 leading-relaxed max-w-3xl">
        <h3 className="font-semibold text-base text-airbnb-black mb-1">
          About the neighborhood: {location.neighborhood}
        </h3>
        <p>{location.description}</p>
      </div>
    </section>
  );
};
