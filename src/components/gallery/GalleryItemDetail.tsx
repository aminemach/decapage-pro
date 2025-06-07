import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaArrowLeft, FaTag } from 'react-icons/fa';
import './GalleryItemDetail.scss';

interface GalleryItem {
  id: number;
  category: string;
  title: string;
  description: string;
  beforeImage: string;
  afterImage: string;
  detailedDescription?: string;
  additionalImages?: string[];
  specifications?: { label: string; value: string }[];
  processDescription?: string;
}

interface GalleryItemDetailProps {
  galleryItems: GalleryItem[];
}

const GalleryItemDetail: React.FC<GalleryItemDetailProps> = ({ galleryItems }) => {
  const { id } = useParams<{ id: string }>();
  const itemId = parseInt(id || '0', 10);
  
  const item = galleryItems.find(item => item.id === itemId);
  
  if (!item) {
    return (
      <div className="gallery-item-detail not-found">
        <div className="container">
          <h2>Projet non trouvé</h2>
          <p>Le projet que vous recherchez n'existe pas.</p>
          <Link to="/gallery" className="btn btn-primary">
            {FaArrowLeft({})} Retour à la Galerie
          </Link>
        </div>
      </div>
    );
  }

  const pageVariants = {
    initial: { opacity: 0 },
    in: { opacity: 1 },
    out: { opacity: 0 }
  };

  const imageVariants = {
    hover: { scale: 1.05, transition: { duration: 0.3 } }
  };

  return (
    <div className="gallery-item-detail">
      <div className="detail-hero">
        <div className="container">
          <h1>{item.title}</h1>
          <div className="category-tag">
            {FaTag({})} <span>{item.category.charAt(0).toUpperCase() + item.category.slice(1)}</span>
          </div>
        </div>
      </div>
      
      <div className="container">
        <div className="back-link">
          <Link to="/gallery">
            {FaArrowLeft({})} Retour à la Galerie
          </Link>
        </div>
        
        <motion.div 
          className="detail-content"
          initial="initial"
          animate="in"
          exit="out"
          variants={pageVariants}
        >
          <div className="before-after-section">
            <h2>Avant / Après</h2>
            <div className="before-after-container">
              <div className="image-container">
                <motion.div whileHover="hover" variants={imageVariants}>
                  <img src={item.beforeImage} alt={`${item.title} - Avant`} />
                </motion.div>
                <div className="image-label">Avant</div>
              </div>
              <div className="image-container">
                <motion.div whileHover="hover" variants={imageVariants}>
                  <img src={item.afterImage} alt={`${item.title} - Après`} />
                </motion.div>
                <div className="image-label">Après</div>
              </div>
            </div>
          </div>
          
          <div className="description-section">
            <h2>Description du Projet</h2>
            <p className="main-description">{item.description}</p>
            {item.detailedDescription && (
              <div className="detailed-description">
                <p>{item.detailedDescription}</p>
              </div>
            )}
          </div>
          
          {item.processDescription && (
            <div className="process-section">
              <h2>Processus de Décapage</h2>
              <p>{item.processDescription}</p>
            </div>
          )}
          
          {item.specifications && item.specifications.length > 0 && (
            <div className="specifications-section">
              <h2>Spécifications Techniques</h2>
              <ul className="specifications-list">
                {item.specifications.map((spec, index) => (
                  <li key={index}>
                    <span className="spec-label">{spec.label}:</span>
                    <span className="spec-value">{spec.value}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
          
          {item.additionalImages && item.additionalImages.length > 0 && (
            <div className="additional-images-section">
              <h2>Images Supplémentaires</h2>
              <div className="additional-images-grid">
                {item.additionalImages.map((image, index) => (
                  <motion.div 
                    key={index} 
                    className="additional-image"
                    whileHover="hover"
                    variants={imageVariants}
                  >
                    <img src={image} alt={`${item.title} - Image ${index + 1}`} />
                  </motion.div>
                ))}
              </div>
            </div>
          )}
        </motion.div>
        
        <div className="cta-section">
          <h2>Intéressé par nos services de décapage?</h2>
          <p>Contactez-nous dès aujourd'hui pour discuter de votre projet et obtenir un devis gratuit.</p>
          <Link to="/contact" className="btn btn-primary">Demander un Devis</Link>
        </div>
      </div>
    </div>
  );
};

export default GalleryItemDetail;
