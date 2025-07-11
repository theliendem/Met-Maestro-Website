import React, { useState } from 'react';
import showModeImg from '../../../assets/images/show_mode.jpeg';
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
  AccentDots,
  AccentDot,
  ShowBar,
  ShowBarButton,
  ShowNameInput,
  ShowNameEdit,
  MeasuresBar,
  AddMeasuresButton,
  CondensedToggle,
  ToggleSwitch,
  MeasureList,
  MeasureRow,
  MeasureCell,
  DeleteButton,
  ShowPlayButton
} from './ShowMode.styles';

const ShowMode = () => {
  // Demo state for show name and condensed toggle
  const [showName, setShowName] = useState('The greatest show');
  const [condensed, setCondensed] = useState(true);
  const measures = [
    { count: 2, time: '4/4', bpm: 120 },
    { count: 4, time: '3/4', bpm: 180 },
    { count: 2, time: '7/8', bpm: 160 },
  ];

  return (
    <ModeContainer>
      <ModeHeader>
        <ModeTitle>Show Mode</ModeTitle>
        <ModeDescription>
          Create and save custom show sequences with multiple time signatures and tempo transitions.
        </ModeDescription>
      </ModeHeader>

      <ModeContent>
        <InteractiveDemo style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', maxWidth: 350, height: 'auto', aspectRatio: '1/2', minWidth: 0, margin: '0 auto', background: '#18181b' }}>
          <img src={showModeImg} alt="Show Mode Screenshot" style={{ width: '100%', height: '100%', maxWidth: 350, maxHeight: 700, borderRadius: 20, boxShadow: '0 0 32px #bb86fc22', objectFit: 'contain', aspectRatio: '1/2' }} />
        </InteractiveDemo>

        <FeatureGrid>
          <FeatureCard
            as={motion.div}
            whileHover={{ y: -5 }}
            transition={{ duration: 0.2 }}
          >
            <FeatureIcon>📝</FeatureIcon>
            <FeatureTitle>Custom Sequences</FeatureTitle>
            <FeatureDescription>
              Create and save custom show sequences with multiple sections
            </FeatureDescription>
          </FeatureCard>

          <FeatureCard
            as={motion.div}
            whileHover={{ y: -5 }}
            transition={{ duration: 0.2 }}
          >
            <FeatureIcon>🎼</FeatureIcon>
            <FeatureTitle>Multiple Time Signatures</FeatureTitle>
            <FeatureDescription>
              Different time signatures within the same show
            </FeatureDescription>
          </FeatureCard>

          <FeatureCard
            as={motion.div}
            whileHover={{ y: -5 }}
            transition={{ duration: 0.2 }}
          >
            <FeatureIcon>⚡</FeatureIcon>
            <FeatureTitle>Tempo Transitions</FeatureTitle>
            <FeatureDescription>
              Smooth tempo changes between sections
            </FeatureDescription>
          </FeatureCard>

          <FeatureCard
            as={motion.div}
            whileHover={{ y: -5 }}
            transition={{ duration: 0.2 }}
          >
            <FeatureIcon>🔢</FeatureIcon>
            <FeatureTitle>Measure Counting</FeatureTitle>
            <FeatureDescription>
              Built-in measure counting for each section
            </FeatureDescription>
          </FeatureCard>

          <FeatureCard
            as={motion.div}
            whileHover={{ y: -5 }}
            transition={{ duration: 0.2 }}
          >
            <FeatureIcon>🔗</FeatureIcon>
            <FeatureTitle>Share Shows</FeatureTitle>
            <FeatureDescription>
              Share shows via link or QR code with other musicians
            </FeatureDescription>
          </FeatureCard>

          <FeatureCard
            as={motion.div}
            whileHover={{ y: -5 }}
            transition={{ duration: 0.2 }}
          >
            <FeatureIcon>📁</FeatureIcon>
            <FeatureTitle>Import/Export</FeatureTitle>
            <FeatureDescription>
              Export shows to files or import from other sources
            </FeatureDescription>
          </FeatureCard>

          <FeatureCard
            as={motion.div}
            whileHover={{ y: -5 }}
            transition={{ duration: 0.2 }}
          >
            <ComingSoonBadge>Coming Soon</ComingSoonBadge>
            <FeatureIcon>🎯</FeatureIcon>
            <FeatureTitle>Drag & Drop</FeatureTitle>
            <FeatureDescription>
              Drag and drop sections to rearrange your show
            </FeatureDescription>
          </FeatureCard>
        </FeatureGrid>
      </ModeContent>
    </ModeContainer>
  );
};

export default ShowMode; 