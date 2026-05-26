import { useEffect, useMemo } from 'react'
import {
  Routes,
  Route,
  Link,
  useNavigate,
  useLocation,
} from 'react-router-dom'

import mainPortrait from './assets/main-page-profile-photo.jpg'
import dominykasPerforming from './assets/dominykas-performing.jpg'
import palaimaCover from './assets/palaima-2019.jpg'
import bevietysteCover from './assets/bevietyste-2024.jpg'
import civilizationCover from './assets/civilization-shmivilization-2025.jpg'
import sokisCover from './assets/sokis-isuka-sviesa.png'

import suicideoscopeProfile from './assets/suicideoscope-profile-photo.jpg'
import suicideoscopeCover from './assets/suicideoscope-self-titled.jpg'
import scopeCover from './assets/scope.jpg'

import nneuraProfile from './assets/nneura-profile-photo.jpg'
import uNeverKnewCover from './assets/u-never-knew.jpg'
import mustHaveUCover from './assets/must-have-u.jpg'

import transactionsProfile from './assets/transactions-profile-photo.jpg'
import commonPitfallsCover from './assets/the-common-pitfalls-of-fraud-and-infatuation.jpg'
import vilniusFullOfSpaceCover from './assets/vilnius-full-of-space.jpg'
import labasRytasCover from './assets/labas-rytas.jpg'

import estakadaProfile from './assets/estakada99-profile-photo.png'
import neurasticCover from './assets/neurastic-soundscapes.jpg'
import misadventuresCover from './assets/misadventures.jpg'

const contactEmail = 'dominykas.niaura@gmail.com'
const instagramUrl = 'https://www.instagram.com/dom.neura/'

const projects = [
  {
    slug: 'dominykas-niaura',
    navTitle: 'dominykas niaura',
    title: 'dominykas niaura',
    years: '2018–present',
    tags: ['ambient', 'field recordings', 'trip-hop', 'dub', 'experimental'],
    summary:
      'Electronic music artist drifting between field recordings, ambient, trip-hop, dub, and experimental music.',
    hero: dominykasPerforming,
    intro: [
      'dominykas niaura is an electronic music artist whose work drifts between field recordings, ambient, trip-hop, dub, and experimental music to create soundscapes that feel like entries from a personal journal.',
    ],
    links: [
      { label: 'Instagram', href: instagramUrl },
      { label: 'Bandcamp', href: 'https://dominykasniaura.bandcamp.com/' },
    ],
    works: [
      {
        title: 'civilization shmivilization',
        year: '2025',
        type: 'single',
        image: civilizationCover,
        text: 'A half-hour improvisation built around guitar and effects.',
        links: [
          {
            label: 'Bandcamp',
            href: 'https://dominykasniaura.bandcamp.com/album/civilization-shmivilization',
          },
        ],
      },
      {
        title: 'bevietystė',
        year: '2024',
        type: 'album',
        image: bevietysteCover,
        text:
          'A bittersweet docu-fictional story through field recordings, ambient, dub, and electronic experiments.',
        links: [
          {
            label: 'Bandcamp',
            href: 'https://dominykasniaura.bandcamp.com/album/bevietyst',
          },
        ],
      },
      {
        title: 'Šokis įsuka šviesą',
        year: '2021',
        type: 'poetry soundtrack',
        image: sokisCover,
        text:
          'Poet Ramūnas Liutkevičius performs selected poems with a soundtrack by dominykas niaura.',
        links: [],
      },
      {
        title: 'palaima',
        year: '2019',
        type: 'album',
        image: palaimaCover,
        text:
          'A compilation of early songs written between 2017 and 2019.',
        links: [
          {
            label: 'Bandcamp',
            href: 'https://dominykasniaura.bandcamp.com/album/palaima',
          },
        ],
      },
    ],
    media: [],
  },

  {
    slug: 'suicideoscope',
    navTitle: 'Suicideoscope',
    title: 'Suicideoscope',
    years: '2012–present',
    tags: ['experimental electronic', 'cloud rap', 'lo-fi'],
    summary:
      'A chronic solo project designed to materialize dramas and reinvent itself every step of the way.',
    hero: suicideoscopeProfile,
    intro: [
      'A chronic solo project designed to materialize dramas and reinvent itself every step of the way.',
    ],
    links: [
      { label: 'Bandcamp', href: 'https://suicideoscope.bandcamp.com/' },
    ],
    works: [
      {
        title: 'Scope',
        year: '2022',
        type: 'album',
        image: scopeCover,
        text:
          'Confessional storytelling moving through societal distrust, mental health, and self-analysis.',
        links: [
          {
            label: 'Bandcamp',
            href: 'https://suicideoscope.bandcamp.com/album/scope',
          },
        ],
      },
      {
        title: 'Suicideoscope',
        year: '2017',
        type: 'album',
        image: suicideoscopeCover,
        text:
          'A debut self-titled album exploring identity, anxiety, and hedonism.',
        links: [
          {
            label: 'Bandcamp',
            href: 'https://suicideoscope.bandcamp.com/album/suicideoscope',
          },
        ],
      },
    ],
    media: [],
  },

  {
    slug: 'nneura',
    navTitle: 'Nneura',
    title: 'Nneura',
    years: '2016–present',
    tags: ['deep house', 'dub techno', 'leftfield house'],
    summary: 'outsider inside and out',
    hero: nneuraProfile,
    intro: [
      'Nneura explores house and techno from a more intimate angle.',
    ],
    links: [
      { label: 'Bandcamp', href: 'https://nneura.bandcamp.com/' },
    ],
    works: [
      {
        title: 'U Never Knew',
        year: '2022',
        type: 'EP',
        image: uNeverKnewCover,
        text: 'Dubby and leftfield club textures.',
        links: [
          {
            label: 'Bandcamp',
            href: 'https://nneura.bandcamp.com/album/u-never-knew',
          },
        ],
      },
      {
        title: 'Must Have U',
        year: '2019',
        type: 'EP',
        image: mustHaveUCover,
        text: 'Outsider house balancing groove and melancholy.',
        links: [
          {
            label: 'Bandcamp',
            href: 'https://nneura.bandcamp.com/album/must-have-u',
          },
        ],
      },
    ],
    media: [],
  },

  {
    slug: 'transactions',
    navTitle: 'Transactions',
    title: 'Transactions',
    years: '2014–2024',
    tags: ['post-punk', 'indie rock', 'noise rock'],
    summary: 'Four-piece indie post-punk that sounds like no fun.',
    hero: transactionsProfile,
    intro: [
      'Transactions is a four-piece indie post-punk band from Vilnius.',
    ],
    links: [
      { label: 'Bandcamp', href: 'https://transactions.bandcamp.com/music' },
    ],
    works: [
      {
        title: 'The Common Pitfalls of Fraud and Infatuation',
        year: '2022',
        type: 'album',
        image: commonPitfallsCover,
        text: 'A tense and emotionally direct full-length release.',
        links: [],
      },
      {
        title: 'Vilnius Full of Space',
        year: '2020',
        type: 'EP',
        image: vilniusFullOfSpaceCover,
        text: 'An earlier snapshot of the band’s sharper tension.',
        links: [],
      },
      {
        title: 'Labas Rytas',
        year: '2020',
        type: 'single',
        image: labasRytasCover,
        text: 'Standalone early-era release.',
        links: [],
      },
    ],
    media: [],
  },

  {
    slug: 'estakada99',
    navTitle: 'estakada99',
    title: 'estakada99',
    years: '2025–present',
    tags: ['community radio', 'Vilnius'],
    summary:
      'Independent online radio station established in Vilnius in 2025.',
    hero: estakadaProfile,
    intro: [
      'Independent online radio station broadcasting from studios, homes, and venues across Vilnius and beyond.',
    ],
    links: [
      { label: 'Website', href: 'https://www.e99.live' },
    ],
    works: [
      {
        title: 'NEURASTIC SOUNDSCAPES OR HOW TO MAKE AMBIENT',
        year: '2025–present',
        type: 'radio show',
        image: neurasticCover,
        text:
          'Live hardware jam broadcasts and process-based conversations.',
        links: [],
      },
      {
        title: 'MISADVENTURES',
        year: '2025–present',
        type: 'radio show',
        image: misadventuresCover,
        text:
          'Outdoor conversations about life with music in the background.',
        links: [],
      },
    ],
    media: [],
  },
]

function LinkPill({ label, href }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="link-pill"
    >
      {label}
    </a>
  )
}

function HomePage() {
  return (
    <>
      <section className="hero-grid">
        <div className="hero-copy-col">
          <h1>Dominykas Niaura</h1>

          <p className="hero-text">
            Composer, producer, sound artist, performer, and radio show maker
            from Vilnius.
          </p>

          <div className="hero-spacer" />

          <div className="pill-row">
            <LinkPill
              label="Email"
              href={`mailto:${contactEmail}`}
            />
          </div>
        </div>

        <div className="hero-portrait-shell">
          <img
            src={mainPortrait}
            alt="Dominykas Niaura"
            className="hero-portrait"
          />
        </div>
      </section>

      <section className="content-section">
        <div className="section-title">
          <h2>Projects</h2>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <Link
              to={`/${project.slug}`}
              key={project.slug}
              className="project-card"
            >
              <div className="project-card-top">
                <div>
                  <h3>{project.title}</h3>
                  <p>{project.years}</p>
                </div>
              </div>

              <div className="project-card-body">
                <p>{project.summary}</p>

                <div className="tag-list">
                  {project.tags.map((tag) => (
                    <span key={tag} className="tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  )
}

function ContactPage() {
  return (
    <section className="contact-page">
      <h1 className="project-title">Contact</h1>

      <p className="hero-text contact-text">
        For collaborations, bookings, commissions, or questions, get in touch.
      </p>

      <div className="pill-row">
        <LinkPill
          label="Email"
          href={`mailto:${contactEmail}`}
        />

        <LinkPill
          label="Instagram"
          href={instagramUrl}
        />
      </div>
    </section>
  )
}

function ProjectPage({ project }) {
  const navigate = useNavigate()

  return (
    <div className="project-layout">
      <aside className="sidebar-shell">
        <div className="sidebar-card">
          <button
            onClick={() => navigate('/')}
            className="back-button"
          >
            ← Back to main page
          </button>

          <div className="section-eyebrow">Projects</div>

          <div className="sidebar-nav">
            {projects.map((entry) => (
              <Link
                key={entry.slug}
                to={`/${entry.slug}`}
                className={
                  entry.slug === project.slug
                    ? 'sidebar-link active'
                    : 'sidebar-link'
                }
              >
                {entry.title}
              </Link>
            ))}

            <Link to="/contact" className="sidebar-link">
              Contact
            </Link>
          </div>
        </div>
      </aside>

      <div>
        <section className="project-hero">
          <div className="section-eyebrow accent">
            {project.years}
          </div>

          <h1 className="project-title">
            {project.title}
          </h1>

          <div className="tag-list project-tags">
            {project.tags.map((tag) => (
              <span key={tag} className="tag">
                {tag}
              </span>
            ))}
          </div>

          <div className="project-intro-grid">
            <img
              src={project.hero}
              alt={project.title}
              className="project-main-image"
            />

            <div className="project-copy">
              {project.intro.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}

              <div className="pill-row top-gap">
                {project.links.map((link) => (
                  <LinkPill key={link.href} {...link} />
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="content-section">
          <div className="section-title">
            <h2>Releases</h2>
          </div>

          <div className="works-list">
            {project.works.map((work) => (
              <article key={work.title} className="work-card">
                <img
                  src={work.image}
                  alt={work.title}
                  className="work-image"
                />

                <div>
                  <div className="work-header">
                    <h4>{work.title}</h4>

                    <span className="work-meta">
                      {work.year} · {work.type}
                    </span>
                  </div>

                  <p className="work-text">{work.text}</p>

                  <div className="pill-row">
                    {work.links.map((link) => (
                      <LinkPill
                        key={link.href}
                        {...link}
                      />
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}

function RouterView() {
  const location = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />

      <Route
        path="/contact"
        element={<ContactPage />}
      />

      {projects.map((project) => (
        <Route
          key={project.slug}
          path={`/${project.slug}`}
          element={<ProjectPage project={project} />}
        />
      ))}
    </Routes>
  )
}

export default function App() {
  useEffect(() => {
    document.title =
      'Dominykas Niaura audio work portfolio'
  }, [])

  return (
    <div className="site-shell">
      <div className="site-inner">
        <header className="site-header">
          <Link to="/" className="brand-button">
            <div className="brand-name">
              Dominykas Niaura
            </div>

            <div className="brand-subtitle">
              Audio work portfolio
            </div>
          </Link>

          <nav className="top-nav">
            <Link to="/">Home</Link>

            {projects.map((project) => (
              <Link
                key={project.slug}
                to={`/${project.slug}`}
              >
                {project.navTitle}
              </Link>
            ))}

            <Link to="/contact">Contact</Link>
          </nav>
        </header>

        <main>
          <RouterView />
        </main>

        <footer className="site-footer">
          <p>Dominykas Niaura · Vilnius, Lithuania</p>

          <div className="footer-links">
            <a
              href={instagramUrl}
              target="_blank"
              rel="noreferrer"
            >
              Instagram
            </a>

            <a href={`mailto:${contactEmail}`}>
              Email
            </a>
          </div>
        </footer>
      </div>
    </div>
  )
}
