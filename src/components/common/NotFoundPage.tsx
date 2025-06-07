import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './NotFoundPage.scss';

const NotFoundPage: React.FC = () => {
  return (
    <div className="not-found-page">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="not-found-content"
        >
          <h1>404</h1>
          <h2>Page Non Trouvée</h2>
          <p>
            Désolé, la page que vous recherchez n'existe pas ou a été déplacée.
          </p>
          <Link to="/" className="btn btn-primary">
            Retour à l'accueil
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default NotFoundPage;
