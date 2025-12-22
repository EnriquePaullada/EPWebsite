import React from 'react';
import { motion } from 'framer-motion';
import { Award, Briefcase, GraduationCap , TrendingDown } from 'lucide-react';

const ProofBar = () => {
  const stats = [
    {
      icon: Briefcase,
      number: "10 YEARS AT FORD",
      label: "Shipped operation-critical systems and led business key projects in a Fortune 50 environment.",
    },
    {
      icon: Award,
      number: "8x INNOVATION PODIUMS",
      label: "Led 8 top-performing teams in national & global innovation competitions; co-inventor on a granted US Patent.",
    },
    {
      icon: GraduationCap ,
      number: "MIT CERTIFIED",
      label: "Strategic training in AI Product Design and the application of Data Science to drive high-value business outcomes at MIT.",
    },
    {
      icon: TrendingDown,
      number: "BUDGET OPTIMIZATION",
      label: "Delivered key infrastructure and IT asset projects up to 80% under budget through strategic negotiation and technical optimization.",
    },
  ];

  return (
    <section className="bg-light-bg py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            // Determine dynamic font size for specific card to improve alignment
            const numberFontSizeClass = stat.number === "8x INNOVATION PODIUMS" ? "text-2xl" : "text-3xl";
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg p-8 shadow-md hover:shadow-xl transition-all transform hover:-translate-y-1 flex flex-col"
              >
                <Icon className="w-10 h-10 text-gold mb-4" />
                <div className="flex-grow">
                  <div className={`heading-serif ${numberFontSizeClass} font-bold text-navy mb-2 min-h-[72px] flex items-center`}>
                    {stat.number}
                  </div>
                  <p className="ui-sans text-sm text-gray-600 leading-relaxed">
                    {stat.label}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProofBar;