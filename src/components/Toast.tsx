import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';

interface ToastProps {
  message: string | null;
  onClose?: () => void;
}

export const Toast: React.FC<ToastProps> = ({ message }) => {
  return (
    <AnimatePresence>
      {message && (
        <motion.div
          id="toast-notification"
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.95 }}
          transition={{ duration: 0.2 }}
          className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-2.5 px-4 py-2.5 bg-slate-950 text-white rounded-full border border-emerald-400/80 shadow-[0_10px_25px_-5px_rgba(0,0,0,0.3),0_0_15px_rgba(0,229,106,0.3)]"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
          <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
          <span className="text-xs font-mono font-medium tracking-tight text-emerald-50">
            {message}
          </span>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
