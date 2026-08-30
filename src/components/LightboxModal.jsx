import React from 'react';
import { X, Tag } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function LightboxModal({ item, onClose }) {
  if (!item) return null;

  return (
    <AnimatePresence>
      <div
        onClick={onClose}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md cursor-pointer"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          onClick={(e) => e.stopPropagation()}
          className="relative max-w-4xl w-full bg-slate-900 rounded-2xl overflow-hidden shadow-2xl border border-slate-800 cursor-default"
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/60 hover:bg-black text-white transition-colors cursor-pointer"
            aria-label="Close preview"
          >
            <X className="w-6 h-6" />
          </button>

          <div className="relative aspect-video max-h-[70vh] w-full bg-black flex items-center justify-center">
            <img
              src={item.image}
              alt={item.title}
              className="object-contain w-full h-full max-h-[70vh]"
            />
          </div>

          <div className="p-6 bg-slate-900 text-white flex items-center justify-between">
            <div>
              <span className="inline-flex items-center gap-1 text-xs font-semibold px-2.5 py-0.5 rounded bg-blue-900/60 text-blue-300 mb-1">
                <Tag className="w-3 h-3" /> {item.category}
              </span>
              <h3 className="font-serif font-bold text-xl">{item.title}</h3>
            </div>
            <p className="text-xs text-slate-400">SHRI DATTABAL VIDYAMANDIR, KOLHAPUR (Est. 1989)</p>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
