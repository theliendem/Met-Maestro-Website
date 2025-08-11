import React from 'react';
import tunerModeImg from '../../../assets/images/tuner.png';
import { motion } from 'framer-motion';
import { MdGraphicEq, MdMusicNote, MdDesktopMac, MdSpeed } from 'react-icons/md';
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
          Professional-grade tuner with industry-standard accuracy and an intuitive, performance-ready interface.
        </ModeDescription>
      </ModeHeader>
      
      <ModeContent>
        <InteractiveDemo>
          <img 
            src={tunerModeImg} 
            alt="Tuner Mode Screenshot" 
            style={{ 
              width: '100%', 
              height: 'auto', 
              borderRadius: '20px', 
              objectFit: 'cover',
              maxWidth: '100%'
            }} 
          />
        </InteractiveDemo>
        
        <FeatureGrid>
          <FeatureCard
            as={motion.div}
            whileHover={{ y: -5 }}
            transition={{ duration: 0.2 }}
          >
            <div>
              <FeatureIcon>
                <motion.div animate={{ rotate: [0, 10, -10, 0] }} transition={{ duration: 4, repeat: Infinity }}>
                  <MdGraphicEq />
                </motion.div>
              </FeatureIcon>
              <FeatureTitle>Industry-Standard Accuracy</FeatureTitle>
              <FeatureDescription>
                YIN algorithm with ±1 cent precision and under 150ms response time
              </FeatureDescription>
            </div>
          </FeatureCard>
          
          <FeatureCard
            as={motion.div}
            whileHover={{ y: -5 }}
            transition={{ duration: 0.2 }}
          >
            <div>
              <FeatureIcon>
                <motion.div animate={{ rotate: [0, 10, -10, 0] }} transition={{ duration: 4, repeat: Infinity }}>
                  <MdMusicNote />
                </motion.div>
              </FeatureIcon>
              <FeatureTitle>Smart Note Recognition</FeatureTitle>
              <FeatureDescription>
                Automatically identifies all 12 notes across 8+ octaves with enharmonic display
              </FeatureDescription>
            </div>
          </FeatureCard>
          
          <FeatureCard
            as={motion.div}
            whileHover={{ y: -5 }}
            transition={{ duration: 0.2 }}
          >
            <div>
              <FeatureIcon>
                <motion.div animate={{ rotate: [0, 10, -10, 0] }} transition={{ duration: 4, repeat: Infinity }}>
                  <MdDesktopMac />
                </motion.div>
              </FeatureIcon>
              <FeatureTitle>Professional Interface</FeatureTitle>
              <FeatureDescription>
                Classic arc-style needle display with color-coded feedback and large note display
              </FeatureDescription>
            </div>
          </FeatureCard>
          
          <FeatureCard
            as={motion.div}
            whileHover={{ y: -5 }}
            transition={{ duration: 0.2 }}
          >
            <div>
              <FeatureIcon>
                <motion.div animate={{ rotate: [0, 10, -10, 0] }} transition={{ duration: 4, repeat: Infinity }}>
                  <MdSpeed />
                </motion.div>
              </FeatureIcon>
              <FeatureTitle>Performance Optimized</FeatureTitle>
              <FeatureDescription>
                Smart permission management and efficient audio processing for stage use
              </FeatureDescription>
            </div>
          </FeatureCard>
          
          
          
        </FeatureGrid>
      </ModeContent>
    </ModeContainer>
  );
};

export default TunerMode; 