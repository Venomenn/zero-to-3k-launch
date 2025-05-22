
import React from 'react';
import { Button } from '@/components/ui/button';
import BundleCard from './BundleCard';
import { Link } from 'react-router-dom';

// Mock data for bundles
const featuredBundles = [
  {
    id: 'marketing-bundle',
    title: 'Ultimate Marketing Suite',
    description: 'Everything you need to grow your online presence and drive conversions.',
    salePrice: 99,
    regularPrice: 1996,
    discount: 95,
    expiresIn: '3 days',
    buyers: 437,
    imageSrc: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    toolCount: 5
  },
  {
    id: 'productivity-bundle',
    title: 'Productivity Powerhouse',
    description: 'Streamline your workflow and get more done with these premium tools.',
    salePrice: 79,
    regularPrice: 1250,
    discount: 94,
    expiresIn: '5 days',
    buyers: 312,
    imageSrc: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    toolCount: 4
  },
  {
    id: 'design-bundle',
    title: 'Creator\'s Design Pack',
    description: 'Professional design and creative tools for content creators and marketers.',
    salePrice: 129,
    regularPrice: 2499,
    discount: 95,
    expiresIn: '7 days',
    buyers: 283,
    imageSrc: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    toolCount: 6
  },
];

const BundlesSection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Featured Bundles</h2>
            <p className="text-xl text-gray-600">
              Limited-time offers on premium software packages
            </p>
          </div>
          <div className="mt-6 md:mt-0">
            <Button variant="outline" asChild>
              <Link to="/bundles">View All Bundles</Link>
            </Button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredBundles.map((bundle) => (
            <BundleCard
              key={bundle.id}
              id={bundle.id}
              title={bundle.title}
              description={bundle.description}
              salePrice={bundle.salePrice}
              regularPrice={bundle.regularPrice}
              discount={bundle.discount}
              expiresIn={bundle.expiresIn}
              buyers={bundle.buyers}
              imageSrc={bundle.imageSrc}
              toolCount={bundle.toolCount}
            />
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold mb-4">Don't Miss Out on These Limited-Time Offers</h3>
          <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
            Join thousands of smart entrepreneurs who are saving thousands of dollars on premium software tools.
          </p>
          <Button size="lg" className="bg-brand-blue hover:bg-blue-800" asChild>
            <Link to="/bundles">Browse All Bundles</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BundlesSection;
