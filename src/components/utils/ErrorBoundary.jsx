import { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    // Log error to analytics in production
    if (import.meta.env.PROD && window.gtag) {
      window.gtag('event', 'exception', {
        description: error.toString(),
        fatal: true,
      });
    }
    
    if (import.meta.env.DEV) {
      console.error('Error caught by boundary:', error, errorInfo);
    }
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '2rem',
          background: 'linear-gradient(135deg, #05080f 0%, #1a1f2e 100%)',
          color: '#e2e8f0',
          fontFamily: 'system-ui, sans-serif',
        }}>
          <div style={{ textAlign: 'center', maxWidth: '600px' }}>
            <h1 style={{ fontSize: '2rem', marginBottom: '1rem', color: '#c5a059' }}>
              Une erreur s&apos;est produite
            </h1>
            <p style={{ marginBottom: '2rem', color: '#94a3b8' }}>
              Nous sommes désolés pour ce désagrément. Veuillez rafraîchir la page ou nous contacter si le problème persiste.
            </p>
            <button
              onClick={() => window.location.reload()}
              style={{
                background: '#c5a059',
                color: '#05080f',
                border: 'none',
                padding: '1rem 2rem',
                borderRadius: '4px',
                cursor: 'pointer',
                fontWeight: '600',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
              }}
            >
              Rafraîchir la page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;