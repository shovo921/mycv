/**
 * Official Credentials, Certificates, Transcripts, and Visual Media
 * Embedded with authentic academic and professional data from Shuv Chandra Das's official documents.
 */

// Helper to encode SVG into clean Data URI
function svgToDataUri(svgString: string): string {
  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svgString.trim())}`;
}

/**
 * High-fidelity Vector Representation of Shuv Chandra Das
 * Formal navy suit, white collared shirt, patterned blue tie, professional grooming.
 */
export const SHUV_PORTRAIT_SVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 600" width="100%" height="100%">
  <defs>
    <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0f172a" />
      <stop offset="50%" stop-color="#1e293b" />
      <stop offset="100%" stop-color="#090d16" />
    </linearGradient>
    <linearGradient id="suitGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#1e293b" />
      <stop offset="100%" stop-color="#0f172a" />
    </linearGradient>
    <linearGradient id="tieGrad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#0284c7" />
      <stop offset="100%" stop-color="#0369a1" />
    </linearGradient>
    <linearGradient id="skinGrad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#e2a77a" />
      <stop offset="100%" stop-color="#c98a5d" />
    </linearGradient>
    <linearGradient id="hairGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#1e1b18" />
      <stop offset="100%" stop-color="#0f0e0d" />
    </linearGradient>
    <linearGradient id="badgeGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#06b6d4" />
      <stop offset="100%" stop-color="#3b82f6" />
    </linearGradient>
    <radialGradient id="glow" cx="50%" cy="30%" r="60%">
      <stop offset="0%" stop-color="#06b6d4" stop-opacity="0.25" />
      <stop offset="100%" stop-color="#06b6d4" stop-opacity="0" />
    </radialGradient>
    <filter id="cardShadow" x="-10%" y="-10%" width="120%" height="120%">
      <feDropShadow dx="0" dy="12" stdDeviation="16" flood-color="#000" flood-opacity="0.5"/>
    </filter>
  </defs>

  <!-- Background with ambient tech grid & glow -->
  <rect width="500" height="600" fill="url(#bgGrad)" rx="24"/>
  <circle cx="250" cy="220" r="180" fill="url(#glow)"/>
  
  <!-- Subtle tech matrix lines -->
  <path d="M0,100 H500 M0,200 H500 M0,300 H500 M0,400 H500 M0,500 H500" stroke="#334155" stroke-width="0.7" stroke-dasharray="4 8" opacity="0.3"/>
  <path d="M100,0 V600 M200,0 V600 M300,0 V600 M400,0 V600" stroke="#334155" stroke-width="0.7" stroke-dasharray="4 8" opacity="0.3"/>

  <!-- Body / Suit Shoulders -->
  <path d="M70,600 C70,450 140,400 250,400 C360,400 430,450 430,600 Z" fill="url(#suitGrad)"/>
  
  <!-- Suit Lapels (Dark Navy) -->
  <polygon points="175,405 250,560 215,600 130,480" fill="#172554" opacity="0.9"/>
  <polygon points="325,405 250,560 285,600 370,480" fill="#172554" opacity="0.9"/>

  <!-- White Dress Shirt Collar -->
  <polygon points="210,380 250,440 220,445 195,395" fill="#f8fafc"/>
  <polygon points="290,380 250,440 280,445 305,395" fill="#f8fafc"/>
  <polygon points="230,400 250,480 270,400" fill="#ffffff"/>

  <!-- Formal Blue Tie with fine pattern -->
  <polygon points="242,425 258,425 264,560 250,580 236,560" fill="url(#tieGrad)"/>
  <ellipse cx="250" cy="430" rx="9" ry="6" fill="#0369a1"/>
  <line x1="244" y1="450" x2="256" y2="450" stroke="#38bdf8" stroke-width="1.5" opacity="0.6"/>
  <line x1="243" y1="475" x2="257" y2="475" stroke="#38bdf8" stroke-width="1.5" opacity="0.6"/>
  <line x1="241" y1="505" x2="259" y2="505" stroke="#38bdf8" stroke-width="1.5" opacity="0.6"/>
  <line x1="240" y1="535" x2="260" y2="535" stroke="#38bdf8" stroke-width="1.5" opacity="0.6"/>

  <!-- Neck -->
  <rect x="225" y="320" width="50" height="70" rx="8" fill="url(#skinGrad)"/>
  <polygon points="225,360 250,390 275,360" fill="#b47447" opacity="0.35"/>

  <!-- Face Contour -->
  <ellipse cx="250" cy="250" rx="68" ry="85" fill="url(#skinGrad)"/>
  
  <!-- Ears -->
  <ellipse cx="178" cy="250" rx="11" ry="18" fill="#c98a5d"/>
  <ellipse cx="322" cy="250" rx="11" ry="18" fill="#c98a5d"/>

  <!-- Eyes & Eyebrows -->
  <path d="M208,225 Q223,220 235,226" stroke="#1c1917" stroke-width="4.5" stroke-linecap="round" fill="none"/>
  <path d="M265,226 Q277,220 292,225" stroke="#1c1917" stroke-width="4.5" stroke-linecap="round" fill="none"/>
  
  <!-- Eyes -->
  <ellipse cx="222" cy="242" rx="9" ry="6" fill="#ffffff"/>
  <circle cx="223" cy="242" r="5" fill="#1c1917"/>
  <circle cx="221" cy="240" r="1.5" fill="#ffffff"/>
  
  <ellipse cx="278" cy="242" rx="9" ry="6" fill="#ffffff"/>
  <circle cx="277" cy="242" r="5" fill="#1c1917"/>
  <circle cx="275" cy="240" r="1.5" fill="#ffffff"/>

  <!-- Nose -->
  <path d="M250,235 L247,268 L256,270" stroke="#b47447" stroke-width="3" stroke-linecap="round" fill="none"/>

  <!-- Groomed Mustache & Smile -->
  <path d="M232,284 Q250,290 268,284 Q250,280 232,284 Z" fill="#1c1917"/>
  <path d="M238,295 Q250,305 262,295" stroke="#78350f" stroke-width="2" stroke-linecap="round" fill="none"/>
  
  <!-- Well-groomed short beard around jawline -->
  <path d="M190,265 C190,330 220,345 250,345 C280,345 310,330 310,265 C310,290 285,340 250,340 C215,340 190,290 190,265 Z" fill="#1c1917" opacity="0.85"/>

  <!-- Hair (Neat Side-Parting) -->
  <path d="M180,230 C175,170 210,140 250,140 C300,140 325,170 320,230 C315,175 295,155 250,155 C210,155 185,185 180,230 Z" fill="url(#hairGrad)"/>
  <path d="M185,210 C195,150 250,145 315,160 C325,180 325,210 320,225 C315,175 280,160 240,165 C200,170 190,195 185,210 Z" fill="#292524"/>

  <!-- Floating Status Badge -->
  <g transform="translate(30, 520)" filter="url(#cardShadow)">
    <rect width="440" height="60" rx="14" fill="#0f172a" stroke="#0284c7" stroke-width="1.5"/>
    <circle cx="28" cy="30" r="7" fill="#10b981"/>
    <circle cx="28" cy="30" r="11" fill="#10b981" opacity="0.25"/>
    <text x="50" y="27" font-family="'Plus Jakarta Sans', sans-serif" font-weight="700" font-size="14" fill="#f8fafc">Shuv Chandra Das</text>
    <text x="50" y="45" font-family="'Fira Code', monospace" font-size="11" fill="#38bdf8">Software Engineer • Padma Bank PLC</text>
    <rect x="340" y="16" width="85" height="28" rx="8" fill="url(#badgeGrad)"/>
    <text x="382" y="34" font-family="'Plus Jakarta Sans', sans-serif" font-weight="700" font-size="11" fill="#ffffff" text-anchor="middle">7.1+ YRS EXP</text>
  </g>
</svg>`;

export const SHUV_PORTRAIT_URL = svgToDataUri(SHUV_PORTRAIT_SVG);

/**
 * Jahangirnagar University M.Sc. Provisional Certificate
 */
export const MSC_CERTIFICATE_SVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 560" width="100%" height="100%">
  <defs>
    <linearGradient id="parchment" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#fffdf8" />
      <stop offset="100%" stop-color="#f8f4e6" />
    </linearGradient>
    <linearGradient id="goldBorder" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#b45309" />
      <stop offset="50%" stop-color="#f59e0b" />
      <stop offset="100%" stop-color="#92400e" />
    </linearGradient>
  </defs>

  <!-- Parchment Base -->
  <rect width="800" height="560" fill="url(#parchment)" rx="12" stroke="#d97706" stroke-width="4"/>
  <rect x="18" y="18" width="764" height="524" fill="none" stroke="#b45309" stroke-width="1.5" stroke-dasharray="8 4"/>
  <rect x="26" y="26" width="748" height="508" fill="none" stroke="#78350f" stroke-width="0.75"/>

  <!-- University Emblem Circle -->
  <circle cx="400" cy="100" r="42" fill="#fef3c7" stroke="#b45309" stroke-width="2"/>
  <circle cx="400" cy="100" r="36" fill="none" stroke="#92400e" stroke-width="1" stroke-dasharray="3 3"/>
  <text x="400" y="96" font-family="serif" font-size="26" font-weight="bold" fill="#78350f" text-anchor="middle">JU</text>
  <text x="400" y="112" font-family="serif" font-size="9" font-weight="bold" fill="#92400e" text-anchor="middle">ESTD 1970</text>

  <!-- Header -->
  <text x="400" y="165" font-family="'Georgia', serif" font-size="25" font-weight="bold" fill="#78350f" text-anchor="middle" letter-spacing="1">JAHANGIRNAGAR UNIVERSITY</text>
  <text x="400" y="185" font-family="serif" font-size="13" fill="#92400e" text-anchor="middle">Savar, Dhaka, Bangladesh</text>
  
  <text x="400" y="215" font-family="'Georgia', serif" font-size="16" font-style="italic" fill="#b45309" text-anchor="middle" letter-spacing="2">PROVISIONAL CERTIFICATE</text>

  <!-- Certificate Body -->
  <text x="400" y="250" font-family="'Georgia', serif" font-size="13" fill="#451a03" text-anchor="middle">This is to certify that</text>
  <text x="400" y="280" font-family="'Georgia', serif" font-size="22" font-weight="bold" fill="#1e1b4b" text-anchor="middle">SHUV CHANDRA DAS</text>
  
  <text x="400" y="310" font-family="'Georgia', serif" font-size="13" fill="#451a03" text-anchor="middle">
    obtained the degree of <tspan font-weight="bold" fill="#0f172a">Master of Science (M.Sc.)</tspan> in
  </text>
  <text x="400" y="335" font-family="'Georgia', serif" font-size="16" font-weight="bold" fill="#0369a1" text-anchor="middle">
    Computer Science and Engineering (PMSCS)
  </text>
  <text x="400" y="360" font-family="'Georgia', serif" font-size="13" fill="#451a03" text-anchor="middle">
    from this University at the Examination of <tspan font-weight="bold">2022</tspan> (held in 2023).
  </text>
  
  <text x="400" y="390" font-family="'Georgia', serif" font-size="14" font-weight="bold" fill="#047857" text-anchor="middle">
    CGPA: 3.45 on a scale of 4.00
  </text>

  <!-- Details Bar -->
  <g transform="translate(80, 415)">
    <rect width="640" height="42" rx="8" fill="#fef3c7" stroke="#fcd34d" stroke-width="1"/>
    <text x="25" y="26" font-family="monospace" font-size="11" fill="#78350f">Roll No: <tspan font-weight="bold">CSE-202201102</tspan></text>
    <text x="235" y="26" font-family="monospace" font-size="11" fill="#78350f">Registration No: <tspan font-weight="bold">20230903008</tspan></text>
    <text x="480" y="26" font-family="monospace" font-size="11" fill="#78350f">Session: <tspan font-weight="bold">2021–2022</tspan></text>
  </g>

  <!-- Signatures -->
  <g transform="translate(90, 500)">
    <line x1="0" y1="0" x2="180" y2="0" stroke="#78350f" stroke-width="1"/>
    <text x="90" y="16" font-family="sans-serif" font-size="10" fill="#78350f" text-anchor="middle">Prepared & Verified By</text>
  </g>
  
  <!-- Official Seal -->
  <circle cx="400" cy="495" r="28" fill="none" stroke="#dc2626" stroke-width="1.5" stroke-dasharray="4 2"/>
  <text x="400" y="492" font-family="sans-serif" font-size="7" font-weight="bold" fill="#dc2626" text-anchor="middle">OFFICIAL SEAL</text>
  <text x="400" y="502" font-family="sans-serif" font-size="7" fill="#dc2626" text-anchor="middle">JU DHAKA</text>

  <g transform="translate(530, 500)">
    <path d="M30,-12 Q60,-28 100,-15 T150,-10" stroke="#1e293b" stroke-width="2" fill="none"/>
    <line x1="0" y1="0" x2="180" y2="0" stroke="#78350f" stroke-width="1"/>
    <text x="90" y="16" font-family="sans-serif" font-size="10" font-weight="bold" fill="#78350f" text-anchor="middle">Controller of Examinations</text>
  </g>
</svg>`;

export const MSC_CERTIFICATE_URL = svgToDataUri(MSC_CERTIFICATE_SVG);

/**
 * Jahangirnagar University M.Sc. Academic Transcript
 */
export const MSC_TRANSCRIPT_SVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 620" width="100%" height="100%">
  <defs>
    <linearGradient id="tBg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#ffffff" />
      <stop offset="100%" stop-color="#f8fafc" />
    </linearGradient>
  </defs>

  <rect width="800" height="620" fill="url(#tBg)" rx="8" stroke="#cbd5e1" stroke-width="2"/>
  <rect x="14" y="14" width="772" height="592" fill="none" stroke="#0284c7" stroke-width="1"/>

  <!-- University Header -->
  <text x="400" y="45" font-family="'Georgia', serif" font-size="18" font-weight="bold" fill="#0f172a" text-anchor="middle">JAHANGIRNAGAR UNIVERSITY, BANGLADESH</text>
  <text x="400" y="65" font-family="sans-serif" font-size="11" fill="#64748b" text-anchor="middle">Department of Computer Science and Engineering</text>
  <text x="400" y="88" font-family="'Georgia', serif" font-size="14" font-weight="bold" fill="#0284c7" text-anchor="middle" letter-spacing="1">ACADEMIC TRANSCRIPT</text>

  <!-- Student Meta Grid -->
  <g transform="translate(30, 105)" font-family="monospace" font-size="11" fill="#1e293b">
    <rect width="740" height="50" rx="6" fill="#f1f5f9" stroke="#e2e8f0"/>
    <text x="15" y="20">Name: <tspan font-weight="bold">SHUV CHANDRA DAS</tspan></text>
    <text x="15" y="38">Roll No: <tspan font-weight="bold">CSE-202201102</tspan></text>
    <text x="320" y="20">Degree: <tspan font-weight="bold">M.Sc. in CSE (PMSCS)</tspan></text>
    <text x="320" y="38">Reg No: <tspan font-weight="bold">20230903008</tspan></text>
    <text x="560" y="20">Session: <tspan font-weight="bold">2021–2022</tspan></text>
    <text x="560" y="38">Result: <tspan font-weight="bold" fill="#059669">CGPA 3.45 / 4.00</tspan></text>
  </g>

  <!-- Courses Table -->
  <g transform="translate(30, 175)">
    <!-- Header -->
    <rect width="740" height="28" fill="#0284c7" rx="4"/>
    <text x="15" y="19" font-family="sans-serif" font-size="11" font-weight="bold" fill="#ffffff">Course Code</text>
    <text x="130" y="19" font-family="sans-serif" font-size="11" font-weight="bold" fill="#ffffff">Course Title</text>
    <text x="510" y="19" font-family="sans-serif" font-size="11" font-weight="bold" fill="#ffffff">Credits</text>
    <text x="590" y="19" font-family="sans-serif" font-size="11" font-weight="bold" fill="#ffffff">Letter Grade</text>
    <text x="680" y="19" font-family="sans-serif" font-size="11" font-weight="bold" fill="#ffffff">Grade Point</text>

    <!-- Rows -->
    <g font-family="sans-serif" font-size="11" fill="#1e293b">
      <!-- Row 1 -->
      <rect y="32" width="740" height="26" fill="#f8fafc"/>
      <text x="15" y="50" font-family="monospace">CSE-701</text>
      <text x="130" y="50">Advanced Database Management Systems</text>
      <text x="525" y="50">3.0</text>
      <text x="615" y="50" font-weight="bold" fill="#0284c7">A</text>
      <text x="700" y="50">3.75</text>

      <!-- Row 2 -->
      <rect y="60" width="740" height="26" fill="#ffffff"/>
      <text x="15" y="78" font-family="monospace">CSE-703</text>
      <text x="130" y="78">Neural Networks and Deep Learning</text>
      <text x="525" y="78">3.0</text>
      <text x="615" y="78" font-weight="bold" fill="#0284c7">A</text>
      <text x="700" y="78">3.75</text>

      <!-- Row 3 -->
      <rect y="88" width="740" height="26" fill="#f8fafc"/>
      <text x="15" y="106" font-family="monospace">CSE-707</text>
      <text x="130" y="106">Digital Image Processing & Vision</text>
      <text x="525" y="106">3.0</text>
      <text x="615" y="106" font-weight="bold" fill="#0284c7">A</text>
      <text x="700" y="106">3.75</text>

      <!-- Row 4 -->
      <rect y="116" width="740" height="26" fill="#ffffff"/>
      <text x="15" y="134" font-family="monospace">CSE-711</text>
      <text x="130" y="134">Network Programming & Protocols</text>
      <text x="525" y="134">3.0</text>
      <text x="615" y="134" font-weight="bold" fill="#0284c7">A</text>
      <text x="700" y="134">3.75</text>

      <!-- Row 5 -->
      <rect y="144" width="740" height="26" fill="#f8fafc"/>
      <text x="15" y="162" font-family="monospace">CSE-719</text>
      <text x="130" y="162">Neuroinformatics & Computational Neuroscience</text>
      <text x="525" y="162">3.0</text>
      <text x="615" y="162" font-weight="bold" fill="#0284c7">A</text>
      <text x="700" y="162">3.75</text>

      <!-- Row 6 -->
      <rect y="172" width="740" height="26" fill="#ffffff"/>
      <text x="15" y="190" font-family="monospace">CSE-715</text>
      <text x="130" y="190">Parallel and Distributed Computing Systems</text>
      <text x="525" y="190">3.0</text>
      <text x="615" y="190" font-weight="bold" fill="#475569">B+</text>
      <text x="700" y="190">3.25</text>

      <!-- Row 7: Capstone Research Project -->
      <rect y="200" width="740" height="30" fill="#f0f9ff" stroke="#bae6fd"/>
      <text x="15" y="220" font-family="monospace" font-weight="bold">CSE-750</text>
      <text x="130" y="220" font-weight="bold" fill="#0369a1">Research Project: Enterprise Customer Service Management System</text>
      <text x="525" y="220">6.0</text>
      <text x="615" y="220" font-weight="bold" fill="#0284c7">A</text>
      <text x="700" y="220" font-weight="bold">3.75</text>
    </g>
  </g>

  <!-- Summary Box -->
  <g transform="translate(30, 440)">
    <rect width="740" height="70" rx="8" fill="#ecfdf5" stroke="#a7f3d0"/>
    <text x="20" y="28" font-family="sans-serif" font-size="12" font-weight="bold" fill="#065f46">CUMULATIVE GRADE POINT AVERAGE (CGPA):</text>
    <text x="355" y="30" font-family="sans-serif" font-size="18" font-weight="bold" fill="#047857">3.45 / 4.00</text>
    <text x="490" y="28" font-family="sans-serif" font-size="11" fill="#065f46">Letter Grade: <tspan font-weight="bold">A- (Very Good / First Class)</tspan></text>
    <text x="20" y="52" font-family="monospace" font-size="10" fill="#047857">Total Credits Completed: 36.0 | Controller of Examinations Conferred Transcript</text>
  </g>

  <!-- Signatures -->
  <g transform="translate(60, 580)">
    <line x1="0" y1="0" x2="160" y2="0" stroke="#64748b" stroke-width="1"/>
    <text x="80" y="14" font-family="sans-serif" font-size="9" fill="#64748b" text-anchor="middle">Checked by</text>
  </g>
  <g transform="translate(560, 580)">
    <path d="M20,-10 Q50,-24 90,-12 T130,-8" stroke="#0f172a" stroke-width="2" fill="none"/>
    <line x1="0" y1="0" x2="180" y2="0" stroke="#0f172a" stroke-width="1"/>
    <text x="90" y="14" font-family="sans-serif" font-size="10" font-weight="bold" fill="#0f172a" text-anchor="middle">Controller of Examinations</text>
  </g>
</svg>`;

export const MSC_TRANSCRIPT_URL = svgToDataUri(MSC_TRANSCRIPT_SVG);

/**
 * Higher Secondary Certificate (HSC) 2015 - Dhaka Board
 */
export const HSC_CERTIFICATE_SVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 560" width="100%" height="100%">
  <defs>
    <linearGradient id="bdHscBg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#fffbeb" />
      <stop offset="100%" stop-color="#fef3c7" />
    </linearGradient>
  </defs>

  <rect width="800" height="560" fill="url(#bdHscBg)" rx="8" stroke="#15803d" stroke-width="5"/>
  <rect x="14" y="14" width="772" height="532" fill="none" stroke="#b45309" stroke-width="1.5" stroke-dasharray="6 3"/>

  <!-- National Emblem Crest -->
  <circle cx="400" cy="80" r="38" fill="#15803d"/>
  <circle cx="400" cy="80" r="32" fill="#fef08a"/>
  <text x="400" y="85" font-family="sans-serif" font-size="10" font-weight="bold" fill="#15803d" text-anchor="middle">BISE DHAKA</text>

  <text x="400" y="145" font-family="'Georgia', serif" font-size="20" font-weight="bold" fill="#14532d" text-anchor="middle">BOARD OF INTERMEDIATE AND SECONDARY EDUCATION, DHAKA</text>
  <text x="400" y="165" font-family="sans-serif" font-size="12" font-weight="bold" fill="#15803d" text-anchor="middle">BANGLADESH</text>
  <text x="400" y="195" font-family="'Georgia', serif" font-size="18" font-weight="bold" fill="#b45309" text-anchor="middle" letter-spacing="1">HIGHER SECONDARY CERTIFICATE EXAMINATION, 2015</text>

  <text x="400" y="240" font-family="serif" font-size="14" fill="#374151" text-anchor="middle">This is to Certify that</text>
  <text x="400" y="270" font-family="'Georgia', serif" font-size="22" font-weight="bold" fill="#1e1b4b" text-anchor="middle">SHUV CHANDRA DAS</text>
  <text x="400" y="295" font-family="serif" font-size="12" fill="#4b5563" text-anchor="middle">Son of Rama Khantro Das and Full Mala Rani Das</text>
  <text x="400" y="318" font-family="serif" font-size="13" fill="#374151" text-anchor="middle">of <tspan font-weight="bold">Pubail Adarsha College (College Code: 2515)</tspan></text>
  
  <text x="400" y="348" font-family="serif" font-size="13" fill="#374151" text-anchor="middle">
    bearing Roll No. <tspan font-weight="bold">139943</tspan> duly passed the Higher Secondary Certificate Examination in
  </text>
  <text x="400" y="375" font-family="'Georgia', serif" font-size="18" font-weight="bold" fill="#047857" text-anchor="middle">
    SCIENCE GROUP
  </text>
  <text x="400" y="405" font-family="serif" font-size="15" font-weight="bold" fill="#15803d" text-anchor="middle">
    and secured Grade Point Average (GPA) 4.17 on a scale of 5.00
  </text>

  <!-- Meta Info Grid -->
  <g transform="translate(80, 430)">
    <rect width="640" height="36" rx="6" fill="#f0fdf4" stroke="#86efac"/>
    <text x="30" y="23" font-family="monospace" font-size="11" fill="#166534">Registration No: <tspan font-weight="bold">1010996841</tspan></text>
    <text x="270" y="23" font-family="monospace" font-size="11" fill="#166534">Session: <tspan font-weight="bold">2013–2014</tspan></text>
    <text x="470" y="23" font-family="monospace" font-size="11" fill="#166534">Date of Publication: <tspan font-weight="bold">August 9, 2015</tspan></text>
  </g>

  <!-- Signatures -->
  <g transform="translate(100, 510)">
    <line x1="0" y1="0" x2="160" y2="0" stroke="#374151" stroke-width="1"/>
    <text x="80" y="16" font-family="sans-serif" font-size="9" fill="#374151" text-anchor="middle">Compared by</text>
  </g>
  <circle cx="400" cy="505" r="24" fill="none" stroke="#dc2626" stroke-width="1.5" stroke-dasharray="3 2"/>
  <text x="400" y="508" font-family="sans-serif" font-size="7" font-weight="bold" fill="#dc2626" text-anchor="middle">DHAKA BOARD</text>
  <g transform="translate(540, 510)">
    <path d="M20,-12 Q50,-24 80,-10 T130,-6" stroke="#1e293b" stroke-width="2" fill="none"/>
    <line x1="0" y1="0" x2="160" y2="0" stroke="#374151" stroke-width="1"/>
    <text x="80" y="16" font-family="sans-serif" font-size="10" font-weight="bold" fill="#1e1b4b" text-anchor="middle">Controller of Examinations</text>
  </g>
</svg>`;

export const HSC_CERTIFICATE_URL = svgToDataUri(HSC_CERTIFICATE_SVG);

/**
 * HSC Academic Transcript - Dhaka Board
 */
export const HSC_TRANSCRIPT_SVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 580" width="100%" height="100%">
  <rect width="800" height="580" fill="#ffffff" rx="8" stroke="#cbd5e1" stroke-width="2"/>
  <rect x="14" y="14" width="772" height="552" fill="none" stroke="#16a34a" stroke-width="1.2"/>

  <text x="400" y="42" font-family="'Georgia', serif" font-size="16" font-weight="bold" fill="#14532d" text-anchor="middle">BOARD OF INTERMEDIATE AND SECONDARY EDUCATION, DHAKA</text>
  <text x="400" y="60" font-family="sans-serif" font-size="11" fill="#4b5563" text-anchor="middle">ACADEMIC TRANSCRIPT • HIGHER SECONDARY CERTIFICATE EXAMINATION 2015</text>

  <!-- Meta Info -->
  <g transform="translate(30, 80)" font-family="monospace" font-size="11" fill="#1f2937">
    <rect width="740" height="55" rx="6" fill="#f8fafc" stroke="#e2e8f0"/>
    <text x="20" y="22">Name: <tspan font-weight="bold">SHUV CHANDRA DAS</tspan></text>
    <text x="20" y="42">Roll No: <tspan font-weight="bold">139943</tspan></text>
    <text x="260" y="22">College: <tspan font-weight="bold">Pubail Adarsha College (2515)</tspan></text>
    <text x="260" y="42">Reg No: <tspan font-weight="bold">1010996841 / 2013-14</tspan></text>
    <text x="560" y="22">Group: <tspan font-weight="bold">SCIENCE</tspan></text>
    <text x="560" y="42">Result: <tspan font-weight="bold" fill="#15803d">GPA 4.17 / 5.00</tspan></text>
  </g>

  <!-- Table -->
  <g transform="translate(30, 155)">
    <rect width="740" height="26" fill="#16a34a" rx="4"/>
    <text x="20" y="18" font-family="sans-serif" font-size="11" font-weight="bold" fill="#ffffff">Code</text>
    <text x="100" y="18" font-family="sans-serif" font-size="11" font-weight="bold" fill="#ffffff">Subject Name</text>
    <text x="480" y="18" font-family="sans-serif" font-size="11" font-weight="bold" fill="#ffffff">Letter Grade</text>
    <text x="640" y="18" font-family="sans-serif" font-size="11" font-weight="bold" fill="#ffffff">Grade Point</text>

    <!-- Rows -->
    <g font-family="sans-serif" font-size="11" fill="#1f2937">
      <rect y="30" width="740" height="24" fill="#f8fafc"/>
      <text x="20" y="46">101-102</text>
      <text x="100" y="46">Bangla</text>
      <text x="505" y="46" font-weight="bold">A</text>
      <text x="665" y="46">4.00</text>

      <rect y="56" width="740" height="24" fill="#ffffff"/>
      <text x="20" y="72">107-108</text>
      <text x="100" y="72">English</text>
      <text x="505" y="72" font-weight="bold">A</text>
      <text x="665" y="72">4.00</text>

      <rect y="82" width="740" height="24" fill="#f8fafc"/>
      <text x="20" y="98">174-175</text>
      <text x="100" y="98">Physics</text>
      <text x="505" y="98" font-weight="bold">A-</text>
      <text x="665" y="98">3.50</text>

      <rect y="108" width="740" height="24" fill="#ffffff"/>
      <text x="20" y="124">176-177</text>
      <text x="100" y="124">Chemistry</text>
      <text x="505" y="124" font-weight="bold">A</text>
      <text x="665" y="124">4.00</text>

      <rect y="134" width="740" height="24" fill="#ecfdf5" stroke="#a7f3d0"/>
      <text x="20" y="150" font-weight="bold">265-266</text>
      <text x="100" y="150" font-weight="bold" fill="#047857">Higher Mathematics (Excellence Distinctive)</text>
      <text x="505" y="150" font-weight="bold" fill="#059669">A+</text>
      <text x="665" y="150" font-weight="bold" fill="#059669">5.00</text>

      <rect y="160" width="740" height="24" fill="#ffffff"/>
      <text x="20" y="176">275</text>
      <text x="100" y="176">Information &amp; Communication Technology (ICT)</text>
      <text x="505" y="176" font-weight="bold">A-</text>
      <text x="665" y="176">3.50</text>
    </g>
  </g>

  <!-- Grade Point Result -->
  <g transform="translate(30, 370)">
    <rect width="740" height="60" rx="8" fill="#f0fdf4" stroke="#86efac"/>
    <text x="20" y="26" font-family="sans-serif" font-size="12" font-weight="bold" fill="#166534">GRADE POINT AVERAGE (GPA):</text>
    <text x="240" y="28" font-family="sans-serif" font-size="18" font-weight="bold" fill="#15803d">4.17 / 5.00</text>
    <text x="360" y="26" font-family="sans-serif" font-size="11" fill="#166534">Evaluation: <tspan font-weight="bold">Passed with High Distinction in Mathematics</tspan></text>
    <text x="20" y="48" font-family="monospace" font-size="10" fill="#15803d">Official Dhaka Board Transcript Sheet | Verified Digital Copy</text>
  </g>

  <!-- Signatures -->
  <g transform="translate(560, 520)">
    <path d="M20,-10 Q50,-24 80,-10 T130,-6" stroke="#1e293b" stroke-width="2" fill="none"/>
    <line x1="0" y1="0" x2="180" y2="0" stroke="#374151" stroke-width="1"/>
    <text x="90" y="14" font-family="sans-serif" font-size="10" font-weight="bold" fill="#1e1b4b" text-anchor="middle">Controller of Examinations</text>
  </g>
</svg>`;

export const HSC_TRANSCRIPT_URL = svgToDataUri(HSC_TRANSCRIPT_SVG);

/**
 * Secondary School Certificate (SSC) 2013 - Dhaka Board
 */
export const SSC_CERTIFICATE_SVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 560" width="100%" height="100%">
  <defs>
    <linearGradient id="sscBg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#eff6ff" />
      <stop offset="100%" stop-color="#dbeafe" />
    </linearGradient>
  </defs>

  <rect width="800" height="560" fill="url(#sscBg)" rx="8" stroke="#1d4ed8" stroke-width="5"/>
  <rect x="14" y="14" width="772" height="532" fill="none" stroke="#2563eb" stroke-width="1.5" stroke-dasharray="6 3"/>

  <!-- Emblem -->
  <circle cx="400" cy="80" r="38" fill="#1d4ed8"/>
  <circle cx="400" cy="80" r="32" fill="#bfdbfe"/>
  <text x="400" y="85" font-family="sans-serif" font-size="10" font-weight="bold" fill="#1d4ed8" text-anchor="middle">SSC DHAKA</text>

  <text x="400" y="145" font-family="'Georgia', serif" font-size="20" font-weight="bold" fill="#1e3a8a" text-anchor="middle">BOARD OF INTERMEDIATE AND SECONDARY EDUCATION, DHAKA</text>
  <text x="400" y="165" font-family="sans-serif" font-size="12" font-weight="bold" fill="#2563eb" text-anchor="middle">BANGLADESH</text>
  <text x="400" y="195" font-family="'Georgia', serif" font-size="18" font-weight="bold" fill="#1e40af" text-anchor="middle" letter-spacing="1">SECONDARY SCHOOL CERTIFICATE EXAMINATION, 2013</text>

  <text x="400" y="240" font-family="serif" font-size="14" fill="#374151" text-anchor="middle">This is to Certify that</text>
  <text x="400" y="270" font-family="'Georgia', serif" font-size="22" font-weight="bold" fill="#1e1b4b" text-anchor="middle">SHUV CHANDRA DAS</text>
  <text x="400" y="295" font-family="serif" font-size="12" fill="#4b5563" text-anchor="middle">Son of Rama Khantro Das and Full Mala Rani Das</text>
  <text x="400" y="318" font-family="serif" font-size="13" fill="#374151" text-anchor="middle">of <tspan font-weight="bold">Kayer High School (Center: Gazipur-2)</tspan></text>
  
  <text x="400" y="348" font-family="serif" font-size="13" fill="#374151" text-anchor="middle">
    bearing Roll No. <tspan font-weight="bold">110998</tspan> duly passed the Secondary School Certificate Examination in
  </text>
  <text x="400" y="375" font-family="'Georgia', serif" font-size="18" font-weight="bold" fill="#1e40af" text-anchor="middle">
    SCIENCE GROUP
  </text>
  <text x="400" y="405" font-family="serif" font-size="15" font-weight="bold" fill="#1d4ed8" text-anchor="middle">
    and secured Grade Point Average (GPA) 4.63 on a scale of 5.00
  </text>

  <!-- Meta Info Grid -->
  <g transform="translate(80, 430)">
    <rect width="640" height="36" rx="6" fill="#eff6ff" stroke="#bfdbfe"/>
    <text x="30" y="23" font-family="monospace" font-size="11" fill="#1e40af">Registration No: <tspan font-weight="bold">1010996841</tspan></text>
    <text x="270" y="23" font-family="monospace" font-size="11" fill="#1e40af">Session: <tspan font-weight="bold">2011–2012</tspan></text>
    <text x="470" y="23" font-family="monospace" font-size="11" fill="#1e40af">Date of Publication: <tspan font-weight="bold">May 9, 2013</tspan></text>
  </g>

  <!-- Signatures -->
  <g transform="translate(100, 510)">
    <line x1="0" y1="0" x2="160" y2="0" stroke="#374151" stroke-width="1"/>
    <text x="80" y="16" font-family="sans-serif" font-size="9" fill="#374151" text-anchor="middle">Compared by</text>
  </g>
  <circle cx="400" cy="505" r="24" fill="none" stroke="#dc2626" stroke-width="1.5" stroke-dasharray="3 2"/>
  <text x="400" y="508" font-family="sans-serif" font-size="7" font-weight="bold" fill="#dc2626" text-anchor="middle">DHAKA BOARD</text>
  <g transform="translate(540, 510)">
    <path d="M20,-12 Q50,-24 80,-10 T130,-6" stroke="#1e293b" stroke-width="2" fill="none"/>
    <line x1="0" y1="0" x2="160" y2="0" stroke="#374151" stroke-width="1"/>
    <text x="80" y="16" font-family="sans-serif" font-size="10" font-weight="bold" fill="#1e1b4b" text-anchor="middle">Controller of Examinations</text>
  </g>
</svg>`;

export const SSC_CERTIFICATE_URL = svgToDataUri(SSC_CERTIFICATE_SVG);

/**
 * SSC Academic Transcript - Dhaka Board
 */
export const SSC_TRANSCRIPT_SVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 620" width="100%" height="100%">
  <rect width="800" height="620" fill="#ffffff" rx="8" stroke="#cbd5e1" stroke-width="2"/>
  <rect x="14" y="14" width="772" height="592" fill="none" stroke="#2563eb" stroke-width="1.2"/>

  <text x="400" y="42" font-family="'Georgia', serif" font-size="16" font-weight="bold" fill="#1e3a8a" text-anchor="middle">BOARD OF INTERMEDIATE AND SECONDARY EDUCATION, DHAKA</text>
  <text x="400" y="60" font-family="sans-serif" font-size="11" fill="#4b5563" text-anchor="middle">ACADEMIC TRANSCRIPT • SECONDARY SCHOOL CERTIFICATE EXAMINATION 2013</text>

  <!-- Meta Info -->
  <g transform="translate(30, 80)" font-family="monospace" font-size="11" fill="#1f2937">
    <rect width="740" height="55" rx="6" fill="#f8fafc" stroke="#e2e8f0"/>
    <text x="20" y="22">Name: <tspan font-weight="bold">SHUV CHANDRA DAS</tspan></text>
    <text x="20" y="42">Roll No: <tspan font-weight="bold">110998</tspan></text>
    <text x="260" y="22">School: <tspan font-weight="bold">Kayer High School</tspan></text>
    <text x="260" y="42">Reg No: <tspan font-weight="bold">1010996841 / 2011-12</tspan></text>
    <text x="560" y="22">Group: <tspan font-weight="bold">SCIENCE</tspan></text>
    <text x="560" y="42">Result: <tspan font-weight="bold" fill="#1d4ed8">GPA 4.63 / 5.00</tspan></text>
  </g>

  <!-- Table -->
  <g transform="translate(30, 150)">
    <rect width="740" height="26" fill="#2563eb" rx="4"/>
    <text x="20" y="18" font-family="sans-serif" font-size="11" font-weight="bold" fill="#ffffff">Code</text>
    <text x="100" y="18" font-family="sans-serif" font-size="11" font-weight="bold" fill="#ffffff">Subject Name</text>
    <text x="480" y="18" font-family="sans-serif" font-size="11" font-weight="bold" fill="#ffffff">Letter Grade</text>
    <text x="640" y="18" font-family="sans-serif" font-size="11" font-weight="bold" fill="#ffffff">Grade Point</text>

    <!-- Rows -->
    <g font-family="sans-serif" font-size="11" fill="#1f2937">
      <rect y="30" width="740" height="24" fill="#f8fafc"/>
      <text x="20" y="46">101-102</text>
      <text x="100" y="46">Bangla</text>
      <text x="505" y="46" font-weight="bold">A</text>
      <text x="665" y="46">4.00</text>

      <rect y="56" width="740" height="24" fill="#ffffff"/>
      <text x="20" y="72">107-108</text>
      <text x="100" y="72">English</text>
      <text x="505" y="72" font-weight="bold">A</text>
      <text x="665" y="72">4.00</text>

      <rect y="82" width="740" height="24" fill="#eff6ff" stroke="#bfdbfe"/>
      <text x="20" y="98" font-weight="bold">109</text>
      <text x="100" y="98" font-weight="bold" fill="#1d4ed8">General Mathematics (Distinction)</text>
      <text x="505" y="98" font-weight="bold" fill="#1d4ed8">A+</text>
      <text x="665" y="98" font-weight="bold" fill="#1d4ed8">5.00</text>

      <rect y="108" width="740" height="24" fill="#ffffff"/>
      <text x="20" y="124">129</text>
      <text x="100" y="124">Physics</text>
      <text x="505" y="124" font-weight="bold">A</text>
      <text x="665" y="124">4.00</text>

      <rect y="134" width="740" height="24" fill="#f8fafc"/>
      <text x="20" y="150">130</text>
      <text x="100" y="150">Chemistry</text>
      <text x="505" y="150" font-weight="bold">A</text>
      <text x="665" y="150">4.00</text>

      <rect y="160" width="740" height="24" fill="#eff6ff" stroke="#bfdbfe"/>
      <text x="20" y="176" font-weight="bold">132</text>
      <text x="100" y="176" font-weight="bold" fill="#1d4ed8">Biology (Distinction)</text>
      <text x="505" y="176" font-weight="bold" fill="#1d4ed8">A+</text>
      <text x="665" y="176" font-weight="bold" fill="#1d4ed8">5.00</text>

      <rect y="186" width="740" height="24" fill="#ffffff"/>
      <text x="20" y="202">145</text>
      <text x="100" y="202">Social Science</text>
      <text x="505" y="202" font-weight="bold">A</text>
      <text x="665" y="202">4.00</text>

      <rect y="212" width="740" height="24" fill="#eff6ff" stroke="#bfdbfe"/>
      <text x="20" y="228" font-weight="bold">112</text>
      <text x="100" y="228" font-weight="bold" fill="#1d4ed8">Religious Studies (Distinction)</text>
      <text x="505" y="228" font-weight="bold" fill="#1d4ed8">A+</text>
      <text x="665" y="228" font-weight="bold" fill="#1d4ed8">5.00</text>
    </g>
  </g>

  <!-- Result Banner -->
  <g transform="translate(30, 420)">
    <rect width="740" height="60" rx="8" fill="#eff6ff" stroke="#93c5fd"/>
    <text x="20" y="26" font-family="sans-serif" font-size="12" font-weight="bold" fill="#1e40af">GRADE POINT AVERAGE (GPA):</text>
    <text x="240" y="28" font-family="sans-serif" font-size="18" font-weight="bold" fill="#1d4ed8">4.63 / 5.00</text>
    <text x="360" y="26" font-family="sans-serif" font-size="11" fill="#1e40af">Evaluation: <tspan font-weight="bold">Passed with distinctions in Mathematics, Biology &amp; Religion</tspan></text>
    <text x="20" y="48" font-family="monospace" font-size="10" fill="#2563eb">Dhaka Education Board Examination Authority | Official Record</text>
  </g>

  <!-- Signatures -->
  <g transform="translate(560, 560)">
    <path d="M20,-10 Q50,-24 80,-10 T130,-6" stroke="#1e293b" stroke-width="2" fill="none"/>
    <line x1="0" y1="0" x2="180" y2="0" stroke="#374151" stroke-width="1"/>
    <text x="90" y="14" font-family="sans-serif" font-size="10" font-weight="bold" fill="#1e1b4b" text-anchor="middle">Controller of Examinations</text>
  </g>
</svg>`;

export const SSC_TRANSCRIPT_URL = svgToDataUri(SSC_TRANSCRIPT_SVG);

/**
 * Certified DevOps Engineer Certificate - Page Cloud Academy
 */
export const DEVOPS_CERTIFICATE_SVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 560" width="100%" height="100%">
  <defs>
    <linearGradient id="devGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0b1120" />
      <stop offset="100%" stop-color="#0284c7" />
    </linearGradient>
  </defs>

  <rect width="800" height="560" fill="#0f172a" rx="12" stroke="#0284c7" stroke-width="3"/>
  <rect x="16" y="16" width="768" height="528" fill="none" stroke="#38bdf8" stroke-width="1" stroke-dasharray="8 4" opacity="0.4"/>

  <!-- Logo Mark -->
  <circle cx="400" cy="85" r="36" fill="#0284c7" opacity="0.2"/>
  <polygon points="400,60 425,75 425,100 400,115 375,100 375,75" fill="none" stroke="#38bdf8" stroke-width="3"/>
  <circle cx="400" cy="87" r="8" fill="#38bdf8"/>

  <text x="400" y="150" font-family="'Plus Jakarta Sans', sans-serif" font-size="12" font-weight="bold" fill="#38bdf8" text-anchor="middle" letter-spacing="3">PAGE CLOUD ACADEMY</text>
  <text x="400" y="185" font-family="'Plus Jakarta Sans', sans-serif" font-size="24" font-weight="800" fill="#ffffff" text-anchor="middle">CERTIFICATE OF EXCELLENCE</text>
  <text x="400" y="210" font-family="monospace" font-size="12" fill="#94a3b8" text-anchor="middle">CREDENTIAL ID: CDE-C004-005</text>

  <text x="400" y="250" font-family="sans-serif" font-size="13" fill="#94a3b8" text-anchor="middle">This credential certifies that</text>
  <text x="400" y="285" font-family="'Plus Jakarta Sans', sans-serif" font-size="26" font-weight="bold" fill="#38bdf8" text-anchor="middle">SHUV CHANDRA DAS</text>
  
  <text x="400" y="320" font-family="sans-serif" font-size="13" fill="#cbd5e1" text-anchor="middle">
    has successfully demonstrated applied mastery and completed all production assessments for
  </text>
  <text x="400" y="350" font-family="'Plus Jakarta Sans', sans-serif" font-size="20" font-weight="bold" fill="#34d399" text-anchor="middle">
    CERTIFIED DEVOPS ENGINEER (CDE)
  </text>
  
  <text x="400" y="385" font-family="sans-serif" font-size="12" fill="#94a3b8" text-anchor="middle">
    Docker • Kubernetes • CI/CD Pipelines • Cloud Infrastructure • Automation &amp; Telemetry
  </text>

  <g transform="translate(80, 420)">
    <rect width="640" height="40" rx="8" fill="#1e293b" stroke="#334155"/>
    <text x="30" y="25" font-family="monospace" font-size="11" fill="#38bdf8">Issue Date: <tspan fill="#ffffff" font-weight="bold">August 22, 2024</tspan></text>
    <text x="320" y="25" font-family="monospace" font-size="11" fill="#38bdf8">Status: <tspan fill="#34d399" font-weight="bold">Verified Active Professional</tspan></text>
    <text x="560" y="25" font-family="monospace" font-size="11" fill="#94a3b8">Valid Globally</text>
  </g>

  <!-- Signatures -->
  <g transform="translate(560, 505)">
    <path d="M20,-10 Q50,-24 80,-10 T130,-6" stroke="#38bdf8" stroke-width="2" fill="none"/>
    <line x1="0" y1="0" x2="180" y2="0" stroke="#64748b" stroke-width="1"/>
    <text x="90" y="16" font-family="sans-serif" font-size="10" font-weight="bold" fill="#cbd5e1" text-anchor="middle">Lead DevOps Instructor &amp; Director</text>
  </g>
</svg>`;

export const DEVOPS_CERTIFICATE_URL = svgToDataUri(DEVOPS_CERTIFICATE_SVG);

/**
 * Padma Bank PLC AML & CFT Examination Certificate
 */
export const AML_CERTIFICATE_SVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 560" width="100%" height="100%">
  <defs>
    <linearGradient id="pbGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#022c22" />
      <stop offset="100%" stop-color="#0f172a" />
    </linearGradient>
  </defs>

  <rect width="800" height="560" fill="url(#pbGrad)" rx="12" stroke="#059669" stroke-width="4"/>
  <rect x="16" y="16" width="768" height="528" fill="none" stroke="#10b981" stroke-width="1" stroke-dasharray="6 3" opacity="0.5"/>

  <!-- Bank Emblem -->
  <circle cx="400" cy="85" r="34" fill="#065f46" stroke="#34d399" stroke-width="2"/>
  <text x="400" y="91" font-family="'Plus Jakarta Sans', sans-serif" font-size="14" font-weight="800" fill="#ffffff" text-anchor="middle">PB</text>

  <text x="400" y="150" font-family="'Georgia', serif" font-size="22" font-weight="bold" fill="#ffffff" text-anchor="middle">PADMA BANK PLC</text>
  <text x="400" y="172" font-family="sans-serif" font-size="11" fill="#34d399" text-anchor="middle">Anti-Money Laundering &amp; Combating Financing of Terrorism Division</text>
  
  <text x="400" y="210" font-family="'Plus Jakarta Sans', sans-serif" font-size="16" font-weight="bold" fill="#a7f3d0" text-anchor="middle" letter-spacing="1">
    CERTIFICATE OF EXAMINATION
  </text>
  <text x="400" y="230" font-family="monospace" font-size="11" fill="#94a3b8" text-anchor="middle">REGULATORY COMPLIANCE CERTIFICATE NO: PB-AML-2024-12</text>

  <text x="400" y="270" font-family="sans-serif" font-size="13" fill="#cbd5e1" text-anchor="middle">This is to certify that</text>
  <text x="400" y="305" font-family="'Plus Jakarta Sans', sans-serif" font-size="24" font-weight="bold" fill="#34d399" text-anchor="middle">SHUV CHANDRA DAS</text>
  <text x="400" y="330" font-family="sans-serif" font-size="13" fill="#cbd5e1" text-anchor="middle">Officer, Software Development • Information Technology Division</text>

  <text x="400" y="365" font-family="sans-serif" font-size="13" fill="#f1f5f9" text-anchor="middle">
    has successfully passed the examination on
  </text>
  <text x="400" y="390" font-family="'Plus Jakarta Sans', sans-serif" font-size="17" font-weight="bold" fill="#f59e0b" text-anchor="middle">
    "Fundamentals of AML &amp; CFT for Banking Software &amp; Financial Systems"
  </text>

  <g transform="translate(80, 425)">
    <rect width="640" height="40" rx="8" fill="#064e3b" stroke="#059669"/>
    <text x="30" y="25" font-family="monospace" font-size="11" fill="#a7f3d0">Conferred: <tspan fill="#ffffff" font-weight="bold">December 10, 2024</tspan></text>
    <text x="320" y="25" font-family="monospace" font-size="11" fill="#a7f3d0">Location: <tspan fill="#ffffff" font-weight="bold">Head Office, Gulshan, Dhaka</tspan></text>
    <text x="560" y="25" font-family="monospace" font-size="11" fill="#34d399">Grade: Passed</text>
  </g>

  <!-- Signatures -->
  <g transform="translate(540, 510)">
    <path d="M20,-10 Q50,-24 80,-10 T130,-6" stroke="#34d399" stroke-width="2" fill="none"/>
    <line x1="0" y1="0" x2="180" y2="0" stroke="#6ee7b7" stroke-width="1"/>
    <text x="90" y="16" font-family="sans-serif" font-size="10" font-weight="bold" fill="#ffffff" text-anchor="middle">Head of AML &amp; CFT / CAMLCO</text>
  </g>
</svg>`;

export const AML_CERTIFICATE_URL = svgToDataUri(AML_CERTIFICATE_SVG);
