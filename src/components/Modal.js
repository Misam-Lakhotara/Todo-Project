import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

export function Modal({ open, onClose, children, size = "md" }) {
  const modalRef = useRef(null);

  // Close modal on escape key press
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape" && open) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [open, onClose]);

  // Lock scroll when modal is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  if (!open) return null;

  // Sizes mapping
  const sizeClasses = {
    sm: "max-w-sm",
    md: "max-w-md",
    lg: "max-w-lg",
    xl: "max-w-xl",
  };

  return createPortal(
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4 animate-modal-backdrop bg-[#2a2823]/40 backdrop-blur-md"
      onClick={onClose}
    >
      <div
        ref={modalRef}
        className={`relative w-full ${sizeClasses[size] || "max-w-md"} transform overflow-hidden rounded-[2.2rem] border border-[var(--card-border)] bg-[var(--card)] p-6 shadow-2xl animate-modal-content`}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>,
    document.body
  );
}

Modal.Header = function ModalHeader({ children, onClose }) {
  return (
    <div className="flex items-center justify-between pb-3 mb-4">
      {children}
      {onClose && (
        <button
          onClick={onClose}
          className="rounded-full p-1.5 text-[var(--ink-500)] hover:bg-[#ffece0] hover:text-[var(--amber-500)] transition duration-200"
          aria-label="Close"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      )}
    </div>
  );
};

Modal.Title = function ModalTitle({ children, className = "" }) {
  return (
    <h3 className={`font-title text-2xl font-black text-[var(--ink-900)] ${className}`}>
      {children}
    </h3>
  );
};

Modal.Body = function ModalBody({ children }) {
  return <div className="text-[var(--ink-700)] text-sm leading-relaxed">{children}</div>;
};

export default Modal;
