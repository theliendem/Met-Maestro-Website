import styled from 'styled-components';
import { theme } from '../../styles/theme';

export const BenefitsContainer = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  padding: ${theme.spacing.xxl} ${theme.spacing.lg};
  background: ${theme.colors.surface};
  
  @media (max-width: ${theme.breakpoints.tablet}) {
    padding: ${theme.spacing.xl} ${theme.spacing.md};
  }
`;

export const BenefitsTitle = styled.h2`
  text-align: center;
  margin-bottom: ${theme.spacing.xxl};
  color: ${theme.colors.text.primary};
`;

export const BenefitsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: ${theme.spacing.xl};
  
  @media (max-width: ${theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    gap: ${theme.spacing.lg};
  }
`;

export const BenefitCard = styled.div`
  background: ${theme.colors.background};
  border-radius: 20px;
  padding: ${theme.spacing.xl};
  display: flex;
  align-items: center;
  gap: ${theme.spacing.lg};
  border: 1px solid ${theme.colors.border};
  transition: ${theme.transitions.default};
  
  &:hover {
    border-color: ${theme.colors.accent};
    box-shadow: ${theme.shadows.large};
  }
  
  @media (max-width: ${theme.breakpoints.mobile}) {
    flex-direction: column;
    text-align: center;
  }
`;

export const BenefitVisual = styled.div`
  min-width: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const BenefitContent = styled.div`
  flex: 1;
`;

export const BenefitTitle = styled.h3`
  color: ${theme.colors.text.primary};
  font-size: 1.5rem;
  margin-bottom: ${theme.spacing.md};
`;

export const BenefitDescription = styled.p`
  color: ${theme.colors.text.secondary};
  font-size: 1rem;
  line-height: 1.6;
`; 