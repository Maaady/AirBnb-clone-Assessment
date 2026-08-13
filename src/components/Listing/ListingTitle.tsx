"use client";

import React, { useState } from "react";
import { Star, Share, Heart, Check } from "lucide-react";
import { ListingData } from "@/data/listing";

interface ListingTitleProps {
  listing: ListingData;
}

export const ListingTitle: React.FC<ListingTitleProps> = ({ listing }) => {
  const [isSaved, setIsSaved] = useState(false);
  const [showShareToast, setShowShareToast] = useState(false);

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
    }
    setShowShareToast(true);
    setTimeout(() => setShowShareToast(false), 2500);
  };

  return (
    <section className="pt-6 pb-4">
      {/* Title */}
      <h1 className="text-2xl sm:text-[26px] font-semibold text-airbnb-black leading-tight tracking-[-0.01em]">
        {listing.title}
      </h1>

      {/* Sub-row Info & Actions */}
      <div className="flex flex-wrap items-center justify-between gap-4 mt-2 text-sm text-airbnb-black">
        {/* Left Stats & Location */}
        <div className="flex flex-wrap items-center gap-2 font-medium">
          <div className="flex items-center gap-1 font-semibold">
            <Star className="w-3.5 h-3.5 fill-airbnb-black text-airbnb-black" />
            <span>{listing.rating.toFixed(2)}</span>
          </div>
          <span>·</span>
          <a
            href="#reviews-section"
            className="underline font-semibold hover:text-airbnb-gray-500 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-black rounded"
          >
            {listing.reviewCount} reviews
          </a>
          {listing.isSuperhost && (
            <>
              <span>·</span>
              <span className="flex items-center gap-1 text-airbnb-gray-400 font-normal">
                Superhost
              </span>
            </>
          )}
          <span>·</span>
          <a
            href="#location-section"
            className="underline font-semibold hover:text-airbnb-gray-500 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-black rounded"
          >
            {listing.location.city}, {listing.location.state}, {listing.location.country}
          </a>
        </div>

        {/* Right Actions: Share & Save */}
        <div className="flex items-center gap-2 relative">
          <button
            type="button"
            onClick={handleShare}
            aria-label="Share this listing"
            className="flex items-center gap-2 px-3 py-1.5 rounded-lg hover:bg-airbnb-gray-50 underline font-semibold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-black"
          >
            <Share className="w-4 h-4 stroke-[2]" />
            <span>Share</span>
          </button>

          {showShareToast && (
            <div
              role="status"
              className="absolute -top-10 left-0 bg-airbnb-black text-white text-xs px-3 py-1.5 rounded-md shadow-lg flex items-center gap-1.5 animate-in fade-in zoom-in-95 duration-150 z-20"
            >
              <Check className="w-3.5 h-3.5 text-green-400" />
              Link copied to clipboard!
            </div>
          )}

          <button
            type="button"
            onClick={() => setIsSaved(!isSaved)}
            aria-label={isSaved ? "Remove from saved wishlists" : "Save this listing to wishlists"}
            className="flex items-center gap-2 px-3 py-1.5 rounded-lg hover:bg-airbnb-gray-50 underline font-semibold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-black"
          >
            <Heart
              className={`w-4 h-4 transition-transform duration-150 ${
                isSaved
                  ? "fill-airbnb-red text-airbnb-red scale-110"
                  : "text-airbnb-black stroke-[2]"
              }`}
            />
            <span>{isSaved ? "Saved" : "Save"}</span>
          </button>
        </div>
      </div>
    </section>
  );
};
