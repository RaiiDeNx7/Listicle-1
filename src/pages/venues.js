const renderVenue = (venue) => {
  return `
    <main class="container">
      <nav>
        <a href="/">← Back to Venues</a>
      </nav>

      <article class="venue-detail">
        <img
          src="${venue.image}"
          alt="${venue.name}"
        >

        <h1>${venue.name}</h1>

        <p>
          <strong>Location:</strong>
          ${venue.city}, ${venue.state}
        </p>

        <p>
          <strong>Venue Type:</strong>
          ${venue.type}
        </p>

        <p>
          <strong>Capacity:</strong>
          ${venue.capacity.toLocaleString()}
        </p>

        <p>
          <strong>Description:</strong>
          ${venue.description}
        </p>
      </article>
    </main>
  `
}

export default renderVenue