import React from 'react';
import { Link } from 'react-router-dom';

const NotFound: React.FC = () => {
  return (
    <div style={{ textAlign: 'center', padding: '2rem' }}>
      <h3>404 - Page Not Found</h3>
      <Link to="/">
        <button style={{ padding: '0.5rem 1rem' }}>Go Home</button>
      </Link>
    </div>
  );
};

export default NotFound;
