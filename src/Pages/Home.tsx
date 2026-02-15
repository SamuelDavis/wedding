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
import additionalDetailsSrc from "../assets/SamandJess_lace.jpg";
import ImgAsset from "../Components/ImgAsset";
import { A } from "@solidjs/router";
import Arrow from "../Components/Arrow";

export default function Home() {
  return (
    <article>
      <section class="relative flex items-center gap-(--gap-lg)">
        <ImgAsset src={nariColorScr} class="chromatic max-sm:hidden" />
        <div class="group">
          <ImgAsset src={athensColorSrc} class="chromatic" />
          <div class="absolute top-[10%] left-[50%] -translate-x-[50%] text-center group:hover">
            <h2 class="titles-h2 mb-(--gap-xs)">The Wedding Of</h2>
            <h1 class="titles-display text-nowrap">
              <em class="flex justify-center items-center">
                Samuel
                <small class="titles-decorative ml-8 mr-4"> and </small>
                Jessica
              </em>
            </h1>
          </div>
        </div>
        <ImgAsset src={flowersColorSrc} class="chromatic max-sm:hidden" />
      </section>
      <section>
        <h2 class="titles-h2 text-center my-(--gap-sm)">
          <Time value={weddingDate} />
          <hr class="vertical max-sm:hidden" />
          <br class="sm:hidden" />
          <a target="_blank" href={venueMapHref} class="p-0">
            Francis J. Beatty Park
          </a>
        </h2>
        <nav class="justify-center">
          <ul class="justify-center">
            <li>
              <A href="/rsvp" class="a-link">
                <span>RSVP</span>
                <Arrow />
              </A>
            </li>
          </ul>
        </nav>
      </section>
      <section id="our-story" class="text-center my-(--gap-lg)">
        <h1 class="titles-h1-bold-caps mb-(--gap-xs)">
          <A id="our-story" href="#our-story">
            Let's Make This Official
          </A>
        </h1>
        <div class="mb-(--gap-xs)">
          <p>
            Our story began in 2019, chatting during work breaks about
            animation, music, and movies.
          </p>
          <p>
            Fast forward to the fall of 2020 &mdash; we went on a casual morning
            walk that we jokingly called a <q>date</q>. But eight miles and a
            hundred tangents later, we realized how much we enjoyed each other's
            company.
          </p>
          <p>
            We are excited to invite you &mdash; our family and closest friends
            to celebrate with us on our wedding day. We can't wait!
          </p>
        </div>
        <h2 class="titles-h2">Sam & Jess</h2>
      </section>
      <section class="mb-(--gap-md)">
        <h1 class="titles-display my-(--gap-md) text-(--color-shadow)">
          <em>
            <q>
              <span>Every moment</span>
              <wbr />
              <span> spent with you,</span>
              <br />
              <span> is a moment</span>
              <wbr />
              <span> I treasure.</span>
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
      <article id="on-the-day" class="cols-2">
        <header class="text-center mb-(--gap-md)">
          <h1 class="titles-h1-bold-caps mb-(--gap-xs)">
            <Time value={weddingDate} format="short" />
          </h1>
          <h1 class="titles-display">
            <A href="#on-the-day">
              <em>On the Day</em>
            </A>
          </h1>
        </header>
        <section>
          <div>
            <h1>
              Arrival<small class="titles-h1-decorative"> and </small>Ceremony
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
        <section>
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
        <section>
          <div>
            <h1>
              Reception<small class="titles-h1-decorative"> and </small>Dinner
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
      </article>
      <section id="details" class="cols-2 border p-(--gap-sm)">
        <figure class="relative">
          <figcaption class="absolute top-[1ch] -left-[2ch] sm:-left-[2ch]">
            <h1 class="titles-display">
              <A href="#details">
                <em>
                  Additional
                  <br />
                  Details
                </em>
              </A>
            </h1>
          </figcaption>
          <ImgAsset src={additionalDetailsSrc} />
        </figure>
        <ul>
          <li>
            <h1>Attire</h1>
            <p>
              Bright, nature-inspired colors are encouraged. The ceremony is
              taking place outdoors, so dress for the weather!
            </p>
            <p>
              <span>View attire examples </span>
              <a target="_blank" href={attireHref}>
                here
              </a>
              <span>.</span>
            </p>
          </li>
          <li>
            <hr />
          </li>
          <li>
            <h1>Little Ones</h1>
            <p>
              We are only able to accommodate children listed on your invite.
              Enjoy your night off!
            </p>
          </li>
          <li>
            <hr />
          </li>
          <li>
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
