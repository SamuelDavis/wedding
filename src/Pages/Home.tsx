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
      <section class="relative sm:flex items-center gap-4">
        <ImgAsset src={nariColorScr} class="chromatic hidden sm:inline" />
        <div class="group">
          <ImgAsset src={athensColorSrc} class="chromatic" />
          <div class="absolute z-top top-[10%] left-[50%] -translate-x-[50%] text-center group:hover">
            <h2>The Wedding Of</h2>
            <h1 class="mb-(--gap-sm) whitespace-nowrap">
              <em class="flex items-center gap-x-1">
                Samuel<small class="text-[0.5em]"> and </small>Jessica
              </em>
            </h1>
          </div>
        </div>
        <ImgAsset src={flowersColorSrc} class="chromatic hidden sm:inline" />
      </section>
      <section class="text-center">
        <h2 class="my-(--gap-md)">
          <Time value={weddingDate} />
          <hr data-vertical class="hidden sm:inline-block" />
          <a target="_blank" href={venueMapHref} class="inline-block">
            Francis J. Beatty Park
          </a>
        </h2>
        <nav class="mb-(--gap-lg)">
          <menu>
            <li>
              <A href="/rsvp" class="border">
                <span>RSVP</span>
                <Arrow />
              </A>
            </li>
          </menu>
        </nav>
      </section>
      <section id="our-story" class="text-center sm:mx-(--gap-lg)">
        <h1 class="font-bold mb-(--gap-md)">
          <A id="our-story" href="#our-story">
            Let's Make This Official
          </A>
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
        <h2 class="py-(--gap-md) font-bold">Sam & Jess</h2>
      </section>
      <section>
        <div class="flex justify-center my-(--gap-md) sm:my-(--gap-lg)">
          <em class="w-min sm:w-auto sm:text-right">
            <q>
              <span class="whitespace-nowrap">Every moment</span>
              <wbr />
              <span class="whitespace-nowrap"> spent with you,</span>
              <br />
              <span class="whitespace-nowrap"> is a moment</span>
              <wbr />
              <span class="whitespace-nowrap"> I treasure.</span>
            </q>
          </em>
        </div>
        <Marquee class="gap-(--gap-sm) mb-(--gap-lg)">
          <For each={timeline}>
            {({ year, src }) => (
              <figure class="pb-(--gap-sm)">
                <figcaption>{year}</figcaption>
                <ImgAsset src={src} alt={`${year}`} />
              </figure>
            )}
          </For>
        </Marquee>
      </section>
      <section id="itinerary">
        <header class="text-center mb-(--gap-md)">
          <h1 id="on-the-day" class="font-bold">
            <Time value={weddingDate} format="short" />
          </h1>
          <h1>
            <A href="#on-the-day">
              <em>On the Day</em>
            </A>
          </h1>
        </header>
        <section class="grid sm:grid-cols-2">
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
                <A href={venueMapHref} class="border">
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
          <ImgAsset src={arrivalAndCeremonySrc} class="framed" />
        </section>
        <hr />
        <section class="grid sm:grid-cols-2">
          <ImgAsset src={socialHourSrc} class="framed" />
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
        <section class="grid sm:grid-cols-2">
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
          <ImgAsset src={receptionAndDinnerSrc} class="framed" />
        </section>
      </section>
      <section
        id="details"
        class="border grid sm:grid-cols-2 p-(--gap-md) my-(--gap-lg)"
      >
        <figure class="relative">
          <figcaption class="absolute top-0 left-0">
            <h1 class="-ml-[1ch]">
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
              Bright, nature-inspired colors are encouraged. The cremony is
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
              We are only able to accomodate children listed on your invite.
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
