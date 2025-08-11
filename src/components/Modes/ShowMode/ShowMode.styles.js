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

export const TimelineView = styled.div`
  background: ${theme.colors.surface};
  border-radius: 10px;
  padding: ${theme.spacing.lg};
  border: 1px solid ${theme.colors.border};
`;

export const TimelineBar = styled.div`
  display: flex;
  gap: ${theme.spacing.xs};
  height: 60px;
`;

export const TimelineSegment = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  color: white;
  font-weight: 600;
  font-size: 0.9rem;
  cursor: pointer;
  transition: ${theme.transitions.default};
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

export const UseCases = styled.div`
  background: ${theme.colors.background};
  border-radius: 15px;
  padding: ${theme.spacing.lg};
  border: 1px solid ${theme.colors.border};
  
  h4 {
    color: ${theme.colors.text.primary};
    margin-bottom: ${theme.spacing.md};
  }
`;

export const UseCaseItem = styled.div`
  color: ${theme.colors.text.secondary};
  margin-bottom: ${theme.spacing.sm};
  font-size: 0.9rem;
  
  &:last-child {
    margin-bottom: 0;
  }
`; 

export const AccentDots = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  margin-bottom: 0.7rem;
  width: 100%;
`;

export const AccentDot = styled.div`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  border: 2px solid #bb86fc;
  background: ${({ active }) => (active ? '#bb86fc' : 'transparent')};
  transition: ${theme.transitions.default};
`;

export const ShowBar = styled.div`
  display: flex;
  align-items: center;
  background: ${theme.colors.surface};
  border-radius: 20px;
  padding: 0.7rem 1rem;
  gap: 1rem;
  margin-bottom: 0.7rem;
  width: 100%;
  max-width: 500px;
  min-width: 320px;
  box-sizing: border-box;
`;

export const ShowBarButton = styled.button`
  background: #23232b;
  border: none;
  border-radius: 12px;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #bb86fc;
  font-size: 1.3rem;
  transition: ${theme.transitions.default};
  &:hover {
    background: #2d2d38;
  }
`;

export const ShowNameInput = styled.input`
  background: #bb86fc;
  color: #23232b;
  border: none;
  border-radius: 12px;
  padding: 0.6rem 1.2rem;
  font-size: 1.1rem;
  font-weight: 500;
  flex: 1;
  outline: none;
  min-width: 0;
`;

export const ShowNameEdit = styled.button`
  background: none;
  border: none;
  color: #23232b;
  font-size: 1.2rem;
  margin-left: -2rem;
  cursor: pointer;
`;

export const MeasuresBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: ${theme.colors.surface};
  border-radius: 20px;
  padding: 0.7rem 1rem;
  margin-bottom: 0.7rem;
  width: 100%;
  max-width: 500px;
  min-width: 320px;
  box-sizing: border-box;
`;

export const AddMeasuresButton = styled.button`
  background: transparent;
  color: #bb86fc;
  border: 2px solid #bb86fc;
  border-radius: 30px;
  padding: 0.4rem 1.2rem;
  font-size: 0.95rem;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: ${theme.transitions.default};
  &:hover {
    background: #bb86fc22;
  }
`;

export const CondensedToggle = styled.label`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.95rem;
  color: ${theme.colors.text.primary};
`;

export const ToggleSwitch = styled.input`
  appearance: none;
  width: 44px;
  height: 24px;
  background: #23232b;
  border-radius: 12px;
  position: relative;
  outline: none;
  cursor: pointer;
  transition: background 0.2s;
  &:checked {
    background: #bb86fc;
  }
  &::before {
    content: '';
    position: absolute;
    top: 3px;
    left: 4px;
    width: 18px;
    height: 18px;
    background: #fff;
    border-radius: 50%;
    transition: 0.2s;
  }
  &:checked::before {
    left: 22px;
    background: #fff;
  }
`;

export const MeasureList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
  margin-bottom: 1.2rem;
  width: 100%;
  max-width: 500px;
  min-width: 320px;
  box-sizing: border-box;
`;

export const MeasureRow = styled.div`
  display: flex;
  align-items: center;
  background: #23232b;
  border-radius: 16px;
  padding: 0.7rem 1rem;
  gap: 1.2rem;
  width: 100%;
  box-sizing: border-box;
`;

export const MeasureCell = styled.div`
  color: #fff;
  font-size: 1.1rem;
  min-width: 60px;
  text-align: center;
  flex: 1;
`;

export const DeleteButton = styled.button`
  background: #bb86fc;
  border: none;
  border-radius: 10px;
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #23232b;
  font-size: 1.2rem;
  transition: ${theme.transitions.default};
  &:hover {
    background: #a06be0;
    color: #fff;
  }
`;

export const ShowPlayButton = styled.button`
  background: ${theme.colors.background};
  border: 3px solid #bb86fc;
  border-radius: 50%;
  width: 96px;
  height: 96px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0 32px 0 #bb86fc55;
  color: #fff;
  font-size: 2.5rem;
  margin: 1.2rem auto 0 auto;
  transition: ${theme.transitions.default};
  outline: none;
  @media (max-width: 400px) {
    width: 72px;
    height: 72px;
    font-size: 2rem;
  }
`; 