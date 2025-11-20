import { NavItem, Politician, NewsItem, Product, PolicyArea } from './types';
import { Leaf, Heart, Shield, Zap, BookOpen, Briefcase, Home, Users } from 'lucide-react';

export const PARTY_NAME = "Kristna Familjepartiet";
export const PARTY_ABBREVIATION = "KFP";
export const SLOGAN = "Trygghet för familjen, hopp för framtiden";

export const NAV_ITEMS: NavItem[] = [
  { label: 'Start', path: '/' },
  { label: 'Om oss', path: '/om-oss' },
  { label: 'Vår politik', path: '/politik' },
  { label: 'Våra politiker', path: '/politiker' },
  { label: 'Partiprogram', path: '/program' },
  { label: 'Stötta oss', path: '/stotta' },
  { label: 'Bli medlem', path: '/bli-medlem' },
  { label: 'Kontakta oss', path: '/kontakt' },
  { label: 'Förslagslåda', path: '/forslag' },
  { label: 'I Media', path: '/media' },
  { label: 'Nyheter', path: '/nyheter' },
  { label: 'Organisation', path: '/organisation' },
  { label: 'Webshop', path: '/shop' },
  { label: 'Engagera dig', path: '/engagera' },
  { label: 'Valet 2026', path: '/valet-2026' },
  { label: 'Valsedlar', path: '/valsedlar' },
  { label: 'Nyhetsbrev', path: '/nyhetsbrev' },
  { label: 'Arkiv', path: '/arkiv' },
];

export const POLITICIANS: Politician[] = [
  {
    id: '1',
    name: 'Anna Andersson',
    role: 'Partiledare',
    municipality: 'Stockholm',
    imageUrl: 'https://picsum.photos/id/64/300/300',
    email: 'anna.andersson@kfp.se',
    quote: 'Familjen är samhällets viktigaste byggsten.'
  },
  {
    id: '2',
    name: 'Erik Eriksson',
    role: 'Ekonomisk talesperson',
    municipality: 'Göteborg',
    imageUrl: 'https://picsum.photos/id/91/300/300',
    email: 'erik.eriksson@kfp.se',
    quote: 'En ansvarsfull ekonomi skapar resurser till välfärden.'
  },
  {
    id: '3',
    name: 'Maria Lindberg',
    role: 'Familjepolitisk talesperson',
    municipality: 'Malmö',
    imageUrl: 'https://picsum.photos/id/65/300/300',
    email: 'maria.lindberg@kfp.se',
    quote: 'Valfrihet för familjerna är en självklarhet.'
  }
];

export const NEWS: NewsItem[] = [
  {
    id: '1',
    title: 'KFP ökar i senaste mätningen',
    date: '2023-10-25',
    category: 'Opinionsmätningar',
    excerpt: 'Vårt budskap om trygghet och valfrihet når ut till fler väljare än någonsin tidigare. Den senaste SIFO-mätningen visar ett starkt stöd bland barnfamiljer.',
    imageUrl: 'https://picsum.photos/id/20/600/400',
    tags: ['Opinion', 'Valet 2026', 'Statistik']
  },
  {
    id: '2',
    title: 'Nytt familjepaket presenterat',
    date: '2023-10-20',
    category: 'Politik',
    excerpt: 'Vi satsar 5 miljarder extra på ökat stöd till föräldrar och en mer flexibel föräldraförsäkring. Förslaget finansieras genom effektiviseringar.',
    imageUrl: 'https://picsum.photos/id/180/600/400',
    tags: ['Familj', 'Budget', 'Föräldraförsäkring']
  },
  {
    id: '3',
    title: 'Välkommen till rikstinget 2024',
    date: '2023-10-15',
    category: 'Event',
    excerpt: 'Anmälan är nu öppen för årets största politiska händelse i Jönköping. Vi samlas för att staka ut vägen mot valet 2026.',
    imageUrl: 'https://picsum.photos/id/145/600/400',
    tags: ['Riksting', 'Medlemmar', 'Jönköping']
  },
  {
    id: '4',
    title: 'Debattartikel: "Värna det civila samhället"',
    date: '2023-10-10',
    category: 'Opinion',
    excerpt: 'Vår partiledare Anna Andersson skriver i Dagens Nyheter om varför föreningslivet och kyrkorna spelar en avgörande roll för integrationen.',
    imageUrl: 'https://picsum.photos/id/237/600/400',
    tags: ['Civilsamhälle', 'Integration', 'Debatt']
  },
  {
    id: '5',
    title: 'Lokala framgångar i Småland',
    date: '2023-10-05',
    category: 'Lokalt',
    excerpt: 'Kristna Familjepartiet har fått igenom sitt förslag om vårdnadsbidrag i flera kommuner. En seger för valfriheten.',
    imageUrl: 'https://picsum.photos/id/250/600/400',
    tags: ['Småland', 'Vårdnadsbidrag', 'Kommunpolitik']
  },
  {
    id: '6',
    title: 'Vi söker fler volontärer',
    date: '2023-09-28',
    category: 'Engagemang',
    excerpt: 'Vill du vara med och göra skillnad? Vi startar nu upp våra lokala kampanjteam inför kyrkovalet och riksdagsvalet.',
    imageUrl: 'https://picsum.photos/id/338/600/400',
    tags: ['Volontär', 'Kampanj', 'Valarbete']
  }
];

export const PRODUCTS: Product[] = [
  { id: '1', name: 'T-shirt - KFP Logo', price: 199, imageUrl: 'https://picsum.photos/id/30/300/300', category: 'Kläder' },
  { id: '2', name: 'Tygkasse - För Familjen', price: 99, imageUrl: 'https://picsum.photos/id/42/300/300', category: 'Accessoarer' },
  { id: '3', name: 'Pin - Partimärket', price: 29, imageUrl: 'https://picsum.photos/id/56/300/300', category: 'Accessoarer' },
  { id: '4', name: 'Mugg - Morgonkaffe', price: 89, imageUrl: 'https://picsum.photos/id/30/300/300', category: 'Hem' },
];

export const POLICIES: PolicyArea[] = [
  {
    id: 'familj',
    title: 'Familj & Barn',
    description: 'Trygga familjer bygger ett tryggt samhälle.',
    points: ['Valfrihet i barnomsorgen', 'Ökat barnbidrag', 'Stärkt föräldrastöd'],
    icon: Home
  },
  {
    id: 'vard',
    title: 'Vård & Omsorg',
    description: 'En vård med människan i centrum, från livets början till slut.',
    points: ['Ingen ska dö ensam', 'Fler vårdplatser', 'Värdig äldreomsorg'],
    icon: Heart
  },
  {
    id: 'trygghet',
    title: 'Lag & Rätt',
    description: 'Ett rättssamhälle där offer får upprättelse.',
    points: ['Skärpta straff', 'Förebyggande arbete', 'Stöd till brottsoffer'],
    icon: Shield
  },
  {
    id: 'miljo',
    title: 'Förvaltarskap',
    description: 'Vi ska förvalta skapelsen för kommande generationer.',
    points: ['Hållbar energi', 'Levande landsbygd', 'Cirkulär ekonomi'],
    icon: Leaf
  },
  {
    id: 'skola',
    title: 'Skola & Bildning',
    description: 'En skola som förmedlar kunskap och värderingar.',
    points: ['Ordning och reda', 'Lärarledd undervisning', 'Etik i skolan'],
    icon: BookOpen
  },
  {
    id: 'civilsamhalle',
    title: 'Civilsamhälle',
    description: 'Ett starkt samhälle behöver starka gemenskaper.',
    points: ['Stöd till idrotten', 'Värna föreningslivet', 'Religionsfrihet'],
    icon: Users
  }
];