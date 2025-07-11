import styled from 'styled-components';
import { theme } from '../../styles/theme';

export const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: ${theme.zIndex.header};
  background: ${theme.colors.background}cc;
  backdrop-filter: blur(10px);
  border-bottom: 1px solid ${theme.colors.border};
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: ${theme.spacing.md} ${theme.spacing.lg};
  
  @media (max-width: ${theme.breakpoints.tablet}) {
    padding: ${theme.spacing.sm} ${theme.spacing.md};
  }
`;

export const Logo = styled.div`
  h2 {
    color: ${theme.colors.accent};
    font-size: 1.5rem;
    font-weight: 700;
  }
`;

export const NavList = styled.ul`
  display: flex;
  list-style: none;
  gap: ${theme.spacing.lg};
  align-items: center;
  
  @media (max-width: ${theme.breakpoints.tablet}) {
    gap: ${theme.spacing.md};
  }
`;

export const NavItem = styled.li``;

export const NavLink = styled.a`
  color: ${theme.colors.text.secondary};
  font-weight: 500;
  transition: ${theme.transitions.default};
  
  &:hover {
    color: ${theme.colors.text.primary};
  }
  
  @media (max-width: ${theme.breakpoints.tablet}) {
    display: none;
  }
`;

export const CTAButton = styled.button`
  background: ${theme.colors.accent};
  color: ${theme.colors.text.primary};
  padding: ${theme.spacing.sm} ${theme.spacing.lg};
  border-radius: 50px;
  font-weight: 600;
  font-size: 0.9rem;
  transition: ${theme.transitions.default};
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  
  &:hover {
    background: ${theme.colors.accent}dd;
    transform: translateY(-2px);
  }
  
  @media (max-width: ${theme.breakpoints.tablet}) {
    padding: ${theme.spacing.sm} ${theme.spacing.md};
    font-size: 0.8rem;
  }
`; 