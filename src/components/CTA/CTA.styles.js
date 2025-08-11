import styled from 'styled-components';
import { theme } from '../../styles/theme';

export const CTAContainer = styled.section`
  background: transparent;
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
  gap: ${theme.spacing.xl};
  justify-content: center;
  align-items: center;
  margin-bottom: ${theme.spacing.xxl};
  width: 100%;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  
  @media (max-width: ${theme.breakpoints.mobile}) {
    flex-direction: column;
    align-items: center;
    gap: ${theme.spacing.lg};
  }
`;

export const StoreBadge = styled.a`
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex: 0 0 auto;
  
  img {
    height: 68px;
    width: auto;
  }
  
  &:nth-child(2) img {
    height: 103px;
  }
  
  @media (max-width: ${theme.breakpoints.mobile}) {
    img {
      height: 76px;
    }
    
    &:nth-child(2) img {
      height: 102px;
    }
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