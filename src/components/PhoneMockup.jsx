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
  ChevronRight
} from 'lucide-react';

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
      {/* Floating Badges */}
      <div className="mock-floating-badge mock-badge-left">
        <div style={{ background: '#ECFDF5', padding: '6px', borderRadius: '10px', color: '#059669' }}>
          <DownloadCloud size={18} />
        </div>
        <div>
          <div style={{ fontSize: '11px', fontWeight: 'bold', color: '#0F172A' }}>Offline Mode</div>
          <div style={{ fontSize: '10px', color: '#64748B' }}>Study without data</div>
        </div>
      </div>

      <div className="mock-floating-badge mock-badge-right">
        <div style={{ background: '#FFFBEB', padding: '6px', borderRadius: '10px', color: '#D97706' }}>
          <Flame size={18} />
        </div>
        <div>
          <div style={{ fontSize: '11px', fontWeight: 'bold', color: '#0F172A' }}>5-Day Streak</div>
          <div style={{ fontSize: '10px', color: '#64748B' }}>+240 Points</div>
        </div>
      </div>

      {/* Device Frame */}
      <div className="phone-mockup">
        {/* Notch */}
        <div className="phone-notch">
          <div className="notch-camera"></div>
          <div className="notch-speaker"></div>
        </div>

        {/* Screen Display */}
        <div className="phone-screen">
          {/* SCREEN: DASHBOARD */}
          {currentMode === 'dashboard' && (
            <>
              <div className="mock-app-header">
                <div className="mock-status-row">
                  <div>
                    <span className="mock-user-greet">Good Morning 👋</span>
                    <h4 className="mock-user-name">Freshman Student</h4>
                  </div>
                  <div className="mock-points-badge">
                    <Star size={12} fill="#F59E0B" color="#F59E0B" />
                    <span>240 Pts</span>
                  </div>
                </div>

                {/* Academy Banner */}
                <div className="mock-academy-banner">
                  <div className="mock-academy-title">FreshMinds Academy 🎓</div>
                  <div className="mock-academy-sub">Your Key to Freshman Success!</div>
                  <div className="mock-telegram-pill">
                    <Send size={10} />
                    <span>Telegram: @FreshMinds_Academy</span>
                  </div>
                </div>
              </div>

              <div className="mock-app-body">
                {/* Active Program */}
                <div className="mock-section-title">
                  <span>Current Program</span>
                  <span style={{ color: '#7C3AED', fontSize: '10px' }}>Natural Science</span>
                </div>

                {/* Continue Learning Card */}
                <div className="mock-card" style={{ borderLeft: '4px solid #7C3AED' }}>
                  <div className="mock-card-icon" style={{ background: '#EDE9FE', color: '#7C3AED' }}>
                    📐
                  </div>
                  <div className="mock-card-info">
                    <div className="mock-card-title">General Physics 101</div>
                    <div className="mock-card-meta">Chapter 2: Kinematics • 65% completed</div>
                    <div style={{ width: '100%', height: '4px', background: '#E2E8F0', borderRadius: '2px', marginTop: '6px' }}>
                      <div style={{ width: '65%', height: '100%', background: '#7C3AED', borderRadius: '2px' }}></div>
                    </div>
                  </div>
                </div>

                {/* Quick Practice Mode Card */}
                <div className="mock-card" style={{ background: '#EFF6FF', borderColor: '#BFDBFE' }}>
                  <div className="mock-card-icon" style={{ background: '#3B82F6', color: 'white' }}>
                    ⚡
                  </div>
                  <div className="mock-card-info">
                    <div className="mock-card-title" style={{ color: '#1E3A8A' }}>Daily Quiz Challenge</div>
                    <div className="mock-card-meta" style={{ color: '#3B82F6' }}>10 Questions • Logic & Thinking</div>
                  </div>
                  <ChevronRight size={16} color="#3B82F6" />
                </div>

                {/* Freshman Subjects Grid */}
                <div className="mock-section-title" style={{ marginTop: '4px' }}>
                  <span>Freshman Courses</span>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
                  <div style={{ background: '#FAF5FF', border: '1px solid #E9D5FF', borderRadius: '10px', padding: '8px' }}>
                    <div style={{ fontSize: '18px' }}>🧠</div>
                    <div style={{ fontSize: '11px', fontWeight: 'bold', color: '#581C87' }}>Logic & Critical</div>
                    <div style={{ fontSize: '9px', color: '#7E22CE' }}>5 Modules</div>
                  </div>
                  <div style={{ background: '#F0FDF4', border: '1px solid #BBF7D0', borderRadius: '10px', padding: '8px' }}>
                    <div style={{ fontSize: '18px' }}>🧪</div>
                    <div style={{ fontSize: '11px', fontWeight: 'bold', color: '#14532D' }}>General Chemistry</div>
                    <div style={{ fontSize: '9px', color: '#15803D' }}>4 Modules</div>
                  </div>
                </div>
              </div>
            </>
          )}

          {/* SCREEN: COURSES */}
          {currentMode === 'courses' && (
            <>
              <div style={{ background: '#7C3AED', padding: '16px 14px', color: 'white' }}>
                <h4 style={{ fontSize: '15px', fontWeight: 'bold' }}>All Freshman Courses</h4>
                <p style={{ fontSize: '10px', opacity: 0.9 }}>Semester 1 & 2 Curriculums</p>
              </div>
              <div className="mock-app-body">
                {[
                  { name: 'Logic and Critical Thinking', code: 'PHIL 101', modules: '5 Chapters', icon: '🧠', color: '#7C3AED' },
                  { name: 'General Physics Mechanics', code: 'PHYS 101', modules: '6 Chapters', icon: '⚛️', color: '#2563EB' },
                  { name: 'Communicative English Skill', code: 'ENGL 101', modules: '4 Chapters', icon: '📖', color: '#D97706' },
                  { name: 'General Psychology', code: 'PSYC 101', modules: '5 Chapters', icon: '🌱', color: '#059669' },
                  { name: 'Geography of Ethiopia & Horn', code: 'GEOG 101', modules: '4 Chapters', icon: '🌍', color: '#0284C7' },
                ].map((c, i) => (
                  <div key={i} className="mock-card">
                    <div className="mock-card-icon" style={{ background: c.color }}>
                      {c.icon}
                    </div>
                    <div className="mock-card-info">
                      <div className="mock-card-title">{c.name}</div>
                      <div className="mock-card-meta">{c.code} • {c.modules}</div>
                    </div>
                    <DownloadCloud size={14} color="#94A3B8" />
                  </div>
                ))}
              </div>
            </>
          )}

          {/* SCREEN: PRACTICE MODE */}
          {currentMode === 'practice' && (
            <>
              <div style={{ background: '#2563EB', padding: '14px', color: 'white' }}>
                <div style={{ fontSize: '10px', opacity: 0.9 }}>PRACTICE MODE (UNTIMED)</div>
                <h4 style={{ fontSize: '13px', fontWeight: 'bold' }}>Logic & Philosophy</h4>
              </div>
              <div className="mock-app-body">
                <div style={{ background: 'white', padding: '12px', borderRadius: '12px', border: '1px solid #E2E8F0' }}>
                  <span style={{ fontSize: '10px', fontWeight: 'bold', color: '#2563EB' }}>Question 4 of 20</span>
                  <p style={{ fontSize: '12px', fontWeight: '600', color: '#0F172A', marginTop: '6px' }}>
                    Which branch of philosophy investigates the fundamental nature of reality and existence?
                  </p>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  <div style={{ padding: '8px 12px', background: '#F8FAFC', border: '1px solid #E2E8F0', borderRadius: '8px', fontSize: '11px' }}>
                    A) Epistemology
                  </div>
                  <div style={{ padding: '8px 12px', background: '#ECFDF5', border: '1.5px solid #10B981', borderRadius: '8px', fontSize: '11px', color: '#065F46', fontWeight: '600', display: 'flex', justifyContent: 'space-between' }}>
                    <span>B) Metaphysics</span>
                    <CheckCircle2 size={14} color="#10B981" />
                  </div>
                  <div style={{ padding: '8px 12px', background: '#F8FAFC', border: '1px solid #E2E8F0', borderRadius: '8px', fontSize: '11px' }}>
                    C) Axiology
                  </div>
                  <div style={{ padding: '8px 12px', background: '#F8FAFC', border: '1px solid #E2E8F0', borderRadius: '8px', fontSize: '11px' }}>
                    D) Ethics
                  </div>
                </div>

                {/* Instant Explanation Box */}
                <div style={{ background: '#F0FDF4', border: '1px solid #86EFAC', borderRadius: '10px', padding: '10px' }}>
                  <div style={{ fontSize: '10px', fontWeight: 'bold', color: '#166534', display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <Sparkles size={12} />
                    <span>Instant Explanation</span>
                  </div>
                  <p style={{ fontSize: '10px', color: '#14532D', marginTop: '4px', lineHeight: '1.4' }}>
                    Metaphysics is the philosophical branch focused on the nature of being, reality, and ultimate origins.
                  </p>
                </div>
              </div>
            </>
          )}

          {/* SCREEN: EXAM SIMULATION */}
          {currentMode === 'exam' && (
            <>
              <div style={{ background: '#DC2626', padding: '14px', color: 'white' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: '10px', fontWeight: 'bold' }}>MIDTERM SIMULATION</span>
                  <span style={{ fontSize: '11px', background: 'rgba(0,0,0,0.3)', padding: '2px 8px', borderRadius: '10px', display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <Clock size={12} /> 48:22
                  </span>
                </div>
                <h4 style={{ fontSize: '13px', fontWeight: 'bold', marginTop: '2px' }}>General Physics Exam</h4>
              </div>
              <div className="mock-app-body">
                <div style={{ background: 'white', padding: '12px', borderRadius: '12px', border: '1px solid #E2E8F0' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontSize: '10px', fontWeight: 'bold', color: '#DC2626' }}>Question 14 of 50</span>
                    <span style={{ fontSize: '10px', color: '#F59E0B' }}>🚩 Flagged for review</span>
                  </div>
                  <p style={{ fontSize: '12px', fontWeight: '600', color: '#0F172A', marginTop: '6px' }}>
                    An object accelerates uniformly from 10 m/s to 30 m/s over 5 seconds. What is the displacement?
                  </p>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  {['A) 75 meters', 'B) 100 meters', 'C) 125 meters', 'D) 150 meters'].map((opt, i) => (
                    <div 
                      key={i} 
                      style={{ 
                        padding: '8px 12px', 
                        background: i === 1 ? '#EFF6FF' : '#F8FAFC', 
                        border: i === 1 ? '1.5px solid #3B82F6' : '1px solid #E2E8F0', 
                        borderRadius: '8px', 
                        fontSize: '11px',
                        color: i === 1 ? '#1D4ED8' : '#334155',
                        fontWeight: i === 1 ? '600' : 'normal'
                      }}
                    >
                      {opt}
                    </div>
                  ))}
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '8px' }}>
                  <button style={{ padding: '6px 14px', background: '#E2E8F0', borderRadius: '6px', fontSize: '10px', fontWeight: 'bold', color: '#475569' }}>
                    Previous
                  </button>
                  <button style={{ padding: '6px 14px', background: '#DC2626', color: 'white', borderRadius: '6px', fontSize: '10px', fontWeight: 'bold' }}>
                    Next Question →
                  </button>
                </div>
              </div>
            </>
          )}

          {/* Bottom App Navigation Bar (Faithfully matches MainTabs.jsx) */}
          <div className="mock-bottom-bar" style={{ marginTop: 'auto' }}>
            <div 
              className={`mock-tab-item ${currentMode === 'dashboard' ? 'active' : ''}`}
              onClick={() => handleSelect('dashboard')}
              style={{ cursor: 'pointer' }}
            >
              <Home size={15} />
              <span>Home</span>
            </div>
            <div 
              className={`mock-tab-item ${currentMode === 'courses' ? 'active' : ''}`}
              onClick={() => handleSelect('courses')}
              style={{ cursor: 'pointer' }}
            >
              <BookOpen size={15} />
              <span>Courses</span>
            </div>
            <div 
              className={`mock-tab-item ${currentMode === 'practice' ? 'active' : ''}`}
              onClick={() => handleSelect('practice')}
              style={{ cursor: 'pointer' }}
            >
              <HelpCircle size={15} />
              <span>Practice</span>
            </div>
            <div 
              className={`mock-tab-item ${currentMode === 'exam' ? 'active' : ''}`}
              onClick={() => handleSelect('exam')}
              style={{ cursor: 'pointer' }}
            >
              <Clock size={15} />
              <span>Exams</span>
            </div>
            <div className="mock-tab-item">
              <User size={15} />
              <span>Profile</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
