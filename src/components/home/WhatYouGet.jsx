import React from 'react';
import { motion } from 'framer-motion';
import { Target, MessageCircle, TrendingUp, Layers } from 'lucide-react';
const WhatYouGet = () => {
  const points = [{
    icon: Target,
    headline: "Build → Measure → Learn",
    body: "Together we'll ship working solutions in weeks, not months, then iterate on real user behavior."
  }, {
    icon: MessageCircle,
    headline: "Business-Fluent Technical Leadership",
    body: "Map business problems to the right solution whether that's tech, process, or just better communication."
  }, {
    icon: TrendingUp,
    headline: "Impact-Focused Prioritization",
    body: "No vanity projects or over-engineering. I ask \'will this move revenue, reduce costs, or unblock teams?\' not \'is this technically impressive?\'"
  }, {
    icon: Layers,
    headline: "Production-Grade AI Implementation",
    body: "Multi-agent AI systems and data infrastructure at Fortune 50 scale. SOTA systems with actionable metrics."
  }];
  return <section className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{
        opacity: 0,
        y: 30
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.8
      }} className="text-center mb-16">
          <h2 className="heading-serif text-4xl md:text-5xl font-bold text-navy">How I work</h2>
          <p className="body-serif text-xl text-gray-600 mt-4">
            The principles that drive my approach
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {points.map((point, index) => {
          const Icon = point.icon;
          return <motion.div key={index} initial={{
            opacity: 0,
            y: 30
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.5,
            delay: index * 0.15
          }} className="text-center p-6">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center">
                    <Icon className="w-8 h-8 text-gold" />
                  </div>
                </div>
                <h3 className="heading-serif text-xl font-bold text-navy mb-3">
                  {point.headline}
                </h3>
                <p className="ui-sans text-base text-gray-700 leading-relaxed">
                  {point.body}
                </p>
              </motion.div>;
        })}
        </div>
      </div>
    </section>;
};
export default WhatYouGet;