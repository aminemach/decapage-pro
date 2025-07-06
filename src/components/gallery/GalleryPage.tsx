import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import './GalleryPage.scss';

// Import gallery images
import portailImage from '../../assets/images/gallerie/publication-portail-av-apr.jpg';
import antiqueImage from '../../assets/images/gallerie/antique2.jpeg';
import facadeImage from '../../assets/images/gallerie/.facadepiere2.jpeg';
import ferImage from '../../assets/images/gallerie/fer1.jpeg';
import radiateurImage from '../../assets/images/gallerie/Laquage-radiateurs-fontes-(4).jpg';
import pierreImage from '../../assets/images/gallerie/Nettoyage-avant-apres-dune-allee-en-pierre-exterieure.jpg';
import fer2Image from '../../assets/images/gallerie/fer3.jpeg';
import grilleImage from '../../assets/images/gallerie/Peinture_ferronnerie_portail_et_barrieres_v2.jpg';
import terrasseImage from '../../assets/images/gallerie/renovation-facade-pierre.jpg';
import meubleImage from '../../assets/images/gallerie/forgé.jpeg';
import cabineImage from '../../assets/images/gallerie/cabine-de-peinture-radiateurs-06.jpg';
import restaurationImage from '../../assets/images/gallerie/restauration-facade-pierre-briquette.jpg';

interface GalleryItem {
  id: number;
  category: string;
  title: string;
  description: string;
  image: string;
  detailedDescription?: string;
  additionalImages?: string[];
  specifications?: { label: string; value: string }[];
  processDescription?: string;
}

const GalleryPage: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  const openLightbox = (item: GalleryItem) => {
    setSelectedImage(item);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'unset';
  };

  // Close lightbox on Escape key
  React.useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeLightbox();
      }
    };

    if (selectedImage) {
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [selectedImage]);

  const galleryItems: GalleryItem[] = [
    {
      id: 1,
      category: 'metal',
      title: 'Restauration de Portail en Fer Forgé',
      description: 'Décapage et restauration complète d\'un portail en fer forgé avec élimination de la rouille et application d\'une nouvelle protection.',
      image: portailImage,
      detailedDescription: 'Restauration professionnelle d\'un portail en fer forgé incluant le décapage laser, le traitement antirouille et la finition protectrice.',
      processDescription: 'Décapage laser → Traitement antirouille → Apprêt → Peinture de finition'
    },
    {
      id: 2,
      category: 'antique',
      title: 'Restauration d\'Antiquités',
      description: 'Restauration délicate d\'objets anciens et de meubles d\'époque avec préservation de leur authenticité.',
      image: antiqueImage,
      detailedDescription: 'Restauration respectueuse du patrimoine avec techniques adaptées à chaque matériau et époque.',
      processDescription: 'Évaluation → Décapage doux → Traitement conservateur → Finition d\'époque'
    },
    {
      id: 3,
      category: 'stone',
      title: 'Restauration de Façade en Pierre',
      description: 'Nettoyage et restauration de façades en pierre naturelle avec élimination des salissures et mousses.',
      image: facadeImage,
      detailedDescription: 'Nettoyage laser de façades en pierre permettant de retrouver l\'aspect d\'origine sans endommager le matériau.',
      processDescription: 'Diagnostic → Nettoyage laser → Traitement hydrofuge → Protection finale'
    },
    {
      id: 4,
      category: 'metal',
      title: 'Décapage de Pièces Mécaniques',
      description: 'Décapage précis de pièces mécaniques et industrielles pour restauration ou maintenance.',
      image: ferImage,
      detailedDescription: 'Décapage laser haute précision pour pièces mécaniques sans altération des dimensions.',
      processDescription: 'Préparation → Décapage laser → Contrôle qualité → Protection anticorrosion'
    },
    {
      id: 5,
      category: 'metal',
      title: 'Décapage de Radiateur en Fonte',
      description: 'Élimination de multiples couches de peinture sur radiateurs anciens en fonte pour restauration complète.',
      image: radiateurImage,
      detailedDescription: 'Décapage complet de radiateurs en fonte avec préservation des détails décoratifs.',
      processDescription: 'Démontage → Décapage laser → Réparations → Apprêt → Laquage final'
    },
    {
      id: 6,
      category: 'stone',
      title: 'Nettoyage de Pierre Extérieure',
      description: 'Nettoyage professionnel de surfaces en pierre extérieures, terrasses et allées.',
      image: pierreImage,
      detailedDescription: 'Nettoyage laser de surfaces en pierre extérieures pour éliminer salissures, mousses et lichens.',
      processDescription: 'Préparation → Nettoyage laser → Rinçage → Traitement protecteur'
    },
    {
      id: 7,
      category: 'metal',
      title: 'Décapage Fer et Métaux',
      description: 'Décapage professionnel de tous types de métaux ferreux avec élimination complète de la corrosion.',
      image: fer2Image,
      detailedDescription: 'Décapage laser pour métaux ferreux permettant une préparation optimale avant traitement.',
      processDescription: 'Évaluation → Décapage laser → Décontamination → Traitement anticorrosion'
    },
    {
      id: 8,
      category: 'metal',
      title: 'Restauration de Grilles et Ferronnerie',
      description: 'Restauration complète de grilles, balcons et éléments de ferronnerie décorative.',
      image: grilleImage,
      detailedDescription: 'Restauration de ferronnerie d\'art avec préservation des détails ornementaux.',
      processDescription: 'Démontage → Décapage → Réparations → Traitement → Finition décorative'
    },
    {
      id: 9,
      category: 'stone',
      title: 'Nettoyage de Terrasse Noircie',
      description: 'Nettoyage de terrasses en pierre noircies par la pollution et les intempéries.',
      image: terrasseImage,
      detailedDescription: 'Nettoyage laser de terrasses en pierre pour retrouver leur couleur d\'origine.',
      processDescription: 'Préparation → Nettoyage laser → Traitement antitache → Protection durable'
    },
    {
      id: 10,
      category: 'antique',
      title: 'Restauration de Meubles Anciens',
      description: 'Décapage et restauration de meubles anciens avec respect des techniques traditionnelles.',
      image: meubleImage,
      detailedDescription: 'Restauration de meubles d\'époque avec techniques adaptées à chaque essence de bois.',
      processDescription: 'Évaluation → Décapage doux → Réparations → Finition traditionnelle'
    }
  ];

  const filteredItems = activeCategory === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);

  const categories = [
    { id: 'all', label: 'Tous' },
    { id: 'metal', label: 'Métal & Ferronnerie' },
    { id: 'stone', label: 'Pierre & Façades' },
    { id: 'antique', label: 'Antiquités & Restauration' },
  ];

  return (
    <div className="gallery-page">
      <div className="gallery-hero">
        <div className="container">
          <h1>Notre Galerie</h1>
          <p>
            Découvrez nos réalisations avant/après et constatez l'efficacité de notre technologie laser
            sur différents types de matériaux et surfaces.
          </p>
        </div>
      </div>

      <section className="gallery-content section">
        <div className="container">
          <div className="gallery-filter">
            <div className="filter-tabs">
              {categories.map((category) => (
                <button
                  key={category.id}
                  className={`filter-tab ${activeCategory === category.id ? 'active' : ''}`}
                  onClick={() => setActiveCategory(category.id)}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </div>

          <motion.div
            ref={ref}
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="gallery-grid"
          >
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5 }}
                className="gallery-item"
              >
                <div className="gallery-item-content">
                <img src={item.image} alt={item.title} onClick={() => openLightbox(item)} />
                  <div className="item-info">
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                    {item.detailedDescription && (
                      <div className="detailed-description">
                        <p><strong>Détails:</strong> {item.detailedDescription}</p>
                      </div>
                    )}
                    {item.processDescription && (
                      <div className="process-description">
                        <p><strong>Processus:</strong> {item.processDescription}</p>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="gallery-cta section">
        <div className="container">
          <div className="cta-box">
            <h2>Vous avez un projet similaire ?</h2>
            <p>
              Contactez-nous pour discuter de votre projet et obtenir un devis gratuit.
              Notre équipe d'experts est à votre disposition pour vous conseiller.
            </p>
            <div className="cta-buttons">
              <Link to="/contact" className="btn btn-primary">
                Demander un Devis
              </Link>
              <a href="tel:0767271123" className="btn btn-outline">
                Appelez-nous
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="lightbox-overlay" onClick={closeLightbox}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button className="lightbox-close" onClick={closeLightbox}>
              ×
            </button>
            <img src={selectedImage.image} alt={selectedImage.title} />
            <div className="lightbox-info">
              <h3>{selectedImage.title}</h3>
              <p>{selectedImage.description}</p>
              {selectedImage.detailedDescription && (
                <div className="detailed-description">
                  <p><strong>Détails:</strong> {selectedImage.detailedDescription}</p>
                </div>
              )}
              {selectedImage.processDescription && (
                <div className="process-description">
                  <p><strong>Processus:</strong> {selectedImage.processDescription}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GalleryPage;
