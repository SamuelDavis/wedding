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
import ImgAsset from "../Components/ImgAsset";
import { A } from "@solidjs/router";
import Arrow from "../Components/Arrow";

export default function Home() {
  return (
    <article>
      <section>
        <ImgAsset src={nariColorScr} />
        <div>
          <ImgAsset src={athensColorSrc} />
          <div>
            <h2>The Wedding Of</h2>
            <h1>
              <em>
                Samuel<small> and </small>Jessica
              </em>
            </h1>
          </div>
        </div>
        <ImgAsset src={flowersColorSrc} />
      </section>
      <section>
        <h2>
          <Time value={weddingDate} />
          <hr />
          <a target="_blank" href={venueMapHref}>
            Francis J. Beatty Park
          </a>
        </h2>
      </section>
      <section>
        <nav>
          <ul>
            <li>
              <A href="/rsvp">RSVP</A>
            </li>
          </ul>
        </nav>
      </section>
      <section>
        <h1 id="our-story">
          <A href="#our-story">Let's Make This Official</A>
        </h1>
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
        <h2>Sam & Jess</h2>
      </section>
      <section>
        <q>
          <em>
            <span>Every moment spent with you, </span>
            <br />
            <span>is a moment I treasure.</span>
          </em>
        </q>
        <Marquee>
          <For each={timeline}>
            {({ year, src }) => (
              <figure>
                <figcaption>{year}</figcaption>
                <ImgAsset src={src} alt={`${year}`} />
              </figure>
            )}
          </For>
        </Marquee>
      </section>
      <section>
        <header>
          <h1 id="on-the-day">
            <Time value={weddingDate} format="short" />
          </h1>
          <h1>
            <em>
              <A href="#on-the-day">On the Day</A>
            </em>
          </h1>
        </header>
        <section>
          <div>
            <h1>
              Arrival<small> and </small>Ceremony
            </h1>
            <Itinerary>
              <ItineraryItem time={schedule.arrivalAndCeremony}>
                <p>
                  Arrive a little early and enjoy the park, find your seats, and
                  settle in before the ceremony begins.
                </p>
                <A href={venueMapHref}>
                  <span>View Location</span>
                  <Arrow />
                </A>
              </ItineraryItem>
              <ItineraryItem time={schedule.iDo}>
                <p>
                  The moment we say <q>I DO!</q>
                </p>
              </ItineraryItem>
            </Itinerary>
          </div>
          <ImgAsset src={arrivalAndCeremonySrc} />
        </section>
        <hr />
        <section>
          <ImgAsset src={socialHourSrc} />
          <div>
            <h1>Social Hour</h1>
            <Itinerary>
              <ItineraryItem time={schedule.socialHour}>
                <p>
                  A nice pause in the evening to catch up over light appetizers.
                  Be sure to enjoy the garden and lake views!
                </p>
              </ItineraryItem>
            </Itinerary>
          </div>
        </section>
        <hr />
        <section>
          <div>
            <h1>
              Reception<small> and </small>Dinner
            </h1>
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
          <ImgAsset src={receptionAndDinnerSrc} />
        </section>
      </section>
      <section>
        <figure>
          <figcaption>
            <h1 id="details">
              Additional
              <br />
              Details
            </h1>
          </figcaption>
          <ImgAsset src={additionalDetailsSrc} />
        </figure>
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
            <hr />
          </li>
          <li>
            <h2>Little Ones</h2>
            <p>
              We are only able to accomodate children listed on your invite.
              Enjoy your night off!
            </p>
            <hr />
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
  );
}
