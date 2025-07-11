import React, { useState } from 'react';
import metModeImg from '../../../assets/images/met_mode.jpeg';
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
  // Demo state for BPM and time signature
  const [bpm, setBpm] = useState(120);
  const [topNum, setTopNum] = useState(4);
  const [botNum, setBotNum] = useState(4);

  // Clamp BPM
  const handleBpmChange = (val) => {
    setBpm(Math.max(40, Math.min(200, val)));
  };

  return (
    <ModeContainer>
      <ModeHeader>
        <ModeTitle>Met Mode</ModeTitle>
        <ModeDescription>
          Professional-grade metronome with precision timing and intuitive controls.
        </ModeDescription>
      </ModeHeader>

      <ModeContent>
        <InteractiveDemo style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', maxWidth: 350, height: 'auto', aspectRatio: '1/2', minWidth: 0, margin: '0 auto', background: '#18181b' }}>
          <img src={metModeImg} alt="Met Mode Screenshot" style={{ width: '100%', height: '100%', maxWidth: 350, maxHeight: 700, borderRadius: 20, boxShadow: '0 0 32px #bb86fc22', objectFit: 'contain', aspectRatio: '1/2' }} />
        </InteractiveDemo>

        <FeatureGrid>
          <FeatureCard
            as={motion.div}
            whileHover={{ y: -5 }}
            transition={{ duration: 0.2 }}
          >
            <FeatureIcon>⏱️</FeatureIcon>
            <FeatureTitle>Professional Accuracy</FeatureTitle>
            <FeatureDescription>
              Tempo range: 40-200 BPM with precision timing
            </FeatureDescription>
          </FeatureCard>

          <FeatureCard
            as={motion.div}
            whileHover={{ y: -5 }}
            transition={{ duration: 0.2 }}
          >
            <FeatureIcon>🎵</FeatureIcon>
            <FeatureTitle>Visual & Audio Feedback</FeatureTitle>
            <FeatureDescription>
              Clear visual indicators and customizable sounds
            </FeatureDescription>
          </FeatureCard>

          <FeatureCard
            as={motion.div}
            whileHover={{ y: -5 }}
            transition={{ duration: 0.2 }}
          >
            <FeatureIcon>⚡</FeatureIcon>
            <FeatureTitle>Tap Tempo</FeatureTitle>
            <FeatureDescription>
              Set your tempo naturally by tapping the beat
            </FeatureDescription>
          </FeatureCard>

          <FeatureCard
            as={motion.div}
            whileHover={{ y: -5 }}
            transition={{ duration: 0.2 }}
          >
            <FeatureIcon>🎼</FeatureIcon>
            <FeatureTitle>Time Signatures</FeatureTitle>
            <FeatureDescription>
              Customizable time signatures for any musical style
            </FeatureDescription>
          </FeatureCard>

          <FeatureCard
            as={motion.div}
            whileHover={{ y: -5 }}
            transition={{ duration: 0.2 }}
          >
            <ComingSoonBadge>Coming Soon</ComingSoonBadge>
            <FeatureIcon>🔄</FeatureIcon>
            <FeatureTitle>Accent Patterns</FeatureTitle>
            <FeatureDescription>
              Custom accent patterns for complex rhythms
            </FeatureDescription>
          </FeatureCard>

          <FeatureCard
            as={motion.div}
            whileHover={{ y: -5 }}
            transition={{ duration: 0.2 }}
          >
            <ComingSoonBadge>Coming Soon</ComingSoonBadge>
            <FeatureIcon>📝</FeatureIcon>
            <FeatureTitle>Subdivisions</FeatureTitle>
            <FeatureDescription>
              1/4, 1/8, 1/16, triplets and more
            </FeatureDescription>
          </FeatureCard>
        </FeatureGrid>
      </ModeContent>
    </ModeContainer>
  );
};

export default MetMode; 