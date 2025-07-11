import React from 'react';
import { motion } from 'framer-motion';
import { 
  TestimonialsContainer, 
  TestimonialsTitle, 
  TestimonialsGrid, 
  TestimonialCard, 
  TestimonialContent, 
  TestimonialText, 
  TestimonialAuthor, 
  TestimonialRole, 
  TestimonialRating,
  StatsSection,
  StatItem,
  StatNumber,
  StatLabel
} from './Testimonials.styles';

const Testimonials = () => {
  const testimonials = [
    {
      text: "Met Maestro's Show Mode is a game-changer for our marching band. Creating complex sequences has never been easier!",
      author: "Sarah Johnson",
      role: "Band Director",
      rating: 5
    },
    {
      text: "The precision and responsiveness of this metronome is incredible. Perfect for my jazz ensemble rehearsals.",
      author: "Marcus Rodriguez",
      role: "Jazz Musician",
      rating: 5
    },
    {
      text: "Finally, a tuner that actually works perfectly. The accuracy is spot-on and the interface is beautiful.",
      author: "Emma Chen",
      role: "Classical Guitarist",
      rating: 5
    }
  ];

  const stats = [
    { number: "New", label: "Fresh Release" },
    { number: "4.9★", label: "App Store Rating" },
    { number: "iOS", label: "Available Now" },
    { number: "Free", label: "Download" }
  ];

  const renderStars = (rating) => {
    return '★'.repeat(rating) + '☆'.repeat(5 - rating);
  };

  return (
    <TestimonialsContainer id="testimonials">
      <TestimonialsTitle
        as={motion.h2}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true, amount: 0.5 }}
      >
        Built for Musicians
      </TestimonialsTitle>
      
      <TestimonialsGrid>
        {testimonials.map((testimonial, index) => (
          <TestimonialCard
            key={index}
            as={motion.div}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true, amount: 0.5 }}
            whileHover={{ y: -5 }}
          >
            <TestimonialContent>
              <TestimonialRating>{renderStars(testimonial.rating)}</TestimonialRating>
              <TestimonialText>"{testimonial.text}"</TestimonialText>
              <TestimonialAuthor>{testimonial.author}</TestimonialAuthor>
              <TestimonialRole>{testimonial.role}</TestimonialRole>
            </TestimonialContent>
          </TestimonialCard>
        ))}
      </TestimonialsGrid>
      
      <StatsSection>
        {stats.map((stat, index) => (
          <StatItem
            key={index}
            as={motion.div}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true, amount: 0.5 }}
          >
            <StatNumber>{stat.number}</StatNumber>
            <StatLabel>{stat.label}</StatLabel>
          </StatItem>
        ))}
      </StatsSection>
    </TestimonialsContainer>
  );
};

export default Testimonials; 