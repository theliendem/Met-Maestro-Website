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
  align-items: stretch;
  
  @media (max-width: ${theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    gap: ${theme.spacing.xl};
  }
`;

export const InteractiveDemo = styled.div`
  background: ${theme.colors.background};
  border-radius: 24px;
  padding: 1.5rem 1rem;
  border: 1px solid ${theme.colors.border};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.2rem;
  min-width: 320px;
  height: 100%;
  position: relative;
  box-shadow: 0 0 32px 0 #bb86fc22;
`;

export const TopRow = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const CornerButton = styled.button`
  background: ${theme.colors.surface};
  border: none;
  border-radius: 16px;
  width: 64px;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0 16px 0 #bb86fc33;
  transition: ${theme.transitions.default};
  outline: none;
  font-size: 2rem;
  color: #bbb;
  position: relative;
  &:hover {
    box-shadow: 0 0 24px 0 #bb86fc66;
    color: ${theme.colors.accent};
  }
`;

export const CenterSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.8rem;
`;

export const BPMNumber = styled.div`
  font-size: 3rem;
  font-weight: 700;
  color: ${theme.colors.text.primary};
  text-align: center;
  margin-bottom: 0.25rem;
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
  padding: 0 0.5rem;
  cursor: pointer;
  transition: ${theme.transitions.default};
  &:hover {
    color: ${theme.colors.accent};
  }
`;

export const BPMSlider = styled.input`
  width: 140px;
  accent-color: ${theme.colors.accent};
  margin: 0 0.5rem;
`;

export const PlayButton = styled.button`
  background: ${theme.colors.background};
  border: 3px solid ${theme.colors.accent};
  border-radius: 50%;
  width: 96px;
  height: 96px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0 32px 0 #bb86fc55;
  color: ${theme.colors.text.primary};
  font-size: 2.5rem;
  margin: 1.5rem 0 0.5rem 0;
  transition: ${theme.transitions.default};
  outline: none;
  &:hover {
    background: ${theme.colors.accent};
    color: ${theme.colors.background};
    box-shadow: 0 0 48px 0 #bb86fc99;
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
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: ${theme.spacing.md};
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