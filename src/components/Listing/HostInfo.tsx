"use client";

import React from "react";
import Image from "next/image";
import { Award, Trophy, Star } from "lucide-react";
import { ListingData } from "@/data/listing";

interface HostInfoProps {
  listing: ListingData;
}

export const HostInfo: React.FC<HostInfoProps> = ({ listing }) => {
  return (
    <section className="py-6 border-b border-airbnb-gray-100">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h2 className="text-xl sm:text-[22px] font-semibold text-airbnb-black">
            {listing.propertyType} hosted by {listing.host.name}
          </h2>
          <ol className="flex flex-wrap items-center gap-1.5 text-sm sm:text-base text-airbnb-black mt-1 list-none p-0">
            <li>{listing.stats.guests} guests</li>
            <li aria-hidden="true">·</li>
            <li>{listing.stats.bedrooms} bedrooms</li>
            <li aria-hidden="true">·</li>
            <li>{listing.stats.beds} beds</li>
            <li aria-hidden="true">·</li>
            <li>{listing.stats.baths} baths</li>
          </ol>
        </div>

        {/* Host Avatar with Superhost badge */}
        <div className="relative flex-shrink-0">
          <div className="w-14 h-14 rounded-full overflow-hidden relative border-2 border-white shadow-sm">
            <Image
              src={listing.host.avatar}
              alt={listing.host.name}
              fill
              className="object-cover"
            />
          </div>
          {listing.host.isSuperhost && (
            <div
              className="absolute -bottom-1 -right-1 bg-airbnb-red text-white p-1 rounded-full shadow-sm"
              title="Superhost"
              aria-label="Superhost"
            >
              <Award className="w-3.5 h-3.5" />
            </div>
          )}
        </div>
      </div>

      {/* Guest Favorite Banner */}
      {listing.isGuestFavorite && (
        <div className="mt-6 p-4 rounded-2xl border border-airbnb-gray-200 bg-white flex items-center justify-between shadow-sm">
          <div className="flex items-center gap-3">
            <div className="text-airbnb-black">
              <Trophy className="w-8 h-8 stroke-[1.5]" />
            </div>
            <div>
              <div className="font-semibold text-base text-airbnb-black">
                Guest favourite
              </div>
              <div className="text-sm text-airbnb-gray-400">
                One of the most loved homes on Airbnb based on ratings, reviews, and reliability
              </div>
            </div>
          </div>
          <div className="hidden sm:flex items-center gap-6 text-center pl-4 border-l border-airbnb-gray-200">
            <div>
              <div className="font-bold text-lg text-airbnb-black">{listing.rating.toFixed(2)}</div>
              <div className="flex text-airbnb-black justify-center">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-2.5 h-2.5 fill-current" />
                ))}
              </div>
            </div>
            <div className="border-l border-airbnb-gray-200 pl-6">
              <div className="font-bold text-lg text-airbnb-black underline">{listing.reviewCount}</div>
              <div className="text-xs text-airbnb-gray-400 font-medium">Reviews</div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
