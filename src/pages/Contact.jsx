import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import ContactForm from '@/components/contact/ContactForm';
import ContactInfo from '@/components/contact/ContactInfo';

const Contact = () => {
  return (
    <>
      <Helmet>
        <title>Contact - Enrique Paullada</title>
        <meta name="description" content="Get in touch with Enrique Paullada to discuss revenue operations projects, technical consulting, or career opportunities." />
      </Helmet>
      <div className="pt-20 min-h-screen bg-[#F7FAFC]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h1 className="heading-serif text-5xl md:text-6xl font-bold text-[#1A2A40] mb-4">
              Let's Build Something
            </h1>
            <p className="body-serif text-xl text-gray-600">
              Interested in working together? Drop me a message below.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ContactForm />
            <ContactInfo />
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;