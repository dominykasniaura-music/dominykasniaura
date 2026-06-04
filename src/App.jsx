import { useEffect, useMemo, useState } from 'react'
import {
  Routes,
  Route,
  Link,
  useLocation,
} from 'react-router-dom'

import mainPortrait from './assets/main-page-profile-photo.jpg'
import dominykasPerforming from './assets/dominykas-performing.jpg'
import tolstaCover from './assets/tolsta-dominykas-niaura-rework.jpg'
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
import vitalijusReviewImage from './assets/vitalijus-gailius-review.png'
import emilijaReviewImage from './assets/emilija-visockaite-review.png'
import borealiscapeReviewImage from './assets/borealiscape-review.png'
import kalbaSvSultysImage from './assets/kalba-sv-sultys.png'
import syndae745Image from './assets/syndae-745.png'
import syndae753Image from './assets/syndae-753.png'

const contactEmail = 'dominykas.niaura@gmail.com'
const instagramUrl = 'https://www.instagram.com/dom.neura/'
const facebookUrl = 'https://www.facebook.com/domas.ni/'
const bandcampUrl = 'https://dominykasniaura.bandcamp.com/'
const koFiUrl = 'https://ko-fi.com/dominykasniaura'
const paypalUrl = 'https://paypal.me/dominykasniaura'

const projects = [
  {
    slug: 'dominykas-niaura',
    navTitle: 'dominykas niaura',
    title: 'dominykas niaura',
    years: '2018–present',
    tags: ['ambient', 'field recordings', 'trip-hop', 'dub'],
    summary:
      'Electronic music project blending ambient, field recordings, trip-hop, dub, and experimental sound design.',
    hero: dominykasPerforming,
    intro: [
      'dominykas niaura is an electronic music project blending ambient, field recordings, trip-hop, dub, and experimental sound design into atmospheric and emotionally driven compositions.',
      'The project explores themes of memory, longing, solitude, and mortality through collage-like production and textured environments with a cinematic feel – intimate and immersive, like pages lifted straight from a personal journal.',
      "dominykas niaura's works include bevietystė (2024), a concept album released by Electron Emitter; civilization shmivilization (2025), a guitar improvisation recording; Tolsta (dominykas niaura Rework) (2026), a reinterpretation of Sraigės Efektas' track Tolsta; Šokis įsuka šviesa (2021), a soundtrack for a poetry book; and palaima (2018), a mixtape of formative songs.",
    ],
    contact: contactEmail,
    links: [
      { label: 'Instagram', href: instagramUrl },
      { label: 'Bandcamp', href: bandcampUrl }
      { label: 'SoundCloud', href: 'https://soundcloud.com/niaura' },
      {
        label: 'Spotify',
        href: 'https://open.spotify.com/artist/61lGgboLfFJYSivn7p41zB?si=7jT65GxnTyuLGFibiN0EVw',
      },
      {
        label: 'Apple Music',
        href: 'https://music.apple.com/us/artist/dominykas-niaura/1214330878',
      },
      { label: 'YouTube', href: 'https://www.youtube.com/@niaurus' },
    ],
    works: [
      {
        title: 'Tolsta (dominykas niaura Rework)',
        year: '2026',
        type: 'REMIX',
        image: tolstaCover,
        text: [
          'A rework of "Tolsta" by Sraigės Efektas from their 2026 album Lobomatas.',
        ],
        links: [
          {
            label: 'Bandcamp',
            href: 'https://dominykasniaura.bandcamp.com/track/tolsta-dominykas-niaura-rework',
          },
          {
            label: 'YouTube',
            href: 'https://youtu.be/TF5uNNUMxRY?si=l4Y98D0z_waaD88K',
          },
          {
            label: 'SoundCloud',
            href: 'https://on.soundcloud.com/YsrTyY5r8kyS1F7Dkb',
          },
          {
            label: 'Spotify',
            href: 'https://open.spotify.com/track/2HS7LpUXtjgaGeAzMuUMk9?si=2383d1b16c94466a',
          },
        ],
      },
      {
        title: 'civilization shmivilization',
        year: '2025',
        type: 'single',
        image: civilizationCover,
        text: [
          'A half-hour guitar-and-effects improvisation that mutates, unravels, and rebuilds. A soundscape of collapse and renewal, where each new wave buries the last.',
        ],
        links: [
          {
            label: 'Bandcamp',
            href: 'https://dominykasniaura.bandcamp.com/album/civilization-shmivilization',
          },
          {
            label: 'YouTube',
            href: 'https://youtu.be/9Am6dHZRHUk?si=O-o8oDLYUdkVG5U4',
          },
          {
            label: 'SoundCloud',
            href: 'https://soundcloud.com/niaura/civilization-shmivilization',
          },
          {
            label: 'Spotify',
            href: 'https://open.spotify.com/track/0gbqqYcgKqxn1m5XXYBIzV?si=1c85f151cbe94c2f',
          },
          {
            label: 'Apple Music',
            href: 'https://music.apple.com/gb/song/civilization-shmivilization/1812063660',
          },
        ],
      },
      {
        title: 'bevietystė',
        year: '2024',
        type: 'album',
        meta: '2024 · album · Electron Emitter',
        image: bevietysteCover,
        text: [
          '"bevietystė" ("placelessness") tells a bittersweet docu-fictional story through field recordings, ambient, dub, electronic, and other musical experiments.',
          'Conceived in 2019, each track is dedicated to a different person, exploring the human condition via themes of mortality, the search for meaning, loneliness, loss, and more.',
          'The result is a deeply atmospheric piece that plays with the tension between memory, imagination, and the passage of time.',
          'Mixed & mastered by Electron Transition. Released by Electron Emitter (EEM073).',
        ],
        links: [
          {
            label: 'Bandcamp',
            href: 'https://dominykasniaura.bandcamp.com/album/bevietyst',
          },
          {
            label: 'YouTube',
            href: 'https://youtu.be/hRzDgdEHSkI?si=Qsr3CkAREQkARz93',
          },
          {
            label: 'SoundCloud',
            href: 'https://soundcloud.com/niaura/sets/bevietyste',
          },
          {
            label: 'Spotify',
            href: 'https://open.spotify.com/album/3YqrFi8XHFCECg9TrwXRHF?si=hScJUwL3RCCnLSw5cJATQg',
          },
          {
            label: 'Apple Music',
            href: 'https://music.apple.com/us/album/bevietyst%C4%97/1777521891',
          },
          {
            label: 'Electron Emitter',
            href: 'https://www.electronemitter.net/artists/dominykas-niaura/',
          },
        ],
      },
      {
        title: 'Šokis įsuka šviesą',
        year: '2021',
        type: 'poetry soundtrack',
        meta: '2021 · poetry soundtrack · Bazilisko ambasada',
        image: sokisCover,
        text: [
          'Poet Ramūnas Liutkevičius performs selected poems from his book "Šokis įsuka šviesą" with a soundtrack by dominykas niaura.',
        ],
        links: [
          {
            label: 'YouTube',
            href: 'https://youtu.be/mnunMsMraj8?si=8QhZ1eKNbhGYtZZU',
          },
          {
            label: 'Bazilisko ambasada',
            href: 'https://baziliskas.lt/produktas/sokis-isuka-sviesa',
          },
        ],
      },
      {
        title: 'palaima',
        year: '2019',
        type: 'mixtape',
        meta: '2019 · mixtape',
        image: palaimaCover,
        text: [
          '"palaima" ("bliss") is a compilation of early songs written, produced, and released chronologically, track by track, between 2017 and 2019.',
          'All the tracks are sonically bound together by using the closing textures of one piece to serve as the precise foundation for the next.',
          'Conceived and recorded across Vilnius, Kaunas, Tilburg, Amsterdam, Birštonas, Utrecht, and Paris.',
        ],
        links: [
          {
            label: 'Bandcamp',
            href: 'https://dominykasniaura.bandcamp.com/album/palaima',
          },
          {
            label: 'YouTube',
            href: 'https://youtu.be/ZjO3YpAETAg?si=hHzchh-4wViEgHWF',
          },
          {
            label: 'SoundCloud',
            href: 'https://soundcloud.com/niaura/sets/palaima',
          },
        ],
      },
    ],
    performances: [
      {
        year: '2024',
        date: 'October 25',
        title: 'dominykas niaura pristato: „bevietystė“',
        venue: 'Red Cat, Vilnius',
        href: 'https://www.facebook.com/events/983559240205372',
      },
      {
        year: '2025',
        date: 'March 25',
        title: 'Gretos Ambrazaitės skaitymai',
        venue: 'Kernagis Bar, Vilnius',
        href: 'https://www.facebook.com/events/1788936348567337',
      },
      {
        year: '2025',
        date: 'May 8',
        title: '„Pož(i)eminiai skaitymai XIII: TAS KITAS ŠOPENAS“',
        venue: 'Aludariai Story Cellar, Vilnius',
        href: 'https://www.facebook.com/events/684726384298852',
      },
      {
        year: '2025',
        date: 'May 17',
        title: 'Gatvės muzikos diena',
        venue: 'Jono Meko Skersvėjis, Vilnius',
        href: 'https://www.facebook.com/events/1033675724948076',
      },
      {
        year: '2025',
        date: 'May 20',
        title: 'support for Tavare (DE)',
        venue: 'XI20, Vilnius',
        href: 'https://www.facebook.com/events/1599373454039821',
      },
      {
        year: '2025',
        date: 'June 18',
        title: 'Poezijos ir muzikos performansas „Pro atvirus langus“',
        venue: 'Signatarų namai, Vilnius',
        href: 'https://www.facebook.com/events/1810437712850746',
      },
      {
        year: '2025',
        date: 'July 8',
        title: 'New Vilnius Review release',
        venue: 'CAC, Vilnius',
        href: 'https://www.facebook.com/events/4136286549960894',
      },
      {
        year: '2025',
        date: 'July 11',
        title: 'Yaga Gathering Festival',
        venue: 'Spengla',
        href: 'https://www.facebook.com/events/2424765631056194',
      },
      {
        year: '2025',
        date: 'August 14',
        title: 'Kombinatas Festival',
        venue: 'Vilkokšnio ež., Grendavė',
        href: 'https://www.facebook.com/events/569910382206875',
      },
      {
        year: '2025',
        date: 'September 6',
        title: 'Skaitymai iš J. Slovackio knygos',
        venue: 'Knygų mugė, Katedros aikštė, Vilnius',
      },
      {
        year: '2025',
        date: 'September 13',
        title: 'Loftas Fest',
        venue: 'Loftas, Vilnius',
        href: 'https://www.facebook.com/events/553032677169603',
      },
      {
        year: '2025',
        date: 'October 27',
        title: 'Minimal Mondays',
        venue: 'Draugų vardai, Vilnius',
        href: 'https://www.facebook.com/events/2252342518617775/',
      },
    ],
    media: [
      {
        type: 'Interview',
        title: 'Kalba šv. Sultys w/ Dominykas Niaura @ Radio Vilnius',
        date: '2025.11.12',
        href: 'https://radiovilnius.live/w-dominykas-niaura/',
        image: kalbaSvSultysImage,
      },
      {
        type: 'Review',
        title: '2024 m. II-ojo pusmečio lietuviškų albumų apžvalga (I dalis) by Vitalijus Gailius',
        date: '2025.11.03',
        href: 'https://www.mic.lt/lt/ivykiai/2025/11/03/2024-m-ii-ojo-pusmecio-lietuvisku-albumu-apzvalga-i-dalis/',
        image: vitalijusReviewImage,
      },
      {
        type: 'Featured',
        title: 'Music selection Episode 753 by syndae',
        date: '2025.02.07',
        href: 'https://www.syndae.de/episodes/1132-episode-753',
        image: syndae753Image,
      },
      {
        type: 'Featured',
        title: 'Music selection Episode 745 by syndae',
        date: '2024.12.13',
        href: 'https://www.syndae.de/episodes/1123-episode-745',
        image: syndae745Image,
      },
      {
        type: 'Review',
        title: 'Borealiscape review of bevietystė',
        date: '2024.12.08',
        href: 'https://agier.blogspot.com/2024/12/dominykas-niaura-bevietyste-2024.html',
        image: borealiscapeReviewImage,
      },
      {
        type: 'Mention',
        title: 'Emilija + 6 ryškiausi mėnesio albumai (25) on Emilija Visockaitė’s substack "Ausis"',
        date: '2024.10.26',
        href: 'https://emilijaviso.substack.com/p/emilija-6-ryskiausi-menesio-albumai',
        image: emilijaReviewImage,
      },
    ],
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
    summary: 'DJ and producer moniker for outsider dance music.',
    hero: nneuraProfile,
    intro: [
      'DJ and producer moniker for outsider dance music.',
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
    tags: ['radio', 'community'],
    summary:
      'Co-founder of independent online community radio station based in Vilnius.',
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

  {
    slug: 'miscellaneous',
    navTitle: 'Misc',
    title: 'Miscellaneous',
    years: '2005–present',
    tags: ['commercials', 'production', 'other'],
    summary:
      'Commercial commissions, production work, guest contributions, and other sonic projects.',
    hero: null,
    intro: [
      'Commercial commissions, production work, guest contributions, and other sonic projects.',
    ],
    links: [],
    works: [],
    media: [],
    comingSoon: true,
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
function CopyEmailButton({ email, className = '' }) {
  const [copied, setCopied] = useState(false)

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 1600)
    } catch {
      const fallback = document.createElement('textarea')
      fallback.value = email
      document.body.appendChild(fallback)
      fallback.select()
      document.execCommand('copy')
      document.body.removeChild(fallback)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 1600)
    }
  }

  return (
    <button
      type="button"
      className={`copy-email-button ${className}`.trim()}
      onClick={copyEmail}
      aria-label="Copy email address"
    >
      <span aria-hidden="true">⧉</span>
      {copied ? 'Copied' : email}
    </button>
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
              label="Instagram"
              href={instagramUrl}
            />

            <CopyEmailButton email={contactEmail} />
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
          {projects.map((project) => {
            const cardContent = (
              <>
                <div className="project-card-top">
                  <div>
                    <h3>{project.title}</h3>
                    {project.years && <p>{project.years}</p>}
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
              </>
            )

            if (project.slug === 'dominykas-niaura') {
              return (
                <Link
                  to={`/${project.slug}`}
                  key={project.slug}
                  className="project-card"
                >
                  {cardContent}
                </Link>
              )
            }

            return (
              <article
                key={project.slug}
                className="project-card project-card-static"
              >
                {cardContent}
              </article>
            )
          })}
        </div>
      </section>
    </>
  )
}

function ContactPage() {
  return (
    <section className="contact-page">
      <h1 className="project-title">Contact</h1>

      <div className="contact-copy-block">
        <p className="hero-text contact-text">
          For collaborations, bookings, commissions, or questions, get in touch.
        </p>

        <p className="contact-body-text">
          Available for live performances, media appearances, sound design,
          production and mixing work, field recording and foley projects, as
          well as commissions for literature, film, theatre, exhibitions,
          installations, and other interdisciplinary projects.
        </p>

        <p className="contact-body-text">
          I usually reply within a day.
        </p>
      </div>

      <div className="pill-row contact-button-row">
        <CopyEmailButton email={contactEmail} />

        <LinkPill
          label="Instagram"
          href={instagramUrl}
        />

        <LinkPill
          label="Facebook"
          href={facebookUrl}
        />
      </div>

      <section className="support-section">
        <div className="section-eyebrow accent">
          Support
        </div>

        <h2>Support my work</h2>

        <p>
          If you'd like to support future releases, field recordings, radio
          projects, and performances, you can get music on Bandcamp or make a
          voluntary contribution via Ko-fi or PayPal.
        </p>

        <div className="pill-row support-button-row">
          <LinkPill
            label="Bandcamp"
            href={bandcampUrl}
          />

          <LinkPill
            label="Ko-fi"
            href={koFiUrl}
          />

          <LinkPill
            label="PayPal"
            href={paypalUrl}
          />
        </div>
      </section>
    </section>
  )
}

function ProjectPage({ project }) {
  const performancesByYear = useMemo(() => {
    if (!project.performances?.length) {
      return []
    }

    return Object.entries(
      project.performances.reduce((grouped, performance) => {
        grouped[performance.year] = grouped[performance.year] || []
        grouped[performance.year].push(performance)
        return grouped
      }, {}),
    )
  }, [project.performances])

  const [expandedImage, setExpandedImage] = useState(null)

  return (
    <div>
      <section className="project-hero">
        {project.years && (
          <div className="section-eyebrow accent">
            {project.years}
          </div>
        )}

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
          {project.hero ? (
            <img
              src={project.hero}
              alt={project.title}
              className="project-main-image"
            />
          ) : (
            <div className="project-main-image placeholder" aria-hidden="true" />
          )}

          <div className="project-copy">
            {project.intro.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}

            <div className="pill-row top-gap">
              {project.links.map((link) => (
                <LinkPill key={link.href} {...link} />
              ))}
            </div>

            {project.contact && (
              <CopyEmailButton email={project.contact} />
            )}
          </div>
        </div>
      </section>

      {project.comingSoon && (
        <section className="content-section">
          <div className="coming-soon">
            Coming soon.
          </div>
        </section>
      )}

      {project.works?.length > 0 && (
        <section id="releases" className="content-section">
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
                    {work.meta || `${work.year} · ${work.type}`}
                  </span>
                </div>

                <div className="work-text">
                  {(Array.isArray(work.text) ? work.text : [work.text]).map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>

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
      )}

      {performancesByYear.length > 0 && (
        <section id="performances" className="content-section">
          <div className="section-title">
            <h2>Performances</h2>
          </div>

          <div className="performances-list">
            {performancesByYear.map(([year, performances]) => (
              <div key={year} className="performance-year-group">
                <div className="performance-year">{year}</div>

                <div className="performance-items">
                  {performances.map((performance) => (
                    <article
                      key={`${performance.date}-${performance.title}`}
                      className="performance-item"
                    >
                      <div className="performance-date">
                        {performance.date}
                      </div>

                      <div>
                        {performance.href ? (
                          <a
                            href={performance.href}
                            target="_blank"
                            rel="noreferrer"
                            className="performance-title"
                          >
                            {performance.title}
                          </a>
                        ) : (
                          <span className="performance-title">
                            {performance.title}
                          </span>
                        )}

                        <div className="performance-venue">
                          {performance.venue}
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {project.media?.length > 0 && (
        <section id="media" className="content-section">
          <div className="section-title">
            <h2>Media</h2>
          </div>

          <div className="media-grid">
            {project.media.map((item) => (
              <article
                key={`${item.date}-${item.title}`}
                className={item.image ? 'media-card media-card-with-image' : 'media-card'}
              >
                {item.image && (
                  <button
                    type="button"
                    className="media-image-button"
                    onClick={() => setExpandedImage(item)}
                    aria-label={`Expand image for ${item.title}`}
                  >
                    <img
                      src={item.image}
                      alt=""
                      className="media-image"
                      loading="lazy"
                    />
                  </button>
                )}

                <a
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="media-card-content"
                >
                  <div className="media-meta">
                    {item.type} · {item.date}
                  </div>

                  <h4>{item.title}</h4>
                </a>
              </article>
            ))}
          </div>

          {expandedImage && (
            <div
              className="image-lightbox"
              role="dialog"
              aria-modal="true"
              aria-label={expandedImage.title}
              onClick={() => setExpandedImage(null)}
            >
              <button
                type="button"
                className="image-lightbox-close"
                onClick={() => setExpandedImage(null)}
                aria-label="Close expanded image"
              >
                ×
              </button>

              <img
                src={expandedImage.image}
                alt={expandedImage.title}
                className="image-lightbox-image"
                onClick={(event) => event.stopPropagation()}
              />
            </div>
          )}
        </section>
      )}
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

            {projects
              .filter((project) => project.slug === 'dominykas-niaura')
              .map((project) => (
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

            <CopyEmailButton email={contactEmail} className="footer-copy-email" />
          </div>
        </footer>
      </div>
    </div>
  )
}
