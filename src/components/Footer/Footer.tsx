"use client";

import React from "react";
import { Globe } from "lucide-react";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#F7F7F7] border-t border-airbnb-gray-200 mt-16 text-sm text-airbnb-black">
      {/* Top Footer Columns */}
      <div className="max-w-[1280px] mx-auto px-6 xl:px-10 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="font-semibold text-airbnb-black mb-4">Support</h3>
          <ul className="space-y-3 text-airbnb-gray-600">
            <li><a href="#" className="hover:underline">Help Center</a></li>
            <li><a href="#" className="hover:underline">AirCover</a></li>
            <li><a href="#" className="hover:underline">Anti-discrimination</a></li>
            <li><a href="#" className="hover:underline">Disability support</a></li>
            <li><a href="#" className="hover:underline">Cancellation options</a></li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-airbnb-black mb-4">Hosting</h3>
          <ul className="space-y-3 text-airbnb-gray-600">
            <li><a href="#" className="hover:underline">Airbnb your home</a></li>
            <li><a href="#" className="hover:underline">AirCover for Hosts</a></li>
            <li><a href="#" className="hover:underline">Hosting resources</a></li>
            <li><a href="#" className="hover:underline">Community forum</a></li>
            <li><a href="#" className="hover:underline">Hosting responsibly</a></li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-airbnb-black mb-4">Airbnb</h3>
          <ul className="space-y-3 text-airbnb-gray-600">
            <li><a href="#" className="hover:underline">Newsroom</a></li>
            <li><a href="#" className="hover:underline">New features</a></li>
            <li><a href="#" className="hover:underline">Careers</a></li>
            <li><a href="#" className="hover:underline">Investors</a></li>
            <li><a href="#" className="hover:underline">Gift cards</a></li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-airbnb-black mb-4">Explore</h3>
          <ul className="space-y-3 text-airbnb-gray-600">
            <li><a href="#" className="hover:underline">Malibu luxury stays</a></li>
            <li><a href="#" className="hover:underline">Beachfront villas</a></li>
            <li><a href="#" className="hover:underline">California coast guide</a></li>
            <li><a href="#" className="hover:underline">Top rated experiences</a></li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-airbnb-gray-200">
        <div className="max-w-[1280px] mx-auto px-6 xl:px-10 py-6 flex flex-wrap items-center justify-between gap-4 text-xs text-airbnb-gray-600">
          <div className="flex flex-wrap items-center gap-2">
            <span>© 2026 Airbnb, Inc.</span>
            <span>·</span>
            <a href="#" className="hover:underline">Privacy</a>
            <span>·</span>
            <a href="#" className="hover:underline">Terms</a>
            <span>·</span>
            <a href="#" className="hover:underline">Sitemap</a>
            <span>·</span>
            <a href="#" className="hover:underline">Company details</a>
          </div>

          <div className="flex items-center gap-6 font-semibold text-airbnb-black">
            <button
              type="button"
              className="flex items-center gap-2 hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-black rounded"
            >
              <Globe className="w-4 h-4" />
              <span>English (US)</span>
            </button>
            <button
              type="button"
              className="hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-black rounded"
            >
              $ USD
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
