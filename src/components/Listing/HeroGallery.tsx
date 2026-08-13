"use client";

import React from "react";
import Image from "next/image";
import { LayoutGrid } from "lucide-react";
import { Photo } from "@/data/listing";

interface HeroGalleryProps {
  photos: Photo[];
  onOpenPhotoTour: () => void;
  onOpenLightbox: (index: number) => void;
}

export const HeroGallery: React.FC<HeroGalleryProps> = ({
  photos,
  onOpenPhotoTour,
  onOpenLightbox,
}) => {
  const displayPhotos = photos.slice(0, 5);

  return (
    <section className="relative mt-2" aria-label="Photo gallery">
      <div className="grid grid-cols-4 grid-rows-2 gap-2 h-[340px] sm:h-[420px] md:h-[460px] lg:h-[500px] rounded-2xl overflow-hidden group">
        {/* Large Primary Left Photo (2 cols, 2 rows) */}
        {displayPhotos[0] && (
          <div
            className="relative col-span-2 row-span-2 overflow-hidden cursor-pointer"
            onClick={() => onOpenLightbox(0)}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                onOpenLightbox(0);
              }
            }}
            tabIndex={0}
            role="button"
            aria-label={`Photo 1: ${displayPhotos[0].caption}`}
          >
            <Image
              src={displayPhotos[0].url}
              alt={displayPhotos[0].caption}
              fill
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover transition duration-300 ease-out hover:brightness-95 hover:scale-[1.01]"
            />
          </div>
        )}

        {/* 4 Smaller Secondary Photos on Right (1 col, 1 row each) */}
        {displayPhotos.slice(1, 5).map((photo, idx) => {
          const photoIndex = idx + 1;
          return (
            <div
              key={photo.id}
              className="relative col-span-1 row-span-1 overflow-hidden cursor-pointer"
              onClick={() => onOpenLightbox(photoIndex)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  onOpenLightbox(photoIndex);
                }
              }}
              tabIndex={0}
              role="button"
              aria-label={`Photo ${photoIndex + 1}: ${photo.caption}`}
            >
              <Image
                src={photo.url}
                alt={photo.caption}
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover transition duration-300 ease-out hover:brightness-95 hover:scale-[1.02]"
              />
            </div>
          );
        })}
      </div>

      {/* "Show all photos" Button */}
      <button
        type="button"
        id="show-all-photos-button"
        onClick={onOpenPhotoTour}
        aria-label={`Show all ${photos.length} photos`}
        className="absolute bottom-4 right-4 bg-white text-airbnb-black font-semibold text-sm px-4 py-1.5 rounded-lg border border-airbnb-black shadow-md flex items-center gap-2 hover:bg-airbnb-gray-50 active:scale-95 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-black z-10"
      >
        <LayoutGrid className="w-4 h-4" />
        <span>Show all {photos.length} photos</span>
      </button>
    </section>
  );
};
