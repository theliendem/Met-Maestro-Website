# Product Requirements Document: Ultimate Metronome Landing Page

## Overview
The landing page for the Ultimate Metronome app will serve as the primary entry point for musicians seeking a professional-grade metronome solution. The page will emphasize the app's key features while maintaining a modern, minimalistic aesthetic.

## Target Audience
- Musicians of all skill levels
- Music teachers and students
- Professional performers
- Music producers

## Design Requirements

### Visual Design
- Dark mode primary theme
- Accent color: #BB86FC (purple)
- Modern and minimalistic UI
- Clean typography (Inter or SF Pro recommended)
- Ample white space
- Smooth animations and transitions

### Technical Stack
- React 18+
- Vite for build tooling
- Styled-components for styling
- Framer Motion for animations

## Key Sections

### 1. Hero Section
- Bold headline emphasizing universal musician appeal
- Brief, compelling subheadline
- App preview/mockup
- Primary CTA button
- Subtle animated elements

### 2. Feature Highlights
- Grid layout of core features
- Icons with brief descriptions
- Interactive elements on hover
- Animated transitions

### 3. Key Benefits
- Three main value propositions
- Visual representations
- Concise, impactful copy

### 4. Social Proof
- User testimonials
- Ratings/reviews
- Notable users or endorsements

### 5. Call-to-Action
- Download/Try Now section
- Platform availability
- Secondary CTA

## App Modes Section

### 1. Met Mode
#### Features to Highlight
- Professional-grade accuracy
- Tempo range: 40-200 BPM
- Visual and audio feedback
- Customizable time signatures
- Tap tempo functionality

#### Coming Soon Features
- Accent patterns
- Subdivisions (1/4, 1/8, 1/16, triplets)

#### UI Elements
- Interactive metronome visualization
- Large, clear BPM display
- Quick preset buttons
- Volume control

### 2. Show Mode
#### Features to Highlight
- Create and save custom show sequences
- Multiple time signatures per show
- Tempo transitions
- Measure counting
- Share shows via link/QR code
- Export/import functionality

#### Show Builder Interface
- Timeline view of measures
- Preview functionality

#### Coming Soon Features
- Drag-and-drop arrangement

#### Example Use Cases
- Marching band performances
- Progressive tempo exercises
- Multi-movement pieces
- Practice routines
- Ensemble rehearsals

### 3. Tuner Mode
#### Features to Highlight
- ±1 cent accuracy
- Visual pitch indicator
- Frequency display
- Instrument-specific presets

#### Coming Soon Features
- Multiple reference pitches (A=440Hz, 442Hz, etc.)
- Note history

#### UI Elements
- Large note display
- Precision meter
- Frequency readout
- Pitch deviation indicator
- Instrument selector

## Technical Requirements

### Performance
- Lighthouse score > 90
- Initial load time < 2s
- Optimized assets

### Responsive Design
- Mobile-first approach
- Breakpoints:
  - Mobile: 320px+
  - Tablet: 768px+
  - Desktop: 1024px+

### Accessibility
- WCAG 2.1 AA compliant
- Keyboard navigation
- Screen reader friendly
- Proper contrast ratios

## Implementation Guidelines

### Component Structure
```jsx
src/
  components/
    Hero/
    Modes/
      MetMode/
      ShowMode/
      TunerMode/
    Features/
    Benefits/
    Testimonials/
    CTA/
  layouts/
    Header/
    Footer/
  styles/
    theme.js
    globalStyles.js
  assets/
    images/
    icons/
```

### Theme Configuration
```javascript
const theme = {
  colors: {
    background: '#121212',
    surface: '#1E1E1E',
    accent: '#BB86FC',
    text: {
      primary: '#FFFFFF',
      secondary: 'rgba(255, 255, 255, 0.7)'
    }
  },
  spacing: {
    xs: '0.5rem',
    sm: '1rem',
    md: '1.5rem',
    lg: '2rem',
    xl: '3rem'
  }
};
```

## Mode Switching Animation
```javascript
const modeTransition = {
  initial: { opacity: 0, y: 20 },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut"
    }
  },
  exit: { 
    opacity: 0,
    y: -20
  }
};
```

## Mode Selection Component
```jsx
const ModeSelector = () => {
  const [activeMode, setActiveMode] = useState('met');

  return (
    <ModeSelectorContainer>
      <ModeButton 
        active={activeMode === 'met'}
        onClick={() => setActiveMode('met')}
      >
        Met Mode
      </ModeButton>
      <ModeButton 
        active={activeMode === 'show'}
        onClick={() => setActiveMode('show')}
      >
        Show Mode
      </ModeButton>
      <ModeButton 
        active={activeMode === 'tuner'}
        onClick={() => setActiveMode('tuner')}
      >
        Tuner Mode
      </ModeButton>
      <ModeContent
        initial="initial"
        animate="animate"
        exit="exit"
        variants={modeTransition}
      >
        {renderModeContent(activeMode)}
      </ModeContent>
    </ModeSelectorContainer>
  );
};
```

## Marketing Focus Points
### Met Mode
- Professional precision
- Intuitive interface
- Essential practice tool

### Show Mode
- Unique selling proposition
- Time-saving for educators
- Performance preparation
- Collaboration features

### Tuner Mode
- Professional accuracy
- Quick response time
- Versatility for all instruments

## Success Metrics
- Mode-specific engagement metrics
- Feature discovery rate
- Show Mode sharing statistics
- Cross-mode usage patterns
- User retention per mode

## Timeline
- Design phase: 1 week
- Development: 2 weeks
- Testing: 3 days
- Launch: 1 day

## Future Considerations
- A/B testing different layouts
- Localization support
- Blog/resources section
- Interactive demo integration