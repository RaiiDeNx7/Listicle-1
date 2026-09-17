const renderNotFound = () => {
  return `
    <main class="container">
      <article class="not-found">
        <h1>404</h1>

        <h2>Venue Not Found</h2>

        <p>
          Sorry, we couldn't find the venue you're looking for.
        </p>

        <a href="/" role="button">
          Return Home
        </a>
      </article>
    </main>
  `
}

export default renderNotFound