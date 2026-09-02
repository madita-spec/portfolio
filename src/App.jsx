import React, { useState } from 'react';
import { portfolioData } from './data/portfolioData';
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
