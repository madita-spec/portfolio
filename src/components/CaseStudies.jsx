import React, { useState } from 'react';
import { ArrowUpRight, TrendingUp, Briefcase } from 'lucide-react';

const categories = ['All', 'Auto / Mobility', 'FMCG / TikTok', 'Lifestyle & Beverage'];

export const CaseStudies = ({ projects, onSelectProject }) => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects =
    activeCategory === 'All'
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="work" className="section">
      <div className="container">
        <div className="section-heading reveal-on-scroll">
          <p className="section-tag">
            <Briefcase size={13} />
            <span>Case Studies</span>
          </p>
          <h2>Featured brand strategies</h2>
        </div>

        {/* Category Filters */}
        <div className="category-filter reveal-on-scroll stagger-1">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`filter-tab ${activeCategory === cat ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Case Studies Grid */}
        <div className="work-grid">
          {filteredProjects.map((project, idx) => (
            <article
              key={project.id}
              className={`case-study reveal-on-scroll stagger-${(idx % 3) + 1}`}
              onClick={() => onSelectProject(project)}
            >
              <div>
                <div className="case-badge">{project.badge || project.client}</div>
                <h3>{project.title}</h3>
                <p>{project.summary}</p>
                {project.tags && project.tags.length > 0 && (
                  <div className="case-tags">
                    {project.tags.slice(0, 3).map((tag, tIdx) => (
                      <span key={tIdx} className="case-tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              <div className="case-footer">
                <div className="case-metric-pill">
                  {project.metrics && project.metrics.length > 0 ? (
                    <span>
                      <TrendingUp size={14} style={{ display: 'inline', marginRight: 4 }} />
                      {project.metrics[0].value} {project.metrics[0].label}
                    </span>
                  ) : (
                    <span>{project.category}</span>
                  )}
                </div>
                <span className="view-case-link">
                  <span>View Case</span>
                  <ArrowUpRight size={15} />
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
