"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X, Share, Heart, Check } from "lucide-react";
import { Photo } from "@/data/listing";
import { useShare } from "@/hooks/useShare";

interface LightboxProps {
  isOpen: boolean;
  currentIndex: number;
  photos: Photo[];
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

export const Lightbox: React.FC<LightboxProps> = ({
  isOpen,
  currentIndex,
  photos,
  onClose,
  onNext,
  onPrev,
}) => {
  const [isSaved, setIsSaved] = useState(false);
  const { showShareToast, handleShare } = useShare();
  const currentPhoto = photos[currentIndex] || photos[0];
  const total = photos.length;
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeBtnRef = useRef<HTMLButtonElement>(null);
  const triggerElementRef = useRef<HTMLElement | null>(null);

  // Focus management: store trigger and return focus on close
  useEffect(() => {
    if (isOpen) {
      triggerElementRef.current = document.activeElement as HTMLElement;
      document.body.classList.add("modal-open");
      setTimeout(() => {
        closeBtnRef.current?.focus();
      }, 50);
    } else {
      document.body.classList.remove("modal-open");
      if (triggerElementRef.current) {
        triggerElementRef.current.focus();
      }
    }
  }, [isOpen]);

  // Keyboard navigation & focus trapping
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        onClose();
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        onNext();
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        onPrev();
      } else if (e.key === "Tab") {
        if (!dialogRef.current) return;
        const focusableElements = dialogRef.current.querySelectorAll(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        const firstElement = focusableElements[0] as HTMLElement;
        const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            e.preventDefault();
            lastElement?.focus();
          }
        } else {
          if (document.activeElement === lastElement) {
            e.preventDefault();
            firstElement?.focus();
          }
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose, onNext, onPrev]);

  if (!isOpen || !currentPhoto) return null;

  return (
    <div
      ref={dialogRef}
      role="dialog"
      aria-modal="true"
      aria-label="Photo Lightbox"
      className="fixed inset-0 z-[100] bg-black/95 text-white flex flex-col justify-between select-none animate-in fade-in duration-200"
    >
      {/* Lightbox Top Header */}
      <div className="flex items-center justify-between p-6 z-10">
        <button
          ref={closeBtnRef}
          type="button"
          id="lightbox-close-btn"
          onClick={onClose}
          aria-label="Close lightbox"
          className="flex items-center gap-2 text-sm font-medium text-white hover:bg-white/10 px-3 py-2 rounded-full transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
        >
          <X className="w-5 h-5" />
          <span>Close</span>
        </button>

        <div
          id="lightbox-counter"
          aria-live="polite"
          className="text-sm font-semibold text-white/90"
        >
          {currentIndex + 1} / {total}
        </div>

        <div className="flex items-center gap-2 relative">
          <button
            type="button"
            aria-label="Share this photo"
            onClick={handleShare}
            className="p-2 rounded-full hover:bg-white/10 text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            <Share className="w-4 h-4" />
          </button>

          {showShareToast && (
            <div className="absolute right-12 top-2 bg-white text-airbnb-black text-xs px-3 py-1.5 rounded-md shadow-lg flex items-center gap-1.5 z-30 font-semibold">
              <Check className="w-3.5 h-3.5 text-green-600" />
              Link copied!
            </div>
          )}

          <button
            type="button"
            aria-label="Save this photo"
            onClick={() => setIsSaved(!isSaved)}
            className="p-2 rounded-full hover:bg-white/10 text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            <Heart
              className={`w-4 h-4 ${
                isSaved ? "fill-airbnb-red text-airbnb-red" : "text-white"
              }`}
            />
          </button>
        </div>
      </div>

      {/* Main Image Center Stage with Navigation Buttons */}
      <div className="relative flex-1 flex items-center justify-center px-4 md:px-16 overflow-hidden">
        {/* Previous Button */}
        <button
          type="button"
          id="lightbox-prev-btn"
          onClick={onPrev}
          aria-label="Previous photo"
          className="absolute left-6 z-20 w-12 h-12 rounded-full border border-white/30 bg-black/40 hover:bg-white/20 flex items-center justify-center text-white backdrop-blur-sm transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-white active:scale-95"
        >
          <ChevronLeft className="w-6 h-6 stroke-[2]" />
        </button>

        {/* Center Active Image Container */}
        <div className="relative w-full h-full max-w-5xl max-h-[72vh] flex items-center justify-center">
          <Image
            src={currentPhoto.url}
            alt={currentPhoto.caption}
            fill
            priority
            sizes="(max-width: 1280px) 90vw, 1200px"
            className="object-contain transition-all duration-300 ease-out"
          />
        </div>

        {/* Next Button */}
        <button
          type="button"
          id="lightbox-next-btn"
          onClick={onNext}
          aria-label="Next photo"
          className="absolute right-6 z-20 w-12 h-12 rounded-full border border-white/30 bg-black/40 hover:bg-white/20 flex items-center justify-center text-white backdrop-blur-sm transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-white active:scale-95"
        >
          <ChevronRight className="w-6 h-6 stroke-[2]" />
        </button>
      </div>

      {/* Bottom Caption and Category */}
      <div className="p-6 text-center max-w-3xl mx-auto z-10">
        <div className="inline-block bg-white/10 backdrop-blur-sm text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider text-white/80 mb-2">
          {currentPhoto.category}
        </div>
        <p className="text-sm sm:text-base text-white/90 font-medium">
          {currentPhoto.caption}
        </p>
      </div>
    </div>
  );
};
