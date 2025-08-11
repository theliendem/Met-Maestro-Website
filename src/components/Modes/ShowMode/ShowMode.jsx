import React from 'react';
import showModeImg from '../../../assets/images/show.png';
import { motion } from 'framer-motion';
import { MdMusicNote, MdPlayArrow, MdViewList, MdSettings, MdStars } from 'react-icons/md';
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

  return (
    <ModeContainer>
      <ModeHeader>
        <ModeTitle>Show Mode</ModeTitle>
        <ModeDescription>
          The easiest way to create and manage custom show sequences with different time signatures and tempo transitions.
        </ModeDescription>
      </ModeHeader>

      <ModeContent>
        <InteractiveDemo>
          <img 
            src={showModeImg} 
            alt="Show Mode Screenshot" 
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
                  <MdMusicNote />
                </motion.div>
              </FeatureIcon>
              <FeatureTitle>Easy Show Creation</FeatureTitle>
              <FeatureDescription>
                The simplest way to create custom shows with different time signatures - up to 500 measures
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
                  <MdPlayArrow />
                </motion.div>
              </FeatureIcon>
              <FeatureTitle>Intuitive Playback</FeatureTitle>
              <FeatureDescription>
                User-friendly 4-beat count-in with clear visual progress tracking
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
                  <MdViewList />
                </motion.div>
              </FeatureIcon>
              <FeatureTitle>Simple Organization</FeatureTitle>
              <FeatureDescription>
                Easy A-Z section labeling and condensed view for quick show management
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
                  <MdSettings />
                </motion.div>
              </FeatureIcon>
              <FeatureTitle>Effortless Management</FeatureTitle>
              <FeatureDescription>
                Unlimited shows with simple import/export and easy drag-and-drop editing
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
                  <MdStars />
                </motion.div>
              </FeatureIcon>
              <FeatureTitle>Ready to Perform</FeatureTitle>
              <FeatureDescription>
                Works everywhere with offline support - perfect for any performance situation
              </FeatureDescription>
            </div>
          </FeatureCard>
        </FeatureGrid>
      </ModeContent>
    </ModeContainer>
  );
};

export default ShowMode; 