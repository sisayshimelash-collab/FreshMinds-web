import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Smartphone, 
  Send, 
  BookOpen, 
  CheckCircle, 
  Zap, 
  DownloadCloud, 
  Users, 
  Sparkles, 
  ArrowRight,
  ShieldCheck,
  Target,
  Compass,
  FileText
} from 'lucide-react';
import { siteConfig } from '../config/siteConfig';
import PhoneMockup from '../components/PhoneMockup';

export default function HomePage() {
  const [showcaseMode, setShowcaseMode] = useState('dashboard');

  return (
    <div>
      {/* 1. HERO SECTION */}
      <section className="hero-section">
        <div className="container">
          <div className="hero-grid">
            <div className="hero-content">
              <div className="hero-eyebrow">
                <span className="badge badge-primary">Official Platform</span>
                <span className="badge badge-amber">🇪🇹 Built For Ethiopian Students</span>
              </div>

              <h1 className="hero-title">
                {siteConfig.tagline} <span className="hero-title-highlight">🎓</span>
              </h1>

              <div className="hero-subtitle-amharic">
                {siteConfig.taglineAmharic}
              </div>

              <p className="hero-desc">
                {siteConfig.description}
              </p>

              <div className="hero-ctas">
                <Link to="/app" className="btn btn-primary btn-lg">
                  <Smartphone size={20} />
                  <span>Get the FreshMinds App</span>
                </Link>

                <a 
                  href={siteConfig.community.telegramUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn btn-secondary btn-lg"
                >
                  <Send size={18} color="#0284C7" />
                  <span>Join Our Community</span>
                </a>
              </div>

              <div className="hero-trust-bar">
                <div className="hero-trust-item">
                  <ShieldCheck size={16} color="#10B981" />
                  <span>Curated Freshman Curriculums</span>
                </div>
                <div className="hero-trust-item">
                  <Users size={16} color="#7C3AED" />
                  <span>{siteConfig.community.memberCount} Telegram Learners</span>
                </div>
              </div>
            </div>

            {/* Smartphone Mockup */}
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <PhoneMockup activeMode="dashboard" />
            </div>
          </div>
        </div>
      </section>

      {/* 2. STATS & COMMUNITY BANNER */}
      <section style={{ padding: '20px 0 60px' }}>
        <div className="container">
          <div className="stats-banner">
            <div className="stats-grid">
              <div>
                <div className="stat-num">{siteConfig.community.memberCount}</div>
                <div className="stat-label">{siteConfig.community.memberCountLabel}</div>
              </div>
              <div>
                <div className="stat-num">{siteConfig.community.reachedCount}</div>
                <div className="stat-label">{siteConfig.community.reachedCountLabel}</div>
              </div>
              <div>
                <div className="stat-num">100%</div>
                <div className="stat-label">Student-Centered Focus</div>
              </div>
              <div>
                <div className="stat-num">{siteConfig.community.appCount}</div>
                <div className="stat-label">{siteConfig.community.appCountLabel}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. MOBILE APP SHOWCASE */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-header">
            <span className="badge badge-primary">Mobile App Experience</span>
            <h2 className="section-title">Everything you need, right in your pocket.</h2>
            <p className="section-subtitle">
              FreshMinds Academy brings structured courses, untimed practice questions, timed exam simulations, and offline learning into one unified mobile experience.
            </p>

            {/* Interactive Showcase Tabs */}
            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', justifyContent: 'center', marginTop: '16px' }}>
              {[
                { id: 'dashboard', label: 'Student Dashboard' },
                { id: 'courses', label: 'Freshman Courses' },
                { id: 'practice', label: 'Practice Mode' },
                { id: 'exam', label: 'Timed Exam Simulation' },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setShowcaseMode(tab.id)}
                  className={`btn btn-sm ${showcaseMode === tab.id ? 'btn-primary' : 'btn-secondary'}`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '48px', alignItems: 'center' }}>
            <div>
              <PhoneMockup activeMode={showcaseMode} onModeChange={setShowcaseMode} />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div 
                style={{ 
                  background: showcaseMode === 'dashboard' ? '#F5F3FF' : 'white', 
                  border: showcaseMode === 'dashboard' ? '2px solid #7C3AED' : '1px solid #E5E7EB',
                  borderRadius: '16px', 
                  padding: '20px',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}
                onClick={() => setShowcaseMode('dashboard')}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div style={{ width: '40px', height: '40px', borderRadius: '12px', background: '#EDE9FE', color: '#7C3AED', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Sparkles size={20} />
                  </div>
                  <div>
                    <h3 style={{ fontSize: '17px', fontWeight: 'bold' }}>Intuitive Learning Dashboard</h3>
                    <p style={{ fontSize: '13px', color: '#64748B' }}>Track study streaks, earn learning points, and resume your last accessed subject instantly.</p>
                  </div>
                </div>
              </div>

              <div 
                style={{ 
                  background: showcaseMode === 'courses' ? '#EFF6FF' : 'white', 
                  border: showcaseMode === 'courses' ? '2px solid #3B82F6' : '1px solid #E5E7EB',
                  borderRadius: '16px', 
                  padding: '20px',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}
                onClick={() => setShowcaseMode('courses')}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div style={{ width: '40px', height: '40px', borderRadius: '12px', background: '#DBEAFE', color: '#2563EB', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <BookOpen size={20} />
                  </div>
                  <div>
                    <h3 style={{ fontSize: '17px', fontWeight: 'bold' }}>Freshman Curriculums & Notes</h3>
                    <p style={{ fontSize: '13px', color: '#64748B' }}>Philosophy/Logic, Physics, English, Psychology, and Mathematics broken into digestible chapters.</p>
                  </div>
                </div>
              </div>

              <div 
                style={{ 
                  background: showcaseMode === 'practice' ? '#F0FDF4' : 'white', 
                  border: showcaseMode === 'practice' ? '2px solid #10B981' : '1px solid #E5E7EB',
                  borderRadius: '16px', 
                  padding: '20px',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}
                onClick={() => setShowcaseMode('practice')}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div style={{ width: '40px', height: '40px', borderRadius: '12px', background: '#DCFCE7', color: '#16A34A', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Zap size={20} />
                  </div>
                  <div>
                    <h3 style={{ fontSize: '17px', fontWeight: 'bold' }}>Untimed Practice with Explanations</h3>
                    <p style={{ fontSize: '13px', color: '#64748B' }}>Get immediate answers, step-by-step reasoning, and formula references for every single question.</p>
                  </div>
                </div>
              </div>

              <div 
                style={{ 
                  background: showcaseMode === 'exam' ? '#FEF2F2' : 'white', 
                  border: showcaseMode === 'exam' ? '2px solid #EF4444' : '1px solid #E5E7EB',
                  borderRadius: '16px', 
                  padding: '20px',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}
                onClick={() => setShowcaseMode('exam')}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div style={{ width: '40px', height: '40px', borderRadius: '12px', background: '#FEE2E2', color: '#DC2626', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Target size={20} />
                  </div>
                  <div>
                    <h3 style={{ fontSize: '17px', fontWeight: 'bold' }}>Timed Real Exam Simulation</h3>
                    <p style={{ fontSize: '13px', color: '#64748B' }}>Practice under actual exam pressure with strict countdown clocks, question flagging, and score cards.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. WHAT FRESHMINDS IS */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="badge badge-primary">Platform Values</span>
            <h2 className="section-title">More than an app.</h2>
            <p className="section-subtitle">
              FreshMinds Academy was created to ensure no Ethiopian student has to navigate the challenging transition into university alone.
            </p>
          </div>

          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon-wrap" style={{ background: '#EDE9FE', color: '#7C3AED' }}>
                <BookOpen size={24} />
              </div>
              <h3>📚 Structured Learning</h3>
              <p>Lessons, videos, and reading materials curated specifically around the Ethiopian higher education curriculum.</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon-wrap" style={{ background: '#DBEAFE', color: '#2563EB' }}>
                <Zap size={24} />
              </div>
              <h3>🧠 Active Practice</h3>
              <p>Continuous problem-solving drills with instant feedback to help you master tricky academic concepts.</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon-wrap" style={{ background: '#FEF3C7', color: '#D97706' }}>
                <Target size={24} />
              </div>
              <h3>🎯 Exam Preparation</h3>
              <p>Simulate midterms and finals with real exam time constraints and comprehensive scoring reports.</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon-wrap" style={{ background: '#DCFCE7', color: '#16A34A' }}>
                <DownloadCloud size={24} />
              </div>
              <h3>📱 Study Offline</h3>
              <p>Download video lessons and markdown notes to your device so you can study freely without spending data.</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon-wrap" style={{ background: '#E0F2FE', color: '#0284C7' }}>
                <Users size={24} />
              </div>
              <h3>💬 Community Support</h3>
              <p>Connect with thousands of fellow freshmen on Telegram to share notes, tips, and campus insights.</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon-wrap" style={{ background: '#FCE7F3', color: '#DB2777' }}>
                <Compass size={24} />
              </div>
              <h3>🌱 University Navigation</h3>
              <p>Practical guidance on departmental placement, study habits, and succeeding in your university journey.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. ETHIOPIAN STUDENT FOCUS */}
      <section className="section section-alt">
        <div className="container">
          <div style={{ 
            background: 'linear-gradient(135deg, #1E1B4B 0%, #312E81 100%)', 
            borderRadius: '28px', 
            padding: '56px 40px', 
            color: 'white',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '40px',
            alignItems: 'center'
          }}>
            <div>
              <span className="badge" style={{ background: 'rgba(255,255,255,0.2)', color: 'white', marginBottom: '16px' }}>
                Authentic Identity
              </span>
              <h2 style={{ fontSize: '34px', color: 'white', marginBottom: '8px' }}>
                Built for Ethiopian Students
              </h2>
              <p className="amharic-tag" style={{ color: '#FBBF24', fontSize: '20px', marginBottom: '16px' }}>
                ለኢትዮጵያውያን ተማሪዎች የተሰራ
              </p>
              <p style={{ color: '#E0E7FF', fontSize: '16px', lineHeight: '1.7', marginBottom: '24px' }}>
                From freshman course selection to placement exams and campus transition advice, FreshMinds Academy reflects the genuine needs and realities of students in Ethiopia.
              </p>
              <Link to="/about" className="btn btn-secondary">
                <span>Read Our Story</span>
                <ArrowRight size={16} />
              </Link>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div style={{ background: 'rgba(255, 255, 255, 0.1)', padding: '16px 20px', borderRadius: '16px', border: '1px solid rgba(255, 255, 255, 0.15)' }}>
                <h4 style={{ color: '#FCD34D', fontSize: '16px', fontWeight: 'bold' }}>🇪🇹 Ethiopian Ministry Curriculum Aligned</h4>
                <p style={{ color: '#C7D2FE', fontSize: '13px', marginTop: '4px' }}>Subjects and syllabi tailored specifically to the higher education standard curriculum.</p>
              </div>

              <div style={{ background: 'rgba(255, 255, 255, 0.1)', padding: '16px 20px', borderRadius: '16px', border: '1px solid rgba(255, 255, 255, 0.15)' }}>
                <h4 style={{ color: '#6EE7B7', fontSize: '16px', fontWeight: 'bold' }}>📡 Low-Data & Offline Friendly</h4>
                <p style={{ color: '#C7D2FE', fontSize: '13px', marginTop: '4px' }}>Engineered for accessibility across all universities and campus connectivity conditions.</p>
              </div>

              <div style={{ background: 'rgba(255, 255, 255, 0.1)', padding: '16px 20px', borderRadius: '16px', border: '1px solid rgba(255, 255, 255, 0.15)' }}>
                <h4 style={{ color: '#93C5FD', fontSize: '16px', fontWeight: 'bold' }}>🤝 Vibrant Student Community</h4>
                <p style={{ color: '#C7D2FE', fontSize: '13px', marginTop: '4px' }}>Continuous peer support and shared files via our active Telegram channel.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. TELEGRAM COMMUNITY PROMOTION */}
      <section className="section">
        <div className="container">
          <div style={{ 
            background: 'linear-gradient(135deg, #0284C7 0%, #0369A1 100%)', 
            borderRadius: '24px', 
            padding: '48px 36px', 
            color: 'white',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            gap: '20px'
          }}>
            <div style={{ width: '60px', height: '60px', borderRadius: '20px', background: 'white', color: '#0284C7', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Send size={30} />
            </div>

            <h2 style={{ fontSize: '32px', color: 'white' }}>
              Join 5,000+ Students on Telegram
            </h2>

            <p style={{ maxWidth: '620px', color: '#E0F2FE', fontSize: '16px' }}>
              Our official Telegram channel <strong style={{ color: 'white' }}>{siteConfig.community.telegramHandle}</strong> is where thousands of Ethiopian freshmen get instant updates, share study documents, discuss coursework, and motivate one another.
            </p>

            <a 
              href={siteConfig.community.telegramUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-secondary btn-lg"
              style={{ color: '#0369A1', fontWeight: 'bold', background: 'white' }}
            >
              <Send size={18} />
              <span>Join the FreshMinds Community</span>
            </a>
          </div>
        </div>
      </section>

      {/* 7. FINAL DOWNLOAD CTA */}
      <section className="section section-alt" style={{ textAlign: 'center' }}>
        <div className="container">
          <div style={{ maxWidth: '680px', margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px' }}>
            <span className="badge badge-primary">Start Your Journey</span>
            <h2 className="section-title">Your next step starts here.</h2>
            <p className="section-subtitle">
              Ready to take charge of your freshman year? Explore the FreshMinds Academy mobile app and start learning today.
            </p>

            <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', justifyContent: 'center' }}>
              <Link to="/app" className="btn btn-primary btn-lg">
                <Smartphone size={20} />
                <span>Get the Mobile App</span>
              </Link>
              <Link to="/about" className="btn btn-secondary btn-lg">
                <span>Learn More About Us</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
