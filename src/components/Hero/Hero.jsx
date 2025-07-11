import React from 'react';
import { motion } from 'framer-motion';
import { 
  HeroContainer, 
  HeroContent, 
  HeroTitle, 
  HeroSubtitle, 
  HeroButtons, 
  PrimaryButton, 
  SecondaryButton,
  HeroVisual,
  MetronomeVisual,
  MetronomeArm,
  BPMDisplay
} from './Hero.styles';
import { useState } from 'react';

const Hero = () => {
  const [bpm, setBpm] = useState(120);
  const [topNum, setTopNum] = useState(4);
  const [botNum, setBotNum] = useState(4);

  const handleBpmChange = (val) => {
    setBpm(Math.max(40, Math.min(200, val)));
  };

  return (
    <HeroContainer>
      <HeroContent>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <HeroTitle>
            The Ultimate Metronome for{' '}
            <span style={{ color: '#BB86FC' }}>Every Musician</span>
          </HeroTitle>
          <HeroSubtitle>
            Professional-grade precision meets intuitive design. Master your timing with Met Maestro's three powerful modes: Met, Show, and Tuner.
          </HeroSubtitle>
          <HeroButtons>
            <PrimaryButton
              as={motion.a}
              href="https://apps.apple.com/us/app/met-maestro/id6748158233"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              Download Now
            </PrimaryButton>
            <SecondaryButton
              as={motion.a}
              href="#features"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              Learn More
            </SecondaryButton>
          </HeroButtons>
        </motion.div>
        <HeroVisual>
          <div style={{
            width: 350,
            height: 700,
            background: '#18181b',
            borderRadius: 24,
            border: '1px solid #222',
            boxShadow: '0 0 32px #bb86fc22',
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '32px 0',
          }}>
            {/* Top Row */}
            <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between', padding: '0 32px', marginBottom: 32 }}>
              <button style={{ width: 64, height: 64, borderRadius: 20, background: '#23232b', border: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 0 16px #bb86fc33', fontSize: 32, color: '#bbb' }}>
                <span role="img" aria-label="tap">🖱️</span>
              </button>
              <button style={{ width: 64, height: 64, borderRadius: 20, background: '#23232b', border: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 0 16px #bb86fc33', fontSize: 32, color: '#bbb' }}>
                <span role="img" aria-label="sound">🎵</span>
              </button>
            </div>
            {/* BPM Display */}
            <div style={{ color: '#fff', fontSize: 48, fontWeight: 700, marginBottom: 8, textAlign: 'center' }}>
              {bpm} <span style={{ fontSize: 28, fontWeight: 400, color: '#bb86fc' }}>BPM</span>
            </div>
            {/* Slider Row */}
            <div style={{ display: 'flex', alignItems: 'center', width: '80%', margin: '0 auto 16px auto', gap: 16 }}>
              <button onClick={() => handleBpmChange(bpm - 1)} style={{ background: 'none', border: 'none', color: '#bbb', fontSize: 32, width: 32, height: 32, borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>-</button>
              <input type="range" min={40} max={200} value={bpm} onChange={e => handleBpmChange(Number(e.target.value))} style={{ flex: 1, accentColor: '#bb86fc', height: 4 }} />
              <button onClick={() => handleBpmChange(bpm + 1)} style={{ background: 'none', border: 'none', color: '#bbb', fontSize: 32, width: 32, height: 32, borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>+</button>
            </div>
            {/* Play Button */}
            <motion.button
              style={{
                width: 120,
                height: 120,
                borderRadius: '50%',
                background: '#18181b',
                border: '4px solid #bb86fc',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '24px auto',
                boxShadow: '0 0 32px #bb86fc55',
                color: '#fff',
                fontSize: 48,
                outline: 'none',
                position: 'relative',
              }}
              initial={{ boxShadow: '0 0 32px #bb86fc55' }}
              animate={{ boxShadow: ['0 0 32px #bb86fc55', '0 0 64px #bb86fc99', '0 0 32px #bb86fc55'] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginLeft: 8 }}>&#9654;</span>
            </motion.button>
            {/* Accent Dots */}
            <div style={{ display: 'flex', justifyContent: 'center', gap: 24, margin: '0 auto 16px auto' }}>
              {[0, 1, 2, 3].map(i => (
                <div key={i} style={{ width: 24, height: 24, borderRadius: '50%', border: '2px solid #bb86fc', background: i === 0 ? '#bb86fc' : 'transparent', transition: 'background 0.2s' }} />
              ))}
            </div>
            {/* Bottom Row */}
            <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', padding: '0 32px', marginTop: 16 }}>
              <button style={{ width: 64, height: 64, borderRadius: 20, background: '#23232b', border: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 0 16px #bb86fc33', fontSize: 32, color: '#bbb' }}>
                <span role="img" aria-label="volume">🔊</span>
              </button>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                  <button onClick={() => setTopNum(Math.max(1, topNum - 1))} style={{ background: 'none', border: 'none', color: '#bbb', fontSize: 24, width: 32, height: 32, borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{'<'}</button>
                  <span style={{ color: '#fff', fontSize: 32, fontWeight: 600, width: 32, textAlign: 'center' }}>{topNum}</span>
                  <button onClick={() => setTopNum(topNum + 1)} style={{ background: 'none', border: 'none', color: '#bbb', fontSize: 24, width: 32, height: 32, borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{'>'}</button>
                </div>
                <div style={{ height: 2, width: 48, background: '#888', margin: '2px 0' }} />
                <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                  <button onClick={() => setBotNum(Math.max(1, botNum - 1))} style={{ background: 'none', border: 'none', color: '#bbb', fontSize: 24, width: 32, height: 32, borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{'<'}</button>
                  <span style={{ color: '#fff', fontSize: 32, fontWeight: 600, width: 32, textAlign: 'center' }}>{botNum}</span>
                  <button onClick={() => setBotNum(botNum + 1)} style={{ background: 'none', border: 'none', color: '#bbb', fontSize: 24, width: 32, height: 32, borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{'>'}</button>
                </div>
              </div>
            </div>
          </div>
        </HeroVisual>
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero; 