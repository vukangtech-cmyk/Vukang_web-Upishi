/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Maximize2, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { Language } from '../types';
import { PORTFOLIO_ITEMS, DICTIONARY } from '../data';
import { motion, AnimatePresence } from 'motion/react';

interface PortfolioProps {
  lang: Language;
}

export default function Portfolio({ lang }: PortfolioProps) {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedItemIdx, setSelectedItemIdx] = useState<number | null>(null);
  const dict = DICTIONARY[lang];

  const categories = [
    { id: 'all', labelEn: 'All Gallery', labelSw: 'Picha Zote' },
    { id: 'Artistry', labelEn: 'Plating Artistry', labelSw: 'Uwasilishaji wa Chakula' },
    { id: 'Ambiance', labelEn: 'Our Ambiance', labelSw: 'Mazingira Yetu' },
    { id: 'Mixology', labelEn: 'Premium Mixology', labelSw: 'Uchanganyaji Vinywaji' },
    { id: 'Kitchen', labelEn: 'Kitchen Theater', labelSw: 'Jikoni Kwetu' }
  ];

  const filteredItems = PORTFOLIO_ITEMS.filter((item) => {
    if (activeCategory === 'all') return true;
    return item.categoryEn === activeCategory;
  });

  const openLightbox = (itemIndex: number) => {
    // Find index of this item in the filtered array
    setSelectedItemIdx(itemIndex);
  };

  const closeLightbox = () => {
    setSelectedItemIdx(null);
  };

  const nextSlide = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedItemIdx !== null) {
      setSelectedItemIdx((selectedItemIdx + 1) % filteredItems.length);
    }
  };

  const prevSlide = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedItemIdx !== null) {
      setSelectedItemIdx((selectedItemIdx - 1 + filteredItems.length) % filteredItems.length);
    }
  };

  return (
    <div id="portfolio-view" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
      
      {/* Header */}
      <div className="text-center space-y-4 max-w-3xl mx-auto" id="portfolio-header">
        <span className="text-amber-400 text-xs font-bold uppercase tracking-widest font-mono block">
          {lang === 'en' ? 'OUR VISUAL FEAST' : 'KARAMU YETU YA PICHA'}
        </span>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-white font-sans uppercase">
          {dict.portfolioTitle}
        </h2>
        <div className="h-1 w-20 bg-amber-500 mx-auto rounded" />
        <p className="text-stone-400">
          {dict.portfolioSubtitle}
        </p>
      </div>

      {/* Category Buttons */}
      <div className="flex flex-wrap justify-center gap-2" id="portfolio-categories">
        {categories.map((cat) => {
          const isActive = activeCategory === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => {
                setActiveCategory(cat.id);
                setSelectedItemIdx(null);
              }}
              id={`portfolio-cat-${cat.id}`}
              className={`px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-lg transition-all duration-300 ${
                isActive
                  ? 'bg-amber-500 text-stone-950 shadow-md shadow-amber-500/10'
                  : 'bg-stone-800/55 text-stone-400 hover:text-white hover:bg-stone-800'
              }`}
            >
              {lang === 'en' ? cat.labelEn : cat.labelSw}
            </button>
          );
        })}
      </div>

      {/* Masonry Grid */}
      <motion.div 
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        id="portfolio-grid"
      >
        <AnimatePresence mode="popLayout">
          {filteredItems.map((item, index) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              key={item.id}
              onClick={() => openLightbox(index)}
              id={`portfolio-card-${item.id}`}
              className="group relative h-80 rounded-2xl overflow-hidden border border-stone-800/70 shadow-lg cursor-pointer bg-stone-900"
            >
              <img 
                src={item.image} 
                alt={lang === 'en' ? item.titleEn : item.titleSw} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              
              {/* Blur Hover Overlay */}
              <div className="absolute inset-0 bg-stone-950/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 space-y-2 backdrop-blur-xs">
                <span className="text-[10px] font-mono text-amber-400 font-bold uppercase tracking-widest">
                  {lang === 'en' ? item.categoryEn : item.categorySw}
                </span>
                <h3 className="text-lg font-bold text-white uppercase font-sans">
                  {lang === 'en' ? item.titleEn : item.titleSw}
                </h3>
                <p className="text-stone-300 text-xs leading-relaxed line-clamp-2">
                  {lang === 'en' ? item.descriptionEn : item.descriptionSw}
                </p>
                <div className="pt-2 flex items-center space-x-1 text-[10px] text-amber-500 uppercase font-mono font-bold">
                  <Maximize2 className="h-3.5 w-3.5" />
                  <span>{lang === 'en' ? 'Expand View' : 'Kuza Picha'}</span>
                </div>
              </div>

              {/* Standard Static Overlay for mobile/no-hover */}
              <div className="absolute bottom-4 left-4 right-4 bg-stone-950/70 backdrop-blur border border-stone-800/40 p-3 rounded-xl block group-hover:hidden transition-all lg:opacity-90">
                <span className="text-[9px] font-mono text-amber-400 block uppercase font-bold tracking-wider">
                  {lang === 'en' ? item.categoryEn : item.categorySw}
                </span>
                <span className="text-xs font-bold text-white uppercase font-sans line-clamp-1">
                  {lang === 'en' ? item.titleEn : item.titleSw}
                </span>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedItemIdx !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
            className="fixed inset-0 z-50 bg-stone-950/95 flex flex-col items-center justify-center p-4 md:p-8"
            id="lightbox-modal"
          >
            {/* Close button */}
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 p-2 bg-stone-900 border border-stone-800 rounded-full text-stone-400 hover:text-white transition-colors duration-200"
              id="close-lightbox"
            >
              <X className="h-6 w-6" />
            </button>

            {/* Slider container */}
            <div className="relative max-w-4xl w-full flex flex-col items-center space-y-4" onClick={(e) => e.stopPropagation()}>
              
              {/* Prev button */}
              <button
                onClick={prevSlide}
                className="absolute left-2 md:-left-16 top-1/2 -translate-y-1/2 p-3 bg-stone-900/80 border border-stone-800 rounded-full text-stone-300 hover:text-white hover:bg-stone-800 transition-colors duration-200 z-10"
                id="lightbox-prev"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>

              {/* Central Box */}
              <div className="bg-stone-900 rounded-3xl overflow-hidden border border-stone-800 shadow-2xl max-h-[80vh] flex flex-col md:flex-row w-full">
                
                {/* Image Section */}
                <div className="md:w-3/5 h-64 md:h-[500px] relative bg-stone-950">
                  <img
                    src={filteredItems[selectedItemIdx].image}
                    alt={lang === 'en' ? filteredItems[selectedItemIdx].titleEn : filteredItems[selectedItemIdx].titleSw}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>

                {/* Info Section */}
                <div className="md:w-2/5 p-6 md:p-8 flex flex-col justify-between space-y-6">
                  <div className="space-y-4">
                    <span className="px-2.5 py-1 bg-amber-500/10 border border-amber-500/30 text-amber-400 text-[10px] font-bold uppercase tracking-widest rounded font-mono">
                      {lang === 'en' ? filteredItems[selectedItemIdx].categoryEn : filteredItems[selectedItemIdx].categorySw}
                    </span>
                    <h3 className="text-xl md:text-2xl font-extrabold text-white uppercase font-sans">
                      {lang === 'en' ? filteredItems[selectedItemIdx].titleEn : filteredItems[selectedItemIdx].titleSw}
                    </h3>
                    <p className="text-stone-300 text-sm leading-relaxed font-sans">
                      {lang === 'en' ? filteredItems[selectedItemIdx].descriptionEn : filteredItems[selectedItemIdx].descriptionSw}
                    </p>
                  </div>

                  <div className="pt-6 border-t border-stone-800/80 flex items-center justify-between text-xs font-mono text-stone-500">
                    <span>
                      {lang === 'en' ? 'Shot on site' : 'Picha ya kiasili'}
                    </span>
                    <span>
                      {selectedItemIdx + 1} / {filteredItems.length}
                    </span>
                  </div>
                </div>

              </div>

              {/* Next button */}
              <button
                onClick={nextSlide}
                className="absolute right-2 md:-right-16 top-1/2 -translate-y-1/2 p-3 bg-stone-900/80 border border-stone-800 rounded-full text-stone-300 hover:text-white hover:bg-stone-800 transition-colors duration-200 z-10"
                id="lightbox-next"
              >
                <ChevronRight className="h-6 w-6" />
              </button>

            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
