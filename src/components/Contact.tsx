/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { MapPin, Clock, Phone, Mail, Send, Calendar, Users, ShieldCheck, CheckCircle, Ticket, Award } from 'lucide-react';
import { Language, ReservationData, ContactMessage } from '../types';
import { DICTIONARY } from '../data';
import { motion, AnimatePresence } from 'motion/react';

interface ContactProps {
  lang: Language;
}

export default function Contact({ lang }: ContactProps) {
  const dict = DICTIONARY[lang];

  // Reservation Form State
  const [resName, setResName] = useState('');
  const [resEmail, setResEmail] = useState('');
  const [resPhone, setResPhone] = useState('');
  const [resDate, setResDate] = useState('');
  const [resTime, setResTime] = useState('');
  const [resGuests, setResGuests] = useState<number>(2);
  const [resRequests, setResRequests] = useState('');
  const [resSubmitting, setResSubmitting] = useState(false);
  const [resReceipt, setResReceipt] = useState<ReservationData & { ticketCode: string } | null>(null);

  // General Message Form State
  const [msgName, setMsgName] = useState('');
  const [msgEmail, setMsgEmail] = useState('');
  const [msgSubject, setMsgSubject] = useState('');
  const [msgText, setMsgText] = useState('');
  const [msgSubmitting, setMsgSubmitting] = useState(false);
  const [msgSuccess, setMsgSuccess] = useState(false);

  const handleReservation = (e: React.FormEvent) => {
    e.preventDefault();
    if (!resName.trim() || !resEmail.trim() || !resPhone.trim() || !resDate || !resTime) return;

    setResSubmitting(true);
    
    // Simulate booking dispatch delay
    setTimeout(() => {
      const ticketCode = `LS-${Math.floor(1000 + Math.random() * 9000)}`;
      setResReceipt({
        name: resName,
        email: resEmail,
        phone: resPhone,
        date: resDate,
        time: resTime,
        guests: resGuests,
        specialRequests: resRequests,
        ticketCode: ticketCode
      });
      setResSubmitting(false);

      // Reset fields
      setResName('');
      setResEmail('');
      setResPhone('');
      setResDate('');
      setResTime('');
      setResGuests(2);
      setResRequests('');
    }, 1500);
  };

  const handleMessageSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!msgName.trim() || !msgEmail.trim() || !msgText.trim()) return;

    setMsgSubmitting(true);
    
    // Simulate inquiry dispatch delay
    setTimeout(() => {
      setMsgSuccess(true);
      setMsgSubmitting(false);

      // Reset fields
      setMsgName('');
      setMsgEmail('');
      setMsgSubject('');
      setMsgText('');

      // Clear success alert after 5s
      setTimeout(() => setMsgSuccess(false), 5000);
    }, 1200);
  };

  return (
    <div id="contact-view" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-24">
      
      {/* 1. RESERVATION ENGINE BLOCK */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch" id="reservation-section">
        
        {/* Left Side Info / Receipt display */}
        <div className="lg:col-span-5 flex flex-col justify-between space-y-8" id="reservation-info-pane">
          
          <div className="space-y-4">
            <span className="text-amber-400 text-xs font-bold uppercase tracking-widest font-mono block">
              {lang === 'en' ? 'VIP RESERVATION' : 'UHIFADHI WA VIP'}
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white font-sans uppercase">
              {dict.bookingTitle}
            </h2>
            <div className="h-1 w-16 bg-amber-500 rounded" />
            <p className="text-stone-400 text-sm leading-relaxed">
              {dict.bookingSubtitle}
            </p>
          </div>

          <AnimatePresence mode="wait">
            {!resReceipt ? (
              // Static beautiful informational card if no receipt
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="bg-stone-900 border border-stone-800 rounded-3xl p-8 space-y-6 flex-1 flex flex-col justify-center"
                id="res-info-card"
              >
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-amber-500/10 border border-amber-500/20 rounded-xl shrink-0">
                    <Award className="h-5 w-5 text-amber-500" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-sm uppercase tracking-wide">
                      {lang === 'en' ? 'The Botanical Garden' : 'Bustani ya Asili'}
                    </h4>
                    <p className="text-stone-400 text-xs mt-1 leading-relaxed">
                      {lang === 'en' 
                        ? 'Dine under illuminated palm structures and coastal climbing vines with ambient water streams.'
                        : 'Kula chini ya miundo ya mitende yenye taa na kuta za kijani kibichi huku ukisikiliza sauti ya maji.'}
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-amber-500/10 border border-amber-500/20 rounded-xl shrink-0">
                    <ShieldCheck className="h-5 w-5 text-amber-500" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-sm uppercase tracking-wide">
                      {lang === 'en' ? 'Strict Table Hold' : 'Ushikaji wa Meza'}
                    </h4>
                    <p className="text-stone-400 text-xs mt-1 leading-relaxed">
                      {lang === 'en'
                        ? 'We hold reserved tables for exactly 20 minutes past booking times. Contact us immediately for late changes.'
                        : 'Tunahifadhi meza zilizowekwa kwa dakika 20 haswa baada ya muda wa booking kupita.'}
                    </p>
                  </div>
                </div>

                <div className="pt-4 border-t border-stone-800 flex items-center justify-between text-xs font-mono text-stone-500">
                  <span>{lang === 'en' ? 'No reservation fee' : 'Hakuna ada ya uwekaji'}</span>
                  <span>{lang === 'en' ? 'Instant Confirmation' : 'Uthibitisho wa Papo Hapo'}</span>
                </div>
              </motion.div>
            ) : (
              // EXQUISITE HIGH FIDELITY DINING TICKET RECEIPT
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="bg-gradient-to-br from-stone-900 to-amber-950/20 border-2 border-dashed border-amber-500/40 rounded-3xl p-8 space-y-6 flex-1 relative overflow-hidden"
                id="dining-ticket"
              >
                {/* Visual stamp / design detail */}
                <div className="absolute -top-12 -right-12 h-32 w-32 bg-amber-500/10 rounded-full border border-amber-500/20 flex items-center justify-center rotate-12">
                  <span className="text-[10px] font-black text-amber-500 uppercase tracking-widest font-mono">LADHA VIP</span>
                </div>

                <div className="flex items-center space-x-3 text-amber-400">
                  <Ticket className="h-6 w-6 text-amber-500" />
                  <span className="text-sm font-black uppercase tracking-widest font-mono">
                    {lang === 'en' ? 'Royal Dining Ticket' : 'Tiketi ya Mlo wa Kifalme'}
                  </span>
                </div>

                <div className="space-y-4 pt-2 border-t border-stone-800">
                  <div className="grid grid-cols-2 gap-4 text-xs font-mono">
                    <div>
                      <span className="block text-stone-500 uppercase">{lang === 'en' ? 'GUEST NAME' : 'JINA LA MGENI'}</span>
                      <span className="block text-white font-bold text-sm mt-0.5">{resReceipt.name}</span>
                    </div>
                    <div>
                      <span className="block text-stone-500 uppercase">{lang === 'en' ? 'RESERVATION CODE' : 'KODI YA TIKETI'}</span>
                      <span className="block text-amber-400 font-black text-sm mt-0.5">{resReceipt.ticketCode}</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-2 text-xs font-mono pt-2">
                    <div>
                      <span className="block text-stone-500 uppercase">{lang === 'en' ? 'DATE' : 'TAREHE'}</span>
                      <span className="block text-white font-bold mt-0.5">{resReceipt.date}</span>
                    </div>
                    <div>
                      <span className="block text-stone-500 uppercase">{lang === 'en' ? 'TIME' : 'MUDA'}</span>
                      <span className="block text-white font-bold mt-0.5">{resReceipt.time}</span>
                    </div>
                    <div>
                      <span className="block text-stone-500 uppercase">{lang === 'en' ? 'GUESTS' : 'WAGENI'}</span>
                      <span className="block text-white font-bold mt-0.5">{resReceipt.guests} {lang === 'en' ? 'Pax' : 'Watu'}</span>
                    </div>
                  </div>

                  {resReceipt.specialRequests && (
                    <div className="pt-2 text-xs font-mono">
                      <span className="block text-stone-500 uppercase">{lang === 'en' ? 'DIETARY/REQUESTS' : 'MAHITAJI MAALUM'}</span>
                      <p className="text-stone-300 mt-1 leading-relaxed bg-stone-950/50 p-3 rounded-lg border border-stone-800/80 italic">
                        "{resReceipt.specialRequests}"
                      </p>
                    </div>
                  )}
                </div>

                <div className="pt-4 border-t border-stone-800/60 text-center space-y-2">
                  <div className="flex items-center justify-center space-x-2 text-emerald-400 text-xs font-bold font-mono uppercase">
                    <CheckCircle className="h-4 w-4" />
                    <span>{lang === 'en' ? 'Confirmed & Active' : 'Imethibitishwa & Ipo Active'}</span>
                  </div>
                  <button
                    onClick={() => setResReceipt(null)}
                    className="text-[10px] text-amber-500 hover:underline font-mono uppercase font-bold tracking-wider pt-2"
                  >
                    {lang === 'en' ? 'Book Another Table' : 'Weka Meza Nyingine'}
                  </button>
                </div>

              </motion.div>
            )}
          </AnimatePresence>

        </div>

        {/* Right Side: Reservation Booking Form */}
        <div className="lg:col-span-7 bg-stone-900 border border-stone-800/80 rounded-3xl p-8 lg:p-10 space-y-6" id="reservation-form-wrap">
          <div className="space-y-1">
            <h3 className="text-xl font-bold text-white uppercase tracking-tight">
              {lang === 'en' ? 'Select Date & Details' : 'Chagua Tarehe na Maelezo'}
            </h3>
            <p className="text-stone-400 text-xs">
              {lang === 'en' ? 'Fields marked with * are required to secure your VIP ticket.' : 'Sehemu zenye * ni lazima kuzaza ili kupata tiketi.'}
            </p>
          </div>

          <form onSubmit={handleReservation} className="space-y-4" id="booking-form">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              
              {/* Full name */}
              <div className="space-y-1.5" id="booking-name-field">
                <label className="block text-[10px] font-bold text-stone-400 uppercase tracking-wider font-mono">{dict.fullName} *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. David Carter"
                  value={resName}
                  onChange={(e) => setResName(e.target.value)}
                  className="w-full px-4 py-3 bg-stone-950 border border-stone-800 rounded-xl text-white text-sm focus:outline-none focus:border-amber-500/40 transition-colors"
                />
              </div>

              {/* Email */}
              <div className="space-y-1.5" id="booking-email-field">
                <label className="block text-[10px] font-bold text-stone-400 uppercase tracking-wider font-mono">{dict.email} *</label>
                <input
                  type="email"
                  required
                  placeholder="e.g. guest@domain.com"
                  value={resEmail}
                  onChange={(e) => setResEmail(e.target.value)}
                  className="w-full px-4 py-3 bg-stone-950 border border-stone-800 rounded-xl text-white text-sm focus:outline-none focus:border-amber-500/40 transition-colors"
                />
              </div>

            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              
              {/* Phone */}
              <div className="space-y-1.5" id="booking-phone-field">
                <label className="block text-[10px] font-bold text-stone-400 uppercase tracking-wider font-mono">{dict.phone} *</label>
                <input
                  type="tel"
                  required
                  placeholder="e.g. +255 712 345 678"
                  value={resPhone}
                  onChange={(e) => setResPhone(e.target.value)}
                  className="w-full px-4 py-3 bg-stone-950 border border-stone-800 rounded-xl text-white text-sm focus:outline-none focus:border-amber-500/40 transition-colors"
                />
              </div>

              {/* Date */}
              <div className="space-y-1.5" id="booking-date-field">
                <label className="block text-[10px] font-bold text-stone-400 uppercase tracking-wider font-mono">{dict.date} *</label>
                <input
                  type="date"
                  required
                  value={resDate}
                  onChange={(e) => setResDate(e.target.value)}
                  className="w-full px-4 py-3 bg-stone-950 border border-stone-800 rounded-xl text-white text-sm focus:outline-none focus:border-amber-500/40 transition-colors"
                />
              </div>

              {/* Time */}
              <div className="space-y-1.5" id="booking-time-field">
                <label className="block text-[10px] font-bold text-stone-400 uppercase tracking-wider font-mono">{dict.time} *</label>
                <input
                  type="time"
                  required
                  value={resTime}
                  onChange={(e) => setResTime(e.target.value)}
                  className="w-full px-4 py-3 bg-stone-950 border border-stone-800 rounded-xl text-white text-sm focus:outline-none focus:border-amber-500/40 transition-colors"
                />
              </div>

            </div>

            {/* Guest Count Selector */}
            <div className="space-y-1.5" id="booking-guests-field">
              <label className="block text-[10px] font-bold text-stone-400 uppercase tracking-wider font-mono">{dict.guestsCount} *</label>
              <select
                value={resGuests}
                onChange={(e) => setResGuests(Number(e.target.value))}
                className="w-full px-4 py-3 bg-stone-950 border border-stone-800 rounded-xl text-white text-sm focus:outline-none focus:border-amber-500/40 transition-colors"
              >
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 15].map((num) => (
                  <option key={num} value={num} className="bg-stone-900">
                    {num} {num === 1 ? (lang === 'en' ? 'Guest' : 'Mgeni') : (lang === 'en' ? 'Guests' : 'Wageni')}
                  </option>
                ))}
              </select>
            </div>

            {/* Special Request */}
            <div className="space-y-1.5" id="booking-requests-field">
              <label className="block text-[10px] font-bold text-stone-400 uppercase tracking-wider font-mono">{dict.specialRequests}</label>
              <textarea
                rows={3}
                placeholder={lang === 'en' ? 'Allergies, anniversaries, birthday, or private lounge preference...' : 'Mzio wa vyakula, maadhimisho ya ndoa, siku ya kuzaliwa, au chumba maalum...'}
                value={resRequests}
                onChange={(e) => setResRequests(e.target.value)}
                className="w-full px-4 py-3 bg-stone-950 border border-stone-800 rounded-xl text-white text-sm focus:outline-none focus:border-amber-500/40 resize-none transition-colors"
              />
            </div>

            {/* Action booking trigger button */}
            <button
              type="submit"
              disabled={resSubmitting}
              id="confirm-booking-btn"
              className="w-full py-4 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-500 hover:to-amber-600 text-stone-900 rounded-xl font-bold text-xs uppercase tracking-widest transition-all duration-300 disabled:opacity-50 flex items-center justify-center space-x-2 shadow-lg shadow-amber-500/10"
            >
              {resSubmitting ? (
                <>
                  <svg className="animate-spin h-4 w-4 text-stone-900" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                  <span>{lang === 'en' ? 'Securing Seat...' : 'Kuhifadhi Meza...'}</span>
                </>
              ) : (
                <>
                  <Calendar className="h-4 w-4" />
                  <span>{dict.bookingBtn}</span>
                </>
              )}
            </button>
          </form>

        </div>

      </section>

      {/* 2. GENERAL INQUIRY & ADDRESS GRID */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start" id="contact-details-section">
        
        {/* Contact Info list */}
        <div className="lg:col-span-5 space-y-8" id="contact-info-col">
          <div className="space-y-4">
            <h3 className="text-2xl font-extrabold text-white uppercase">{dict.quickContact}</h3>
            <div className="h-0.5 w-12 bg-amber-500 rounded" />
          </div>

          <div className="space-y-6" id="contact-info-links">
            {/* Address */}
            <div className="flex items-start space-x-4">
              <div className="p-3 bg-stone-900 border border-stone-800 rounded-xl shrink-0">
                <MapPin className="h-5 w-5 text-amber-500" />
              </div>
              <div>
                <span className="block text-xs font-bold text-stone-400 uppercase tracking-widest font-mono">{dict.ourLocation}</span>
                <p className="text-stone-300 text-sm mt-1">{dict.locationText}</p>
              </div>
            </div>

            {/* Opening Hours */}
            <div className="flex items-start space-x-4">
              <div className="p-3 bg-stone-900 border border-stone-800 rounded-xl shrink-0">
                <Clock className="h-5 w-5 text-amber-500" />
              </div>
              <div className="space-y-2 flex-1">
                <span className="block text-xs font-bold text-stone-400 uppercase tracking-widest font-mono">{dict.ourHours}</span>
                <div className="grid grid-cols-2 text-stone-300 text-sm gap-y-1">
                  <span>{dict.weekdays}</span>
                  <span className="font-mono text-xs">{dict.weekdaysTime}</span>
                  <span>{dict.weekends}</span>
                  <span className="font-mono text-xs text-amber-400 font-bold">{dict.weekendsTime}</span>
                </div>
              </div>
            </div>

            {/* Phone & Email link block */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <a 
                href="tel:+255712345678" 
                className="p-4 bg-stone-900 border border-stone-800 hover:border-amber-500/20 rounded-2xl flex items-center space-x-3 transition-colors"
                id="phone-link-btn"
              >
                <Phone className="h-4 w-4 text-amber-500 shrink-0" />
                <div className="min-w-0">
                  <span className="block text-[9px] font-mono uppercase text-stone-500 font-bold">Call Team</span>
                  <span className="block text-stone-300 font-bold text-xs truncate">+255 712 345 678</span>
                </div>
              </a>

              <a 
                href="mailto:hospitality@ladhasherehe.com" 
                className="p-4 bg-stone-900 border border-stone-800 hover:border-amber-500/20 rounded-2xl flex items-center space-x-3 transition-colors"
                id="email-link-btn"
              >
                <Mail className="h-4 w-4 text-amber-500 shrink-0" />
                <div className="min-w-0">
                  <span className="block text-[9px] font-mono uppercase text-stone-500 font-bold">Email us</span>
                  <span className="block text-stone-300 font-bold text-xs truncate">hello@ladha.com</span>
                </div>
              </a>
            </div>

          </div>

          {/* Elegant Map Placeholder */}
          <div className="h-48 rounded-2xl border border-stone-800 overflow-hidden relative group" id="map-placeholder">
            <img 
              src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=600&q=80" 
              alt="Dar Es Salaam Map Mock" 
              className="w-full h-full object-cover filter brightness-[0.4] contrast-125 group-hover:scale-105 transition-transform duration-700"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-stone-950/20" />
            
            {/* Map Pin center */}
            <div className="absolute inset-0 flex flex-col justify-center items-center space-y-2">
              <div className="p-3 bg-amber-500 text-stone-950 rounded-full animate-bounce shadow-xl">
                <MapPin className="h-5 w-5" />
              </div>
              <span className="px-3 py-1 bg-stone-900/90 border border-stone-800 rounded-lg text-[10px] font-mono text-stone-300 tracking-wide uppercase font-bold">
                Masaki, Dar es Salaam
              </span>
            </div>
          </div>

        </div>

        {/* General inquiry contact form */}
        <div className="lg:col-span-7 bg-stone-900 border border-stone-800/80 rounded-3xl p-8 space-y-6" id="general-inquiry-col">
          <div className="space-y-1">
            <h3 className="text-xl font-bold text-white uppercase tracking-tight">
              {dict.sendMessage}
            </h3>
            <p className="text-stone-400 text-xs">
              {lang === 'en' ? 'Have custom questions about our catering or masterclasses? Write to our team.' : 'Una maswali ya ziada kuhusu upishi na madarasa yetu? Tuandikie ujumbe hapa.'}
            </p>
          </div>

          <form onSubmit={handleMessageSubmit} className="space-y-4" id="message-form">
            <AnimatePresence>
              {msgSuccess && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="p-4 bg-emerald-950/40 border border-emerald-500/30 text-emerald-400 rounded-xl text-xs flex items-start space-x-3"
                  id="message-form-success"
                >
                  <CheckCircle className="h-4 w-4 shrink-0 mt-0.5" />
                  <span>{dict.successMsg}</span>
                </motion.div>
              )}
            </AnimatePresence>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              {/* Name */}
              <div className="space-y-1.5" id="msg-name-field">
                <label className="block text-[10px] font-bold text-stone-400 uppercase tracking-wider font-mono">{dict.yourName} *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Asha Bakari"
                  value={msgName}
                  onChange={(e) => setMsgName(e.target.value)}
                  className="w-full px-4 py-3 bg-stone-950 border border-stone-800 rounded-xl text-white text-sm focus:outline-none focus:border-amber-500/40 transition-colors"
                />
              </div>

              {/* Email */}
              <div className="space-y-1.5" id="msg-email-field">
                <label className="block text-[10px] font-bold text-stone-400 uppercase tracking-wider font-mono">{dict.email} *</label>
                <input
                  type="email"
                  required
                  placeholder="e.g. asha@domain.com"
                  value={msgEmail}
                  onChange={(e) => setMsgEmail(e.target.value)}
                  className="w-full px-4 py-3 bg-stone-950 border border-stone-800 rounded-xl text-white text-sm focus:outline-none focus:border-amber-500/40 transition-colors"
                />
              </div>

            </div>

            {/* Subject */}
            <div className="space-y-1.5" id="msg-subject-field">
              <label className="block text-[10px] font-bold text-stone-400 uppercase tracking-wider font-mono">{dict.subject}</label>
              <input
                type="text"
                placeholder={lang === 'en' ? 'e.g. Wedding Catering Inquiry' : 'Mfn. Ulizio wa Catering ya Harusi'}
                value={msgSubject}
                onChange={(e) => setMsgSubject(e.target.value)}
                className="w-full px-4 py-3 bg-stone-950 border border-stone-800 rounded-xl text-white text-sm focus:outline-none focus:border-amber-500/40 transition-colors"
              />
            </div>

            {/* Message */}
            <div className="space-y-1.5" id="msg-text-field">
              <label className="block text-[10px] font-bold text-stone-400 uppercase tracking-wider font-mono">{dict.message} *</label>
              <textarea
                required
                rows={4}
                placeholder={lang === 'en' ? 'Tell us how we can help...' : 'Tuambie jinsi gani tunaweza kukusaidia...'}
                value={msgText}
                onChange={(e) => setMsgText(e.target.value)}
                className="w-full px-4 py-3 bg-stone-950 border border-stone-800 rounded-xl text-white text-sm focus:outline-none focus:border-amber-500/40 resize-none transition-colors"
              />
            </div>

            <button
              type="submit"
              disabled={msgSubmitting}
              id="send-msg-btn"
              className="w-full py-4 text-xs font-bold uppercase tracking-wider text-stone-900 bg-stone-800 hover:bg-stone-700 text-amber-400 border border-amber-500/30 hover:border-amber-400 rounded-xl transition-all disabled:opacity-50 flex items-center justify-center space-x-2"
            >
              {msgSubmitting ? (
                <>
                  <svg className="animate-spin h-4 w-4 text-amber-400" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                  <span>{lang === 'en' ? 'Sending Message...' : 'Ujumbe Unatumwa...'}</span>
                </>
              ) : (
                <>
                  <Send className="h-4 w-4" />
                  <span>{dict.sendBtn}</span>
                </>
              )}
            </button>
          </form>

        </div>

      </section>

    </div>
  );
}
