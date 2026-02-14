import type { ParentProps } from "solid-js";
import Time from "../../Components/Time";
import { rsvpDate, weddingDate } from "../../data";
import beOurGuestSrc from "../../assets/SamandJess_birdsflying.jpg";
import coupleSrc from "../../assets/SamandJess_capitalgrille_BW.jpg";
import ImgAsset from "../../Components/ImgAsset";

export default function RsvpLayout(props: ParentProps) {
  return (
    <article>
      <header>
        <div style={{ "background-image": `url('${beOurGuestSrc}')` }}>
          <h2>
            <Time value={weddingDate} format="short" />
          </h2>
          <h1>
            <em>Be Our Guest</em>
          </h1>
          <h2>
            <span>We can't wait to celebrate with you!</span>
            <div />
            <span>
              Please RSVP by <Time value={rsvpDate} />
            </span>
          </h2>
        </div>
      </header>
      <section>
        <figure>
          <ImgAsset src={coupleSrc} />
          <figcaption>
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
