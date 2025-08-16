<script lang="ts">
  const MsPerDay = (1000 * 60 * 60 * 24) as const;
  const Navigation = {
    Home: "Home",
    OurStory: "Our Story",
    Gallery: "Gallery",
    Details: "Details",
    RSVP: "RSVP",
  } as const;
  const mainNav: [string, string][] = Object.values(Navigation).map(
    (text) => [`#${toId(text)}`, text] as const,
  );
  const weddingDate = new Date("2026-05-31 1:00 PM GMT-0400");
  const rsvpBy = new Date("2026-02-22 12:00 PM GMT-0400");
  const now = new Date();
  const daysToWedding = Math.floor(
    (weddingDate.getTime() - now.getTime()) / MsPerDay,
  );

  function toId(value: string): string {
    return value.replace(" ", "-").toLowerCase();
  }
</script>

<main>
  <header>
    <nav>
      <ul>
        {#each mainNav as [href, text]}
          <li><a {href}>{text}</a></li>
        {/each}
      </ul>
    </nav>
  </header>
  <article>
    <header id={toId(Navigation.Home)}>
      <h1>Join us for the wedding of Samuel and Jessica</h1>
      <p>{weddingDate.toLocaleDateString()}</p>
      <button>RSVP</button>
    </header>
    <section id={toId(Navigation.OurStory)}>
      <h1>Our Story</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras euismod
        vestibulum mauris, eu porttitor urna sollicitudin volutpat. Nullam
        sagittis condimentum magna eget varius. Sed at maximus lectus. Vivamus
        dictum nibh ac sapien tempus elementum. Donec auctor nisi sit amet
        accumsan eleifend. Sed orci libero, convallis maximus consectetur in,
        semper at libero. Donec vehicula viverra elementum. Phasellus eu porta
        risus, at rutrum purus. Morbi nec nisl luctus, consequat arcu nec,
        vehicula enim. Quisque porta non est at luctus. Donec ut dolor lacinia,
        luctus est in, tincidunt mauris. Cras quis maximus sapien, sit amet
        molestie neque.
      </p>
      <p>
        Praesent eu dolor tincidunt eros lobortis vulputate. Nulla consectetur,
        leo sed ultricies vestibulum, enim urna euismod lacus, et mattis nisl
        erat in nunc. Curabitur sit amet libero eleifend, blandit enim eleifend,
        eleifend urna. Integer sed pharetra odio, at imperdiet est. Sed
        tincidunt lorem nec erat rutrum, a bibendum mauris pretium. Aenean
        finibus posuere lorem ultricies venenatis. Quisque at libero at ante
        volutpat tempor. Donec dictum commodo tellus, vitae bibendum dui
        tristique nec. Quisque eget risus iaculis, lobortis ante sit amet,
        vestibulum tortor. Morbi fermentum semper tristique. Nunc pellentesque
        vitae elit eu vulputate. Etiam in neque tristique, euismod mi eget,
        ullamcorper ante. Sed ornare felis neque, a laoreet nibh sollicitudin
        vitae.
      </p>
      <i>Sam & Jess</i>
    </section>
    <article id={toId(Navigation.Gallery)}>
      <nav>
        <ul>
          <li>
            <i>&hearts;</i>
            <span>Love Goes On and On, Ooohhh Oooo Ohh</span>
            <button>&times;</button>
          </li>
          <li><span>&nbsp;</span><button>&plus;</button></li>
        </ul>
      </nav>
      <section>
        <h1>Here's a look back!</h1>
        <div>
          {#each Array(5).fill(undefined) as _, i}
            <img src="https://placehold.co/250x250/png" alt={`img ${i}`} />
          {/each}
        </div>
      </section>
    </article>
    <section id={toId(Navigation.Details)}>
      <h1>Details</h1>
      <section>
        <aside>
          <h2>Accomodations</h2>
          <p>
            Rooms have been blocked at the Wingate by Wyndham hotel. Call <a
              href="tel:+7048468000">704-846-8000</a
            > and reference Samuel & Jessica's wedding.
          </p>
          <button>Book</button>
        </aside>
        <aside>
          <h2>Schedule</h2>
          <p>
            The Ceremony begins at 2:00 PM followed by a grazing hour, dinner,
            and dancing. We wrap up by 7pm.
          </p>
        </aside>
        <aside>
          <h2>Venue</h2>
          <p>The venue has free parking with plenty of room for all guests.</p>
        </aside>
        <aside>
          <h2>Attire</h2>
          <p>
            We are going for dressed up-casual. The ceremony is outdoors, so
            dress comfortably for the temperature. Bright/nature-y colors are
            encouraged!
          </p>
        </aside>
        <aside>
          <h2>Kids</h2>
          <p>
            We are only able to accomodate children listed in your invitation.
            Please enjoy your night off!
          </p>
        </aside>
      </section>
      <section>
        <aside>
          <h2>The Day After</h2>
          <p>
            Sam and I are staying in town for a few days before we leave for our
            honeymoon. Any out-of-town guests who want to keep the party going,
            let's set something up!
          </p>
        </aside>
        <aside>
          <h2>Explore Charlotte</h2>
          <p>Here's a few ideas of fun things to do while you're here!</p>
          <ul>
            {#each ["foo", "bar", "qux"] as item}
              <li>{item}</li>
            {/each}
          </ul>
        </aside>
        <aside>
          <h2>Gifts</h2>
          <p>
            Your presence is the real present! But, if you'd like to give a
            little something extra, a contribution towards our honeymoon would
            be appreciated.
          </p>
          <p>A card box will be available at the wedding.</p>
        </aside>
      </section>
      <footer>
        <img src="https://placehold.co/100x150/png" alt="Jessica" />
        <img src="https://placehold.co/100x150/png" alt="Samuel" />
        <aside>
          <span>Countdown to<br />"I DO!"</span>
          <span>
            <output>{daysToWedding}</output> days
          </span>
        </aside>
      </footer>
    </section>
    <footer id={Navigation.RSVP}>
      <p>
        Please RSVP by {rsvpBy.toLocaleDateString("en-US", {
          month: "long",
          day: "2-digit",
        })}.
      </p>
      <p>We're excited to celebrate with you!</p>
      <button>RSVP</button>
    </footer>
  </article>
</main>

<style>
  :root {
    --color-default: gray;
    --color-primary: darkslateblue;
    font-family: monospace, sans-serif;
  }

  :global(body) {
    margin: 0;
  }

  main {
    color: var(--color-default);
    background-color: antiquewhite;
  }

  h1 {
    color: var(--color-primary);
    text-align: center;
    text-transform: lowercase;
  }

  nav ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    display: flex;
    color: var(--color-primary);
    text-transform: lowercase;
  }

  nav ul a {
    text-decoration: none;
    display: block;
    padding: 1em;
    color: var(--color-primary);
  }

  nav ul a:visited {
    color: var(--color-primary);
  }

  header nav ul {
    justify-content: space-evenly;
  }

  button {
    color: white;
    background-color: red;
    border: 0;
    border-radius: 0.25em;
    filter: drop-shadow(0em 0.5em darkred);
  }
  button:active {
    animation: on-press 0.1s forwards;
  }

  @keyframes on-press {
    100% {
      transform: translateY(0.5em);
      filter: none;
    }
  }

  section {
    padding: 1em;
  }

  article > header,
  article > footer {
    background-color: skyblue;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  article > header {
    border-bottom: 0.25em solid gold;
  }

  article > footer button {
    margin-bottom: 1em;
  }

  a {
    text-wrap: nowrap;
  }

  #gallery {
    border: 0.15em inset lightgray;
  }

  #gallery section {
    max-height: 350px;
    overflow-y: scroll;
    background-color: white;
  }

  #gallery section div {
    display: flex;
    flex-wrap: wrap;
    gap: 1em;
  }

  #gallery {
    margin: 1em;
    background-color: palegoldenrod;
  }

  #gallery ul li {
    background-color: gold;
    color: white;
    border-radius: 0.25em;
    filter: drop-shadow(-0.1em 0.1em 0.1em rgba(0, 0, 0, 0.1));
    text-shadow: -0.1em 0.1em 0.1em rgba(0, 0, 0, 0.1);
    margin: 0.5em;
  }

  #gallery ul button {
    background-color: transparent;
    text-shadow: -0.1em 0.1em 0.1em rgba(0, 0, 0, 0.1);
    filter: none;
  }

  #gallery img {
    max-width: 30%;
    border: 0.15em inset lightgray;
  }

  #details section {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    text-align: center;
  }

  #details section:nth-of-type(1) aside {
    max-width: 45%;
    min-width: 20ch;
  }

  #details section aside ul {
    justify-self: start;
  }

  #details footer {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1em;
  }

  #details footer aside {
    border: 0.1em solid var(--color-primary);
    border-radius: 1em;
    display: flex;
    gap: 1em;
    padding: 1em;
    align-items: end;
    text-align: center;
  }
</style>
