import React from 'react';
import tunerModeImg from '../../../assets/images/tuner_mode.jpeg';
import { motion } from 'framer-motion';
import { 
  ModeContainer, 
  ModeHeader, 
  ModeTitle, 
  ModeDescription,
  ModeContent,
  FeatureGrid,
  FeatureCard,
  FeatureIcon,
  FeatureTitle,
  FeatureDescription,
  ComingSoonBadge,
  InteractiveDemo,
  TunerDisplay,
  NoteDisplay,
  FrequencyDisplay,
  PitchMeter,
  PitchIndicator,
  InstrumentSelector,
  InstrumentOption
} from './TunerMode.styles';

const TunerMode = () => {
  return (
    <ModeContainer>
      <ModeHeader>
        <ModeTitle>Tuner Mode</ModeTitle>
        <ModeDescription>
          Professional-grade tuner with ±1 cent accuracy and instrument-specific presets.
        </ModeDescription>
      </ModeHeader>
      
      <ModeContent>
        <InteractiveDemo style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', maxWidth: 350, height: 'auto', aspectRatio: '1/2', minWidth: 0, margin: '0 auto', background: '#18181b' }}>
          <img src={tunerModeImg} alt="Tuner Mode Screenshot" style={{ width: '100%', height: '100%', maxWidth: 350, maxHeight: 700, borderRadius: 20, boxShadow: '0 0 32px #bb86fc22', objectFit: 'contain', aspectRatio: '1/2' }} />
        </InteractiveDemo>
        
        <FeatureGrid>
          <FeatureCard
            as={motion.div}
            whileHover={{ y: -5 }}
            transition={{ duration: 0.2 }}
          >
            <FeatureIcon>🎯</FeatureIcon>
            <FeatureTitle>±1 Cent Accuracy</FeatureTitle>
            <FeatureDescription>
              Professional-grade precision for perfect tuning
            </FeatureDescription>
          </FeatureCard>
          
          <FeatureCard
            as={motion.div}
            whileHover={{ y: -5 }}
            transition={{ duration: 0.2 }}
          >
            <FeatureIcon>📊</FeatureIcon>
            <FeatureTitle>Visual Pitch Indicator</FeatureTitle>
            <FeatureDescription>
              Clear visual feedback for precise tuning
            </FeatureDescription>
          </FeatureCard>
          
          <FeatureCard
            as={motion.div}
            whileHover={{ y: -5 }}
            transition={{ duration: 0.2 }}
          >
            <FeatureIcon>🔢</FeatureIcon>
            <FeatureTitle>Frequency Display</FeatureTitle>
            <FeatureDescription>
              Real-time frequency readout in Hz
            </FeatureDescription>
          </FeatureCard>
          
          <FeatureCard
            as={motion.div}
            whileHover={{ y: -5 }}
            transition={{ duration: 0.2 }}
          >
            <FeatureIcon>🎻</FeatureIcon>
            <FeatureTitle>Instrument Presets</FeatureTitle>
            <FeatureDescription>
              Optimized settings for different instruments
            </FeatureDescription>
          </FeatureCard>
          
          <FeatureCard
            as={motion.div}
            whileHover={{ y: -5 }}
            transition={{ duration: 0.2 }}
          >
            <ComingSoonBadge>Coming Soon</ComingSoonBadge>
            <FeatureIcon>🎚️</FeatureIcon>
            <FeatureTitle>Reference Pitches</FeatureTitle>
            <FeatureDescription>
              A=440Hz, 442Hz, and custom reference pitches
            </FeatureDescription>
          </FeatureCard>
          
          <FeatureCard
            as={motion.div}
            whileHover={{ y: -5 }}
            transition={{ duration: 0.2 }}
          >
            <ComingSoonBadge>Coming Soon</ComingSoonBadge>
            <FeatureIcon>📝</FeatureIcon>
            <FeatureTitle>Note History</FeatureTitle>
            <FeatureDescription>
              Track tuning history and patterns
            </FeatureDescription>
          </FeatureCard>
        </FeatureGrid>
      </ModeContent>
    </ModeContainer>
  );
};

export default TunerMode; 