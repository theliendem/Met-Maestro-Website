import React from 'react';
import metModeImg from '../../../assets/images/met.png';
import { motion } from 'framer-motion';
import { MdFlashOn, MdMusicNote, MdVolumeUp, MdTouchApp } from 'react-icons/md';
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
  TopRow,
  CornerButton,
  CenterSection,
  BPMNumber,
  BPMLabelText,
  BPMRow,
  BPMButton,
  BPMSlider,
  PlayButton,
  AccentDots,
  AccentDot,
  BottomRow,
  TimeSignatureSelector,
  TimeSigRow,
  TimeSigButton,
  TimeSigValue,
  TimeSigDivider
} from './MetMode.styles';

const MetMode = () => {

  return (
    <ModeContainer>
      <ModeHeader>
        <ModeTitle>Met Mode</ModeTitle>
        <ModeDescription>
          Professional-grade metronome with precision timing and intuitive controls.
        </ModeDescription>
      </ModeHeader>

      <ModeContent>
        <InteractiveDemo>
          <img 
            src={metModeImg} 
            alt="Met Mode Screenshot" 
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
                  <MdFlashOn />
                </motion.div>
              </FeatureIcon>
              <FeatureTitle>Professional Accuracy</FeatureTitle>
              <FeatureDescription>
                Studio-quality timing with precise beat detection and consistent tempo
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
              <FeatureTitle>Advanced Subdivisions</FeatureTitle>
              <FeatureDescription>
                Choose from multiple distinct sounds
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
                  <MdVolumeUp />
                </motion.div>
              </FeatureIcon>
              <FeatureTitle>Multiple Sound Types</FeatureTitle>
              <FeatureDescription>
                Choose from synth, woodblock, cowbell, click, beep, and drum sounds
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
                  <MdTouchApp />
                </motion.div>
              </FeatureIcon>
              <FeatureTitle>Tap Tempo</FeatureTitle>
              <FeatureDescription>
                Set your tempo naturally by tapping the beat - perfect for finding the right speed
              </FeatureDescription>
            </div>
          </FeatureCard>
        </FeatureGrid>
      </ModeContent>
    </ModeContainer>
  );
};

export default MetMode; 