import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage: React.FC = () => {
  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1 style={styles.title}>Nexa Manager</h1>
        <p style={styles.subtitle}>Streamline your content workflow with AI agent</p>
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
    background: 'linear-gradient(135deg, #667eea, #764ba2)',
    color: '#fff',
    textAlign: 'center',
    fontFamily: 'Arial, sans-serif',
  },
  header: {
    marginBottom: '2rem',
  },
  title: {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    marginBottom: '1rem',
  },
  subtitle: {
    fontSize: '1.2rem',
    color: '#d1d5db',
  },
  main: {
    marginTop: '2rem',
  },
  button: {
    backgroundColor: '#ff7f50',
    color: '#fff',
    fontSize: '1rem',
    padding: '1rem 2rem',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
    transition: 'background-color 0.3s ease',
  },
  buttonHover: {
    backgroundColor: '#ff6347',
  },
};

export default LandingPage;
