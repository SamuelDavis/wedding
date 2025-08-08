<script lang="ts">
  const Navigation = {
    Home: "Home",
    OurStory: "Our Story",
    Gallery: "Gallery",
    Details: "Details",
    RSVP: "RSVP",
  };
  const mainNav: [string, string][] = Object.values(Navigation).map(
    (text) => [`#${text.toLowerCase().replace(" ", "-")}`, text] as const,
  );
  const days = 251;
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
  <article id={Navigation.Home}>
    <span><em>Join us</em> for the wedding of</span>
    <h1><em>Samuel</em> and <em>Jessica</em></h1>
    <p>Sun. May 31, 2026</p>
    <button>RSVP</button>
  </article>
  <article id={Navigation.OurStory}>
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
      leo sed ultricies vestibulum, enim urna euismod lacus, et mattis nisl erat
      in nunc. Curabitur sit amet libero eleifend, blandit enim eleifend,
      eleifend urna. Integer sed pharetra odio, at imperdiet est. Sed tincidunt
      lorem nec erat rutrum, a bibendum mauris pretium. Aenean finibus posuere
      lorem ultricies venenatis. Quisque at libero at ante volutpat tempor.
      Donec dictum commodo tellus, vitae bibendum dui tristique nec. Quisque
      eget risus iaculis, lobortis ante sit amet, vestibulum tortor. Morbi
      fermentum semper tristique. Nunc pellentesque vitae elit eu vulputate.
      Etiam in neque tristique, euismod mi eget, ullamcorper ante. Sed ornare
      felis neque, a laoreet nibh sollicitudin vitae.
    </p>
    <i>Sam & Jess</i>
  </article>
  <article id={Navigation.Gallery}>
    <nav>
      <ul>
        <li>
          <i>&hearts;</i>
          <span>Love Goes On and On, Ooohhh Oooo Ohh</span>
          <button>&times;</button>
        </li>
        <li><button>&plus;</button></li>
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
  <article id={Navigation.Details}>
    <h1>Details</h1>
    <div>
      <section>
        <h2>Accomodations</h2>
        <p>
          Rooms have been blocked at the Wingate by Wyndham hotel. Call <a
            href="tel:+7048468000">704-846-8000</a
          > and reference Samuel & Jessica's wedding.
        </p>
        <button>Book</button>
      </section>
      <section>
        <h2>Schedule</h2>
        <p>
          The Ceremony begins at 2:00 PM followed by a grazing hour, dinner, and
          dancing. We wrap up by 7pm.
        </p>
      </section>
      <section>
        <h2>Venue</h2>
        <p>The venue has free parking with plenty of room for all guests.</p>
      </section>
      <section>
        <h2>Attire</h2>
        <p>
          We are going for dressed up-casual. The ceremony is outdoors, so dress
          comfortably for the temperature. Bright/nature-y colors are
          encouraged!
        </p>
      </section>
      <section>
        <h2>Kids</h2>
        <p>
          We are only able to accomodate children listed in your invitation.
          Please enjoy your night off!
        </p>
      </section>
    </div>
    <section>
      <h2>The Day After</h2>
      <p>
        Sam and I are staying in town for a few days before we leave for our
        honeymoon. Any out-of-town guests who want to keep the party going,
        let's set something up!
      </p>
    </section>
    <section>
      <h2>Explore Charlotte</h2>
      <p>Here's a few ideas of fun things to do while you're here!</p>
      <ul>
        {#each ["foo", "bar", "qux"] as item}
          <li>{item}</li>
        {/each}
      </ul>
    </section>
    <section>
      <h2>Gifts</h2>
      <p>
        Your presence is the real present! But, if you'd like to give a little
        something extra, a contribution towards our honeymoon would be
        appreciated.
      </p>
      <p>A card box will be available at the wedding.</p>
      <footer>
        <img src="https://placehold.co/100x150/png" alt="Jessica" />
        <img src="https://placehold.co/100x150/png" alt="Samuel" />
        <aside>
          <span>Countdown to "I DO!"</span>
          <output>{days}</output>
          <span>days</span>
        </aside>
      </footer>
    </section>
    <section id={Navigation.RSVP}>
      <p>Please RSVP by February 22.</p>
      <p>We're excited to celebrate with you!</p>
      <button>RSVP</button>
    </section>
  </article>
</main>

<style>
  h1,
  h2 {
    text-align: center;
  }

  nav ul {
    list-style: none;
    padding: 0;
    display: flex;
    gap: 1em;
  }

  header nav ul {
    justify-content: space-between;
  }

  #Home {
    text-align: center;
  }

  #Gallery {
    background-color: palegoldenrod;
  }
  #Gallery nav ul li {
    background-color: goldenrod;
  }
  #Gallery nav ul li button {
    background-color: transparent;
    border: none;
  }
  #Gallery section {
    background-color: white;
  }
  #Gallery section div {
    display: flex;
    flex-wrap: wrap;
    gap: 1em;
    max-height: 350px;
    overflow-y: scroll;
  }

  #Details div {
    display: flex;
    flex-wrap: wrap;
    gap: 1em;
    justify-content: center;
  }
  #Details div section {
    flex-basis: 33%;
  }

  aside {
    display: flex;
    gap: 1em;
  }
</style>
