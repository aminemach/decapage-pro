import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  FaIndustry, 
  FaHistory, 
  FaLandmark, 
  FaUtensils, 
  FaTools, 
  FaWater, 
  FaHome, 
  FaBuilding
} from 'react-icons/fa';
import './ServicesPage.scss';

// Import images
import ferImage from '../../assets/images/gallerie/fer2.jpeg';
import antiqueImage from '../../assets/images/gallerie/restauration-de-statue-en-bronze.jpg';
import pierreImage from '../../assets/images/gallerie/facadepiere.jpeg';

interface Service {
  id: number;
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
  image: string;
}

const ServicesPage: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const services: Service[] = [
    {
      id: 1,
      icon: FaIndustry({ size: 32 }),
      title: 'Décapage Fer et Métaux',
      description:
        'Notre laser haute précision permet de nettoyer avec efficacité tous les métaux oxydés par le temps et par la rouille. Idéal pour portails, grilles, radiateurs et véhicules.',
      features: [
        'Élimination complète de la rouille',
        'Préservation du métal sous-jacent',
        'Préparation parfaite avant peinture',
        'Nettoyage des soudures',
        'Restauration de pièces métalliques anciennes',
      ],
      image: ferImage,
    },
    {
      id: 2,
      icon: FaHistory({ size: 32 }),
      title: "Restauration d'Antiquité",
      description:
        "Nous pouvons nettoyer et restaurer vos objets d'art ou vos antiquités à l'aide de notre laser à faible puissance. Retrouvez l'éclat naturel de vos objets sans les endommager.",
      features: [
        "Nettoyage délicat des objets anciens",
        "Préservation des patines d'origine",
        "Élimination des vernis et peintures",
        "Traitement des meubles et objets de collection",
      ],
      image: antiqueImage,
    },
    {
      id: 3,
      icon: FaLandmark({ size: 32 }),
      title: 'Nettoyage de la Pierre',
      description:
        'Les pierres, façades et statues sont attaquées par la pollution. Le laser permet un nettoyage efficace, sans détérioration des matériaux comparé au sablage ou jet haute pression.',
      features: [
        'Élimination des salissures et pollution',
        'Nettoyage des façades en pierre',
        'Restauration de monuments et statues',
        'Préservation des détails et reliefs',
        'Nettoyage des pierres tombales',
      ],
      image: pierreImage,
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
    <div className="services-page">
      <div className="services-hero">
        <div className="container">
          <h1>Nos Services</h1>
          <p>
            Découvrez notre gamme complète de services de nettoyage et décapage par laser,
            adaptés à tous vos besoins professionnels et personnels.
          </p>
        </div>
      </div>

      <section className="services-list section">
        <div className="container">
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
                <div className="service-image">
                  <img src={service.image} alt={service.title} />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="services-cta section">
        <div className="container">
          <div className="cta-box">
            <h2>Besoin d'un Service Personnalisé ?</h2>
            <p>
              Nous adaptons nos services à vos besoins spécifiques. Contactez-nous pour discuter
              de votre projet et obtenir un devis gratuit.
            </p>
            <div className="cta-buttons">
              <a href="/contact" className="btn btn-primary">
                Demander un Devis
              </a>
              <a href="tel:0767271123" className="btn btn-outline">
                Appelez-nous
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
