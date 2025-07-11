import React from 'react';
import { motion } from 'framer-motion';
import { 
  BenefitsContainer, 
  BenefitsTitle, 
  BenefitsGrid, 
  BenefitCard, 
  BenefitVisual, 
  BenefitContent, 
  BenefitTitle, 
  BenefitDescription 
} from './Benefits.styles';

const Benefits = () => {
  const benefits = [
    {
      title: 'Master Your Timing',
      description: 'Develop rock-solid rhythm and timing with our precision metronome. Perfect for practice sessions, performances, and skill development.',
      visual: '🎯'
    },
    {
      title: 'Streamline Your Shows',
      description: 'Create complex show sequences with ease. Share with your ensemble and eliminate the guesswork from performances.',
      visual: '🎼'
    },
    {
      title: 'Tune with Confidence',
      description: 'Professional-grade tuning accuracy ensures your instrument sounds perfect every time. Quick, precise, and reliable.',
      visual: '🎵'
    }
  ];

  return (
    <BenefitsContainer>
      <BenefitsTitle
        as={motion.h2}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true, amount: 0.5 }}
      >
        Elevate Your Musical Journey
      </BenefitsTitle>
      
      <BenefitsGrid>
        {benefits.map((benefit, index) => (
          <BenefitCard
            key={index}
            as={motion.div}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true, amount: 0.5 }}
            whileHover={{ scale: 1.02 }}
          >
            <BenefitVisual>
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                style={{ fontSize: '4rem' }}
              >
                {benefit.visual}
              </motion.div>
            </BenefitVisual>
            <BenefitContent>
              <BenefitTitle>{benefit.title}</BenefitTitle>
              <BenefitDescription>{benefit.description}</BenefitDescription>
            </BenefitContent>
          </BenefitCard>
        ))}
      </BenefitsGrid>
    </BenefitsContainer>
  );
};

export default Benefits; 