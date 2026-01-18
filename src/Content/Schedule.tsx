import { schedule, venueMapHref } from "../data";
import Itinerary from "../Components/Itinerary";
import { A } from "@solidjs/router";
import Marquee from "../Components/Marquee";

export default function Schedule() {
  return (
    <section>
      <div>
        <img src="https://placehold.co/300x300" />
      </div>
      <div>
        <h2>
          Arrival<i> and </i>Ceremony
        </h2>
        <Itinerary
          value={[
            {
              date: schedule.arrivalAndCeremony,
              description: (
                <p>
                  Arrive a little early and enjoy the park, find your seats, and
                  settle in before the ceremony begins.
                </p>
              ),
            },
            {
              date: schedule.iDo,
              description: (
                <p>
                  The moment we say <q>I DO!</q>
                </p>
              ),
            },
          ]}
        />
        <A href={venueMapHref}>View Location</A>
      </div>
      <div>
        <div>
          <h2>
            <strong>Social Hour</strong>
          </h2>
          <Itinerary
            value={[
              {
                date: schedule.socialHour,
                description: (
                  <p>
                    A nice pause in the evening to catch up over light
                    appetizers. Be sure to enjoy the garden and lake views!
                  </p>
                ),
              },
            ]}
          />
          <Marquee srcs={Array(3).fill("https://placehold.co/100x100")} />
        </div>
        <div>
          <h2>
            <strong>Reception</strong>
          </h2>
          <Itinerary
            value={[
              {
                date: schedule.reception,
                description: (
                  <p>Join us for dinner, dancing, and good celebration!</p>
                ),
              },
            ]}
          />
        </div>
      </div>
      <div>
        <img src="https://placehold.co/300x400" />
        <footer>
          <i>
            Life is Better
            <br />
            Together
          </i>
        </footer>
      </div>
    </section>
  );
}
