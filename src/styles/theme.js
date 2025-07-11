export const theme = {
  colors: {
    background: '#121212',
    surface: '#1E1E1E',
    accent: '#BB86FC',
    text: {
      primary: '#FFFFFF',
      secondary: 'rgba(255, 255, 255, 0.7)'
    },
    border: 'rgba(255, 255, 255, 0.1)'
  },
  spacing: {
    xs: '0.5rem',
    sm: '1rem',
    md: '1.5rem',
    lg: '2rem',
    xl: '3rem',
    xxl: '4rem'
  },
  breakpoints: {
    mobile: '320px',
    tablet: '768px',
    desktop: '1024px'
  },
  fonts: {
    primary: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif'
  },
  transitions: {
    default: 'all 0.3s ease',
    fast: 'all 0.2s ease',
    slow: 'all 0.4s ease'
  },
  shadows: {
    small: '0 2px 4px rgba(0, 0, 0, 0.1)',
    medium: '0 4px 8px rgba(0, 0, 0, 0.15)',
    large: '0 8px 16px rgba(0, 0, 0, 0.2)'
  },
  zIndex: {
    modal: 1000,
    dropdown: 100,
    header: 50,
    overlay: 10
  }
}; 