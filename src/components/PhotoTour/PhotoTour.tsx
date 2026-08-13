"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { ArrowLeft, Share, Heart, Check } from "lucide-react";
import { Photo } from "@/data/listing";
import { useShare } from "@/hooks/useShare";

interface PhotoTourProps {
  isOpen: boolean;
  photos: Photo[];
  onClose: () => void;
  onSelectPhoto: (index: number) => void;
}

export const PhotoTour: React.FC<PhotoTourProps> = ({
  isOpen,
  photos,
  onClose,
  onSelectPhoto,
}) => {
  const [selectedCategory, setSelectedCategory] = React.useState<string>("All photos");
  const [isSaved, setIsSaved] = React.useState<boolean>(false);
  const { showShareToast, handleShare } = useShare();
  const closeBtnRef = useRef<HTMLButtonElement>(null);

  // Extract unique categories
  const categories = ["All photos", ...Array.from(new Set(photos.map((p) => p.category)))];

  // Filtered photos
  const filteredPhotos =
    selectedCategory === "All photos"
      ? photos
      : photos.filter((p) => p.category === selectedCategory);

  // Group photos by category for continuous scroll
  const photosByCategory = categories
    .filter((cat) => cat !== "All photos")
    .map((cat) => ({
      category: cat,
      items: photos.filter((p) => p.category === cat),
    }));

  // Handle escape key and focus
  useEffect(() => {
    if (!isOpen) return;

    document.body.classList.add("modal-open");
    closeBtnRef.current?.focus();

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.classList.remove("modal-open");
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Photo tour"
      className="fixed inset-0 z-50 bg-white overflow-y-auto animate-in fade-in duration-200"
    >
      {/* Sticky Header */}
      <header className="sticky top-0 z-20 bg-white/95 backdrop-blur-md border-b border-airbnb-gray-100 px-6 py-4 flex items-center justify-between">
        <button
          ref={closeBtnRef}
          type="button"
          id="photo-tour-close-btn"
          onClick={onClose}
          aria-label="Close photo tour"
          className="p-2 -ml-2 rounded-full hover:bg-airbnb-gray-50 text-airbnb-black transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-black"
        >
          <ArrowLeft className="w-5 h-5 stroke-[2]" />
        </button>

        {/* Category Pills Navigation */}
        <nav aria-label="Photo categories" className="hidden md:flex items-center gap-2 overflow-x-auto py-1">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${
                selectedCategory === cat
                  ? "bg-airbnb-black text-white"
                  : "bg-airbnb-gray-50 text-airbnb-gray-600 hover:bg-airbnb-gray-100"
              }`}
            >
              {cat}
            </button>
          ))}
        </nav>

        {/* Header Actions */}
        <div className="flex items-center gap-2 relative">
          <button
            type="button"
            onClick={handleShare}
            aria-label="Share photos"
            className="flex items-center gap-2 p-2 rounded-full hover:bg-airbnb-gray-50 text-airbnb-black transition-colors"
          >
            <Share className="w-4 h-4" />
          </button>

          {showShareToast && (
            <div className="absolute right-12 top-2 bg-airbnb-black text-white text-xs px-3 py-1.5 rounded-md shadow-lg flex items-center gap-1.5 z-30">
              <Check className="w-3.5 h-3.5 text-green-400" />
              Link copied!
            </div>
          )}

          <button
            type="button"
            onClick={() => setIsSaved(!isSaved)}
            aria-label={isSaved ? "Saved" : "Save"}
            className="flex items-center gap-2 p-2 rounded-full hover:bg-airbnb-gray-50 text-airbnb-black transition-colors"
          >
            <Heart
              className={`w-4 h-4 ${
                isSaved ? "fill-airbnb-red text-airbnb-red" : "text-airbnb-black"
              }`}
            />
          </button>
        </div>
      </header>

      {/* Main Photo Content */}
      <main className="max-w-[1120px] mx-auto px-6 py-8">
        {selectedCategory === "All photos" ? (
          /* Grouped by category layout */
          <div className="space-y-12">
            {photosByCategory.map((group) => (
              <section key={group.category} aria-label={group.category} className="space-y-4">
                <h2 className="text-xl font-bold text-airbnb-black">
                  {group.category}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {group.items.map((photo) => {
                    const globalIndex = photos.findIndex((p) => p.id === photo.id);
                    return (
                      <div
                        key={photo.id}
                        onClick={() => onSelectPhoto(globalIndex)}
                        onKeyDown={(e) => {
                          if (e.key === "Enter" || e.key === " ") {
                            e.preventDefault();
                            onSelectPhoto(globalIndex);
                          }
                        }}
                        tabIndex={0}
                        role="button"
                        aria-label={`View full photo: ${photo.caption}`}
                        className="group relative cursor-pointer overflow-hidden rounded-xl bg-airbnb-gray-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-black"
                      >
                        <div className="relative aspect-[4/3] w-full">
                          <Image
                            src={photo.url}
                            alt={photo.caption}
                            fill
                            sizes="(max-width: 768px) 100vw, 50vw"
                            className="object-cover transition-transform duration-300 group-hover:scale-102"
                          />
                        </div>
                        <div className="p-3 bg-white border-t border-airbnb-gray-100">
                          <p className="text-sm text-airbnb-gray-600">{photo.caption}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </section>
            ))}
          </div>
        ) : (
          /* Single category filter layout */
          <div>
            <h2 className="text-2xl font-bold text-airbnb-black mb-6">
              {selectedCategory}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredPhotos.map((photo) => {
                const globalIndex = photos.findIndex((p) => p.id === photo.id);
                return (
                  <div
                    key={photo.id}
                    onClick={() => onSelectPhoto(globalIndex)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        onSelectPhoto(globalIndex);
                      }
                    }}
                    tabIndex={0}
                    role="button"
                    aria-label={`View full photo: ${photo.caption}`}
                    className="group relative cursor-pointer overflow-hidden rounded-2xl bg-airbnb-gray-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-black"
                  >
                    <div className="relative aspect-[4/3] w-full">
                      <Image
                        src={photo.url}
                        alt={photo.caption}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover transition-transform duration-300 group-hover:scale-102"
                      />
                    </div>
                    <div className="p-4 bg-white">
                      <p className="text-sm font-medium text-airbnb-black">{photo.caption}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </main>
    </div>
  );
};
