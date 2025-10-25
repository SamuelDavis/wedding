import RSVP from "../Components/RSVP";
import ceremonySrc from "../assets/ceremony.jpg";
import receptionSrc from "../assets/ceremony.jpg";

export default function Home() {
  return (
    <article id="home">
      <section>
        <span>
          <strong>Join Us</strong> for the wedding of...
        </span>
        <h1>Samuel & Jessica</h1>
        <h3>May 31, 2026</h3>
        <RSVP />
      </section>
      <section>
        <h2>Ceremony</h2>
        <h3>2:00 PM</h3>
        <a href="https://maps.app.goo.gl/1TK3gLZHdQYefWx36" target="_blank">
          <address>
            <div>4330 Weddington Road</div>
            <div>Matthews, NC 28105</div>
          </address>
        </a>
        <img src={ceremonySrc} alt="ceremony" />
      </section>
      <section>
        <h2>Reception</h2>
        <h3>3:30 PM - 7:00 PM</h3>
        <p>Grazing hour, dinner, and dancing</p>
        <img src={receptionSrc} alt="reception" />
      </section>
      <section id="details">
        <h2>Details</h2>
        <div>
          <section>
            <h3>Venue</h3>
            <p>Colonel Francis J. Beatty Park</p>
            <p>Free parking with plentty of room for all guests.</p>
            <p>Air-conditioned building.</p>
            <footer>
              <a
                role="button"
                href="https://maps.app.goo.gl/1TK3gLZHdQYefWx36"
                target="_blank"
              >
                Map
              </a>
            </footer>
          </section>
          <section>
            <h3>Hotel</h3>
            <p>Wingate by Wyndham Matthews/Charlotte</p>
            <address>
              <div>2001 Mt. Harmony Church Rd.</div>
              <div>Matthews, NC 28105</div>
            </address>
            <footer>
              <a
                role="button"
                href="https://www.wyndhamhotels.com/en-ca/wingate/matthews-north-carolina/wingate-matthews-charlotte/rooms-rates?brand_id=WG"
                target="_blank"
              >
                Book
              </a>
            </footer>
          </section>
          <section>
            <h3>Kids</h3>
            <p>
              We are only able to accommodate children listed on your
              invitation.
            </p>
          </section>
          <section>
            <h3>Attire</h3>
            <p>
              The ceremony is outdoors; dress for the weather. Bright,
              nature-inspired colors are encouraged!
            </p>
          </section>
        </div>
      </section>
    </article>
  );
}
