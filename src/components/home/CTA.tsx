import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaArrowRight } from 'react-icons/fa';
import './CTA.scss';

const CTA: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="cta">
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="cta-content"
        >
          <div className="cta-text">
            <h2>Prêt à Redonner Vie à Vos Objets ?</h2>
            <p>
              Contactez-nous dès aujourd'hui pour un devis gratuit et découvrez comment notre technologie laser peut transformer vos métaux, pierres et antiquités.
            </p>
          </div>
          <div className="cta-buttons">
            <Link to="/contact" className="btn btn-primary">
              Demander un Devis {FaArrowRight({ size: 16 })}
            </Link>
            <a href="tel:0767271123" className="btn btn-outline-light">
              Appelez-nous
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
