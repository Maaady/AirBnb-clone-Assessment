"use client";

import React from "react";
import { BedDouble, BedSingle, Bed } from "lucide-react";
import { SleepingArrangement } from "@/data/listing";

interface SleepingArrangementsProps {
  arrangements: SleepingArrangement[];
}

export const SleepingArrangements: React.FC<SleepingArrangementsProps> = ({
  arrangements,
}) => {
  const getBedIcon = (icon: string) => {
    switch (icon) {
      case "BedDouble":
        return <BedDouble className="w-6 h-6 text-airbnb-black stroke-[1.5]" />;
      case "BedSingle":
        return <BedSingle className="w-6 h-6 text-airbnb-black stroke-[1.5]" />;
      default:
        return <Bed className="w-6 h-6 text-airbnb-black stroke-[1.5]" />;
    }
  };

  return (
    <section className="py-8 border-b border-airbnb-gray-100" aria-label="Sleeping arrangements">
      <h2 className="text-xl sm:text-[22px] font-semibold text-airbnb-black mb-6">
        Where you&apos;ll sleep
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {arrangements.map((item, index) => (
          <div
            key={index}
            className="p-6 border border-airbnb-gray-200 rounded-2xl flex flex-col justify-between hover:border-airbnb-gray-400 transition-colors"
          >
            <div className="mb-6">{getBedIcon(item.icon)}</div>
            <div>
              <h3 className="font-semibold text-base text-airbnb-black">
                {item.roomName}
              </h3>
              <p className="text-sm text-airbnb-gray-400 mt-1">
                {item.bedType}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
