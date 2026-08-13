"use client";

import { useState, useCallback, useEffect, useRef } from "react";

export function useShare(duration: number = 2200) {
  const [showShareToast, setShowShareToast] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const handleShare = useCallback(() => {
    if (typeof window !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href).catch(() => {});
    }
    setShowShareToast(true);

    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      setShowShareToast(false);
    }, duration);
  }, [duration]);

  useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  return { showShareToast, handleShare };
}
