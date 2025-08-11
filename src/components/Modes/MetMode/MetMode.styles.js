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
  align-items: stretch;
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

export const TopRow = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const CornerButton = styled.button`
  background: transparent;
  border: 2px solid #333;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: ${theme.transitions.default};
  outline: none;
  color: #fff;
  position: relative;
  cursor: pointer;
  &:hover {
    border-color: ${theme.colors.accent};
    color: ${theme.colors.accent};
  }
`;

export const CenterSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;
  gap: 1rem;
`;

export const BPMNumber = styled.div`
  font-size: 3rem;
  font-weight: 700;
  color: ${theme.colors.text.primary};
  text-align: center;
  margin-bottom: 1rem;
  letter-spacing: -1px;
`;

export const BPMLabel = styled.div`
  font-size: 1.1rem;
  color: ${theme.colors.text.secondary};
  text-align: center;
`;

export const BPMRow = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
`;

export const BPMButton = styled.button`
  background: none;
  border: none;
  color: ${theme.colors.text.primary};
  font-size: 2rem;
  padding: 0.3rem;
  cursor: pointer;
  transition: ${theme.transitions.default};
  font-weight: 300;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    color: ${theme.colors.accent};
  }
`;

export const BPMSlider = styled.input`
  width: 140px;
  height: 6px;
  background: #333;
  border-radius: 20px;
  outline: none;
  -webkit-appearance: none;
  margin: 0 0.8rem;
  
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: ${theme.colors.accent};
    cursor: pointer;
  }
  
  &::-moz-range-thumb {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: ${theme.colors.accent};
    cursor: pointer;
    border: none;
  }
`;

export const PlayButton = styled.button`
  background: ${theme.colors.accent};
  border: none;
  border-radius: 50%;
  width: 80px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 6px 24px rgba(187, 134, 252, 0.3);
  color: white;
  font-size: 2rem;
  margin: 1rem 0;
  transition: ${theme.transitions.default};
  outline: none;
  cursor: pointer;
  &:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 30px rgba(187, 134, 252, 0.4);
  }
`;

export const AccentDots = styled.div`
  display: flex;
  gap: 0.7rem;
  margin: 0.7rem 0 0.3rem 0;
`;

export const AccentDot = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 2px solid ${theme.colors.accent};
  background: ${({ active }) => (active ? theme.colors.accent : 'transparent')};
  transition: ${theme.transitions.default};
`;

export const BottomRow = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-top: 1.2rem;
`;

export const TimeSignatureSelector = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
`;

export const TimeSigRow = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const TimeSigButton = styled.button`
  background: none;
  border: none;
  color: ${theme.colors.text.primary};
  font-size: 1.5rem;
  cursor: pointer;
  transition: ${theme.transitions.default};
  &:hover {
    color: ${theme.colors.accent};
  }
`;

export const TimeSigValue = styled.div`
  font-size: 2rem;
  font-weight: 600;
  color: ${theme.colors.text.primary};
  min-width: 32px;
  text-align: center;
`;

export const TimeSigDivider = styled.div`
  width: 40px;
  height: 2px;
  background: ${theme.colors.text.secondary};
  margin: 0.2rem 0;
`;

export const BPMDisplay = styled.div`
  background: ${theme.colors.surface};
  border-radius: 20px;
  padding: ${theme.spacing.xl};
  text-align: center;
  border: 2px solid ${theme.colors.accent};
  min-width: 150px;
`;

export const BPMValue = styled.div`
  font-size: 3rem;
  font-weight: 700;
  color: ${theme.colors.accent};
  line-height: 1;
`;

export const BPMLabelText = styled.div`
  font-size: 1rem;
  color: ${theme.colors.text.secondary};
  margin-top: ${theme.spacing.xs};
`;

export const ControlsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${theme.spacing.sm};
  width: 100%;
`;

export const ControlButton = styled.button`
  background: ${theme.colors.surface};
  border: 1px solid ${theme.colors.border};
  color: ${theme.colors.text.primary};
  padding: ${theme.spacing.md};
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
  gap: clamp(1rem, ${theme.spacing.vmd}, 2rem);
  
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