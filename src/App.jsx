
import "./App.css";

const projects = [
  {
    id: 1,
    name: "LUMÉ",
    category: "E-commerce Website",
    description:
      "A modern accessories store with a feminine and luxurious aesthetic.",
    tech: ["React", "JavaScript", "CSS"],
    className: "lume-card",
    label: "01",
    liveUrl: "https://lume-accessories.vercel.app/",
    githubUrl: "https://github.com/MariaNayer/lume-accessories",
  },
  {
    id: 2,
    name: "FridgeChef",
    category: "Recipe Web App",
    description:
      "A recipe app that helps users discover meals using the ingredients they have.",
    tech: ["React", "Vite", "CSS"],
    className: "fridge-card",
    label: "02",
    liveUrl:
      "https://fridge-chef-5g42cryzv-maria-s-projects-0dbe1.vercel.app/",
    githubUrl: "https://github.com/MariaNayer/FridgeChef",
  },
];

function App() {
  return (
    <div className="portfolio">
      <nav className="navbar">
        <a className="logo" href="#home">
          M<span>.</span>
        </a>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>

        <a className="nav-cta" href="#contact">
          Let's Talk <span>↗</span>
        </a>
      </nav>

      <main>
        {/* Hero section */}
        <section className="hero" id="home">
          <div className="hero-content">
            <div className="availability">
              <span className="status-dot"></span>
              AVAILABLE FOR OPPORTUNITIES
            </div>

            <h1>
              Hello, I'm
              <br />
              <span>Maria Nayer</span>
              <span className="period">.</span>
            </h1>

            <div className="creative-role">
              <div className="creative-label">
                <span className="creative-line"></span>
                <span>DESIGN MINDED. CODE DRIVEN.</span>
              </div>

              <div className="creative-title">
                <span className="creative-word">CREATIVE</span>

                <div className="creative-stack">
                  <span className="creative-outline">FRONT-END</span>
                  <span className="creative-solid">
                    DEVELOPER
                    <span className="creative-star">✳</span>
                  </span>
                </div>
              </div>
            </div>

            <p
              className="hero-description"
              style={{ fontSize: "15px", lineHeight: 1.9 }}
            >
              I build modern, responsive, and beautiful web experiences
              with a focus on details and user experience.
            </p>

            <div className="hero-buttons">
              <a className="primary-btn" href="#projects">
                Explore My Work <span>↗</span>
              </a>

              <a className="secondary-btn" href="#contact">
                Get in Touch
              </a>
            </div>

            <div className="hero-footer">
              <span>REACT DEVELOPER</span>
              <span className="footer-divider"></span>
              <span>BASED IN EGYPT</span>
            </div>
          </div>

          <div className="floating-stage">
            <div className="stage-glow"></div>
            <div className="orbit orbit-one"></div>
            <div className="orbit orbit-two"></div>

            <div className="floating-label label-top">
              <span className="label-spark">✳</span>
              Selected Work
            </div>

            <div className="floating-label label-bottom">
              <span>✦</span> Designed with passion
            </div>

            <article className="project-window project-back">
              <div className="window-top">
                <div className="window-dots">
                  <i></i>
                  <i></i>
                  <i></i>
                </div>
                <span>fridgechef.app</span>
                <span className="window-menu">•••</span>
              </div>

              <a
                className="fridge-preview"
                href={projects[1].liveUrl}
                target="_blank"
                rel="noreferrer"
                aria-label="Open FridgeChef website"
              >
                <div className="preview-nav">
                  <span className="preview-logo">FridgeChef</span>
                  <span className="preview-pill">Discover</span>
                </div>

                <div className="fridge-preview-content">
                  <span className="mini-kicker">
                    COOK SOMETHING GOOD
                  </span>
                  <h3>
                    What's in
                    <br />
                    your fridge?
                  </h3>
                  <p>Find recipes with what you have.</p>

                  <div className="ingredient-chips">
                    <span>Tomato</span>
                    <span>Eggs</span>
                    <span>+ More</span>
                  </div>
                </div>

                <div className="food-orb">🥑</div>
              </a>

              <div className="window-caption">
                <span className="caption-number">02</span>
                <div>
                  <strong>FridgeChef</strong>
                  <small>Recipe Discovery App</small>
                </div>
                <a
                  className="caption-arrow"
                  href={projects[1].liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Visit FridgeChef"
                >
                  ↗
                </a>
              </div>
            </article>

            <article className="project-window project-front">
              <div className="window-top">
                <div className="window-dots">
                  <i></i>
                  <i></i>
                  <i></i>
                </div>
                <span>lume-store.com</span>
                <span className="window-menu">•••</span>
              </div>

              <a
                className="lume-preview"
                href={projects[0].liveUrl}
                target="_blank"
                rel="noreferrer"
                aria-label="Open LUMÉ website"
              >
                <div className="lume-preview-nav">
                  <span className="lume-preview-logo">LUMÉ</span>
                  <span>COLLECTION&nbsp;&nbsp; ♡ &nbsp; BAG</span>
                </div>

                <div className="lume-preview-content">
                  <span className="lume-kicker">
                    THE EVERYDAY EDIT
                  </span>
                  <h3>
                    Little things.
                    <br />
                    <em>Lasting beauty.</em>
                  </h3>
                  <span className="shop-now">
                    DISCOVER THE COLLECTION ↗
                  </span>
                </div>

                <div className="jewelry-art">
                  <div className="jewelry-ring"></div>
                  <div className="jewelry-hoop"></div>
                  <div className="jewelry-gem"></div>
                  <div className="jewelry-spark">✧</div>
                </div>
              </a>

              <div className="window-caption">
                <span className="caption-number">01</span>
                <div>
                  <strong>LUMÉ</strong>
                  <small>Accessories E-commerce</small>
                </div>
                <a
                  className="caption-arrow"
                  href={projects[0].liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Visit LUMÉ"
                >
                  ↗
                </a>
              </div>
            </article>

            <div className="tech-float tech-react">
              <span>⚛</span> React.js
            </div>

            <div className="tech-float tech-code">
              <span>&lt;/&gt;</span> Clean Code
            </div>

            <div className="sparkle sparkle-one">✳</div>
            <div className="sparkle sparkle-two">✦</div>
          </div>
        </section>

        {/* Selected Projects */}
        <section className="projects-section" id="projects">
          <div className="projects-intro">
            <div className="projects-overline">
              <span className="projects-overline-line"></span>
              <span>01 / A COLLECTION OF MY WORK</span>
            </div>

            <div className="projects-heading-row">
              <h2 className="projects-display-title">
                Selected
                <br />
                <span>projects</span>
                <span className="projects-title-period">.</span>
              </h2>

              <div className="projects-heading-aside">
                <span className="projects-count">02</span>
                <p>
                  IDEAS TURNED
                  <br />
                  INTO EXPERIENCES.
                </p>
                <span className="projects-aside-star">✳</span>
              </div>
            </div>

            <p className="projects-intro-copy">
              A selection of digital experiences built with creativity,
              thoughtful details, and a love for clean interfaces.
            </p>
          </div>

          <div className="projects-grid">
            {projects.map((project) => (
              <article
                className={`project-card project-card-${project.id}`}
                key={project.id}
              >
                <a
                  className={`project-card-art ${project.className}`}
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Explore ${project.name} live website`}
                >
                  <div className="project-art-top">
                    <span className="project-card-number">
                      PROJECT / {project.label}
                    </span>
                    <span className="project-art-arrow">↗</span>
                  </div>

                  {project.id === 1 ? (
                    <div className="lume-artwork">
                      <span className="lume-art-orbit lume-art-orbit-one"></span>
                      <span className="lume-art-orbit lume-art-orbit-two"></span>

                      <div className="lume-art-caption">
                        <span>THE EVERYDAY EDIT</span>
                        <strong>
                          Little things.
                          <br />
                          <em>Lasting beauty.</em>
                        </strong>
                        <small>JEWELRY · DETAILS · YOU</small>
                      </div>

                      <div className="lume-art-jewelry">
                        <div className="lume-art-ring"></div>
                        <div className="lume-art-hoop"></div>
                        <div className="lume-art-gem"></div>
                        <span className="lume-art-spark lume-spark-one">✧</span>
                        <span className="lume-art-spark lume-spark-two">✳</span>
                      </div>

                      <span className="lume-art-wordmark">LUMÉ</span>
                    </div>
                  ) : (
                    <div className="fridge-artwork">
                      <div className="fridge-art-topline">
                        <span className="fridge-art-logo">
                          FridgeChef<span>.</span>
                        </span>
                        <span className="fridge-art-menu">
                          MENU&nbsp; ☰
                        </span>
                      </div>

                      <div className="fridge-art-copy">
                        <span>YOUR FRIDGE, YOUR RECIPES</span>
                        <strong>
                          What's in
                          <br />
                          your fridge<span>?</span>
                        </strong>
                        <small>GOOD FOOD STARTS HERE.</small>
                      </div>

                      <div className="fridge-art-ingredients">
                        <span className="ingredient ingredient-tomato">✿</span>
                        <span className="ingredient ingredient-leaf">✳</span>
                        <span className="ingredient ingredient-egg">◯</span>
                        <span className="ingredient ingredient-herb">✣</span>
                      </div>

                      <div className="fridge-art-bottom">
                        <span>FRESH IDEAS</span>
                        <span>01 — 02</span>
                      </div>
                    </div>
                  )}

                  <span className="project-art-bottom-label">
                    {project.category}
                  </span>
                </a>

                <div className="project-card-info">
                  <div className="project-card-title-row">
                    <div>
                      <span className="project-index">
                        SELECTED WORK — {project.label}
                      </span>
                      <h3>{project.name}</h3>
                    </div>

                    <span className="project-title-arrow">↗</span>
                  </div>

                  <p>{project.description}</p>

                  <div className="tech-list">
                    {project.tech.map((item) => (
                      <span key={item}>{item}</span>
                    ))}
                  </div>

                  <div className="project-card-footer">
                    <a
                      className="project-action primary-action"
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Explore Project <span>↗</span>
                    </a>

                    <a
                      className="project-action secondary-action"
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                    >
                      GitHub <span>↗</span>
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="projects-endnote">
            <span className="projects-endnote-star">✳</span>
            <span>MORE IDEAS. MORE THINGS TO BUILD.</span>
            <a href="#contact">LET'S CONNECT ↗</a>
          </div>
        </section>

        {/* Skills Section */}
        <section className="skills-section" id="skills">
          <div className="section-heading">
            <p className="eyebrow">WHAT I WORK WITH</p>
            <h2>
              My <span>Skills.</span>
            </h2>
            <p className="section-description">
              Technologies and tools I use to build modern web experiences.
            </p>
          </div>

          <div className="skills-grid">
            <div className="skill-card">
              <span className="skill-number">01</span>
              <h3>Frontend Development</h3>
              <div className="skill-tags">
                <span>HTML</span>
                <span>CSS</span>
                <span>JavaScript</span>
                <span>React</span>
                <span>Tailwind CSS</span>
                <span>Responsive Design</span>
              </div>
            </div>

            <div className="skill-card">
              <span className="skill-number">02</span>
              <h3>Tools & Technologies</h3>
              <div className="skill-tags">
                <span>Git</span>
                <span>GitHub</span>
                <span>VS Code</span>
                <span>Vite</span>
                <span>Local Storage</span>
                <span>Databases</span>
                <span>Strapi</span>
              </div>
            </div>


            <div className="skill-card">
              <span className="skill-number">03</span>
              <h3>Professional Skills</h3>
              <div className="skill-tags">
                <span>Problem Solving</span>
                <span>Teamwork</span>
                <span>Communication</span>
                <span>Time Management</span>
              </div>
            </div>
          </div>
        </section>


        {/* About section */}
        <section className="about-section" id="about">
          <p className="eyebrow">A LITTLE ABOUT ME</p>

          <h2>
            Turning ideas into digital
            <br />
            <span>experiences that matter.</span>
          </h2>

          <p>
            I'm Maria, a Management Information Systems graduate
            passionate about front-end development and creating
            modern, responsive websites. Through projects like
            LUMÉ and FridgeChef, I enjoy combining creativity
            with technology to build user-friendly experiences.
            I'm always learning, improving my skills, and looking
            for opportunities to grow as a developer.
          </p>
        </section>

        {/* Contact section */}
        <section className="contact-section" id="contact">
          <div>
            <p className="eyebrow">HAVE A PROJECT IN MIND?</p>

            <h2>
              Let's build something <span>great.</span>
            </h2>

            <p className="contact-description">
              I'm always open to discussing new projects, creative ideas,
              and opportunities to grow as a developer.
            </p>
          </div>

          <div className="connect-menu">
            <details>
              <summary className="primary-btn">
                Connect Me <span>↗</span>
              </summary>

              <div className="connect-options">
                <a
                  href="https://wa.me/201281299869"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>WhatsApp</span>
                  <span>↗</span>
                </a>

                <a
                  href="https://www.linkedin.com/in/maria-nayer-526374384"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>LinkedIn</span>
                  <span>↗</span>
                </a>
                <a href="mailto:marianayer93@gmail.com">
                  <span>Email Me</span>
                  <span>↗</span>
                </a>

              </div>
            </details>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <a className="logo" href="#home">
          M<span>.</span>
        </a>

        <p>Designed & built by Maria Nayer © 2026</p>

        <a href="#home">Back to top ↑</a>
      </footer>
    </div>
  );
}

export default App;