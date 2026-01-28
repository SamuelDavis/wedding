import { A } from "@solidjs/router";
import { weddingDate, venueMapHref, schedule, timeline } from "../data";
import Time from "../Components/Time";
import Itinerary, { ItineraryItem } from "../Components/Itinerary";
import Marquee from "../Components/Marquee";
import { For } from "solid-js";
import nariColorScr from "../assets/SamandJess_nari-color.jpg";
import athensColorSrc from "../assets/SamandJess_athens-color.jpg";
import flowersColorSrc from "../assets/SamandJess_flowers-color.jpg";
import arrivalAndCeremonySrc from "../assets/SamandJess_Hydrangeas.jpg";
import socialHourSrc from "../assets/SamandJess_FrancisBeattyPark.jpg";
import receptionAndDinnerSrc from "../assets/SamandJess_dancing_BW.jpg";
import additionalDetailsSrc from "../assets/SamandJess_lace.jpg";

export default function Home() {
  return (
    <article>
      <header>
        <h1>
          <div>The Wedding Of</div>
          Samuel<i> and </i>Jessica
        </h1>
        <img src={nariColorScr} />
        <img src={athensColorSrc} />
        <img src={flowersColorSrc} />
        <div>
          <Time value={weddingDate} />
          <a target="_blank" href={venueMapHref}>
            Francis J. Beatty Park
          </a>
        </div>
        <A href="/rsvp">RSVP</A>
      </header>
      <article id="our-story">
        <h2>
          <A href="#our-story">Let's Make This Official</A>
        </h2>
        <p>
          Our story began in 2019, chatting during work breaks about animation,
          music, and movies.
        </p>
        <p>
          Fast forward to the fall of 2020 &mdash; we wnt on a casual morning
          walk that we jokingly called a "date". But eight miles and a hundred
          tangents later, we realized how much we enjoyed eachother's company.
        </p>
        <p>
          We are excited to invite you &mdash; our family and closest friends to
          celebrate with us on our wedding day. We can't wait!
        </p>
        <h3>Sam & Jess</h3>
      </article>
      <article>
        <q>
          <span>Every moment spent with you, </span>
          <br />
          <span>is a moment I treasure.</span>
        </q>
        <Marquee>
          <For each={timeline}>
            {({ year, src }) => (
              <figure>
                <figcaption>{year}</figcaption>
                <img src={src} alt={`${year}`} />
              </figure>
            )}
          </For>
        </Marquee>
      </article>
      <article id="on-the-day">
        <header>
          <h2>
            <Time value={weddingDate} format="short" />
          </h2>
          <h1>
            <A href="#on-the-day">On the Day</A>
          </h1>
        </header>
        <section>
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
                <A href={venueMapHref}>View Location</A>
              </ItineraryItem>
              <ItineraryItem time={schedule.iDo}>
                <p>
                  The moment we say <q>I DO!</q>
                </p>
              </ItineraryItem>
            </Itinerary>
          </div>
          <img src={arrivalAndCeremonySrc} />
          <hr />
          <img src={socialHourSrc} />
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
          </div>
          <hr />
          <div>
            <h2>
              Reception<i> and </i>Dinner
            </h2>
            <Itinerary>
              <ItineraryItem time={schedule.reception}>
                <p>Dinner will be served following the reception.</p>
              </ItineraryItem>
              <ItineraryItem time={schedule.dinner}>
                <p>
                  Dinner will be served buffet style, based on your selection.
                </p>
              </ItineraryItem>
              <ItineraryItem time={schedule.dancing}>
                <p>The celebration continues on the dance floor!</p>
              </ItineraryItem>
            </Itinerary>
          </div>
          <img src={receptionAndDinnerSrc} />
        </section>
      </article>
      <article id="details">
        <section>
          <h1>
            <A href="#details">Additional Details</A>
          </h1>
          <img src={additionalDetailsSrc} />
        </section>
        <section>
          <ul>
            <li>
              <h2>Attire</h2>
              <p>
                Bright, nature-inspired colors are encouraged. The cremony is
                taking place outdoors, so dress for the weather!
              </p>
              <p>
                View attire examples{" "}
                <a target="_blank" href="#">
                  here
                </a>
                .
              </p>
            </li>
            <li>
              <h2>Little Ones</h2>
              <p>
                We are only able to accomodate children listed on your invite.
                Enjoy your night off!
              </p>
            </li>
            <li>
              <h2>Gifts</h2>
              <p>
                Your presence is the real gift! If you'd still like to give, a
                card box will be available.
              </p>
            </li>
          </ul>
        </section>
      </article>
    </article>
  );
}
