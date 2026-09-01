"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

export default function Modal({
  isOpen,
  onClose,
  children,
}: {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
      return () => {
        document.removeEventListener("keydown", handleEscape);
        document.body.style.overflow = "";
      };
    }
  }, [isOpen, onClose]);

  if (!isOpen || !mounted) return null;

  return createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div
        className="absolute inset-0 bg-[rgba(15,15,15,0.7)]"
        onClick={onClose}
      />
      <div className="relative bg-[rgba(15,15,15,1)] rounded-2xl p-6 max-w-md border border-[rgba(255,255,255,0.14)]">
        <button
          type="button"
          onClick={onClose}
          aria-label="Close dialog"
          className="absolute top-2 right-2 text-white"
        >
          ✕
        </button>
        {children}
      </div>
    </div>,
    document.body,
  );
}
