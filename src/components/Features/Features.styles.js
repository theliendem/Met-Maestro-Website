import styled from 'styled-components';
import { theme } from '../../styles/theme';

export const FeaturesContainer = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  padding: ${theme.spacing.xxl} ${theme.spacing.lg};
  
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
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: ${theme.spacing.xl};
  
  @media (max-width: ${theme.breakpoints.tablet}) {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: ${theme.spacing.lg};
  }
`;

export const FeatureCard = styled.div`
  background: ${theme.colors.surface};
  border-radius: 20px;
  padding: ${theme.spacing.xl};
  text-align: center;
  border: 1px solid ${theme.colors.border};
  transition: ${theme.transitions.default};
  
  &:hover {
    border-color: ${theme.colors.accent};
    box-shadow: ${theme.shadows.large};
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