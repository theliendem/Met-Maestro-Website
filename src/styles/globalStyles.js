import { createGlobalStyle } from 'styled-components';
import { theme } from './theme';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 16px;
    scroll-behavior: smooth;
  }

  body {
    font-family: ${theme.fonts.primary};
    /* Dark-mode gradient background */
    background-color: ${theme.colors.background};
    background-image:
      radial-gradient(55% 35% at 12% -5%, rgba(187, 134, 252, 0.18) 0%, rgba(187, 134, 252, 0.08) 30%, transparent 60%),
      radial-gradient(75% 55% at 95% 100%, rgba(187, 134, 252, 0.24) 0%, rgba(187, 134, 252, 0.10) 40%, transparent 65%),
      radial-gradient(90% 60% at 50% 10%, rgba(187, 134, 252, 0.08) 0%, transparent 60%),
      linear-gradient(180deg, ${theme.colors.background} 0%, ${theme.colors.surface} 42%, ${theme.colors.background} 100%);
    background-repeat: no-repeat;
    color: ${theme.colors.text.primary};
    line-height: 1.6;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  #root {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }

  main {
    padding-top: clamp(4rem, 8vh, 6rem); /* Space for fixed header */
    
    @media (max-width: ${theme.breakpoints.tablet}) {
      padding-top: clamp(3.5rem, 7vh, 5rem); /* Slightly less space on mobile */
    }
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: 600;
    line-height: 1.2;
  }

  h1 {
    font-size: clamp(2rem, 5vw, 3.5rem);
  }

  h2 {
    font-size: clamp(1.5rem, 4vw, 2.5rem);
  }

  h3 {
    font-size: clamp(1.25rem, 3vw, 1.75rem);
  }

  p {
    color: ${theme.colors.text.secondary};
  }

  button {
    font-family: inherit;
    cursor: pointer;
    border: none;
    outline: none;
    transition: ${theme.transitions.default};
  }

  a {
    text-decoration: none;
    color: inherit;
    transition: ${theme.transitions.default};
  }

  img {
    max-width: 100%;
    height: auto;
  }

  /* Focus styles for accessibility */
  button:focus-visible,
  a:focus-visible {
    outline: 2px solid ${theme.colors.accent};
    outline-offset: 2px;
  }

  /* Custom scrollbar */
  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background: ${theme.colors.surface};
  }

  ::-webkit-scrollbar-thumb {
    background: ${theme.colors.accent};
    border-radius: 4px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: ${theme.colors.accent}dd;
  }
`; 