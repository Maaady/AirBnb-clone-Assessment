"use client";

import React from "react";
import { Wifi, KeyRound, Award, CalendarCheck, ShieldCheck } from "lucide-react";
import { ListingData } from "@/data/listing";

interface ListingHighlightsProps {
  highlights: ListingData["highlights"];
}

const iconMap: Record<string, React.ReactNode> = {
  Wifi: <Wifi className="w-6 h-6 stroke-[1.5]" />,
  KeyRound: <KeyRound className="w-6 h-6 stroke-[1.5]" />,
  Award: <Award className="w-6 h-6 stroke-[1.5]" />,
  CalendarCheck: <CalendarCheck className="w-6 h-6 stroke-[1.5]" />,
};

export const ListingHighlights: React.FC<ListingHighlightsProps> = ({ highlights }) => {
  return (
    <section className="py-6 border-b border-airbnb-gray-100" aria-label="Listing highlights">
      <div className="space-y-6">
        {highlights.map((item, index) => (
          <div key={index} className="flex items-start gap-4">
            <div className="text-airbnb-black flex-shrink-0 mt-0.5">
              {iconMap[item.icon] || <ShieldCheck className="w-6 h-6 stroke-[1.5]" />}
            </div>
            <div>
              <h3 className="font-semibold text-base text-airbnb-black">
                {item.title}
              </h3>
              <p className="text-sm text-airbnb-gray-400 mt-0.5">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
