const fs = require('fs');
const path = require('path');
const { jsPDF } = require('jspdf');

function generateResume() {
  const doc = new jsPDF({
    orientation: 'portrait',
    unit: 'pt',
    format: 'letter', // 612 x 792 pt
  });

  const pageWidth = 612;
  const pageHeight = 792;
  const leftMargin = 40;
  const rightMargin = 40;
  const contentWidth = pageWidth - leftMargin - rightMargin;
  const rightX = pageWidth - rightMargin;

  let y = 42;

  // Header: Name
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(20);
  doc.setTextColor(30, 41, 59); // Slate-800
  doc.text('SHALENDER SINGH', leftMargin, y);
  y += 18;

  // Contact Info row 1
  doc.setFontSize(9.5);
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(30, 41, 59);
  
  // LinkedIn
  doc.text('LinkedIn: ', leftMargin, y);
  const linkedinLabelWidth = doc.getTextWidth('LinkedIn: ');
  doc.setTextColor(29, 78, 216); // Blue link
  doc.text('https://www.linkedin.com/in/shalender-singh-rawat/', leftMargin + linkedinLabelWidth, y);
  doc.link(leftMargin + linkedinLabelWidth, y - 9, doc.getTextWidth('https://www.linkedin.com/in/shalender-singh-rawat/'), 12, {
    url: 'https://www.linkedin.com/in/shalender-singh-rawat/',
  });

  // Email (Right aligned block)
  const emailFull = 'Email: thecodingdev9@gmail.com';
  const emailWidth = doc.getTextWidth(emailFull);
  const emailLabelWidth = doc.getTextWidth('Email: ');
  doc.setTextColor(30, 41, 59);
  doc.text('Email: ', rightX - emailWidth, y);
  doc.setTextColor(29, 78, 216);
  doc.text('thecodingdev9@gmail.com', rightX - emailWidth + emailLabelWidth, y);
  doc.link(rightX - emailWidth + emailLabelWidth, y - 9, doc.getTextWidth('thecodingdev9@gmail.com'), 12, {
    url: 'mailto:thecodingdev9@gmail.com',
  });

  y += 14;

  // Github & Mobile row 2
  doc.setTextColor(30, 41, 59);
  doc.text('Github: ', leftMargin, y);
  const githubLabelWidth = doc.getTextWidth('Github: ');
  doc.setTextColor(29, 78, 216);
  doc.text('https://github.com/thecodingdev24', leftMargin + githubLabelWidth, y);
  doc.link(leftMargin + githubLabelWidth, y - 9, doc.getTextWidth('https://github.com/thecodingdev24'), 12, {
    url: 'https://github.com/thecodingdev24',
  });

  // Mobile
  doc.setTextColor(30, 41, 59);
  const mobileText = 'Mobile: +91-7696139091';
  doc.text(mobileText, rightX - doc.getTextWidth(mobileText), y);

  y += 16;

  // Section Header Helper
  function renderSectionHeader(title) {
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(11);
    doc.setTextColor(30, 41, 59);
    doc.text(title, leftMargin, y);
    y += 4;
    doc.setDrawColor(160, 174, 192); // Gray line
    doc.setLineWidth(0.8);
    doc.line(leftMargin, y, rightX, y);
    y += 12;
  }

  // Helper for bullet items
  function renderBullet(text, indent = 12) {
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8.8);
    doc.setTextColor(40, 50, 65);
    const bulletChar = '\u2022';
    doc.text(bulletChar, leftMargin + indent, y);

    const maxWidth = contentWidth - indent - 14;
    const lines = doc.splitTextToSize(text, maxWidth);
    doc.text(lines, leftMargin + indent + 10, y);
    y += lines.length * 11.2;
  }

  // 1. SKILLS
  renderSectionHeader('SKILLS');
  
  const skillCategories = [
    { label: 'Languages: ', value: 'Java, JavaScript, C, C++, Python' },
    { label: 'Technologies: ', value: 'HTML, CSS' },
    { label: 'Databases/Tools: ', value: 'MySQL, Git, GitHub, Figma' },
    { label: 'Soft Skills: ', value: 'Problem solving, Team collaboration, Time management, Adaptability' },
  ];

  skillCategories.forEach(cat => {
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(9);
    doc.setTextColor(30, 41, 59);
    doc.text('\u2022', leftMargin + 8, y);
    
    doc.setFont('helvetica', 'bold');
    doc.text(cat.label, leftMargin + 18, y);
    const labelW = doc.getTextWidth(cat.label);

    doc.setFont('helvetica', 'normal');
    doc.text(cat.value, leftMargin + 18 + labelW, y);
    y += 12.5;
  });

  y += 4;

  // 2. PROJECTS
  renderSectionHeader('PROJECTS');

  // Tikki Topple Game
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9.5);
  doc.setTextColor(30, 41, 59);
  doc.text('TIKKI TOPPLE GAME | ', leftMargin, y);
  const ttTitleW = doc.getTextWidth('TIKKI TOPPLE GAME | ');
  doc.setTextColor(29, 78, 216);
  doc.text('GitHub', leftMargin + ttTitleW, y);
  doc.link(leftMargin + ttTitleW, y - 8, doc.getTextWidth('GitHub'), 10, {
    url: 'https://github.com/thecodingdev24/tikki-topplegame',
  });

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9);
  doc.setTextColor(70, 80, 95);
  const ttDate = 'April 2026 - May 2026';
  doc.text(ttDate, rightX - doc.getTextWidth(ttDate), y);
  y += 12;

  renderBullet('Developed a turn-based strategy game in Python using Pygame, implementing core game logic, scoring, and turn management.');
  renderBullet('Implemented local multiplayer and AI opponents with Easy, Medium, and Hard difficulty levels.');
  renderBullet('Designed an animated game interface featuring interactive menus, gameplay board, score tracking, and winner screens.');
  renderBullet('Built a 20-turn scoring system with strategic gameplay mechanics for competitive play.');
  renderBullet('Integrated procedurally synthesized sound effects directly in Python, eliminating dependency on external audio files.');
  renderBullet('Applied object-oriented programming and modular game architecture to organize gameplay, UI, AI, and audio components.');
  
  // Tech Stack bullet
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8.8);
  doc.setTextColor(40, 50, 65);
  doc.text('\u2022', leftMargin + 12, y);
  doc.setFont('helvetica', 'bold');
  doc.text('Tech Stack: ', leftMargin + 22, y);
  const tsWidth = doc.getTextWidth('Tech Stack: ');
  doc.setFont('helvetica', 'normal');
  doc.text('Python, Pygame.', leftMargin + 22 + tsWidth, y);
  y += 14;

  // Personal CarVault Website
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9.5);
  doc.setTextColor(30, 41, 59);
  doc.text('Personal CARVAULT WEBSITE | ', leftMargin, y);
  const cvTitleW = doc.getTextWidth('Personal CARVAULT WEBSITE | ');
  doc.setTextColor(29, 78, 216);
  doc.text('GitHub', leftMargin + cvTitleW, y);
  doc.link(leftMargin + cvTitleW, y - 8, doc.getTextWidth('GitHub'), 10, {
    url: 'https://github.com/thecodingdev24/carvault',
  });

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9);
  doc.setTextColor(70, 80, 95);
  const cvDate = 'Nov 2025 - Nov 2025';
  doc.text(cvDate, rightX - doc.getTextWidth(cvDate), y);
  y += 12;

  renderBullet('Developed a personal car showcase website.');
  renderBullet('Designed the website to showcase my favorite cars, including their specifications, features, performance, and other important details.');
  renderBullet('Used HTML to structure the webpages and organize car information in a clear and readable format.');
  renderBullet('Used CSS to create a visually appealing layout, styling, responsive sections, and an automotive-themed user interface.');
  renderBullet('Implemented JavaScript to add interactive elements and improve the overall user experience.');
  renderBullet('Added detailed information such as engine specifications, horsepower, top speed, acceleration, transmission, and other car features.');
  renderBullet('Organized multiple cars into individual sections/cards so users could easily explore and compare different models.');
  renderBullet('The project helped me improve my understanding of frontend web development, UI design, and JavaScript-based interactivity.');

  // Tech Stack bullet
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8.8);
  doc.setTextColor(40, 50, 65);
  doc.text('\u2022', leftMargin + 12, y);
  doc.setFont('helvetica', 'bold');
  doc.text('Tech Stack: ', leftMargin + 22, y);
  const cvTsWidth = doc.getTextWidth('Tech Stack: ');
  doc.setFont('helvetica', 'normal');
  doc.text('HTML, CSS, JS.', leftMargin + 22 + cvTsWidth, y);
  y += 14;

  // 3. TRAINING
  renderSectionHeader('TRAINING');

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9.2);
  doc.setTextColor(30, 41, 59);
  doc.text('WEB DEVELOPMENT & SOFTWARE ENGINEERING INTERN | CODSOFT (VIRTUAL)', leftMargin, y);
  
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9);
  doc.setTextColor(70, 80, 95);
  const trainDate = 'June 2026 - July 2026';
  doc.text(trainDate, rightX - doc.getTextWidth(trainDate), y);
  y += 12;

  renderBullet('Built interactive, responsive front-end web components using HTML5, CSS3, and JavaScript to enhance user experience.');
  renderBullet('Collaborated on bug fixing, code optimization, and cross-browser responsiveness testing.');
  renderBullet('Utilized Git and GitHub for version control, code reviews, and structured task management.');
  y += 4;

  // 4. CERTIFICATES
  renderSectionHeader('CERTIFICATES');

  // Python
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9);
  doc.setTextColor(40, 50, 65);
  doc.text('\u2022', leftMargin + 8, y);
  doc.text('Introduction To Python | ', leftMargin + 18, y);
  const certPyW = doc.getTextWidth('Introduction To Python | ');
  doc.setTextColor(29, 78, 216);
  doc.text('Springboard', leftMargin + 18 + certPyW, y);
  doc.link(leftMargin + 18 + certPyW, y - 8, doc.getTextWidth('Springboard'), 10, {
    url: 'https://infyspringboard.onwingspan.com/',
  });

  doc.setTextColor(70, 80, 95);
  const certPyDate = 'Feb 2026';
  doc.text(certPyDate, rightX - doc.getTextWidth(certPyDate), y);
  y += 13;

  // Cloud Computing
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(40, 50, 65);
  doc.text('\u2022', leftMargin + 8, y);
  doc.text('Introduction To Cloud Computing | ', leftMargin + 18, y);
  const certCloudW = doc.getTextWidth('Introduction To Cloud Computing | ');
  doc.setTextColor(29, 78, 216);
  doc.text('Infosys', leftMargin + 18 + certCloudW, y);
  doc.link(leftMargin + 18 + certCloudW, y - 8, doc.getTextWidth('Infosys'), 10, {
    url: 'https://infyspringboard.onwingspan.com/',
  });

  doc.setTextColor(70, 80, 95);
  const certCloudDate = 'March 2026';
  doc.text(certCloudDate, rightX - doc.getTextWidth(certCloudDate), y);
  y += 15;

  // 5. ACHIEVEMENTS
  renderSectionHeader('ACHIEVEMENTS');

  renderBullet("Selected for GSA'26 (Google Student Ambassador).", 8);
  renderBullet('Ranked Top 10 among 50+ teams in a college hackathon.', 8);
  y += 4;

  // 6. EDUCATION
  renderSectionHeader('EDUCATION');

  // LPU
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9.5);
  doc.setTextColor(30, 41, 59);
  doc.text('Lovely Professional University', leftMargin, y);
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9);
  doc.setTextColor(70, 80, 95);
  const lpuLoc = 'Phagwara, Punjab';
  doc.text(lpuLoc, rightX - doc.getTextWidth(lpuLoc), y);
  y += 11;

  doc.text('\u2022', leftMargin + 8, y);
  doc.setFont('helvetica', 'italic');
  doc.setTextColor(50, 60, 75);
  doc.text('Bachelor of Technology - Computer Science and Engineering', leftMargin + 18, y);
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(70, 80, 95);
  const lpuDate = 'Aug 2025 - Present';
  doc.text(lpuDate, rightX - doc.getTextWidth(lpuDate), y);
  y += 14;

  // Rose Mary
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9.5);
  doc.setTextColor(30, 41, 59);
  doc.text('Rose Mary Convent School', leftMargin, y);
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9);
  doc.setTextColor(70, 80, 95);
  const rmLoc = 'Bathinda, Punjab';
  doc.text(rmLoc, rightX - doc.getTextWidth(rmLoc), y);
  y += 11;

  doc.text('\u2022', leftMargin + 8, y);
  doc.setFont('helvetica', 'italic');
  doc.setTextColor(50, 60, 75);
  doc.text('Higher Secondary Education.', leftMargin + 18, y);
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(70, 80, 95);
  const rmDate = 'May 2023 - Mar 2025';
  doc.text(rmDate, rightX - doc.getTextWidth(rmDate), y);
  y += 14;

  // APS
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9.5);
  doc.setTextColor(30, 41, 59);
  doc.text('Army Public School', leftMargin, y);
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9);
  doc.setTextColor(70, 80, 95);
  const apsLoc = 'Panchkula, Haryana';
  doc.text(apsLoc, rightX - doc.getTextWidth(apsLoc), y);
  y += 11;

  doc.text('\u2022', leftMargin + 8, y);
  doc.setFont('helvetica', 'italic');
  doc.setTextColor(50, 60, 75);
  doc.text('Secondary Education.', leftMargin + 18, y);
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(70, 80, 95);
  const apsDate = 'Jun 2022 - Mar 2023';
  doc.text(apsDate, rightX - doc.getTextWidth(apsDate), y);

  // Write out file
  const publicDir = path.join(__dirname, '..', 'public');
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }

  const arrayBuffer = doc.output('arraybuffer');
  const buffer = Buffer.from(arrayBuffer);

  fs.writeFileSync(path.join(publicDir, 'Shalender_Singh_Resume.pdf'), buffer);
  fs.writeFileSync(path.join(publicDir, 'resume.pdf'), buffer);
  console.log('Resume PDF generated successfully at public/Shalender_Singh_Resume.pdf and public/resume.pdf!');
}

generateResume();
