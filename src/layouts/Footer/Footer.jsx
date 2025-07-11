import React from 'react';
import { FooterContainer, FooterContent, FooterSection, FooterTitle, FooterLink, Copyright } from './Footer.styles';

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterSection>
          <FooterTitle>Met Maestro</FooterTitle>
          <p>The ultimate metronome for musicians of all levels.</p>
        </FooterSection>
        
        <FooterSection>
          <FooterTitle>Product</FooterTitle>
          <FooterLink href="#features">Features</FooterLink>
          <FooterLink href="#modes">Modes</FooterLink>
          <FooterLink href="#download">Download</FooterLink>
        </FooterSection>
        
        <FooterSection>
          <FooterTitle>Support</FooterTitle>
          <FooterLink href="#help">Help Center</FooterLink>
          <FooterLink href="#contact">Contact Us</FooterLink>
          <FooterLink href="#feedback">Feedback</FooterLink>
        </FooterSection>
        
        <FooterSection>
          <FooterTitle>Company</FooterTitle>
          <FooterLink href="#about">About</FooterLink>
          <FooterLink href="#privacy">Privacy Policy</FooterLink>
          <FooterLink href="#terms">Terms of Service</FooterLink>
        </FooterSection>
      </FooterContent>
      
      <Copyright>
        <p>&copy; 2024 Met Maestro. All rights reserved.</p>
      </Copyright>
    </FooterContainer>
  );
};

export default Footer; 