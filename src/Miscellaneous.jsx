import { useEffect, useState } from 'react'
import './Miscellaneous.css'

const categories = [
  {
    id: 'commissions',
    title: 'Commissions and soundtracks',
    description: 'Original music for campaigns, promotional films, and literature.',
  },
  {
    id: 'production',
    title: 'Production and collaborations',
    description: 'Production, mixing, and mastering for other artists and projects.',
  },
  {
    id: 'live',
    title: 'Live and interdisciplinary work',
    description: 'Sound and performance in conversation with other art forms.',
  },
  {
    id: 'contributions',
    title: 'Guest contributions and early work',
    description: 'Instrumental and vocal contributions to other releases.',
  },
]

const works = [
  {
    title: 'Tėvynės DNR',
    client: 'Partizanų Lietuva',
    date: '2025-11-10',
    category: 'commissions',
    role: 'Original music',
    description: 'Soundtrack for a competition promotional video.',
    url: 'https://www.facebook.com/share/v/19bpqcfY7M/',
    source: 'Facebook',
  },
  {
    title: 'Samaningi kilometrai',
    client: 'National defence initiative',
    date: '2025-04-22',
    category: 'commissions',
    role: 'Original music',
    description: 'Soundtrack for a promotional video.',
    url: 'https://www.youtube.com/watch?v=43Rxxy1sya8',
    youtubeId: '43Rxxy1sya8',
    source: 'YouTube',
  },
  {
    title: 'Saulės gojus',
    client: 'Saulės gojus gymnasium',
    date: '2024-10-01',
    category: 'commissions',
    role: 'Original music',
    description: 'Soundtrack for a promotional film.',
    url: 'https://www.facebook.com/watch/?v=2503385686531043',
    source: 'Facebook',
  },
  {
    title: 'Šokis įsuka šviesą',
    client: 'Ramūnas Liutkevičius',
    date: '2022-05-31',
    category: 'commissions',
    role: 'Original music',
    description: 'Musical soundtrack accompanying a poetry book.',
    url: 'https://www.youtube.com/watch?v=mnunMsMraj8',
    youtubeId: 'mnunMsMraj8',
    source: 'YouTube',
  },
  {
    title: '#NežinaiNeskauda',
    client: 'Tušti narvai',
    date: '2021-03-10',
    category: 'commissions',
    role: 'Original music',
    description: 'Soundtrack for an awareness campaign.',
    url: 'https://www.youtube.com/watch?v=29_2LVdwEK0',
    youtubeId: '29_2LVdwEK0',
    source: 'YouTube',
  },
  {
    title: 'kūnai',
    client: 'pjesė',
    date: '2026-07-31',
    category: 'production',
    role: 'Production, mixing and mastering',
    url: 'https://www.youtube.com/watch?v=WWmX9Bsy0fo',
    youtubeId: 'WWmX9Bsy0fo',
    source: 'YouTube',
  },
  {
    title: 'daugiau negu gana',
    client: 'dadcap',
    date: '2023-02-15',
    category: 'production',
    role: 'Additional production',
    url: 'https://www.youtube.com/watch?v=dCrvAZjDI8E',
    youtubeId: 'dCrvAZjDI8E',
    source: 'YouTube',
  },
  {
    title: 'Echogramos',
    client: 'Contemporary Lithuanian poetry audio platform',
    date: '2020-12-28',
    category: 'production',
    role: 'Mixing',
    description: 'Mixing for recordings of contemporary Lithuanian poetry.',
    url: 'https://www.slinktys.lt/echogramos.htm',
    source: 'Visit project',
  },
  {
    title: 'Pož(i)eminiai skaitymai XIII: Tas kitas Šopenas',
    date: '2025-05-08',
    category: 'live',
    role: 'Live soundtrack performance',
    description: 'Live musical accompaniment for 11 poetry readings.',
    url: 'https://www.youtube.com/watch?v=Oo6qtNCFh98',
    youtubeId: 'Oo6qtNCFh98',
    source: 'YouTube',
  },
  {
    title: 'perfectly fine',
    client: 'dadcap',
    date: '2019-02-11',
    category: 'contributions',
    role: 'Bass guitar and backing vocals',
    url: 'https://www.youtube.com/watch?v=8EIrZ3b13GQ',
    youtubeId: '8EIrZ3b13GQ',
    source: 'YouTube',
  },
  {
    title: 'Vienas rimtas',
    client: 'Arklio galia',
    date: '2008',
    category: 'contributions',
    role: 'Drums',
    description: 'Album performance.',
    url: 'https://www.pakartot.lt/album/vienas-rimtas',
    source: 'Listen on Pakartot',
  },
]

function WorkEntry({ work }) {
  const [playing, setPlaying] = useState(false)
  const year = work.date.slice(0, 4)

  return (
    <article className="misc-work">
      <div className="misc-work-date">{year}</div>
      <div className="misc-work-content">
        <div className="misc-work-head">
          <div>
            <h3>{work.title}</h3>
            {work.client && <p className="misc-work-client">{work.client}</p>}
          </div>
          <span className="misc-work-role">{work.role}</span>
        </div>
        {work.description && <p className="misc-work-description">{work.description}</p>}

        {work.youtubeId && (
          <div className="misc-video">
            {playing ? (
              <iframe
                src={`https://www.youtube-nocookie.com/embed/${work.youtubeId}?autoplay=1`}
                title={`${work.title} video`}
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            ) : (
              <button
                type="button"
                className="misc-video-preview"
                style={{ backgroundImage: `linear-gradient(rgba(0,0,0,.16), rgba(0,0,0,.48)), url(https://i.ytimg.com/vi/${work.youtubeId}/hqdefault.jpg)` }}
                onClick={() => setPlaying(true)}
                aria-label={`Play ${work.title}`}
              >
                <span className="misc-play-icon" aria-hidden="true">▶</span>
                <span className="misc-preview-caption">Play video</span>
              </button>
            )}
          </div>
        )}

        <a className="misc-source" href={work.url} target="_blank" rel="noopener noreferrer">
          {work.source === 'YouTube' ? 'Watch on YouTube' : work.source === 'Facebook' ? 'Watch on Facebook' : work.source}
          <span aria-hidden="true">↗</span>
        </a>
      </div>
    </article>
  )
}

export default function MiscellaneousPage() {
  useEffect(() => {
    const previousTitle = document.title
    document.title = 'Miscellaneous | Dominykas Niaura'
    let robots = document.querySelector('meta[name="robots"]')
    const created = !robots
    if (!robots) {
      robots = document.createElement('meta')
      robots.name = 'robots'
      document.head.appendChild(robots)
    }
    const previousRobots = robots.content
    robots.content = 'noindex, nofollow'
    return () => {
      document.title = previousTitle
      if (created) robots.remove()
      else robots.content = previousRobots
    }
  }, [])

  return (
    <div className="misc-page">
      <header className="misc-intro">
        <div className="section-eyebrow accent">Selected collaborations · 2008–2026</div>
        <h1 className="project-title">Miscellaneous</h1>
        <p>
          Commissions, production work, guest contributions, and other sonic projects
          beyond my own releases.
        </p>
      </header>
      <div className="misc-sections">
        {categories.map((category) => (
          <section className="misc-category" key={category.id} id={category.id}>
            <div className="misc-category-intro">
              <h2>{category.title}</h2>
              <p>{category.description}</p>
            </div>
            <div className="misc-work-list">
              {works
                .filter((work) => work.category === category.id)
                .sort((a, b) => b.date.localeCompare(a.date))
                .map((work) => <WorkEntry key={work.url} work={work} />)}
            </div>
          </section>
        ))}
      </div>
    </div>
  )
}
