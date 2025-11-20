import { LucideIcon } from 'lucide-react';

export interface NavItem {
  label: string;
  path: string;
}

export interface Politician {
  id: string;
  name: string;
  role: string;
  municipality: string;
  imageUrl: string;
  email: string;
  quote: string;
}

export interface NewsItem {
  id: string;
  title: string;
  date: string;
  category: string;
  excerpt: string;
  imageUrl: string;
  tags: string[];
}

export interface Product {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
  category: string;
}

export interface PolicyArea {
  id: string;
  title: string;
  description: string;
  points: string[];
  icon: LucideIcon;
}