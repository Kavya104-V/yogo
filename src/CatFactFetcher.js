import React, { useState } from 'react';

export default function CatFactFetcher() {
  const [fact, setFact] = useState('');
  const [loading, setLoading] = useState(false);

  const fetchCatFact = async () => {
    setLoading(true);
    try {
      const response = await fetch('https://catfact.ninja/fact');
      const data = await response.json();
      setFact(data.fact);
    } catch (error) {
      setFact('Failed to fetch a cat fact. Try again later.');
    }
    setLoading(false);
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>🐾 Random Cat Fact</h1>
      <button
        onClick={fetchCatFact}
        style={{
          ...styles.button,
          ...(loading ? styles.buttonDisabled : {})
        }}
        disabled={loading}
      >
        {loading ? 'Fetching...' : 'Get Cat Fact'}
      </button>

      {fact && (
        <div style={styles.card}>
          <p style={styles.fact}>{fact}</p>
        </div>
      )}
    </div>
  );
}

// 🎨 Styles (CSS-in-JS)
const styles = {
  container: {
    minHeight: '100vh',
    background: 'linear-gradient(135deg, #fbc2eb 0%, #a6c1ee 100%)',
    
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '2rem',
    fontFamily: '"Segoe UI", sans-serif',
  },
  
  heading: {
    fontSize: '2.5rem',
    marginBottom: '1.5rem',
    color: '#333',
    textShadow: '1px 1px 1px rgba(255,255,255,0.6)',
  },
  button: {
    padding: '0.8rem 1.6rem',
    fontSize: '1rem',
    fontWeight: 'bold',
    backgroundColor: '#ff8fb1',
    color: '#fff',
    border: 'none',
    borderRadius: '10px',
    cursor: 'pointer',
    boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
    transition: 'all 0.3s ease',
  },
  buttonDisabled: {
    backgroundColor: '#ccc',
    cursor: 'not-allowed',
  },
  card: {
    marginTop: '2rem',
    padding: '1.5rem 2rem',
    backgroundColor: 'white',
    borderRadius: '15px',
    maxWidth: '600px',
    width: '90%',
    boxShadow: '0 12px 24px rgba(0,0,0,0.15)',
    animation: 'fadeIn 0.5s ease-in-out',
  },
  fact: {
    fontSize: '1.25rem',
    color: '#444',
    textAlign: 'center',
    lineHeight: '1.6',
  },
};
