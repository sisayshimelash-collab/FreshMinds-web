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
import { YouTubeIcon, TelegramIcon, GooglePlayIcon } from '../components/SocialIcons';
import { siteConfig } from '../config/siteConfig';
import SEO from '../components/SEO';

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
      <SEO 
        title="Contact Us | Support, Feedback & Student Help"
        description="Get in touch with FreshMinds Academy. Email us at Freshmindssupport@gmail.com or reach out via our official Telegram channel for student questions and academic collaboration."
        keywords="Contact FreshMinds, FreshMinds support, Freshmindssupport@gmail.com, Ethiopian student help, freshman academic questions"
        canonicalPath="/contact"
      />

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
      <section className="section" style={{ padding: 'clamp(40px, 5vw, 64px) 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: 'clamp(28px, 4vw, 48px)' }}>
            {/* Contact Information & Channels */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div>
                <h3 style={{ fontSize: '22px', fontWeight: 'bold', marginBottom: '8px' }}>Official Channels</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '15px' }}>
                  Connect with the FreshMinds Academy team across our verified platforms.
                </p>
              </div>

              {/* Google Play App Card */}
              <a 
                href={siteConfig.app.googlePlayUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="feature-card"
                style={{ padding: '18px', display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '14px', border: '1px solid #C7D2FE', background: 'linear-gradient(135deg, #F8FAFC 0%, #EEF2FF 100%)' }}
              >
                <img 
                  src="/app-icon.png" 
                  alt="FreshMinds Mobile App Icon" 
                  style={{ width: '46px', height: '46px', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.2)', flexShrink: 0 }} 
                />
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <h4 style={{ fontSize: '15px', fontWeight: 'bold', margin: 0 }}>Google Play Store</h4>
                    <span style={{ fontSize: '11px', fontWeight: 'bold', background: '#DCFCE7', color: '#16A34A', padding: '2px 8px', borderRadius: '999px' }}>Live</span>
                  </div>
                  <p style={{ fontSize: '13px', color: '#64748B', margin: '3px 0 0' }}>Download FreshMinds Mobile App</p>
                </div>
                <ArrowUpRight size={18} color="#7C3AED" style={{ flexShrink: 0 }} />
              </a>

              {/* Telegram Card */}
              <a 
                href={siteConfig.socials.telegram}
                target="_blank"
                rel="noopener noreferrer"
                className="feature-card"
                style={{ padding: '18px', display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '14px' }}
              >
                <div style={{ width: '46px', height: '46px', borderRadius: '14px', background: '#E0F2FE', color: '#0284C7', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <Send size={22} />
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <h4 style={{ fontSize: '15px', fontWeight: 'bold', margin: 0 }}>Telegram Community</h4>
                    <span style={{ fontSize: '11px', fontWeight: 'bold', background: '#E0F2FE', color: '#0369A1', padding: '2px 8px', borderRadius: '999px' }}>{siteConfig.community.memberCount}</span>
                  </div>
                  <p style={{ fontSize: '13px', color: '#64748B', margin: '3px 0 0' }}>{siteConfig.community.telegramHandle}</p>
                </div>
                <ArrowUpRight size={18} color="#94A3B8" style={{ flexShrink: 0 }} />
              </a>

              {/* YouTube Card */}
              <a 
                href={siteConfig.socials.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="feature-card"
                style={{ padding: '18px', display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '14px' }}
              >
                <div style={{ width: '46px', height: '46px', borderRadius: '14px', background: '#FEE2E2', color: '#DC2626', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <YouTubeIcon size={24} color="#DC2626" />
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <h4 style={{ fontSize: '15px', fontWeight: 'bold', margin: 0 }}>YouTube Academy</h4>
                    <span style={{ fontSize: '11px', fontWeight: 'bold', background: '#FEE2E2', color: '#B91C1C', padding: '2px 8px', borderRadius: '999px' }}>{siteConfig.community.youtubeSubscriberCount}</span>
                  </div>
                  <p style={{ fontSize: '13px', color: '#64748B', margin: '3px 0 0' }}>@FreshMindsAcademy-c8x</p>
                </div>
                <ArrowUpRight size={18} color="#94A3B8" style={{ flexShrink: 0 }} />
              </a>

              {/* Official Support Email Card (Clickable mailto for Mobile) */}
              <a 
                href={`mailto:${siteConfig.contact.email}`}
                className="feature-card"
                style={{ padding: '18px', display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '14px', border: '1px solid #DDD6FE' }}
              >
                <div style={{ width: '46px', height: '46px', borderRadius: '14px', background: '#EDE9FE', color: '#7C3AED', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <Mail size={22} />
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <h4 style={{ fontSize: '15px', fontWeight: 'bold', margin: 0 }}>Support Email</h4>
                    <span style={{ fontSize: '11px', fontWeight: 'bold', background: '#EDE9FE', color: '#7C3AED', padding: '2px 8px', borderRadius: '999px' }}>Tap to Email</span>
                  </div>
                  <p style={{ fontSize: '13px', color: '#7C3AED', fontWeight: '600', margin: '3px 0 0', wordBreak: 'break-all' }}>{siteConfig.contact.email}</p>
                </div>
                <ArrowUpRight size={18} color="#7C3AED" style={{ flexShrink: 0 }} />
              </a>

              {/* Location Card */}
              <div 
                className="feature-card"
                style={{ padding: '18px', display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '14px' }}
              >
                <div style={{ width: '46px', height: '46px', borderRadius: '14px', background: '#DCFCE7', color: '#16A34A', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <MapPin size={22} />
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <h4 style={{ fontSize: '15px', fontWeight: 'bold', margin: 0 }}>Headquarters</h4>
                  <p style={{ fontSize: '13px', color: '#64748B', margin: '3px 0 0' }}>{siteConfig.contact.location}</p>
                </div>
              </div>

              {/* Socials Row */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                <a 
                  href={siteConfig.socials.telegram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary"
                  style={{ width: '100%', justifyContent: 'center', fontSize: '13px', padding: '10px 14px' }}
                >
                  <TelegramIcon size={16} color="#0088CC" />
                  <span>Telegram</span>
                </a>
                <a 
                  href={siteConfig.socials.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary"
                  style={{ width: '100%', justifyContent: 'center', fontSize: '13px', padding: '10px 14px' }}
                >
                  <YouTubeIcon size={16} color="#EF4444" />
                  <span>YouTube</span>
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
                a: "FreshMinds Academy is an Ethiopian student-centered education platform created to help freshman students learn, practice, and navigate university life with confidence through our dedicated mobile app and vibrant Telegram community."
              },
              {
                q: "Does the website offer online courses?",
                a: "No. The website is our official promotional and brand front door. The actual learning—curriculum courses, video lessons, untimed practice questions, and timed exams—happens exclusively inside the FreshMinds Academy mobile app."
              },
              {
                q: "Which university freshman programs are supported?",
                a: "We currently support Ethiopian Higher Education curriculums for both Natural Science and Social Science freshman programs (including Logic & Critical Thinking, General Physics, Communicative English, General Psychology, Mathematics, and Geography)."
              },
              {
                q: "How can I join the community?",
                a: "You can freely join our 6,000+ member Telegram community at @FreshMinds_Academy to receive daily university updates, peer assistance, and study materials."
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
