import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaQuoteLeft } from 'react-icons/fa';
import './Testimonials.scss';

interface Testimonial {
  id: number;
  name: string;
  location: string;
  text: string;
  image: string;
  project: string;
}

const Testimonials: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: 'Lucien',
      location: 'Amiens',
      text: 'Service impeccable ! Mon portail en fer forgé a retrouvé son éclat d\'antan grâce au décapage laser. Je recommande vivement cette entreprise pour leur professionnalisme et la qualité de leur travail.',
      image: 'https://via.placeholder.com/100x100',
      project: 'Nettoyage de portail',
    },
    {
      id: 2,
      name: 'Pascal',
      location: 'Lille',
      text: 'J\'ai fait appel à leurs services pour restaurer mon café racer vintage. Le résultat est bluffant ! La rouille a complètement disparu sans endommager le métal. Un travail de précision remarquable.',
      image: 'https://via.placeholder.com/100x100',
      project: 'Restauration moto',
    },
    {
      id: 3,
      name: 'M. et Mme S.',
      location: 'Beauvais',
      text: 'Notre façade en pierre était noircie par la pollution. Grâce au nettoyage laser, elle a retrouvé sa couleur d\'origine sans aucun dommage. Équipe sérieuse et efficace, nous sommes très satisfaits.',
      image: 'https://via.placeholder.com/100x100',
      project: 'Nettoyage façade',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section className="testimonials section">
      <div className="container">
        <div className="section-header text-center">
          <h2>Ce Que Disent Nos Clients</h2>
          <p>
            Découvrez les témoignages de nos clients satisfaits par la qualité de nos services de décapage et nettoyage par laser.
          </p>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="testimonials-grid"
        >
          {testimonials.map((testimonial) => (
            <motion.div key={testimonial.id} className="testimonial-card" variants={itemVariants}>
              <div className="quote-icon">
                {FaQuoteLeft({})}
              </div>
              <p className="testimonial-text">{testimonial.text}</p>
              <div className="testimonial-author">
                <div className="author-image">
                  <img src={testimonial.image} alt={testimonial.name} />
                </div>
                <div className="author-info">
                  <h4>{testimonial.name}</h4>
                  <p>{testimonial.location}</p>
                  <span className="project-type">{testimonial.project}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
