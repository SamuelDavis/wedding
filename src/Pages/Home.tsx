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
import ImgAsset from "../Components/ImgAsset";

export default function Home() {
  return (
    <article>
      <article>
        <section class="img-hover-chromatic justify-between items-center">
          <ImgAsset class="md:basis-[20%] h-[50%]" src={nariColorScr} />
          <div class="md:basis-[50%] relative group">
            <ImgAsset src={athensColorSrc} />
            <div class="absolute w-full text-center top-0 mt-[10%]">
              <h2>The Wedding Of</h2>
              <h1>
                <em>
                  Samuel<i> and </i>Jessica
                </em>
              </h1>
            </div>
          </div>
          <ImgAsset class="md:basis-[20%]" src={flowersColorSrc} />
        </section>
        <section class="justify-center">
          <h2>
            <Time value={weddingDate} />
            <hr class="vertical" />
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
      </article>
      <article id="our-story">
        <h1>
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
      </article>
      <article>
        <header class="text-right">
          <q>
            <em>
              <span>Every moment spent with you, </span>
              <br />
              <span>is a moment I treasure.</span>
            </em>
          </q>
        </header>
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
      </article>
      <article id="on-the-day" class="col-2">
        <header>
          <h1>
            <Time value={weddingDate} format="short" />
          </h1>
        </header>
        <header>
          <h1>
            <em>
              <A href="#on-the-day">On the Day</A>
            </em>
          </h1>
        </header>
        <section class="cols-2">
          <div>
            <h1>
              Arrival<i> and </i>Ceremony
            </h1>
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
          <ImgAsset class="framed" src={arrivalAndCeremonySrc} />
        </section>
        <hr />
        <section class="cols-2">
          <ImgAsset class="framed" src={socialHourSrc} />
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
        <section class="cols-2">
          <div>
            <h1>
              Reception<i> and </i>Dinner
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
          <ImgAsset class="framed" src={receptionAndDinnerSrc} />
        </section>
      </article>
      <article id="details" class="col-2 p-10 my-10 border">
        <section class="cols-2">
          <div class="relative">
            <h1 class="absolute top-0">
              <A href="#details">
                Additional
                <br />
                Details
              </A>
            </h1>
            <ImgAsset src={additionalDetailsSrc} />
          </div>
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
    </article>
  );
}
