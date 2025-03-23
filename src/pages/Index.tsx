
import React from 'react';
import Hero from '../components/home/Hero';
import ImpactMetrics from '../components/home/ImpactMetrics';
import Programs from '../components/home/Programs';
import GetInvolved from '../components/home/GetInvolved';
import Testimonials from '../components/home/Testimonials';
import DonatePreview from '../components/home/DonatePreview';
import Partners from '../components/home/Partners'; 
import SuccessStoriesPreview from '../components/home/SuccessStoriesPreview';
import NewsletterSignup from '../components/common/NewsletterSignup';
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
        <SuccessStoriesPreview />
        <GetInvolved />
        <Testimonials />
        <DonatePreview />
        <Partners />
        <div className="container mx-auto px-4 py-16 bg-green-50">
          <div className="max-w-md mx-auto">
            <NewsletterSignup />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
