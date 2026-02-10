import type { ParentProps } from "solid-js";
import Time from "../../Components/Time";
import { rsvpDate, weddingDate } from "../../data";
import beOurGuestSrc from "../../assets/SamandJess_birdsflying.jpg";
import coupleSrc from "../../assets/SamandJess_capitalgrille_BW.jpg";
import ImgAsset from "../../Components/ImgAsset";

export default function RsvpLayout(props: ParentProps) {
  return (
    <article class="mb-60">
      <header
        style={{
          "background-image": `url('${beOurGuestSrc}')`,
          "background-size": "cover",
        }}
        class="grid content-center text-(--Background-Soft-100) text-center py-44 mb-40"
      >
        <h1 class="title-h1-bold-caps mb-12">
          <Time value={weddingDate} format="short" />
        </h1>
        <h1 class="display-display mb-16">Be Our Guest</h1>
        <p class="title-h2">
          We can't wait to celebrate with you!
          <br />
          Please RSVP by <Time value={rsvpDate} />
        </p>
      </header>
      <section class="cols-2">
        <figure>
          <ImgAsset src={coupleSrc} class="framed mb-12 h-auto" />
          <figcaption class="display-display text-(--Secondary-Shadow-500)">
            Bear with
            <br />
            one another
            <br />
            in love
          </figcaption>
        </figure>
        {props.children}
      </section>
    </article>
  );
}
