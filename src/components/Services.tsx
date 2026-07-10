/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Utensils, ChefHat, Briefcase, GraduationCap, ArrowUpRight } from 'lucide-react';
import { Language } from '../types';
import { SERVICES, DICTIONARY } from '../data';
import { motion } from 'motion/react';

interface ServicesProps {
  lang: Language;
  setTab: (tab: string) => void;
}

export default function Services({ lang, setTab }: ServicesProps) {
  const dict = DICTIONARY[lang];

  // Helper to render lucide icon dynamically based on service model string
  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case 'Utensils':
        return <Utensils className="h-6 w-6 text-amber-400" />;
      case 'ChefHat':
        return <ChefHat className="h-6 w-6 text-amber-400" />;
      case 'Briefcase':
        return <Briefcase className="h-6 w-6 text-amber-400" />;
      case 'GraduationCap':
        return <GraduationCap className="h-6 w-6 text-amber-400" />;
      default:
        return <Utensils className="h-6 w-6 text-amber-400" />;
    }
  };

  return (
    <div id="services-view" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20">
      
      {/* Title block */}
      <div className="text-center space-y-4 max-w-3xl mx-auto" id="services-header">
        <span className="text-amber-400 text-xs font-bold uppercase tracking-widest font-mono block">
          {lang === 'en' ? 'BEYOND THE TABLE' : 'ZAIDI YA CHAKULA'}
        </span>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-white font-sans uppercase">
          {dict.servicesTitle}
        </h2>
        <div className="h-1 w-20 bg-amber-500 mx-auto rounded" />
        <p className="text-stone-400">
          {dict.servicesSubtitle}
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12" id="services-grid">
        {SERVICES.map((srv, index) => (
          <div 
            key={srv.id}
            id={`service-card-${srv.id}`}
            className="bg-stone-900 border border-stone-800 rounded-3xl overflow-hidden shadow-2xl flex flex-col hover:border-amber-500/20 group transition-all duration-300"
          >
            {/* Image section with relative icon badge */}
            <div className="relative h-64 overflow-hidden" id={`service-img-wrap-${srv.id}`}>
              <img 
                src={srv.image} 
                alt={lang === 'en' ? srv.titleEn : srv.titleSw} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-90"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/20 to-transparent" />
              
              {/* Icon badge floating */}
              <div className="absolute bottom-6 left-6 p-3.5 bg-stone-950/90 border border-amber-500/20 backdrop-blur rounded-2xl" id={`service-icon-badge-${srv.id}`}>
                {renderIcon(srv.icon)}
              </div>
            </div>

            {/* Content block */}
            <div className="p-8 flex-1 flex flex-col justify-between space-y-6" id={`service-content-${srv.id}`}>
              <div className="space-y-3">
                <h3 className="text-xl font-bold text-white group-hover:text-amber-400 transition-colors duration-200 uppercase font-sans">
                  {lang === 'en' ? srv.titleEn : srv.titleSw}
                </h3>
                <p className="text-stone-400 text-sm leading-relaxed">
                  {lang === 'en' ? srv.descriptionEn : srv.descriptionSw}
                </p>
              </div>

              <div className="pt-6 border-t border-stone-800/60 flex items-center justify-between" id={`service-footer-${srv.id}`}>
                <span className="text-xs font-mono text-stone-500 uppercase tracking-widest">
                  {lang === 'en' ? 'Bespoke / Custom' : 'Maalum / Kulingana na Hitaji'}
                </span>
                
                <button
                  onClick={() => setTab('contact')}
                  id={`service-inquiry-btn-${srv.id}`}
                  className="flex items-center space-x-1.5 px-4 py-2 text-xs font-bold text-amber-400 hover:text-stone-950 hover:bg-amber-400 border border-amber-500/30 rounded-xl transition-all duration-300 uppercase tracking-wider"
                >
                  <span>{lang === 'en' ? 'Inquire' : 'Ulizia Sasa'}</span>
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </button>
              </div>
            </div>

          </div>
        ))}
      </div>

      {/* Trust Quote / Stats bar */}
      <section className="p-8 bg-stone-900 border border-stone-800 rounded-3xl grid grid-cols-1 md:grid-cols-3 gap-6 text-center divide-y md:divide-y-0 md:divide-x divide-stone-800" id="services-stats-bar">
        <div className="py-4 space-y-1">
          <span className="block text-3xl font-black text-amber-400 font-mono">150+</span>
          <span className="block text-xs font-bold text-stone-400 uppercase tracking-widest font-mono">
            {lang === 'en' ? 'Weddings Hosted' : 'Harusi Zilizofanyika'}
          </span>
        </div>
        <div className="py-4 md:py-0 md:px-6 space-y-1">
          <span className="block text-3xl font-black text-amber-400 font-mono">5,000+</span>
          <span className="block text-xs font-bold text-stone-400 uppercase tracking-widest font-mono">
            {lang === 'en' ? 'Gourmet Plates Served' : 'Sahani za Chakula Safi'}
          </span>
        </div>
        <div className="py-4 md:py-0 md:pl-6 space-y-1">
          <span className="block text-3xl font-black text-amber-400 font-mono">100%</span>
          <span className="block text-xs font-bold text-stone-400 uppercase tracking-widest font-mono">
            {lang === 'en' ? 'Spiritual Satisfaction' : 'Milo ya Kiroho'}
          </span>
        </div>
      </section>

    </div>
  );
}
