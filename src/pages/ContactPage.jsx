import React, { useState } from 'react';
import { 
  Mail, 
  Send, 
  MapPin, 
  CheckCircle2, 
  MessageSquare,
  HelpCircle,
  ArrowUpRight
} from 'lucide-react';
import { YouTubeIcon, LinkedInIcon, TelegramIcon } from '../components/SocialIcons';
import { siteConfig } from '../config/siteConfig';

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setSubmitted(true);
  };

  return (
    <div style={{ paddingBottom: '80px' }}>
      {/* Header */}
      <section style={{ background: 'var(--grad-hero)', padding: '60px 0 50px', borderBottom: '1px solid var(--border-subtle)' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '720px' }}>
          <span className="badge badge-primary">Get In Touch</span>
          <h1 style={{ fontSize: 'clamp(32px, 4vw, 48px)', margin: '16px 0 12px' }}>
            We'd Love to Hear From You.
          </h1>
          <p className="amharic-tag" style={{ fontSize: '20px', marginBottom: '16px' }}>
            አስተያየት፣ ጥያቄ ወይም የትብብር ሀሳብ አለዎት? ያግኙን!
          </p>
          <p style={{ color: 'var(--text-secondary)', fontSize: '18px', lineHeight: '1.6' }}>
            Have a question, feedback, academic collaboration idea, or inquiry? Reach out through our official channels.
          </p>
        </div>
      </section>

      {/* Contact Content Grid */}
      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '48px' }}>
            {/* Contact Information & Channels */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              <div>
                <h3 style={{ fontSize: '22px', fontWeight: 'bold', marginBottom: '8px' }}>Official Channels</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '15px' }}>
                  Connect with the FreshMinds Academy team across our verified platforms.
                </p>
              </div>

              {/* Telegram Card */}
              <a 
                href={siteConfig.socials.telegram}
                target="_blank"
                rel="noopener noreferrer"
                className="feature-card"
                style={{ padding: '20px', display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '16px' }}
              >
                <div style={{ width: '48px', height: '48px', borderRadius: '14px', background: '#E0F2FE', color: '#0284C7', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Send size={22} />
                </div>
                <div style={{ flex: 1 }}>
                  <h4 style={{ fontSize: '16px', fontWeight: 'bold' }}>Telegram Community & Support</h4>
                  <p style={{ fontSize: '13px', color: '#64748B' }}>{siteConfig.community.telegramHandle}</p>
                </div>
                <ArrowUpRight size={18} color="#94A3B8" />
              </a>

              {/* Email Card */}
              <div 
                className="feature-card"
                style={{ padding: '20px', display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '16px' }}
              >
                <div style={{ width: '48px', height: '48px', borderRadius: '14px', background: '#EDE9FE', color: '#7C3AED', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Mail size={22} />
                </div>
                <div style={{ flex: 1 }}>
                  <h4 style={{ fontSize: '16px', fontWeight: 'bold' }}>Official Email</h4>
                  <p style={{ fontSize: '13px', color: '#64748B' }}>{siteConfig.contact.email}</p>
                </div>
              </div>

              {/* Location Card */}
              <div 
                className="feature-card"
                style={{ padding: '20px', display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '16px' }}
              >
                <div style={{ width: '48px', height: '48px', borderRadius: '14px', background: '#DCFCE7', color: '#16A34A', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <MapPin size={22} />
                </div>
                <div style={{ flex: 1 }}>
                  <h4 style={{ fontSize: '16px', fontWeight: 'bold' }}>Headquarters</h4>
                  <p style={{ fontSize: '13px', color: '#64748B' }}>{siteConfig.contact.location}</p>
                </div>
              </div>

              {/* Socials Row */}
              <div style={{ display: 'flex', gap: '12px' }}>
                <a 
                  href={siteConfig.socials.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary"
                  style={{ flex: 1 }}
                >
                  <YouTubeIcon size={16} color="#DC2626" />
                  <span>YouTube</span>
                </a>
                <a 
                  href={siteConfig.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary"
                  style={{ flex: 1 }}
                >
                  <LinkedInIcon size={16} color="#0A66C2" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>

            {/* Inquiry Form */}
            <div style={{ background: 'white', border: '1px solid #E5E7EB', borderRadius: '24px', padding: '36px', boxShadow: 'var(--shadow-md)' }}>
              {submitted ? (
                <div style={{ textAlign: 'center', padding: '40px 20px' }}>
                  <div style={{ width: '60px', height: '60px', borderRadius: '50%', background: '#ECFDF5', color: '#10B981', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px' }}>
                    <CheckCircle2 size={32} />
                  </div>
                  <h3 style={{ fontSize: '22px', fontWeight: 'bold' }}>Thank You!</h3>
                  <p style={{ color: 'var(--text-secondary)', marginTop: '8px', fontSize: '15px' }}>
                    Your message has been received. Our team will review your note and respond as soon as possible.
                  </p>
                  <button 
                    onClick={() => { setSubmitted(false); setFormData({ name: '', email: '', subject: '', message: '' }); }}
                    className="btn btn-primary"
                    style={{ marginTop: '20px' }}
                  >
                    Send Another Note
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
                  <div>
                    <h3 style={{ fontSize: '20px', fontWeight: 'bold' }}>Send a Message</h3>
                    <p style={{ color: 'var(--text-muted)', fontSize: '13px', marginTop: '2px' }}>We typically respond within 24-48 hours.</p>
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '13px', fontWeight: '600', marginBottom: '6px' }}>Your Name</label>
                    <input 
                      type="text" 
                      required 
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Abebe Kebede"
                      style={{ width: '100%', padding: '12px 16px', borderRadius: '10px', border: '1px solid #CBD5E1', fontSize: '14px', outline: 'none' }}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '13px', fontWeight: '600', marginBottom: '6px' }}>Email Address</label>
                    <input 
                      type="email" 
                      required 
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. abebe@gmail.com"
                      style={{ width: '100%', padding: '12px 16px', borderRadius: '10px', border: '1px solid #CBD5E1', fontSize: '14px', outline: 'none' }}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '13px', fontWeight: '600', marginBottom: '6px' }}>Subject</label>
                    <input 
                      type="text" 
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="General inquiry, academic collaboration, or feedback"
                      style={{ width: '100%', padding: '12px 16px', borderRadius: '10px', border: '1px solid #CBD5E1', fontSize: '14px', outline: 'none' }}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '13px', fontWeight: '600', marginBottom: '6px' }}>Your Message</label>
                    <textarea 
                      required 
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="How can we help you?"
                      style={{ width: '100%', padding: '12px 16px', borderRadius: '10px', border: '1px solid #CBD5E1', fontSize: '14px', outline: 'none', resize: 'vertical' }}
                    ></textarea>
                  </div>

                  <button type="submit" className="btn btn-primary btn-lg" style={{ width: '100%', marginTop: '6px' }}>
                    <MessageSquare size={18} />
                    <span>Send Message</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section className="section section-alt">
        <div className="container" style={{ maxWidth: '800px' }}>
          <div className="section-header">
            <span className="badge badge-primary">FAQ</span>
            <h2 className="section-title">Frequently Asked Questions</h2>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {[
              {
                q: "What is FreshMinds Academy?",
                a: "FreshMinds Academy is an Ethiopian student-centered education platform created to help freshmen learn, practice, and navigate university life with confidence through our dedicated mobile app and vibrant Telegram community."
              },
              {
                q: "Does the website offer online courses?",
                a: "No. The website is our official promotional and brand front door. The actual learning—curriculum courses, video lessons, untimed practice questions, and timed exams—happens exclusively inside the FreshMinds Academy mobile app."
              },
              {
                q: "Which university freshman programs are supported?",
                a: "We currently support Ethiopian Higher Education curriculums for both Natural Science and Social Science freshmen (including Logic & Critical Thinking, General Physics, Communicative English, General Psychology, Mathematics, and Geography)."
              },
              {
                q: "How can I join the community?",
                a: "You can freely join our 5,000+ member Telegram community at @FreshMinds_Academy to receive daily university updates, peer assistance, and study materials."
              }
            ].map((faq, i) => (
              <div key={i} style={{ background: 'white', border: '1px solid #E5E7EB', borderRadius: '16px', padding: '20px' }}>
                <h4 style={{ fontSize: '16px', fontWeight: 'bold', color: '#0F172A', marginBottom: '8px' }}>
                  {faq.q}
                </h4>
                <p style={{ color: 'var(--text-secondary)', fontSize: '14px', lineHeight: '1.6' }}>
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
