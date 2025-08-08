import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaCheck, FaAward, FaRecycle, FaHandshake } from 'react-icons/fa';
import './AboutPage.scss';

// Import real images from gallery
import jetlaserImage from '../../assets/images/gallerie/JETLASER_01.jpg';
import technologiesImage from '../../assets/images/gallerie/technologies.jpg';

interface Value {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const AboutPage: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.01,
    initialInView: true,
  });

  const values: Value[] = [
    {
      icon: FaCheck({ size: 24 }),
      title: 'Qualité',
      description: 'Nous nous engageons à fournir un travail de la plus haute qualité, avec une attention particulière aux détails.',
    },
    {
      icon: FaAward({ size: 24 }),
      title: 'Expertise',
      description: 'Notre équipe possède une expertise approfondie dans les techniques de décapage et nettoyage par laser.',
    },
    {
      icon: FaRecycle({ size: 24 }),
      title: 'Écologie',
      description: 'Nos méthodes de nettoyage sont respectueuses de l\'environnement, sans produits chimiques nocifs.',
    },
    {
      icon: FaHandshake({ size: 24 }),
      title: 'Service Client',
      description: 'Nous plaçons la satisfaction client au cœur de notre activité, avec un service personnalisé et attentif.',
    },
  ];

  return (
    <div className="about-page">
      <div className="about-hero">
        <div className="container">
          <h1>À Propos de Nous</h1>
          <p>
            Découvrez notre entreprise spécialisée dans le nettoyage et décapage par laser,
            au service des particuliers et professionnels dans la région de Mahdia Ksour Essef.
          </p>
        </div>
      </div>

      <section className="about-intro section">
        <div className="container">
          <div className="about-grid">
            <motion.div
              ref={ref}
              initial={{ opacity: 1, x: 0 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="about-content"
            >
              <h2>Notre Histoire</h2>
              <p>
                Fondée en 2023, notre entreprise est née d'une passion pour la restauration et la préservation des objets et surfaces. 
                Face aux méthodes traditionnelles souvent agressives et polluantes, nous avons choisi d'investir dans la technologie 
                laser de pointe pour offrir des solutions de nettoyage et décapage plus efficaces et respectueuses de l'environnement.
              </p>
              <p>
                Au fil des années, nous avons développé une expertise unique dans le traitement de divers matériaux : métaux, pierre, 
                bois, et bien d'autres. Notre savoir-faire nous permet aujourd'hui d'intervenir aussi bien auprès des particuliers 
                pour la restauration d'objets personnels que des professionnels pour l'entretien d'équipements industriels.
              </p>
              <p>
              Basés à Ksour Essef Mahdia, nous sommes présents dans toute la région de Mahdia et toute la Tunisie, mettant notre savoir-faire et notre expertise au service de vos projets de nettoyage et de restauration.
              </p>
            </motion.div>
            
            <motion.div
              ref={ref}
              initial={{ opacity: 1, x: 0 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="about-image"
            >
              <img src={jetlaserImage} alt="Notre équipement laser professionnel" />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="about-values section">
        <div className="container">
          <div className="section-header text-center">
            <h2>Nos Valeurs</h2>
            <p>Les principes qui guident notre travail au quotidien</p>
          </div>
          
          <div className="values-grid">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 1, y: 0 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="value-card"
              >
                <div className="value-icon">{value.icon}</div>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="about-technology section">
        <div className="container">
          <div className="about-grid reverse">
            <motion.div
              ref={ref}
              initial={{ opacity: 1, x: 0 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="about-content"
            >
              <h2>Notre Technologie</h2>
              <p>
                Au cœur de notre activité se trouve notre technologie laser de pointe. Contrairement aux méthodes traditionnelles 
                comme le sablage ou les produits chimiques, notre laser offre une précision inégalée et un respect total des 
                matériaux traités.
              </p>
              <p>
                Le principe est simple mais révolutionnaire : le faisceau laser vaporise instantanément les contaminants 
                (peinture, rouille, saleté) sans endommager le matériau sous-jacent. Cette approche permet :
              </p>
              <ul>
                <li>Un nettoyage de précision, même sur les surfaces délicates</li>
                <li>Aucun résidu ni déchet secondaire à traiter</li>
                <li>Une absence totale de produits chimiques</li>
                <li>Une consommation d'eau quasi nulle</li>
                <li>Des résultats immédiats et durables</li>
              </ul>
              <p>
                Nous investissons continuellement dans la formation de notre équipe et l'amélioration de notre équipement 
                pour rester à la pointe de cette technologie innovante.
              </p>
            </motion.div>
            
            <motion.div
              ref={ref}
              initial={{ opacity: 1, x: 0 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="about-image"
            >
              <img src={technologiesImage} alt="Notre technologie laser avancée" />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="about-cta section">
        <div className="container">
          <div className="cta-box">
            <h2>Prêt à Découvrir la Différence?</h2>
            <p>
              Contactez-nous dès aujourd'hui pour discuter de votre projet et découvrir comment 
              notre technologie laser peut vous aider à obtenir des résultats exceptionnels.
            </p>
            <div className="cta-buttons">
              <a href="/contact" className="btn btn-primary">
                Demander un Devis
              </a>
              <a href="/gallery" className="btn btn-outline">
                Voir Nos Réalisations
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
