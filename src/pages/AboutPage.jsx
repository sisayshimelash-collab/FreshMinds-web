import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Heart, 
  Target, 
  Eye, 
  CheckCircle, 
  Smartphone, 
  Send, 
  ArrowRight,
  Sparkles,
  Milestone
} from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

export default function AboutPage() {
  return (
    <div style={{ paddingBottom: '80px' }}>
      {/* Page Header */}
      <section style={{ background: 'var(--grad-hero)', padding: '60px 0 40px', borderBottom: '1px solid var(--border-subtle)' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '760px' }}>
          <span className="badge badge-primary">About FreshMinds Academy</span>
          <h1 style={{ fontSize: 'clamp(32px, 4vw, 48px)', margin: '16px 0 8px' }}>
            Empowering Ethiopian Students Every Step of the Way
          </h1>
          <p className="amharic-tag" style={{ fontSize: '20px', marginBottom: '16px' }}>
            ለኢትዮጵያውያን ተማሪዎች ስኬት የተቋቋመ
          </p>
          <p style={{ color: 'var(--text-secondary)', fontSize: '18px', lineHeight: '1.6' }}>
            FreshMinds Academy was founded on a simple principle: students shouldn't have to navigate the monumental leap into university life alone.
          </p>
        </div>
      </section>

      {/* Mission & Vision Cards */}
      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '32px' }}>
            <div className="feature-card" style={{ borderTop: '4px solid #7C3AED' }}>
              <div className="feature-icon-wrap" style={{ background: '#EDE9FE', color: '#7C3AED' }}>
                <Target size={24} />
              </div>
              <h3>Our Mission</h3>
              <p style={{ fontSize: '16px', color: 'var(--text-secondary)' }}>
                {siteConfig.mission}
              </p>
            </div>

            <div className="feature-card" style={{ borderTop: '4px solid #3B82F6' }}>
              <div className="feature-icon-wrap" style={{ background: '#DBEAFE', color: '#2563EB' }}>
                <Eye size={24} />
              </div>
              <h3>Our Vision</h3>
              <p style={{ fontSize: '16px', color: 'var(--text-secondary)' }}>
                {siteConfig.vision}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Story Section */}
      <section className="section section-alt">
        <div className="container" style={{ maxWidth: '840px' }}>
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <span className="badge badge-primary">Our Journey</span>
            <h2 className="section-title">From a student community to a dedicated learning platform.</h2>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', fontSize: '16px', color: 'var(--text-secondary)', lineHeight: '1.8' }}>
            <p>
              Entering university in Ethiopia is both an exhilarating milestone and a tremendous challenge. Freshmen often face unfamiliar curricula, demanding exam standards, competitive departmental placements, and limited academic guidance.
            </p>
            <p>
              FreshMinds Academy began as a student-driven initiative on Telegram, created by passionate students who wanted to share past exams, chapter summaries, and practical campus advice. What started as simple study exchanges quickly resonated with thousands of learners across the country.
            </p>
            <p>
              As our community expanded beyond <strong>5,000+ students</strong>, it became clear that Ethiopian students needed more than informal file shares—they deserved a dedicated, distraction-free educational tool built around their reality. That conviction gave birth to the <strong>FreshMinds Academy Mobile App</strong>: an offline-friendly, curriculum-aligned companion where students can watch structured lessons, practice untimed questions, and sit for realistic timed exams.
            </p>
          </div>

          {/* Visual Timeline */}
          <div style={{ marginTop: '56px', borderLeft: '3px solid #DDD6FE', paddingLeft: '28px', display: 'flex', flexDirection: 'column', gap: '36px' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span style={{ width: '14px', height: '14px', borderRadius: '50%', background: '#7C3AED', marginLeft: '-36px' }}></span>
                <h4 style={{ fontSize: '18px', fontWeight: 'bold' }}>1. The Spark</h4>
              </div>
              <p style={{ color: 'var(--text-secondary)', marginTop: '4px', fontSize: '14px' }}>
                Recognizing that freshmen lacked accessible, high-yield guidance for university courses and departmental placement.
              </p>
            </div>

            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span style={{ width: '14px', height: '14px', borderRadius: '50%', background: '#2563EB', marginLeft: '-36px' }}></span>
                <h4 style={{ fontSize: '18px', fontWeight: 'bold' }}>2. The Telegram Community</h4>
              </div>
              <p style={{ color: 'var(--text-secondary)', marginTop: '4px', fontSize: '14px' }}>
                Growing to 5,000+ members on <strong style={{ color: '#0F172A' }}>@FreshMinds_Academy</strong>, providing real-time university announcements and peer support.
              </p>
            </div>

            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span style={{ width: '14px', height: '14px', borderRadius: '50%', background: '#10B981', marginLeft: '-36px' }}></span>
                <h4 style={{ fontSize: '18px', fontWeight: 'bold' }}>3. The Mobile Learning App</h4>
              </div>
              <p style={{ color: 'var(--text-secondary)', marginTop: '4px', fontSize: '14px' }}>
                Developing our flagship React Native mobile app with offline downloads, untimed practice modes, and timed exam countdowns.
              </p>
            </div>

            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span style={{ width: '14px', height: '14px', borderRadius: '50%', background: '#F59E0B', marginLeft: '-36px' }}></span>
                <h4 style={{ fontSize: '18px', fontWeight: 'bold' }}>4. Ongoing Growth</h4>
              </div>
              <p style={{ color: 'var(--text-secondary)', marginTop: '4px', fontSize: '14px' }}>
                Continuing to expand course coverage, practice question banks, and support for thousands of aspiring students nationwide.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Believe Section */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="badge badge-primary">Guiding Principles</span>
            <h2 className="section-title">What We Believe</h2>
          </div>

          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon-wrap" style={{ background: '#EDE9FE', color: '#7C3AED' }}>
                <Heart size={24} />
              </div>
              <h3>Student-Centered Always</h3>
              <p>Every feature, explanation, and resource is shaped by direct student feedback and real campus experiences.</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon-wrap" style={{ background: '#DBEAFE', color: '#2563EB' }}>
                <Sparkles size={24} />
              </div>
              <h3>Practical & Actionable</h3>
              <p>We reject fluff and abstract jargon in favor of direct, exam-relevant clarity that boosts student understanding.</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon-wrap" style={{ background: '#DCFCE7', color: '#16A34A' }}>
                <CheckCircle size={24} />
              </div>
              <h3>Uncompromised Authenticity</h3>
              <p>We never make exaggerated claims. We celebrate genuine milestones, real community impact, and honest education.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <div className="container" style={{ textAlign: 'center', marginTop: '30px' }}>
        <div style={{ background: '#F5F3FF', padding: '48px 24px', borderRadius: '24px', border: '1px solid #DDD6FE' }}>
          <h2 style={{ fontSize: '28px', marginBottom: '12px' }}>Experience FreshMinds for Yourself</h2>
          <p style={{ color: 'var(--text-secondary)', maxWidth: '540px', margin: '0 auto 24px' }}>
            Join our community or download the mobile app to get started on your freshman journey today.
          </p>
          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/app" className="btn btn-primary">
              <Smartphone size={18} />
              <span>Explore The App</span>
            </Link>
            <a href={siteConfig.community.telegramUrl} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
              <Send size={18} color="#0284C7" />
              <span>Join Telegram Community</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
