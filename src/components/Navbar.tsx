
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <nav className="w-full bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-6">
          <Link to="/" className="flex items-center gap-2 font-bold text-2xl text-brand-blue">
            <span>BundleBoost</span>
          </Link>
        </div>
        
        <div className="hidden md:flex items-center space-x-6">
          <Link to="/bundles" className="text-gray-700 hover:text-brand-blue transition-colors">
            Browse Bundles
          </Link>
          <Link to="/how-it-works" className="text-gray-700 hover:text-brand-blue transition-colors">
            How It Works
          </Link>
          <Link to="/partner" className="text-gray-700 hover:text-brand-blue transition-colors">
            For Partners
          </Link>
          <Link to="/affiliate" className="text-gray-700 hover:text-brand-blue transition-colors">
            Affiliate Program
          </Link>
        </div>
        
        <div className="flex items-center gap-4">
          <Button variant="outline" asChild>
            <Link to="/login">Login</Link>
          </Button>
          <Button className="bg-brand-blue hover:bg-blue-800 transition-colors" asChild>
            <Link to="/signup">Join Free</Link>
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
