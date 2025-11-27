import type { ExtendProps } from "@samueldavis/solidlib";
import { A } from "@solidjs/router";
import { type JSX, splitProps, createSignal, Match, Switch } from "solid-js";
import { format } from "date-fns";

const weddingDate = new Date("2026-05-31 00:00:00 GMT-0400");
const addressHref = "https://maps.app.goo.gl/RyRjoQsDTzFjBgZN6";

export default function Home() {
  const [getTab, setTab] = createSignal<
    "arrival-and-ceremony" | "social-hour" | "reception"
  >("arrival-and-ceremony");

  return (
    <>
      <section id="homepage-banner">
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

      <section id="homepage-schedule">
        <header>
          <h2>Schedule</h2>
        </header>

        <Switch>
          <Match when={getTab() === "arrival-and-ceremony"}>
            <ScheduleEvent
              role="tabpanel"
              id="arrival-and-ceremony"
              header={
                <>
                  <strong>Arrival</strong> <i>and</i> <strong>Ceremony</strong>
                </>
              }
            >
              <dl>
                <dt>
                  <time datetime="13:30">1:30 PM</time>
                </dt>
                <dd>
                  <p>
                    Arrive a little early and enjoy the park, find your seats,
                    and settle in before the ceremony begins.
                  </p>
                </dd>
                <dt>
                  <time datetime="14:00">2:00 PM</time>
                </dt>
                <dd>
                  <p>
                    The moment we say <q>I DO!</q>
                  </p>
                </dd>
              </dl>
            </ScheduleEvent>
          </Match>
          <Match when={getTab() === "social-hour"}>
            <ScheduleEvent
              role="tabpanel"
              id="social-hour"
              header={<strong>Social Hour</strong>}
            >
              <dl>
                <dt>
                  <time datetime="14:30">2:30 PM</time>
                </dt>
                <dd>
                  <p>
                    A nice pause in the evening to catch up over light
                    appetizers. Be sure to enjoy the garden and lake views!
                  </p>
                </dd>
              </dl>
              <img src="https://placehold.co/600x200" />
            </ScheduleEvent>
          </Match>
          <Match when={getTab() === "reception"}>
            <ScheduleEvent
              role="tabpanel"
              id="reception"
              header={<strong>Reception</strong>}
            >
              <dl>
                <dt>
                  <time datetime="15:30">3:30 PM</time>
                  &mdash;
                  <time datetime="19:00">7:00 PM</time>
                </dt>
                <dd>
                  <p>Join us for dinner, dancing, and good celebration!</p>
                </dd>
              </dl>
              <ul>
                <li>
                  <img src="https://placehold.co/200x200" />
                </li>
                <li>
                  <img src="https://placehold.co/200x200" />
                </li>
                <li>
                  <img src="https://placehold.co/200x200" />
                </li>
              </ul>
            </ScheduleEvent>
          </Match>
        </Switch>

        <nav role="presentation">
          <ul role="tablist">
            <li role="presentation">
              <button role="tab" onClick={[setTab, "arrival-and-ceremony"]}>
                <strong>Arrival</strong> <i>and</i>
                <br />
                <strong>Ceremony</strong>
              </button>
            </li>
            <li role="presentation">
              <button role="tab" onClick={[setTab, "social-hour"]}>
                <strong>Social Hour</strong>
              </button>
            </li>
            <li role="presentation">
              <button role="tab" onClick={[setTab, "reception"]}>
                <strong>Reception</strong>
              </button>
            </li>
          </ul>
        </nav>
      </section>

      <section id="event-details">
        <header>
          <h2>Event Details</h2>
        </header>

        <div>
          <ul>
            <li>
              <div>
                <h3>
                  <strong>Getting</strong> <i>to the</i>{" "}
                  <strong>Ceremony</strong>
                </h3>
                <p>
                  The venue is located at a park with plenty of free parking.
                </p>
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
    </>
  );
}

function ScheduleEvent(props: ExtendProps<"div", { header: JSX.Element }>) {
  const [local, parent] = splitProps(props, ["header", "children"]);
  return (
    <div {...parent}>
      <img src="https://placehold.co/300x600" alt={parent.id} />
      <div>
        <h3>{local.header}</h3>
        {local.children}
      </div>
    </div>
  );
}
