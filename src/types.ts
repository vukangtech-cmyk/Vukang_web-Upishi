/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type Language = 'en' | 'sw';

export interface MenuItem {
  id: string;
  nameEn: string;
  nameSw: string;
  descriptionEn: string;
  descriptionSw: string;
  priceUsd: number;
  category: 'starter' | 'main' | 'dessert' | 'beverage';
  image: string;
  isChefSpecial?: boolean;
}

export interface ServiceItem {
  id: string;
  titleEn: string;
  titleSw: string;
  descriptionEn: string;
  descriptionSw: string;
  icon: string; // Lucide icon name
  image: string;
}

export interface PricingPackage {
  id: string;
  nameEn: string;
  nameSw: string;
  priceEn: string;
  priceSw: string;
  periodEn: string;
  periodSw: string;
  descriptionEn: string;
  descriptionSw: string;
  featuresEn: string[];
  featuresSw: string[];
  isPopular?: boolean;
}

export interface PortfolioItem {
  id: string;
  titleEn: string;
  titleSw: string;
  categoryEn: string;
  categorySw: string;
  image: string;
  descriptionEn: string;
  descriptionSw: string;
}

export interface ReviewItem {
  id: string;
  name: string;
  roleEn: string;
  roleSw: string;
  rating: number;
  commentEn: string;
  commentSw: string;
  date: string;
  avatar: string;
}

export interface ReservationData {
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  guests: number;
  specialRequests: string;
}

export interface ContactMessage {
  name: string;
  email: string;
  subject: string;
  message: string;
}
