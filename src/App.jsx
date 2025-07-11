import React from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './styles/globalStyles';
import { theme } from './styles/theme';
import Header from './layouts/Header/Header';
import Footer from './layouts/Footer/Footer';
import Hero from './components/Hero/Hero';
import ModeSelector from './components/Modes/ModeSelector';
import Features from './components/Features/Features';
import Benefits from './components/Benefits/Benefits';
import Testimonials from './components/Testimonials/Testimonials';
import CTA from './components/CTA/CTA';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Header />
      <main>
        <Hero />
        <ModeSelector />
        <Features />
        <Benefits />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </ThemeProvider>
  );
}

export default App; 