import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";

export default function Modal({ open, onClose, title, children }) {
  return (
    <Dialog open={open} onClose={onClose} className="relative z-[9999]">
      <DialogBackdrop className="fixed inset-0 bg-[#2a2823]/40 backdrop-blur-md transition-opacity duration-300" />

      <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
        <DialogPanel className="w-full max-w-sm rounded-[2.2rem] border border-[var(--card-border)] bg-[var(--card)] p-6 shadow-2xl animate-modal-content flex flex-col gap-4 text-[var(--ink-900)]">
          <div className="flex items-center justify-between pb-3 border-b border-[#f2e5d6]">
            <DialogTitle className="font-title text-2xl font-black">
              {title}
            </DialogTitle>
            <button
              type="button"
              onClick={onClose}
              className="rounded-full p-1.5 text-[var(--ink-500)] hover:bg-[#ffece0] hover:text-[var(--amber-500)] transition duration-200"
              aria-label="Close modal"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div>{children}</div>
        </DialogPanel>
      </div>
    </Dialog>
  );
}
