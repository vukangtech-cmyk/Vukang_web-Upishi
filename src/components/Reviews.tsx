/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Star, MessageSquare, CheckCircle } from 'lucide-react';
import { Language, ReviewItem } from '../types';
import { DICTIONARY } from '../data';
import { motion, AnimatePresence } from 'motion/react';

interface ReviewsProps {
  lang: Language;
  reviews: ReviewItem[];
  onAddReview: (review: ReviewItem) => void;
}

export default function Reviews({ lang, reviews, onAddReview }: ReviewsProps) {
  const dict = DICTIONARY[lang];
  const [formName, setFormName] = useState('');
  const [formRole, setFormRole] = useState('');
  const [formRating, setFormRating] = useState<number>(5);
  const [hoverRating, setHoverRating] = useState<number | null>(null);
  const [formComment, setFormComment] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  // Calculate statistics
  const totalReviews = reviews.length;
  const averageRating = (reviews.reduce((acc, rev) => acc + rev.rating, 0) / totalReviews).toFixed(1);
  const starCounts = [0, 0, 0, 0, 0]; // Index 0 is 1 star, Index 4 is 5 stars
  reviews.forEach((rev) => {
    const starIdx = Math.max(1, Math.min(5, Math.round(rev.rating))) - 1;
    starCounts[starIdx] += 1;
  });

  const handleReviewSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formName.trim() || !formComment.trim()) return;

    setIsSubmitting(true);
    
    // Simulate minor network delay
    setTimeout(() => {
      const newReview: ReviewItem = {
        id: `r-user-${Date.now()}`,
        name: formName,
        roleEn: formRole || 'Cherished Diner',
        roleSw: formRole || 'Mgeni wa Heshima',
        rating: formRating,
        commentEn: formComment,
        commentSw: formComment, // Match for both to prevent blank translation
        date: new Date().toLocaleDateString(lang === 'en' ? 'en-US' : 'sw-TZ', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        }),
        avatar: `https://images.unsplash.com/photo-${1500000000000 + Math.floor(Math.random() * 900000)}?auto=format&fit=crop&w=150&q=80`
      };

      onAddReview(newReview);
      setIsSubmitting(false);
      setSuccess(true);
      
      // Reset form
      setFormName('');
      setFormRole('');
      setFormRating(5);
      setFormComment('');

      // Auto clear success message after 5 seconds
      setTimeout(() => setSuccess(false), 5000);
    }, 1000);
  };

  return (
    <div id="reviews-view" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20">
      
      {/* Header Block */}
      <div className="text-center space-y-4 max-w-3xl mx-auto" id="reviews-header">
        <span className="text-amber-400 text-xs font-bold uppercase tracking-widest font-mono block">
          {lang === 'en' ? 'GUEST HONORS' : 'MAONI YA HESHIMA'}
        </span>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-white font-sans uppercase">
          {dict.reviewsTitle}
        </h2>
        <div className="h-1 w-20 bg-amber-500 mx-auto rounded" />
        <p className="text-stone-400">
          {dict.reviewsSubtitle}
        </p>
      </div>

      {/* Aggregate Score & Distribution Panel */}
      <section className="bg-stone-900 border border-stone-800 rounded-3xl p-6 md:p-10 grid grid-cols-1 md:grid-cols-12 gap-8 items-center" id="reviews-stats-board">
        
        {/* Rating score big display */}
        <div className="md:col-span-4 text-center md:border-r border-stone-800 md:pr-8 py-4 space-y-2" id="big-score">
          <span className="block text-6xl font-black text-amber-400 font-mono">{averageRating}</span>
          <div className="flex justify-center space-x-1">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star
                key={star}
                className={`h-5 w-5 ${
                  star <= Math.round(Number(averageRating))
                    ? 'text-amber-400 fill-amber-400'
                    : 'text-stone-700'
                }`}
              />
            ))}
          </div>
          <span className="block text-stone-500 text-xs font-mono uppercase tracking-wider">
            {lang === 'en' ? `Based on ${totalReviews} feedback logs` : `Kulingana na maoni ya wageni ${totalReviews}`}
          </span>
        </div>

        {/* Rating bars list */}
        <div className="md:col-span-8 space-y-3" id="rating-bars">
          {[5, 4, 3, 2, 1].map((stars) => {
            const count = starCounts[stars - 1];
            const percent = totalReviews > 0 ? (count / totalReviews) * 100 : 0;
            return (
              <div key={stars} className="flex items-center text-xs text-stone-400 font-mono space-x-4">
                <span className="w-12 shrink-0 text-right">{stars} {lang === 'en' ? 'stars' : 'nyota'}</span>
                <div className="flex-1 h-2.5 bg-stone-950 rounded-full overflow-hidden border border-stone-800/40">
                  <div 
                    className="h-full bg-gradient-to-r from-amber-500 to-amber-400 rounded-full" 
                    style={{ width: `${percent}%` }}
                  />
                </div>
                <span className="w-8 shrink-0 text-left">{count}</span>
              </div>
            );
          })}
        </div>

      </section>

      {/* Two Columns: Left reviews grid, Right Submit Form */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start" id="reviews-content-grid">
        
        {/* Reviews Lists */}
        <div className="lg:col-span-7 space-y-6" id="reviews-scroller-col">
          <AnimatePresence mode="popLayout">
            {reviews.map((rev) => (
              <motion.div
                layout
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                key={rev.id}
                id={`review-item-${rev.id}`}
                className="p-6 bg-stone-900 border border-stone-800/80 rounded-2xl space-y-4 hover:border-amber-500/10 transition-colors"
              >
                {/* Header author info */}
                <div className="flex items-center justify-between" id={`review-header-${rev.id}`}>
                  <div className="flex items-center space-x-3">
                    <img 
                      src={rev.avatar} 
                      alt={rev.name} 
                      className="h-10 w-10 rounded-full object-cover border border-stone-700"
                      referrerPolicy="no-referrer"
                    />
                    <div>
                      <h4 className="font-bold text-white text-sm">{rev.name}</h4>
                      <span className="text-[10px] text-amber-500 font-mono uppercase tracking-widest">
                        {lang === 'en' ? rev.roleEn : rev.roleSw}
                      </span>
                    </div>
                  </div>
                  
                  <span className="text-[10px] text-stone-500 font-mono shrink-0">
                    {rev.date}
                  </span>
                </div>

                {/* Rating score stars */}
                <div className="flex space-x-1" id={`review-stars-${rev.id}`}>
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className={`h-3.5 w-3.5 ${
                        star <= rev.rating
                          ? 'text-amber-400 fill-amber-400'
                          : 'text-stone-800'
                      }`}
                    />
                  ))}
                </div>

                {/* Message body */}
                <p className="text-stone-300 text-sm leading-relaxed">
                  {lang === 'en' ? rev.commentEn : rev.commentSw}
                </p>

              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Submit Form */}
        <div className="lg:col-span-5 bg-stone-900 border border-stone-800/80 rounded-3xl p-8 space-y-6" id="add-review-col">
          <div className="space-y-2">
            <h3 className="text-xl font-bold text-white uppercase tracking-tight">
              {dict.writeReview}
            </h3>
            <p className="text-stone-400 text-xs leading-relaxed">
              {dict.addReviewSub}
            </p>
          </div>

          <form onSubmit={handleReviewSubmit} className="space-y-4" id="review-form">
            {/* Success notification */}
            <AnimatePresence>
              {success && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="p-4 bg-emerald-950/40 border border-emerald-500/30 text-emerald-400 rounded-xl text-xs flex items-start space-x-3"
                  id="review-form-success"
                >
                  <CheckCircle className="h-4 w-4 shrink-0 mt-0.5" />
                  <span>{dict.successReview}</span>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Star selector */}
            <div className="space-y-1.5" id="form-stars-select">
              <label className="block text-[11px] font-bold text-stone-400 uppercase tracking-wider font-mono">
                {dict.yourRating} *
              </label>
              <div className="flex space-x-1.5">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    onClick={() => setFormRating(star)}
                    onMouseEnter={() => setHoverRating(star)}
                    onMouseLeave={() => setHoverRating(null)}
                    className="p-1 rounded hover:bg-stone-800/50 transition-colors"
                  >
                    <Star
                      className={`h-6 w-6 transition-all duration-150 ${
                        star <= (hoverRating ?? formRating)
                          ? 'text-amber-400 fill-amber-400 scale-110'
                          : 'text-stone-700 hover:text-stone-600'
                      }`}
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Guest Name */}
            <div className="space-y-1.5" id="form-name-field">
              <label className="block text-[11px] font-bold text-stone-400 uppercase tracking-wider font-mono">
                {dict.yourName} *
              </label>
              <input
                type="text"
                required
                placeholder="e.g. Mariam Baraka"
                value={formName}
                onChange={(e) => setFormName(e.target.value)}
                className="w-full px-4 py-3 bg-stone-950 border border-stone-800 rounded-xl text-white text-sm focus:outline-none focus:border-amber-500/40 font-sans transition-colors"
              />
            </div>

            {/* Profession / Role */}
            <div className="space-y-1.5" id="form-role-field">
              <label className="block text-[11px] font-bold text-stone-400 uppercase tracking-wider font-mono">
                {dict.yourRole}
              </label>
              <input
                type="text"
                placeholder="e.g. Local Foodie / Guest"
                value={formRole}
                onChange={(e) => setFormRole(e.target.value)}
                className="w-full px-4 py-3 bg-stone-950 border border-stone-800 rounded-xl text-white text-sm focus:outline-none focus:border-amber-500/40 font-sans transition-colors"
              />
            </div>

            {/* Feedback message */}
            <div className="space-y-1.5" id="form-comment-field">
              <label className="block text-[11px] font-bold text-stone-400 uppercase tracking-wider font-mono">
                {dict.comment} *
              </label>
              <textarea
                required
                rows={4}
                placeholder={lang === 'en' ? 'Describe the flavors, spices, service...' : 'Eleza ladha ya vyakula, viungo na huduma yetu...'}
                value={formComment}
                onChange={(e) => setFormComment(e.target.value)}
                className="w-full px-4 py-3 bg-stone-950 border border-stone-800 rounded-xl text-white text-sm focus:outline-none focus:border-amber-500/40 font-sans resize-none transition-colors"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              id="submit-review-btn"
              className="w-full py-4 text-xs font-bold uppercase tracking-wider text-stone-900 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-500 hover:to-amber-600 rounded-xl transition-all disabled:opacity-50 flex items-center justify-center space-x-2"
            >
              {isSubmitting ? (
                <>
                  <svg className="animate-spin h-4 w-4 text-stone-900" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                  <span>{dict.submitting}</span>
                </>
              ) : (
                <>
                  <MessageSquare className="h-4 w-4" />
                  <span>{dict.submitBtn}</span>
                </>
              )}
            </button>

          </form>
        </div>

      </div>

    </div>
  );
}
