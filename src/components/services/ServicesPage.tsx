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
  FaBuilding,
  FaWrench
} from 'react-icons/fa';
import './ServicesPage.scss';

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
      image: 'https://via.placeholder.com/600x400?text=Décapage+Métaux',
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
      image: 'https://via.placeholder.com/600x400?text=Restauration+Antiquité',
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
      image: 'https://via.placeholder.com/600x400?text=Nettoyage+Pierre',
    },
    {
      id: 4,
      icon: FaUtensils({ size: 32 }),
      title: 'Nettoyage de Cuisine',
      description:
        'Notre technologie laser est capable de brûler toutes les huiles et graisses de cuisson incrustées dans vos hottes, grills et plaques de cuisson professionnelles.',
      features: [
        'Élimination des graisses incrustées',
        'Nettoyage des hottes de cuisine',
        'Dégraissage des équipements de cuisson',
        'Nettoyage des fours professionnels',
        'Traitement hygiénique sans produits chimiques',
      ],
      image: 'https://via.placeholder.com/600x400?text=Nettoyage+Cuisine',
    },
    {
      id: 5,
      icon: FaTools({ size: 32 }),
      title: 'Préparation des Surfaces',
      description:
        'Notre technologie laser permet de préparer efficacement les surfaces avant peinture, vernissage ou tout autre traitement de surface, garantissant une adhérence optimale.',
      features: [
        'Préparation avant peinture ou vernissage',
        'Élimination des revêtements anciens',
        'Nettoyage des surfaces sans abrasion',
        'Préparation de surfaces métalliques',
        'Traitement de précision',
      ],
      image: 'https://via.placeholder.com/600x400?text=Préparation+Surfaces',
    },
    {
      id: 6,
      icon: FaWater({ size: 32 }),
      title: 'Élimination de la Rouille',
      description:
        'Notre laser élimine efficacement la rouille sur tous types de métaux sans endommager le matériau sous-jacent, idéal pour les pièces de valeur ou historiques.',
      features: [
        'Élimination totale de la rouille',
        'Préservation du métal d\'origine',
        'Traitement de précision',
        'Idéal pour les pièces mécaniques',
        'Solution écologique sans produits chimiques',
      ],
      image: 'https://via.placeholder.com/600x400?text=Élimination+Rouille',
    },
    {
      id: 7,
      icon: FaHome({ size: 32 }),
      title: 'Ravalement de Façades',
      description:
        'Notre technologie laser permet de nettoyer et ravaler les façades de bâtiments sans les endommager, éliminant pollution, mousses et lichens de manière écologique.',
      features: [
        'Nettoyage de façades en pierre',
        'Élimination des mousses et lichens',
        'Traitement respectueux des matériaux',
        'Solution écologique sans eau ni produits chimiques',
        'Résultat durable et esthétique',
      ],
      image: 'https://via.placeholder.com/600x400?text=Ravalement+Façades',
    },
    {
      id: 8,
      icon: FaBuilding({ size: 32 }),
      title: 'Restauration de Monuments',
      description:
        'Spécialistes de la restauration de monuments historiques et statues, nous utilisons notre technologie laser pour préserver le patrimoine tout en éliminant les dégradations.',
      features: [
        'Restauration de monuments historiques',
        'Nettoyage de statues et sculptures',
        'Préservation des détails et reliefs',
        'Élimination des graffitis',
        'Approche respectueuse du patrimoine',
      ],
      image: 'https://via.placeholder.com/600x400?text=Restauration+Monuments',
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
                <div className="service-features">
                  <h4>Caractéristiques</h4>
                  <ul>
                    {service.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
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
