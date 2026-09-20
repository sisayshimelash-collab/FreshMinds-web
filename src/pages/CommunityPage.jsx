import React from 'react';
import { 
  Send, 
  Users, 
  BookOpen, 
  HelpCircle, 
  Bell, 
  ShieldCheck, 
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

export default function CommunityPage() {
  return (
    <div style={{ paddingBottom: '80px' }}>
      {/* Header */}
      <section style={{ background: 'var(--grad-hero)', padding: '60px 0 50px', borderBottom: '1px solid var(--border-subtle)' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '780px' }}>
          <span className="badge badge-primary">Student Community</span>
          <h1 style={{ fontSize: 'clamp(32px, 4vw, 48px)', margin: '16px 0 12px' }}>
            Where Ethiopian Freshmen Learn Together.
          </h1>
          <p className="amharic-tag" style={{ fontSize: '20px', marginBottom: '16px' }}>
            የተማሪዎች ህብረት እና የጋራ ስኬት ማዕከል
          </p>
          <p style={{ color: 'var(--text-secondary)', fontSize: '18px', lineHeight: '1.6' }}>
            {siteConfig.community.description}
          </p>

          <div style={{ marginTop: '28px', display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a 
              href={siteConfig.community.telegramUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-primary btn-lg"
            >
              <Send size={18} />
              <span>Join Telegram ({siteConfig.community.memberCount} Members)</span>
            </a>
          </div>
        </div>
      </section>

      {/* Community Milestones */}
      <section className="section">
        <div className="container">
          <div className="stats-banner" style={{ background: 'linear-gradient(135deg, #0C4A6E 0%, #075985 100%)' }}>
            <div className="stats-grid">
              <div>
                <div className="stat-num" style={{ color: '#38BDF8' }}>{siteConfig.community.memberCount}</div>
                <div className="stat-label" style={{ color: '#BAE6FD' }}>Active Telegram Members</div>
              </div>
              <div>
                <div className="stat-num" style={{ color: '#38BDF8' }}>Daily</div>
                <div className="stat-label" style={{ color: '#BAE6FD' }}>Discussions & Updates</div>
              </div>
              <div>
                <div className="stat-num" style={{ color: '#38BDF8' }}>All Unis</div>
                <div className="stat-label" style={{ color: '#BAE6FD' }}>Universities Across Ethiopia</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What You Get in the Community */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-header">
            <span className="badge badge-primary">What to Expect</span>
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

      {/* Community Guidelines */}
      <section className="section">
        <div className="container" style={{ maxWidth: '800px' }}>
          <div style={{ background: 'white', border: '1px solid #E5E7EB', borderRadius: '24px', padding: '36px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
              <ShieldCheck size={26} color="#7C3AED" />
              <h3 style={{ fontSize: '20px', fontWeight: 'bold' }}>Our Community Values</h3>
            </div>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7', marginBottom: '20px' }}>
              To maintain a supportive and productive space for everyone, our Telegram community is built on mutual respect:
            </p>
            <ul style={{ paddingLeft: '20px', color: 'var(--text-secondary)', display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '15px' }}>
              <li><strong>Academic Focus:</strong> Keep discussions centered on learning, exam preparation, and university life.</li>
              <li><strong>Mutual Respect:</strong> Encourage fellow freshmen; everyone is learning and growing together.</li>
              <li><strong>Reliable Information:</strong> Always verify and cite official university announcements before sharing.</li>
            </ul>

            <div style={{ marginTop: '28px', paddingTop: '20px', borderTop: '1px solid #E5E7EB', textAlign: 'center' }}>
              <a 
                href={siteConfig.community.telegramUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                <Send size={16} />
                <span>Join {siteConfig.community.telegramHandle} Today</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
