import '@picocss/pico/css/pico.min.css'
import './style.css'

import venues from './data/venues.js'
import renderVenue from './pages/venues.js'
import renderNotFound from './pages/notFound.js'

const app = document.querySelector('#app')

const renderHome = () => {
  app.innerHTML = `
    <main class="container">
      <header>
        <h1>Virginia Music Venues</h1>
        <p>Discover live music venues across Virginia 🎵</p>
      </header>

      <section class="venue-grid">
        ${venues.map((venue) => `
          <article class="venue-card">
            <a href="/venues/${venue.slug}">
              <img
                src="${venue.image}"
                alt="${venue.name}"
              >

              <h2>${venue.name}</h2>

              <p>
                <strong>Location:</strong>
                ${venue.city}, ${venue.state}
              </p>

              <p>
                <strong>Type:</strong>
                ${venue.type}
              </p>

              <p>
                <strong>Capacity:</strong>
                ${venue.capacity.toLocaleString()}
              </p>
            </a>
          </article>
        `).join('')}
      </section>
    </main>
  `
}

const handleRoute = () => {
  const path = window.location.pathname

  // Homepage
  if (path === '/') {
    renderHome()
    return
  }

  // Individual venue
  if (path.startsWith('/venues/')) {
    const slug = path.split('/')[2]

    const venue = venues.find((venue) => venue.slug === slug)

    if (venue) {
      app.innerHTML = renderVenue(venue)
    } else {
      app.innerHTML = renderNotFound()
    }

    return
  }

  // Anything else
  app.innerHTML = renderNotFound()
}

handleRoute()