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
  gap: ${theme.spacing.xxl};
  align-items: start;
  
  @media (max-width: ${theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    gap: ${theme.spacing.xl};
  }
`;

export const InteractiveDemo = styled.div`
  background: ${theme.colors.background};
  border-radius: 15px;
  padding: ${theme.spacing.xl};
  border: 1px solid ${theme.colors.border};
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.lg};
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
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: ${theme.spacing.lg};
`;

export const FeatureCard = styled.div`
  background: ${theme.colors.background};
  border-radius: 15px;
  padding: ${theme.spacing.lg};
  border: 1px solid ${theme.colors.border};
  text-align: center;
  position: relative;
  transition: ${theme.transitions.default};
  
  &:hover {
    border-color: ${theme.colors.accent};
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