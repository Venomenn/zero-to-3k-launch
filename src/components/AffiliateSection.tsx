
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const AffiliateSection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="w-full md:w-1/2">
            <div className="relative">
              <div className="absolute -left-4 -top-4 w-24 h-24 bg-brand-blue/10 rounded-full"></div>
              <div className="absolute -right-4 -bottom-4 w-32 h-32 bg-brand-teal/10 rounded-full"></div>
              <div className="relative bg-white shadow-xl rounded-xl p-8 border border-gray-100">
                <div className="mb-4 pb-4 border-b border-gray-100">
                  <div className="bg-brand-blue/10 text-brand-blue font-semibold rounded-lg inline-block px-3 py-1 text-sm">
                    BundleBoost Affiliate Program
                  </div>
                  <h3 className="text-2xl font-bold mt-4">$50 Commission Per Sale</h3>
                  <p className="text-gray-600">Join our affiliate network and earn substantial commissions</p>
                </div>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Commission Rate:</span>
                    <span className="font-bold">40% - 50%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Cookie Duration:</span>
                    <span className="font-bold">60 Days</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Payment Method:</span>
                    <span className="font-bold">PayPal / Bank Transfer</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Payment Threshold:</span>
                    <span className="font-bold">$50</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Payment Frequency:</span>
                    <span className="font-bold">Monthly</span>
                  </div>
                </div>
                
                <Button className="w-full bg-brand-blue hover:bg-blue-800" asChild>
                  <Link to="/affiliate">Join Affiliate Program</Link>
                </Button>
              </div>
            </div>
          </div>
          
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Earn <span className="text-brand-blue">Passive Income</span> By Promoting Our Bundles
            </h2>
            <p className="text-xl text-gray-600 mb-6">
              Turn your audience into a revenue stream by recommending bundles they'll love.
            </p>
            
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 h-10 w-10 bg-brand-blue/10 rounded-full flex items-center justify-center text-brand-blue">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">High-Converting Offers</h3>
                  <p className="text-gray-600">Our bundles offer incredible value that makes them easy to promote and sell.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="flex-shrink-0 h-10 w-10 bg-brand-blue/10 rounded-full flex items-center justify-center text-brand-blue">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Marketing Materials</h3>
                  <p className="text-gray-600">Access ready-to-use promotional content, email templates, and social media posts.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="flex-shrink-0 h-10 w-10 bg-brand-blue/10 rounded-full flex items-center justify-center text-brand-blue">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Reliable Tracking</h3>
                  <p className="text-gray-600">Our advanced affiliate dashboard ensures all your referrals are properly tracked and credited.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AffiliateSection;
