import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Heart, 
  Target, 
  Eye, 
  CheckCircle, 
  Smartphone, 
  Send, 
  Sparkles,
  Users,
  Compass,
  Award,
  Zap,
  ShieldCheck,
  ChevronRight,
  UserCheck,
  GraduationCap,
  Video,
  ExternalLink,
  MessageCircleHeart
} from 'lucide-react';
import { siteConfig } from '../config/siteConfig';
import GooglePlayButton from '../components/GooglePlayButton';
import SEO from '../components/SEO';

export default function AboutPage() {
  return (
    <div style={{ paddingBottom: '70px' }}>
      <SEO 
        title="About Us | Founder Sisay Shimelash & Mission"
        description="Founded by Full-Stack Developer Sisay Shimelash, FreshMinds Academy grew from phone-filmed Amharic tutorials to an offline-first learning platform for 15,000+ Ethiopian freshmen."
        keywords="About FreshMinds Academy, Sisay Shimelash, Full-Stack Developer, Ethiopian university freshman education, founder story, Ethiopian edtech, AAU, ASTU, Jimma University"
        canonicalPath="/about"
      />

      {/* Page Header */}
      <section style={{ background: 'var(--grad-hero)', padding: 'clamp(48px, 6vw, 70px) 0 clamp(36px, 5vw, 50px)', borderBottom: '1px solid var(--border-subtle)' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '780px' }}>
          <div className="about-hero-badge">
            <Sparkles size={14} color="#7C3AED" />
            <span>ABOUT FRESHMINDS ACADEMY</span>
          </div>

          <h1 style={{ fontSize: 'clamp(30px, 4.2vw, 48px)', lineHeight: 1.15, margin: '0 0 14px', letterSpacing: '-0.02em', color: 'var(--text-primary)' }}>
            Empowering Ethiopian Students Every Step of the Way
          </h1>

          <div className="about-amharic-pill">
            ለኢትዮጵያውያን ተማሪዎች ስኬት የተቋቋመ
          </div>

          <p style={{ color: 'var(--text-secondary)', fontSize: 'clamp(16px, 2vw, 18px)', lineHeight: 1.65, margin: 0 }}>
            FreshMinds Academy was founded on a simple conviction: students shouldn't have to navigate the monumental leap into university life alone.
          </p>
        </div>
      </section>

      {/* Mission & Vision Cards */}
      <section className="section" style={{ padding: 'clamp(40px, 5vw, 60px) 0' }}>
        <div className="container">
          <div className="mv-grid">
            <div className="mv-card mv-card-mission">
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '16px' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '14px', background: 'rgba(124, 58, 237, 0.1)', color: '#7C3AED', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Target size={24} />
                </div>
                <div>
                  <span style={{ fontSize: '11px', fontWeight: 800, letterSpacing: '0.06em', color: '#7C3AED', textTransform: 'uppercase' }}>Core Purpose</span>
                  <h3 style={{ fontSize: '20px', fontWeight: 700, margin: 0, color: '#0F172A' }}>Our Mission</h3>
                </div>
              </div>

              <p style={{ fontSize: '15px', color: 'var(--text-secondary)', lineHeight: 1.7, margin: '0 0 16px' }}>
                {siteConfig.mission}
              </p>

              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', paddingTop: '12px', borderTop: '1px solid #F1F5F9', fontSize: '12px', color: '#64748B' }}>
                <span style={{ background: '#F5F3FF', color: '#7C3AED', padding: '3px 8px', borderRadius: '6px', fontWeight: 600 }}>Curriculum Aligned</span>
                <span style={{ background: '#F5F3FF', color: '#7C3AED', padding: '3px 8px', borderRadius: '6px', fontWeight: 600 }}>Exam Focused</span>
                <span style={{ background: '#F5F3FF', color: '#7C3AED', padding: '3px 8px', borderRadius: '6px', fontWeight: 600 }}>Zero Barrier</span>
              </div>
            </div>

            <div className="mv-card mv-card-vision">
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '16px' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '14px', background: 'rgba(6, 182, 212, 0.1)', color: '#0891B2', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Eye size={24} />
                </div>
                <div>
                  <span style={{ fontSize: '11px', fontWeight: 800, letterSpacing: '0.06em', color: '#0891B2', textTransform: 'uppercase' }}>Long-Term Horizon</span>
                  <h3 style={{ fontSize: '20px', fontWeight: 700, margin: 0, color: '#0F172A' }}>Our Vision</h3>
                </div>
              </div>

              <p style={{ fontSize: '15px', color: 'var(--text-secondary)', lineHeight: 1.7, margin: '0 0 16px' }}>
                {siteConfig.vision}
              </p>

              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', paddingTop: '12px', borderTop: '1px solid #F1F5F9', fontSize: '12px', color: '#64748B' }}>
                <span style={{ background: '#ECFEFF', color: '#0891B2', padding: '3px 8px', borderRadius: '6px', fontWeight: 600 }}>Nationwide Access</span>
                <span style={{ background: '#ECFEFF', color: '#0891B2', padding: '3px 8px', borderRadius: '6px', fontWeight: 600 }}>Higher Retention</span>
                <span style={{ background: '#ECFEFF', color: '#0891B2', padding: '3px 8px', borderRadius: '6px', fontWeight: 600 }}>Student Excellence</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Story & Journey Section */}
      <section className="section section-alt" style={{ padding: 'clamp(44px, 6vw, 70px) 0' }}>
        <div className="container" style={{ maxWidth: '880px' }}>
          <div style={{ textAlign: 'center', marginBottom: 'clamp(28px, 4vw, 40px)' }}>
            <span className="badge badge-primary">Founder's Story</span>
            <h2 className="section-title">The Story Behind FreshMinds Academy</h2>
            <p className="section-subtitle">
              How a university student filming on a phone sparked a nationwide movement for Ethiopian freshmen.
            </p>
          </div>

          {/* CEO Diary & Founder Spotlight Card */}
          <div className="founder-story-card">
            <div className="founder-header">
              <div className="founder-avatar-wrap">
                <div className="founder-avatar-badge">
                  <UserCheck size={26} color="#2563EB" />
                </div>
                <div>
                  <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', background: 'rgba(37, 99, 235, 0.1)', color: '#2563EB', padding: '3px 10px', borderRadius: '999px', fontSize: '11px', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '4px' }}>
                    Founder
                  </div>
                  <h3 style={{ fontSize: '22px', fontWeight: 800, margin: '0 0 2px', color: '#0F172A' }}>
                    {siteConfig.founder.name}
                  </h3>
                  <p style={{ fontSize: '13.5px', color: '#64748B', margin: 0, display: 'flex', alignItems: 'center', gap: '6px', flexWrap: 'wrap' }}>
                    <ShieldCheck size={15} color="#0284C7" />
                    <span>{siteConfig.founder.role}</span>
                    <span>•</span>
                    <span>Kombolcha, Ethiopia</span>
                  </p>
                </div>
              </div>

              <a 
                href={siteConfig.founder.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary btn-sm"
                style={{ background: 'white', display: 'flex', alignItems: 'center', gap: '6px' }}
              >
                <span>LinkedIn Profile</span>
                <ExternalLink size={13} />
              </a>
            </div>

            {/* CEO Diary Post Lead Quote */}
            <div className="ceo-diary-quote">
              <p style={{ fontStyle: 'italic', fontSize: '16.5px', color: '#1E293B', lineHeight: 1.6, margin: 0 }}>
                “I started FreshMinds Academy as a student filming explanations on my phone. No team. No platform. Just a university student who loves teaching and helping others.”
              </p>
            </div>

            {/* The 4 Journey Steps from CEO Diary */}
            <div className="ceo-diary-grid">
              <div className="ceo-diary-step">
                <div className="ceo-step-icon" style={{ background: '#EFF6FF', color: '#2563EB' }}>
                  <Video size={18} />
                </div>
                <h4>1. Filming on a Phone</h4>
                <p>
                  Remembering how overwhelming freshman year felt with new courses, scattered materials, and exam pressure, Sisay began filming step-by-step topic explanations in Amharic on his phone, pairing each lesson with notes and past exam resources.
                </p>
              </div>

              <div className="ceo-diary-step">
                <div className="ceo-step-icon" style={{ background: '#FDF2F8', color: '#DB2777' }}>
                  <MessageCircleHeart size={18} />
                </div>
                <h4>2. The Student Letters</h4>
                <p>
                  Freshmen began writing back sharing their first-semester results. Students shared that the past-exam breakdowns helped them join medicine and engineering placements, and gave them hope and reassurance in the middle of exam stress.
                </p>
              </div>

              <div className="ceo-diary-step">
                <div className="ceo-step-icon" style={{ background: '#F0FDF4', color: '#16A34A' }}>
                  <Smartphone size={18} />
                </div>
                <h4>3. What If Everything Lived in One Place?</h4>
                <p>
                  Noticing that students were hunting across scattered Telegram messages and different platforms to find study files, the question arose: <em>"What if everything lived in one place?"</em> That question became the native FreshMinds mobile app.
                </p>
              </div>

              <div className="ceo-diary-step">
                <div className="ceo-step-icon" style={{ background: '#FAF5FF', color: '#9333EA' }}>
                  <Sparkles size={18} />
                </div>
                <h4>4. A Platform for Learning</h4>
                <p>
                  Today, FreshMinds has grown to 6,000+ Telegram members and 5,000+ YouTube learners. Evolving from one student trying to help other students, into a multi-program, offline-first learning platform available on Google Play.
                </p>
              </div>
            </div>

            <div style={{ background: 'linear-gradient(135deg, #1E293B, #0F172A)', borderRadius: '14px', padding: '16px 20px', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px', marginTop: '22px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span style={{ fontSize: '20px' }}>🌱🚀</span>
                <span style={{ fontSize: '13.5px', fontWeight: 600, color: '#E2E8F0' }}>
                  “The journey from my first videos to a published app taught me a lot about teaching, technology, and persistence. The journey is just beginning.”
                </span>
              </div>
              <span style={{ fontSize: '11px', color: '#94A3B8', fontWeight: 700, letterSpacing: '0.05em' }}>
                #FreshMindsAcademy #EdTech
              </span>
            </div>
          </div>

          {/* Stepper Timeline Cards */}
          <div className="stepper-container">
            {/* Step 1 */}
            <div className="stepper-card">
              <div className="stepper-badge-wrap">
                <div className="stepper-badge" style={{ background: 'linear-gradient(135deg, #7C3AED, #9333EA)' }}>
                  01
                </div>
              </div>
              <div className="stepper-content">
                <div className="stepper-header">
                  <h4 className="stepper-title">The Spark & Problem Discovery</h4>
                  <span className="stepper-tag" style={{ background: '#EDE9FE', color: '#7C3AED' }}>
                    Phase 1 • Grassroots
                  </span>
                </div>
                <p className="stepper-desc">
                  Recognizing that freshmen across Ethiopia struggled with the steep transition into university courses and competitive departmental placement criteria with virtually no centralized support.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="stepper-card">
              <div className="stepper-badge-wrap">
                <div className="stepper-badge" style={{ background: 'linear-gradient(135deg, #0284C7, #06B6D4)' }}>
                  02
                </div>
              </div>
              <div className="stepper-content">
                <div className="stepper-header">
                  <h4 className="stepper-title">The Community Growth</h4>
                  <span className="stepper-tag" style={{ background: '#E0F2FE', color: '#0369A1' }}>
                    Phase 2 • 11K+ Community
                  </span>
                </div>
                <p className="stepper-desc">
                  Growing to over <strong>6,000+ active members</strong> on Telegram (<strong style={{ color: '#0F172A' }}>@FreshMinds_Academy</strong>) and <strong>5,000+ subscribers</strong> on YouTube (<strong style={{ color: '#0F172A' }}>@FreshMindsAcademy-c8x</strong>), delivering real-time university notices, peer Q&A, and free video lessons.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="stepper-card">
              <div className="stepper-badge-wrap">
                <div className="stepper-badge" style={{ background: 'linear-gradient(135deg, #0891B2, #22D3EE)' }}>
                  03
                </div>
              </div>
              <div className="stepper-content">
                <div className="stepper-header">
                  <h4 className="stepper-title">The Native Mobile Learning App</h4>
                  <span className="stepper-tag" style={{ background: '#ECFEFF', color: '#0891B2' }}>
                    Phase 3 • Google Play Live
                  </span>
                </div>
                <p className="stepper-desc">
                  Developing and publishing our flagship Android app on the Google Play Store featuring SQLite offline downloads, untimed practice modes with step-by-step solutions, and timed exam simulations.
                </p>
              </div>
            </div>

            {/* Step 4 */}
            <div className="stepper-card">
              <div className="stepper-badge-wrap">
                <div className="stepper-badge" style={{ background: 'linear-gradient(135deg, #10B981, #059669)' }}>
                  04
                </div>
              </div>
              <div className="stepper-content">
                <div className="stepper-header">
                  <h4 className="stepper-title">Nationwide Campus Reach</h4>
                  <span className="stepper-tag" style={{ background: '#DCFCE7', color: '#15803D' }}>
                    Phase 4 • All Ethiopian Unis
                  </span>
                </div>
                <p className="stepper-desc">
                  Continuously expanding course coverage, gamified learning streaks, and inter-university academic competitions for students across AAU, ASTU, Hawassa, Jimma, Bahir Dar, and campuses nationwide.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Believe Section */}
      <section className="section" style={{ padding: 'clamp(44px, 6vw, 70px) 0' }}>
        <div className="container">
          <div className="section-header" style={{ marginBottom: 'clamp(28px, 4vw, 44px)' }}>
            <span className="badge badge-primary">Guiding Principles</span>
            <h2 className="section-title">What We Believe</h2>
            <p className="section-subtitle">
              The core convictions that guide every feature we build, every explanation we write, and every video we publish.
            </p>
          </div>

          <div className="features-grid">
            <div className="feature-card" style={{ padding: 'clamp(22px, 3.5vw, 32px)' }}>
              <div className="feature-icon-wrap" style={{ background: 'rgba(124, 58, 237, 0.1)', color: '#7C3AED' }}>
                <Heart size={24} />
              </div>
              <h3 style={{ fontSize: '18px', fontWeight: 700, margin: '0 0 8px' }}>Student-Centered Always</h3>
              <p style={{ margin: 0, fontSize: '14px', lineHeight: 1.65, color: 'var(--text-secondary)' }}>
                Every feature, explanation, and resource is shaped by direct student feedback and real freshman campus experiences.
              </p>
            </div>

            <div className="feature-card" style={{ padding: 'clamp(22px, 3.5vw, 32px)' }}>
              <div className="feature-icon-wrap" style={{ background: 'rgba(6, 182, 212, 0.1)', color: '#0891B2' }}>
                <Sparkles size={24} />
              </div>
              <h3 style={{ fontSize: '18px', fontWeight: 700, margin: '0 0 8px' }}>Practical & Actionable</h3>
              <p style={{ margin: 0, fontSize: '14px', lineHeight: 1.65, color: 'var(--text-secondary)' }}>
                We reject fluff and abstract jargon in favor of direct, exam-relevant clarity that immediately boosts student understanding and marks.
              </p>
            </div>

            <div className="feature-card" style={{ padding: 'clamp(22px, 3.5vw, 32px)' }}>
              <div className="feature-icon-wrap" style={{ background: 'rgba(34, 197, 94, 0.1)', color: '#16A34A' }}>
                <CheckCircle size={24} />
              </div>
              <h3 style={{ fontSize: '18px', fontWeight: 700, margin: '0 0 8px' }}>Uncompromised Authenticity</h3>
              <p style={{ margin: 0, fontSize: '14px', lineHeight: 1.65, color: 'var(--text-secondary)' }}>
                We never make exaggerated claims. We celebrate genuine student milestones, real community impact, and honest educational tools.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="container" style={{ marginTop: '10px' }}>
        <div className="about-cta-card">
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 14px', borderRadius: '999px', background: 'rgba(34, 211, 238, 0.15)', border: '1px solid rgba(34, 211, 238, 0.3)', color: '#22D3EE', fontSize: '13px', fontWeight: 700, marginBottom: '16px' }}>
            <span>⚡ Join the Movement</span>
          </div>

          <h2 style={{ fontSize: 'clamp(26px, 3.6vw, 38px)', fontWeight: 800, margin: '0 0 12px', color: '#F8FAFC' }}>
            Experience FreshMinds for Yourself
          </h2>

          <p style={{ color: '#94A3B8', maxWidth: '580px', margin: '0 auto clamp(20px, 3.5vw, 28px)', fontSize: 'clamp(15px, 2vw, 17px)', lineHeight: 1.6 }}>
            Join 6,000+ students on Telegram or download the mobile app on Google Play to start your freshman university journey today.
          </p>

          <div className="about-cta-buttons">
            <GooglePlayButton size="md" />
            <a 
              href={siteConfig.community.telegramUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-secondary" 
              style={{ background: 'rgba(255, 255, 255, 0.08)', color: '#F8FAFC', border: '1px solid rgba(255, 255, 255, 0.15)', padding: '12px 22px' }}
            >
              <Send size={18} color="#38BDF8" />
              <span>Join Telegram ({siteConfig.community.memberCount})</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
