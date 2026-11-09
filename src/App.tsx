/** SPDX-License-Identifier: Apache-2.0 */
import { useRef, useState } from "react";
import { ArrowDown, ArrowUpRight, AudioLines, Menu, Play, X } from "lucide-react";
import { PROJECTS, SERVICES, type Project } from "./constants";

const EMAIL = "gs.soundlabs@gmail.com";
const selectedIds = ["4", "2", "1", "3", "7", "10"];
const selectedProjects = selectedIds.flatMap((id) => PROJECTS.filter((project) => project.id === id));
const otherProjects = PROJECTS.filter((project) => !selectedIds.includes(project.id));
const navLinks = [
  { title: "Work", href: "#work" },
  { title: "Services", href: "#services" },
  { title: "Studio", href: "#about" },
];

const brands = [
  { name: "Google", file: "google" },
  { name: "Lemonade", file: "lemonade" },
  { name: "Lightricks", file: "lightricks" },
  { name: "Sweet Security", file: "sweet" },
  { name: "Papaya Global", file: "papaya" },
  { name: "Freesbe", file: "freesbe", boxed: true },
  { name: "Oral-B", file: "oralb", boxed: true },
  { name: "P&G", file: "pg" },
  { name: "Old Spice", file: "oldspice" },
  { name: "Keshet 12", file: "keshet" },
  { name: "Reshet 13", file: "reshet", boxed: true },
  { name: "Kan 11", file: "kan" },
  { name: "Sebocalm", file: "sebocalm" },
  { name: "Overwolf", file: "overwolf" },
  { name: "Steimatzky", file: "steimatzky", boxed: true },
  { name: "Playo", file: "playo" },
];

function BrandStrip() {
  return (
    <section id="brands" className="shell brand-strip" aria-labelledby="brands-heading">
      <h2 id="brands-heading">Brands our team has worked with</h2>
      <ul className="brand-list" role="list">
        {brands.map(({ name, file, boxed }) => (
          <li key={file}>
            <img className={boxed ? "brand-logo brand-logo-boxed" : "brand-logo"}
              src={`/brands/${file}.png`} alt={name} width={264} height={132} loading="lazy" decoding="async" />
          </li>
        ))}
      </ul>
    </section>
  );
}

function Wordmark() {
  return <span className="wordmark"><img src="/gs-mark.svg" width="27" height="27" alt="" /> G.S SoundLabs</span>;
}

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="site-header" onKeyDown={(event) => {
      if (event.key === "Escape" && menuOpen) {
        setMenuOpen(false);
        event.currentTarget.querySelector<HTMLButtonElement>(".menu-toggle")?.focus();
      }
    }}>
      <div className="shell header-inner">
        <a href="#top" aria-label="G.S SoundLabs home" onClick={() => setMenuOpen(false)}><Wordmark /></a>
        <button
          className="menu-toggle"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-controls="main-nav"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >{menuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}</button>
        <nav id="main-nav" className={menuOpen ? "is-open" : ""} aria-label="Main navigation">
          {navLinks.map(({ title, href }) => (
            <a key={href} href={href} onClick={() => setMenuOpen(false)}>{title}</a>
          ))}
          <a className="header-contact" href="#contact" onClick={() => setMenuOpen(false)}>
            Let’s talk <ArrowUpRight size={15} aria-hidden="true" />
          </a>
        </nav>
      </div>
    </header>
  );
}

function ProjectCard({ project, onPlay, eager = false }: {
  project: Project;
  onPlay: (project: Project) => void;
  eager?: boolean;
}) {
  const [posterFailed, setPosterFailed] = useState(false);
  const projectLabel = project.edition ? `${project.title} — ${project.edition}` : project.title;

  return (
    <article className="project">
      <button className="project-button" onClick={() => onPlay(project)} aria-label={`Play ${projectLabel}`}>
        <span className={`project-media tone-${(Number(project.id) - 1) % 5}`}>
          <span className="cover" aria-hidden="true">
            <span className="cover-grid" />
            <span className="cover-name">{project.title}</span>
          </span>
          {!posterFailed && <img
            src={`/posters/${project.vimeoId}.jpg`}
            alt=""
            width={1200}
            height={675}
            loading={eager ? "eager" : "lazy"}
            decoding="async"
            onError={() => setPosterFailed(true)}
          />}
          <span className="play-icon" aria-hidden="true"><Play size={17} fill="currentColor" /></span>
        </span>
        <span className="project-caption">
          <span className="project-title">{project.title}</span>
          <span className="project-type">{project.client}{project.edition ? ` · ${project.edition}` : ""}</span>
        </span>
      </button>
    </article>
  );
}

export default function App() {
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [showArchive, setShowArchive] = useState(false);
  const dialog = useRef<HTMLDialogElement>(null);

  function play(project: Project) {
    dialog.current?.showModal();
    setActiveProject(project);
  }

  return (
    <div id="top">
      <a className="skip-link" href="#content">Skip to content</a>
      <Header />
      <main id="content">
        <section className="shell hero" aria-labelledby="hero-heading">
          <h1 id="hero-heading">We create music, design sound and mix audio for commercials, product films and animation.</h1>
        </section>

        <section id="work" className="shell section work" aria-labelledby="work-heading">
          <div className="work-heading">
            <h2 id="work-heading">Selected work</h2>
            <span className="work-note"><AudioLines size={16} aria-hidden="true" /> Play with sound</span>
          </div>
          <div className="project-grid">
            {selectedProjects.map((project, index) => <ProjectCard key={project.id} project={project} onPlay={play} eager={index < 2} />)}
          </div>
          <div id="work-archive" hidden={!showArchive}>
            {showArchive && <div className="project-grid archive-grid">
              {otherProjects.map((project) => <ProjectCard key={project.id} project={project} onPlay={play} />)}
            </div>}
          </div>
          <button className="button button-outline archive-button" aria-expanded={showArchive} aria-controls="work-archive" onClick={() => setShowArchive(!showArchive)}>
            {showArchive ? "Show fewer projects" : "Show more projects"}
            <ArrowDown size={17} className={showArchive ? "flipped" : undefined} aria-hidden="true" />
          </button>
        </section>

        <section id="services" className="section services" aria-labelledby="services-heading">
          <div className="shell">
            <div className="section-heading">
              <div><p className="eyebrow">What we do</p><h2 id="services-heading">From cut to final mix</h2></div>
              <p>Bring us in for one part of the job or the whole soundtrack.</p>
            </div>
            <div className="service-list">
              {SERVICES.map((service) => (
                <article key={service.title} className="service">
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="shell section studio" aria-labelledby="about-heading">
          <div>
            <p className="eyebrow">The studio</p>
            <h2 id="about-heading">Meet the people<br className="studio-break" /> behind the sound</h2>
          </div>
          <div className="studio-copy">
            <p>We’re <strong>Itamar Shmaya</strong> and <strong>Michael Gissin</strong>, the two people behind G.S SoundLabs. We work with producers, agencies and creative teams from the first storyboard through to the final mix.</p>
          </div>
        </section>

        <section id="contact" className="contact" aria-labelledby="contact-heading">
          <div className="shell contact-inner">
            <div>
              <p className="eyebrow">Contact</p>
              <h2 id="contact-heading">Let’s talk sound.</h2>
              <p>Send us a brief, a rough cut, or a few lines about what you’re making.</p>
            </div>
            <a className="button contact-button" href={`mailto:${EMAIL}`}>
              {EMAIL} <ArrowUpRight size={18} aria-hidden="true" />
            </a>
          </div>
        </section>

        <BrandStrip />
      </main>
      <footer className="shell footer">
        <a href="#top"><Wordmark /></a>
        <small>© {new Date().getFullYear()} G.S SoundLabs</small>
      </footer>

      <dialog className="player-dialog" ref={dialog} aria-labelledby="player-title"
        onClose={() => setActiveProject(null)}
        onClick={(event) => { if (event.target === event.currentTarget) event.currentTarget.close(); }}
      >
        <div className="player-panel">
          <div className="player-header">
            <h2 id="player-title">{activeProject?.title}{activeProject?.edition ? ` — ${activeProject.edition}` : ""}</h2>
            <form method="dialog"><button className="player-close" aria-label="Close video"><X aria-hidden="true" /></button></form>
          </div>
          {activeProject && <>
            <iframe
              className="video-player"
              src={`https://player.vimeo.com/video/${activeProject.vimeoId}?autoplay=1&title=0&byline=0&portrait=0&dnt=1`}
              title={`${activeProject.title} video`}
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
            />
            <a className="player-link" href={`https://vimeo.com/${activeProject.vimeoId}`} target="_blank" rel="noopener noreferrer">
              Open on Vimeo <ArrowUpRight size={15} aria-hidden="true" />
            </a>
          </>}
        </div>
      </dialog>
    </div>
  );
}
