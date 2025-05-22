
import React from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import FeatureSection from '@/components/FeatureSection';
import BundlesSection from '@/components/BundlesSection';
import TestimonialSection from '@/components/TestimonialSection';
import HowItWorksSection from '@/components/HowItWorksSection';
import NewsletterSection from '@/components/NewsletterSection';
import PartnerCTASection from '@/components/PartnerCTASection';
import AffiliateSection from '@/components/AffiliateSection';
import FaqSection from '@/components/FaqSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main>
        <HeroSection />
        <FeatureSection />
        <BundlesSection />
        <HowItWorksSection />
        <TestimonialSection />
        <PartnerCTASection />
        <AffiliateSection />
        <FaqSection />
        <NewsletterSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
