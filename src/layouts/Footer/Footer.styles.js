import styled from 'styled-components';
import { theme } from '../../styles/theme';

export const FooterContainer = styled.footer`
  background: ${theme.colors.surface};
  border-top: 1px solid ${theme.colors.border};
  margin-top: auto;
`;

export const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: ${theme.spacing.xl} ${theme.spacing.lg};
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: ${theme.spacing.lg};
  
  @media (max-width: ${theme.breakpoints.tablet}) {
    grid-template-columns: repeat(2, 1fr);
    padding: ${theme.spacing.lg} ${theme.spacing.md};
    gap: ${theme.spacing.md};
  }
  
  @media (max-width: ${theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`;

export const FooterSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.sm};
`;

export const FooterTitle = styled.h4`
  color: ${theme.colors.text.primary};
  font-weight: 600;
  margin-bottom: ${theme.spacing.xs};
`;

export const FooterLink = styled.a`
  color: ${theme.colors.text.secondary};
  font-size: 0.9rem;
  transition: ${theme.transitions.default};
  
  &:hover {
    color: ${theme.colors.accent};
  }
`;

export const Copyright = styled.div`
  border-top: 1px solid ${theme.colors.border};
  padding: ${theme.spacing.lg};
  text-align: center;
  
  p {
    color: ${theme.colors.text.secondary};
    font-size: 0.9rem;
  }
`; 