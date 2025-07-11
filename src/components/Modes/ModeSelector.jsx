import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ModeSelectorContainer, 
  ModeSelectorTitle,
  ModeButtons,
  ModeButton,
  ModeContent 
} from './ModeSelector.styles';
import MetMode from './MetMode/MetMode';
import ShowMode from './ShowMode/ShowMode';
import TunerMode from './TunerMode/TunerMode';

const modeTransition = {
  initial: { opacity: 0, y: 20 },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut"
    }
  },
  exit: { 
    opacity: 0,
    y: -20,
    transition: {
      duration: 0.3
    }
  }
};

const ModeSelector = () => {
  const [activeMode, setActiveMode] = useState('met');

  const renderModeContent = (mode) => {
    switch (mode) {
      case 'met':
        return <MetMode />;
      case 'show':
        return <ShowMode />;
      case 'tuner':
        return <TunerMode />;
      default:
        return <MetMode />;
    }
  };

  return (
    <ModeSelectorContainer id="modes">
      <ModeSelectorTitle
        as={motion.h2}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true, amount: 0.5 }}
      >
        Three Powerful Modes
      </ModeSelectorTitle>
      
      <ModeButtons>
        <ModeButton 
          active={activeMode === 'met'}
          onClick={() => setActiveMode('met')}
          as={motion.button}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Met Mode
        </ModeButton>
        <ModeButton 
          active={activeMode === 'show'}
          onClick={() => setActiveMode('show')}
          as={motion.button}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Show Mode
        </ModeButton>
        <ModeButton 
          active={activeMode === 'tuner'}
          onClick={() => setActiveMode('tuner')}
          as={motion.button}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Tuner Mode
        </ModeButton>
      </ModeButtons>
      
      <ModeContent>
        <AnimatePresence mode="wait">
          <motion.div
            key={activeMode}
            initial="initial"
            animate="animate"
            exit="exit"
            variants={modeTransition}
            transition={{ duration: 0.4, ease: 'easeOut' }}
          >
            {renderModeContent(activeMode)}
          </motion.div>
        </AnimatePresence>
      </ModeContent>
    </ModeSelectorContainer>
  );
};

export default ModeSelector; 