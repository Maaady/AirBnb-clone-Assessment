"use client";

import React, { useEffect, useRef } from "react";
import { X } from "lucide-react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
  maxWidth?: string;
}

export const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  children,
  maxWidth = "max-w-2xl",
}) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const closeBtnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    document.body.classList.add("modal-open");
    closeBtnRef.current?.focus();

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
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
      aria-labelledby="modal-header-title"
      onClick={onClose}
      className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-150"
    >
      <div
        ref={modalRef}
        onClick={(e) => e.stopPropagation()}
        className={`bg-white rounded-3xl ${maxWidth} w-full max-h-[85vh] flex flex-col shadow-2xl animate-in zoom-in-95 duration-150 relative`}
      >
        {/* Modal Header */}
        <div className="p-6 border-b border-airbnb-gray-100 flex items-center justify-between sticky top-0 bg-white rounded-t-3xl z-10">
          <button
            ref={closeBtnRef}
            type="button"
            onClick={onClose}
            aria-label="Close modal"
            className="p-2 -ml-2 rounded-full hover:bg-airbnb-gray-50 text-airbnb-black transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-black"
          >
            <X className="w-5 h-5" />
          </button>
          <h2 id="modal-header-title" className="font-semibold text-lg text-airbnb-black">
            {title}
          </h2>
          <div className="w-8" aria-hidden="true" />
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto">{children}</div>
      </div>
    </div>
  );
};
