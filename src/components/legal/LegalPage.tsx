import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './LegalPage.scss';

const LegalPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'privacy' | 'terms'>('privacy');

  return (
    <div className="legal-page">
      <div className="legal-hero">
        <div className="container">
          <h1>Mentions Légales</h1>
          <p>
            Informations légales concernant notre site web et nos services
          </p>
        </div>
      </div>

      <section className="legal-content section">
        <div className="container">
          <div className="legal-tabs">
            <button
              className={`legal-tab ${activeTab === 'privacy' ? 'active' : ''}`}
              onClick={() => setActiveTab('privacy')}
            >
              Politique de Confidentialité
            </button>
            <button
              className={`legal-tab ${activeTab === 'terms' ? 'active' : ''}`}
              onClick={() => setActiveTab('terms')}
            >
              Conditions Générales
            </button>
          </div>

          <div className="legal-tab-content">
            {activeTab === 'privacy' ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="privacy-policy"
              >
                <h2>Politique de Confidentialité</h2>
                <p className="last-updated">Dernière mise à jour : 7 juin 2025</p>

                <div className="legal-section">
                  <h3>1. Introduction</h3>
                  <p>
                    DécapagePro ("nous", "notre", "nos") s'engage à protéger votre vie privée. Cette politique de confidentialité explique comment nous collectons, utilisons et protégeons vos données personnelles lorsque vous utilisez notre site web et nos services.
                  </p>
                </div>

                <div className="legal-section">
                  <h3>2. Données Collectées</h3>
                  <p>
                    Nous pouvons collecter les types d'informations suivants :
                  </p>
                  <ul>
                    <li>
                      <strong>Informations personnelles</strong> : nom, adresse e-mail, numéro de téléphone, adresse postale lorsque vous nous contactez ou demandez un devis.
                    </li>
                    <li>
                      <strong>Informations techniques</strong> : adresse IP, type de navigateur, pages visitées, temps passé sur le site.
                    </li>
                    <li>
                      <strong>Cookies</strong> : nous utilisons des cookies pour améliorer votre expérience sur notre site.
                    </li>
                  </ul>
                </div>

                <div className="legal-section">
                  <h3>3. Utilisation des Données</h3>
                  <p>
                    Nous utilisons vos données personnelles pour :
                  </p>
                  <ul>
                    <li>Vous fournir nos services et répondre à vos demandes</li>
                    <li>Améliorer notre site web et nos services</li>
                    <li>Vous envoyer des informations sur nos services (avec votre consentement)</li>
                    <li>Respecter nos obligations légales</li>
                  </ul>
                </div>

                <div className="legal-section">
                  <h3>4. Conservation des Données</h3>
                  <p>
                    Nous conservons vos données personnelles aussi longtemps que nécessaire pour les finalités pour lesquelles elles ont été collectées, ou conformément aux exigences légales.
                  </p>
                </div>

                <div className="legal-section">
                  <h3>5. Vos Droits</h3>
                  <p>
                    Conformément au Règlement Général sur la Protection des Données (RGPD), vous disposez des droits suivants :
                  </p>
                  <ul>
                    <li>Droit d'accès à vos données personnelles</li>
                    <li>Droit de rectification de vos données</li>
                    <li>Droit à l'effacement de vos données</li>
                    <li>Droit à la limitation du traitement</li>
                    <li>Droit à la portabilité des données</li>
                    <li>Droit d'opposition au traitement</li>
                  </ul>
                  <p>
                    Pour exercer ces droits, veuillez nous contacter à l'adresse e-mail suivante : contact@decapage-pro.fr
                  </p>
                </div>

                <div className="legal-section">
                  <h3>6. Sécurité</h3>
                  <p>
                    Nous mettons en œuvre des mesures de sécurité appropriées pour protéger vos données personnelles contre tout accès non autorisé, altération, divulgation ou destruction.
                  </p>
                </div>

                <div className="legal-section">
                  <h3>7. Modifications</h3>
                  <p>
                    Nous pouvons mettre à jour cette politique de confidentialité de temps à autre. Toute modification sera publiée sur cette page avec la date de mise à jour.
                  </p>
                </div>

                <div className="legal-section">
                  <h3>8. Contact</h3>
                  <p>
                    Si vous avez des questions concernant cette politique de confidentialité, veuillez nous contacter à :
                  </p>
                  <p>
                    Email : contact@decapage-pro.fr<br />
                    Téléphone : 07 67 27 11 23
                  </p>
                </div>
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="terms-of-service"
              >
                <h2>Conditions Générales de Service</h2>
                <p className="last-updated">Dernière mise à jour : 7 juin 2025</p>

                <div className="legal-section">
                  <h3>1. Introduction</h3>
                  <p>
                    Les présentes conditions générales régissent l'utilisation de notre site web et de nos services de décapage et nettoyage par laser. En utilisant notre site ou en faisant appel à nos services, vous acceptez ces conditions.
                  </p>
                </div>

                <div className="legal-section">
                  <h3>2. Services</h3>
                  <p>
                    DécapagePro propose des services de décapage et nettoyage par laser pour différents types de matériaux (métal, bois, pierre, etc.). Les détails spécifiques de chaque prestation sont définis dans le devis fourni au client.
                  </p>
                </div>

                <div className="legal-section">
                  <h3>3. Devis et Tarifs</h3>
                  <p>
                    Tous les devis sont gratuits et valables pour une durée de 30 jours à compter de leur émission. Les tarifs indiqués sont hors taxes, sauf mention contraire. Des frais de déplacement peuvent s'appliquer selon la localisation du chantier.
                  </p>
                </div>

                <div className="legal-section">
                  <h3>4. Exécution des Services</h3>
                  <p>
                    Nous nous engageons à exécuter les services avec professionnalisme et dans les délais convenus. Le client doit fournir un accès approprié au lieu d'intervention et s'assurer que les conditions sont réunies pour permettre la réalisation des travaux.
                  </p>
                </div>

                <div className="legal-section">
                  <h3>5. Paiement</h3>
                  <p>
                    Sauf accord contraire, le paiement s'effectue comme suit :
                  </p>
                  <ul>
                    <li>30% d'acompte à la signature du devis</li>
                    <li>Solde à la fin des travaux</li>
                  </ul>
                  <p>
                    Les factures sont payables à réception. Des pénalités de retard peuvent s'appliquer en cas de non-paiement dans les délais.
                  </p>
                </div>

                <div className="legal-section">
                  <h3>6. Garantie</h3>
                  <p>
                    Nos services sont garantis pendant une période de 6 mois à compter de la fin des travaux. Cette garantie couvre uniquement les défauts liés à notre prestation et ne s'applique pas en cas de mauvaise utilisation ou d'usure normale.
                  </p>
                </div>

                <div className="legal-section">
                  <h3>7. Responsabilité</h3>
                  <p>
                    Notre responsabilité est limitée au montant total du devis accepté. Nous ne sommes pas responsables des dommages indirects ou consécutifs résultant de l'utilisation de nos services.
                  </p>
                </div>

                <div className="legal-section">
                  <h3>8. Propriété Intellectuelle</h3>
                  <p>
                    Tous les contenus présents sur notre site web (textes, images, logos, etc.) sont protégés par le droit d'auteur et sont la propriété exclusive de DécapagePro ou de ses partenaires.
                  </p>
                </div>

                <div className="legal-section">
                  <h3>9. Droit Applicable et Juridiction</h3>
                  <p>
                    Les présentes conditions sont régies par le droit français. Tout litige relatif à leur interprétation ou à leur exécution relève de la compétence exclusive des tribunaux d'Amiens.
                  </p>
                </div>

                <div className="legal-section">
                  <h3>10. Modifications</h3>
                  <p>
                    Nous nous réservons le droit de modifier ces conditions générales à tout moment. Les modifications entreront en vigueur dès leur publication sur notre site web.
                  </p>
                </div>

                <div className="legal-section">
                  <h3>11. Contact</h3>
                  <p>
                    Pour toute question concernant ces conditions générales, veuillez nous contacter à :
                  </p>
                  <p>
                    Email : contact@decapage-pro.fr<br />
                    Téléphone : 07 67 27 11 23
                  </p>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default LegalPage;
