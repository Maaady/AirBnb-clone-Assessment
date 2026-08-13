"use client";

import React, { useState } from "react";
import {
  Wifi,
  Waves,
  Sparkles,
  Utensils,
  Car,
  Wind,
  Tv,
  Laptop,
  Shirt,
  Flame,
  Sun,
  Zap,
  ShieldAlert,
  BellRing,
  HeartPulse,
  X,
  Refrigerator,
} from "lucide-react";
import { Amenity } from "@/data/listing";

interface AmenitiesSectionProps {
  amenities: Amenity[];
}

const amenityIconMap: Record<string, React.ReactNode> = {
  Wifi: <Wifi className="w-6 h-6 stroke-[1.5]" />,
  Waves: <Waves className="w-6 h-6 stroke-[1.5]" />,
  Sparkles: <Sparkles className="w-6 h-6 stroke-[1.5]" />,
  Utensils: <Utensils className="w-6 h-6 stroke-[1.5]" />,
  Car: <Car className="w-6 h-6 stroke-[1.5]" />,
  Wind: <Wind className="w-6 h-6 stroke-[1.5]" />,
  Refrigerator: <Refrigerator className="w-6 h-6 stroke-[1.5]" />,
  Tv: <Tv className="w-6 h-6 stroke-[1.5]" />,
  Laptop: <Laptop className="w-6 h-6 stroke-[1.5]" />,
  Shirt: <Shirt className="w-6 h-6 stroke-[1.5]" />,
  Flame: <Flame className="w-6 h-6 stroke-[1.5]" />,
  Sun: <Sun className="w-6 h-6 stroke-[1.5]" />,
  Zap: <Zap className="w-6 h-6 stroke-[1.5]" />,
  ShieldAlert: <ShieldAlert className="w-6 h-6 stroke-[1.5]" />,
  BellRing: <BellRing className="w-6 h-6 stroke-[1.5]" />,
  HeartPulse: <HeartPulse className="w-6 h-6 stroke-[1.5]" />,
};

export const AmenitiesSection: React.FC<AmenitiesSectionProps> = ({ amenities }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const previewAmenities = amenities.slice(0, 10);

  // Group amenities by category for modal
  const categorized = amenities.reduce((acc, curr) => {
    if (!acc[curr.category]) {
      acc[curr.category] = [];
    }
    acc[curr.category].push(curr);
    return acc;
  }, {} as Record<string, Amenity[]>);

  return (
    <section className="py-8 border-b border-airbnb-gray-100" aria-label="Amenities">
      <h2 className="text-xl sm:text-[22px] font-semibold text-airbnb-black mb-6">
        What this place offers
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8">
        {previewAmenities.map((item, idx) => (
          <div key={idx} className="flex items-center gap-4 text-airbnb-black">
            <div className="text-airbnb-black">
              {amenityIconMap[item.iconName] || <Sparkles className="w-6 h-6 stroke-[1.5]" />}
            </div>
            <span className="text-base text-airbnb-black">{item.name}</span>
          </div>
        ))}
      </div>

      <div className="mt-8">
        <button
          type="button"
          onClick={() => setIsModalOpen(true)}
          className="border border-airbnb-black text-airbnb-black font-semibold text-base py-3 px-6 rounded-lg hover:bg-airbnb-gray-50 active:scale-[0.99] transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-black"
        >
          Show all {amenities.length} amenities
        </button>
      </div>

      {/* Full Amenities Modal */}
      {isModalOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="amenities-modal-title"
          className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4 sm:p-6"
        >
          <div
            className="bg-white rounded-3xl max-w-2xl w-full max-h-[85vh] flex flex-col shadow-2xl animate-in fade-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="p-6 border-b border-airbnb-gray-100 flex items-center justify-between sticky top-0 bg-white rounded-t-3xl z-10">
              <button
                type="button"
                onClick={() => setIsModalOpen(false)}
                aria-label="Close amenities modal"
                className="p-2 -ml-2 rounded-full hover:bg-airbnb-gray-50 text-airbnb-black transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
              <h2 id="amenities-modal-title" className="font-semibold text-lg text-airbnb-black">
                What this place offers
              </h2>
              <div className="w-8" aria-hidden="true" />
            </div>

            {/* Modal Content with Categories */}
            <div className="p-6 overflow-y-auto space-y-8 divide-y divide-airbnb-gray-100">
              {Object.entries(categorized).map(([category, items], catIdx) => (
                <div key={category} className={catIdx > 0 ? "pt-6" : ""}>
                  <h3 className="font-semibold text-lg text-airbnb-black mb-4">{category}</h3>
                  <div className="space-y-4">
                    {items.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-4 text-airbnb-black">
                        <div className="text-airbnb-black">
                          {amenityIconMap[item.iconName] || <Sparkles className="w-6 h-6 stroke-[1.5]" />}
                        </div>
                        <span className="text-base text-airbnb-black">{item.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
