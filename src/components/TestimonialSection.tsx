
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const testimonials = [
  {
    id: 1,
    text: "BundleBoost has completely transformed how I run my agency. I got tools worth $5,000+ for just $199. The ROI is incredible!",
    author: "Sarah Johnson",
    position: "Digital Marketing Agency Owner",
    image: "https://randomuser.me/api/portraits/women/32.jpg"
  },
  {
    id: 2,
    text: "As a solopreneur, I never thought I could afford enterprise-level software. Thanks to BundleBoost, I now use the same tools as my bigger competitors.",
    author: "Michael Chen",
    position: "E-commerce Entrepreneur",
    image: "https://randomuser.me/api/portraits/men/46.jpg"
  },
  {
    id: 3,
    text: "The customer support is exceptional! When I had questions about integrating one of the tools, their team went above and beyond to help me.",
    author: "Emily Rodriguez",
    position: "Content Creator",
    image: "https://randomuser.me/api/portraits/women/65.jpg"
  }
];

const TestimonialSection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Our Customers Say</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join thousands of satisfied customers who've transformed their businesses with our SaaS bundles.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="border-gray-200">
              <CardContent className="pt-6">
                <div className="flex flex-col h-full">
                  <div className="mb-6">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg key={star} className="w-5 h-5 text-yellow-400 inline-block mr-1" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  
                  <p className="text-gray-700 mb-8 flex-grow">"{testimonial.text}"</p>
                  
                  <div className="flex items-center">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.author} 
                      className="w-12 h-12 rounded-full mr-4 object-cover"
                    />
                    <div>
                      <p className="font-bold text-gray-900">{testimonial.author}</p>
                      <p className="text-sm text-gray-500">{testimonial.position}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
