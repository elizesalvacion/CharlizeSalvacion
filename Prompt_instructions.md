Perfect — below is a **clean, copy-pasteable prompt** you can give directly to a code editor / AI code assistant (Cursor, Copilot Chat, v0, etc.).
It’s **implementation-ready**, clear about design intent, and scoped to a simple but strong portfolio.

---

## Code Editor Prompt

> Build a **simple, modern, minimalist portfolio website** for a junior software developer.
> The design should feel **clean, professional, and slightly cute**, without looking childish or overly playful.

### Tech Stack & Constraints

* Use **HTML, CSS, and JavaScript** (or React if preferred)
* Responsive (desktop first, mobile friendly)
* Clean semantic structure
* Easy to extend later with more sections
* No heavy animations; subtle hover states only

---

### Visual Style & Tone

* Overall vibe: **modern, calm, approachable, confident**
* Minimalist layout with good spacing
* Soft rounded corners
* Cute elements should feel intentional (not cartoonish)
* Suitable for recruiters and hiring managers

---

### Color Palette (Strict)

* **Background:** `#1F2A44` (deep indigo / navy)
* **Accent:** `#B4ADEA` (soft lavender)
* **Primary Text (light):** `#F5F6FA`
* **Secondary Text (muted):** `#5C6270`

Use accent color sparingly for:

* Name highlight
* Buttons
* Links
* Small UI details

---

### Typography

* Use a clean sans-serif font (e.g. Inter, Poppins, or system font)
* Headings: medium to semi-bold
* Body text: regular
* Clear hierarchy (H1 → H2 → body)

---

### Header / Hero Section Layout (IMPORTANT)

Replicate this structure:

**Left column (text):**

* Small greeting text:
  “Nice to meet you!”
* Large heading with accent highlight:
  “I’m **Charlize**” (name in accent color)
* Subtitle:
  “Software Developer”
* Short description paragraph (2–3 lines max):

  > I build and document real-world solutions using Salesforce Marketing Cloud and modern web technologies—focusing on clarity, usability, and systems that scale beyond “just working.”
* Primary CTA button:

  * Text: **“Contact Me!”**
  * Rounded button
  * Light background with accent text OR accent background with light text

**Right column (visual):**

* A **cute but minimal illustration placeholder**

  * Rounded blob / cat-like silhouette
  * Flat, simple shape
  * No excessive detail
* The illustration should balance the layout without overpowering the text

---

### Layout Details

* Center the hero section vertically
* Max width container (around 1100–1200px)
* Generous padding
* Button hover states using accent color
* Smooth transitions (0.2–0.3s)

---

### Accessibility & UX

* High contrast text
* Buttons large enough to click easily
* Logical tab order
* Clean, readable spacing

---

### Output Expectations

* Provide **complete, working code**
* Separate files if possible (`index.html`, `styles.css`, optional JS)
* Comment key sections
* Keep it simple and readable


## About Me section

---

## Code Editor Prompt — About Me Section

> Build an **“About Me” section** for a junior software developer portfolio that is **modern, minimalist, and friendly**, with a subtle cute touch while remaining professional and recruiter-friendly.

---

### Section Purpose

This section should quickly communicate:

* What I work on
* My core technical focus areas
* How I add value (practical, real-world skills)
* Without long paragraphs or text-heavy blocks

The content should be **easy to scan in under 10 seconds**.

---

### Visual Style

* Background color: `#1F2A44`
* Accent color: `#B4ADEA`
* Primary text: `#F5F6FA`
* Secondary/muted text: `#5C6270`
* Rounded cards, soft shadows
* Clean spacing and alignment
* Minimal animations (hover only)

Tone: **confident, approachable, calm**

---

### Layout Structure

#### Section Header (Centered)

* Large title: **“About Me”**

  * Color: accent (`#B4ADEA`)
* Short intro paragraph below:

  > I’m a junior developer working across Salesforce Marketing Cloud, internal tools, and web applications, with a focus on data, automation, and frontend systems.

Keep this to **1–2 lines max**.

---

#### Skill Cards (Two Cards, Side by Side)

Create two rounded cards with icons:

**Card 1 — Salesforce Developer**

* Title: “Salesforce Developer”
* Subtitle / list:

  * Marketing Cloud Next
  * Agentforce
  * SQL
  * AMPscript
  * Data Extensions
  * Journeys

**Card 2 — Web Developer**

* Title: “Web Developer”
* Subtitle / list:

  * HTML
  * CSS
  * JavaScript
  * React
  * Next.js
  * Python

Cards should:

* Use a slightly lighter background than the page
* Have soft rounded corners
* Highlight titles using accent color
* Be responsive (stack on mobile)

---

#### Key Capabilities List (Left-Aligned)

Below or beside the cards, add a **short checklist** with green check icons:

* Segmentation with SQL-based data views
* Building responsive web apps
* Building multi-path journeys
* Building complex automations

Keep spacing comfortable and readable.

---

#### Illustration Area (Right Side)

* Include a **cute but minimal illustration placeholder**

  * Cat / mascot / abstract dev illustration
  * Flat, soft style
  * No excessive detail
* Illustration should support the content, not overpower it
* Hide or move below content on smaller screens

---

### Responsiveness

* Desktop: two-column layout (content + illustration)
* Mobile:

  * Stack content vertically
  * Cards first, checklist second, illustration last
* Maintain padding and readability at all sizes

---

### Code Expectations

* Clean, semantic HTML
* Reusable CSS classes
* Easy to modify text and add more cards later
* Comment key layout sections
* No external UI libraries required

---

### Overall Goal

This section should feel:

> “This developer understands modern tools, builds real things, and communicates clearly.”

Not flashy.
Not text-heavy.
Not junior-looking — just **junior-level honest and well-presented**.


## Projects section
Here's a detailed prompt for your AI IDE:

---

**PROMPT:**

Create a "Projects" section for a minimalist portfolio website following these exact specifications:

**Overall Layout:**
- Background color: `#1F2A44` (deep navy)
- Section container: rounded rectangle border with `#B4ADEA` (lavender), subtle border, corner radius 16px
- Section title "Projects" centered at top in `#B4ADEA`, font size 36-40px, font weight 600

**Card Layout Structure:**
Create 4 project cards arranged vertically with alternating left-right layouts:
1. Card 1 (Salesforce): Image LEFT, text RIGHT
2. Card 2 (Neural Network): Image RIGHT, text LEFT
3. Card 3 (Omni-Channel): Image LEFT, text RIGHT
4. Card 4 (Loyalty Calculator): Image RIGHT, text LEFT

**Individual Card Specifications:**

Each card should have:
- Subtle background: `#252F4A` with slight transparency/opacity
- Corner radius: 12px
- Padding: 30-40px
- Margin between cards: 30-40px

**Text Content Layout (for each card):**

*Title Section:*
- Icon/emoji (16-20px) + Project title
- Title font: 18-20px, font weight 600, color `#B4ADEA`
- Subtitle below title: 14px, color `#F5F6FA`, opacity 0.8

*Bullet Points:*
- Use standard bullet points (•)
- Font size: 13-14px
- Color: `#F5F6FA`
- Opacity: 0.85
- Line height: 1.6-1.8 for readability
- 4-5 bullet points per card

*Key Skills Section (bottom of card):*
- "Key skills:" label in bold
- Skills listed inline, separated by commas
- Font size: 12-13px
- Color: `#B4ADEA` for the label, `#F5F6FA` for skills
- Slightly muted opacity

**Image Specifications (350-400px wide, 280-320px tall):**

Each card needs an illustration with these characteristics:
- Style: Flat design, modern, minimalist
- Color palette: Navy blues (`#1F2A44`, `#2A3654`), lavender (`#B4ADEA`), light accents (`#F5F6FA`)
- Corner radius: 8-12px

*Image 1 - Salesforce/Database (Cards 1, 3, 4):*
- Isometric or flat illustration showing:
  - Database cylinders (golden/yellow `#F4B942`)
  - SQL code window/terminal with "SELECT" visible
  - Data table/spreadsheet representation
  - Small sparkles/stars in lavender `#B4ADEA`
  - Funnel icon (representing segmentation)
- Style: Clean, technical, professional

*Image 2 - Neural Network (Card 2):*
- Illustration showing:
  - Neural network nodes connected by lines (3-4 layers)
  - Nodes as circles in gradient from `#B4ADEA` to lighter purple
  - Connection lines in light blue/lavender
  - Brain icon or network visualization
  - Progress bars or training metrics
  - Abstract data points/graphs in background
- Style: Modern, tech-forward, slightly more colorful

**Responsive Spacing:**
- Consistent 20-30px padding inside each card
- Image and text sections should have ~40px gap between them
- Vertical spacing between cards: 30-40px
- Overall section padding: 60px top, 60px bottom

**Additional Visual Details:**
- Subtle shadow or glow effect on cards (optional, very subtle)
- Slight gradient overlay on images (optional)
- Ensure text is always highly readable against background
- Icons next to project titles should be simple, matching the aesthetic (🧠 brain, 🌐 globe, 📊 chart, ⚡ lightning bolt style)

**Content for Each Card:**

*Card 1 - Salesforce Marketing Cloud Development:*
- Icon: ⚡ or cloud icon
- Subtitle: "Marketing Automation"
- Bullets: [as shown in image]
- Key skills: SQL, AMPscript, Journey Builder, Data Views

*Card 2 - Neural Network Trainer:*
- Icon: 🧠
- Subtitle: "Full-Stack Web Application"
- Description: "A web app for training and visualizing neural networks using preset or custom datasets. Includes saved training runs, authentication, and real-time progress visualization."
- Key skills: React, FastAPI, Python, NumPy, MongoDB, API integration

*Card 3 - Omni-Channel Application:*
- Icon: 🌐
- Subtitle: "Customer Interaction Platform"
- Description: "An application designed to unify customer interactions across multiple channels, focusing on clean data flow, scalable architecture, and consistent user experience."
- Key skills: Frontend-backend integration, data modeling, system design, UI flows

*Card 4 - Loyalty & Engagement Calculator:*
- Icon: 📊
- Subtitle: "Python Microservice"
- Description: "A standalone microservice that processes customer datasets to calculate loyalty and engagement scores for segmentation and analytics use cases."
- Key skills: Python, microservices, data processing, analytics logic, API-ready design

---


## Skills & Technologies Section

## Code Editor Prompt 

> Build a **“Skills & Technologies” section** for a junior software developer portfolio that is **modern, minimalist, and interactive**, with a subtle cute touch while remaining professional and recruiter-friendly.

---

### Section Purpose

This section should quickly communicate:

* My two core technical domains
* The specific tools and technologies I work with
* My growth over time, without overwhelming text

The interaction should feel **playful but intentional**, encouraging hover exploration while remaining easy to scan.

---

### Visual Style

* Background color: `#1F2A44`
* Accent color: `#B4ADEA`
* Primary text: `#F5F6FA`
* Secondary/muted text: `#5C6270`
* Rounded container with subtle border
* Soft shadows
* Smooth hover transitions (opacity + text fade-in)
* No flashy animations

Tone: **calm, confident, slightly whimsical**

---

### Layout Structure

#### Section Header (Centered)

* Large title centered at the top:

  **“Skills & Technologies”**

  * Color: accent (`#B4ADEA`)
  * Slightly spaced lettering for elegance

---

#### Skill Selector Area (Two Items)

Below the header, display **two large selectable skill labels** side by side:

1. **Salesforce Marketing Cloud**
2. **Web Development**

Default state:

* Both skill labels are visible
* One is highlighted slightly, the other neutral
* Supporting text area shows a short whimsical line:

> “Collected over time, shaped by curiosity and real projects.”

(Use a soft, playful tone—not childish.)

---

### Hover Interaction Behavior

#### On Hover — Salesforce Marketing Cloud

* “Salesforce Marketing Cloud” becomes fully opaque
* “Web Development” fades to lower opacity
* A text block fades in on the right (or below on mobile) with:

```
SQL (Data Views, joins, segmentation logic)
AMPscript
Journey Builder & automations
```

Text should:

* Appear smoothly (opacity + slight translate)
* Be left-aligned
* Use primary text color
* Have comfortable line spacing

---

#### On Hover — Web Development

* “Web Development” becomes fully opaque
* “Salesforce Marketing Cloud” fades to lower opacity
* A text block fades in with:

```
HTML, CSS
JavaScript
React, Next.js
REST / API familiarity
```

---

#### On Hover Out (Default / Idle State)

* Hide the detailed lists
* Restore both skill labels to equal opacity
* Show a short whimsical helper line such as:

> “Tools I’ve gathered along the way, project by project.”

(Feel thoughtful, reflective, and warm—not playful for the sake of it.)

---

### Layout Notes

* Desktop:

  * Skills displayed side by side
  * Detail text appears aligned to the right or centered beneath
* Mobile:

  * Stack skills vertically
  * Tap to reveal details instead of hover
  * Detail text appears directly below the selected skill

---

### Accessibility & UX

* Hover and focus states should behave the same
* Cursor change on hover (`pointer`)
* Maintain readable contrast at all times
* Do not rely on color alone to indicate state

---

### Code Expectations

* Semantic HTML structure
* Reusable CSS classes
* Clear hover/focus states using CSS (no JS required, optional enhancement allowed)
* Comment key interaction logic
* Easy to add more skill categories later

---
