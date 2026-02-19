import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    document.body.className = theme;
    // Store theme preference
    localStorage.setItem('theme', theme);
  }, [theme]);

  // Check for saved theme preference on load
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    setTheme(savedTheme);
  }, []);

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'dark' ? 'light' : 'dark');
  };

  return (
    <div className={`app ${theme}`}>
      <nav className="navbar">
        <h1 className="logo">Mahendar Aluwala</h1>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#education">Education</a>
          <a href="#certifications">Certifications</a>
          <a href="#resume">Resume</a>
          <a href="#contact">Contact</a>
        </div>

        {/* Theme Toggle Button */}
        <button 
          onClick={toggleTheme} 
          className="theme-toggle"
          aria-label="Toggle theme"
        >
          {theme === 'dark' ? '☀️' : '🌙'}
        </button>
      </nav>

      {/* Rest of your component remains exactly the same */}
      {/* Hero */}
      <section id="home" className="hero">
        <motion.div initial={{opacity:0,y:50}} animate={{opacity:1,y:0}} transition={{duration:1}} className="hero-content">
          <div className="hero-profile">
            <img src="/profile.jpg" alt="Mahendar Aluwala" className="profile-img" />
          </div>
          <h2>Hi, I'm <span>Mahendar Aluwala</span></h2>
          <h3>Software Developer | Java | Python | Full Stack</h3>
          <p>
            Aspiring Software Developer with strong foundations in software engineering,
            backend systems, databases, and full-stack web development. Passionate about
            building scalable, secure, and high-performance applications.
          </p>
          <div className="hero-buttons">
            <a href="#projects" className="btn">Explore Projects</a>
            <a href="#contact" className="btn outline">Hire Me</a>
          </div>
        </motion.div>
      </section>

      {/* About */}
      <section id="about" className="section dark">
        <h2>Professional Summary</h2>
        <p className="section-text">
          I am a highly motivated and disciplined Computer Applications graduate with
          hands-on experience in Java development, database systems, and web application
          engineering. I specialize in designing structured systems, building reliable
          backend logic, and creating responsive user interfaces. My goal is to contribute
          to high-impact projects while continuously improving my engineering skills.
        </p>
      </section>
{/* Skills */}
<section id="skills" className="section">
  <h2>Technical Expertise</h2>
  <div className="grid">
    {[
      { name: "Core Java", level: "80%", emoji: "☕" },
      { name: "Python", level: "75%", emoji: "🐍" },
      { name: "C++", level: "70%", emoji: "⚡" },
      { name: "PHP", level: "75%", emoji: "🐘" },
      { name: "React", level: "50%", emoji: "⚛️" },
      { name: "HTML", level: "80%", emoji: "🌐" },
      { name: "CSS", level: "75%", emoji: "🎨" },
      { name: "JavaScript", level: "65%", emoji: "📜" },
      { name: "Servlets", level: "50%", emoji: "🔧" },
      { name: "MySQL", level: "85%", emoji: "🗄️" },
      { name: "SQL Server", level: "80%", emoji: "📊" },
      { name: "Linux", level: "40%", emoji: "🐧" }
    ].map(skill => (
      <div 
        className="skill-card" 
        key={skill.name}
        data-emoji={skill.emoji}
      >
        <span>{skill.name}</span>
        <div className="skill-level" style={{ '--level': skill.level }}></div>
      </div>
    ))}
  </div>
</section>

     {/* Experience */}
<section id="experience" className="section">
  <h2>Internship Experience</h2>
  <p className="section-text">
    Practical industry experience through structured internships, real-world projects,
    and professional training in software development and data science.
  </p>

  <div className="timeline">

    {/* CyberForenX Internship */}
    <div className="timeline-card">
      <h3>Full Stack Developer Intern — CyberForenX & Associates</h3>
      <span>Feb 2026 – Aug 2026 | 6 Months Internship</span>
      <p>
        • Working on real-world full stack applications using HTML, CSS, JavaScript, and modern frameworks like React<br/>
        • Collaborating with design and backend teams for API integration and UI/UX improvements<br/>
        • Writing clean, scalable, and maintainable code following industry best practices<br/>
        • Participating in code reviews, debugging, and testing processes<br/>
        • Maintaining technical documentation and project reports<br/>
        • Gaining hands-on exposure to professional development workflows and agile environments
      </p>
    </div>

    {/* TCR Innovation Internship */}
    <div className="timeline-card">
      <h3>Data Science Intern — TCR Innovation</h3>
      <span>Oct 2024 – Dec 2024</span>
      <p>
        • Analyzed user behavior data to improve content recommendations<br/>
        • Built predictive models for trend forecasting<br/>
        • Created interactive dashboards using Python & Pandas<br/>
        • Applied data-driven strategies to optimize user engagement
      </p>
    </div>

  </div>
</section>
{/* Projects */}
<section id="projects" className="section">
  <h2>Featured Projects</h2>
  <p className="section-text">
    Here are some of my recent projects that showcase my skills and expertise.
  </p>
  
  <div className="project-grid">
   {/* Food Ordering Website */}
<div className="project-card">
  <div className="project-image">
    <img 
      src="project1.png" 
      alt="Food Ordering Website"
      loading="lazy"
      onError={(e) => {
        e.target.src = 'https://via.placeholder.com/600x400/1e293b/38bdf8?text=Food+Ordering+System';
      }}
    />
  </div>
  <div className="project-content">
    <h3>Food Ordering Website</h3>
    <p>
      A fully functional food ordering platform with user authentication, restaurant listings, 
      menu browsing, cart management, and order tracking. Integrated with Microsoft SQL Server 
      for robust data management.
    </p>
    
    <div className="project-tech">
      <span className="tech-tag">HTML5</span>
      <span className="tech-tag">CSS3</span>
      <span className="tech-tag">JavaScript</span>
      <span className="tech-tag">PHP</span>
      <span className="tech-tag">Microsoft SQL Server</span>
    </div>
    
    <div className="project-links">
      <a 
        href="https://github.com/MahendarAluwala-git/FOOD-ORDERING-WEBSITE" 
        target="_blank" 
        rel="noreferrer"
        className="code-link"
      >
        View Code
      </a>
    </div>
  </div>
</div>

    {/* TCP Client-Server Game */}
    <div className="project-card">
      <div className="project-badge">Featured</div>
      <div className="project-image">
        <img 
          src="project2.png" 
          alt="TCP Client-Server Game"
          loading="lazy"
          onError={(e) => {
            e.target.src = 'https://via.placeholder.com/600x400/1e293b/38bdf8?text=TCP+Game';
          }}
        />
      </div>
      <div className="project-content">
        <h3>TCP Client-Server Game</h3>
        <p>
          Java socket-based network application with real-time client-server communication.
          Multi-threaded server handles multiple clients simultaneously.
        </p>
        
        <div className="project-tech">
          <span className="tech-tag">Java</span>
          <span className="tech-tag">Socket Programming</span>
          <span className="tech-tag">Servlets</span>
        </div>
        
        <div className="project-links">
          <a 
            href="https://github.com/MahendarAluwala-git/Client-Server-game" 
            target="_blank" 
            rel="noreferrer"
            className="code-link"
          >
            View Code
          </a>
        </div>
      </div>
    </div>

    {/* House Rental Management System */}
    <div className="project-card">
      <div className="project-badge">Live Demo</div>
      <div className="project-image">
        <img 
          src="project3.png" 
          alt="House Rental Management System"
          loading="lazy"
          onError={(e) => {
            e.target.src = 'https://via.placeholder.com/600x400/1e293b/38bdf8?text=Rental+System';
          }}
        />
      </div>
      <div className="project-content">
        <h3>House Rental Management</h3>
        <p>
          Full-stack platform for property management, tenant agreements, and payments.
          Features user authentication and real-time booking system.
        </p>
        
        <div className="project-tech">
          <span className="tech-tag">HTML</span>
          <span className="tech-tag">CSS</span>
          <span className="tech-tag">JavaScript</span>
           <span className="tech-tag">PHP</span>
          <span className="tech-tag">Microsoft SQL Server</span>
        </div>
        
        <div className="project-links">
          <a 
            href="https://rentalhub.fwh.is/" 
            target="_blank" 
            rel="noreferrer"
            className="live-link"
          >
            Live Demo
          </a>
          <a 
            href="https://github.com/MahendarAluwala-git/RentalHub" 
            target="_blank" 
            rel="noreferrer"
            className="code-link"
          >
            Code
          </a>
        </div>
      </div>
    </div>
  </div>
</section>
{/* Education */}
<section id="education" className="section dark">
  <h2>Education</h2>
  <p className="section-text">My academic background and formal education journey.</p>

  <div className="edu-grid">
    <div className="edu-card">
      <h3>Bachelor of Computer Applications (BCA)</h3>
      <p>Sahyog College of Management</p>
      <span>2022 – 2025 | CGPA: 9.62</span>
    </div>

    <div className="edu-card">
      <h3>Higher Secondary (12th)</h3>
      <p>Shree Halari Visa Oswal jr.College</p>
      <span>2022 | Maharashtra State Board | 56.83%</span>
    </div>

    <div className="edu-card">
      <h3>Secondary School (10th)</h3>
      <p>Vivekananda English Medium School</p>
      <span>2020 | Maharashtra State Board | 79.40%</span>
    </div>
  </div>
</section>

{/* Certifications */}
<section id="certifications" className="section">
  <h2>Certifications</h2>
  <p className="section-text">Professional certifications that strengthen my technical expertise.</p>

  <div className="cert-grid">
    <div className="cert-card">
      <h3>Data Structures & OOPS with C++</h3>
      <p>Udemy</p>
      <a href="cpp.pdf" target="_blank" rel="noreferrer">View Certificate</a>
    </div>

    <div className="cert-card">
      <h3>Programming Network Applications in Java</h3>
      <p>Udemy</p>
      <a href="java.pdf" target="_blank" rel="noreferrer">View Certificate</a>
    </div>

    <div className="cert-card">
      <h3>GenAI, data Science with Python</h3>
      <p>TCRinnovation</p>
      <a href="certificate.pdf" target="_blank" rel="noreferrer">View Certificate</a>
    </div>

    <div className="cert-card">
      <h3>Complete MySQL Bootcamp</h3>
      <p>LetsUpgrade</p>
      <a href="mysql.pdf" target="_blank" rel="noreferrer">View Certificate</a>
    </div>
  </div>
</section>
      {/* Resume */}
      <section id="resume" className="section">
        <h2>Resume</h2>
        <p className="section-text">Access my professional resume to explore my skills, experience, and qualifications in detail.</p>
        <div className="resume-container">
          <div className="resume-card">
            <h3>Mahendar Aluwala — Software Developer</h3>
            <p>
              A complete overview of my technical expertise, academic background,
              certifications, and project experience.
            </p>
            <div className="resume-actions">
              <a href="/MahendarAluwalaResume.pdf" target="_blank" rel="noreferrer" className="btn">View Resume</a>
              <a href="/MahendarAluwalaResume.pdf" download className="btn outline">Download Resume</a>
            </div>
          </div>
        </div>
      </section>

     {/* Contact */}
<section id="contact" className="section contact dark">
  <h2>Contact Me</h2>
  <p className="section-text">For professional inquiries, collaborations, or opportunities, feel free to reach out.</p>

  <div className="contact-info">
    {/* Email with icon */}
    <div className="contact-item">
      <span className="contact-icon">📧</span>
      <div>
        <strong>Email:</strong>
        <a 
          href="mailto:aluwalamahendar@gmail.com?subject=Hello%20Mahendar%20-%20From%20Portfolio&body=Hi%20Mahendar%2C%0A%0AI%20saw%20your%20portfolio%20and%20would%20like%20to%20connect%20with%20you.%0A%0A"
          className="contact-link"
        >
          aluwalamahendar@gmail.com
        </a>
      </div>
    </div>
    
    {/* Phone with icon */}
    <div className="contact-item">
      <span className="contact-icon">📱</span>
      <div>
        <strong>Phone:</strong>
        <a href="tel:+919960259300" className="contact-link">
          09960259300
        </a>
      </div>
    </div>
    
    {/* Location with icon */}
    <div className="contact-item">
      <span className="contact-icon">📍</span>
      <div>
        <strong>Location:</strong>
        <span>Thane, Maharashtra</span>
      </div>
    </div>
  </div>

  <div className="socials">
    <a href="https://github.com/MahendarAluwala-git" target="_blank" rel="noreferrer" className="social-link">
      <span className="social-icon">🐱</span> GitHub
    </a>
    <a href="https://www.linkedin.com/in/mahendar-aluwala" target="_blank" rel="noreferrer" className="social-link">
      <span className="social-icon">💼</span> LinkedIn
    </a>
    <a href="mailto:aluwalamahendar@gmail.com" className="social-link">
      <span className="social-icon">📧</span> Email
    </a>
  </div>
</section>
      <footer>
        <p>© 2026 Mahendar Aluwala</p>
      </footer>
    </div>
  );
}

export default App;