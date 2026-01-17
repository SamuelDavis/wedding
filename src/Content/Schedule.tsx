import { set } from "date-fns";
import { weddingDate } from "../data";
import Itinerary from "../Components/Itinerary";
import { For } from "solid-js";

export default function Schedule() {
  return (
    <section>
      <div>
        <img src="https://placehold.co/300x600" />
        <div>
          <h3>
            <strong>Arrival</strong> <i>and</i> <strong>Ceremony</strong>
          </h3>
          <Itinerary
            value={[
              {
                date: set(weddingDate, { hours: 13, minutes: 30 }),
                description: (
                  <p>
                    Arrive a little early and enjoy the park, find your seats,
                    and settle in before the ceremony begins.
                  </p>
                ),
              },
              {
                date: set(weddingDate, { hours: 14 }),
                description: (
                  <p>
                    The moment we say <q>I DO!</q>
                  </p>
                ),
              },
            ]}
          />
        </div>
      </div>
      <div>
        <img src="https://placehold.co/300x600" />
        <div>
          <h3>
            <strong>Social Hour</strong>
          </h3>
          <Itinerary
            value={[
              {
                date: set(weddingDate, { hours: 14, minutes: 30 }),
                description: (
                  <p>
                    A nice pause in the evening to catch up over light
                    appetizers. Be sure to enjoy the garden and lake views!
                  </p>
                ),
              },
            ]}
          />
          <img src="https://placehold.co/600x200" />
        </div>
      </div>
      <div>
        <img src="https://placehold.co/300x600" />
        <div>
          <h3>
            <strong>Reception</strong>
          </h3>
          <Itinerary
            value={[
              {
                date: [
                  set(weddingDate, { hours: 15, minutes: 30 }),
                  set(weddingDate, { hours: 19 }),
                ],
                description: (
                  <p>Join us for dinner, dancing, and good celebration!</p>
                ),
              },
            ]}
          />
          <ul>
            <For each={Array(3).fill("https://placehold.co/200x200")}>
              {(src) => (
                <li>
                  <img src={src} />
                </li>
              )}
            </For>
          </ul>
        </div>
      </div>
    </section>
  );
}
