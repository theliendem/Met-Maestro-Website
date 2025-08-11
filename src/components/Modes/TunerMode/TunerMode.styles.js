import styled from 'styled-components';
import { theme } from '../../../styles/theme';

export const ModeContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.xl};
`;

export const ModeHeader = styled.div`
  text-align: center;
`;

export const ModeTitle = styled.h3`
  color: ${theme.colors.accent};
  font-size: 2rem;
  margin-bottom: ${theme.spacing.sm};
`;

export const ModeDescription = styled.p`
  font-size: 1.1rem;
  color: ${theme.colors.text.secondary};
  max-width: 600px;
  margin: 0 auto;
`;

export const ModeContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: clamp(2rem, ${theme.spacing.vxl}, 4rem);
  align-items: start;
  padding: 0 clamp(1rem, ${theme.spacing.vlg}, 3rem);
  
  @media (max-width: ${theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    gap: clamp(1.5rem, ${theme.spacing.vmd}, 3rem);
    padding: 0 clamp(0.75rem, ${theme.spacing.vmd}, 2rem);
  }
  
  @media (max-width: ${theme.breakpoints.mobile}) {
    padding: 0 clamp(0.5rem, ${theme.spacing.vsm}, 1.5rem);
    gap: clamp(1rem, ${theme.spacing.vsm}, 2rem);
  }
`;

export const InteractiveDemo = styled.div`
  background: transparent;
  border-radius: 24px;
  padding: 0;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: auto;
  position: relative;
  max-width: min(400px, 90vw);
  overflow: visible;
  animation: pulse-glow 3s ease-in-out infinite;
  
  @media (max-width: ${theme.breakpoints.mobile}) {
    max-width: min(300px, 85vw);
  }
  
  @keyframes pulse-glow {
    0%, 100% {
      filter: drop-shadow(0 0 20px rgba(187, 134, 252, 0.5));
    }
    50% {
      filter: drop-shadow(0 0 40px rgba(187, 134, 252, 0.8));
    }
  }
`;

export const TunerDisplay = styled.div`
  background: ${theme.colors.surface};
  border-radius: 20px;
  padding: ${theme.spacing.xl};
  text-align: center;
  border: 2px solid ${theme.colors.accent};
`;

export const NoteDisplay = styled.div`
  font-size: 4rem;
  font-weight: 700;
  color: ${theme.colors.accent};
  line-height: 1;
  margin-bottom: ${theme.spacing.sm};
`;

export const FrequencyDisplay = styled.div`
  font-size: 1.2rem;
  color: ${theme.colors.text.secondary};
  margin-bottom: ${theme.spacing.lg};
`;

export const PitchMeter = styled.div`
  width: 100%;
  height: 20px;
  background: ${theme.colors.background};
  border-radius: 10px;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 2px;
    height: 100%;
    background: ${theme.colors.accent};
  }
`;

export const PitchIndicator = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  width: 20px;
  height: 100%;
  background: ${theme.colors.accent};
  border-radius: 10px;
  transform: translateX(-50%);
  opacity: 0.7;
`;

export const InstrumentSelector = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${theme.spacing.sm};
`;

export const InstrumentOption = styled.button`
  background: ${props => props.active ? theme.colors.accent : theme.colors.surface};
  color: ${props => props.active ? theme.colors.text.primary : theme.colors.text.secondary};
  border: 1px solid ${props => props.active ? theme.colors.accent : theme.colors.border};
  padding: ${theme.spacing.sm};
  border-radius: 10px;
  font-weight: 600;
  transition: ${theme.transitions.default};
  
  &:hover {
    border-color: ${theme.colors.accent};
    color: ${theme.colors.accent};
  }
`;

export const FeatureGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(200px, 45%), 1fr));
  gap: clamp(1.5rem, ${theme.spacing.vlg}, 2.5rem);
  
  @media (max-width: ${theme.breakpoints.tablet}) {
    grid-template-columns: repeat(auto-fit, minmax(min(150px, 40%), 1fr));
    gap: clamp(0.75rem, ${theme.spacing.vsm}, 1.5rem);
  }
  
  @media (max-width: ${theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
    gap: clamp(0.5rem, ${theme.spacing.vxs}, 1rem);
  }
`;

export const FeatureCard = styled.div`
  background: ${theme.colors.background};
  border-radius: 15px;
  padding: clamp(1rem, ${theme.spacing.vmd}, 2rem);
  border: 1px solid ${theme.colors.border};
  text-align: center;
  position: relative;
  transition: ${theme.transitions.default};
  min-height: clamp(160px, 20vh, 220px);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  
  &:hover {
    border-color: ${theme.colors.accent};
  }
  
  @media (max-width: ${theme.breakpoints.mobile}) {
    padding: clamp(0.75rem, ${theme.spacing.vsm}, 1.5rem);
    min-height: clamp(140px, 18vh, 180px);
  }
`;

export const ComingSoonBadge = styled.div`
  position: absolute;
  top: ${theme.spacing.sm};
  right: ${theme.spacing.sm};
  background: ${theme.colors.accent};
  color: ${theme.colors.text.primary};
  padding: ${theme.spacing.xs} ${theme.spacing.sm};
  border-radius: 15px;
  font-size: 0.75rem;
  font-weight: 600;
`;

export const FeatureIcon = styled.div`
  font-size: 2rem;
  margin-bottom: ${theme.spacing.sm};
`;

export const FeatureTitle = styled.h4`
  color: ${theme.colors.text.primary};
  font-size: 1.1rem;
  margin-bottom: ${theme.spacing.xs};
`;

export const FeatureDescription = styled.p`
  font-size: 0.9rem;
  color: ${theme.colors.text.secondary};
  line-height: 1.5;
`; 