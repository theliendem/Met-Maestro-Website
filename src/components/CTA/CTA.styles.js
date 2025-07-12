import styled from 'styled-components';
import { theme } from '../../styles/theme';

export const CTAContainer = styled.section`
  background: linear-gradient(135deg, ${theme.colors.surface} 0%, ${theme.colors.background} 100%);
  padding: ${theme.spacing.xxl} ${theme.spacing.lg};
  margin-top: 6rem;
  
  @media (max-width: ${theme.breakpoints.tablet}) {
    padding: ${theme.spacing.xl} ${theme.spacing.md};
  }
`;

export const CTAContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
`;

export const CTATitle = styled.h2`
  font-size: clamp(2rem, 4vw, 3rem);
  color: ${theme.colors.text.primary};
  margin-bottom: ${theme.spacing.lg};
`;

export const CTADescription = styled.p`
  font-size: 1.2rem;
  color: ${theme.colors.text.secondary};
  line-height: 1.6;
  margin-bottom: ${theme.spacing.xxl};
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  
  @media (max-width: ${theme.breakpoints.tablet}) {
    font-size: 1.1rem;
  }
`;

export const CTAButtons = styled.div`
  display: flex;
  gap: ${theme.spacing.lg};
  justify-content: center;
  margin-bottom: ${theme.spacing.xxl};
  
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

export const PlatformSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${theme.spacing.lg};
`;

export const PlatformTitle = styled.h3`
  color: ${theme.colors.text.secondary};
  font-size: 1.1rem;
  font-weight: 500;
`;

export const PlatformIcons = styled.div`
  display: flex;
  gap: ${theme.spacing.lg};
  justify-content: center;
  flex-wrap: wrap;
  
  @media (max-width: ${theme.breakpoints.mobile}) {
    gap: ${theme.spacing.md};
  }
`;

export const PlatformIcon = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${theme.spacing.xs};
  padding: ${theme.spacing.md};
  border-radius: 15px;
  background: ${theme.colors.surface};
  border: 1px solid ${theme.colors.border};
  transition: ${theme.transitions.default};
  opacity: ${props => props.available ? 1 : 0.5};
  cursor: ${props => props.available ? 'pointer' : 'not-allowed'};
  
  &:hover {
    border-color: ${props => props.available ? theme.colors.accent : theme.colors.border};
    transform: ${props => props.available ? 'translateY(-2px)' : 'none'};
  }
  
  span:first-child {
    font-size: 1.5rem;
  }
  
  span:last-child {
    font-size: 0.9rem;
    color: ${theme.colors.text.secondary};
    font-weight: 500;
  }
`; 