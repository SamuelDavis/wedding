import type { ParentProps } from "solid-js";
import Time from "../../Components/Time";
import { rsvpDate, weddingDate } from "../../data";
import beOurGuestSrc from "../../assets/SamandJess_birdsflying.jpg";
import coupleSrc from "../../assets/SamandJess_capitalgrille_BW.jpg";
import ImgAsset from "../../Components/ImgAsset";

export default function RsvpLayout(props: ParentProps) {
  return (
    <article class="mb-(--gap-xl)">
      <header class="text-(--color-text-secondary) text-center mb-(--gap-lg)">
        <div
          style={{ "background-image": `url('${beOurGuestSrc}')` }}
          class="bg-cover bg-center p-(--gap-lg)"
        >
          <h2>
            <Time value={weddingDate} format="short" />
          </h2>
          <h1 class="my-(--gap-lg)">
            <em>Be Our Guest</em>
          </h1>
          <h2>
            <span>We can't wait to celebrate with you!</span>
            <div class="my-(--gap-sm)" />
            <span>
              Please RSVP by <Time value={rsvpDate} />
            </span>
          </h2>
        </div>
      </header>
      <section class="grid sm:grid-cols-2">
        <figure>
          <ImgAsset src={coupleSrc} class="framed" />
          <figcaption class="mt-(--gap-sm)">
            <em>
              <q>
                Bear with
                <br />
                one another
                <br />
                in love
              </q>
            </em>
          </figcaption>
        </figure>
        {props.children}
      </section>
    </article>
  );
}
