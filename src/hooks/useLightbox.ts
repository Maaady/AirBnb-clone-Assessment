"use client";

import { useState, useCallback, useEffect } from "react";

export interface UseLightboxReturn {
  isOpen: boolean;
  currentIndex: number;
  openLightbox: (index?: number) => void;
  closeLightbox: () => void;
  nextImage: () => void;
  prevImage: () => void;
  setIndex: (index: number) => void;
}

export function useLightbox(totalImages: number): UseLightboxReturn {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const openLightbox = useCallback((index: number = 0) => {
    setCurrentIndex(Math.max(0, Math.min(index, totalImages - 1)));
    setIsOpen(true);
  }, [totalImages]);

  const closeLightbox = useCallback(() => {
    setIsOpen(false);
  }, []);

  const nextImage = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % totalImages);
  }, [totalImages]);

  const prevImage = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + totalImages) % totalImages);
  }, [totalImages]);

  const setIndex = useCallback(
    (index: number) => {
      setCurrentIndex(Math.max(0, Math.min(index, totalImages - 1)));
    },
    [totalImages]
  );

  return {
    isOpen,
    currentIndex,
    openLightbox,
    closeLightbox,
    nextImage,
    prevImage,
    setIndex,
  };
}
