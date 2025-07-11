import styled from 'styled-components';
import { theme } from '../../styles/theme';

export const TestimonialsContainer = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  padding: ${theme.spacing.xxl} ${theme.spacing.lg};
  
  @media (max-width: ${theme.breakpoints.tablet}) {
    padding: ${theme.spacing.xl} ${theme.spacing.md};
  }
`;

export const TestimonialsTitle = styled.h2`
  text-align: center;
  margin-bottom: ${theme.spacing.xxl};
  color: ${theme.colors.text.primary};
`;

export const TestimonialsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: ${theme.spacing.xl};
  margin-bottom: ${theme.spacing.xxl};
  
  @media (max-width: ${theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    gap: ${theme.spacing.lg};
  }
`;

export const TestimonialCard = styled.div`
  background: ${theme.colors.surface};
  border-radius: 20px;
  padding: ${theme.spacing.xl};
  border: 1px solid ${theme.colors.border};
  transition: ${theme.transitions.default};
  
  &:hover {
    border-color: ${theme.colors.accent};
    box-shadow: ${theme.shadows.large};
  }
`;

export const TestimonialContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.md};
`;

export const TestimonialRating = styled.div`
  color: ${theme.colors.accent};
  font-size: 1.2rem;
  margin-bottom: ${theme.spacing.sm};
`;

export const TestimonialText = styled.p`
  color: ${theme.colors.text.secondary};
  font-size: 1rem;
  line-height: 1.6;
  font-style: italic;
  margin-bottom: ${theme.spacing.lg};
`;

export const TestimonialAuthor = styled.h4`
  color: ${theme.colors.text.primary};
  font-size: 1.1rem;
  font-weight: 600;
`;

export const TestimonialRole = styled.p`
  color: ${theme.colors.text.secondary};
  font-size: 0.9rem;
`;

export const StatsSection = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: ${theme.spacing.lg};
  background: ${theme.colors.background};
  border-radius: 20px;
  padding: ${theme.spacing.xxl};
  border: 1px solid ${theme.colors.border};
  text-align: center;
  
  @media (max-width: ${theme.breakpoints.tablet}) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const StatItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${theme.spacing.sm};
`;

export const StatNumber = styled.div`
  font-size: 2.5rem;
  font-weight: 700;
  color: ${theme.colors.accent};
  line-height: 1;
`;

export const StatLabel = styled.div`
  color: ${theme.colors.text.secondary};
  font-size: 1rem;
  font-weight: 500;
`; 