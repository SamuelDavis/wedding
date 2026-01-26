import type { Targeted } from "@samueldavis/solidlib";
import Time from "../Components/Time";
import { placeholder, rsvpDate, weddingDate } from "../data";
import RadioGroup from "../Components/RadioGroup";
import { useNavigate } from "@solidjs/router";

export default function RSVP() {
  const navigator = useNavigate();

  function onSubmit(event: Targeted<HTMLFormElement>): void {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const entries = Array.from(data.entries());
    console.debug(entries);
    navigator("/rsvp/success");
  }

  return (
    <article>
      <header>
        <h2>
          <Time value={weddingDate} format="short" />
        </h2>
        <h1>Be Our Guest</h1>
        <p>We can't wait to celebrate with you!</p>
        <p>
          Please RSVP by <Time value={rsvpDate} />
        </p>
      </header>
      <section>
        <figure>
          <img src={placeholder()} />
          <q>Bear with one another in love</q>
        </figure>
        <div>
          <form onSubmit={onSubmit}>
            <fieldset>
              <label for="names">Name(s)</label>
              <input
                id="names"
                name="names"
                type="text"
                placeholder="First and last names..."
                required
              />
            </fieldset>
            <RadioGroup
              legend="Will you be able to attend?"
              inputProps={{ name: "attending", required: true }}
              options={[
                { label: "Yes! I'll be there!", value: "yes" },
                { label: "Sorry, I can't make it.", value: "no" },
              ]}
            />
            <RadioGroup
              legend="Select your entree"
              inputProps={{ name: "entree", required: true }}
              options={[
                "Lemon butter chicken",
                "Southwest pesto salmon",
                {
                  value: "Lentil bolognese pappardelle",
                  label: (value: string) => (
                    <div>
                      <span>{value}</span>
                      <br />
                      <small>Vegetarian & vegan (no meat)</small>
                    </div>
                  ),
                },
              ]}
            />
            <fieldset>
              <legend>Anything else?</legend>
              <p>Include any allergy or dietary restrictions below.</p>
              <textarea id="other" name="other"></textarea>
            </fieldset>
            <input type="submit" />
          </form>
        </div>
      </section>
    </article>
  );
}
