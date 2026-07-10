/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Pricing from './components/Pricing';
import Portfolio from './components/Portfolio';
import Reviews from './components/Reviews';
import Contact from './components/Contact';
import { Language, ReviewItem } from './types';
import { INITIAL_REVIEWS, DICTIONARY } from './data';
import { motion, AnimatePresence } from 'motion/react';
import { ChefHat, Phone, Mail, MapPin, Award, ArrowUp } from 'lucide-react';

export default function App() {
  const [currentTab, setCurrentTab] = useState<string>('home');
  const [lang, setLang] = useState<Language>('sw'); // Default to Swahili as requested by user's prompt tone
  const [reviews, setReviews] = useState<ReviewItem[]>(INITIAL_REVIEWS);
  const dict = DICTIONARY[lang];

  const handleAddReview = (newReview: ReviewItem) => {
    setReviews((prev) => [newReview, ...prev]);
  };

  const handleFooterLink = (tabId: string) => {
    setCurrentTab(tabId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderTabContent = () => {
    switch (currentTab) {
      case 'home':
        return <Home lang={lang} setTab={setCurrentTab} />;
      case 'about':
        return <About lang={lang} />;
      case 'services':
        return <Services lang={lang} setTab={setCurrentTab} />;
      case 'pricing':
        return <Pricing lang={lang} setTab={setCurrentTab} />;
      case 'portfolio':
        return <Portfolio lang={lang} />;
      case 'reviews':
        return <Reviews lang={lang} reviews={reviews} onAddReview={handleAddReview} />;
      case 'contact':
        return <Contact lang={lang} />;
      default:
        return <Home lang={lang} setTab={setCurrentTab} />;
    }
  };

  return (
    <div className="min-h-screen bg-stone-950 text-stone-100 flex flex-col font-sans" id="app-root">
      
      {/* Dynamic Header / Navigation bar */}
      <Navbar 
        currentTab={currentTab} 
        setTab={setCurrentTab} 
        lang={lang} 
        setLang={setLang} 
      />

      {/* Main Container / Routed tab content */}
      <main className="flex-grow" id="main-content">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentTab}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35, ease: 'easeInOut' }}
            id="tab-viewport"
          >
            {renderTabContent()}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Exquisite Footer */}
      <footer className="bg-stone-900 border-t border-amber-500/10 text-stone-400 py-16" id="app-footer">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 items-start">
            
            {/* Column 1: Brand & Logo */}
            <div className="space-y-4" id="footer-brand-col">
              <div className="flex items-center space-x-3 cursor-pointer" onClick={() => handleFooterLink('home')}>
                <div className="p-2 bg-amber-500 rounded-lg">
                  <ChefHat className="h-5 w-5 text-stone-900" />
                </div>
                <span className="text-lg font-bold uppercase tracking-wider text-white">Ladha & Sherehe</span>
              </div>
              <p className="text-xs text-stone-400 leading-relaxed font-serif italic">
                "{dict.tagline}"
              </p>
              <div className="flex items-center space-x-2 text-xs text-amber-500 font-mono">
                <Award className="h-4 w-4" />
                <span className="uppercase tracking-widest">{lang === 'en' ? 'Certified Gastronomy' : 'Upishi wa Kiwango cha Juu'}</span>
              </div>
            </div>

            {/* Column 2: Quick Links */}
            <div className="space-y-4" id="footer-links-col">
              <h4 className="text-white text-xs font-bold uppercase tracking-widest font-mono">
                {lang === 'en' ? 'Quick Navigation' : 'Ukurasa Haraka'}
              </h4>
              <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-xs">
                <button onClick={() => handleFooterLink('home')} className="text-left hover:text-amber-400 transition-colors">
                  {lang === 'en' ? '🏠 Home' : '🏠 Nyumbani'}
                </button>
                <button onClick={() => handleFooterLink('about')} className="text-left hover:text-amber-400 transition-colors">
                  {lang === 'en' ? '👤 About' : '👤 Kuhusu'}
                </button>
                <button onClick={() => handleFooterLink('services')} className="text-left hover:text-amber-400 transition-colors">
                  {lang === 'en' ? '💼 Services' : '💼 Huduma'}
                </button>
                <button onClick={() => handleFooterLink('pricing')} className="text-left hover:text-amber-400 transition-colors">
                  {lang === 'en' ? '💰 Pricing' : '💰 Bei'}
                </button>
                <button onClick={() => handleFooterLink('portfolio')} className="text-left hover:text-amber-400 transition-colors">
                  {lang === 'en' ? '🖼 Portfolio' : '🖼 Matunzio'}
                </button>
                <button onClick={() => handleFooterLink('reviews')} className="text-left hover:text-amber-400 transition-colors">
                  {lang === 'en' ? '⭐ Reviews' : '⭐ Maoni'}
                </button>
                <button onClick={() => handleFooterLink('contact')} className="text-left col-span-2 hover:text-amber-400 transition-colors">
                  {lang === 'en' ? '📞 Contact & Reservation' : '📞 Mawasiliano & Reservation'}
                </button>
              </div>
            </div>

            {/* Column 3: Contacts summary */}
            <div className="space-y-4 text-xs" id="footer-contacts-col">
              <h4 className="text-white font-bold uppercase tracking-widest font-mono">
                {lang === 'en' ? 'Get In Touch' : 'Wasiliana Nasi'}
              </h4>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <MapPin className="h-4 w-4 text-amber-500 shrink-0 mt-0.5" />
                  <span className="leading-normal">{dict.locationText}</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Phone className="h-4 w-4 text-amber-500 shrink-0" />
                  <span>+255 712 345 678</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Mail className="h-4 w-4 text-amber-500 shrink-0" />
                  <span className="truncate">hospitality@ladhasherehe.com</span>
                </li>
              </ul>
            </div>

            {/* Column 4: Local Currency Indicator & Back to top */}
            <div className="space-y-4 text-xs" id="footer-back-to-top-col">
              <h4 className="text-white font-bold uppercase tracking-widest font-mono">
                {lang === 'en' ? 'Tanzanian hospitality' : 'Ukarimu wa Tanzania'}
              </h4>
              <p className="text-stone-400 leading-relaxed">
                {lang === 'en'
                  ? 'We proudly celebrate coastal cultures. Our services accommodate local Tanzanian Shillings (TSh) & USD.'
                  : 'Tunajivunia kusherehekea mila na tamaduni za pwani yetu nzuri ya Tanzania. Tunapokea Shilingi (TSh) na USD.'}
              </p>
              
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                id="back-to-top-btn"
                className="inline-flex items-center space-x-1.5 text-xs text-amber-400 hover:text-white transition-colors"
              >
                <span>{lang === 'en' ? 'Scroll to top' : 'Nenda Juu'}</span>
                <ArrowUp className="h-3.5 w-3.5" />
              </button>
            </div>

          </div>

          <div className="pt-12 mt-12 border-t border-stone-800/80 text-center flex flex-col sm:flex-row justify-between items-center text-xs text-stone-500 space-y-4 sm:space-y-0" id="footer-bottom-meta">
            <p>© 2026 Ladha & Sherehe. {dict.allRights}</p>
            <div className="flex space-x-4">
              <button onClick={() => setLang('en')} className={`hover:underline ${lang === 'en' ? 'text-amber-400 font-bold' : ''}`}>🇬🇧 English</button>
              <button onClick={() => setLang('sw')} className={`hover:underline ${lang === 'sw' ? 'text-amber-400 font-bold' : ''}`}>🇹🇿 Kiswahili</button>
            </div>
          </div>

        </div>
      </footer>

    </div>
  );
}
