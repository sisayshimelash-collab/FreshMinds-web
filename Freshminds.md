# FreshMinds Academy — Official Website Specification

## 1. Project Overview

Build the official promotional and brand website for **FreshMinds Academy**.

FreshMinds Academy is an Ethiopian student-focused education platform founded to help university students, especially freshmen, learn, prepare, and navigate university life.

### Critical Product Boundary

The **FreshMinds Academy mobile app is the actual educational product**.

The website is **NOT** an online learning platform and should NOT attempt to replicate the mobile app.

### The 4 Core Pillars of the Website

The website has four primary strategic purposes:

1. **Mobile App Promotion:** Showcase the actual educational product — its structured freshman courses, untimed practice mode, timed exam simulations, offline study capabilities, and notes — directing all learners to download and install the mobile app.
2. **Channel & Community Promotion:** Highlight and grow the official Telegram community (`@FreshMinds_Academy`, 5,000+ members), where students connect, share resources, receive freshman updates, and support each other.
3. **Organization & Brand Promotion:** Tell the authentic FreshMinds story, articulate the mission, vision, and student-first values, and build institutional trust and credibility with students, educators, parents, and partners.
4. **Official Online Presence:** Act as the polished, authoritative, and SEO-optimized digital front door whenever anyone searches for "FreshMinds Academy", "FreshMinds Ethiopia", or freshman educational resources online.

The website should feel like the **front door of FreshMinds Academy**.

The mobile app is the **school**.

---

# 2. Brand Identity

## Brand Name

Always use:

**FreshMinds Academy**

Do not abbreviate the brand to "FreshMinds" in prominent branding unless it is clearly used as a casual reference.

## Tagline

Primary tagline:

**Your Key to Freshman Success!**

The tagline may appear as:

> Your Key to Freshman Success!

Amharic supporting version:

> የፍሬሽማን ስኬት መክፈቻ ቁልፍ

## Brand Positioning

FreshMinds Academy should feel:

- Student-centered
- Ethiopian
- Friendly
- Trustworthy
- Modern
- Practical
- Accessible
- Youthful
- Educational
- Community-driven
- Ambitious but authentic

It should NOT feel:

- Corporate
- Cold
- Overly formal
- Like a generic SaaS startup
- Like a university government portal
- Like a copied Coursera/Udemy clone
- Like an exaggerated "AI startup"
- Like a children's website

---

# 3. Core Message

The website should communicate this idea very quickly:

> FreshMinds Academy helps Ethiopian students learn, practice, prepare, and navigate university life through a growing student community and a dedicated mobile learning app.

A visitor should understand what FreshMinds is within approximately 5–10 seconds.

The visitor should also immediately understand:

> The actual learning happens in the FreshMinds Academy mobile app.

---

# 4. Target Audience

Primary audience:

### Ethiopian university students

Especially:

- Freshmen
- First-year university students
- Students preparing for university
- Students looking for academic resources
- Remedial students
- Students preparing for exams

Secondary audience:

- Parents
- University communities
- Educators
- Potential collaborators
- Potential partners
- People discovering FreshMinds through search/social media

The website should remain understandable to someone who has never heard of FreshMinds.

---

# 5. Website Role in the Ecosystem

FreshMinds consists of several connected parts:

```text
                         FRESHMINDS ACADEMY
                                  |
             +--------------------+--------------------+
             |                    |                    |
          WEBSITE              MOBILE APP          COMMUNITY
             |                    |                    |
       Discover us           Learn here          Connect here
       Trust us              Courses             Telegram
       Our story             Lessons             Announcements
       App promotion         Quizzes             Resources
       Brand presence        Progress            Community
             |                    |
             +--------------------+
                      |
                 FreshMinds Brand
```

The website should direct users toward the mobile app and community.

---

# 6. Website Scope

The website is a promotional and official online presence for FreshMinds Academy.

## Required pages

### 1. `/`

Main promotional homepage.

### 2. `/about`

FreshMinds story, mission, vision, and journey.

### 3. `/app`

Dedicated FreshMinds Academy mobile app landing page.

### 4. `/community`

Information about the FreshMinds student community.

### 5. `/contact`

Contact information and official social/community links.

---

# 7. Existing Legal Pages — DO NOT REBUILD

The following pages already exist and have already been implemented for the FreshMinds Academy mobile app and submitted to Google Play:

- `/privacy`
- `/terms`
- `/delete-account`

These pages are **outside the scope of this website redesign/build**.

Do NOT:

- Recreate them
- Redesign them
- Replace their content
- Duplicate them
- Move them
- Change their URLs
- Add placeholder versions
- Modify their existing implementation unless explicitly requested

The existing legal pages should continue to work independently under the admin panel. They are not essential on the promotional website or in its footer.

If ever needed in the future, they can optionally be linked, but they are not required for this website.

### Educational Features Boundary — Do NOT Build

The website should NOT become a second educational platform.

Do NOT implement:

* Web course player
* Web lesson viewer
* Web quiz engine
* Web student dashboard
* Web learning progress system
* Web course enrollment
* Web student account system unless absolutely necessary for a future requirement
* Web payment system
* Web subscription management
* Web LMS
* Web content management system unless required by the existing architecture
* Duplicate mobile app functionality

The mobile app handles educational functionality.

---

# 8. Homepage Structure

The homepage should be a polished, modern, mostly one-page promotional experience.

Recommended structure:

```text
1. Navigation
2. Hero
3. Mobile App Showcase
4. What FreshMinds Is
5. What Students Can Do
6. Community / Impact
7. Story
8. Download App CTA
9. Footer
```

---

# 9. Navigation

Desktop navigation:

```text
FreshMinds Academy

Home
About
The App
Community
Contact

[Get the App]
```

The "Get the App" button should be visually emphasized.

On mobile:

```text
FreshMinds Academy        ☰
```

Navigation should be simple.

Do not create a huge navigation menu.

---

# 10. Hero Section

The hero is the most important section.

It should communicate the brand and mobile app immediately.

Suggested structure:

### Eyebrow

**FRESHMINDS ACADEMY**

### Main heading

# Your Key to Freshman Success! 🎓

### Supporting Amharic line

**የፍሬሽማን ስኬት መክፈቻ ቁልፍ**

### Description

> Helping Ethiopian students learn, practice, prepare, and navigate university life with confidence.

### Primary CTA

**Get the FreshMinds App**

### Secondary CTA

**Join Our Community**

### Hero visual

Show a realistic, polished smartphone mockup containing screenshots of the actual FreshMinds Academy mobile application.

IMPORTANT:

Do not use generic fake dashboard screenshots.

Use the actual app UI whenever assets are available.

The hero should visually communicate:

```text
FreshMinds Academy
        +
   Mobile App
        +
 Ethiopian Students
```

---

# 11. Hero Design Direction

The hero should feel premium and modern.

Use:

* Large typography
* Strong whitespace
* Subtle gradients if appropriate
* Rounded cards
* Soft shadows
* Smartphone mockup
* Minimal decorative elements
* Small educational visual motifs

Avoid:

* Excessive floating objects
* Excessive animation
* Giant illustrations that distract from the app
* Stock-photo-heavy design
* Overly colorful children's education aesthetics

---

# 12. Mobile App Showcase

This section should make the mobile application the visual centerpiece of the website.

Heading:

# Everything you need, right in your pocket.

Supporting text:

> FreshMinds Academy brings learning resources, structured courses, practice, quizzes, and academic support into one mobile experience built for students.

Show 3–5 actual app screenshots.

Possible labels:

### Learn
Structured courses and lessons.

### Practice
Test your understanding with quizzes and questions.

### Prepare
Review and prepare for exams.

### Study Anywhere
Access your learning through the FreshMinds mobile experience.

### Grow
Track your learning journey.

Only mention functionality that actually exists in the current app.

Do not invent features.

---

# 13. App CTA

Create a strong call-to-action after the app showcase.

Example:

## Ready to start your journey?

> Download FreshMinds Academy and start learning wherever you are.

Primary button:

**Get the App**

If a Google Play URL is available, use it.

If the app is not yet publicly available, do NOT use a fake or placeholder download URL.

Instead use:

**Coming soon on Google Play**

or a configurable CTA.

The CTA must be easy to update when the Play Store production listing becomes available.

---

# 14. What FreshMinds Is

Heading:

# More than an app.

Supporting text:

> FreshMinds Academy is a growing student-focused education platform created to help Ethiopian students access useful learning resources, academic guidance, and a supportive community.

Use 4–6 concise feature cards.

Example:

### 📚 Learn
Structured educational content designed around students' learning needs.

### 🧠 Practice
Practice questions and quizzes to help students test their understanding.

### 🎯 Prepare
Resources and review tools to help students prepare for academic challenges.

### 📱 Learn Anywhere
A mobile-first learning experience designed for students.

### 💬 Connect
A growing student community where learners can stay informed and connected.

### 🌱 Grow
A platform built to grow alongside Ethiopian students.

Do not make this section sound like a list of SaaS features.

It should communicate the human purpose of FreshMinds.

---

# 15. Ethiopian Student Focus

Create a section communicating that FreshMinds is built with Ethiopian students in mind.

Possible heading:

# Built for Ethiopian Students

Possible supporting text:

> From freshman guidance to academic resources, FreshMinds is built around the real needs of Ethiopian students.

Keep this authentic.

Do not use exaggerated claims such as:

* "The #1 education platform in Ethiopia"
* "The biggest student platform in Ethiopia"
* "Millions of students"
* "Revolutionizing Ethiopian education"

unless those claims can be objectively verified.

---

# 16. Community Section

FreshMinds has an established Telegram community.

The community is an important part of the brand.

Suggested heading:

# We're more than an app.

Supporting text:

> FreshMinds Academy is also a growing community of students learning, sharing resources, discovering opportunities, and preparing for university together.

Display a real community metric when appropriate:

**5,000+ community members**

This number should remain configurable rather than hardcoded throughout the application.

Primary CTA:

**Join the FreshMinds Community**

Link to the official Telegram community:

`@FreshMinds_Academy`

If the official URL is available, use it.

Do not invent social URLs.

---

# 17. Impact / Milestones

Create a clean statistics section.

Possible metrics:

```text
5,000+
Community Members

Thousands
of Students Reached

Growing
Student Community

1
Dedicated Mobile App
```

Important:

Do not fabricate numbers.

Any metric that changes should be stored in a configuration object or content file so it can easily be updated.

Example:

```js
const stats = [
  {
    value: "5,000+",
    label: "Community Members"
  },
  {
    value: "Thousands",
    label: "Students Reached"
  }
];
```

---

# 18. FreshMinds Story

This section should make the brand human.

Heading:

# From a student community to a learning platform.

Suggested copy direction:

> FreshMinds Academy started with a simple idea: students shouldn't have to figure everything out alone.
>
> What began as a student-focused community grew through educational resources, freshman guidance, and a growing commitment to helping Ethiopian students prepare for university and succeed in their academic journey.
>
> Today, FreshMinds is continuing that journey through its growing community and dedicated mobile learning app.

Do not exaggerate the company's history.

The story should feel personal, authentic, and student-centered.

---

# 19. Story Timeline

A visual timeline can be used.

Example:

```text
Idea
  ↓
Student Community
  ↓
Educational Resources
  ↓
Growing Student Reach
  ↓
FreshMinds Academy App
  ↓
Growing Learning Platform
```

Keep it simple.

Avoid fake dates unless actual dates are provided.

---

# 20. About Page

The About page should explain:

* Why FreshMinds exists
* Who it serves
* What problem it is trying to solve
* How it started
* Where it is going

Possible sections:

```text
Our Story
Our Mission
Our Vision
What We Believe
Our Journey
```

Mission example:

> To make useful, accessible, and practical educational support easier for Ethiopian students to access.

Vision example:

> A future where every Ethiopian student can find the resources, guidance, and support they need to move forward with confidence.

These should remain editable.

---

# 21. Community Page

The community page should explain the role of Telegram.

Include:

* Community purpose
* What students can expect
* Announcements
* Educational resources
* Opportunities
* Student guidance
* Community growth

CTA:

**Join the FreshMinds Academy Community**

Use the official Telegram URL.

---

# 22. Contact Page

Keep it simple.

Possible content:

## Get in touch

> Have a question, suggestion, collaboration idea, or feedback? We'd love to hear from you.

Provide configurable contact methods.

Potential links:

* Email
* Telegram
* LinkedIn
* YouTube

Do not invent email addresses.

Use environment/configuration variables for contact information.

Example:

```js
const contact = {
  email: "...",
  telegram: "...",
  linkedin: "...",
  youtube: "..."
};
```

---

# 23. Legal Pages (Handled by Admin Panel)

Legal and compliance pages (`/privacy`, `/terms`, `/delete-account`) are fully handled and hosted under the **FreshMinds Admin Panel** for mobile app store requirements. 

They are **not essential** on the promotional website or in its footer.

---

# 24. Footer

Suggested structure:

```text
FreshMinds Academy

Your Key to Freshman Success!

Helping Ethiopian students learn,
practice, and prepare for university.

--------------------------------

Explore
Home
About
The App
Community
Contact

Connect
Telegram
YouTube
LinkedIn

--------------------------------

© 2026 FreshMinds Academy
All rights reserved.
```

Year should be generated dynamically.

---

# 25. Visual Design

## Overall aesthetic

Use:

**Modern EdTech + Ethiopian student identity + premium simplicity**

The design should look like a serious modern product while remaining approachable.

---

# 26. Color System

Do not arbitrarily introduce many colors.

Use a restrained design system.

Recommended structure:

```text
Primary:
FreshMinds brand color

Background:
Warm white / very light neutral

Surface:
White

Text:
Dark charcoal

Muted text:
Neutral gray

Accent:
One complementary brand accent

Success:
Standard green

Error:
Standard red
```

If the mobile app already has an established color palette, the website should inherit that visual identity.

The website and mobile app should clearly look like the same brand.

---

# 27. Typography

The website must support English and Amharic beautifully.

Recommended approach:

### English

Use a modern sans-serif such as:

* Inter
* Manrope
* Plus Jakarta Sans
* Another equivalent modern font

### Amharic

Use an appropriate Ethiopic font such as:

* Noto Sans Ethiopic
* Noto Serif Ethiopic where appropriate

Make sure Amharic text is not visually broken or treated as an afterthought.

---

# 28. Language Strategy

FreshMinds serves Ethiopian students.

The site should support bilingual communication.

The design should use:

**English + strategic Amharic**

rather than translating every single sentence into huge duplicate paragraphs.

Examples:

```text
Your Key to Freshman Success!

የፍሬሽማን ስኬት መክፈቻ ቁልፍ
```

and:

```text
Built for Ethiopian Students

ለኢትዮጵያውያን ተማሪዎች የተሰራ
```

The website should remain clean.

---

# 29. Photography / Imagery

Prefer:

1. Actual FreshMinds app screenshots
2. Actual FreshMinds community visuals where appropriate
3. Original brand illustrations
4. High-quality Ethiopian student imagery

Avoid excessive generic Western stock imagery.

If using student photography, imagery should feel relevant to Ethiopian university students.

Do not use fake screenshots of features that do not exist.

---

# 30. App Screenshot Presentation

Use modern device mockups.

Example:

```text
        ┌───────────────────┐
        │   FreshMinds       │
        │                   │
        │  Welcome 👋       │
        │                   │
        │  Your Courses     │
        │                   │
        │  Mathematics      │
        │  Physics          │
        │  Chemistry        │
        │                   │
        └───────────────────┘
```

Replace conceptual content with actual screenshots/assets from the mobile application.

Use subtle animations:

* Phone floating slightly
* Screenshot transitions
* Scroll reveal
* Hover states

Do NOT make the entire page animated.

Performance is more important than animation.

---

# 31. Responsive Design

The site must be designed mobile-first.

Primary breakpoints:

* Small mobile
* Mobile
* Tablet
* Desktop
* Large desktop

The mobile version must not feel like a compressed desktop page.

Important:

Most FreshMinds visitors will likely arrive through mobile/social links.

Therefore:

**Mobile UX is the priority.**

---

# 32. Performance

The website should be extremely fast.

Priorities:

1. Fast initial render
2. Optimized images
3. Lazy-loaded non-critical images
4. Minimal JavaScript
5. Good Lighthouse performance
6. Responsive images
7. No unnecessary third-party scripts
8. No huge video backgrounds
9. No heavy animation libraries unless necessary

The website is primarily promotional, so there is no reason for it to be unnecessarily heavy.

---

# 33. SEO

SEO is an important reason for this website to exist.

Implement:

* Proper `<title>`
* Meta description
* Open Graph metadata
* Twitter/X metadata
* Canonical URL
* Semantic HTML
* Proper heading hierarchy
* Structured metadata where appropriate
* Sitemap
* Robots.txt
* Favicon
* Web app/site metadata

Suggested homepage title:

**FreshMinds Academy | Your Key to Freshman Success**

Suggested description:

> FreshMinds Academy helps Ethiopian students learn, practice, prepare, and navigate university life through a growing student community and mobile learning app.

Avoid keyword stuffing.

---

# 34. Search Intent

The website should be able to establish FreshMinds' identity when people search for:

* FreshMinds Academy
* FreshMinds Ethiopia
* Freshman learning Ethiopia
* Freshman resources Ethiopia
* FreshMinds app
* FreshMinds Academy app

Do not make unsupported claims in SEO copy.

---

# 35. Social Sharing

When someone shares:

```text
https://freshminds...
```

the preview should look professional.

Create:

* Open Graph title
* Open Graph description
* Open Graph image

The OG image should contain:

```text
FreshMinds Academy
Your Key to Freshman Success!
```

with brand identity and possibly a phone mockup.

---

# 36. Accessibility

Implement:

* Semantic HTML
* Keyboard navigation
* Visible focus states
* Good color contrast
* Alt text for meaningful images
* Proper buttons
* Proper links
* Reduced-motion support
* Accessible navigation
* Accessible mobile menu

Do not rely only on color to communicate information.

---

# 37. Animation

Use subtle animations only.

Good:

* Fade-in
* Slide-up
* Phone mockup entrance
* Button hover
* Card hover
* Smooth scrolling

Avoid:

* Excessive parallax
* Constant floating animations
* Huge page transitions
* Loading animations for simple content
* Animation that slows mobile devices

Respect:

```css
@media (prefers-reduced-motion: reduce)
```

---

# 38. Technical Architecture

Prefer a modern, maintainable stack.

Possible:

* Next.js
* React
* TypeScript
* Tailwind CSS

The site should be mostly static/content-driven.

Avoid introducing a backend unless it is genuinely required.

---

# 39. Content Configuration

Important brand information should be easy to update.

Create a central configuration/content structure:

```ts
export const siteConfig = {
  name: "FreshMinds Academy",
  tagline: "Your Key to Freshman Success!",
  description:
    "Helping Ethiopian students learn, practice, prepare, and navigate university life with confidence.",

  community: {
    memberCount: "5,000+",
    telegram: "https://t.me/FreshMinds_Academy"
  },

  app: {
    googlePlayUrl: "",
    status: "coming_soon" // "available" | "coming_soon"
  },

  social: {
    telegram: "https://t.me/FreshMinds_Academy",
    youtube: "",
    linkedin: ""
  },

  contact: {
    email: ""
  }
};
```

Do not scatter these values across components.

---

# 40. Environment Variables

External URLs and sensitive/configurable values should be environment-driven where appropriate.

Example:

```env
NEXT_PUBLIC_GOOGLE_PLAY_URL=
NEXT_PUBLIC_TELEGRAM_URL=
NEXT_PUBLIC_YOUTUBE_URL=
NEXT_PUBLIC_LINKEDIN_URL=
NEXT_PUBLIC_CONTACT_EMAIL=
```

Never expose private API keys or secrets in frontend code.

---

# 41. App Download Behavior

The main CTA should have configurable behavior.

If Google Play is available:

```text
Get the App → Google Play
```

If not:

```text
Coming Soon on Google Play
```

or:

```text
Join the Community
```

Do not hardcode a fake Play Store link.

---

# 42. Trust

Trust is extremely important.

The website should communicate that FreshMinds is real through:

* Real app screenshots
* Real community count
* Real Telegram community
* Real educational content
* Real milestones
* Clear About page
* Clear links to legal pages
* Professional design
* Consistent branding

Do not use fake reviews.
Do not fabricate testimonials.
Do not fabricate user numbers.
Do not fabricate partnerships.
Do not fabricate awards.

---

# 43. Tone of Voice

The writing should be:

* Warm
* Clear
* Encouraging
* Student-friendly
* Confident
* Human

Avoid:

> "We leverage cutting-edge AI-driven educational technologies to revolutionize the EdTech ecosystem."

Prefer:

> "We build practical tools and resources that help students learn and prepare with confidence."

The brand should sound like people who actually understand students.

---

# 44. Amharic Tone

Amharic copy should sound natural and student-friendly.

Avoid overly bureaucratic or translated language.

The tone should feel like FreshMinds' Telegram communication:

* Friendly
* Encouraging
* Direct
* Practical

Use English terminology in parentheses where useful.

Example:

> የዩኒቨርሲቲ ሕይወትህን በቀላሉ ጀምር።

rather than unnecessarily formal language.

---

# 45. Homepage Copy Direction

A possible final homepage narrative:

## Hero

**Your Key to Freshman Success!**

> Helping Ethiopian students learn, practice, prepare, and navigate university life with confidence.

**Get the FreshMinds App**

**Join Our Community**

---

## App

# Everything you need, right in your pocket.

> Learn, practice, review, and access useful academic resources through the FreshMinds Academy mobile app.

---

## Purpose

# Built for Ethiopian Students

> FreshMinds Academy is built around the real needs of students — from getting started at university to finding useful learning resources and preparing for exams.

---

## Community

# We're more than an app.

> Join a growing community of students learning, sharing, and preparing for their next step together.

**5,000+ community members**

**Join the Community**

---

## Story

# From a student community to a learning platform.

> FreshMinds began with a simple idea: students shouldn't have to figure everything out alone.

---

## Final CTA

# Your next step starts here.

> Download FreshMinds Academy and start your learning journey.

**Get the App**

---

# 46. What the Visitor Should Feel

After visiting the website, a student should think:

> "I understand what FreshMinds is."

Then:

> "They actually built an app for students."

Then:

> "There are already thousands of students in the community."

Then:

> "I should check out the app."

That is the desired conversion path.

---

# 47. Primary Conversion Funnel

The website should optimize for:

```text
Visitor
   ↓
Understand FreshMinds
   ↓
See real app
   ↓
Trust FreshMinds
   ↓
Download app
   ↓
Join community
```

Primary conversion:

**Download the mobile app**

Secondary conversion:

**Join the Telegram community**

Everything else supports these two goals.

---

# 48. Design Principle

The website should follow this principle:

> **Show, don't over-explain.**

Instead of paragraphs describing the app:

Show the app.

Instead of claiming students love FreshMinds:

Show the real community.

Instead of saying FreshMinds is growing:

Show real milestones.

Instead of claiming the platform is innovative:

Show what has actually been built.

---

# 49. Avoid Overbuilding

This project should remain lightweight.

The goal is NOT:

> Build another huge FreshMinds product.

The goal is:

> Build the official digital home of FreshMinds Academy.

The website should be maintainable by a small team or one developer.

---

# 50. Final Visual Direction

The finished website should feel approximately like:

```text
Modern startup quality
        +
Education brand
        +
Ethiopian student identity
        +
FreshMinds community warmth
        +
Real mobile app showcase
```

Think:

**clean, modern, warm, credible, student-focused.**

Not:

**corporate, complicated, flashy, or generic.**

---

# 51. Final Acceptance Criteria

The website is successful if:

* [ ] A new visitor understands FreshMinds within 10 seconds.
* [ ] The mobile app is clearly presented as the actual educational product.
* [ ] The website does not duplicate the app's learning functionality.
* [ ] The main CTA leads to the mobile app.
* [ ] The Telegram community is easy to discover.
* [ ] The 5,000+ community milestone is visible.
* [ ] The FreshMinds story is represented authentically.
* [ ] The design works beautifully on mobile.
* [ ] English and Amharic render correctly.
* [ ] Actual app screenshots are used where available.
* [ ] No fake testimonials or statistics are used.
* [ ] SEO metadata is implemented.
* [ ] Social sharing metadata is implemented.
* [ ] Lighthouse/performance is strong.
* [ ] The site feels like the same brand as the mobile app.
* [ ] The site can be maintained easily.
* [ ] Important links and statistics are configurable.
* [ ] No unnecessary backend or LMS functionality is introduced.

---

# 52. One-Sentence Product Definition

> **FreshMinds Academy's website is the official, modern, trustworthy front door to FreshMinds — a place to discover the brand, see the real mobile app, understand the mission, join the community, and start the journey.**

The **mobile app is where students learn.**

The **website is where people discover FreshMinds.**
