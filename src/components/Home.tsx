/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { ChefHat, Flame, ArrowRight, Award } from 'lucide-react';
import { Language } from '../types';
import { MENU_ITEMS, DICTIONARY } from '../data';
import { motion, AnimatePresence } from 'motion/react';

interface HomeProps {
  lang: Language;
  setTab: (tab: string) => void;
}

type MenuCategory = 'all' | 'starter' | 'main' | 'dessert' | 'beverage';

export default function Home({ lang, setTab }: HomeProps) {
  const [selectedCategory, setSelectedCategory] = useState<MenuCategory>('all');
  const dict = DICTIONARY[lang];

  const categories: { id: MenuCategory; labelEn: string; labelSw: string }[] = [
    { id: 'all', labelEn: 'All Dishes', labelSw: 'Milo Yote' },
    { id: 'starter', labelEn: 'Starters', labelSw: 'Viburudisho' },
    { id: 'main', labelEn: 'Main Courses', labelSw: 'Milo Mikuu' },
    { id: 'dessert', labelEn: 'Desserts', labelSw: 'Vitindamlo' },
    { id: 'beverage', labelEn: 'Beverages', labelSw: 'Vinywaji' },
  ];

  const filteredMenuItems = MENU_ITEMS.filter((item) => {
    if (selectedCategory === 'all') return true;
    return item.category === selectedCategory;
  });

  return (
    <div id="home-view" className="space-y-24 pb-20">
      
      {/* 1. HERO SECTION */}
      <section 
        className="relative h-[85vh] flex items-center justify-center overflow-hidden" 
        id="hero-section"
      >
        {/* Background Image overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1600&q=80" 
            alt="Ladha & Sherehe Ambiance" 
            className="w-full h-full object-cover scale-105 brightness-[0.25] transition-all duration-1000"
            referrerPolicy="no-referrer"
            id="hero-bg-img"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-stone-950/80 via-transparent to-stone-950/80" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center space-y-8" id="hero-content">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center space-x-2 px-3 py-1 bg-amber-500/10 border border-amber-500/30 rounded-full text-xs font-semibold text-amber-400 uppercase tracking-widest font-mono"
            id="hero-badge"
          >
            <Award className="h-3.5 w-3.5 text-amber-500" />
            <span>{lang === 'en' ? 'Award Winning Culinary Sanctuary' : 'Kituo cha Upishi Kilichotuzwa Tuzo'}</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.1]"
            id="hero-title"
          >
            {dict.heroTitle}
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-stone-300 max-w-3xl mx-auto font-sans leading-relaxed"
            id="hero-subtitle"
          >
            {dict.heroSubtitle}
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-4"
            id="hero-ctas"
          >
            <button
              onClick={() => setTab('contact')}
              id="hero-book-btn"
              className="w-full sm:w-auto px-8 py-4 font-bold tracking-wider text-sm uppercase rounded-xl text-stone-900 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-500 hover:to-amber-600 transition-all duration-300 transform hover:-translate-y-0.5 shadow-lg shadow-amber-500/20 active:translate-y-0"
            >
              {dict.bookTable}
            </button>
            
            <a
              href="#menu-explorer"
              id="hero-menu-btn"
              className="w-full sm:w-auto flex items-center justify-center space-x-2 px-8 py-4 font-bold tracking-wider text-sm uppercase rounded-xl border border-stone-600 text-white hover:bg-stone-800/40 hover:border-amber-400 transition-all duration-300"
            >
              <span>{dict.exploreMenu}</span>
              <ArrowRight className="h-4 w-4 text-amber-500" />
            </a>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 hidden md:block" id="scroll-indicator">
          <div className="w-6 h-10 border-2 border-stone-500 rounded-full flex justify-center p-1.5">
            <div className="w-1.5 h-1.5 bg-amber-400 rounded-full animate-bounce" />
          </div>
        </div>
      </section>

      {/* 2. DYNAMIC MENU EXPLORER */}
      <section 
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-24" 
        id="menu-explorer"
      >
        <div className="text-center space-y-4 mb-12" id="menu-header">
          <div className="flex justify-center">
            <ChefHat className="h-8 w-8 text-amber-500" />
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white font-sans uppercase">
            {lang === 'en' ? 'Symphony of Flavors' : 'Karamu ya Ladha na Manukato'}
          </h2>
          <div className="h-1 w-20 bg-amber-500 mx-auto rounded" />
          <p className="text-stone-400 max-w-2xl mx-auto">
            {lang === 'en' 
              ? 'Browse our masterfully crafted menus featuring local farm-fresh cuts, coastal catch of the day, and authentic stone-ground spices.'
              : 'Gundua mchanganyiko wetu wa vyakula safi vya mashambani, vyakula vibichi vya baharini na viungo asilia vya kunukia.'}
          </p>
        </div>

        {/* Categories Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10" id="category-tabs-container">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                id={`cat-tab-${cat.id}`}
                className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                  isActive
                    ? 'bg-amber-500 text-stone-950 shadow-md shadow-amber-500/10'
                    : 'bg-stone-800/60 text-stone-400 border border-stone-700/50 hover:text-white hover:border-stone-600'
                }`}
              >
                {lang === 'en' ? cat.labelEn : cat.labelSw}
              </button>
            );
          })}
        </div>

        {/* Menu Cards Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          id="menu-grid"
        >
          <AnimatePresence mode="popLayout">
            {filteredMenuItems.map((item) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                key={item.id}
                id={`menu-card-${item.id}`}
                className="bg-stone-900 border border-stone-800 rounded-2xl overflow-hidden shadow-xl hover:border-amber-500/30 group transition-all duration-300"
              >
                {/* Food Image Container */}
                <div className="relative h-64 overflow-hidden" id={`card-img-container-${item.id}`}>
                  <img
                    src={item.image}
                    alt={lang === 'en' ? item.nameEn : item.nameSw}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 brightness-[0.9]"
                    referrerPolicy="no-referrer"
                    id={`menu-img-${item.id}`}
                  />
                  
                  {/* Category Label Overlay */}
                  <span 
                    id={`menu-cat-overlay-${item.id}`}
                    className="absolute top-4 left-4 px-2.5 py-1 bg-stone-900/90 text-[10px] font-bold tracking-widest uppercase text-amber-400 rounded-md border border-amber-500/30 font-mono"
                  >
                    {lang === 'en' ? item.category : (
                      item.category === 'starter' ? 'kiburudisho' :
                      item.category === 'main' ? 'mlo mkuu' :
                      item.category === 'dessert' ? 'kitindamlo' : 'kinywaji'
                    )}
                  </span>

                  {/* Chef Special Overlay */}
                  {item.isChefSpecial && (
                    <span 
                      id={`menu-chef-overlay-${item.id}`}
                      className="absolute top-4 right-4 flex items-center space-x-1.5 px-2.5 py-1 bg-amber-500 text-stone-950 text-[10px] font-extrabold tracking-widest uppercase rounded-md shadow-md"
                    >
                      <Flame className="h-3 w-3 fill-stone-950 text-stone-950 animate-pulse" />
                      <span>{dict.chefSpecial}</span>
                    </span>
                  )}
                </div>

                {/* Content Block */}
                <div className="p-6 space-y-4" id={`card-content-${item.id}`}>
                  <div className="flex justify-between items-start gap-4">
                    <h3 className="text-lg font-bold text-white group-hover:text-amber-400 transition-colors duration-200">
                      {lang === 'en' ? item.nameEn : item.nameSw}
                    </h3>
                    <span className="text-lg font-black text-amber-400 font-mono shrink-0">
                      ${item.priceUsd.toFixed(2)}
                    </span>
                  </div>

                  <p className="text-stone-400 text-sm leading-relaxed min-h-[48px]">
                    {lang === 'en' ? item.descriptionEn : item.descriptionSw}
                  </p>

                  <div className="pt-4 border-t border-stone-800/60 flex items-center justify-between text-xs font-mono" id={`card-footer-${item.id}`}>
                    <span className="text-stone-500">
                      {lang === 'en' ? 'Freshly Prepared' : 'Imetayarishwa Mbichi'}
                    </span>
                    <button 
                      onClick={() => setTab('contact')}
                      className="text-amber-400 group-hover:underline flex items-center space-x-1 transition-all"
                    >
                      <span>{lang === 'en' ? 'Reserve' : 'Agiza Sasa'}</span>
                      <ArrowRight className="h-3 w-3" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* 3. PROMO SUB-BANNER */}
      <section className="bg-stone-900 border-y border-amber-500/10 py-16" id="home-promo-banner">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-center">
            
            <div className="lg:col-span-2 space-y-4 text-center lg:text-left">
              <h3 className="text-2xl md:text-3xl font-extrabold text-white">
                {lang === 'en' 
                  ? 'Planning an intimate wedding or grand private gala?' 
                  : 'Je, unapanga harusi ya faragha au karamu kubwa ya kifahari?'}
              </h3>
              <p className="text-stone-400 text-sm md:text-base max-w-2xl">
                {lang === 'en'
                  ? 'Our catering packages and grand culinary lounges are fully customisable. Speak to our events manager to sketch a bespoke package.'
                  : 'Vifurushi vyetu vya upishi wa kumbi na milo vinabadilika kulingana na mahitaji yako. Ongea na mratibu wetu sasa.'}
              </p>
            </div>

            <div className="flex justify-center lg:justify-end shrink-0">
              <button
                onClick={() => setTab('contact')}
                id="promo-cta-btn"
                className="px-8 py-4 bg-stone-800 hover:bg-stone-700 text-amber-400 border border-amber-500/30 rounded-xl font-bold text-sm tracking-wider uppercase transition-all duration-300 shadow-md active:scale-95 hover:shadow-amber-500/5"
              >
                {lang === 'en' ? 'Inquire Today' : 'Wasiliana Nasi Sasa'}
              </button>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
