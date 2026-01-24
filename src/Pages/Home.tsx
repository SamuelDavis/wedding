import { A } from "@solidjs/router";
import { weddingDate, venueMapHref, schedule } from "../data";
import styles from "../index.module.css";
import Time from "../Components/Time";
import Itinerary from "../Components/Itinerary";
import Marquee from "../Components/Marquee";

export default function Home() {
  return (
    <article>
      <section class={styles.hero}>
        <div>The Wedding Of</div>
        <h1>
          Samuel<i> and </i>Jessica
        </h1>
        <div>
          <Time value={weddingDate} />
          <a target="_blank" href={venueMapHref}>
            Francis Beatty Park
          </a>
        </div>
        <A href="rsvp">RSVP</A>
      </section>

      <OurStory />
      <Schedule />
      <Details />
    </article>
  );
}

function OurStory() {
  return (
    <section>
      <div class="columns">
        <div class="center">
          <img class="oval" src="https://placehold.co/200x300" />
          <div>
            <q>Every moment spent with you&hellip;</q>
          </div>
        </div>
        <div>
          <h2>Let's Make This Official</h2>
          <p>
            Our story began in 2019, chatting during work breaks about
            animation, music, and movies.
          </p>
          <p>
            Fast forward to the fall of 2020 &mdash; we wnt on a casual morning
            walk that we jokingly called a "date". But eight miles and a hundred
            tangents later, we realized how much we enjoyed eachother's company.
          </p>
          <p>
            We are excited to invite you &mdash; our family and closest friends
            to celebrate with us on our wedding day. We can't wait!
          </p>
          <footer>
            <div>Here's to love,</div>
            <i>Love Us</i>
          </footer>
        </div>
      </div>
      <div>
        <header>
          <h3>
            <span>A look back on our </span>
            <span class="hyphenated">
              <span>l</span>
              <span>o</span>
              <span>v</span>
              <span>e</span>
            </span>
          </h3>
        </header>
        <Marquee srcs={Array(5).fill("https://placehold.co/200x200")} />
        <footer>
          <div>
            <q>&hellip;is a moment I treasure.</q>
          </div>
        </footer>
      </div>
    </section>
  );
}

function Schedule() {
  return (
    <section class="columns">
      <div>
        <img src="https://placehold.co/300x300" />
      </div>
      <div>
        <h2>
          Arrival<i> and </i>Ceremony
        </h2>
        <Itinerary
          value={[
            {
              date: schedule.arrivalAndCeremony,
              description: (
                <p>
                  Arrive a little early and enjoy the park, find your seats, and
                  settle in before the ceremony begins.
                </p>
              ),
            },
            {
              date: schedule.iDo,
              description: (
                <p>
                  The moment we say <q>I DO!</q>
                </p>
              ),
            },
          ]}
        />
        <A href={venueMapHref}>View Location</A>
      </div>
      <div>
        <div>
          <h2>
            <strong>Social Hour</strong>
          </h2>
          <Itinerary
            value={[
              {
                date: schedule.socialHour,
                description: (
                  <p>
                    A nice pause in the evening to catch up over light
                    appetizers. Be sure to enjoy the garden and lake views!
                  </p>
                ),
              },
            ]}
          />
          <Marquee srcs={Array(3).fill("https://placehold.co/100x100")} />
        </div>
        <div>
          <h2>
            <strong>Reception</strong>
          </h2>
          <Itinerary
            value={[
              {
                date: schedule.reception,
                description: (
                  <p>Join us for dinner, dancing, and good celebration!</p>
                ),
              },
            ]}
          />
        </div>
      </div>
      <div>
        <img src="https://placehold.co/300x400" />
        <footer>
          <i>
            Life is Better
            <br />
            Together
          </i>
        </footer>
      </div>
    </section>
  );
}

function Details() {
  return (
    <section id="details">
      <header>
        <h2>
          Details<i> about the </i>Event
        </h2>
      </header>
      <ul class={styles["event-details"]}>
        <li class={styles["event-detail"]}>
          <h2>Attire</h2>
          <p>
            Bright, nature-inspired colors are encouraged. The cremony is taking
            place outdoors, so dress for the weather!
          </p>
        </li>
        <li class={styles["event-detail"]}>
          <h2>Little Ones</h2>
          <p>We are only able to accomodate children listed on your invite.</p>
        </li>
        <li class={styles["event-detail"]}>
          <h2>Gifts</h2>
          <p>
            Your presence is the real gift! If you'd still like to give, a card
            box will be available.
          </p>
        </li>
      </ul>
    </section>
  );
}
