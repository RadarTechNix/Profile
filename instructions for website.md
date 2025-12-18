Goal:
Build a responsive, accessible, single-page portfolio website (with optional multi-page expansion) to showcase my professional experience from latest → oldest. The site must be ready to host on GitHub Pages and come with a Git repository, deployment instructions, and a README.

Primary audience: recruiters, hiring managers, technical leads, and collaborators.

Content source: I will provide the following documents and links; please use them as primary content: resume(s) (PDF/doc), LinkedIn profile URL, project documents, code repo links, photos (profile + project screenshots), and any testimonials. Pull and structure content from those docs; do not invent facts.
documents are available in folder ".\Docs"
Linkined profile is available at "https://www.linkedin.com/in/nikhil-navghade/"

Requirements & Deliverables

Deliverables

A Git repository (public) with a production-ready website.

Clean, well-documented code (React + Vite or static site generator) and a README.md with:

local dev instructions

build & deploy steps

how to update content

One-click deployment to GitHub Pages (either via gh-pages branch or GitHub Actions CI workflow).

SEO & social meta (title, description, OG image)

Downloadable Resume link/button (PDF)

Contact section with a contact form (or instructions to wire Formspree / Netlify Forms / email link) and visible email/LinkedIn.

Accessibility (WCAG basics), responsive layout, and fast loading.

Small test checklist (responsiveness, internal links, resume download, contact form working).

Optional: GitHub Actions workflow that builds & deploys to gh-pages on push to main.

Tech stack (recommended)

Frontend: React + Vite, or plain static HTML/CSS if you prefer minimal complexity.

Styling: Tailwind CSS (or plain CSS / Bootstrap if preferred).

Hosting: GitHub Pages (static build pushed to gh-pages or use main with Pages configured).

Extras: Optional GitHub Action to automatically build & deploy on push.

Page Structure & Content (must use latest → oldest ordering for experience)

Hero section

Name (Nikhil Ganpat Navghade) — job title line (e.g., “Senior Radar Algorithm Engineer | Radar R&D | FMCW & DSP Specialist”)

Short one-liner summary (2–3 sentences) derived from my resume/LinkedIn.

CTAs: Download Resume, Contact / Email, LinkedIn.

About / Summary

A short paragraph summarizing background, location (Munich), and career highlights.

Optional small personal note (hobbies / travel / languages).

Key Skills & Technologies

Bullet icons/tags listing radar signal processing, FMCW, DSP, MATLAB, MIMO, system design, FAE experience, etc. (derived from resume).

Experience (Timeline) — latest first

Chronological cards starting with most recent job (company, role, dates).

For each role: 3–5 bullet achievements (impact-focused), tech/tools used, noteworthy projects (link to repositories or case studies if available).

Include termination status note for current/most recent role only if I want it public — otherwise omit sensitive employment details unless I provide text.

Projects / Portfolio

Highlight 6–10 top projects with short description, role, tech stack, links to demos or repos, and images/screenshots.

Tag projects by theme (Radar R&D, Embedded, System Design, FAE demos).

Publications / Talks / Patents (if any)

List with links / PDF downloads.

Media / Videos / Presentations

Embedded YouTube links or downloadable slides.

Testimonials / References

Short quotes (if provided) with name & role.

Education & Certifications

Contact

Email, LinkedIn, phone (optional).

Simple contact form (POST to Formspree / mailto fallback).

Links to GitHub, LinkedIn, YouTube channel (theSuperCoupleProject) if I provide.

Footer

Minimal footer with copyright, repo link, and deployment badge.

Visual & UX Guidelines

Clean, modern, and professional design — minimalism + readable typography.

Use Tailwind or a clean CSS framework.

Color palette: neutral + one accent color (I can provide brand color or you choose).

Responsive across mobile, tablet, desktop.

Fast load: optimized images, lazy loading.

Accessible: semantic HTML, alt text, focus states, sufficient color contrast.

Include a downloadable resume button visible in hero & contact sections.

SEO & Social

Page title, meta description, canonical URL.

Open Graph tags with OG image (generate a simple OG image with name & title).

Structured data: Person schema (name, jobTitle, sameAs links).

GitHub Pages Deployment Requirements

Provide a GitHub Action workflow (or gh-pages script) to build and deploy automatically on main push.

Clear README.md with:

how to install dependencies

npm run dev, npm run build, npm run deploy

how to change content (preferably from JSON/Markdown file to avoid rebuilding code for content edits)

Use a simple content folder (/content) where resume text, experience entries, and project metadata are stored as markdown/JSON — allow easy updates.

Security & Privacy

Do NOT publish sensitive personal details without my explicit permission (e.g., exact home address). Use city + country (Munich, Germany) only unless I give explicit address.

Make contact form spam-resistant (honeypot or CAPTCHA, or use Formspree).

What I will provide (please ask for these explicitly if missing)

Resume PDF (latest)

LinkedIn URL

Profile picture (headshot)

Project docs / README links / GitHub repos

Any testimonials or reference quotes

Preferred email for display & contact form destination

Preferred color scheme / fonts (optional)

Any domain name if I have one (or help to set up username.github.io/repo)

Acceptance Criteria

Website runs locally (npm run dev) and builds (npm run build) successfully.

npm run deploy or GitHub Action deploys to GitHub Pages and site resolves at the configured URL.

Experience section ordered newest → oldest and matches resume content.

Resume PDF is downloadable and LinkedIn link is present.

Contact form works (or clear instructions to activate with Formspree).

README contains full deployment and update instructions.

Extra (optional) enhancements

Dark mode toggle.

PDF résumé generation from site data.

Multi-lingual support (English + German) if requested.

A lightweight analytics snippet (e.g., Plausible) — ask before adding.

Final note to the assistant / developer

Please start by asking me to upload my latest resume PDF and give my LinkedIn URL. Use content verbatim from those files where possible for accuracy. If anything is ambiguous in the documents (dates, role names, project ownership), highlight those items in a TODO file in the repo so I can confirm. Provide a first draft site within one milestone (demo link via GitHub Pages) and a short changelog describing what was added.