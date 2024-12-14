import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';

const LandingPage: React.FC = () => {
  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1 style={styles.title}>AI Content Calendar Manager</h1>
        <p style={styles.subtitle}>
          Streamlining social media success for influencers.
        </p>
      </header>
      <main style={styles.main}>
        <Link to="/auth">
          <button style={styles.button}>Get Started</button>
        </Link>
      </main>
    </div>
  );
};

const styles: Record<string, React.CSSProperties> = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    textAlign: 'center',
    background: 'linear-gradient(135deg, #667eea, #764ba2)',
    color: '#fff',
    fontFamily: 'Arial, sans-serif',
  },
  header: {
    marginBottom: '2rem',
  },
  title: {
    fontSize: '3rem',
    fontWeight: 'bold',
    margin: '0',
  },
  subtitle: {
    fontSize: '1.2rem',
    marginTop: '0.5rem',
    color: '#d1d5db',
  },
  main: {
    marginTop: '2rem',
  },
  button: {
    backgroundColor: '#764ba2',
    color: '#fff',
    fontSize: '1.2rem',
    padding: '0.8rem 2rem',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
    transition: 'all 0.3s ease',
  },
  buttonHover: {
    backgroundColor: '#667eea',
  },
};

export default LandingPage;
