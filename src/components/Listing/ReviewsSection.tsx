"use client";

import React from "react";
import Image from "next/image";
import { Star } from "lucide-react";
import { ListingData } from "@/data/listing";

interface ReviewsSectionProps {
  reviews: ListingData["reviews"];
}

export const ReviewsSection: React.FC<ReviewsSectionProps> = ({ reviews }) => {
  const categoryLabels: { key: keyof typeof reviews.categories; label: string }[] = [
    { key: "cleanliness", label: "Cleanliness" },
    { key: "accuracy", label: "Accuracy" },
    { key: "communication", label: "Communication" },
    { key: "location", label: "Location" },
    { key: "checkIn", label: "Check-in" },
    { key: "value", label: "Value" },
  ];

  return (
    <section id="reviews-section" className="py-8 border-b border-airbnb-gray-100" aria-label="Guest reviews">
      {/* Header */}
      <div className="flex items-center gap-2 text-xl sm:text-[22px] font-semibold text-airbnb-black mb-8">
        <Star className="w-5 h-5 fill-airbnb-black text-airbnb-black" />
        <span>{reviews.overall.toFixed(2)}</span>
        <span>·</span>
        <span>{reviews.items.length + 138} reviews</span>
      </div>

      {/* Ratings Breakdown Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-4 mb-10">
        {categoryLabels.map(({ key, label }) => {
          const score = reviews.categories[key];
          const percentage = (score / 5) * 100;
          return (
            <div key={key} className="flex items-center justify-between gap-4 text-sm font-medium">
              <span className="text-airbnb-black flex-1">{label}</span>
              <div className="flex items-center gap-3 w-40">
                <div className="w-full bg-airbnb-gray-200 h-1 rounded-full overflow-hidden">
                  <div
                    className="bg-airbnb-black h-full rounded-full transition-all duration-500"
                    style={{ width: `${percentage}%` }}
                  />
                </div>
                <span className="text-xs font-semibold text-airbnb-black w-6 text-right">
                  {score.toFixed(1)}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Individual Review Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-8">
        {reviews.items.map((item) => (
          <article key={item.id} className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full overflow-hidden relative">
                <Image
                  src={item.avatar}
                  alt={item.author}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="font-semibold text-base text-airbnb-black">{item.author}</h3>
                <div className="text-sm text-airbnb-gray-400">{item.location} · {item.date}</div>
              </div>
            </div>

            <div className="flex items-center text-xs text-airbnb-black">
              {[...Array(item.rating)].map((_, i) => (
                <Star key={i} className="w-3 h-3 fill-airbnb-black" />
              ))}
            </div>

            <p className="text-airbnb-gray-600 text-sm sm:text-base leading-relaxed">
              {item.comment}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
};
