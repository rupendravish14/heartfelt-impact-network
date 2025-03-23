
import React from 'react';
import Hero from '../components/home/Hero';
import ImpactMetrics from '../components/home/ImpactMetrics';
import Programs from '../components/home/Programs';
import GetInvolved from '../components/home/GetInvolved';
import Testimonials from '../components/home/Testimonials';
import DonatePreview from '../components/home/DonatePreview';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <ImpactMetrics />
        <Programs />
        <GetInvolved />
        <Testimonials />
        <DonatePreview />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
