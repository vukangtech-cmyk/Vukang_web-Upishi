/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ChefHat, Award, Heart, UtensilsCrossed } from 'lucide-react';
import { Language } from '../types';
import { DICTIONARY } from '../data';
import { motion } from 'motion/react';

interface AboutProps {
  lang: Language;
}

export default function About({ lang }: AboutProps) {
  const dict = DICTIONARY[lang];

  const pillars = [
    {
      id: 1,
      icon: Award,
      titleEn: 'Heritage Spices',
      titleSw: 'Viungo vya Urithi',
      descEn: 'We craft recipes using stone-ground cloves, cardamom, and cinnamon sourced directly from Zanzibari growers.',
      descSw: 'Tunatengeneza vyakula vyetu kwa kutumia karafuu ya kusagwa kwa mawe, hiliki, na mdalasini kutoka Zanzibar.'
    },
    {
      id: 2,
      icon: Heart,
      titleEn: '100% Organic Sourcing',
      titleSw: 'Mazao Halisi ya Asili',
      descEn: 'We source fresh organic meats and produce from Tanzanian family farming cooperatives, ensuring sustainable community growth.',
      descSw: 'Tunapata mboga na nyama mbichi asilia kutoka kwa vyama vya ushirika vya wakulima wa Tanzania kwa maendeleo endelevu.'
    },
    {
      id: 3,
      icon: UtensilsCrossed,
      titleEn: 'Ceremonial Simmering',
      titleSw: 'Upishi wa Kisherehe',
      descEn: 'We respect tradition by maintaining slow clay-pot cooking and charcoal roasting for deep coastal flavors.',
      descSw: 'Tunaheshimu mila kwa kutumia vyungu vya udongo vinavyotokota polepole na uchomaji wa mkaa kupata ladha nzito ya pwani.'
    }
  ];

  return (
    <div id="about-view" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-24">
      
      {/* Introduction Grid */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center" id="about-intro">
        
        {/* Left Side: Images */}
        <div className="lg:col-span-5 space-y-4" id="about-images-grid">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-stone-800" id="main-about-img">
            <img 
              src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=600&q=80" 
              alt="Executive Chef Mariam" 
              className="w-full h-[400px] object-cover filter brightness-95"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6" id="chef-badge-overlay">
              <span className="px-3 py-1 bg-amber-500 text-stone-950 text-[10px] font-black uppercase tracking-widest rounded-md">
                {lang === 'en' ? 'Founder & Executive Chef' : 'Mwanzilishi & Mpishi Mkuu'}
              </span>
              <p className="text-white font-bold text-lg mt-1 font-sans">Chef Mariam Said</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4" id="sub-about-images">
            <div className="rounded-xl overflow-hidden border border-stone-800 h-28">
              <img 
                src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=400&q=80" 
                alt="Plating detail" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="rounded-xl overflow-hidden border border-stone-800 h-28 bg-stone-900 flex flex-col justify-center items-center p-4 text-center">
              <span className="text-amber-400 text-2xl font-black font-mono">12+</span>
              <span className="text-stone-400 text-[10px] font-bold uppercase tracking-widest mt-1">
                {lang === 'en' ? 'Years of Honor' : 'Miaka ya Heshima'}
              </span>
            </div>
          </div>
        </div>

        {/* Right Side: Narrative */}
        <div className="lg:col-span-7 space-y-6" id="about-text-content">
          <div className="space-y-3">
            <span className="text-amber-400 text-xs font-bold uppercase tracking-widest font-mono block">
              {lang === 'en' ? 'OUR LEGACY' : 'URITHI WETU'}
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-white font-sans uppercase">
              {dict.aboutTitle}
            </h2>
            <div className="h-1 w-16 bg-amber-500 rounded" />
          </div>

          <h3 className="text-lg md:text-xl font-medium text-amber-300 leading-relaxed font-sans">
            {dict.aboutSubtitle}
          </h3>

          <div className="text-stone-300 space-y-4 leading-relaxed font-sans text-sm md:text-base">
            <p>{dict.aboutPara1}</p>
            <p>{dict.aboutPara2}</p>
          </div>

          {/* Chef Signature Quote block */}
          <div className="p-5 bg-stone-900 border-l-4 border-amber-500 rounded-r-xl space-y-2" id="chef-quote">
            <p className="italic text-stone-300 text-sm">
              {lang === 'en' 
                ? `"Food is the only universal language that brings families and nations together. In East Africa, every meal is an expression of deep respect and sharing. We bring that sacred fire to your plate."`
                : `"Chakula ni lugha pekee ya ulimwengu inayounganisha familia na mataifa. Afrika Mashariki, kila mlo ni ishara ya heshima kubwa na ushirika. Tunaleta moto huo mtakatifu kwenye sahani yako."`}
            </p>
            <div className="flex items-center space-x-2 pt-2">
              <ChefHat className="h-4 w-4 text-amber-500" />
              <span className="text-xs font-bold text-amber-400 uppercase font-mono">{dict.chefLabel}</span>
            </div>
          </div>
        </div>

      </section>

      {/* 3 Pillars of Culinary Philosophy */}
      <section className="space-y-12" id="about-pillars">
        <div className="text-center space-y-3" id="pillars-title">
          <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight text-white uppercase">
            {lang === 'en' ? 'Our Core Foundations' : 'Misingi Yetu ya Kazi'}
          </h3>
          <p className="text-stone-400 max-w-xl mx-auto text-sm">
            {lang === 'en' 
              ? 'Every single chef preparation is governed by three strict codes of culinary honor.'
              : 'Kila maandalizi ya mpishi wetu yanaongozwa na misingi mitatu madhubuti ya heshima ya upishi.'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8" id="pillars-grid">
          {pillars.map((pil) => {
            const IconComponent = pil.icon;
            return (
              <div 
                key={pil.id} 
                id={`pillar-card-${pil.id}`}
                className="p-8 bg-stone-900 border border-stone-800/80 rounded-2xl space-y-4 hover:border-amber-500/20 hover:bg-stone-900/80 transition-all duration-300"
              >
                <div className="p-3 bg-amber-500/10 border border-amber-500/20 rounded-xl inline-block">
                  <IconComponent className="h-6 w-6 text-amber-500" />
                </div>
                <h4 className="text-lg font-bold text-white uppercase font-sans">
                  {lang === 'en' ? pil.titleEn : pil.titleSw}
                </h4>
                <p className="text-stone-400 text-sm leading-relaxed">
                  {lang === 'en' ? pil.descEn : pil.descSw}
                </p>
              </div>
            );
          })}
        </div>
      </section>

    </div>
  );
}
