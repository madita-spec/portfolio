import React, { useState } from 'react';
import { Mail, Instagram, Send, CheckCircle2, MessageSquare } from 'lucide-react';

export const Contact = ({ profile, onShowToast }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      onShowToast('Please fill in all required fields.', 'error');
      return;
    }

    const mailtoSubject = encodeURIComponent(
      formData.subject || `Inquiry from ${formData.name}`
    );
    const mailtoBody = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );

    window.open(
      `mailto:${profile.socialLinks?.email || 'maditakc103@gmail.com'}?subject=${mailtoSubject}&body=${mailtoBody}`,
      '_blank'
    );

    setSubmitted(true);
    onShowToast('Thank you! Your email draft is ready to send.', 'success');
  };

  return (
    <section id="contact" className="section contact-section">
      <div className="container contact-card-wrapper reveal-on-scroll">
        <div className="contact-grid">
          {/* Info */}
          <div className="contact-info">
            <p className="section-tag">
              <MessageSquare size={13} />
              <span>Let's Build Something Great</span>
            </p>
            <h2>{profile.callToActionText || 'Ready for high-engagement content strategies?'}</h2>
            <p>
              Whether you need an in-depth social media audit, a high-performing Reels/TikTok campaign, or full-funnel digital strategy, let's connect.
            </p>

            <div className="contact-direct-links">
              <a
                className="direct-link-item"
                href={`mailto:${profile.socialLinks?.email || 'maditakc103@gmail.com'}`}
              >
                <div className="direct-link-icon">
                  <Mail size={18} />
                </div>
                <div>
                  <div style={{ fontSize: '0.78rem', color: '#94a3b8' }}>Direct Email</div>
                  <span>{profile.socialLinks?.email || 'maditakc103@gmail.com'}</span>
                </div>
              </a>

              {profile.socialLinks?.videography && (
                <a
                  className="direct-link-item"
                  href={profile.socialLinks.videography}
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="direct-link-icon">
                    <Instagram size={18} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.78rem', color: '#94a3b8' }}>Videography Portfolio</div>
                    <span>@zee_ma._</span>
                  </div>
                </a>
              )}
            </div>
          </div>

          {/* Contact Form */}
          <form className="contact-form" onSubmit={handleSubmit}>
            {submitted ? (
              <div style={{ textAlign: 'center', padding: '2rem 1rem' }}>
                <CheckCircle2 size={52} color="#10b981" style={{ margin: '0 auto 1.2rem' }} />
                <h3 style={{ color: '#ffffff', margin: '0 0 0.5rem', fontSize: '1.4rem' }}>
                  Email Draft Ready!
                </h3>
                <p style={{ color: '#94a3b8', margin: '0 0 1.6rem', fontSize: '0.96rem' }}>
                  Your email client has been prepared with your inquiry for {profile.socialLinks?.email}.
                </p>
                <button
                  type="button"
                  className="button button-secondary button-sm"
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: '', email: '', subject: '', message: '' });
                  }}
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Your Name *</label>
                    <input
                      id="name"
                      type="text"
                      name="name"
                      required
                      placeholder="e.g. Alex Morgan"
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">Email Address *</label>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      required
                      placeholder="alex@company.com"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Subject / Brand</label>
                  <input
                    id="subject"
                    type="text"
                    name="subject"
                    placeholder="e.g. TikTok Strategy for New Product Launch"
                    value={formData.subject}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">How can I help you? *</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    placeholder="Tell me about your current social media challenges, target audience, and goals..."
                    value={formData.message}
                    onChange={handleChange}
                  />
                </div>

                <button
                  type="submit"
                  className="button button-primary"
                  style={{ width: '100%', marginTop: '0.6rem' }}
                >
                  <span>Send Message</span>
                  <Send size={16} />
                </button>
              </>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};
