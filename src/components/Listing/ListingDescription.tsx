"use client";

import React, { useState } from "react";
import { ChevronRight } from "lucide-react";
import { ListingData } from "@/data/listing";
import { Modal } from "@/components/ui/Modal";

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
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="About this space"
      >
        <div className="space-y-6 text-airbnb-gray-600 text-base leading-relaxed">
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
      </Modal>
    </section>
  );
};
