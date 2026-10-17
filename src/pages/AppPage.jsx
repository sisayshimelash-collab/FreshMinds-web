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
  AlertCircle,
  Sparkles,
  Trophy,
  Flame,
  HardDrive,
  Check,
  Star,
  BarChart2,
  GraduationCap,
  Lightbulb
} from 'lucide-react';
import { siteConfig } from '../config/siteConfig';
import PhoneMockup from '../components/PhoneMockup';
import GooglePlayButton from '../components/GooglePlayButton';
import SEO from '../components/SEO';

export default function AppPage() {
  const [activeTab, setActiveTab] = useState('dashboard');

  return (
    <div style={{ paddingBottom: '80px' }}>
      <SEO 
        title="Mobile App | Offline Freshman Courses, Past Exams & Timed Simulations"
        description="Download the official FreshMinds Academy Android app on Google Play. Practice Ethiopian freshman courses, past exams with step-by-step solutions, and study 100% offline without mobile data."
        keywords="FreshMinds mobile app, Ethiopian freshman app, offline study app Ethiopia, freshman past exam practice, timed exam simulation, Natural Science freshman, Social Science, Calculus, General Physics, Google Play com.freshminds.mobile"
        canonicalPath="/app"
      />

      {/* App Hero */}
      <section style={{ background: 'var(--grad-hero)', padding: 'clamp(40px, 6vw, 64px) 0 clamp(32px, 5vw, 56px)', borderBottom: '1px solid var(--border-subtle)', position: 'relative', overflow: 'hidden' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: 'clamp(28px, 4vw, 56px)', alignItems: 'center' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '18px' }}>
                <img 
                  src="/app-icon.png" 
                  alt="FreshMinds Mobile App Icon" 
                  style={{ width: '54px', height: '54px', borderRadius: '14px', boxShadow: '0 6px 18px rgba(0, 0, 0, 0.18)', border: '1px solid rgba(255, 255, 255, 0.2)', flexShrink: 0 }} 
                />
                <div>
                  <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '4px 10px', borderRadius: '999px', background: 'rgba(34, 211, 238, 0.1)', border: '1px solid rgba(34, 211, 238, 0.3)', color: '#0891B2', fontSize: '12px', fontWeight: '700' }}>
                    <Sparkles size={12} color="#06B6D4" />
                    <span>OFFICIAL ANDROID APP NOW LIVE</span>
                  </div>
                  <div style={{ fontSize: '13px', color: '#64748B', fontWeight: 600, marginTop: '2px' }}>
                    v2.0 • Ethiopian University Learning
                  </div>
                </div>
              </div>
              
              <h1 style={{ fontSize: 'clamp(34px, 4.8vw, 52px)', lineHeight: '1.15', margin: '0 0 14px', letterSpacing: '-0.02em' }}>
                Your University Classroom in Your Pocket.
              </h1>
              
              <p className="amharic-tag" style={{ fontSize: '22px', marginBottom: '16px', color: '#6366F1' }}>
                የትም ቦታ ሆነው ይማሩ፣ ይለማመዱ፣ ለፈተና ይዘጋጁ!
              </p>
              
              <p style={{ color: 'var(--text-secondary)', fontSize: '18px', lineHeight: '1.6', marginBottom: '28px' }}>
                The official FreshMinds Academy mobile application brings university freshman curriculum courses, chapter-by-chapter practice questions, and timed exam simulations with instant step-by-step solutions directly to your Android device.
              </p>

              {/* Download CTA / Play Store Button */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'flex-start' }}>
                <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', alignItems: 'center' }}>
                  <GooglePlayButton size="lg" />
                  
                  <a 
                    href={siteConfig.community.telegramUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn btn-secondary btn-lg"
                    style={{ background: 'white' }}
                  >
                    <Send size={18} color="#0088cc" />
                    <span>Join 6K+ on Telegram</span>
                  </a>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap', color: 'var(--text-muted)', fontSize: '13px', paddingTop: '4px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <ShieldCheck size={16} color="#10B981" />
                    <span>Free to Download</span>
                  </div>
                  <span>•</span>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <HardDrive size={16} color="#06B6D4" />
                    <span>Offline Mode Supported</span>
                  </div>
                  <span>•</span>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                    {[1, 2, 3, 4, 5].map((s) => (
                      <Star key={s} size={13} fill="#F59E0B" color="#F59E0B" />
                    ))}
                    <span style={{ fontWeight: 600, color: 'var(--text-primary)', marginLeft: '4px' }}>5.0 Rating</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Phone Screen with Mobile Branding */}
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
            <span className="badge badge-primary">Interactive Demo Tour</span>
            <h2 className="section-title">Engineered Specifically for Ethiopian Freshmen</h2>
            <p className="section-subtitle">
              Explore the core learning screens designed directly into the native mobile app. Click any mode to see it live on the phone demo above!
            </p>

            {/* Mode Switchers */}
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', justifyContent: 'center', marginTop: '20px' }}>
              <button 
                onClick={() => setActiveTab('dashboard')}
                className={`btn btn-sm ${activeTab === 'dashboard' ? 'btn-primary' : 'btn-secondary'}`}
                style={{ borderRadius: '999px', padding: '8px 18px', display: 'flex', alignItems: 'center', gap: '6px' }}
              >
                <span>🏠</span>
                <span>Dashboard & Contests</span>
              </button>
              <button 
                onClick={() => setActiveTab('courses')}
                className={`btn btn-sm ${activeTab === 'courses' ? 'btn-primary' : 'btn-secondary'}`}
                style={{ borderRadius: '999px', padding: '8px 18px', display: 'flex', alignItems: 'center', gap: '6px' }}
              >
                <span>📚</span>
                <span>Programs & Courses</span>
              </button>
              <button 
                onClick={() => setActiveTab('practice')}
                className={`btn btn-sm ${activeTab === 'practice' ? 'btn-primary' : 'btn-secondary'}`}
                style={{ borderRadius: '999px', padding: '8px 18px', display: 'flex', alignItems: 'center', gap: '6px' }}
              >
                <span>🎯</span>
                <span>Mode Selection</span>
              </button>
              <button 
                onClick={() => setActiveTab('questions')}
                className={`btn btn-sm ${activeTab === 'questions' ? 'btn-primary' : 'btn-secondary'}`}
                style={{ borderRadius: '999px', padding: '8px 18px', display: 'flex', alignItems: 'center', gap: '6px' }}
              >
                <span>💡</span>
                <span>Question Practice</span>
              </button>
              <button 
                onClick={() => setActiveTab('stats')}
                className={`btn btn-sm ${activeTab === 'stats' ? 'btn-primary' : 'btn-secondary'}`}
                style={{ borderRadius: '999px', padding: '8px 18px', display: 'flex', alignItems: 'center', gap: '6px' }}
              >
                <span>📊</span>
                <span>Leaderboard</span>
              </button>
              <button 
                onClick={() => setActiveTab('downloads')}
                className={`btn btn-sm ${activeTab === 'downloads' ? 'btn-primary' : 'btn-secondary'}`}
                style={{ borderRadius: '999px', padding: '8px 18px', display: 'flex', alignItems: 'center', gap: '6px' }}
              >
                <span>🛡️</span>
                <span>Offline Downloads</span>
              </button>
            </div>
          </div>

          <div className="features-grid">
            <div 
              className="feature-card" 
              onClick={() => setActiveTab('dashboard')}
              style={{ cursor: 'pointer', border: activeTab === 'dashboard' ? '2px solid #7C3AED' : '1px solid #E5E7EB' }}
            >
              <div className="feature-icon-wrap" style={{ background: '#EDE9FE', color: '#7C3AED' }}>
                <Trophy size={24} />
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                <h3 style={{ margin: 0 }}>Dashboard & Live Contests</h3>
                <span style={{ fontSize: '11px', fontWeight: 'bold', background: 'rgba(124, 58, 237, 0.1)', color: '#7C3AED', padding: '3px 8px', borderRadius: '6px' }}>
                  Live Now
                </span>
              </div>
              <p>
                Student greeting, XP flame points counter, official Telegram Academy banner, live nationwide academic showdowns with countdown timers, and program enrollment cards.
              </p>
            </div>

            <div 
              className="feature-card" 
              onClick={() => setActiveTab('courses')}
              style={{ cursor: 'pointer', border: activeTab === 'courses' ? '2px solid #0284C7' : '1px solid #E5E7EB' }}
            >
              <div className="feature-icon-wrap" style={{ background: '#E0F2FE', color: '#0284C7' }}>
                <GraduationCap size={24} />
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                <h3 style={{ margin: 0 }}>Curated Freshman Courses</h3>
                <span style={{ fontSize: '11px', fontWeight: 'bold', background: 'rgba(2, 132, 199, 0.1)', color: '#0284C7', padding: '3px 8px', borderRadius: '6px' }}>
                  Natural & Social
                </span>
              </div>
              <p>
                Structured, chapter-by-chapter curriculum covering General Physics, Logic & Critical Thinking, Communicative English, and Mathematics with active enrollment badges.
              </p>
            </div>

            <div 
              className="feature-card"
              onClick={() => setActiveTab('practice')}
              style={{ cursor: 'pointer', border: activeTab === 'practice' ? '2px solid #10B981' : '1px solid #E5E7EB' }}
            >
              <div className="feature-icon-wrap" style={{ background: '#DCFCE7', color: '#10B981' }}>
                <Zap size={24} />
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                <h3 style={{ margin: 0 }}>Dual Mode: Practice vs Exam</h3>
                <span style={{ fontSize: '11px', fontWeight: 'bold', background: 'rgba(16, 185, 129, 0.1)', color: '#10B981', padding: '3px 8px', borderRadius: '6px' }}>
                  Select Mode
                </span>
              </div>
              <p>
                Choose between Untimed Practice Mode with instant explanations or Timed Exam Mode with 45-minute countdown clock and question flags.
              </p>
            </div>

            <div 
              className="feature-card"
              onClick={() => setActiveTab('questions')}
              style={{ cursor: 'pointer', border: activeTab === 'questions' ? '2px solid #F59E0B' : '1px solid #E5E7EB' }}
            >
              <div className="feature-icon-wrap" style={{ background: '#FEF3C7', color: '#D97706' }}>
                <Lightbulb size={24} />
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                <h3 style={{ margin: 0 }}>Interactive Solving & Explanations</h3>
                <span style={{ fontSize: '11px', fontWeight: 'bold', background: 'rgba(217, 119, 6, 0.1)', color: '#D97706', padding: '3px 8px', borderRadius: '6px' }}>
                  Instant Hints
                </span>
              </div>
              <p>
                Solve questions with immediate green checkmark feedback, comprehensive step-by-step formula explanations, and previous/next question navigation.
              </p>
            </div>

            <div 
              className="feature-card"
              onClick={() => setActiveTab('stats')}
              style={{ cursor: 'pointer', border: activeTab === 'stats' ? '2px solid #3B82F6' : '1px solid #E5E7EB' }}
            >
              <div className="feature-icon-wrap" style={{ background: '#DBEAFE', color: '#2563EB' }}>
                <BarChart2 size={24} />
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                <h3 style={{ margin: 0 }}>University Rankings & Leaderboard</h3>
                <span style={{ fontSize: '11px', fontWeight: 'bold', background: 'rgba(37, 99, 235, 0.1)', color: '#2563EB', padding: '3px 8px', borderRadius: '6px' }}>
                  Weekly Events
                </span>
              </div>
              <p>
                Track weekly student rankings across AAU, ASTU, Hawassa, Jimma, and Bahir Dar universities based on quiz accuracy, XP points, and speed.
              </p>
            </div>

            <div 
              className="feature-card"
              onClick={() => setActiveTab('downloads')}
              style={{ cursor: 'pointer', border: activeTab === 'downloads' ? '2px solid #059669' : '1px solid #E5E7EB' }}
            >
              <div className="feature-icon-wrap" style={{ background: '#D1FAE5', color: '#059669' }}>
                <DownloadCloud size={24} />
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                <h3 style={{ margin: 0 }}>100% Offline SQLite Architecture</h3>
                <span style={{ fontSize: '11px', fontWeight: 'bold', background: 'rgba(5, 150, 105, 0.1)', color: '#059669', padding: '3px 8px', borderRadius: '6px' }}>
                  Zero Data
                </span>
              </div>
              <p>
                Download entire video lectures and study notes directly to device storage. Review freely in dorms or library without requiring active Wi-Fi or mobile data.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Download CTA Banner */}
      <section className="container" style={{ marginTop: '20px' }}>
        <div style={{ 
          background: 'linear-gradient(135deg, #0F1624 0%, #161D2A 100%)', 
          borderRadius: '24px', 
          padding: '48px 36px', 
          color: 'white',
          border: '1px solid #1E3A5F',
          boxShadow: '0 20px 40px rgba(15, 22, 36, 0.25)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          gap: '24px'
        }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 16px', borderRadius: '999px', background: 'rgba(34, 211, 238, 0.15)', border: '1px solid rgba(34, 211, 238, 0.3)', color: '#22D3EE', fontSize: '14px', fontWeight: 600 }}>
            <span>⚡ Available Now on Google Play Store</span>
          </div>

          <h2 style={{ fontSize: 'clamp(28px, 3.5vw, 42px)', fontWeight: 800, margin: 0, color: '#F8FAFC' }}>
            Ready to Ace Your Freshman University Year?
          </h2>

          <p style={{ color: '#94A3B8', maxWidth: '640px', fontSize: '17px', lineHeight: 1.6, margin: 0 }}>
            Download FreshMinds Academy today and join thousands of university students learning with structured video lessons, offline reviews, and practice questions.
          </p>

          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', marginTop: '8px' }}>
            <GooglePlayButton size="lg" />
            <a 
              href={siteConfig.community.telegramUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-secondary btn-lg"
              style={{ background: 'rgba(255, 255, 255, 0.08)', color: '#F8FAFC', border: '1px solid rgba(255, 255, 255, 0.15)' }}
            >
              <Send size={18} color="#38BDF8" />
              <span>Join 6K+ Telegram Community</span>
            </a>
          </div>
        </div>
      </section>

      {/* Architecture Notice Banner */}
      <section className="container" style={{ marginTop: '40px' }}>
        <div style={{ background: '#EFF6FF', border: '1px solid #BFDBFE', borderRadius: '20px', padding: '28px 32px', display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
          <AlertCircle size={26} color="#2563EB" style={{ flexShrink: 0, marginTop: '2px' }} />
          <div>
            <h4 style={{ fontSize: '17px', fontWeight: 'bold', color: '#1E3A8A', margin: '0 0 6px' }}>
              Note: The FreshMinds Mobile App is the Learning Engine
            </h4>
            <p style={{ color: '#1E40AF', margin: 0, fontSize: '14px', lineHeight: '1.6' }}>
              The FreshMinds Academy website serves as our public platform, official announcements portal, and community hub. All actual course enrollments, video streams, offline chapter downloads, and personal quiz histories are managed securely inside the native Android mobile app.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
