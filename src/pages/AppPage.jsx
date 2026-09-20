import React, { useState } from 'react';
import { 
  Smartphone, 
  DownloadCloud, 
  CheckCircle2, 
  Clock, 
  HelpCircle, 
  BookOpen, 
  Zap, 
  Send, 
  Layers, 
  ShieldCheck,
  AlertCircle
} from 'lucide-react';
import { siteConfig } from '../config/siteConfig';
import PhoneMockup from '../components/PhoneMockup';

export default function AppPage() {
  const [activeTab, setActiveTab] = useState('dashboard');

  return (
    <div style={{ paddingBottom: '80px' }}>
      {/* App Hero */}
      <section style={{ background: 'var(--grad-hero)', padding: '60px 0 50px', borderBottom: '1px solid var(--border-subtle)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '48px', alignItems: 'center' }}>
            <div>
              <span className="badge badge-primary">Mobile Learning App</span>
              <h1 style={{ fontSize: 'clamp(32px, 4.5vw, 50px)', lineHeight: '1.15', margin: '16px 0 12px' }}>
                Your Classroom in Your Pocket.
              </h1>
              <p className="amharic-tag" style={{ fontSize: '20px', marginBottom: '16px' }}>
                የትም ቦታ ሆነው ይማሩ፣ ይለማመዱ፣ ይዘጋጁ!
              </p>
              <p style={{ color: 'var(--text-secondary)', fontSize: '18px', lineHeight: '1.6', marginBottom: '28px' }}>
                The FreshMinds Academy mobile app brings complete freshman curriculum courses, interactive practice questions, and full-length exam simulations straight to your Android phone.
              </p>

              {/* Download CTA / Status */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', alignItems: 'flex-start' }}>
                {siteConfig.app.status === 'available' && siteConfig.app.googlePlayUrl ? (
                  <a 
                    href={siteConfig.app.googlePlayUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn btn-primary btn-lg"
                  >
                    <Smartphone size={20} />
                    <span>Download on Google Play</span>
                  </a>
                ) : (
                  <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', alignItems: 'center' }}>
                    <div 
                      className="btn btn-secondary btn-lg" 
                      style={{ cursor: 'default', background: '#F1F5F9', border: '1px solid #CBD5E1', color: '#475569' }}
                    >
                      <Smartphone size={20} />
                      <span>{siteConfig.app.badgeText}</span>
                    </div>

                    <a 
                      href={siteConfig.community.telegramUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="btn btn-primary btn-lg"
                    >
                      <Send size={18} />
                      <span>Get Beta Updates on Telegram</span>
                    </a>
                  </div>
                )}

                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-muted)', fontSize: '13px' }}>
                  <ShieldCheck size={16} color="#10B981" />
                  <span>Free to download • Built with Expo native speed</span>
                </div>
              </div>
            </div>

            {/* Interactive Phone Screen */}
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <PhoneMockup activeMode={activeTab} onModeChange={setActiveTab} />
            </div>
          </div>
        </div>
      </section>

      {/* Feature Deep Dive */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="badge badge-primary">Core Capabilities</span>
            <h2 className="section-title">Engineered Specifically for Student Success</h2>
            <p className="section-subtitle">
              Take a closer look at the key learning modes built into the FreshMinds Academy app.
            </p>

            {/* Mode Switchers */}
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', justifyContent: 'center', marginTop: '16px' }}>
              <button 
                onClick={() => setActiveTab('dashboard')}
                className={`btn btn-sm ${activeTab === 'dashboard' ? 'btn-primary' : 'btn-secondary'}`}
              >
                Dashboard
              </button>
              <button 
                onClick={() => setActiveTab('courses')}
                className={`btn btn-sm ${activeTab === 'courses' ? 'btn-primary' : 'btn-secondary'}`}
              >
                Courses
              </button>
              <button 
                onClick={() => setActiveTab('practice')}
                className={`btn btn-sm ${activeTab === 'practice' ? 'btn-primary' : 'btn-secondary'}`}
              >
                Practice Mode
              </button>
              <button 
                onClick={() => setActiveTab('exam')}
                className={`btn btn-sm ${activeTab === 'exam' ? 'btn-primary' : 'btn-secondary'}`}
              >
                Exam Simulation
              </button>
            </div>
          </div>

          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon-wrap" style={{ background: '#EDE9FE', color: '#7C3AED' }}>
                <BookOpen size={24} />
              </div>
              <h3>Curated Freshman Courses</h3>
              <p>
                Natural Science & Social Science programs covering Logic & Critical Thinking, General Physics, English, Psychology, and Mathematics.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon-wrap" style={{ background: '#DBEAFE', color: '#2563EB' }}>
                <HelpCircle size={24} />
              </div>
              <h3>Untimed Practice with Explanations</h3>
              <p>
                Solve problems at your own pace with instant answers, comprehensive rationale, and step-by-step guidance.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon-wrap" style={{ background: '#FEE2E2', color: '#DC2626' }}>
                <Clock size={24} />
              </div>
              <h3>Timed Real Exam Simulation</h3>
              <p>
                Experience strict time constraints, question navigation, flag-for-review tools, and instant performance analysis.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon-wrap" style={{ background: '#DCFCE7', color: '#16A34A' }}>
                <DownloadCloud size={24} />
              </div>
              <h3>Full Offline Study Mode</h3>
              <p>
                Download entire video lectures and study notes to device storage. Review freely in dorms or library without an internet connection.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon-wrap" style={{ background: '#FEF3C7', color: '#D97706' }}>
                <Zap size={24} />
              </div>
              <h3>Points, Streaks & Motivation</h3>
              <p>
                Earn study points for completing chapters and quizzes. Maintain daily learning streaks to keep your momentum high.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon-wrap" style={{ background: '#F3E8FF', color: '#9333EA' }}>
                <Layers size={24} />
              </div>
              <h3>Comprehensive Study Notes</h3>
              <p>
                High-yield chapter summaries with formatted tables, definitions, and formulas ready for quick exam reviews.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* App Notice Banner */}
      <section className="container">
        <div style={{ background: '#EFF6FF', border: '1px solid #BFDBFE', borderRadius: '20px', padding: '32px', display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
          <AlertCircle size={28} color="#2563EB" style={{ flexShrink: 0, marginTop: '4px' }} />
          <div>
            <h4 style={{ fontSize: '18px', fontWeight: 'bold', color: '#1E3A8A' }}>
              Notice: The FreshMinds App is the School
            </h4>
            <p style={{ color: '#1E40AF', marginTop: '6px', fontSize: '14px', lineHeight: '1.6' }}>
              The FreshMinds Academy official website is our brand and community front door. All actual course enrollments, video players, quizzes, and learning analytics happen exclusively inside the native mobile app.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
