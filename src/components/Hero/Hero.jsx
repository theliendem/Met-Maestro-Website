import React from 'react';
import { motion } from 'framer-motion';
import { 
  HeroContainer, 
  HeroContent, 
  HeroTitle, 
  HeroSubtitle, 
  HeroButtons, 
  PrimaryButton, 
  SecondaryButton,
  HeroVisual
} from './Hero.styles';
import heroImage from '../../assets/images/met-wo-hardware.jpg';

const Hero = () => {

  return (
    <HeroContainer>
      <HeroContent>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <HeroTitle>
            The Ultimate Metronome for{' '}
            <span style={{ color: '#BB86FC' }}>Every Musician</span>
          </HeroTitle>
          <HeroSubtitle>
            Professional-grade precision meets intuitive design. Master your timing with Met Maestro's three powerful modes: Met, Show, and Tuner.
          </HeroSubtitle>
          <HeroButtons>
            <PrimaryButton
              as={motion.a}
              href="#download"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('download').scrollIntoView({ 
                  behavior: 'smooth',
                  block: 'start'
                });
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              Download Now
            </PrimaryButton>
            <SecondaryButton
              as={motion.a}
              href="#features"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              Learn More
            </SecondaryButton>
          </HeroButtons>
        </motion.div>
        <HeroVisual>
          <motion.img
            src={heroImage}
            alt="Met Maestro App Interface"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
              style={{
              width: '100%',
              maxWidth: '400px',
              height: 'auto',
              borderRadius: '24px',
              boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)',
              filter: 'drop-shadow(0 0 30px rgba(187, 134, 252, 0.3))'
            }}
          />
        </HeroVisual>
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero; 