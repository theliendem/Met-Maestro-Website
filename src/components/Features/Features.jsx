import React from 'react';
import { motion } from 'framer-motion';
import { 
  FeaturesContainer, 
  FeaturesTitle, 
  FeaturesGrid, 
  FeatureCard, 
  FeatureIcon, 
  FeatureTitle, 
  FeatureDescription 
} from './Features.styles';

const Features = () => {
  const features = [
    {
      icon: '🎯',
      title: 'Professional Precision',
      description: 'Industry-standard accuracy with timing precision that professionals rely on.'
    },
    {
      icon: '🎨',
      title: 'Beautiful Design',
      description: 'Modern, minimalistic interface that puts focus on your music.'
    },
    {
      icon: '⚡',
      title: 'Lightning Fast',
      description: 'Instant response time with smooth, fluid animations.'
    },
    {
      icon: '🔧',
      title: 'Highly Customizable',
      description: 'Tailor every aspect to match your musical needs and preferences.'
    },
    {
      icon: '🎵',
      title: 'Multiple Modes',
      description: 'Three powerful modes: Metronome, Show Builder, and Tuner.'
    },
    {
      icon: '📱',
      title: 'Cross-Platform',
      description: 'Works seamlessly across all your devices and platforms.'
    }
  ];

  return (
    <FeaturesContainer id="features">
      <FeaturesTitle
        as={motion.h2}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true, amount: 0.5 }}
      >
        Why Musicians Choose Met Maestro
      </FeaturesTitle>
      
      <FeaturesGrid>
        {features.map((feature, index) => (
          <FeatureCard
            key={index}
            as={motion.div}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true, amount: 0.5 }}
            whileHover={{ y: -10 }}
          >
            <FeatureIcon>{feature.icon}</FeatureIcon>
            <FeatureTitle>{feature.title}</FeatureTitle>
            <FeatureDescription>{feature.description}</FeatureDescription>
          </FeatureCard>
        ))}
      </FeaturesGrid>
    </FeaturesContainer>
  );
};

export default Features; 