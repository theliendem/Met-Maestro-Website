import styled from 'styled-components';
import { theme } from '../../styles/theme';

export const ModeSelectorContainer = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  padding: ${theme.spacing.xxl} ${theme.spacing.lg};
  
  @media (max-width: ${theme.breakpoints.tablet}) {
    padding: ${theme.spacing.xl} ${theme.spacing.md};
  }
`;

export const ModeSelectorTitle = styled.h2`
  text-align: center;
  margin-bottom: ${theme.spacing.xl};
  color: ${theme.colors.text.primary};
`;

export const ModeButtons = styled.div`
  display: flex;
  justify-content: center;
  gap: ${theme.spacing.md};
  margin-bottom: ${theme.spacing.xl};
  
  @media (max-width: ${theme.breakpoints.mobile}) {
    flex-direction: column;
    align-items: center;
  }
`;

export const ModeButton = styled.button`
  background: ${props => props.active ? theme.colors.accent : 'transparent'};
  color: ${props => props.active ? theme.colors.text.primary : theme.colors.text.secondary};
  border: 2px solid ${props => props.active ? theme.colors.accent : theme.colors.border};
  padding: ${theme.spacing.md} ${theme.spacing.xl};
  border-radius: 50px;
  font-weight: 600;
  font-size: 1rem;
  transition: ${theme.transitions.default};
  min-width: 120px;
  
  &:hover {
    border-color: ${theme.colors.accent};
    color: ${props => props.active ? theme.colors.text.primary : theme.colors.accent};
    transform: translateY(-2px);
  }
  
  @media (max-width: ${theme.breakpoints.mobile}) {
    width: 200px;
  }
`;

export const ModeContent = styled.div`
  background: ${theme.colors.surface};
  border-radius: 20px;
  border: 1px solid ${theme.colors.border};
  padding: ${theme.spacing.xxl};
  box-shadow: ${theme.shadows.large};
  
  @media (max-width: ${theme.breakpoints.tablet}) {
    padding: ${theme.spacing.xl} ${theme.spacing.lg};
  }
`; 