import React, { useEffect } from 'react';
import { X, Sparkles, Target, Layers, Trophy } from 'lucide-react';

export const CaseStudyModal = ({ selectedProject, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedProject, onClose]);

  if (!selectedProject) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <div>
            <span className="case-badge">{selectedProject.client}</span>
            <h2>{selectedProject.title}</h2>
          </div>
          <button
            className="modal-close-btn"
            onClick={onClose}
            aria-label="Close modal"
          >
            <X size={20} />
          </button>
        </div>

        <div className="modal-body">
          {/* Key Metrics */}
          {selectedProject.metrics && selectedProject.metrics.length > 0 && (
            <div className="modal-metrics-grid">
              {selectedProject.metrics.map((m, idx) => (
                <div key={idx} className="modal-metric-card">
                  <div className="modal-metric-val">{m.value}</div>
                  <div className="modal-metric-lbl">{m.label}</div>
                </div>
              ))}
            </div>
          )}

          {/* Overview */}
          <div className="modal-section">
            <h4>
              <Sparkles size={16} color="var(--primary)" />
              <span>Executive Summary</span>
            </h4>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.72, margin: 0 }}>
              {selectedProject.summary}
            </p>
          </div>

          {/* Challenge */}
          {selectedProject.challenge && (
            <div className="modal-section">
              <h4>
                <Target size={16} color="var(--primary)" />
                <span>The Challenge</span>
              </h4>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.72, margin: 0 }}>
                {selectedProject.challenge}
              </p>
            </div>
          )}

          {/* Solution */}
          {selectedProject.solution && (
            <div className="modal-section">
              <h4>
                <Layers size={16} color="var(--primary)" />
                <span>The Strategic Solution</span>
              </h4>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.72, margin: 0 }}>
                {selectedProject.solution}
              </p>
            </div>
          )}

          {/* Phases */}
          {selectedProject.phases && selectedProject.phases.length > 0 && (
            <div className="modal-section">
              <h4>
                <Layers size={16} color="var(--primary)" />
                <span>Campaign Execution Roadmap</span>
              </h4>
              <div className="phase-timeline">
                {selectedProject.phases.map((phase, idx) => (
                  <div key={idx} className="phase-item">
                    <div className="phase-title">{phase.phaseName}</div>
                    <p className="phase-desc">{phase.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Results */}
          {selectedProject.results && selectedProject.results.length > 0 && (
            <div className="modal-section">
              <h4>
                <Trophy size={16} color="var(--primary)" />
                <span>Key Deliverables & Results</span>
              </h4>
              <ul className="card-highlights" style={{ border: 'none', paddingTop: 0 }}>
                {selectedProject.results.map((res, idx) => (
                  <li key={idx} style={{ fontSize: '0.94rem', color: 'var(--text-secondary)' }}>
                    {res}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Platforms */}
          {selectedProject.platforms && selectedProject.platforms.length > 0 && (
            <div className="modal-section">
              <h4>Platforms & Distribution</h4>
              <div className="case-tags">
                {selectedProject.platforms.map((p, idx) => (
                  <span key={idx} className="skill-tag">
                    {p}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
