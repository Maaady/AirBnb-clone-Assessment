"use client";

import React, { useState } from "react";
import { ChevronRight, X } from "lucide-react";
import { ListingData } from "@/data/listing";

interface ListingDescriptionProps {
  description: ListingData["description"];
}

export const ListingDescription: React.FC<ListingDescriptionProps> = ({ description }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="py-8 border-b border-airbnb-gray-100">
      <div className="text-airbnb-black space-y-4 leading-relaxed">
        <p className="text-base text-airbnb-gray-600 line-clamp-4">
          {description.summary}
        </p>

        <button
          type="button"
          onClick={() => setIsModalOpen(true)}
          className="inline-flex items-center gap-1 font-semibold underline text-airbnb-black hover:text-airbnb-gray-500 transition-colors pt-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-black rounded"
        >
          <span>Show more</span>
          <ChevronRight className="w-4 h-4 stroke-[2.5]" />
        </button>
      </div>

      {/* Description Modal */}
      {isModalOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="description-modal-title"
          className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4 sm:p-6"
        >
          <div
            className="bg-white rounded-3xl max-w-2xl w-full max-h-[85vh] flex flex-col shadow-2xl animate-in fade-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="p-6 border-b border-airbnb-gray-100 flex items-center justify-between sticky top-0 bg-white rounded-t-3xl">
              <button
                type="button"
                onClick={() => setIsModalOpen(false)}
                aria-label="Close modal"
                className="p-2 -ml-2 rounded-full hover:bg-airbnb-gray-50 text-airbnb-black transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
              <h2 id="description-modal-title" className="font-semibold text-lg text-airbnb-black">
                About this space
              </h2>
              <div className="w-8" aria-hidden="true" />
            </div>

            {/* Modal Content */}
            <div className="p-6 overflow-y-auto space-y-6 text-airbnb-gray-600 text-base leading-relaxed">
              <div>
                <p>{description.summary}</p>
              </div>

              <div>
                <h3 className="font-semibold text-lg text-airbnb-black mb-2">The space</h3>
                <p>{description.theSpace}</p>
              </div>

              <div>
                <h3 className="font-semibold text-lg text-airbnb-black mb-2">Guest access</h3>
                <p>{description.guestAccess}</p>
              </div>

              <div>
                <h3 className="font-semibold text-lg text-airbnb-black mb-2">Other things to note</h3>
                <p>{description.otherThingsToNote}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
