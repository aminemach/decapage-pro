import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaIndustry, FaHistory, FaLandmark, FaUtensils } from 'react-icons/fa';
import './Services.scss';

interface Service {
  id: number;
  icon: React.ReactNode;
  title: string;
  description: string;
  link: string;
}

const Services: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const services: Service[] = [
    {
      id: 1,
      icon: FaIndustry({ size: 24 }),
      title: 'Décapage Fer et Métaux',
      description:
        'Notre laser haute précision permet de nettoyer avec efficacité tous les métaux oxydés par le temps et par la rouille. Idéal pour portails, grilles, radiateurs et véhicules.',
      link: '/services/decapage-metaux',
    },
    {
      id: 2,
      icon: FaHistory({ size: 24 }),
      title: "Restauration d'Antiquité",
      description:
        "Nous pouvons nettoyer et restaurer vos objets d'art ou vos antiquités à l'aide de notre laser à faible puissance. Retrouvez l'éclat naturel de vos objets.",
      link: '/services/restauration-antiquite',
    },
    {
      id: 3,
      icon: FaLandmark({ size: 24 }),
      title: 'Nettoyage de la Pierre',
      description:
        'Les pierres, façades et statues sont attaquées par la pollution. Le laser permet un nettoyage efficace, sans détérioration des matériaux comparé au sablage ou jet haute pression.',
      link: '/services/nettoyage-pierre',
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
    <section className="services section" id="services">
      <div className="container">
        <div className="section-header text-center">
          <h2>Nos Services</h2>
          <p>
            Découvrez notre gamme complète de services de nettoyage et décapage par laser,
            adaptés à tous vos besoins professionnels et personnels.
          </p>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="services-grid"
        >
          {services.map((service) => (
            <motion.div key={service.id} className="service-card" variants={itemVariants}>
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <Link to={service.link} className="service-link">
                En savoir plus
              </Link>
            </motion.div>
          ))}
        </motion.div>

        <div className="text-center mt-5">
          <Link to="/services" className="btn btn-primary">
            Voir Tous Nos Services
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;
