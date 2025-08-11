import styled from 'styled-components';
import { theme } from '../../styles/theme';

export const FeaturesContainer = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  padding: ${theme.spacing.xxl} ${theme.spacing.lg};
  position: relative;
  isolation: isolate;
  
  &::before {
    content: '';
    position: absolute;
    z-index: -1;
    top: -20vh;
    left: -25vw;
    width: 90vw;
    height: 90vh;
    background: radial-gradient(50% 60% at 18% 45%, rgba(187, 134, 252, 0.16) 0%, rgba(187, 134, 252, 0.06) 40%, transparent 75%);
    filter: blur(18px);
    pointer-events: none;
  }
  
  @media (max-width: ${theme.breakpoints.tablet}) {
    padding: ${theme.spacing.xl} ${theme.spacing.md};
  }
`;

export const FeaturesTitle = styled.h2`
  text-align: center;
  margin-bottom: ${theme.spacing.xxl};
  color: ${theme.colors.text.primary};
`;

export const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(300px, 85%), 1fr));
  gap: clamp(1.5rem, ${theme.spacing.vxl}, 3rem);
  
  @media (max-width: ${theme.breakpoints.tablet}) {
    grid-template-columns: repeat(auto-fit, minmax(min(250px, 80%), 1fr));
    gap: clamp(1rem, ${theme.spacing.vlg}, 2rem);
  }
  
  @media (max-width: ${theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
    gap: clamp(0.75rem, ${theme.spacing.vsm}, 1.5rem);
  }
`;

export const FeatureCard = styled.div`
  background: ${theme.colors.surface};
  border-radius: 20px;
  padding: clamp(1.5rem, ${theme.spacing.vlg}, 3rem);
  text-align: center;
  border: 1px solid ${theme.colors.border};
  transition: ${theme.transitions.default};
  
  &:hover {
    border-color: ${theme.colors.accent};
    box-shadow: ${theme.shadows.large};
  }
  
  @media (max-width: ${theme.breakpoints.mobile}) {
    padding: clamp(1rem, ${theme.spacing.vmd}, 2rem);
  }
`;

export const FeatureIcon = styled.div`
  font-size: 3rem;
  margin-bottom: ${theme.spacing.lg};
`;

export const FeatureTitle = styled.h3`
  color: ${theme.colors.text.primary};
  font-size: 1.3rem;
  margin-bottom: ${theme.spacing.md};
`;

export const FeatureDescription = styled.p`
  color: ${theme.colors.text.secondary};
  font-size: 1rem;
  line-height: 1.6;
`; 