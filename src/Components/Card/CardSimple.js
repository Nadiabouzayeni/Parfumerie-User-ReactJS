import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ title, description, image, children }) => {
  return (
    <div style={styles.card}>
      {image && <img src={image} alt={title} style={styles.image} />}
      <div style={styles.content}>
        {title && <h2 style={styles.title}>{title}</h2>}
        {description && <p style={styles.description}>{description}</p>}
        {children}
      </div>
    </div>
  );
};

const styles = {
  card: {
    border: '1px solid gray',
    borderRadius: '8px',
    padding: '16px',
    margin: '16px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    maxWidth: '100%',
  },
  image: {
    width: '100%',
    borderRadius: '8px 8px 0 0',
  },
  content: {
    textAlign: 'center',
  },
  title: {
    fontSize: '18px',
    fontWeight: 'bold',
    margin: '8px 0',
  },
  description: {
    fontSize: '14px',
    color: '#666',
  },
};

Card.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  children: PropTypes.node,
};

export default Card;
