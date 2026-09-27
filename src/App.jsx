import React from 'react';
import { Analytics } from '@vercel/analytics/react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ConferenceInfo from './components/ConferenceInfo';
import ThemeSection from './components/ThemeSection';
import Registration from './components/Registration';
import Location from './components/Location';
import Contact from './components/Contact';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F8F9FA] text-[#111827] antialiased">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <ConferenceInfo />
        <ThemeSection />
        <Registration />
        <Location />
        <Contact />
        <FinalCTA />
      </main>
      <Footer />
      <Analytics />
    </div>
  );
}
