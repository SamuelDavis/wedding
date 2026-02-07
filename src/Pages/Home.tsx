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
import Link from "../Components/Link";

export default function Home() {
  return (
    <article class="items-center">
      <article>
        <section class="img-hover-chromatic justify-between items-center">
          <ImgAsset
            class="md:basis-[20%] h-[50%] hover-chromatic"
            src={nariColorScr}
          />
          <div class="md:basis-[50%] relative group flex justify-center">
            <ImgAsset src={athensColorSrc} class="max-w-120 hover-chromatic" />
            <div class="absolute w-full text-center top-0 mt-[10%]">
              <h2>The Wedding Of</h2>
              <h1>
                <em>
                  Samuel<small> and </small>Jessica
                </em>
              </h1>
            </div>
          </div>
          <ImgAsset
            class="md:basis-[20%] hover-chromatic"
            src={flowersColorSrc}
          />
        </section>
        <section class="justify-center my-16">
          <h2>
            <Time value={weddingDate} />
            <hr class="vertical mx-6" />
            <a target="_blank" href={venueMapHref} class="p-0">
              Francis J. Beatty Park
            </a>
          </h2>
        </section>
        <section class="mb-40">
          <nav class="w-full justify-around">
            <ul>
              <li>
                <Link class="border" arrow href="/rsvp">
                  RSVP
                </Link>
              </li>
            </ul>
          </nav>
        </section>
      </article>
      <article id="our-story" class="text-center max-w-240">
        <h1 class="bold mb-12">
          <Link href="#our-story">Let's Make This Official</Link>
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
        <h2 class="bold">Sam & Jess</h2>
      </article>
      <article>
        <header>
          <q class="text-right text-tertiary">
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
      <article id="on-the-day">
        <header class="flex-col items-center">
          <h1 class="bold">
            <Time value={weddingDate} format="short" />
          </h1>
          <h1>
            <em>
              <Link href="#on-the-day" class="normal-case">
                On the Day
              </Link>
            </em>
          </h1>
        </header>
        <section class="cols-2">
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
                <Link class="border" arrow href={venueMapHref}>
                  View Location
                </Link>
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
          <ImgAsset class="framed" src={receptionAndDinnerSrc} />
        </section>
      </article>
      <article id="details" class="p-10 my-10 border">
        <section class="cols-2">
          <div class="relative">
            <h1 class="absolute top-0">
              <Link href="#details">
                Additional
                <br />
                Details
              </Link>
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
              <hr class="my-4" />
            </li>
            <li>
              <h2>Little Ones</h2>
              <p>
                We are only able to accomodate children listed on your invite.
                Enjoy your night off!
              </p>
              <hr class="my-4" />
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
