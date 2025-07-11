import React from 'react';
import { motion } from 'framer-motion';
import { 
  CTAContainer, 
  CTAContent, 
  CTATitle, 
  CTADescription, 
  CTAButtons, 
  PrimaryButton, 
  SecondaryButton,
  PlatformSection,
  PlatformTitle,
  PlatformIcons,
  PlatformIcon
} from './CTA.styles';

const CTA = () => {
  const platforms = [
    { name: 'iOS', icon: '📱', available: true },
    { name: 'Android', icon: '🤖', available: false },
    { name: 'Web', icon: '🌐', available: false },
    { name: 'Desktop', icon: '💻', available: false }
  ];

  return (
    <CTAContainer id="download">
      <CTAContent>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <CTATitle>Ready to Master Your Music?</CTATitle>
          <CTADescription>
            Join musicians who are elevating their practice with Met Maestro. 
            Download now and start your journey to musical excellence.
          </CTADescription>
          
          <CTAButtons>
            <PrimaryButton
              as={motion.a}
              href="https://apps.apple.com/us/app/met-maestro/id6748158233"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              Download Free
            </PrimaryButton>
            <SecondaryButton
              as={motion.a}
              href="#features"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              View Features
            </SecondaryButton>
          </CTAButtons>
          
          <PlatformSection>
            <PlatformTitle>Available on</PlatformTitle>
            <PlatformIcons>
              {platforms.map((platform, index) => (
                <PlatformIcon
                  key={index}
                  as={motion.div}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true, amount: 0.5 }}
                  whileHover={{ scale: 1.1 }}
                  available={platform.available}
                  title={platform.name}
                >
                  <span>{platform.icon}</span>
                  <span>{platform.name}</span>
                </PlatformIcon>
              ))}
            </PlatformIcons>
          </PlatformSection>
        </motion.div>
      </CTAContent>
    </CTAContainer>
  );
};

export default CTA; 