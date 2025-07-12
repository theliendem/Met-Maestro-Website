import styled from 'styled-components';
import { theme } from '../../styles/theme';

export const FeedbackContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: ${theme.spacing.xxl} ${theme.spacing.lg};
  min-height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const FeedbackTitle = styled.h1`
  color: ${theme.colors.accent};
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: ${theme.spacing.md};
  
  @media (max-width: ${theme.breakpoints.tablet}) {
    font-size: 2rem;
  }
`;

export const FeedbackDescription = styled.p`
  color: ${theme.colors.text.secondary};
  font-size: 1.1rem;
  text-align: center;
  margin-bottom: ${theme.spacing.xl};
  line-height: 1.6;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`;

export const FeedbackForm = styled.form`
  background: ${theme.colors.background};
  border-radius: 20px;
  padding: ${theme.spacing.xl};
  border: 1px solid ${theme.colors.border};
  margin-bottom: ${theme.spacing.xl};
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`;

export const FormGroup = styled.div`
  margin-bottom: ${theme.spacing.lg};
`;

export const Label = styled.label`
  display: block;
  color: ${theme.colors.text.primary};
  font-weight: 600;
  margin-bottom: ${theme.spacing.sm};
  font-size: 1rem;
`;

export const Input = styled.input`
  width: 100%;
  padding: ${theme.spacing.md};
  background: ${theme.colors.surface};
  border: 1px solid ${theme.colors.border};
  border-radius: 10px;
  color: ${theme.colors.text.primary};
  font-size: 1rem;
  transition: ${theme.transitions.default};
  
  &:focus {
    outline: none;
    border-color: ${theme.colors.accent};
    box-shadow: 0 0 0 2px ${theme.colors.accent}22;
  }
  
  &::placeholder {
    color: ${theme.colors.text.secondary};
  }
`;

export const TextArea = styled.textarea`
  width: 100%;
  padding: ${theme.spacing.md};
  background: ${theme.colors.surface};
  border: 1px solid ${theme.colors.border};
  border-radius: 10px;
  color: ${theme.colors.text.primary};
  font-size: 1rem;
  font-family: inherit;
  resize: vertical;
  min-height: 120px;
  transition: ${theme.transitions.default};
  
  &:focus {
    outline: none;
    border-color: ${theme.colors.accent};
    box-shadow: 0 0 0 2px ${theme.colors.accent}22;
  }
  
  &::placeholder {
    color: ${theme.colors.text.secondary};
  }
`;

export const SubmitButton = styled.button`
  width: 100%;
  padding: ${theme.spacing.md} ${theme.spacing.lg};
  background: ${theme.colors.accent};
  color: ${theme.colors.text.primary};
  border: none;
  border-radius: 10px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: ${theme.transitions.default};
  
  &:hover:not(:disabled) {
    background: ${theme.colors.accentHover};
    transform: translateY(-2px);
    box-shadow: 0 8px 25px ${theme.colors.accent}33;
  }
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

export const AlternativeContact = styled.div`
  text-align: center;
  margin-top: ${theme.spacing.xl};
`;

export const ContactInfo = styled.div`
  background: ${theme.colors.background};
  border-radius: 15px;
  padding: ${theme.spacing.lg};
  border: 1px solid ${theme.colors.border};
  
  p {
    color: ${theme.colors.text.secondary};
    margin-bottom: ${theme.spacing.sm};
    font-size: 1rem;
  }
`;

export const ContactEmail = styled.a`
  color: ${theme.colors.accent};
  font-size: 1.2rem;
  font-weight: 600;
  text-decoration: none;
  transition: ${theme.transitions.default};
  
  &:hover {
    color: ${theme.colors.accentHover};
    text-decoration: underline;
  }
`; 