import React, { useState } from 'react';
import { galleryItems } from '../data/schoolData';
import LightboxModal from '../components/LightboxModal';
import { motion } from 'motion/react';
import { Maximize2, Tag } from 'lucide-react';

export default function GallerySection({ setActivePage }) {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedImage, setSelectedImage] = useState(null);

  const categories = ['All', 'Campus', 'Classrooms', 'Sports', 'Events', 'Cultural'];

  const filteredItems = activeCategory === 'All'
    ? galleryItems
    : galleryItems.filter((item) => item.category === activeCategory);

  return (
    <section className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-10">
          <span className="text-xs font-bold uppercase tracking-widest text-[#04439c] px-3.5 py-1 bg-blue-100/70 rounded-full">
            CAMPUS PHOTO GALLERY
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-900">
            Life at Shri Dattabal Vidyamandir
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            Moments capturing our 19 classrooms, 1,373-book library, sports playground, assemblies, and cultural events in Kolhapur.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex justify-center mb-10 overflow-x-auto pb-2">
          <div className="inline-flex p-1.5 rounded-full bg-white border border-slate-200 gap-1.5 shadow-sm">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full font-bold text-xs transition-all cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-[#04439c] text-white shadow'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, idx) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4 }}
              onClick={() => setSelectedImage(item)}
              className="group relative rounded-2xl overflow-hidden shadow-md border border-slate-200 bg-slate-900 h-72 cursor-pointer"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-90 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-60 group-hover:opacity-90 transition-opacity" />

              <div className="absolute top-4 right-4 p-2 rounded-full bg-black/50 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                <Maximize2 className="w-4 h-4" />
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-5 text-white space-y-1 transform translate-y-2 group-hover:translate-y-0 transition-transform">
                <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-blue-900/80 text-blue-200">
                  {item.category}
                </span>
                <h3 className="font-serif font-bold text-base sm:text-lg text-white group-hover:text-amber-300">
                  {item.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <LightboxModal item={selectedImage} onClose={() => setSelectedImage(null)} />
      )}
    </section>
  );
}
