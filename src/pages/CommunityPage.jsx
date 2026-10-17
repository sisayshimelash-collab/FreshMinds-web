import React from 'react';
import { 
  Send, 
  Users, 
  BookOpen, 
  HelpCircle, 
  Bell, 
  ShieldCheck, 
  Sparkles,
  ArrowRight,
  Play,
  Smartphone,
  ExternalLink,
  MessageCircle,
  Video
} from 'lucide-react';
import { siteConfig } from '../config/siteConfig';
import { YouTubeIcon, TelegramIcon } from '../components/SocialIcons';
import GooglePlayButton from '../components/GooglePlayButton';
import SEO from '../components/SEO';

export default function CommunityPage() {
  return (
    <div style={{ paddingBottom: '80px' }}>
      <SEO 
        title="Student Community | 6,000+ Telegram & 5,000+ YouTube Ethiopian Freshmen"
        description="Join over 11,000 Ethiopian freshman students across Telegram (@FreshMinds_Academy) and YouTube. Get instant exam notices, peer Q&A, and free Amharic video lessons."
        keywords="FreshMinds telegram, Ethiopian freshman telegram group, FreshMinds youtube, Ethiopian freshman community, freshman past exams telegram, AAU, ASTU, Jimma University freshmen"
        canonicalPath="/community"
      />

      {/* Header */}
      <section style={{ background: 'var(--grad-hero)', padding: '64px 0 50px', borderBottom: '1px solid var(--border-subtle)' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '820px' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 14px', borderRadius: '999px', background: 'rgba(99, 102, 241, 0.1)', border: '1px solid rgba(99, 102, 241, 0.25)', color: '#4F46E5', fontSize: '13px', fontWeight: '700', marginBottom: '16px' }}>
            <Users size={14} color="#6366F1" />
            <span>JOIN 11,000+ STUDENTS ACROSS ETHIOPIA</span>
          </div>

          <h1 style={{ fontSize: 'clamp(32px, 4.2vw, 50px)', lineHeight: 1.15, margin: '0 0 14px', letterSpacing: '-0.02em' }}>
            Where Ethiopian Freshmen Learn & Grow Together.
          </h1>

          <p className="amharic-tag" style={{ fontSize: '22px', marginBottom: '16px', color: '#6366F1' }}>
            የተማሪዎች ህብረት፣ የጋራ ስኬት እና የፈተና ዝግጅት ማዕከል
          </p>

          <p style={{ color: 'var(--text-secondary)', fontSize: '18px', lineHeight: '1.6', marginBottom: '32px' }}>
            FreshMinds Academy is Ethiopia's premier digital freshman ecosystem. Connect with over <strong>6,000+ students on Telegram</strong> for real-time exam discussions and learn from structured video lectures watched by <strong>5,000+ subscribers on YouTube</strong>.
          </p>

          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a 
              href={siteConfig.community.telegramUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-primary btn-lg"
              style={{ background: '#0088cc', borderColor: '#0088cc', display: 'flex', alignItems: 'center', gap: '10px' }}
            >
              <Send size={18} />
              <span>Join Telegram ({siteConfig.community.memberCount} Members)</span>
            </a>

            <a 
              href={siteConfig.socials.youtube} 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-secondary btn-lg"
              style={{ background: 'white', display: 'flex', alignItems: 'center', gap: '10px' }}
            >
              <YouTubeIcon size={20} color="#DC2626" />
              <span>Subscribe on YouTube ({siteConfig.community.youtubeSubscriberCount})</span>
            </a>
          </div>
        </div>
      </section>

      {/* Community Milestones Banner */}
      <section className="section">
        <div className="container">
          <div className="stats-banner" style={{ background: 'linear-gradient(135deg, #0F1624 0%, #161D2A 100%)', border: '1px solid #1E3A5F' }}>
            <div className="stats-grid">
              <div>
                <div className="stat-num" style={{ color: '#22D3EE' }}>{siteConfig.community.memberCount}</div>
                <div className="stat-label" style={{ color: '#94A3B8' }}>Active Telegram Community</div>
              </div>
              <div>
                <div className="stat-num" style={{ color: '#F87171' }}>{siteConfig.community.youtubeSubscriberCount}</div>
                <div className="stat-label" style={{ color: '#94A3B8' }}>YouTube Academy Subscribers</div>
              </div>
              <div>
                <div className="stat-num" style={{ color: '#A78BFA' }}>Daily</div>
                <div className="stat-label" style={{ color: '#94A3B8' }}>Peer Discussions & Q&A</div>
              </div>
              <div>
                <div className="stat-num" style={{ color: '#34D399' }}>All Unis</div>
                <div className="stat-label" style={{ color: '#94A3B8' }}>Universities Across Ethiopia</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Two Pillars: Telegram & YouTube */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-header">
            <span className="badge badge-primary">Two Vibrant Channels</span>
            <h2 className="section-title">Where the Community Thrives</h2>
            <p className="section-subtitle">
              Choose your favorite platform to stay connected, get timely university updates, and master challenging course topics.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: 'clamp(20px, 4vw, 32px)' }}>
            {/* Telegram Channel Card */}
            <div style={{ background: 'white', borderRadius: '24px', padding: 'clamp(22px, 4vw, 36px)', border: '1px solid #E2E8F0', boxShadow: 'var(--shadow-md)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
                  <div style={{ width: '56px', height: '56px', borderRadius: '16px', background: 'rgba(0, 136, 204, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <TelegramIcon size={30} color="#0088cc" />
                  </div>
                  <span style={{ fontSize: '13px', fontWeight: 700, padding: '4px 12px', borderRadius: '999px', background: '#E0F2FE', color: '#0369A1' }}>
                    {siteConfig.community.memberCount} Members
                  </span>
                </div>

                <h3 style={{ fontSize: '22px', fontWeight: 700, marginBottom: '10px' }}>
                  Official Telegram Community
                </h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '15px', lineHeight: 1.6, marginBottom: '20px' }}>
                  The daily heartbeat of Ethiopian freshmen. Instant university placement news, exam dates, shared PDF worksheets, and peer study groups.
                </p>

                <ul style={{ paddingLeft: '18px', color: 'var(--text-secondary)', fontSize: '14px', lineHeight: 1.8, marginBottom: '28px' }}>
                  <li>Official university placement notices & academic calendars</li>
                  <li>Past midterm & final exam files with student answer keys</li>
                  <li>Active Q&A for Logic, Physics, Math, and English</li>
                  <li>Freshman mentorship from senior university students</li>
                </ul>
              </div>

              <a 
                href={siteConfig.community.telegramUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-primary"
                style={{ background: '#0088cc', borderColor: '#0088cc', width: '100%', justifyContent: 'center' }}
              >
                <Send size={18} />
                <span>Join @FreshMinds_Academy</span>
              </a>
            </div>

            {/* YouTube Academy Card */}
            <div style={{ background: 'white', borderRadius: '24px', padding: 'clamp(22px, 4vw, 36px)', border: '1px solid #E2E8F0', boxShadow: 'var(--shadow-md)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
                  <div style={{ width: '56px', height: '56px', borderRadius: '16px', background: 'rgba(220, 38, 38, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <YouTubeIcon size={32} color="#DC2626" />
                  </div>
                  <span style={{ fontSize: '13px', fontWeight: 700, padding: '4px 12px', borderRadius: '999px', background: '#FEE2E2', color: '#B91C1C' }}>
                    {siteConfig.community.youtubeSubscriberCount} Subscribers
                  </span>
                </div>

                <h3 style={{ fontSize: '22px', fontWeight: 700, marginBottom: '10px' }}>
                  FreshMinds YouTube Academy
                </h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '15px', lineHeight: 1.6, marginBottom: '20px' }}>
                  Watch comprehensive video explanations broken down chapter by chapter. Designed specifically for freshman curriculum comprehension in Amharic and English.
                </p>

                <ul style={{ paddingLeft: '18px', color: 'var(--text-secondary)', fontSize: '14px', lineHeight: 1.8, marginBottom: '28px' }}>
                  <li>Step-by-step video lessons taught by experienced tutors</li>
                  <li>Logic truth tables, formal fallacies, and proposition methods</li>
                  <li>General Physics mechanics, vectors, and thermodynamics solved</li>
                  <li>Final exam review playlists and high-yield problem walkthroughs</li>
                </ul>
              </div>

              <a 
                href={siteConfig.socials.youtube} 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-secondary"
                style={{ width: '100%', justifyContent: 'center', background: '#FFF1F2', borderColor: '#FECDD3', color: '#E11D48' }}
              >
                <YouTubeIcon size={18} color="#E11D48" />
                <span>Visit @FreshMindsAcademy-c8x</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* What You Get in the Community */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="badge badge-primary">Student Benefits</span>
            <h2 className="section-title">What happens inside the FreshMinds community?</h2>
            <p className="section-subtitle">
              More than just an announcement channel—it is a supportive space where learners lift each other up.
            </p>
          </div>

          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon-wrap" style={{ background: '#E0F2FE', color: '#0284C7' }}>
                <Bell size={24} />
              </div>
              <h3>Timely University Updates</h3>
              <p>Stay informed on official Ministry placement announcements, academic calendar dates, registration notices, and campus news.</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon-wrap" style={{ background: '#EDE9FE', color: '#7C3AED' }}>
                <BookOpen size={24} />
              </div>
              <h3>Shared Academic Materials</h3>
              <p>Access reference handouts, past midterms and finals, practice questions, and chapter summaries shared by tutors and fellow students.</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon-wrap" style={{ background: '#DCFCE7', color: '#16A34A' }}>
                <HelpCircle size={24} />
              </div>
              <h3>Peer Q&A and Problem Solving</h3>
              <p>Stuck on a tricky physics derivative or logic truth table? Ask your questions and get prompt answers from passionate classmates.</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon-wrap" style={{ background: '#FEF3C7', color: '#D97706' }}>
                <Sparkles size={24} />
              </div>
              <h3>Freshman Mentorship & Advice</h3>
              <p>Benefit from experienced senior students sharing proven study methods, department selection insights, and campus navigation tips.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Community Values & App Download Combined Card */}
      <section className="section section-alt">
        <div className="container" style={{ maxWidth: '880px' }}>
          <div style={{ background: 'white', border: '1px solid #E2E8F0', borderRadius: '24px', padding: '40px', boxShadow: 'var(--shadow-md)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
              <ShieldCheck size={28} color="#7C3AED" />
              <h3 style={{ fontSize: '22px', fontWeight: 'bold' }}>Our Community Code of Conduct</h3>
            </div>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7', marginBottom: '20px' }}>
              To maintain a supportive, focused, and productive space for every student across Ethiopia, our community operates on mutual respect:
            </p>
            <ul style={{ paddingLeft: '20px', color: 'var(--text-secondary)', display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '15px' }}>
              <li><strong>Academic Focus:</strong> Keep discussions centered on freshman university courses, exam preparation, and genuine educational growth.</li>
              <li><strong>Mutual Respect:</strong> Encourage fellow freshmen; university transition is challenging and everyone is learning together.</li>
              <li><strong>Verified Information:</strong> Always verify and cite official university or Ministry notices before sharing to avoid misinformation.</li>
            </ul>

            <div style={{ marginTop: '32px', paddingTop: '28px', borderTop: '1px solid #E2E8F0', display: 'flex', flexWrap: 'wrap', gap: '16px', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <h4 style={{ margin: '0 0 4px', fontSize: '16px', fontWeight: 700 }}>Get the Complete Experience</h4>
                <p style={{ margin: 0, fontSize: '13px', color: 'var(--text-muted)' }}>Structured video lessons and practice modes inside our mobile app.</p>
              </div>
              <GooglePlayButton size="md" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
