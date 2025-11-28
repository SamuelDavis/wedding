import { isArray, type ExtendProps } from "@samueldavis/solidlib";
import { A } from "@solidjs/router";
import { type JSX, splitProps, createSignal, For, Show } from "solid-js";
import { format, set } from "date-fns";

type ItineraryItem = {
  date: Date | [Date, Date];
  description: JSX.Element;
};

const weddingDate = new Date("2026-05-31 00:00:00 GMT-0400");
const addressHref = "https://maps.app.goo.gl/RyRjoQsDTzFjBgZN6";

const itinerary: ItineraryItem[] = [
  {
    date: set(weddingDate, { hours: 13, minutes: 30 }),
    description: (
      <p>
        Arrive a little early and enjoy the park, find your seats, and settle in
        before the ceremony begins.
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
  {
    date: set(weddingDate, { hours: 14, minutes: 30 }),
    description: (
      <p>
        A nice pause in the evening to catch up over light appetizers. Be sure
        to enjoy the garden and lake views!
      </p>
    ),
  },
  {
    date: [
      set(weddingDate, { hours: 15, minutes: 30 }),
      set(weddingDate, { hours: 19 }),
    ],
    description: <p>Join us for dinner, dancing, and good celebration!</p>,
  },
];

export default function Home() {
  return (
    <>
      <Hero />
      <Schedule />
      <Details />
    </>
  );
}

function Hero() {
  return (
    <section>
      <header>
        <div>Join us for the wedding of</div>
        <h2>
          <strong>Samuel</strong> <i>and</i> <strong>Jessica</strong>
        </h2>
        <div>{format(weddingDate, "MMMM dd, yyyy")}</div>
        <a target="_blank" href={addressHref}>
          4330 Weddington Road, Matthews, NC 28105
        </a>
        <A href="rsvp">RSVP</A>
      </header>
    </section>
  );
}

function Schedule() {
  const [getTab, setTab] = createSignal<
    "arrival-and-ceremony" | "social-hour" | "reception"
  >("arrival-and-ceremony");

  return (
    <section>
      <header>
        <h2>Schedule</h2>
      </header>

      <ul>
        <li
          aria-current={getTab() === "arrival-and-ceremony"}
          role="tabpanel"
          id="arrival-and-ceremony"
        >
          <img src="https://placehold.co/300x600" />
          <div>
            <h3>
              <strong>Arrival</strong> <i>and</i> <strong>Ceremony</strong>
            </h3>
            <Itinerary value={itinerary.slice(0, 2)} />
          </div>
        </li>
        <li
          aria-current={getTab() === "social-hour"}
          role="tabpanel"
          id="social-hour"
        >
          <img src="https://placehold.co/300x600" />
          <div>
            <h3>
              <strong>Social Hour</strong>
            </h3>
            <Itinerary value={itinerary.slice(2, 3)} />
            <img src="https://placehold.co/600x200" />
          </div>
        </li>
        <li
          aria-current={getTab() === "reception"}
          role="tabpanel"
          id="reception"
        >
          <img src="https://placehold.co/300x600" />
          <div>
            <h3>
              <strong>Reception</strong>
            </h3>
            <Itinerary value={itinerary.slice(3)} />
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
        </li>
      </ul>

      <nav role="presentation">
        <ul role="tablist">
          <li role="presentation">
            <button
              role="tab"
              aria-current={getTab() === "arrival-and-ceremony"}
              classList={{ outline: getTab() !== "arrival-and-ceremony" }}
              onClick={[setTab, "arrival-and-ceremony"]}
            >
              <strong>Arrival</strong> <i>and</i>
              <br />
              <strong>Ceremony</strong>
            </button>
          </li>
          <li role="presentation">
            <button
              role="tab"
              aria-current={getTab() === "social-hour"}
              classList={{ outline: getTab() !== "social-hour" }}
              onClick={[setTab, "social-hour"]}
            >
              <strong>Social Hour</strong>
            </button>
          </li>
          <li role="presentation">
            <button
              role="tab"
              aria-current={getTab() === "reception"}
              classList={{ outline: getTab() !== "reception" }}
              onClick={[setTab, "reception"]}
            >
              <strong>Reception</strong>
            </button>
          </li>
        </ul>
      </nav>
    </section>
  );
}

function Itinerary(props: ExtendProps<"dl", { value: ItineraryItem[] }>) {
  const [local, parent] = splitProps(props, ["value"]);
  return (
    <dl {...parent}>
      <For each={local.value}>
        {({ date, description }) => {
          const getDates = () => {
            const [from, to] = isArray(date) ? date : [date];
            return { from, to };
          };
          return (
            <>
              <dt>
                <Show
                  when={getDates().to}
                  fallback={<Time date={getDates().from} />}
                >
                  {(getTo) => (
                    <>
                      <Time date={getDates().from} />
                      <span> &mdash; </span>
                      <Time date={getTo()} />
                    </>
                  )}
                </Show>
              </dt>
              <dd>{description}</dd>
            </>
          );
        }}
      </For>
    </dl>
  );
}

function Time(props: Omit<ExtendProps<"time", { date: Date }>, "datetime">) {
  const [local, parent] = splitProps(props, ["date"]);
  return (
    <time datetime={local.date.toUTCString()} {...parent}>
      {local.date.toLocaleTimeString()}
    </time>
  );
}

function Details() {
  return (
    <section>
      <header>
        <h2>Event Details</h2>
      </header>

      <div>
        <ul role="marquee">
          <li>
            <div>
              <h3>
                <strong>Getting</strong> <i>to the</i> <strong>Ceremony</strong>
              </h3>
              <p>The venue is located at a park with plenty of free parking.</p>
              <a target="_blank" href={addressHref}>
                View on Map &rsaquo;
              </a>
            </div>
          </li>
          <li>
            <div>
              <h3>Attire</h3>
              <p>
                Bright, nature-inspired colors are encouraged. The cremony is
                taking place outdoors, so dress for the weather!
              </p>
            </div>
          </li>
          <li>
            <div>
              <h3>Little Ones</h3>
              <p>
                We are only able to accomodate children listed on your invite.
              </p>
            </div>
          </li>
          <li>
            <div>
              <h3>Gifts</h3>
              <p>
                Your presence is the real gift! If you'd still like to give, a
                card box will be available.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}
