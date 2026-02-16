import type { ParentProps } from "solid-js";
import Time from "../../Components/Time";
import { rsvpDate, weddingDate } from "../../data";
import beOurGuestSrc from "../../assets/SamandJess_birdsflying.jpg";
import coupleSrc from "../../assets/SamandJess_capitalgrille_BW.jpg";
import ImgAsset from "../../Components/ImgAsset";

export default function RsvpLayout(props: ParentProps) {
  return (
    <article class="mb-(--gap-xl)">
      <header class="mb-(--gap-xl)">
        <div
          style={{ "background-image": `url('${beOurGuestSrc}')` }}
          class="bg-cover bg-center text-background grid content-center text-center p-(--gap-sm) br:aspect-video br:p-(--gap-xl)"
        >
          <h2>
            <Time value={weddingDate} format="short" />
          </h2>
          <h1 class="my-(--gap-lg)">
            <em>Be Our Guest</em>
          </h1>
          <h2>
            <span>We can't wait to celebrate with you!</span>
            <div />
            <span>
              Please RSVP <span class="max-br:block">by</span>{" "}
              <Time value={rsvpDate} />
            </span>
          </h2>
        </div>
      </header>
      <section class="cols-2">
        <figure class="flex flex-col gap-(--gap-sm)">
          <ImgAsset src={coupleSrc} class="border" />
          <figcaption>
            <h1 class="text-shadow">
              <em>
                <q>
                  Bear with
                  <br />
                  one another
                  <br />
                  in love
                </q>
              </em>
            </h1>
          </figcaption>
        </figure>
        {props.children}
      </section>
    </article>
  );
}
