import React, { useState } from 'react';
import { portfolioData } from './data/portfolioData';
import { useScrollReveal } from './hooks/useScrollReveal';
import Particles from './components/Particles';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { CaseStudies } from './components/CaseStudies';
import { CaseStudyModal } from './components/CaseStudyModal';
import { Skills } from './components/Skills';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Toast } from './components/Toast';

function App() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [toast, setToast] = useState(null);

  // Initialize intersection observer scroll reveal
  useScrollReveal();

  const showToast = (message, type = 'info') => {
    setToast({ message, type });
    setTimeout(() => {
      setToast(null);
    }, 4500);
  };

  const hideToast = () => {
    setToast(null);
  };

  return (
    <div className="app-container">
      {/* Background Interactive Monochrome Particles */}
      <div className="particles-background-wrapper" aria-hidden="true">
        <Particles
          particleColors={['#ffffff', '#f8fafc', '#e2e8f0', '#cbd5e1', '#94a3b8']}
          particleCount={180}
          particleSpread={10}
          speed={0.09}
          particleBaseSize={85}
          moveParticlesOnHover={true}
          particleHoverFactor={0.75}
          alphaParticles={true}
          disableRotation={false}
          cameraDistance={20}
        />
      </div>

      {/* Ambient Floating Glow Elements */}
      <div className="ambient-glow-wrapper" aria-hidden="true">
        <div className="ambient-orb orb-1" />
        <div className="ambient-orb orb-2" />
        <div className="ambient-orb orb-3" />
      </div>

      <Navbar profile={portfolioData.profile} />

      <main>
        <Hero profile={portfolioData.profile} />
        <About profile={portfolioData.profile} />
        <Services services={portfolioData.services} />
        <CaseStudies
          projects={portfolioData.projects}
          onSelectProject={(project) => setSelectedProject(project)}
        />
        <Skills skills={portfolioData.skills} />
        <Testimonials testimonials={portfolioData.testimonials} />
        <Contact
          profile={portfolioData.profile}
          onShowToast={showToast}
        />
      </main>

      <Footer profile={portfolioData.profile} />

      {/* Case Study In-Depth Modal */}
      <CaseStudyModal
        selectedProject={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      {/* Real-time Toast Notifications */}
      <Toast toast={toast} onClose={hideToast} />
    </div>
  );
}

export default App;
