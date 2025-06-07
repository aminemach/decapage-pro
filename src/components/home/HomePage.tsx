import React from 'react';
import Hero from './Hero';
import Services from './Services';
import Gallery from './Gallery';
import Testimonials from './Testimonials';
import CTA from './CTA';

const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <Services />
      <Gallery />
      <Testimonials />
      <CTA />
    </>
  );
};

export default HomePage;
