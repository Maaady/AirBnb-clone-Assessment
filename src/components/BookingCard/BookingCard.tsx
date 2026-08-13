"use client";

import React, { useState, useRef, useEffect } from "react";
import { Star, ChevronDown, Flag, Plus, Minus } from "lucide-react";
import { ListingData } from "@/data/listing";

interface BookingCardProps {
  pricing: ListingData["pricing"];
  rating: number;
  reviewCount: number;
}

export const BookingCard: React.FC<BookingCardProps> = ({
  pricing,
  rating,
  reviewCount,
}) => {
  const [checkInDate, setCheckInDate] = useState("2026-09-12");
  const [checkOutDate, setCheckOutDate] = useState("2026-09-17");
  const [isGuestPickerOpen, setIsGuestPickerOpen] = useState(false);
  const [adults, setAdults] = useState(2);
  const [childrenCount, setChildrenCount] = useState(0);
  const [infants, setInfants] = useState(0);
  const [isReserved, setIsReserved] = useState(false);

  const guestPickerRef = useRef<HTMLDivElement>(null);

  // Calculate nights
  const calculateNights = () => {
    const start = new Date(checkInDate);
    const end = new Date(checkOutDate);
    const diff = Math.ceil((end.getTime() - start.getTime()) / (1000 * 3600 * 24));
    return diff > 0 ? diff : pricing.minNights;
  };

  const nights = calculateNights();
  const baseTotal = pricing.nightlyRate * nights;
  const total = baseTotal + pricing.cleaningFee + pricing.serviceFee;
  const totalGuests = adults + childrenCount;

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        guestPickerRef.current &&
        !guestPickerRef.current.contains(event.target as Node)
      ) {
        setIsGuestPickerOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleReserve = () => {
    setIsReserved(true);
    setTimeout(() => setIsReserved(false), 3000);
  };

  return (
    <aside
      aria-label="Reservation card"
      className="sticky top-28 bg-white border border-airbnb-gray-200 rounded-3xl p-6 shadow-card transition-shadow hover:shadow-xl"
    >
      {/* Price and Rating Header */}
      <div className="flex items-baseline justify-between mb-6">
        <div>
          <span className="text-[22px] font-bold text-airbnb-black">
            ${pricing.nightlyRate}
          </span>
          <span className="text-base text-airbnb-gray-400 font-normal ml-1">
            night
          </span>
        </div>

        <div className="flex items-center gap-1 text-sm font-semibold text-airbnb-black">
          <Star className="w-3.5 h-3.5 fill-airbnb-black" />
          <span>{rating.toFixed(2)}</span>
          <span className="text-airbnb-gray-300 font-normal">·</span>
          <a
            href="#reviews-section"
            className="text-airbnb-gray-400 font-normal underline hover:text-airbnb-black"
          >
            {reviewCount} reviews
          </a>
        </div>
      </div>

      {/* Date & Guest Picker Box */}
      <div className="border border-airbnb-gray-300 rounded-2xl mb-4 overflow-visible relative">
        {/* Date Row */}
        <div className="grid grid-cols-2 border-b border-airbnb-gray-300">
          <div className="p-3 border-r border-airbnb-gray-300 focus-within:ring-2 focus-within:ring-airbnb-black rounded-tl-2xl">
            <label
              htmlFor="checkin-input"
              className="block text-[10px] font-extrabold uppercase tracking-wider text-airbnb-black"
            >
              Check-in
            </label>
            <input
              id="checkin-input"
              type="date"
              value={checkInDate}
              onChange={(e) => setCheckInDate(e.target.value)}
              className="w-full text-xs font-semibold text-airbnb-black bg-transparent focus:outline-none cursor-pointer"
            />
          </div>

          <div className="p-3 focus-within:ring-2 focus-within:ring-airbnb-black rounded-tr-2xl">
            <label
              htmlFor="checkout-input"
              className="block text-[10px] font-extrabold uppercase tracking-wider text-airbnb-black"
            >
              Checkout
            </label>
            <input
              id="checkout-input"
              type="date"
              value={checkOutDate}
              onChange={(e) => setCheckOutDate(e.target.value)}
              className="w-full text-xs font-semibold text-airbnb-black bg-transparent focus:outline-none cursor-pointer"
            />
          </div>
        </div>

        {/* Guests Row */}
        <div className="relative" ref={guestPickerRef}>
          <button
            type="button"
            id="guest-picker-btn"
            aria-expanded={isGuestPickerOpen}
            aria-label="Select guests"
            onClick={() => setIsGuestPickerOpen(!isGuestPickerOpen)}
            className="w-full p-3 flex items-center justify-between text-left focus:outline-none focus:ring-2 focus:ring-airbnb-black rounded-b-2xl"
          >
            <div>
              <div className="text-[10px] font-extrabold uppercase tracking-wider text-airbnb-black">
                Guests
              </div>
              <div className="text-xs font-semibold text-airbnb-black">
                {totalGuests} guest{totalGuests > 1 ? "s" : ""}
                {infants > 0 && `, ${infants} infant${infants > 1 ? "s" : ""}`}
              </div>
            </div>
            <ChevronDown
              className={`w-4 h-4 text-airbnb-black transition-transform duration-200 ${
                isGuestPickerOpen ? "rotate-180" : ""
              }`}
            />
          </button>

          {/* Guest Selector Dropdown */}
          {isGuestPickerOpen && (
            <div
              role="region"
              aria-label="Guest counts"
              className="absolute top-full left-0 right-0 mt-1 bg-white border border-airbnb-gray-200 rounded-2xl shadow-popup p-4 z-40 space-y-4 animate-in fade-in zoom-in-95 duration-150"
            >
              {/* Adults */}
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-semibold text-sm text-airbnb-black">Adults</div>
                  <div className="text-xs text-airbnb-gray-400">Age 13+</div>
                </div>
                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    aria-label="Decrease adults"
                    disabled={adults <= 1}
                    onClick={() => setAdults((a) => Math.max(1, a - 1))}
                    className="w-8 h-8 rounded-full border border-airbnb-gray-300 flex items-center justify-center text-airbnb-gray-400 disabled:opacity-30 hover:border-airbnb-black transition-colors"
                  >
                    <Minus className="w-3.5 h-3.5" />
                  </button>
                  <span className="text-sm font-semibold text-airbnb-black w-4 text-center">
                    {adults}
                  </span>
                  <button
                    type="button"
                    aria-label="Increase adults"
                    disabled={totalGuests >= 8}
                    onClick={() => setAdults((a) => a + 1)}
                    className="w-8 h-8 rounded-full border border-airbnb-gray-300 flex items-center justify-center text-airbnb-gray-600 disabled:opacity-30 hover:border-airbnb-black transition-colors"
                  >
                    <Plus className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Children */}
              <div className="flex items-center justify-between border-t border-airbnb-gray-100 pt-3">
                <div>
                  <div className="font-semibold text-sm text-airbnb-black">Children</div>
                  <div className="text-xs text-airbnb-gray-400">Ages 2–12</div>
                </div>
                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    aria-label="Decrease children"
                    disabled={childrenCount <= 0}
                    onClick={() => setChildrenCount((c) => Math.max(0, c - 1))}
                    className="w-8 h-8 rounded-full border border-airbnb-gray-300 flex items-center justify-center text-airbnb-gray-400 disabled:opacity-30 hover:border-airbnb-black transition-colors"
                  >
                    <Minus className="w-3.5 h-3.5" />
                  </button>
                  <span className="text-sm font-semibold text-airbnb-black w-4 text-center">
                    {childrenCount}
                  </span>
                  <button
                    type="button"
                    aria-label="Increase children"
                    disabled={totalGuests >= 8}
                    onClick={() => setChildrenCount((c) => c + 1)}
                    className="w-8 h-8 rounded-full border border-airbnb-gray-300 flex items-center justify-center text-airbnb-gray-600 disabled:opacity-30 hover:border-airbnb-black transition-colors"
                  >
                    <Plus className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Infants */}
              <div className="flex items-center justify-between border-t border-airbnb-gray-100 pt-3">
                <div>
                  <div className="font-semibold text-sm text-airbnb-black">Infants</div>
                  <div className="text-xs text-airbnb-gray-400">Under 2</div>
                </div>
                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    aria-label="Decrease infants"
                    disabled={infants <= 0}
                    onClick={() => setInfants((i) => Math.max(0, i - 1))}
                    className="w-8 h-8 rounded-full border border-airbnb-gray-300 flex items-center justify-center text-airbnb-gray-400 disabled:opacity-30 hover:border-airbnb-black transition-colors"
                  >
                    <Minus className="w-3.5 h-3.5" />
                  </button>
                  <span className="text-sm font-semibold text-airbnb-black w-4 text-center">
                    {infants}
                  </span>
                  <button
                    type="button"
                    aria-label="Increase infants"
                    disabled={infants >= 5}
                    onClick={() => setInfants((i) => i + 1)}
                    className="w-8 h-8 rounded-full border border-airbnb-gray-300 flex items-center justify-center text-airbnb-gray-600 disabled:opacity-30 hover:border-airbnb-black transition-colors"
                  >
                    <Plus className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              <div className="pt-2 text-right">
                <button
                  type="button"
                  onClick={() => setIsGuestPickerOpen(false)}
                  className="font-semibold text-xs underline text-airbnb-black hover:text-airbnb-gray-500"
                >
                  Close
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Reserve Button */}
      <button
        type="button"
        id="reserve-button"
        onClick={handleReserve}
        aria-label="Reserve booking"
        className="w-full py-3.5 px-6 rounded-xl text-white font-semibold text-base airbnb-btn-gradient cursor-pointer shadow-md"
      >
        {isReserved ? "Dates Reserved!" : "Reserve"}
      </button>

      <p className="text-center text-xs text-airbnb-gray-400 mt-3 font-normal">
        You won&apos;t be charged yet
      </p>

      {/* Pricing Breakdown */}
      <div className="mt-6 space-y-3 text-sm text-airbnb-black">
        <div className="flex justify-between">
          <span className="underline">
            ${pricing.nightlyRate} x {nights} nights
          </span>
          <span>${baseTotal.toLocaleString()}</span>
        </div>
        <div className="flex justify-between">
          <span className="underline">Cleaning fee</span>
          <span>${pricing.cleaningFee}</span>
        </div>
        <div className="flex justify-between">
          <span className="underline">Airbnb service fee</span>
          <span>${pricing.serviceFee}</span>
        </div>
      </div>

      {/* Total */}
      <div className="border-t border-airbnb-gray-200 mt-5 pt-5 flex justify-between items-baseline font-bold text-base text-airbnb-black">
        <span>Total before taxes</span>
        <span>${total.toLocaleString()}</span>
      </div>

      {/* Report this listing */}
      <div className="mt-6 text-center">
        <button
          type="button"
          className="inline-flex items-center gap-2 text-xs font-semibold text-airbnb-gray-400 hover:text-airbnb-black transition-colors"
        >
          <Flag className="w-3.5 h-3.5" />
          <span>Report this listing</span>
        </button>
      </div>
    </aside>
  );
};
