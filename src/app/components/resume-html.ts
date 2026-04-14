/**
 * Christopher Kenreigh Resume HTML
 * This file contains the HTML resume that opens in a new tab
 */

export const resumeHTML = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Christopher Kenreigh – Product Design Manager</title>
  <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;700&family=DM+Serif+Display&display=swap" rel="stylesheet" />
  <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined" rel="stylesheet" />
  <style>
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

    :root {
      --blue: #2563c7;
      --dark: #111111;
      --mid: #444444;
      --light: #666666;
      --rule: #dddddd;
      --bg: #ffffff;
      --sidebar-bg: #f7f8fa;
    }

    body {
      font-family: 'DM Sans', sans-serif;
      font-size: 10.5pt;
      color: var(--dark);
      background: #e8e8e8;
      display: flex;
      justify-content: center;
      align-items: flex-start;
      padding: 32px 16px;
      min-height: 100vh;
    }

    .page {
      background: var(--bg);
      width: 850px;
      max-width: 100%;
      box-shadow: 0 4px 40px rgba(0,0,0,0.18);
      display: grid;
      grid-template-rows: auto 1fr;
    }

    /* ── HEADER ── */
    header {
      padding: 28px 36px 18px;
      border-bottom: 2px solid var(--rule);
    }
    header h1 {
      font-family: 'DM Serif Display', serif;
      font-size: clamp(20pt, 5vw, 30pt);
      font-weight: 400;
      color: var(--dark);
      letter-spacing: -0.5px;
      line-height: 1.1;
    }
    header .title-line {
      font-size: clamp(9pt, 2.5vw, 11pt);
      font-weight: 700;
      color: var(--blue);
      margin: 3px 0 8px;
      letter-spacing: 0.2px;
    }
    header .contact {
      font-size: 9.5pt;
      color: var(--mid);
      display: flex;
      gap: 10px;
      flex-wrap: wrap;
      align-items: center;
    }
    header .contact a {
      color: var(--blue);
      text-decoration: none;
      font-weight: 500;
    }
    header .contact span { color: var(--rule); }

    /* ── BODY LAYOUT ── */
    .body {
      display: grid;
      grid-template-columns: 1fr 240px;
    }

    /* ── LEFT (Experience) ── */
    .main {
      padding: 24px 36px 32px;
      border-right: 1px solid var(--rule);
    }

    .section-title {
      font-family: 'DM Serif Display', serif;
      font-size: 14pt;
      font-weight: 400;
      color: var(--dark);
      border-bottom: 1.5px solid var(--dark);
      padding-bottom: 4px;
      margin-bottom: 14px;
    }

    .job { margin-bottom: 20px; }

    .job-title {
      font-size: 10.5pt;
      font-weight: 700;
      color: var(--dark);
    }
    .job-company {
      font-size: 10pt;
      font-weight: 500;
      color: var(--blue);
      text-decoration: none;
    }
    .job-company:hover { text-decoration: underline; }

    .job-meta {
      font-size: 8.5pt;
      color: var(--light);
      margin: 2px 0 6px;
      display: flex;
      align-items: center;
      gap: 6px;
      flex-wrap: wrap;
    }
    .job-meta .material-symbols-outlined {
      color: #00A000;
      font-size: 16px;
      vertical-align: middle;
    }

    .job ul {
      list-style: disc;
      padding-left: 16px;
    }
    .job ul li {
      font-size: 9.5pt;
      color: var(--mid);
      line-height: 1.5;
      margin-bottom: 3px;
    }

    /* ── RIGHT (Sidebar) ── */
    .sidebar {
      background: var(--sidebar-bg);
      padding: 24px 22px 32px;
    }

    .sidebar-section { margin-bottom: 22px; }

    .sidebar .section-title {
      font-size: 12pt;
      border-bottom-color: var(--mid);
    }

    .summary-quote {
      font-size: 9.5pt;
      font-style: italic;
      color: var(--mid);
      line-height: 1.6;
      margin-bottom: 10px;
    }

    .summary-bullets {
      list-style: disc;
      padding-left: 14px;
    }
    .summary-bullets li {
      font-size: 8.8pt;
      color: var(--mid);
      line-height: 1.55;
      margin-bottom: 3px;
    }

    .tag-list {
      display: flex;
      flex-wrap: wrap;
      gap: 5px;
      margin-top: 6px;
    }
    .tag {
      font-size: 8pt;
      font-weight: 500;
      color: var(--blue);
      background: rgba(37,99,199,0.08);
      border-radius: 3px;
      padding: 2px 7px;
    }

    .dot-list {
      list-style: disc;
      padding-left: 14px;
    }
    .dot-list li {
      font-size: 9pt;
      color: var(--mid);
      line-height: 1.6;
    }

    /* Education */
    .edu-degree {
      font-size: 9.5pt;
      font-weight: 700;
      color: var(--dark);
    }
    .edu-school {
      font-size: 9pt;
      color: var(--blue);
      font-weight: 500;
    }
    .edu-meta {
      font-size: 8.5pt;
      color: var(--light);
      margin-top: 4px;
      display: flex;
      align-items: center;
      gap: 5px;
      flex-wrap: wrap;
    }
    .edu-meta .material-symbols-outlined {
      color: #00A000;
      font-size: 15px;
      vertical-align: middle;
    }

    .share-link {
      display: block;
      text-align: right;
      font-size: 8.5pt;
      color: var(--blue);
      text-decoration: none;
      font-style: italic;
      margin-top: 16px;
    }
    .share-link:hover { text-decoration: underline; }

    /* ── MOBILE RESPONSIVE ── */
    @media (max-width: 680px) {
      body {
        padding: 0;
        background: var(--bg);
        align-items: stretch;
      }

      .page {
        width: 100%;
        box-shadow: none;
        border-radius: 0;
      }

      header {
        padding: 20px 18px 14px;
      }

      header h1 {
        font-size: 22pt;
      }

      header .title-line {
        font-size: 9pt;
      }

      header .contact {
        font-size: 9pt;
        gap: 6px;
        row-gap: 4px;
      }

      .body {
        grid-template-columns: 1fr;
        grid-template-rows: auto auto;
      }

      .main {
        padding: 18px 18px 24px;
        border-right: none;
        border-bottom: 1px solid var(--rule);
        order: 2;
      }

      .sidebar {
        padding: 18px 18px 20px;
        order: 1;
        border-bottom: 2px solid var(--rule);
      }

      .section-title {
        font-size: 13pt;
      }

      .sidebar .section-title {
        font-size: 11pt;
      }

      .job ul li {
        font-size: 9pt;
      }

      .job-meta {
        font-size: 8pt;
        gap: 4px;
      }

      .summary-quote {
        font-size: 9pt;
      }

      .tag {
        font-size: 7.5pt;
      }
    }

    @media (min-width: 681px) and (max-width: 900px) {
      body {
        padding: 16px 8px;
      }

      .page {
        width: 100%;
      }

      header {
        padding: 22px 24px 14px;
      }

      .main {
        padding: 20px 24px 28px;
      }

      .sidebar {
        padding: 20px 16px 28px;
      }

      .body {
        grid-template-columns: 1fr 200px;
      }
    }

    @media print {
      body { background: white; padding: 0; }
      .page { box-shadow: none; width: 100%; }
    }
  </style>
</head>
<body>
<div class="page">

  <!-- HEADER -->
  <header>
    <h1>Christopher Kenreigh</h1>
    <div class="title-line">Product Design Manager | B2B SaaS | Player-Coach Leadership | Design Systems | AI-Assisted Workflows</div>
    <div class="contact">
      <span style="color: #212121; font-weight:700">480-206-2145</span>
      <span>|</span>
      <a href="mailto:c.kenreigh@gmail.com" style="font-weight:800;">c.kenreigh@gmail.com</a>
      <span>|</span>
      <a href="https://www.linkedin.com/in/kenreigh/" target="_blank">LinkedIn</a>
      <span>|</span>
      <a href="https://www.uxapex.com/director" target="_blank">Portfolio</a>
    </div>
  </header>

  <!-- BODY -->
  <div class="body">

    <!-- MAIN EXPERIENCE -->
    <main class="main">
      <h2 class="section-title">Experience</h2>

      <div class="job">
        <div class="job-title">Product Design Manager (Principal)</div>
        <a class="job-company" href="https://www.plexusworldwide.com" target="_blank">Plexus Worldwide</a>
        <div class="job-meta">
          <span class="material-symbols-outlined">calendar_month</span>
          05/2024 – Present
          <span class="material-symbols-outlined">location_on</span>
          Phoenix, AZ | Office
        </div>
        <ul>
          <li>Player-coach managing 5 designers on a B2B SaaS platform for SMB entrepreneurs — running design reviews, unblocking work, giving direct feedback, and contributing hands-on to complex features</li>
          <li>Owned UX flows, wireframes, information architecture, and production-ready specs across member portals and checkout — A/B tested prototypes cut abandonment 43%</li>
          <li>Architected design system and visual language consolidating 6 tools; 60–90% org adoption; implemented design QA ensuring shipped product matches designed specs</li>
          <li>Embedded design into sprint planning and roadmap prioritization with product and engineering — shifted design from UI delivery to early problem definition</li>
          <li>Introduced LLM workflow using Claude, Cursor, Figma AI — increased sprint velocity 35%; built team culture of early validation and prototyping before full build</li>
          <li>Deployed AI persona platform in four months reversing –17% operating margin to +2% through behavioral design and targeted SMB engagement strategy</li>
        </ul>
      </div>

      <div class="job">
        <div class="job-title">Senior Product Designer</div>
        <a class="job-company" href="https://www.freeportmcmoran.com" target="_blank">Freeport-McMoRan</a>
        <div class="job-meta">
          <span class="material-symbols-outlined">calendar_month</span>
          08/2022 – 10/2023
          <span class="material-symbols-outlined">location_on</span>
          Phoenix, AZ | Hybrid
        </div>
        <ul>
          <li>Led end-to-end design for workflow-heavy industrial SaaS — UX flows, wireframes, and production-ready specs improving efficiency 30% across web and mobile</li>
          <li>Facilitated 10+ cross-functional workshops translating complex user needs into product requirements for engineering and product partners</li>
          <li>Built scalable MUI React design system across web, iOS, and Android — visual language documentation enabling engineering to build without friction</li>
          <li>Translated design rationale into business outcomes for C-suite, securing approval for 5 major product releases</li>
        </ul>
      </div>

      <div class="job">
        <div class="job-title">Senior Product Designer</div>
        <a class="job-company" href="https://www.opentechalliance.com" target="_blank">OpenTech Alliance</a>
        <div class="job-meta">
          <span class="material-symbols-outlined">calendar_month</span>
          05/2021 – 08/2022
          <span class="material-symbols-outlined">location_on</span>
          Phoenix, AZ | Hybrid
        </div>
        <ul>
          <li>Elevated design maturity org-wide — secured C-suite budget for 3 UX initiatives; moved design from reactive execution to strategic advisory function</li>
          <li>Redesigned SMB-facing Point of Sale kiosk UI with usability testing and conversion best practices — boosted task completion 75%</li>
          <li>Designed compliant data capture flows with robust information architecture — eliminated legal risk 100%</li>
          <li>Improved SMB fulfillment journeys 25% through data-driven UX optimizations and sprint collaboration</li>
        </ul>
      </div>

      <div class="job">
        <div class="job-title">UX Design Lead</div>
        <a class="job-company" href="https://www.siemens.com" target="_blank">Siemens</a>
        <div class="job-meta">
          <span class="material-symbols-outlined">calendar_month</span>
          07/2020 – 05/2021
          <span class="material-symbols-outlined">location_on</span>
          Phoenix, AZ | Remote
        </div>
        <ul>
          <li>Unified design systems and visual language across 4 simultaneous workflow-heavy product initiatives through cross-functional collaboration</li>
          <li>Produced production-ready design documentation reducing engineering rework 50% — clear interaction standards teams built against without friction</li>
          <li>Managed roadmap prioritization and stakeholder alignment securing executive approval for 2 high-impact design initiatives</li>
          <li>Designed complex UI layouts for industrial workflow applications including 3D and AutoCAD-integrated interfaces</li>
        </ul>
      </div>

      <div class="job">
        <div class="job-title">Senior UX Designer</div>
        <a class="job-company" href="https://www.glynlyon.com" target="_blank">Glynlyon Inc</a>
        <div class="job-meta">
          <span class="material-symbols-outlined">calendar_month</span>
          02/2014 – 04/2019
          <span class="material-symbols-outlined">location_on</span>
          Phoenix, AZ | Office
        </div>
        <ul>
          <li>Designed WCAG and ADA-compliant experiences across multi-platform products — applied information architecture and iOS/Android platform guidelines throughout</li>
          <li>Drove data-informed decisions through user research and usability testing — roadmapped UI features increasing ease of use 65%</li>
          <li>Communicated design rationale to engineering and product to ensure technical feasibility and build accuracy</li>
          <li>Led cross-functional Design Thinking workshops aligning teams on user needs and early problem definition</li>
        </ul>
      </div>
    </main>

    <!-- SIDEBAR -->
    <aside class="sidebar">

      <div class="sidebar-section">
        <h2 class="section-title">Summary</h2>
        <p class="summary-quote" style="color: #212121; font-weight:700">"Player-coach design leader — managing teams, owning systems, and shipping directly on high-priority features while embedding design into product strategy at the problem definition stage."</p>
        <ul class="summary-bullets">
          <li>12+ years B2B SaaS and SMB-facing product design</li>
          <li>Led 5-person design team as player-coach while contributing directly as designer on complex features</li>
          <li>Design system architect: 60–90% org adoption, visual language standards, design QA ownership</li>
          <li>Active Claude, Cursor, Figma AI user — LLM workflows driving early validation and faster sprint delivery</li>
          <li>Translates design decisions into business rationale for non-design stakeholders</li>
          <li>Embeds design in sprint planning, roadmap prioritization, and tradeoff decisions</li>
        </ul>
      </div>

      <div class="sidebar-section">
        <h2 class="section-title">Key Achievements</h2>
        <ul class="dot-list">
          <li>–17% → +2% operating margin via AI platform</li>
          <li>43% checkout abandonment reduction</li>
          <li>60–90% design system org adoption</li>
          <li>35% sprint velocity increase via LLM workflows</li>
          <li>10+ C-suite initiatives approved</li>
        </ul>
      </div>

      <div class="sidebar-section">
        <h2 class="section-title">Skills</h2>
        <div class="tag-list">
          <span class="tag">B2B SaaS</span>
          <span class="tag">Player-Coach</span>
          <span class="tag">Figma</span>
          <span class="tag">Design Systems</span>
          <span class="tag">Visual Language</span>
          <span class="tag">Design QA</span>
          <span class="tag">UX Flows</span>
          <span class="tag">Wireframes</span>
          <span class="tag">Info Architecture</span>
          <span class="tag">Production-Ready Specs</span>
          <span class="tag">Sprint Planning</span>
          <span class="tag">Roadmap Prioritization</span>
          <span class="tag">Early Validation</span>
          <span class="tag">A/B Testing</span>
          <span class="tag">SMB Product Design</span>
          <span class="tag">MUI React</span>
          <span class="tag">Agile / Scrum</span>
          <span class="tag">Career Development</span>
        </div>
      </div>

      <div class="sidebar-section">
        <h2 class="section-title">AI &amp; Tools</h2>
        <div class="tag-list">
          <span class="tag">Claude AI</span>
          <span class="tag">Cursor</span>
          <span class="tag">Figma AI</span>
          <span class="tag">LLM Workflows</span>
          <span class="tag">Agentic AI</span>
          <span class="tag">RAG Systems</span>
          <span class="tag">Multimodal AI</span>
        </div>
      </div>

      <div class="sidebar-section">
        <h2 class="section-title">Education</h2>
        <div class="edu-degree">Bachelor of Art</div>
        <div class="edu-school">The Art Institute of Phoenix</div>
        <div class="edu-meta">
          <span class="material-symbols-outlined">calendar_month</span>
          09/2002 – 09/2005
          <span class="material-symbols-outlined">location_on</span>
          Phoenix, AZ
        </div>
      </div>

    </aside>
  </div><!-- /body -->
</div><!-- /page -->
</body>
</html>`;

/**
 * Opens the resume HTML in a new browser tab using Blob URL
 */
export function openResumeInNewTab(): void {
  // Create a Blob from the HTML string
  const blob = new Blob([resumeHTML], { type: 'text/html' });
  
  // Generate a blob URL
  const blobURL = URL.createObjectURL(blob);
  
  // Open in new tab
  const newWindow = window.open(blobURL, '_blank');
  
  // Clean up the blob URL after a delay to ensure the page loads
  if (newWindow) {
    setTimeout(() => {
      URL.revokeObjectURL(blobURL);
    }, 1000);
  }
}
