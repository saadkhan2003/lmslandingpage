# AI Tools Business Mastery Program — Landing Page Requirements Document

## 1. Project Overview

Build a beautiful, professional, high-converting landing page for the **AI Tools Business Mastery Program**.

The landing page should promote a paid course that teaches beginners how to start an AI tools/service-based business, find clients, close clients, and earn their first income using a step-by-step practical system.

The page will be built using:

- Next.js
- TypeScript
- Tailwind CSS
- shadcn/ui
- lucide-react
- Fully responsive layout
- Clean professional education/business style

The landing page should not look like a dark neon AI website. It should look like a premium online course landing page with strong trust, clean spacing, good typography, strong CTAs, and polished shadcn-style cards.

---

## 2. Brand / Course Name

### Main Course Name

AI Tools Business Mastery Program

### Short Brand Name For Navbar

AI Tools Mastery

### Main Offer Promise

Start Your AI Business & Earn Your First Income in Just 5 Days

### Pricing

Original Price: Rs. 5000
Discounted Price: Rs. 2999

---

## 3. Target Audience

The landing page is for:

- Students
- Beginners
- Freelancers
- People who want to earn online
- People interested in AI tools
- People who do not know how to find clients
- People who want a practical business roadmap
- People who want to start a service-based AI business

The copy should be simple, beginner-friendly, motivating, and trust-building.

---

## 4. Main Goal

The main goal of the landing page is to convert visitors into enrolled students.

Primary CTA:

Enroll Now

Secondary CTAs:

- View Program
- Join Now
- Get Started Now

---

## 5. Visual Design Direction

### Overall Style

The design should be:

- Clean
- Premium
- Professional
- Educational
- Trustworthy
- Modern but not flashy
- shadcn-style
- Minimal but not boring
- High-converting

### Avoid

Do not use:

- Dark AI theme
- Neon purple/blue design
- Glassmorphism
- Cyberpunk style
- Overly futuristic graphics
- Generic robot illustrations
- Too many gradients
- Complex animations
- Cluttered layout

### Preferred Look

Use a clean light theme:

- White background
- Stone/slate sections
- Subtle borders
- Rounded cards
- Soft shadows
- Black or emerald CTA buttons
- Warm amber highlights
- Professional typography

---

## 6. Color Palette

Use a clean shadcn-compatible color system.

### Primary Colors

- Background: white
- Section Background: stone-50 / slate-50
- Text Primary: slate-950
- Text Secondary: slate-600
- Border: slate-200 / stone-200
- CTA Primary: slate-950 or emerald-600
- CTA Hover: slate-800 or emerald-700
- Accent: amber-500 / emerald-500
- Card Background: white

### Recommended Tailwind Classes

- bg-white
- bg-stone-50
- bg-slate-50
- text-slate-950
- text-slate-600
- border-slate-200
- bg-slate-950
- hover:bg-slate-800
- bg-emerald-600
- hover:bg-emerald-700
- text-amber-500

---

## 7. Typography

Use clean modern typography.

Recommended font:

- Inter
- Geist Sans
- System sans-serif

### Typography Rules

- Big bold headline
- Clear section headings
- Short readable paragraphs
- Avoid long blocks of text
- Use strong contrast
- Use consistent spacing

### Suggested Sizes

Hero headline:

text-4xl md:text-6xl font-bold tracking-tight

Section heading:

text-3xl md:text-4xl font-bold tracking-tight

Body text:

text-base md:text-lg text-slate-600

Small text:

text-sm text-slate-500

---

## 8. Tech Stack Requirements

### Frontend

- Next.js App Router
- TypeScript
- Tailwind CSS
- shadcn/ui
- lucide-react

### Required shadcn/ui Components

Use the following components:

- Button
- Card
- Badge
- Accordion
- Avatar
- Separator
- Tabs
- Sheet

Optional components:

- Dialog
- Input
- Label
- Textarea

### Icon Library

Use:

lucide-react

Recommended icons:

- CheckCircle
- Star
- Users
- Rocket
- ShieldCheck
- Gift
- BookOpen
- TrendingUp
- MessageCircle
- Target
- BadgeCheck
- Clock
- Zap
- ArrowRight
- PlayCircle
- XCircle

---

## 9. Page Structure

The landing page should include the following sections:

1. Sticky Navbar
2. Hero Section
3. Results Section
4. How The Program Works
5. Student Reviews
6. Why Join Us
7. Comparison Section
8. Bonuses Section
9. Pricing Section
10. Risk-Free Offer
11. Course Outline
12. FAQs
13. Final CTA
14. Footer

---

# 10. Detailed Section Requirements

---

## Section 1: Sticky Navbar

### Purpose

Help users quickly navigate the landing page and always keep the enrollment CTA visible.

### Layout

Desktop:

- Left: Logo
- Center/Right: Navigation links
- Right: Enroll Now button

Mobile:

- Left: Logo
- Right: Menu icon
- Menu opens inside shadcn Sheet

### Navbar Content

Logo text:

AI Tools Mastery

Navigation links:

- Home
- Program
- Results
- Reviews
- FAQs

CTA button:

Enroll Now

### Design

- Sticky top-0
- White background
- Border bottom
- Backdrop blur optional
- Height around 72px
- Clean spacing
- Mobile responsive

### CTA Action

All CTA buttons should scroll to the pricing/enrollment section.

Use section id:

#pricing

---

## Section 2: Hero Section

### Purpose

Immediately explain the course promise and push the user toward enrollment.

### Layout

Desktop:

- Two-column layout
- Left side: Copy, CTAs, social proof
- Right side: Mentor image/course preview card

Mobile:

- Single-column layout
- Copy first
- Image/card second

### Hero Badge

The #1 AI Tools Business Mastery Program

### Main Headline

Start Your AI Business & Earn Your First Income in Just 5 Days

### Subheadline

Learn how to find high-demand AI tools, close clients, and build your first income stream with a simple step-by-step system.

### Primary CTA

Enroll Now

### Secondary CTA

View Program

### Trust / Social Proof

Display:

- 5.0 Rating
- 79+ Successful Students
- Beginner Friendly

### Right Side Card

Create a beautiful mentor/course preview card.

Possible content:

- Your Mentor
- AI Tools Business Mastery Program
- 5-Day Action Roadmap
- Client Finding System
- Templates Included

Use a placeholder image area if actual mentor photo is not provided.

### Design Notes

- Large clean heading
- Strong CTA
- Subtle card shadows
- Warm accent badges
- Trust-building layout
- No dark neon styling

---

## Section 3: Results Section

### Purpose

Show proof and build trust using results from ads, systems, or students.

### Section ID

#results

### Heading

Proven Results From Real Ads & Systems

### Subheading

See the real proof behind the program before you join.

### Layout

Use 3 result cards.

Each result card should include:

- Image placeholder
- Small title
- Short description

Example cards:

1. Real Campaign Results
2. System Performance Proof
3. Student Progress Screenshots

### CTA

Enroll Now

### Design

- 3-column grid on desktop
- 1-column grid on mobile
- Rounded-2xl cards
- Border
- Soft shadow
- Clean screenshot placeholders

---

## Section 4: How The Program Works

### Purpose

Explain the course process in simple steps.

### Section ID

#program

### Heading

How The Program Works

### Subheading

A simple step-by-step roadmap to help you go from beginner to action-taker.

### Cards

Create 4 cards:

### Card 1

Title: Learn AI Tools
Description: Understand the most useful AI tools and how they can solve real business problems.
Icon: BookOpen

### Card 2

Title: Pick a High-Demand Service
Description: Choose a simple AI service that people and businesses are already willing to pay for.
Icon: Target

### Card 3

Title: Find & Close Clients
Description: Learn how to reach potential clients, message them, and close your first deal.
Icon: MessageCircle

### Card 4

Title: Earn, Improve & Scale
Description: Deliver the service, improve your offer, and grow your income step by step.
Icon: TrendingUp

### Design

- Grid layout
- Number badges: 01, 02, 03, 04
- Icons inside soft background circles
- Clean shadcn cards

---

## Section 5: Student Reviews

### Purpose

Build social proof using testimonials.

### Section ID

#reviews

### Heading

What Students Are Saying

### Subheading

Real feedback from students who joined the program and started taking action.

### Layout

Show 4 testimonial cards.

Each testimonial card should include:

- Avatar
- Student name
- 5-star rating
- Review text

### Example Reviews

### Review 1

Name: Ali R.
Review: This program gave me a clear direction. I finally understood how to package AI tools as a service and approach clients.

### Review 2

Name: Hamza K.
Review: The roadmap is simple and practical. I liked that it focuses on action instead of only theory.

### Review 3

Name: Ayesha M.
Review: The templates and examples helped me understand how to message clients professionally.

### Review 4

Name: Usman S.
Review: Best for beginners who want to start with AI tools but do not know where to begin.

### CTA

Join Now

---

## Section 6: Why Join Us

### Purpose

Explain the main benefits of the course.

### Heading

Why Join This Program?

### Subheading

Everything is designed to help beginners take action quickly and confidently.

### Feature Cards

Create 6 cards:

### 1. Beginner Friendly

No previous business or AI experience required.

### 2. Step-by-Step Roadmap

Follow a clear 5-day action plan from learning to client outreach.

### 3. Client Finding System

Learn how to find people who need AI-based services.

### 4. Real AI Business Skills

Learn practical services you can offer using AI tools.

### 5. Templates Included

Get message templates, offer examples, and service ideas.

### 6. Practical Assignments

Apply what you learn instead of only watching lessons.

### Design

- 2-column or 3-column grid
- Icons with soft accent background
- Clean card layout
- Consistent spacing

---

## Section 7: Comparison Section

### Purpose

Show why this course is different from other courses.

### Heading

Other Courses vs AI Tools Business Mastery

### Subheading

This program is built for practical execution, not just theory.

### Layout

Two cards side by side.

---

### Left Card: Other Courses

Title:

Other Courses

Bullets:

- Only theory
- No client system
- No practical roadmap
- No real execution
- No templates
- Confusing for beginners

Design:

- Muted card
- Use X icons or simple gray bullets

---

### Right Card: My Course

Title:

AI Tools Business Mastery Program

Bullets:

- Practical business roadmap
- Client closing method
- AI tools list included
- Templates and bonuses
- Beginner-friendly system
- 5-day action plan

Design:

- Highlighted card
- Use CheckCircle icons
- Slightly stronger border
- CTA button inside card

CTA:

Enroll Now

---

## Section 8: Bonuses Section

### Purpose

Increase perceived value of the course.

### Heading

Exclusive Bonuses Included

### Subheading

Join today and get extra resources to help you take action faster.

### Bonus Cards

### Bonus 1

Title: AI Tools List
Description: A curated list of useful AI tools you can use to create services.
Icon: Gift

### Bonus 2

Title: Client Message Templates
Description: Ready-to-use messages for reaching potential clients.
Icon: MessageCircle

### Bonus 3

Title: Service Pricing Guide
Description: Learn how to price your AI services with confidence.
Icon: TrendingUp

### Bonus 4

Title: Offer Creation Sheet
Description: A simple worksheet to help you build your first service offer.
Icon: BookOpen

---

## Section 9: Pricing Section

### Purpose

Clearly present the offer and push the visitor to enroll.

### Section ID

#pricing

### Heading

Join AI Tools Business Mastery Today

### Subheading

Get the complete roadmap, templates, bonuses, and practical training for one simple price.

### Pricing Card Content

AI Tools Business Mastery Program

Original Price: Rs. 5000
Today Price: Rs. 2999

### Price Design

Old price:

Rs. 5000

The old price should be crossed out.

New price:

Rs. 2999

The new price should be large and bold.

### Trust Bullets

- Limited seats available
- Beginner friendly
- Lifetime access
- Templates included
- Practical roadmap

### CTA Button

Enroll Now

### Secondary Trust Text

Start today and follow the 5-day action roadmap.

---

## Section 10: Risk-Free Offer

### Purpose

Reduce hesitation and increase confidence.

### Heading

Risk-Free Learning Experience

### Description

Join the program with confidence. You will get a clear step-by-step roadmap to start your AI tools business and take action from day one.

### CTA

Get Started Now

### Design

Use a highlighted shadcn card with:

- ShieldCheck icon
- Soft amber or emerald background
- Rounded-2xl
- Border
- Clean centered layout

---

## Section 11: Course Outline

### Purpose

Show what the student will learn inside the course.

### Heading

Course Outline

### Subheading

A clear module-by-module roadmap designed for beginners.

### Component

Use shadcn Accordion.

### Modules

### Module 1: Introduction to AI Tools Business

Understand the AI tools business model, how people earn with AI services, and what opportunities are available for beginners.

### Module 2: Finding Profitable AI Services

Learn how to identify simple AI services that businesses and individuals are already willing to pay for.

### Module 3: Creating Your Offer

Package your AI service into a clear offer with pricing, benefits, and a simple delivery process.

### Module 4: Finding Clients

Discover where to find potential clients and how to build a list of people to contact.

### Module 5: Closing Clients

Learn simple outreach, follow-up, and closing methods to convert interested people into paying clients.

### Module 6: Delivery & Scaling

Learn how to deliver your service, improve your process, collect testimonials, and scale your income.

---

## Section 12: FAQs

### Purpose

Answer common objections.

### Section ID

#faqs

### Heading

Frequently Asked Questions

### Component

Use shadcn Accordion.

### Questions And Answers

### Q1. Do I need experience?

No. This program is beginner-friendly and explains everything step by step.

### Q2. Can beginners join?

Yes. The course is designed for students, freelancers, and beginners who want to start with AI tools.

### Q3. How long is the course?

The program is designed around a 5-day action roadmap, so you can start applying the steps quickly.

### Q4. Will I get templates?

Yes. You will get useful templates, client message examples, and bonus resources to help you take action.

### Q5. Can I earn from this?

The program teaches practical methods for starting an AI tools business, but your results depend on your action, consistency, and effort.

### Q6. How do I enroll?

Click the Enroll Now button and follow the enrollment instructions.

---

## Section 13: Final CTA

### Purpose

Give one final push before the page ends.

### Heading

Ready to Start Your AI Tools Business?

### Text

Join the AI Tools Business Mastery Program today and start building your first income system with a clear step-by-step roadmap.

### CTA

Enroll Now

### Design

- Centered layout
- Strong headline
- Short paragraph
- Large CTA button
- Light background card or section

---

## Section 14: Footer

### Footer Content

AI Tools Mastery
Helping beginners start practical AI service businesses.

### Footer Links

- Home
- Program
- Results
- Reviews
- FAQs
- Enroll Now

### Copyright

© 2026 AI Tools Mastery. All rights reserved.

---

# 11. CTA Behavior

All CTA buttons should either:

1. Scroll to the pricing section:

#pricing

Or:

2. Open an enrollment/payment/contact link.

For now, use:

href="#pricing"

CTA buttons on page:

- Enroll Now
- View Program
- Join Now
- Get Started Now

Expected behavior:

- Enroll Now → #pricing
- View Program → #program
- Join Now → #pricing
- Get Started Now → #pricing

---

# 12. Responsive Requirements

The page must be fully responsive.

### Desktop

- Max width container: 1200px or 1280px
- Two-column hero
- Three-column cards where suitable
- Sticky navbar

### Tablet

- Two-column sections can become single or two-column depending on space
- Cards should wrap cleanly

### Mobile

- Single-column layout
- Hero text centered or left-aligned
- Navbar opens as mobile sheet menu
- Buttons stack vertically if needed
- Cards full width
- No horizontal overflow

---

# 13. Component Requirements

## Buttons

Use shadcn Button.

Button variants:

- Primary: solid dark or emerald
- Secondary: outline
- Ghost: navbar links

Button styling:

- rounded-xl
- h-11 or h-12
- font-medium

---

## Cards

Use shadcn Card.

Card style:

- rounded-2xl
- border
- bg-white
- shadow-sm
- hover:shadow-md optional

---

## Badges

Use shadcn Badge.

Badge style:

- rounded-full
- bg-amber-100
- text-amber-800

or:

- bg-emerald-100
- text-emerald-800

---

## Accordions

Use shadcn Accordion for:

- Course Outline
- FAQs

Accordion style:

- border
- rounded-2xl
- bg-white

---

## Testimonials

Use Avatar component.

Each review card should include:

- Avatar fallback initials
- Student name
- Star rating
- Review text

---

# 14. Image Requirements

The page should support the following images:

### Required Image Types

- Mentor image
- Results screenshots
- Student review images or avatars
- Course preview/thumbnail

### If Images Are Missing

Use clean placeholder cards.

Placeholder text examples:

- Mentor Photo
- Result Screenshot
- Student Review
- Course Preview

### Image Style

- rounded-2xl
- object-cover
- border
- shadow-sm

---

# 15. Copywriting Rules

The copy should be:

- Simple
- Direct
- Beginner-friendly
- Motivational
- Professional
- Trust-building
- Not overhyped
- Not fake-guarantee style

Avoid claims like:

- Guaranteed income
- Become rich overnight
- Earn without work
- 100% success guaranteed

Use realistic wording:

- Start building your first income system
- Learn practical methods
- Your results depend on action and consistency
- Step-by-step roadmap

---

# 16. SEO Requirements

### Page Title

AI Tools Business Mastery Program | Start Your AI Business in 5 Days

### Meta Description

Join the AI Tools Business Mastery Program and learn how to find high-demand AI services, close clients, and start building your first income stream with a simple 5-day roadmap.

### Open Graph Title

AI Tools Business Mastery Program

### Open Graph Description

A practical beginner-friendly program to help you start an AI tools business, find clients, and build your first income system.

### URL Slug

/

or:

/ai-tools-business-mastery

---

# 17. Accessibility Requirements

The landing page should follow basic accessibility standards:

- Use semantic HTML
- Use proper heading hierarchy
- Buttons should have clear labels
- Images should have alt text
- Text should have enough contrast
- Mobile menu should be keyboard accessible
- Accordion should be accessible through shadcn defaults
- Avoid tiny font sizes
- Avoid important text inside images only

---

# 18. Performance Requirements

The landing page should be fast.

Requirements:

- Use optimized images
- Avoid heavy animation libraries unless needed
- Lazy-load below-the-fold images
- Use Next.js Image component where possible
- Keep JavaScript minimal
- Avoid unnecessary dependencies

Performance target:

- Lighthouse Performance: 90+
- Accessibility: 90+
- SEO: 90+
- Best Practices: 90+

---

# 19. Animation Requirements

Animations should be minimal and professional.

Allowed:

- Subtle hover shadows
- Button hover effects
- Small icon movement
- Fade-in sections optional

Avoid:

- Heavy motion
- Complex scroll animations
- 3D animations
- Distracting effects

---

# 20. Folder / File Structure

Recommended structure:

app/
  page.tsx
  layout.tsx
  globals.css

components/
  landing/
    navbar.tsx
    hero-section.tsx
    results-section.tsx
    how-it-works.tsx
    reviews-section.tsx
    why-join-section.tsx
    comparison-section.tsx
    bonuses-section.tsx
    pricing-section.tsx
    risk-free-section.tsx
    course-outline.tsx
    faqs-section.tsx
    final-cta.tsx
    footer.tsx

components/
  ui/
    button.tsx
    card.tsx
    badge.tsx
    accordion.tsx
    avatar.tsx
    separator.tsx
    sheet.tsx

lib/
  utils.ts

---

# 21. Data Structure Recommendation

Keep page content in arrays to make it easy to edit.

Example:

```ts
const features = [
  {
    title: "Beginner Friendly",
    description: "No previous business or AI experience required.",
    icon: "Users",
  },
  {
    title: "Step-by-Step Roadmap",
    description: "Follow a clear 5-day action plan from learning to client outreach.",
    icon: "Rocket",
  },
]
Use arrays for:

Features
Program steps
Reviews
Bonuses
FAQs
Course modules
Comparison points
22. Enrollment Flow

For now:

Enroll Now buttons scroll to #pricing

Later possible options:

WhatsApp enrollment link
Payment checkout link
Course platform signup page
Google Form
Custom checkout page

Recommended future CTA link:

https://wa.me/YOUR_NUMBER?text=I%20want%20to%20join%20AI%20Tools%20Business%20Mastery%20Program

23. Acceptance Criteria

The landing page is complete when:

Navbar is sticky and responsive
Mobile menu works
Hero section clearly explains the offer
All CTAs work
Pricing section is visible and clear
Course outline uses accordion
FAQs use accordion
Page is fully responsive
Design uses shadcn/ui
No dark neon AI theme
No purple/blue cyberpunk design
Cards have clean borders and rounded corners
Page looks professional and trustworthy
Text is beginner-friendly
No fake income guarantees
Page loads fast
No horizontal scroll on mobile
All images have alt text
Code is clean and component-based
24. Final Build Prompt For AI Developer

Build a complete responsive landing page for “AI Tools Business Mastery Program” using Next.js App Router, TypeScript, Tailwind CSS, shadcn/ui, and lucide-react.

The design should be clean, professional, premium, and education-focused. Do not use a dark neon AI theme. Do not use purple/blue cyberpunk styling. Use a light shadcn-style design with white, stone-50, slate-950, slate-600, emerald, and warm amber accents.

The page must include:

Sticky Navbar
Hero Section
Results Section
How The Program Works
Student Reviews
Why Join Us
Comparison Section
Bonuses Section
Pricing Section
Risk-Free Offer
Course Outline
FAQs
Final CTA
Footer

Use shadcn components:

Button
Card
Badge
Accordion
Avatar
Separator
Sheet

Use lucide-react icons:

CheckCircle
Star
Users
Rocket
ShieldCheck
Gift
BookOpen
TrendingUp
MessageCircle
Target
BadgeCheck
Clock
ArrowRight
XCircle

Main headline:

Start Your AI Business & Earn Your First Income in Just 5 Days

Subheadline:

Learn how to find high-demand AI tools, close clients, and build your first income stream with a simple step-by-step system.

Pricing:

Original Price: Rs. 5000
Today Price: Rs. 2999

Main CTA:

Enroll Now

All Enroll Now buttons should link to #pricing.

Make the page fully responsive, mobile-first, cleanly spaced, and polished. Use rounded-2xl cards, subtle borders, soft shadows, strong typography, and professional layout. Use placeholder image cards where real images are missing.
