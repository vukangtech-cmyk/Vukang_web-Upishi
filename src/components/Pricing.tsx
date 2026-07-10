/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Check, Flame, HelpCircle } from 'lucide-react';
import { Language } from '../types';
import { PRICING_PACKAGES, DICTIONARY } from '../data';
import { motion } from 'motion/react';

interface PricingProps {
  lang: Language;
  setTab: (tab: string) => void;
}

export default function Pricing({ lang, setTab }: PricingProps) {
  const dict = DICTIONARY[lang];

  return (
    <div id="pricing-view" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20">
      
      {/* Header Block */}
      <div className="text-center space-y-4 max-w-3xl mx-auto" id="pricing-header">
        <span className="text-amber-400 text-xs font-bold uppercase tracking-widest font-mono block">
          {lang === 'en' ? 'OUR TRANSPARENT RATES' : 'BEI ZETU WAZI'}
        </span>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-white font-sans uppercase">
          {dict.pricingTitle}
        </h2>
        <div className="h-1 w-20 bg-amber-500 mx-auto rounded" />
        <p className="text-stone-400">
          {dict.pricingSubtitle}
        </p>
      </div>

      {/* Pricing Cards Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10 items-stretch" id="pricing-grid">
        {PRICING_PACKAGES.map((pkg) => {
          const features = lang === 'en' ? pkg.featuresEn : pkg.featuresSw;
          
          return (
            <div
              key={pkg.id}
              id={`pricing-card-${pkg.id}`}
              className={`relative rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 ${
                pkg.isPopular
                  ? 'bg-gradient-to-b from-stone-900 to-stone-950 border-2 border-amber-500 shadow-amber-500/10 shadow-2xl scale-105 z-10'
                  : 'bg-stone-900/60 border border-stone-800 hover:border-stone-700 hover:bg-stone-900'
              }`}
            >
              {/* Popular Badge overlay */}
              {pkg.isPopular && (
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 bg-gradient-to-r from-amber-400 to-amber-500 text-stone-950 text-xs font-black uppercase tracking-widest rounded-full shadow-lg flex items-center space-x-1">
                  <Flame className="h-3 w-3 fill-stone-950" />
                  <span>{dict.popular}</span>
                </span>
              )}

              {/* Title, description, price */}
              <div className="space-y-6" id={`pricing-top-${pkg.id}`}>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-white uppercase tracking-tight">
                    {lang === 'en' ? pkg.nameEn : pkg.nameSw}
                  </h3>
                  <p className="text-stone-400 text-xs leading-relaxed">
                    {lang === 'en' ? pkg.descriptionEn : pkg.descriptionSw}
                  </p>
                </div>

                {/* Price tag block */}
                <div className="py-4 border-y border-stone-800/80 space-y-1" id={`price-block-${pkg.id}`}>
                  <div className="flex items-baseline space-x-2">
                    <span className="text-3xl md:text-4xl font-black text-amber-400 font-mono">
                      {lang === 'en' ? pkg.priceEn : pkg.priceSw}
                    </span>
                    <span className="text-xs text-stone-400 uppercase font-mono tracking-widest">
                      / {lang === 'en' ? pkg.periodEn : pkg.periodSw}
                    </span>
                  </div>
                  {/* Secondary currency tooltip/indicator */}
                  <span className="block text-[10px] text-stone-500 font-mono uppercase">
                    {lang === 'en' ? `Approx. ${pkg.priceSw}` : `Takriban. ${pkg.priceEn}`}
                  </span>
                </div>

                {/* Inclusions checklist */}
                <ul className="space-y-3 pt-2" id={`pricing-features-${pkg.id}`}>
                  {features.map((feature, idx) => (
                    <li key={idx} className="flex items-start space-x-3 text-sm text-stone-300">
                      <div className="p-0.5 bg-amber-500/10 rounded-full border border-amber-500/20 shrink-0 mt-0.5">
                        <Check className="h-3.5 w-3.5 text-amber-400" />
                      </div>
                      <span className="leading-tight">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action booking CTA */}
              <div className="pt-8" id={`pricing-action-${pkg.id}`}>
                <button
                  onClick={() => setTab('contact')}
                  id={`pricing-book-btn-${pkg.id}`}
                  className={`w-full py-4 rounded-xl font-bold text-xs uppercase tracking-widest transition-all duration-300 ${
                    pkg.isPopular
                      ? 'bg-gradient-to-r from-amber-400 to-amber-500 text-stone-900 hover:from-amber-500 hover:to-amber-600 shadow-md hover:shadow-amber-500/10'
                      : 'border border-stone-700 bg-stone-800/40 text-stone-300 hover:border-amber-400 hover:text-amber-400'
                  }`}
                >
                  {dict.bookTable}
                </button>
              </div>

            </div>
          );
        })}
      </div>

      {/* Pricing custom note */}
      <section className="bg-stone-950 p-6 rounded-2xl border border-stone-800 flex items-start space-x-4 max-w-2xl mx-auto text-xs" id="pricing-note">
        <HelpCircle className="h-5 w-5 text-amber-500 shrink-0 mt-0.5" />
        <div className="text-stone-400 space-y-1">
          <span className="font-bold text-white uppercase font-mono tracking-wide">
            {lang === 'en' ? 'Dietary Inquiries & Group Adjustments' : 'Urekebishaji wa Makundi na Mahitaji ya Lishe'}
          </span>
          <p className="leading-relaxed">
            {lang === 'en'
              ? 'We cater happily to Halal, gluten-free, vegetarian, and lactose-free requests. Please state any specific culinary needs in the custom dietary section of the reservation form, or contact our head chef directly.'
              : 'Tunapika kwa furaha mahitaji ya Halal, yasiyo na gluten, mboga za majani pekee, na wasiotumia maziwa. Tafadhali taja hitaji lolote la kipekee kwenye fomu ya kuhifadhi nafasi.'}
          </p>
        </div>
      </section>

    </div>
  );
}
