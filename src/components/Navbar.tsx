/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { ChefHat, Menu, X, Globe } from 'lucide-react';
import { Language } from '../types';
import { DICTIONARY } from '../data';
import { motion, AnimatePresence } from 'motion/react';

interface NavbarProps {
  currentTab: string;
  setTab: (tab: string) => void;
  lang: Language;
  setLang: (lang: Language) => void;
}

export default function Navbar({ currentTab, setTab, lang, setLang }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dict = DICTIONARY[lang];

  const navItems = [
    { id: 'home', labelEn: '🏠 Home', labelSw: '🏠 Nyumbani' },
    { id: 'about', labelEn: '👤 About', labelSw: '👤 Kuhusu Sisi' },
    { id: 'services', labelEn: '💼 Services', labelSw: '💼 Huduma' },
    { id: 'pricing', labelEn: '💰 Pricing', labelSw: '💰 Bei Zetu' },
    { id: 'portfolio', labelEn: '🖼 Portfolio', labelSw: '🖼 Matunzio' },
    { id: 'reviews', labelEn: '⭐ Reviews', labelSw: '⭐ Maoni' },
    { id: 'contact', labelEn: '📞 Contact', labelSw: '📞 Mawasiliano' }
  ];

  const toggleLanguage = () => {
    setLang(lang === 'en' ? 'sw' : 'en');
  };

  const handleNavClick = (tabId: string) => {
    setTab(tabId);
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 bg-stone-900/95 border-b border-amber-500/20 backdrop-blur-md shadow-lg" id="app-header">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <div 
            className="flex items-center space-x-3 cursor-pointer group" 
            onClick={() => handleNavClick('home')}
            id="logo-container"
          >
            <div className="p-2.5 bg-gradient-to-tr from-amber-500 to-amber-600 rounded-xl shadow-md shadow-amber-500/10 group-hover:scale-105 transition-transform duration-300">
              <ChefHat className="h-6 w-6 text-stone-900" />
            </div>
            <div>
              <span className="text-xl font-extrabold tracking-wider text-amber-400 font-sans block uppercase">
                Ladha & Sherehe
              </span>
              <span className="text-[10px] tracking-widest text-stone-400 font-mono block uppercase">
                {lang === 'en' ? 'Premium Dining' : 'Upishi wa Kifahari'}
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center space-x-1" id="desktop-nav">
            {navItems.map((item) => {
              const isActive = currentTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  id={`nav-link-${item.id}`}
                  className={`px-3 py-2 text-sm font-medium rounded-lg transition-all duration-300 relative ${
                    isActive 
                      ? 'text-amber-400 bg-stone-800' 
                      : 'text-stone-300 hover:text-amber-400 hover:bg-stone-800/50'
                  }`}
                >
                  <span>{lang === 'en' ? item.labelEn : item.labelSw}</span>
                  {isActive && (
                    <motion.div 
                      layoutId="activeIndicator"
                      className="absolute bottom-0 left-2 right-2 h-0.5 bg-amber-500 rounded"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right Action buttons */}
          <div className="hidden xl:flex items-center space-x-4" id="nav-actions">
            {/* Language Switcher */}
            <button
              onClick={toggleLanguage}
              id="language-switcher"
              className="flex items-center space-x-2 px-3 py-1.5 rounded-lg border border-stone-700 bg-stone-800/40 text-xs font-mono text-stone-300 hover:border-amber-500/40 hover:text-amber-400 transition-all duration-300"
              title={lang === 'en' ? 'Badili lugha kuwa Kiswahili' : 'Switch language to English'}
            >
              <Globe className="h-3.5 w-3.5 text-amber-500" />
              <span>{lang === 'en' ? '🇹🇿 SW' : '🇬🇧 EN'}</span>
            </button>

            {/* CTA Button */}
            <button
              onClick={() => handleNavClick('contact')}
              id="cta-nav-book"
              className="px-5 py-2.5 text-xs font-bold tracking-wider uppercase text-stone-900 bg-gradient-to-r from-amber-400 to-amber-500 rounded-lg hover:from-amber-500 hover:to-amber-600 transition-all duration-300 hover:shadow-lg hover:shadow-amber-500/20 active:scale-95"
            >
              {dict.bookTable}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex xl:hidden items-center space-x-3" id="mobile-controls">
            {/* Mobile Language Switcher */}
            <button
              onClick={toggleLanguage}
              id="mobile-language-switcher"
              className="flex items-center space-x-1.5 px-2 py-1 rounded-lg border border-stone-700 bg-stone-800/40 text-xs font-mono text-stone-300"
            >
              <Globe className="h-3 w-3 text-amber-500" />
              <span>{lang === 'en' ? 'SW' : 'EN'}</span>
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              id="mobile-menu-toggle"
              className="p-2 rounded-lg text-stone-300 hover:text-amber-400 hover:bg-stone-800 transition-colors duration-200 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="xl:hidden bg-stone-900 border-t border-stone-800 px-4 pt-2 pb-6 space-y-2 overflow-hidden"
            id="mobile-drawer"
          >
            {navItems.map((item) => {
              const isActive = currentTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  id={`mobile-nav-link-${item.id}`}
                  className={`w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                    isActive 
                      ? 'bg-amber-500/10 text-amber-400 border-l-4 border-amber-500 pl-3' 
                      : 'text-stone-300 hover:bg-stone-800/50 hover:text-amber-400'
                  }`}
                >
                  {lang === 'en' ? item.labelEn : item.labelSw}
                </button>
              );
            })}
            
            <div className="pt-4 border-t border-stone-800/60 flex flex-col space-y-3" id="mobile-drawer-cta">
              <button
                onClick={() => handleNavClick('contact')}
                id="mobile-cta-book"
                className="w-full text-center py-3 text-sm font-bold uppercase tracking-wider text-stone-900 bg-gradient-to-r from-amber-400 to-amber-500 rounded-lg hover:from-amber-500 hover:to-amber-600 transition-all active:scale-95"
              >
                {dict.bookTable}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
