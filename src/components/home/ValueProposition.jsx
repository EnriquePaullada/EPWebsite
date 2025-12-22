import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const ValueProposition = () => {
  return (
    <section className="py-20 md:py-32 bg-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="heading-serif text-4xl md:text-5xl font-bold">
            We'll Build Great Things Together If...
          </h2>
          <p className="body-serif text-xl text-gray-300 mt-4">
            Culture fit matters. Here's how we'll thrive
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* YouTube Video Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="relative aspect-video bg-black rounded-lg overflow-hidden shadow-2xl">
              <iframe 
                className="w-full h-full"
                src="https://www.youtube.com/embed/-k1kXBZTCYo"
                title="Culture fit matters. Here's how we'll thrive"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <p className="ui-sans text-sm text-gray-400 mt-4">
              60-second honest conversation about culture fit
            </p>
          </motion.div>

          {/* Three Principles */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="space-y-4">
              <div className="flex items-start">
                <CheckCircle2 className="w-6 h-6 text-green-400 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-bold ui-sans text-lg">We prioritize shipping over planning</h3>
                  <p className="text-gray-300">
                    When we can test ideas quickly and iterate on real feedback. No endless 
                    planning cycles—just build, measure, learn.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <CheckCircle2 className="w-6 h-6 text-green-400 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-bold ui-sans text-lg">We value direct feedback</h3>
                  <p className="text-gray-300">
                    When we can share honest input without sugarcoating. Clear communication 
                    propels us, walking on eggshells distracts us.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <CheckCircle2 className="w-6 h-6 text-green-400 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-bold ui-sans text-lg">We measure impact, not activity</h3>
                  <p className="text-gray-300">
                    When results matter more than looking busy. We remove waste at its root, 
                    or we'll be removed from the market.
                  </p>
                </div>
              </div>
            </div>
            <div className="border-t border-gray-700 my-6"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;