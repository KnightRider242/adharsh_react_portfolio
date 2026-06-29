import { useEffect, useState } from 'react';
import {
  ArrowUpRight,
  BriefcaseBusiness,
  Code2,
  Download,
  GraduationCap,
  Mail,
  MapPin,
  Menu,
  Moon,
  Phone,
  Rocket,
  Sparkles,
  Sun,
  X
} from 'lucide-react';
import {
  education,
  experience,
  interests,
  navItems,
  openRoles,
  profile,
  projects,
  skills,
  travel,
  travelImportGuide,
  travelStats
} from './data/profile.js';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    document.body.classList.toggle('light-mode', !darkMode);
  }, [darkMode]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-shell">
      <div className="background-orb orb-one" />
      <div className="background-orb orb-two" />
      <Header
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        closeMenu={closeMenu}
      />
      <main>
        <Hero />
        <About />
        <Education />
        <Experience />
        <Projects />
        <Skills />
        <Travel />
        <Contact />
      </main>
      <footer className="footer">
        <p>© {new Date().getFullYear()} {profile.name}. Built with React.</p>
        <a href="#home">Back to top</a>
      </footer>
    </div>
  );
}

function Header({ darkMode, setDarkMode, menuOpen, setMenuOpen, closeMenu }) {
  return (
    <header className="header">
      <a href="#home" className="brand" onClick={closeMenu} aria-label="Go to home section">
        <span className="brand-mark">A</span>
        <span>
          <strong>Adharsh</strong>
          <small>Portfolio CV</small>
        </span>
      </a>

      <nav className={menuOpen ? 'nav open' : 'nav'} aria-label="Main navigation">
        {navItems.map((item) => (
          <a key={item.id} href={`#${item.id}`} onClick={closeMenu}>
            {item.label}
          </a>
        ))}
      </nav>

      <div className="header-actions">
        <button className="icon-button" onClick={() => setDarkMode(!darkMode)} aria-label="Toggle theme">
          {darkMode ? <Sun size={18} /> : <Moon size={18} />}
        </button>
        <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="home" className="section hero-section">
      <div className="hero-copy reveal">
        {/* <div className="pill"><Sparkles size={16} /> {profile.status}</div> */}
        <h2>{profile.name}</h2>
        <p className="hero-headline">{profile.headline}</p>
        <p className="hero-pitch">{profile.pitch}</p>

        <div className="hero-actions">
          <a className="primary-button" href="#contact">
            Contact Me <ArrowUpRight size={18} />
          </a>
          <a className="secondary-button" href="#projects">
            View Projects <Code2 size={18} />
          </a>
        </div>

        <div className="quick-facts">
          {profile.quickFacts.map((fact) => (
            <span key={fact}>{fact}</span>
          ))}
        </div>
      </div>

      <div className="hero-card reveal delay-1">
        <div className="avatar-card">
          <div className="avatar-ring">
            <div className="avatar-initials">ASM</div>
          </div>
          <h2>{profile.fullName}</h2>
          <p><MapPin size={15} /> {profile.location}</p>
        </div>
        <div className="status-card">
          <Rocket size={24} />
          <div>
            <strong>Currently focused on</strong>
            <span>Computer Vision · RL · Software Engineering · QA · AI applications</span>
          </div>
        </div>
        <div className="mini-grid">
          <div><strong>8.67/10</strong><span>B.Tech CGPA</span></div>
          <div><strong>M.Sc.</strong><span>Uni Stuttgart</span></div>
          <div><strong>IEEE</strong><span>Publication</span></div>
          <div><strong>React</strong><span>This project</span></div>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="section reveal">
      <SectionTitle eyebrow="About" title="A portfolio that is more than a CV" />
      <div className="about-grid">
        <div className="glass-card large-card">
          <p>
            I am a Computer Science graduate from Amrita Vishwa Vidyapeetham and a current M.Sc. Computer Science student at the University of Stuttgart. My work combines software engineering, backend development, AI, computer vision, and problem-solving for real systems.
          </p>
          <p>
            This page is designed as a living portfolio: it can show my education, work experience, projects, research, skills, travel, interests, and current role interests in one clean web project.
          </p>
        </div>
        <div className="glass-card interests-card">
          <h3>Beyond academics</h3>
          <div className="tag-cloud">
            {interests.map((interest) => <span key={interest}>{interest}</span>)}
          </div>
        </div>
      </div>
    </section>
  );
}

function Education() {
  return (
    <section id="education" className="section reveal">
      <SectionTitle eyebrow="Education" title="Academic journey" icon={<GraduationCap />} />
      <div className="timeline">
        {education.map((item, index) => (
          <article className="timeline-card" key={item.title}>
            <div className="timeline-dot">{index + 1}</div>
            <div className="timeline-content">
              <div className="timeline-topline">
                <span>{item.period}</span>
                {item.editable && <small>Editable placeholder</small>}
              </div>
              <h3>{item.title}</h3>
              <p className="muted">{item.institution} · {item.location}</p>
              <ul>
                {item.details.map((detail) => <li key={detail}>{detail}</li>)}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section id="experience" className="section reveal">
      <SectionTitle eyebrow="Experience" title="Professional background" icon={<BriefcaseBusiness />} />
      <div className="cards-grid single">
        {experience.map((job) => (
          <article className="glass-card experience-card" key={job.company}>
            <div className="card-header">
              <div>
                <h3>{job.role}</h3>
                <p>{job.company} · {job.location}</p>
              </div>
              <span className="period-badge">{job.period}</span>
            </div>
            <div className="tag-cloud compact">
              {job.tags.map((tag) => <span key={tag}>{tag}</span>)}
            </div>
            <ul>
              {job.details.map((detail) => <li key={detail}>{detail}</li>)}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects" className="section reveal">
      <SectionTitle eyebrow="Projects" title="Projects and research" icon={<Code2 />} />
      <div className="cards-grid">
        {projects.map((project) => (
          <article className="project-card" key={project.name}>
            <div className="project-type">{project.type}</div>
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <div className="tag-cloud compact">
              {project.stack.map((tech) => <span key={tech}>{tech}</span>)}
            </div>
            <div className="project-highlight">{project.highlight}</div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" className="section reveal">
      <SectionTitle eyebrow="Skills" title="Technical toolbox" />
      <div className="skills-grid">
        {skills.map((skillGroup) => (
          <article className="glass-card skill-card" key={skillGroup.group}>
            <h3>{skillGroup.group}</h3>
            <div className="tag-cloud compact">
              {skillGroup.items.map((skill) => <span key={skill}>{skill}</span>)}
            </div>
          </article>
        ))}
      </div>
      <div className="open-roles-card">
        <h3>Open to roles</h3>
        <div className="role-marquee" aria-label="Open roles list">
          {openRoles.map((role) => <span key={role}>{role}</span>)}
        </div>
      </div>
    </section>
  );
}

function Travel() {
  const mapsUrl = (place) => `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${place.place}, ${place.country}`)}`;

  return (
    <section id="travel" className="section reveal">
      <SectionTitle eyebrow="Travel" title="Places visited and personal map" />
      <div className="travel-intro glass-card travel-hero-card">
        {/*
        <div>
         <p>I am working on this section.</p>
        </div>
        */}
        <div className="travel-stats">
          {travelStats.map((stat) => (
            <div key={stat.label}>
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
              <small>{stat.note}</small>
            </div>
          ))}
        </div>
      </div>

      <div className="travel-grid">
        {travel.map((place) => (
          <article className="travel-card" key={`${place.place}-${place.country}`}>
            <div className="travel-icon">{place.icon}</div>
            <div>
              <h3>{place.place}</h3>
              <p className="muted">{place.country}</p>
              <p>{place.note}</p>
              <span>{place.vibe}</span>
              <a className="map-link" href={mapsUrl(place)} target="_blank" rel="noreferrer">
                Open in Google Maps <ArrowUpRight size={15} />
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="section contact-section reveal">
      <SectionTitle eyebrow="Contact" title="Let’s connect" />
      {/* <div className="contact-grid"> */}
        <div className="glass-card contact-copy">
          <h3>Available for student-friendly roles and collaborations.</h3>
          <p>
            Best fit: software engineering, backend development, QA/testing, AI/ML, computer vision, research assistant, HiWi, and working student roles around Stuttgart or remote/hybrid options.
          </p>
          <div className="contact-links">
            <a href={`mailto:${profile.email}`}><Mail size={18} /> {profile.email}</a>
            <a href={`tel:${profile.phone.replaceAll(' ', '')}`}><Phone size={18} /> {profile.phone}</a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer"><ArrowUpRight size={18} /> LinkedIn</a>
            <a href={profile.github} target="_blank" rel="noreferrer"><ArrowUpRight size={18} /> GitHub</a>
          </div>
        </div>
        
      {/* </div> */}
    </section>
  );
}

function SectionTitle({ eyebrow, title, icon }) {
  return (
    <div className="section-title">
      <span>{icon} {eyebrow}</span>
      <h2>{title}</h2>
    </div>
  );
}

export default App;
