import { useEffect, useRef } from "react";

export default function Modal({ open, onClose, title, children }) {
  const dialogRef = useRef(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (open) {
      if (!dialog.open) dialog.showModal();
    } else {
      if (dialog.open) dialog.close();
    }
  }, [open]);

  return (
    <dialog
      ref={dialogRef}
      onClose={onClose}
      className="m-auto rounded-[2.2rem] border border-[var(--card-border)] bg-[var(--card)] p-6 shadow-2xl backdrop:backdrop-blur-md backdrop:bg-[#2a2823]/40 focus:outline-none max-w-sm w-full animate-modal-content open:flex open:flex-col gap-4 text-[var(--ink-900)]"
      onClick={(e) => e.target === dialogRef.current && onClose()}
    >
      <div className="flex items-center justify-between pb-3 border-b border-[#f2e5d6]">
        <h3 className="font-title text-2xl font-black">{title}</h3>
        <button
          type="button"
          onClick={onClose}
          className="rounded-full p-1.5 text-[var(--ink-500)] hover:bg-[#ffece0] hover:text-[var(--amber-500)] transition duration-200"
          aria-label="Close"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      {children}
    </dialog>
  );
}
