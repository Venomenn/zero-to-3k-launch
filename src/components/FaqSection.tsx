
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What is a SaaS bundle?",
    answer: "A SaaS bundle is a collection of premium software-as-a-service tools sold together at a significant discount compared to their individual retail prices. Our bundles typically include 3-7 complementary tools focused on helping businesses in specific areas like marketing, design, productivity, etc."
  },
  {
    question: "How long do I have access to the tools in the bundle?",
    answer: "Most tools in our bundles come with lifetime access to the specified plan tier, meaning you pay once and can use them forever without recurring fees. Some tools may have specific terms (like 1-year or 3-year access), which will be clearly marked in the bundle description."
  },
  {
    question: "Are these tools fully featured or stripped-down versions?",
    answer: "All tools included in our bundles are fully-featured commercial versions. The specific plan tier (e.g., Pro, Business) will be clearly indicated in each bundle description, so you know exactly what features you're getting."
  },
  {
    question: "How do I access the tools after purchasing?",
    answer: "After completing your purchase, you'll receive an email with instructions and unique access codes for each tool in your bundle. You can also access these details anytime from your BundleBoost dashboard."
  },
  {
    question: "Do you offer refunds if I'm not satisfied?",
    answer: "Yes, we offer a 30-day money-back guarantee. If you're not satisfied with your purchase for any reason, contact our support team within 30 days of your purchase for a full refund."
  },
  {
    question: "Can I purchase bundles for my team or clients?",
    answer: "Absolutely! Many of our customers are agencies and businesses that purchase bundles for their teams or clients. Most tools allow multiple seats or users, but specific limitations will be noted in the bundle details."
  },
  {
    question: "How often do you release new bundles?",
    answer: "We typically release 1-2 new bundles every week. Each bundle is available for a limited time only, usually 7-14 days or until a certain number of sales is reached."
  },
  {
    question: "How do I list my SaaS product in a bundle?",
    answer: "If you're a SaaS company interested in featuring your product in one of our bundles, visit our Partner page or contact us directly. We'll get back to you with all the information about our partnership opportunities."
  }
];

const FaqSection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get answers to common questions about our SaaS bundles, purchases, and partnerships.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border border-gray-200 rounded-lg overflow-hidden">
                <AccordionTrigger className="px-6 py-4 hover:bg-gray-50 transition-colors text-left font-medium text-lg">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 py-4 text-gray-600">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
