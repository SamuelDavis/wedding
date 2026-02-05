import type { ParentProps } from "solid-js";
import Time from "../../Components/Time";
import { rsvpDate, weddingDate } from "../../data";
import beOurGuestSrc from "../../assets/SamandJess_birdsflying.jpg";
import coupleSrc from "../../assets/SamandJess_capitalgrille_BW.jpg";
import ImgAsset from "../../Components/ImgAsset";

export default function RsvpLayout(props: ParentProps) {
  return (
    <article>
      <header class="mb-40">
        <div
          style={{ "background-image": `url('${beOurGuestSrc}')` }}
          class="bg-cover bg-center text-white w-full grid place-content-center text-center p-20"
        >
          <h2>
            <Time value={weddingDate} format="short" />
          </h2>
          <h1 class="my-16">Be Our Guest</h1>
          <p>We can't wait to celebrate with you!</p>
          <p>
            Please RSVP by <Time value={rsvpDate} />
          </p>
        </div>
      </header>
      <section class="cols-2">
        <figure>
          <ImgAsset class="framed" src={coupleSrc} />
          <q>
            <em>
              Bear with
              <br />
              one another
              <br />
              in love
            </em>
          </q>
        </figure>
        {props.children}
      </section>
    </article>
  );
}
