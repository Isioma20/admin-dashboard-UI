import { X } from "lucide-react";

const Modal = ({ open, onClose, children }) => {
  return (
    <div
      onClick={onClose}
      className={`fixed inset-0 flex justify-center items-center transition-colors ${
        open ? "visible bg-black/20 dark:bg-slate-950/20" : "invisible"
      }`}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`bg-slate-100 rounded-xl shadow p-6 transition-all dark:bg-blue-950 dark:text-blue-500 ${
          open ? "scale-100 opacity-100" : "scale-125 opacity-0"
        }`}
      >
        <button
          className="absolute top-2 right-2 rounded-lg cursor-pointer text-gray-400 bg-slate-100 hover:bg-slate-200  hover:text-gray-600 dark:text-blue-600 dark:bg-blue-950 dark:hover:bg-blue-900"
          onClick={onClose}
        >
          <X />
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
