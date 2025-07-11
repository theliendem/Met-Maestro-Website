import styled from 'styled-components';
import { theme } from '../../styles/theme';

export const HeroContainer = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding: ${theme.spacing.xxl} ${theme.spacing.lg};
  background: linear-gradient(135deg, ${theme.colors.background} 0%, ${theme.colors.surface} 100%);
  
  @media (max-width: ${theme.breakpoints.tablet}) {
    padding: ${theme.spacing.xl} ${theme.spacing.md};
  }
`;

export const HeroContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${theme.spacing.xxl};
  align-items: center;
  
  @media (max-width: ${theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    gap: ${theme.spacing.xl};
    text-align: center;
  }
`;

export const HeroTitle = styled.h1`
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 700;
  line-height: 1.1;
  margin-bottom: ${theme.spacing.lg};
  color: ${theme.colors.text.primary};
`;

export const HeroSubtitle = styled.p`
  font-size: 1.2rem;
  line-height: 1.6;
  margin-bottom: ${theme.spacing.xl};
  color: ${theme.colors.text.secondary};
  
  @media (max-width: ${theme.breakpoints.tablet}) {
    font-size: 1.1rem;
  }
`;

export const HeroButtons = styled.div`
  display: flex;
  gap: ${theme.spacing.md};
  
  @media (max-width: ${theme.breakpoints.mobile}) {
    flex-direction: column;
    align-items: center;
  }
`;

export const PrimaryButton = styled.button`
  background: ${theme.colors.accent};
  color: ${theme.colors.text.primary};
  padding: ${theme.spacing.md} ${theme.spacing.xl};
  border-radius: 50px;
  font-weight: 600;
  font-size: 1.1rem;
  transition: ${theme.transitions.default};
  box-shadow: ${theme.shadows.medium};
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  
  &:hover {
    background: ${theme.colors.accent}dd;
    transform: translateY(-2px);
    box-shadow: ${theme.shadows.large};
  }
`;

export const SecondaryButton = styled.button`
  background: transparent;
  color: ${theme.colors.text.primary};
  padding: ${theme.spacing.md} ${theme.spacing.xl};
  border: 2px solid ${theme.colors.border};
  border-radius: 50px;
  font-weight: 600;
  font-size: 1.1rem;
  transition: ${theme.transitions.default};
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  
  &:hover {
    border-color: ${theme.colors.accent};
    color: ${theme.colors.accent};
    transform: translateY(-2px);
  }
`;

export const HeroVisual = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const MetronomeVisual = styled.div`
  width: 300px;
  height: 400px;
  background: ${theme.colors.surface};
  border-radius: 20px;
  border: 2px solid ${theme.colors.border};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  box-shadow: ${theme.shadows.large};
  
  &::before {
    content: '';
    position: absolute;
    top: 20px;
    left: 50%;
    transform: translateX(-50%);
    width: 20px;
    height: 20px;
    background: ${theme.colors.accent};
    border-radius: 50%;
  }
  
  @media (max-width: ${theme.breakpoints.tablet}) {
    width: 250px;
    height: 320px;
  }
`;

export const MetronomeArm = styled.div`
  width: 4px;
  height: 150px;
  background: ${theme.colors.accent};
  position: absolute;
  top: 40px;
  left: 50%;
  transform-origin: top center;
  transform: translateX(-50%);
  border-radius: 2px;
  
  &::after {
    content: '';
    position: absolute;
    top: -8px;
    left: -8px;
    width: 20px;
    height: 20px;
    background: ${theme.colors.accent};
    border-radius: 50%;
  }
`;

export const BPMDisplay = styled.div`
  position: absolute;
  bottom: 60px;
  background: ${theme.colors.background};
  padding: ${theme.spacing.md} ${theme.spacing.lg};
  border-radius: 10px;
  border: 1px solid ${theme.colors.border};
  font-size: 1.5rem;
  font-weight: 600;
  color: ${theme.colors.accent};
`; 