import { A } from "@solidjs/router";
import { weddingDate, venueMapHref, schedule } from "../data";
import Time from "../Components/Time";
import Itinerary, { ItineraryItem } from "../Components/Itinerary";
import Marquee from "../Components/Marquee";
import Hyphenated from "../Components/Hyphenated";

export default function Home() {
  return (
    <article>
      <header>
        <h1>
          <div>The Wedding Of</div>
          Samuel<i> and </i>Jessica
        </h1>
        <div>
          <Time value={weddingDate} />
          <a target="_blank" href={venueMapHref}>
            Francis Beatty Park
          </a>
        </div>
      </header>
      <OurStory />
      <Schedule />
      <Details />
    </article>
  );
}

function OurStory() {
  return (
    <section>
      <div>
        <div>
          <img src="https://placehold.co/200x300" />
          <footer>
            <q>Every moment spent with you&hellip;</q>
          </footer>
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
            A look back on our <Hyphenated text="love" />
          </h3>
        </header>
        <Marquee srcs={Array(5).fill("https://placehold.co/200x200")} />
        <footer>
          <q>&hellip;is a moment I treasure.</q>
        </footer>
      </div>
    </section>
  );
}

function Schedule() {
  return (
    <section>
      <div>
        <img src="https://placehold.co/300x300" />
      </div>
      <div>
        <h2>
          Arrival<i> and </i>Ceremony
        </h2>
        <Itinerary>
          <ItineraryItem time={schedule.arrivalAndCeremony}>
            <p>
              Arrive a little early and enjoy the park, find your seats, and
              settle in before the ceremony begins.
            </p>
          </ItineraryItem>
          <ItineraryItem time={schedule.iDo}>
            <p>
              The moment we say <q>I DO!</q>
            </p>
          </ItineraryItem>
        </Itinerary>
        <A href={venueMapHref}>View Location</A>
      </div>
      <div>
        <div>
          <h2>Social Hour</h2>
          <Itinerary>
            <ItineraryItem time={schedule.socialHour}>
              <p>
                A nice pause in the evening to catch up over light appetizers.
                Be sure to enjoy the garden and lake views!
              </p>
            </ItineraryItem>
          </Itinerary>
          <Marquee srcs={Array(3).fill("https://placehold.co/100x100")} />
        </div>
        <div>
          <h2>Reception</h2>
          <Itinerary>
            <ItineraryItem time={schedule.reception}>
              <p>Join us for dinner, dancing, and good celebration!</p>
            </ItineraryItem>
          </Itinerary>
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
      <ul>
        <li>
          <h2>Attire</h2>
          <p>
            Bright, nature-inspired colors are encouraged. The cremony is taking
            place outdoors, so dress for the weather!
          </p>
        </li>
        <li>
          <h2>Little Ones</h2>
          <p>We are only able to accomodate children listed on your invite.</p>
        </li>
        <li>
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
