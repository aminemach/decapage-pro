import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import './ContactForm.scss';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });
  
  const [formStatus, setFormStatus] = useState<{
    submitted: boolean;
    success: boolean;
    message: string;
  }>({
    submitted: false,
    success: false,
    message: '',
  });

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // In a real application, you would send the form data to your backend
    // For now, we'll just simulate a successful submission
    
    setFormStatus({
      submitted: true,
      success: true,
      message: 'Votre message a été envoyé avec succès. Nous vous contacterons dans les plus brefs délais.',
    });
    
    // Reset form after submission
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: '',
      message: '',
    });
  };

  return (
    <section className="contact-form section">
      <div className="container">
        <div className="contact-grid">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6 }}
            className="contact-info"
          >
            <h2>Contactez-nous</h2>
            <p>
              Vous avez des questions ou vous souhaitez obtenir un devis gratuit ? N'hésitez pas à nous contacter. Notre équipe est à votre disposition pour vous aider.
            </p>
            
            <div className="info-items">
              <div className="info-item">
                <div className="info-icon">
                  {FaPhone({ size: 24 })}
                </div>
                <div className="info-content">
                  <h3>Téléphone</h3>
                  <p><a href="tel:0767271123">07 67 27 11 23</a></p>
                </div>
              </div>
              
              <div className="info-item">
                <div className="info-icon">
                  {FaEnvelope({ size: 24 })}
                </div>
                <div className="info-content">
                  <h3>Email</h3>
                  <p><a href="mailto:contact@decapage-pro.fr">contact@decapage-pro.fr</a></p>
                </div>
              </div>
              
              <div className="info-item">
                <div className="info-icon">
                  {FaMapMarkerAlt({ size: 24 })}
                </div>
                <div className="info-content">
                  <h3>Adresse</h3>
                  <p>Amiens et région Hauts-de-France</p>
                </div>
              </div>
            </div>
            
            <div className="service-areas">
              <h3>Zones d'intervention</h3>
              <p>Nous intervenons principalement dans les départements suivants :</p>
              <ul>
                <li>Somme (80)</li>
                <li>Oise (60)</li>
                <li>Aisne (02)</li>
                <li>Pas-de-Calais (62)</li>
                <li>Nord (59)</li>
                <li>Seine Maritime (76)</li>
              </ul>
            </div>
          </motion.div>
          
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="contact-form-container"
          >
            <div className="form-header">
              <h2>Demande de Devis</h2>
              <p>Remplissez le formulaire ci-dessous pour obtenir un devis gratuit.</p>
            </div>
            
            {formStatus.submitted ? (
              <div className={`form-message ${formStatus.success ? 'success' : 'error'}`}>
                {formStatus.message}
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Nom complet *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="email">Email *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="phone">Téléphone *</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                
                <div className="form-group">
                  <label htmlFor="service">Service souhaité</label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                  >
                    <option value="">Sélectionnez un service</option>
                    <option value="decapage-metaux">Décapage Fer et Métaux</option>
                    <option value="restauration-antiquite">Restauration d'Antiquité</option>
                    <option value="nettoyage-pierre">Nettoyage de la Pierre</option>
                    <option value="nettoyage-cuisine">Nettoyage de Cuisine</option>
                    <option value="autre">Autre</option>
                  </select>
                </div>
                
                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    required
                  ></textarea>
                </div>
                
                <button type="submit" className="btn btn-primary">
                  Envoyer la demande
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
