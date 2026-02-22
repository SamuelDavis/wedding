import {
  weddingDate,
  venueMapHref,
  schedule,
  timeline,
  attireHref,
} from "../data";
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
import ImgAsset from "../Components/ImgAsset";
import { A } from "@solidjs/router";
import Arrow from "../Components/Arrow";
import homepage1 from "../assets/Homepage 1.png";
import homepage2 from "../assets/Homepage 2.png";
import homepage3 from "../assets/Homepage 3.png";
import homepage4 from "../assets/Homepage 4.png";

export default function Home() {
  return (
    <article>
      <section class="relative flex items-center gap-(--gap-xl) sm:gap-[10%]">
        <ImgAsset src={nariColorScr} class="max-br:hidden h-full chromatic" />
        <div class="group">
          <ImgAsset src={athensColorSrc} class="chromatic" />
          <div class="absolute top-0 left-0 flex flex-col items-center whitespace-nowrap group:hover w-full text-4xl lg:text-6xl z-999">
            <h2>The Wedding Of</h2>
            <h1>
              <em>
                <span>Samuel </span>
                <small class="inline-block align-middle -mt-4">and</small>
                <span> Jessica</span>
              </em>
            </h1>
          </div>
        </div>
        <ImgAsset
          src={flowersColorSrc}
          class="max-br:hidden h-full chromatic"
        />
      </section>
      <section>
        <h2 class="flex flex-col br:flex-row items-center text-center br:justify-center">
          <span class="whitespace-nowrap">
            <Time value={weddingDate} />
          </span>
          <hr class="vertical max-br:hidden" />
          <span class="whitespace-nowrap">
            <a target="_blank" href={venueMapHref}>
              Francis J. Beatty Park
            </a>
          </span>
        </h2>
        <nav class="text-center">
          <menu>
            <li>
              <A href="/rsvp" class="a-link my-(--gap-md)">
                <span>RSVP</span>
                <Arrow />
              </A>
            </li>
          </menu>
        </nav>
      </section>
      <section
        id="our-story"
        class="relative bg-light flex flex-col items-center text-center"
      >
        <h1 class="mb-(--gap-sm)">
          <A id="our-story" href="#our-story">
            <b>Let's Make This Official</b>
          </A>
        </h1>
        <div class="max-w-2xl">
          <p>
            Our story began in 2019, chatting during work breaks about
            animation, music, and movies.
          </p>
          <p>
            Fast forward to the fall of 2020 &mdash; we went on a casual morning
            walk that we jokingly called a "date". But eight miles and a hundred
            tangents later, we realized how much we enjoyed each other's
            company.
          </p>
          <p>
            We are excited to invite you &mdash; our family and closest friends
            to celebrate with us on our wedding day.
          </p>
        </div>
        <h2>
          <b>Sam & Jess</b>
        </h2>
        <ImgAsset
          src={homepage2}
          class="absolute top-0 -translate-y-1/2 left-0 w-[25%]"
        />
        <ImgAsset
          src={homepage4}
          class="absolute bottom-0 translate-y-1/2 left-0 w-[20%]"
        />
        <ImgAsset
          src={homepage3}
          class="absolute top-0 -translate-y-1/2 right-0 w-[20%]"
        />
        <ImgAsset
          src={homepage1}
          class="absolute bottom-0 translate-y-1/2 right-0 w-[25%]"
        />
      </section>
      <section>
        <h1 class="my-(--gap-lg) text-shadow br:text-center">
          <em class="br:text-right">
            <q>
              <div>
                <span>Every moment </span>
                <br class="sm:hidden" />
                <span>spent with you, </span>
              </div>
              <div class="br:-mr-10">
                <span>is a moment </span>
                <br class="sm:hidden" />
                <span>I treasure.</span>
              </div>
            </q>
          </em>
        </h1>
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
      <section id="on-the-day">
        <header class="text-center my-(--gap-xl)">
          <h1>
            <Time value={weddingDate} format="short" />
          </h1>
          <h1>
            <A href="#on-the-day">
              <em>On the Day</em>
            </A>
          </h1>
        </header>
        <section class="cols-2">
          <div>
            <h1>
              Arrival
              <small> and </small>
              Ceremony
            </h1>
            <Itinerary>
              <ItineraryItem time={schedule.arrivalAndCeremony}>
                <p>
                  Arrive a little early and enjoy the park, find your seats, and
                  settle in before the ceremony begins.
                </p>
                <A href={venueMapHref} class="a-link">
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
          <ImgAsset src={arrivalAndCeremonySrc} class="border" />
        </section>
        <hr />
        <section class="cols-2">
          <ImgAsset src={socialHourSrc} class="border" />
          <div>
            <h1>Social Hour</h1>
            <Itinerary>
              <ItineraryItem time={schedule.socialHour}>
                <p>
                  A nice pause in the afternoon to catch up over light
                  appetizers. Be sure to enjoy the garden and lake views!
                </p>
              </ItineraryItem>
            </Itinerary>
          </div>
        </section>
        <hr />
        <section class="relative cols-2">
          <div>
            <h1>
              Reception
              <small>
                <i> and </i>
              </small>
              Dinner
            </h1>
            <Itinerary>
              <ItineraryItem time={schedule.reception}>
                <p>Speeches, toasts, and an opportunity for us to thank you.</p>
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
          <ImgAsset src={receptionAndDinnerSrc} class="border" />
        </section>
      </section>
      <section id="details" class="bg-light mx-(--gap-main) py-(--gap-md)">
        <h1 class="flex justify-center text-center">
          <A href="#details">
            <em>Additional Details</em>
          </A>
        </h1>
        <ul class="grid gap-(--gap-md) br:grid-cols-3">
          <li class="text-center">
            <h1>Attire</h1>
            <p>
              Bright, nature-inspired colors are encouraged. The ceremony is
              taking place outdoors, so dress for the weather!
              <span class="block mt-2">
                View attire examples <a href={attireHref}>here</a>.
              </span>
            </p>
          </li>
          <li class="text-center">
            <h1>Little Ones</h1>
            <p>
              We are only able to accommodate children listed on your invite.
              Enjoy your night off!
            </p>
          </li>
          <li class="text-center">
            <h1>Gifts</h1>
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
