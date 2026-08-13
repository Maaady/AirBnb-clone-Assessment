"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Award, Star, ShieldCheck, Briefcase, Globe } from "lucide-react";
import { ListingData } from "@/data/listing";
import { Modal } from "@/components/ui/Modal";

interface HostProfileSectionProps {
  host: ListingData["host"];
}

export const HostProfileSection: React.FC<HostProfileSectionProps> = ({ host }) => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [messageSent, setMessageSent] = useState(false);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    setMessageSent(true);
    setTimeout(() => {
      setMessageSent(false);
      setIsContactModalOpen(false);
    }, 1800);
  };

  return (
    <section className="py-8 border-b border-airbnb-gray-100" aria-label="Host information">
      <h2 className="text-xl sm:text-[22px] font-semibold text-airbnb-black mb-6">
        Meet your Host
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Host Profile Card */}
        <div className="bg-[#F0EFE9]/50 p-6 rounded-3xl border border-airbnb-gray-200 flex flex-col items-center text-center shadow-sm">
          <div className="relative mb-4">
            <div className="w-24 h-24 rounded-full overflow-hidden relative shadow-md">
              <Image
                src={host.avatar}
                alt={host.name}
                fill
                className="object-cover"
              />
            </div>
            {host.isSuperhost && (
              <div className="absolute bottom-0 right-0 bg-airbnb-red text-white p-1.5 rounded-full shadow">
                <Award className="w-4 h-4" />
              </div>
            )}
          </div>

          <h3 className="font-bold text-2xl text-airbnb-black">{host.name}</h3>
          <p className="text-xs font-semibold text-airbnb-gray-400 mt-0.5">Superhost</p>

          <div className="flex items-center justify-around w-full mt-6 pt-4 border-t border-airbnb-gray-200">
            <div>
              <div className="font-bold text-lg text-airbnb-black">142</div>
              <div className="text-[11px] text-airbnb-gray-400 uppercase font-semibold">Reviews</div>
            </div>
            <div className="h-8 w-[1px] bg-airbnb-gray-200" />
            <div>
              <div className="font-bold text-lg text-airbnb-black flex items-center justify-center gap-0.5">
                4.98 <Star className="w-3.5 h-3.5 fill-airbnb-black inline" />
              </div>
              <div className="text-[11px] text-airbnb-gray-400 uppercase font-semibold">Rating</div>
            </div>
            <div className="h-8 w-[1px] bg-airbnb-gray-200" />
            <div>
              <div className="font-bold text-lg text-airbnb-black">{host.yearsHosting}</div>
              <div className="text-[11px] text-airbnb-gray-400 uppercase font-semibold">Years hosting</div>
            </div>
          </div>
        </div>

        {/* Host Details & Bio */}
        <div className="md:col-span-2 space-y-4">
          <div className="space-y-3 text-sm text-airbnb-black">
            <div className="flex items-center gap-3">
              <Briefcase className="w-5 h-5 text-airbnb-black stroke-[1.5]" />
              <span>My work: {host.work}</span>
            </div>
            <div className="flex items-center gap-3">
              <Globe className="w-5 h-5 text-airbnb-black stroke-[1.5]" />
              <span>Speaks: {host.languages.join(", ")}</span>
            </div>
          </div>

          <p className="text-base text-airbnb-gray-600 leading-relaxed pt-2">
            {host.bio}
          </p>

          <div className="pt-4 space-y-2 text-sm text-airbnb-black">
            <p><span className="font-semibold">Response rate:</span> {host.responseRate}</p>
            <p><span className="font-semibold">Responds:</span> {host.responseTime}</p>
          </div>

          <div className="pt-4">
            <button
              type="button"
              onClick={() => setIsContactModalOpen(true)}
              className="bg-airbnb-black hover:bg-black text-white font-semibold text-sm px-6 py-3 rounded-lg transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-black"
            >
              Message Host
            </button>
          </div>

          <div className="flex items-start gap-3 pt-4 text-xs text-airbnb-gray-400 border-t border-airbnb-gray-100">
            <ShieldCheck className="w-6 h-6 text-airbnb-red flex-shrink-0" />
            <span>
              To protect your payment, never transfer money or communicate outside of the Airbnb website or app.
            </span>
          </div>
        </div>
      </div>

      {/* Message Host Modal */}
      <Modal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
        title={`Contact ${host.name}`}
        maxWidth="max-w-lg"
      >
        <p className="text-sm text-airbnb-gray-400 mb-4">
          Typically responds within an hour
        </p>

        {messageSent ? (
          <div className="py-8 text-center text-green-600 font-semibold animate-in fade-in">
            Message sent successfully!
          </div>
        ) : (
          <form onSubmit={handleSendMessage} className="space-y-4">
            <div>
              <label htmlFor="message-input" className="block text-xs font-semibold text-airbnb-black mb-1">
                Your message
              </label>
              <textarea
                id="message-input"
                rows={4}
                required
                placeholder={`Hi ${host.name}, I'm planning a trip to Malibu and have a quick question...`}
                className="w-full p-3 border border-airbnb-gray-200 rounded-xl text-sm focus:outline-none focus:border-airbnb-black"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-airbnb-black hover:bg-black text-white font-semibold py-3 rounded-xl transition-colors"
            >
              Send message
            </button>
          </form>
        )}
      </Modal>
    </section>
  );
};
