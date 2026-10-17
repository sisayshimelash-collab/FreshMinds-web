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
  FileText,
  Star,
  Play,
  Trophy,
  ExternalLink,
  BarChart2,
  GraduationCap,
  Lightbulb,
  ChevronDown,
  HelpCircle,
  MapPin
} from 'lucide-react';
import { TelegramIcon, YouTubeIcon } from '../components/SocialIcons';
import GooglePlayButton from '../components/GooglePlayButton';
import PhoneMockup from '../components/PhoneMockup';
import SEO from '../components/SEO';
import { siteConfig } from '../config/siteConfig';

const freshmanFaqs = [
  {
    question: "What courses does FreshMinds Academy cover for Ethiopian freshman students?",
    answer: "FreshMinds Academy provides structured chapter-by-chapter curriculum courses for Natural Science, Social Science, and Remedial programs across Ethiopian universities. Core courses include General Physics, Mathematics for Natural Science (Calculus I), General Chemistry, Critical Thinking and Logic, Communicative English Language Skills, Introduction to Emerging Technologies, Mathematics for Social Science, and General Psychology."
  },
  {
    question: "Does the app include past university freshman exams with step-by-step solutions?",
    answer: "Yes! FreshMinds features a comprehensive archive of real Ethiopian university freshman midterm and final exam questions. You can practice untimed with immediate formula breakdowns and step-by-step solutions in Practice Mode, or simulate real exam conditions with timed countdowns in Exam Mode."
  },
  {
    question: "How does the 100% offline study mode work on Android?",
    answer: "The FreshMinds Academy Android application utilizes an embedded SQLite local database and secure device cache. You can download video lectures, full chapter notes, and question banks while connected to Wi-Fi or mobile data, and then study anywhere on campus with 0% internet connection."
  },
  {
    question: "Can FreshMinds Academy help me achieve a high GPA and join Medicine or Engineering?",
    answer: "Absolutely. Departmental placement after freshman year is highly competitive. Hundreds of students from universities like AAU, ASTU, Jimma, Hawassa, and Wollo have used FreshMinds's high-yield explanations and practice questions to earn 3.8+ to 4.0 GPAs and successfully enter Medicine, Software Engineering, and top faculties."
  },
  {
    question: "Which Ethiopian universities follow this freshman curriculum?",
    answer: "All public and private universities under the Ethiopian Ministry of Education framework follow this harmonized freshman modular curriculum, including Addis Ababa University (AAU), Adama Science & Technology University (ASTU), AASTU, Jimma University, Hawassa University, Bahir Dar University, Wollo University, Haramaya University, Gondar University, and Arba Minch University."
  },
  {
    question: "Is the FreshMinds Academy mobile app free to download?",
    answer: "Yes, the FreshMinds mobile app is free to download on the Google Play Store (com.freshminds.mobile), with free courses, practice quizzes, study guides, and direct access to our active 6,000+ member Telegram student community (@FreshMinds_Academy)."
  }
];

export default function HomePage() {
  const [showcaseMode, setShowcaseMode] = useState('dashboard');
  const [openFaqIndex, setOpenFaqIndex] = useState(0);

  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? -1 : index);
  };

  return (
    <div>
      <SEO 
        title="Ethiopian University Freshman Courses, Past Exams & App"
        description="Master Ethiopian university freshman courses with FreshMinds Academy. Access General Physics, Calculus, Logic, and English notes, past exam questions with step-by-step solutions, and offline Android app study."
        keywords="Ethiopian freshman courses, Ethiopian university freshman study app, Freshman past exams with answers, Natural Science freshman courses, Social Science freshman courses, General Physics freshman, Calculus freshman Ethiopia, Logic and Critical Thinking freshman, Remedial program Ethiopia, AAU freshman exams, ASTU freshman exams, Jimma University freshman, Hawassa University, Wollo University, FreshMinds Academy, Sisay Shimelash, የፍሬሽማን ኮርሶች, የዩኒቨርሲቲ ፍሬሽማን ፈተናዎች"
        canonicalPath="/"
        faqItems={freshmanFaqs}
      />

      {/* ============================================================
          1. HERO SECTION
          ============================================================ */}
      <section className="hero-section">
        <div className="container">
          <div className="hero-grid">
            <div className="hero-content">
              <div className="hero-eyebrow">
                <span className="badge badge-primary">Official Platform</span>
                <span className="badge badge-amber">🇪🇹 Built For Ethiopian Freshmen</span>
                <span className="badge badge-green">v2.0 Live on Google Play</span>
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

              {/* Primary Call to Actions */}
              <div className="hero-ctas">
                <GooglePlayButton size="lg" />

                <a 
                  href={siteConfig.socials.telegram} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn btn-telegram btn-lg"
                >
                  <TelegramIcon size={19} color="white" />
                  <span>Join Telegram ({siteConfig.community.telegramMembersShort})</span>
                </a>
              </div>

              {/* Verified Trust Metrics */}
              <div className="hero-trust-bar">
                <div className="hero-trust-item">
                  <Star size={16} fill="#F59E0B" color="#F59E0B" />
                  <span><strong>{siteConfig.app.rating} Rating</strong> on Google Play</span>
                </div>
                <div className="hero-trust-item">
                  <Users size={16} color="#7C3AED" />
                  <span><strong>{siteConfig.community.telegramMembers}</strong> Telegram Students</span>
                </div>
                <a 
                  href={siteConfig.socials.youtube} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hero-trust-item" 
                  style={{ color: '#DC2626', textDecoration: 'none' }}
                >
                  <YouTubeIcon size={16} color="#DC2626" />
                  <span><strong>{siteConfig.community.youtubeSubscribers}</strong> on YouTube</span>
                </a>
              </div>
            </div>

            {/* Smartphone Mockup with Real Mobile Branding Theme */}
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <PhoneMockup activeMode="dashboard" />
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          2. STATS & COMMUNITY BANNER
          ============================================================ */}
      <section style={{ padding: '20px 0 60px' }}>
        <div className="container">
          <div className="stats-banner">
            <div className="stats-grid">
              <div>
                <div className="stat-num" style={{ color: '#38BDF8' }}>{siteConfig.community.telegramMembers}</div>
                <div className="stat-label">Telegram Community</div>
              </div>
              <div>
                <div className="stat-num" style={{ color: '#EF4444' }}>{siteConfig.community.youtubeSubscribers}</div>
                <div className="stat-label">YouTube Subscribers</div>
              </div>
              <div>
                <div className="stat-num" style={{ color: '#34D399' }}>100%</div>
                <div className="stat-label">Offline Study Mode</div>
              </div>
              <div>
                <div className="stat-num" style={{ color: '#FBBF24' }}>{siteConfig.app.rating}</div>
                <div className="stat-label">Google Play Rating</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          3. INTERACTIVE MOBILE APP SHOWCASE
          ============================================================ */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-header">
            <span className="badge badge-primary">Interactive Mobile Preview</span>
            <h2 className="section-title">Experience the Real Dark Navy Mobile App</h2>
            <p className="section-subtitle">
              Engineered with focused dark navy aesthetics, high-speed SQLite offline storage, untimed practice, and live nationwide freshman competitions.
            </p>

            {/* Interactive Showcase Tabs */}
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', justifyContent: 'center', marginTop: '16px' }}>
              {[
                { id: 'dashboard', label: '🏠 Home & Contests' },
                { id: 'courses', label: '📚 Programs & Courses' },
                { id: 'practice', label: '🎯 Mode Selection' },
                { id: 'questions', label: '💡 Question Practice' },
                { id: 'stats', label: '📊 Weekly Leaderboard' },
                { id: 'downloads', label: '🛡️ Offline Storage' },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setShowcaseMode(tab.id)}
                  className={`btn btn-sm ${showcaseMode === tab.id ? 'btn-primary' : 'btn-secondary'}`}
                  style={{ borderRadius: '10px' }}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: 'clamp(28px, 4vw, 48px)', alignItems: 'center' }}>
            <div>
              <PhoneMockup activeMode={showcaseMode} onModeChange={setShowcaseMode} />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {/* Feature 1: Dashboard */}
              <div 
                style={{ 
                  background: showcaseMode === 'dashboard' ? '#F5F3FF' : 'white', 
                  border: showcaseMode === 'dashboard' ? '2px solid #7C3AED' : '1px solid #E2E8F0',
                  borderRadius: '16px', 
                  padding: '16px 18px',
                  cursor: 'pointer',
                  transition: 'all 0.25s ease'
                }}
                onClick={() => setShowcaseMode('dashboard')}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                  <div style={{ width: '42px', height: '42px', borderRadius: '12px', background: '#EDE9FE', color: '#7C3AED', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Trophy size={22} />
                  </div>
                  <div>
                    <h3 style={{ fontSize: '15px', fontWeight: 'bold' }}>Dashboard, Live Contests & All Programs</h3>
                    <p style={{ fontSize: '13px', color: '#64748B', marginTop: '2px', lineHeight: 1.4 }}>
                      Authentic Good Morning header with XP flame counter, official Telegram Academy banner, live countdown competitions, and program enrollment cards.
                    </p>
                  </div>
                </div>
              </div>

              {/* Feature 2: Courses */}
              <div 
                style={{ 
                  background: showcaseMode === 'courses' ? '#EFF6FF' : 'white', 
                  border: showcaseMode === 'courses' ? '2px solid #0284C7' : '1px solid #E2E8F0',
                  borderRadius: '16px', 
                  padding: '16px 18px',
                  cursor: 'pointer',
                  transition: 'all 0.25s ease'
                }}
                onClick={() => setShowcaseMode('courses')}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                  <div style={{ width: '42px', height: '42px', borderRadius: '12px', background: '#E0F2FE', color: '#0284C7', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <GraduationCap size={22} />
                  </div>
                  <div>
                    <h3 style={{ fontSize: '15px', fontWeight: 'bold' }}>My Courses & Program Chapters</h3>
                    <p style={{ fontSize: '13px', color: '#64748B', marginTop: '2px', lineHeight: 1.4 }}>
                      Full freshman curriculums: Physics, Logic, English, Calculus, and Chemistry with active enrollment badges and progress tracking.
                    </p>
                  </div>
                </div>
              </div>

              {/* Feature 3: Mode Selection */}
              <div 
                style={{ 
                  background: showcaseMode === 'practice' ? '#F0FDF4' : 'white', 
                  border: showcaseMode === 'practice' ? '2px solid #10B981' : '1px solid #E2E8F0',
                  borderRadius: '16px', 
                  padding: '16px 18px',
                  cursor: 'pointer',
                  transition: 'all 0.25s ease'
                }}
                onClick={() => setShowcaseMode('practice')}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                  <div style={{ width: '42px', height: '42px', borderRadius: '12px', background: '#DCFCE7', color: '#16A34A', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Zap size={22} />
                  </div>
                  <div>
                    <h3 style={{ fontSize: '15px', fontWeight: 'bold' }}>Dual Mode: Practice vs Exam</h3>
                    <p style={{ fontSize: '13px', color: '#64748B', marginTop: '2px', lineHeight: 1.4 }}>
                      Choose between Untimed Practice Mode with instant solutions or Strict Exam Mode with 45-minute countdown clock and question flags.
                    </p>
                  </div>
                </div>
              </div>

              {/* Feature 4: Question Practice */}
              <div 
                style={{ 
                  background: showcaseMode === 'questions' ? '#FEF3C7' : 'white', 
                  border: showcaseMode === 'questions' ? '2px solid #F59E0B' : '1px solid #E2E8F0',
                  borderRadius: '16px', 
                  padding: '16px 18px',
                  cursor: 'pointer',
                  transition: 'all 0.25s ease'
                }}
                onClick={() => setShowcaseMode('questions')}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                  <div style={{ width: '42px', height: '42px', borderRadius: '12px', background: '#FEF3C7', color: '#D97706', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Lightbulb size={22} />
                  </div>
                  <div>
                    <h3 style={{ fontSize: '15px', fontWeight: 'bold' }}>Interactive Solving & Step-by-Step Solutions</h3>
                    <p style={{ fontSize: '13px', color: '#64748B', marginTop: '2px', lineHeight: 1.4 }}>
                      Interactive option selection with immediate green feedback checkmarks and full step-by-step formula derivations.
                    </p>
                  </div>
                </div>
              </div>

              {/* Feature 5: Leaderboard & Stats */}
              <div 
                style={{ 
                  background: showcaseMode === 'stats' ? '#EFF6FF' : 'white', 
                  border: showcaseMode === 'stats' ? '2px solid #3B82F6' : '1px solid #E2E8F0',
                  borderRadius: '16px', 
                  padding: '16px 18px',
                  cursor: 'pointer',
                  transition: 'all 0.25s ease'
                }}
                onClick={() => setShowcaseMode('stats')}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                  <div style={{ width: '42px', height: '42px', borderRadius: '12px', background: '#DBEAFE', color: '#2563EB', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <BarChart2 size={22} />
                  </div>
                  <div>
                    <h3 style={{ fontSize: '15px', fontWeight: 'bold' }}>National University Leaderboard</h3>
                    <p style={{ fontSize: '13px', color: '#64748B', marginTop: '2px', lineHeight: 1.4 }}>
                      Weekly student rankings across AAU, ASTU, Hawassa, Jimma, and Bahir Dar universities based on quiz accuracy and speed.
                    </p>
                  </div>
                </div>
              </div>

              {/* Feature 6: Offline Downloads */}
              <div 
                style={{ 
                  background: showcaseMode === 'downloads' ? '#ECFDF5' : 'white', 
                  border: showcaseMode === 'downloads' ? '2px solid #059669' : '1px solid #E2E8F0',
                  borderRadius: '16px', 
                  padding: '16px 18px',
                  cursor: 'pointer',
                  transition: 'all 0.25s ease'
                }}
                onClick={() => setShowcaseMode('downloads')}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                  <div style={{ width: '42px', height: '42px', borderRadius: '12px', background: '#D1FAE5', color: '#059669', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <DownloadCloud size={22} />
                  </div>
                  <div>
                    <h3 style={{ fontSize: '15px', fontWeight: 'bold' }}>100% Offline SQLite Engine</h3>
                    <p style={{ fontSize: '13px', color: '#64748B', marginTop: '2px', lineHeight: 1.4 }}>
                      Download full video lectures and chapter notes once to local device storage, then study completely free of mobile data.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          4. WHAT FRESHMINDS IS
          ============================================================ */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="badge badge-primary">Platform Values</span>
            <h2 className="section-title">Built for Freshman Excellence</h2>
            <p className="section-subtitle">
              FreshMinds Academy was created to ensure no Ethiopian student has to navigate the challenging transition into university alone.
            </p>
          </div>

          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon-wrap" style={{ background: '#EDE9FE', color: '#7C3AED' }}>
                <BookOpen size={24} />
              </div>
              <h3>📚 Chapter-Based Learning</h3>
              <p>Lessons, videos, and reading materials curated specifically around the Ethiopian higher education standard curriculum.</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon-wrap" style={{ background: '#DBEAFE', color: '#2563EB' }}>
                <Zap size={24} />
              </div>
              <h3>🧠 Active Question Drills</h3>
              <p>Continuous problem-solving drills with instant feedback to help you master tricky academic concepts.</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon-wrap" style={{ background: '#FEF3C7', color: '#D97706' }}>
                <Target size={24} />
              </div>
              <h3>🎯 Realistic Exam Prep</h3>
              <p>Simulate midterms and finals with real exam time constraints and comprehensive scoring reports.</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon-wrap" style={{ background: '#DCFCE7', color: '#16A34A' }}>
                <DownloadCloud size={24} />
              </div>
              <h3>📱 Zero-Data Offline Mode</h3>
              <p>Download video lessons and markdown notes to your device so you can study freely on campus without spending data.</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon-wrap" style={{ background: '#E0F2FE', color: '#0284C7' }}>
                <Users size={24} />
              </div>
              <h3>💬 6K+ Telegram Community</h3>
              <p>Connect with thousands of fellow freshmen on Telegram to share notes, tips, and campus insights.</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon-wrap" style={{ background: '#FCE7F3', color: '#DB2777' }}>
                <Compass size={24} />
              </div>
              <h3>🌱 University Placement</h3>
              <p>Practical guidance on departmental placement, study habits, and succeeding in your university journey.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          5. YOUTUBE & TELEGRAM COMMUNITY HIGHLIGHT
          ============================================================ */}
      <section className="section section-alt">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: 'clamp(20px, 4vw, 32px)' }}>
            {/* Telegram Card */}
            <div style={{
              background: 'linear-gradient(135deg, #0284C7 0%, #0369A1 100%)',
              borderRadius: '24px',
              padding: 'clamp(24px, 5vw, 40px) clamp(18px, 4vw, 32px)',
              color: 'white',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              boxShadow: '0 15px 35px -5px rgba(2, 132, 199, 0.35)'
            }}>
              <div>
                <div style={{ width: '52px', height: '52px', borderRadius: '14px', background: 'white', color: '#0284C7', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
                  <TelegramIcon size={26} color="#0284C7" />
                </div>
                <span className="badge" style={{ background: 'rgba(255,255,255,0.2)', color: 'white', marginBottom: '12px' }}>
                  Active Community
                </span>
                <h3 style={{ fontSize: '26px', color: 'white', marginBottom: '10px' }}>
                  Join {siteConfig.community.telegramMembers} on Telegram
                </h3>
                <p style={{ color: '#E0F2FE', fontSize: '15px', lineHeight: 1.6, marginBottom: '24px' }}>
                  Our verified Telegram channel is the daily meeting place for Ethiopian freshmen to download PDFs, ask questions, and get instant campus updates.
                </p>
              </div>
              <a 
                href={siteConfig.socials.telegram}
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-secondary btn-lg"
                style={{ background: 'white', color: '#0369A1', fontWeight: 700, alignSelf: 'flex-start' }}
              >
                <TelegramIcon size={18} color="#0369A1" />
                <span>Open Telegram Channel</span>
              </a>
            </div>

            {/* YouTube Card */}
            <div style={{
              background: 'linear-gradient(135deg, #1E1B4B 0%, #312E81 100%)',
              borderRadius: '24px',
              padding: 'clamp(24px, 5vw, 40px) clamp(18px, 4vw, 32px)',
              color: 'white',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              boxShadow: '0 15px 35px -5px rgba(124, 58, 237, 0.35)'
            }}>
              <div>
                <div style={{ width: '52px', height: '52px', borderRadius: '14px', background: '#DC2626', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
                  <YouTubeIcon size={26} color="white" />
                </div>
                <span className="badge" style={{ background: 'rgba(255,255,255,0.2)', color: 'white', marginBottom: '12px' }}>
                  Video Lectures
                </span>
                <h3 style={{ fontSize: '26px', color: 'white', marginBottom: '10px' }}>
                  Watch on YouTube ({siteConfig.community.youtubeSubscribers})
                </h3>
                <p style={{ color: '#E0E7FF', fontSize: '15px', lineHeight: 1.6, marginBottom: '24px' }}>
                  Subscribe to FreshMinds Academy on YouTube for deep-dive tutorials, freshman course walkthroughs, and exam solution guides.
                </p>
              </div>
              <a 
                href={siteConfig.socials.youtube}
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-youtube btn-lg"
                style={{ alignSelf: 'flex-start' }}
              >
                <YouTubeIcon size={18} color="white" />
                <span>Subscribe on YouTube</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          6. ETHIOPIAN UNIVERSITY CAMPUS COVERAGE
          ============================================================ */}
      <section className="section section-alt" style={{ padding: 'clamp(40px, 5vw, 60px) 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto clamp(24px, 4vw, 36px)' }}>
            <span className="badge badge-primary">Nationwide Reach</span>
            <h2 className="section-title">Harmonized for Ethiopian University Campuses</h2>
            <p className="section-subtitle">
              Designed according to the Ethiopian Ministry of Education modular freshman curriculum followed across top universities.
            </p>
          </div>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', justifyContent: 'center', maxWidth: '900px', margin: '0 auto' }}>
            {siteConfig.targetUniversities.map((uni) => (
              <div 
                key={uni}
                style={{
                  background: 'white',
                  border: '1px solid #E2E8F0',
                  borderRadius: '12px',
                  padding: '10px 16px',
                  fontSize: '13.5px',
                  fontWeight: 600,
                  color: '#1E293B',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.03)'
                }}
              >
                <MapPin size={14} color="#0284C7" />
                <span>{uni}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          7. SEO FRESHMAN FAQ ACCORDION
          ============================================================ */}
      <section className="section" style={{ padding: 'clamp(50px, 6vw, 80px) 0' }}>
        <div className="container" style={{ maxWidth: '820px' }}>
          <div style={{ textAlign: 'center', marginBottom: 'clamp(28px, 4vw, 44px)' }}>
            <span className="badge badge-primary">Student FAQ</span>
            <h2 className="section-title">Frequently Asked Questions</h2>
            <p className="section-subtitle">
              Everything Ethiopian freshmen need to know about course coverage, past exams, offline mode, and departmental placements.
            </p>
          </div>

          <div className="faq-list">
            {freshmanFaqs.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div 
                  key={index}
                  className={`faq-card ${isOpen ? 'active' : ''}`}
                  onClick={() => toggleFaq(index)}
                  style={{
                    background: 'white',
                    border: isOpen ? '1.5px solid #0284C7' : '1px solid #E2E8F0',
                    borderRadius: '14px',
                    marginBottom: '12px',
                    overflow: 'hidden',
                    transition: 'all 0.25s ease',
                    boxShadow: isOpen ? '0 8px 24px rgba(2, 132, 199, 0.08)' : '0 2px 6px rgba(0,0,0,0.02)'
                  }}
                >
                  <button
                    type="button"
                    style={{
                      width: '100%',
                      padding: '18px 20px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer',
                      textAlign: 'left',
                      gap: '12px'
                    }}
                    aria-expanded={isOpen}
                  >
                    <span style={{ fontSize: '15.5px', fontWeight: 700, color: isOpen ? '#0284C7' : '#0F172A' }}>
                      {faq.question}
                    </span>
                    <ChevronDown 
                      size={18} 
                      color={isOpen ? '#0284C7' : '#64748B'} 
                      style={{ 
                        transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                        transition: 'transform 0.25s ease',
                        flexShrink: 0
                      }} 
                    />
                  </button>

                  {isOpen && (
                    <div style={{ padding: '0 20px 20px', fontSize: '14.5px', color: '#475569', lineHeight: 1.7, borderTop: '1px solid #F1F5F9', paddingTop: '14px' }}>
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============================================================
          8. FINAL DOWNLOAD CALL TO ACTION
          ============================================================ */}
      <section className="section" style={{ textAlign: 'center' }}>
        <div className="container">
          <div style={{ maxWidth: '680px', margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px' }}>
            <img 
              src="/app-icon.png" 
              alt="FreshMinds Mobile App Icon" 
              style={{ width: '64px', height: '64px', borderRadius: '16px', boxShadow: '0 8px 24px rgba(0, 0, 0, 0.15)', border: '1px solid rgba(0,0,0,0.06)' }} 
            />
            <span className="badge badge-primary">Get Started Today</span>
            <h2 className="section-title">Your Key to Freshman Success</h2>
            <p className="section-subtitle">
              Available now on the Google Play Store. Download today and join over 15,000 Ethiopian students preparing with FreshMinds Academy.
            </p>

            <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', justifyContent: 'center', marginTop: '10px' }}>
              <GooglePlayButton size="lg" />
              <Link to="/app" className="btn btn-secondary btn-lg">
                <span>View All App Features</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
