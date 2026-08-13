"use client";

import React, { useState } from "react";
import { LISTING_DATA } from "@/data/listing";
import { Header } from "@/components/Header/Header";
import { ListingTitle } from "@/components/Listing/ListingTitle";
import { HeroGallery } from "@/components/Listing/HeroGallery";
import { HostInfo } from "@/components/Listing/HostInfo";
import { ListingHighlights } from "@/components/Listing/ListingHighlights";
import { ListingDescription } from "@/components/Listing/ListingDescription";
import { SleepingArrangements } from "@/components/Listing/SleepingArrangements";
import { AmenitiesSection } from "@/components/Listing/AmenitiesSection";
import { ReviewsSection } from "@/components/Listing/ReviewsSection";
import { LocationSection } from "@/components/Listing/LocationSection";
import { HostProfileSection } from "@/components/Listing/HostProfileSection";
import { BookingCard } from "@/components/BookingCard/BookingCard";
import { PhotoTour } from "@/components/PhotoTour/PhotoTour";
import { Lightbox } from "@/components/Lightbox/Lightbox";
import { Footer } from "@/components/Footer/Footer";
import { useLightbox } from "@/hooks/useLightbox";

export default function ListingPage() {
  const [isPhotoTourOpen, setIsPhotoTourOpen] = useState(false);
  const lightbox = useLightbox(LISTING_DATA.photos.length);

  const handleOpenPhotoTour = () => {
    setIsPhotoTourOpen(true);
  };

  const handleClosePhotoTour = () => {
    setIsPhotoTourOpen(false);
  };

  const handleOpenLightbox = (index: number) => {
    lightbox.openLightbox(index);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Header */}
      <Header />

      {/* Main Page Container */}
      <main className="flex-1 max-w-[1280px] w-full mx-auto px-6 xl:px-10">
        {/* Title and Top Action Bar */}
        <ListingTitle listing={LISTING_DATA} />

        {/* 5-Photo Hero Gallery */}
        <HeroGallery
          photos={LISTING_DATA.photos}
          onOpenPhotoTour={handleOpenPhotoTour}
          onOpenLightbox={handleOpenLightbox}
        />

        {/* Content Columns: Left (Details) + Right (Sticky Booking Widget) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mt-8">
          {/* Left Column */}
          <div className="lg:col-span-7 xl:col-span-8">
            <HostInfo listing={LISTING_DATA} />
            <ListingHighlights highlights={LISTING_DATA.highlights} />
            <ListingDescription description={LISTING_DATA.description} />
            <SleepingArrangements arrangements={LISTING_DATA.sleepingArrangements} />
            <AmenitiesSection amenities={LISTING_DATA.amenities} />
          </div>

          {/* Right Column: Sticky Booking Widget */}
          <div className="lg:col-span-5 xl:col-span-4 relative">
            <BookingCard
              pricing={LISTING_DATA.pricing}
              rating={LISTING_DATA.rating}
              reviewCount={LISTING_DATA.reviewCount}
            />
          </div>
        </div>

        {/* Full-width Sections */}
        <div className="mt-8">
          <ReviewsSection reviews={LISTING_DATA.reviews} />
          <LocationSection location={LISTING_DATA.location} />
          <HostProfileSection host={LISTING_DATA.host} />
        </div>
      </main>

      {/* Footer */}
      <Footer />

      {/* Photo Tour Fullscreen Experience */}
      <PhotoTour
        isOpen={isPhotoTourOpen}
        photos={LISTING_DATA.photos}
        onClose={handleClosePhotoTour}
        onSelectPhoto={(idx) => {
          lightbox.openLightbox(idx);
        }}
      />

      {/* Single-Photo Lightbox Experience */}
      <Lightbox
        isOpen={lightbox.isOpen}
        currentIndex={lightbox.currentIndex}
        photos={LISTING_DATA.photos}
        onClose={lightbox.closeLightbox}
        onNext={lightbox.nextImage}
        onPrev={lightbox.prevImage}
      />
    </div>
  );
}
