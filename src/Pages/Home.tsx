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
      <section class="flex justify-between items-center text-center">
        <ImgAsset src={nariColorScr} class="w-42 h-56 hover-chromatic" />
        <div class="relative px-40 group">
          <ImgAsset
            src={athensColorSrc}
            class="grow hover-chromatic w-120 h-160"
          />
          <div class="absolute left-0 top-16 w-full group:hover-chromatic">
            <h2 class="title-h2">The Wedding Of</h2>
            <h1 class="display-display flex justify-center items-center">
              Samuel<small class="display-decorative px-4"> and </small>Jessica
            </h1>
          </div>
        </div>
        <ImgAsset src={flowersColorSrc} class="w-42 h-56 hover-chromatic" />
      </section>
      <section class="text-center mb-40">
        <h2 class="title-h2 my-18 uppercase">
          <Time value={weddingDate} />
          <hr class="vertical" />
          <a target="_blank" href={venueMapHref}>
            Francis J. Beatty Park
          </a>
        </h2>
        <nav>
          <ul>
            <li>
              <A href="/rsvp" class="border">
                <span>RSVP</span>
                <Arrow />
              </A>
            </li>
          </ul>
        </nav>
      </section>
      <section class="text-center max-w-232 mx-auto">
        <h1 id="our-story" class="title-h1-bold-caps">
          <A href="#our-story" class="mb-12">
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
        <h2 class="title-h2 uppercase mt-8 mb-32">Sam & Jess</h2>
      </section>
      <section class="text-center">
        <div class="display-display text-(--Secondary-Shadow-500) mb-40">
          <span>Every moment spent with you,</span>
          <br />
          <span class="-mr-[5ch]">is a moment I treasure.</span>
        </div>
        <Marquee class="h-108 mb-18 w-312">
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
      <section id="itinerary" class="framed mb-37">
        <header class="text-center mb-24">
          <h1 id="on-the-day" class="title-h1-bold-caps mb-6">
            <Time value={weddingDate} format="short" />
          </h1>
          <h1 class="display-display">
            <A href="#on-the-day">On the Day</A>
          </h1>
        </header>
        <section class="cols-2">
          <div>
            <h1 class="title-h1-bold-caps">
              Arrival<small class="title-h1-decorative"> and </small>Ceremony
            </h1>
            <Itinerary>
              <ItineraryItem time={schedule.arrivalAndCeremony}>
                <p class="mb-12">
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
                  The moment we say <q class="uppercase">I do!</q>
                </p>
              </ItineraryItem>
            </Itinerary>
          </div>
          <ImgAsset src={arrivalAndCeremonySrc} />
        </section>
        <hr class="mt-20 mb-16" />
        <section class="cols-2">
          <ImgAsset src={socialHourSrc} />
          <div>
            <h1 class="title-h1-bold-caps">Social Hour</h1>
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
        <hr class="mt-20 mb-16" />
        <section class="cols-2">
          <div>
            <h1 class="title-h1-bold-caps">
              Reception<small class="title-h1-decorative"> and </small>Dinner
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
      <section id="details" class="cols-2 border p-20">
        <figure class="relative">
          <figcaption class="absolute top-6 -left-6">
            <h1 class="display-display">
              Additional
              <br />
              details
            </h1>
          </figcaption>
          <ImgAsset src={additionalDetailsSrc} />
        </figure>
        <ul>
          <li class="mb-8">
            <h2 class="title-h1-bold-caps mb-4">Attire</h2>
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
          <li class="mb-8">
            <h2 class="title-h1-bold-caps mb-4">Little Ones</h2>
            <p>
              We are only able to accomodate children listed on your invite.
              Enjoy your night off!
            </p>
            <hr />
          </li>
          <li class="mb-8">
            <h2 class="title-h1-bold-caps mb-4">Gifts</h2>
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
