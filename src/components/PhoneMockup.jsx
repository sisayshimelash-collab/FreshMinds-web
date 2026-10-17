import React, { useState } from 'react';
import { 
  BookOpen, 
  HelpCircle, 
  Clock, 
  DownloadCloud, 
  CheckCircle2, 
  Home, 
  BarChart2, 
  User, 
  Flame, 
  Star,
  Send,
  Sparkles,
  ChevronRight,
  ChevronLeft,
  Wifi,
  Battery,
  Trophy,
  Play,
  ShieldCheck,
  Check,
  ArrowRight,
  Bell,
  GraduationCap,
  Lock,
  Lightbulb,
  Radio,
  FileText
} from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

export default function PhoneMockup({ activeMode = 'dashboard', onModeChange }) {
  const [internalMode, setInternalMode] = useState(activeMode);
  const currentMode = onModeChange ? activeMode : internalMode;

  const handleSelect = (mode) => {
    if (onModeChange) {
      onModeChange(mode);
    } else {
      setInternalMode(mode);
    }
  };

  return (
    <div className="phone-mockup-wrapper">
      {/* Dynamic Floating Badges */}
      <div className="mock-floating-badge mock-badge-left animate-float-slow">
        <div className="badge-icon-wrap" style={{ background: 'rgba(34, 197, 94, 0.15)', color: '#22C55E' }}>
          <DownloadCloud size={18} />
        </div>
        <div>
          <div className="badge-title">100% Offline Ready</div>
          <div className="badge-sub">Study videos & notes data-free</div>
        </div>
      </div>

      <div className="mock-floating-badge mock-badge-right animate-float-delayed">
        <div className="badge-icon-wrap" style={{ background: 'rgba(249, 115, 22, 0.15)', color: '#F97316' }}>
          <Flame size={18} />
        </div>
        <div>
          <div className="badge-title">5-Day Study Streak</div>
          <div className="badge-sub">+480 XP Points earned</div>
        </div>
      </div>

      <div className="mock-floating-badge mock-badge-bottom animate-float-slow">
        <div className="badge-icon-wrap" style={{ background: 'rgba(59, 130, 246, 0.18)', color: '#3B82F6' }}>
          <Trophy size={18} />
        </div>
        <div>
          <div className="badge-title">Live Competitions</div>
          <div className="badge-sub">6K+ students competing nationwide</div>
        </div>
      </div>

      {/* Realistic Phone Frame */}
      <div className="phone-mockup">
        {/* Dynamic Island / Speaker */}
        <div className="phone-notch">
          <div className="notch-camera"></div>
          <div className="notch-speaker"></div>
        </div>

        {/* Screen Display — Dark Navy Theme (Directly from FreshMinds Mobile App #0F1624) */}
        <div className="phone-screen">
          {/* Status Bar */}
          <div className="mock-status-bar">
            <span className="mock-time">9:41</span>
            <div className="mock-status-icons">
              <span className="mock-signal">5G</span>
              <Wifi size={13} />
              <Battery size={14} />
            </div>
          </div>

          {/* ============================================================
              SCREEN 1: DASHBOARD (Home Screen - Exact Dashboard.screen.jsx)
              ============================================================ */}
          {currentMode === 'dashboard' && (
            <div className="mock-screen-content">
              {/* Header: Greeting, XP Flame Badge, and Notification Bell */}
              <div className="mock-rn-header">
                <div className="mock-rn-header-left">
                  <span className="mock-rn-greeting">Good morning</span>
                  <h4 className="mock-rn-username">Student 👋</h4>
                </div>
                <div className="mock-rn-header-actions">
                  {/* Points Badge */}
                  <div 
                    className="mock-rn-points-badge"
                    onClick={() => handleSelect('stats')}
                    title="View Weekly Progress"
                  >
                    <Flame size={14} fill="#FFFFFF" color="#FFFFFF" />
                    <span>480</span>
                  </div>
                  {/* Notification Button with Red Dot */}
                  <div className="mock-rn-notification-btn">
                    <Bell size={16} color="#FFFFFF" />
                    <span className="mock-rn-notif-dot"></span>
                  </div>
                </div>
              </div>

              <div className="mock-rn-scroll-body">
                {/* 1. FreshMinds Academy Banner (Exact academyBanner) */}
                <div className="mock-academy-banner">
                  <div className="mock-academy-content">
                    <div className="mock-academy-left">
                      <div className="mock-welcome-badge">
                        <Sparkles size={11} color="#F59E0B" />
                        <span>Premium Learning</span>
                      </div>
                      <h4 className="mock-academy-title">FreshMinds Academy</h4>
                      <p className="mock-academy-subtitle">Learn • Practice • Excel</p>
                      <div className="mock-academy-divider"></div>
                      <a 
                        href="https://t.me/freshminds_academy" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="mock-telegram-cta"
                      >
                        <div className="mock-telegram-circle">
                          <Send size={12} color="#0088CC" />
                        </div>
                        <span className="mock-telegram-text">Join Telegram Community</span>
                        <ChevronRight size={13} color="rgba(255,255,255,0.7)" />
                      </a>
                    </div>
                    <div className="mock-academy-right">
                      <div className="mock-academy-icon-circle">
                        <GraduationCap size={36} color="#FFFFFF" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* 2. CompetitionBanner (Exact CompetitionBanner.jsx) */}
                <div 
                  className="mock-rn-comp-banner"
                  onClick={() => handleSelect('stats')}
                >
                  <div className="mock-rn-comp-content">
                    {/* Left Icon with Live Pulse */}
                    <div className="mock-rn-comp-icon-box">
                      <span className="mock-rn-comp-emoji">🏆</span>
                      <span className="mock-rn-live-pulse-ring"></span>
                    </div>

                    {/* Center Details */}
                    <div className="mock-rn-comp-details">
                      <div className="mock-rn-status-badge">
                        <span className="mock-rn-status-text">LIVE NOW</span>
                        <span className="mock-rn-live-dot"></span>
                      </div>
                      <span className="mock-rn-comp-program">Natural Science Freshman</span>
                      <h5 className="mock-rn-comp-title">Freshman Calculus Showdown</h5>
                      <div className="mock-rn-comp-time">
                        <Clock size={11} color="rgba(255,255,255,0.9)" />
                        <span>1h 24m left</span>
                      </div>
                    </div>

                    {/* Right Arrow */}
                    <ChevronRight size={18} color="rgba(255,255,255,0.8)" />
                  </div>

                  {/* Join Button */}
                  <div className="mock-rn-comp-action">
                    <span>Join Competition</span>
                    <ArrowRight size={12} color="#DC2626" />
                  </div>
                </div>

                {/* 3. Programs Section (Exact programsSection & ProgramCard.jsx) */}
                <div className="mock-programs-section">
                  <div className="mock-programs-header">
                    <div className="mock-programs-header-left">
                      <div className="mock-programs-indicator"></div>
                      <h4 className="mock-programs-title">All Programs</h4>
                    </div>
                    <span 
                      className="mock-programs-see-all"
                      onClick={() => handleSelect('courses')}
                    >
                      Browse
                    </span>
                  </div>

                  <div className="mock-programs-list">
                    {/* Program 1: Natural Science Freshman (Active) */}
                    <div 
                      className="mock-program-card"
                      onClick={() => handleSelect('courses')}
                    >
                      <div className="mock-card-accent-bar" style={{ background: '#22C55E' }}></div>
                      <div className="mock-program-card-inner">
                        <div className="mock-program-thumb" style={{ background: 'linear-gradient(135deg, #16A34A, #22C55E)' }}>
                          <GraduationCap size={24} color="#FFFFFF" />
                        </div>
                        <div className="mock-program-info">
                          <h5 className="mock-program-name">Natural Science Freshman</h5>
                          <div className="mock-program-footer">
                            <span className="mock-program-badge" style={{ background: 'linear-gradient(135deg, #16A34A, #22C55E)' }}>
                              <CheckCircle2 size={11} color="#FFFFFF" />
                              <span>Active</span>
                            </span>
                            <div className="mock-program-arrow" style={{ borderColor: '#22C55E', color: '#22C55E' }}>
                              <ArrowRight size={13} />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Program 2: Social Science Freshman (Free) */}
                    <div 
                      className="mock-program-card"
                      onClick={() => handleSelect('courses')}
                    >
                      <div className="mock-card-accent-bar" style={{ background: '#7C3AED' }}></div>
                      <div className="mock-program-card-inner">
                        <div className="mock-program-thumb" style={{ background: 'linear-gradient(135deg, #7C3AED, #8B5CF6)' }}>
                          <BookOpen size={24} color="#FFFFFF" />
                        </div>
                        <div className="mock-program-info">
                          <h5 className="mock-program-name">Social Science Freshman</h5>
                          <div className="mock-program-footer">
                            <span className="mock-program-badge" style={{ background: 'linear-gradient(135deg, #7C3AED, #8B5CF6)' }}>
                              <BookOpen size={11} color="#FFFFFF" />
                              <span>Free</span>
                            </span>
                            <div className="mock-program-arrow" style={{ borderColor: '#7C3AED', color: '#7C3AED' }}>
                              <ArrowRight size={13} />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Program 3: Remedial Program (Coming Soon) */}
                    <div className="mock-program-card">
                      <div className="mock-card-accent-bar" style={{ background: '#F97316' }}></div>
                      <div className="mock-program-card-inner">
                        <div className="mock-program-thumb" style={{ background: 'linear-gradient(135deg, #F97316, #EA580C)' }}>
                          <Clock size={24} color="#FFFFFF" />
                        </div>
                        <div className="mock-program-info">
                          <h5 className="mock-program-name">Remedial Program (Freshman Prep)</h5>
                          <div className="mock-program-footer">
                            <span className="mock-program-badge" style={{ background: 'linear-gradient(135deg, #F97316, #EA580C)' }}>
                              <Clock size={11} color="#FFFFFF" />
                              <span>Coming Soon</span>
                            </span>
                            <div className="mock-program-arrow" style={{ borderColor: '#F97316', color: '#F97316' }}>
                              <ArrowRight size={13} />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* ============================================================
              SCREEN 2: COURSES LIST (Exact CoursesList.screen.jsx)
              ============================================================ */}
          {currentMode === 'courses' && (
            <div className="mock-screen-content">
              {/* Courses Hero Banner */}
              <div className="mock-courses-hero">
                <div className="mock-courses-hero-badge">
                  <GraduationCap size={24} color="#3B82F6" />
                </div>
                <h4 className="mock-courses-hero-title">My Courses</h4>
                <div className="mock-courses-hero-stats">
                  <div className="mock-hero-stat">
                    <BookOpen size={13} color="#94A3B8" />
                    <span>6 Courses</span>
                  </div>
                  <span className="mock-hero-divider">•</span>
                  <div className="mock-hero-stat">
                    <span>42 Chapters</span>
                  </div>
                </div>
              </div>

              <div className="mock-rn-scroll-body">
                {/* Section Header */}
                <div className="mock-courses-section-header">
                  <div className="mock-programs-header-left">
                    <div className="mock-programs-indicator"></div>
                    <span className="mock-courses-sec-title">All Courses</span>
                  </div>
                  <span className="mock-courses-count-badge">6</span>
                </div>

                {/* Courses Cards List */}
                <div className="mock-courses-list">
                  {[
                    { 
                      index: '01', 
                      title: 'General Physics (Mechanics & Heat)', 
                      grad: ['#3B82F6', '#1D4ED8'], 
                      icon: '⚛️', 
                      status: 'ENROLLED' 
                    },
                    { 
                      index: '02', 
                      title: 'Logic and Critical Thinking', 
                      grad: ['#8B5CF6', '#6D28D9'], 
                      icon: '🧠', 
                      status: 'ENROLLED' 
                    },
                    { 
                      index: '03', 
                      title: 'Communicative English Skills I', 
                      grad: ['#10B981', '#059669'], 
                      icon: '📖', 
                      status: 'ENROLLED' 
                    },
                    { 
                      index: '04', 
                      title: 'Mathematics for Natural Science', 
                      grad: ['#06B6D4', '#0891B2'], 
                      icon: '📐', 
                      status: 'ENROLLED' 
                    },
                    { 
                      index: '05', 
                      title: 'General Chemistry (Atoms & Bonding)', 
                      grad: ['#F59E0B', '#D97706'], 
                      icon: '🧪', 
                      status: 'PREMIUM' 
                    },
                  ].map((c, i) => (
                    <div 
                      key={i} 
                      className="mock-course-rn-card"
                      onClick={() => handleSelect('practice')}
                    >
                      <div 
                        className="mock-course-rn-icon"
                        style={{ background: `linear-gradient(135deg, ${c.grad[0]}, ${c.grad[1]})` }}
                      >
                        <span style={{ fontSize: '15px' }}>{c.icon}</span>
                      </div>
                      <div className="mock-course-rn-info">
                        <span className="mock-course-rn-index">COURSE {c.index}</span>
                        <h5 className="mock-course-rn-title">{c.title}</h5>
                        <div className="mock-course-rn-badge-row">
                          {c.status === 'ENROLLED' ? (
                            <span className="mock-badge-enrolled">
                              <Star size={10} color="#10B981" fill="#10B981" />
                              <span>ENROLLED</span>
                            </span>
                          ) : (
                            <span className="mock-badge-premium">
                              <Lock size={10} color="#F59E0B" />
                              <span>PREMIUM</span>
                            </span>
                          )}
                        </div>
                      </div>
                      <div className="mock-course-rn-arrow">
                        <ChevronRight size={14} color="#94A3B8" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* ============================================================
              SCREEN 3: MODE SELECTION (Exact ModeSelection.screen.jsx)
              ============================================================ */}
          {currentMode === 'practice' && (
            <div className="mock-screen-content">
              {/* Header */}
              <div className="mock-mode-header">
                <button 
                  className="mock-mode-back"
                  onClick={() => handleSelect('courses')}
                >
                  <ChevronLeft size={18} color="#FFFFFF" />
                </button>
                <div className="mock-mode-header-center">
                  <span className="mock-mode-sub">CHOOSE YOUR MODE</span>
                  <h4 className="mock-mode-title">General Physics: Kinematics</h4>
                </div>
                <div style={{ width: '28px' }}></div>
              </div>

              <div className="mock-rn-scroll-body">
                <p className="mock-mode-instruction">Select how you'd like to practice:</p>

                {/* Practice Mode Card (Emerald Green) */}
                <div 
                  className="mock-mode-card"
                  onClick={() => handleSelect('questions')}
                >
                  <div className="mock-mode-card-top">
                    <div className="mock-mode-icon" style={{ background: 'linear-gradient(135deg, #10B981, #059669)' }}>
                      <GraduationCap size={24} color="#FFFFFF" />
                    </div>
                    <div className="mock-mode-title-col">
                      <div className="mock-mode-title-row">
                        <h4 className="mock-mode-name">Practice Mode</h4>
                        <ChevronRight size={18} color="#94A3B8" />
                      </div>
                      <p className="mock-mode-desc">
                        Learn with immediate feedback and step-by-step explanations after each question
                      </p>
                    </div>
                  </div>

                  <div className="mock-mode-bullets">
                    <div className="mock-mode-bullet">
                      <CheckCircle2 size={13} color="#10B981" />
                      <span>Instant feedback</span>
                    </div>
                    <div className="mock-mode-bullet">
                      <Lightbulb size={13} color="#10B981" />
                      <span>Explanations shown</span>
                    </div>
                    <div className="mock-mode-bullet">
                      <span style={{ fontSize: '13px', lineHeight: 1, color: '#10B981' }}>♾️</span>
                      <span>No time limit</span>
                    </div>
                  </div>
                </div>

                {/* Exam Mode Card (Amber / Red) */}
                <div 
                  className="mock-mode-card"
                  onClick={() => handleSelect('exam')}
                >
                  <div className="mock-mode-card-top">
                    <div className="mock-mode-icon" style={{ background: 'linear-gradient(135deg, #F59E0B, #D97706)' }}>
                      <Clock size={24} color="#FFFFFF" />
                    </div>
                    <div className="mock-mode-title-col">
                      <div className="mock-mode-title-row">
                        <h4 className="mock-mode-name">Exam Mode</h4>
                        <ChevronRight size={18} color="#94A3B8" />
                      </div>
                      <p className="mock-mode-desc">
                        Test yourself under timed test conditions without immediate feedback
                      </p>
                    </div>
                  </div>

                  <div className="mock-mode-bullets">
                    <div className="mock-mode-bullet">
                      <Clock size={13} color="#F59E0B" />
                      <span>45 min timer</span>
                    </div>
                    <div className="mock-mode-bullet">
                      <span style={{ fontSize: '13px', lineHeight: 1, color: '#F59E0B' }}>👁️‍🗨️</span>
                      <span>No immediate feedback</span>
                    </div>
                    <div className="mock-mode-bullet">
                      <Trophy size={13} color="#F59E0B" />
                      <span>Results at end</span>
                    </div>
                  </div>
                </div>

                {/* Info Note */}
                <div className="mock-mode-info-box">
                  <span style={{ fontSize: '15px' }}>💡</span>
                  <p>Both modes use the same curriculum questions. Choose based on your study session goal!</p>
                </div>
              </div>
            </div>
          )}

          {/* ============================================================
              SCREEN 4: QUESTION PRACTICE (Exact QuestionPractice.screen.jsx)
              ============================================================ */}
          {currentMode === 'questions' && (
            <div className="mock-screen-content">
              {/* Header */}
              <div className="mock-qp-header">
                <button 
                  className="mock-mode-back"
                  onClick={() => handleSelect('practice')}
                >
                  <ChevronLeft size={18} color="#FFFFFF" />
                </button>
                <div className="mock-mode-header-center">
                  <span className="mock-qp-sub">PRACTICE MODE</span>
                  <h4 className="mock-mode-title">General Physics</h4>
                </div>
                <div style={{ width: '28px' }}></div>
              </div>

              <div className="mock-rn-scroll-body">
                {/* Question Card */}
                <div className="mock-qp-card">
                  <div className="mock-qp-num">Question 3 of 15</div>
                  <p className="mock-qp-text">
                    A car accelerates uniformly from 10 m/s to 30 m/s in 5.0 seconds. What is the total displacement traveled?
                  </p>
                  <div className="mock-qp-formula">
                    s = ((v₀ + v) / 2) · t
                  </div>

                  {/* Options */}
                  <div className="mock-qp-options">
                    <div className="mock-qp-option">
                      <span className="mock-qp-bullet">A</span>
                      <span className="mock-qp-opt-text">75 meters</span>
                    </div>

                    {/* Selected and Correct Option B */}
                    <div className="mock-qp-option mock-qp-option-correct">
                      <span className="mock-qp-bullet mock-bullet-correct">B</span>
                      <span className="mock-qp-opt-text" style={{ color: '#F0FDF4', fontWeight: 600 }}>100 meters</span>
                      <CheckCircle2 size={16} color="#10B981" />
                    </div>

                    <div className="mock-qp-option">
                      <span className="mock-qp-bullet">C</span>
                      <span className="mock-qp-opt-text">125 meters</span>
                    </div>

                    <div className="mock-qp-option">
                      <span className="mock-qp-bullet">D</span>
                      <span className="mock-qp-opt-text">150 meters</span>
                    </div>
                  </div>

                  {/* Feedback Message */}
                  <div className="mock-qp-feedback">
                    <CheckCircle2 size={15} color="#10B981" />
                    <span>Great job! That's the correct answer.</span>
                  </div>
                </div>

                {/* Step-by-Step Explanation Card */}
                <div className="mock-qp-explanation">
                  <div className="mock-expl-header">
                    <div className="mock-expl-icon-badge">
                      <Lightbulb size={13} color="#F59E0B" />
                    </div>
                    <span className="mock-expl-title">Explanation</span>
                  </div>
                  <p className="mock-expl-body">
                    Average velocity v_avg = (10 + 30) / 2 = 20 m/s.
                    Total displacement s = v_avg × t = 20 m/s × 5.0 s = 100 meters.
                  </p>
                </div>

                {/* Bottom Navigation */}
                <div className="mock-qp-bottom-nav">
                  <button className="mock-qp-nav-btn">
                    <ChevronLeft size={14} /> Previous
                  </button>
                  <span className="mock-qp-counter">3/15</span>
                  <button className="mock-qp-nav-btn mock-qp-nav-active">
                    Next <ChevronRight size={14} />
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* ============================================================
              SCREEN 5: EXAM SIMULATION (ExamMode.screen.jsx)
              ============================================================ */}
          {currentMode === 'exam' && (
            <div className="mock-screen-content">
              <div className="mock-exam-header">
                <button 
                  className="mock-mode-back"
                  onClick={() => handleSelect('practice')}
                >
                  <ChevronLeft size={18} color="#FFFFFF" />
                </button>
                <div className="mock-mode-header-center">
                  <span className="mock-exam-tag">TIMED EXAM SIMULATION</span>
                  <h4 className="mock-mode-title">Physics Midterm</h4>
                </div>
                <div className="mock-exam-timer-pill">
                  <Clock size={11} /> 43:18
                </div>
              </div>

              <div className="mock-rn-scroll-body">
                {/* Exam Progress Bubbles */}
                <div className="mock-exam-bubbles">
                  {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                    <span 
                      key={n} 
                      className={`mock-bubble ${n === 3 ? 'mock-bubble-active' : n < 3 ? 'mock-bubble-done' : ''}`}
                    >
                      {n}
                    </span>
                  ))}
                </div>

                <div className="mock-qp-card">
                  <div className="mock-exam-meta-row">
                    <span className="mock-exam-qnum">Question 3 of 45</span>
                    <span className="mock-exam-flag">🚩 Flag Question</span>
                  </div>
                  <p className="mock-qp-text">
                    Which of Newton's laws describes the relationship between force, mass, and acceleration?
                  </p>

                  <div className="mock-qp-options">
                    {['First Law of Motion', 'Second Law of Motion (Selected)', 'Third Law of Motion', 'Law of Universal Gravitation'].map((opt, i) => (
                      <div 
                        key={i} 
                        className={`mock-qp-option ${i === 1 ? 'mock-option-selected' : ''}`}
                      >
                        <span className="mock-qp-bullet">{String.fromCharCode(65 + i)}</span>
                        <span className="mock-qp-opt-text">{opt}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mock-qp-bottom-nav">
                  <button className="mock-qp-nav-btn">
                    <ChevronLeft size={14} /> Previous
                  </button>
                  <button className="mock-qp-nav-btn mock-qp-nav-active">
                    Next <ChevronRight size={14} />
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* ============================================================
              SCREEN 6: STATS & COMPETITIONS (Exact StatsNavigator.jsx / WeeklyLeaderboard)
              ============================================================ */}
          {currentMode === 'stats' && (
            <div className="mock-screen-content">
              {/* Segmented Tab Header (Exact StatsNavigator tabs: Competitions, Progress, Weekly) */}
              <div className="mock-stats-tabs-header">
                <div className="mock-stats-seg-btn">
                  <Radio size={13} color="#6B7280" />
                  <span>Competitions</span>
                </div>
                <div className="mock-stats-seg-btn">
                  <BarChart2 size={13} color="#6B7280" />
                  <span>Progress</span>
                </div>
                <div className="mock-stats-seg-btn mock-stats-seg-active">
                  <Trophy size={13} color="#FFFFFF" />
                  <span>Weekly</span>
                </div>
              </div>

              <div className="mock-rn-scroll-body">
                {/* Leaderboard Trophy Card */}
                <div className="mock-leaderboard-hero">
                  <div className="mock-trophy-circle">
                    <Trophy size={30} color="#F59E0B" />
                  </div>
                  <h4 className="mock-leaderboard-title">Weekly Leaderboard</h4>
                  <span className="mock-leaderboard-date">Oct 12 - Oct 19 • Freshman Showdown</span>
                  <div className="mock-leaderboard-tag">
                    <span>Based on lessons, quizzes & speed</span>
                  </div>
                </div>

                {/* User's Performance Card */}
                <div className="mock-your-rank-card">
                  <div className="mock-your-rank-header">
                    <User size={15} color="#3B82F6" />
                    <span>Your Performance</span>
                  </div>
                  <div className="mock-your-rank-row">
                    <div className="mock-your-rank-badge">
                      <span>#14</span>
                    </div>
                    <div className="mock-your-rank-stats">
                      <div className="mock-yr-stat">
                        <span className="mock-yr-val">480 XP</span>
                        <span className="mock-yr-sub">Total Points</span>
                      </div>
                      <div className="mock-yr-stat">
                        <span className="mock-yr-val" style={{ color: '#10B981' }}>88%</span>
                        <span className="mock-yr-sub">Accuracy</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Leaderboard Table List */}
                <div className="mock-leaderboard-list">
                  <span className="mock-lb-header-label">Top Ethiopian Freshman Students</span>
                  {[
                    { rank: 1, medal: '🥇', name: 'Natnael D.', uni: 'Addis Ababa University (AAU)', xp: '1,420 XP' },
                    { rank: 2, medal: '🥈', name: 'Selamawit T.', uni: 'Adama Science & Tech (ASTU)', xp: '1,280 XP' },
                    { rank: 3, medal: '🥉', name: 'Bereket M.', uni: 'Hawassa University', xp: '1,150 XP' },
                    { rank: 4, medal: '4', name: 'Yonas K.', uni: 'Jimma University', xp: '980 XP' },
                    { rank: 5, medal: '5', name: 'Almaz B.', uni: 'Bahir Dar University', xp: '910 XP' },
                  ].map((row) => (
                    <div key={row.rank} className="mock-lb-row">
                      <span className="mock-lb-rank">{row.medal}</span>
                      <div className="mock-lb-info">
                        <span className="mock-lb-name">{row.name}</span>
                        <span className="mock-lb-uni">{row.uni}</span>
                      </div>
                      <span className="mock-lb-xp">{row.xp}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* ============================================================
              SCREEN 7: OFFLINE DOWNLOADS (Exact DownloadManager.screen.jsx)
              ============================================================ */}
          {currentMode === 'downloads' && (
            <div className="mock-screen-content">
              {/* Header */}
              <div className="mock-downloads-header">
                <div className="mock-dl-shield">
                  <ShieldCheck size={14} color="#34D399" />
                  <span>SQLITE OFFLINE ENGINE</span>
                </div>
                <h4 className="mock-mode-title">Offline Downloads</h4>
              </div>

              <div className="mock-rn-scroll-body">
                {/* Storage Summary Bar */}
                <div className="mock-storage-card">
                  <div className="mock-storage-info">
                    <span>Device SQLite Storage</span>
                    <span className="mock-storage-amt">412 MB / 1.2 GB Cached</span>
                  </div>
                  <div className="mock-storage-bar">
                    <div className="mock-storage-fill" style={{ width: '38%' }}></div>
                  </div>
                </div>

                <div className="mock-courses-section-header" style={{ marginTop: '4px' }}>
                  <span className="mock-courses-sec-title">Downloaded Videos (3)</span>
                </div>

                <div className="mock-courses-list">
                  {[
                    { title: 'Physics: Kinematics & 1D Motion', size: '142 MB • 45m Lecture', icon: '▶️' },
                    { title: 'Logic: Formal & Informal Fallacies', size: '98 MB • 32m Lecture', icon: '▶️' },
                    { title: 'Calculus: Limits & Continuity Solutions', size: '172 MB • 54m Lecture', icon: '▶️' },
                  ].map((item, idx) => (
                    <div key={idx} className="mock-download-card">
                      <div className="mock-download-icon">
                        {item.icon}
                      </div>
                      <div className="mock-download-info">
                        <h5 className="mock-download-title">{item.title}</h5>
                        <span className="mock-download-meta">{item.size}</span>
                      </div>
                      <span className="mock-badge-offline">Offline</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* ============================================================
              BOTTOM TAB BAR (Exact replica of MainTabs.jsx)
              Curved top edge, background gradient ['#161D2A', '#0F1624'],
              active tab with blue gradient ['#3B82F6', '#1D4ED8'] container
              ============================================================ */}
          <div className="mock-maintabs-bar">
            {/* Tab 1: Home */}
            <div 
              className={`mock-maintab-item ${currentMode === 'dashboard' ? 'active' : ''}`}
              onClick={() => handleSelect('dashboard')}
            >
              <div className={`mock-maintab-icon-wrap ${currentMode === 'dashboard' ? 'active-gradient' : ''}`}>
                <Home size={18} color={currentMode === 'dashboard' ? '#FFFFFF' : '#94A3B8'} />
              </div>
              <span className="mock-maintab-label">Home</span>
            </div>

            {/* Tab 2: Courses */}
            <div 
              className={`mock-maintab-item ${currentMode === 'courses' ? 'active' : ''}`}
              onClick={() => handleSelect('courses')}
            >
              <div className={`mock-maintab-icon-wrap ${currentMode === 'courses' ? 'active-gradient' : ''}`}>
                <BookOpen size={18} color={currentMode === 'courses' ? '#FFFFFF' : '#94A3B8'} />
              </div>
              <span className="mock-maintab-label">Courses</span>
            </div>

            {/* Tab 3: Stats */}
            <div 
              className={`mock-maintab-item ${currentMode === 'stats' ? 'active' : ''}`}
              onClick={() => handleSelect('stats')}
            >
              <div className={`mock-maintab-icon-wrap ${currentMode === 'stats' ? 'active-gradient' : ''}`}>
                <BarChart2 size={18} color={currentMode === 'stats' ? '#FFFFFF' : '#94A3B8'} />
              </div>
              <span className="mock-maintab-label">Stats</span>
            </div>

            {/* Tab 4: Profile / Practice / Downloads */}
            <div 
              className={`mock-maintab-item ${currentMode === 'practice' || currentMode === 'questions' || currentMode === 'exam' || currentMode === 'downloads' ? 'active' : ''}`}
              onClick={() => handleSelect('practice')}
            >
              <div className={`mock-maintab-icon-wrap ${currentMode === 'practice' || currentMode === 'questions' || currentMode === 'exam' || currentMode === 'downloads' ? 'active-gradient' : ''}`}>
                <User size={18} color={currentMode === 'practice' || currentMode === 'questions' || currentMode === 'exam' || currentMode === 'downloads' ? '#FFFFFF' : '#94A3B8'} />
              </div>
              <span className="mock-maintab-label">Profile</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
