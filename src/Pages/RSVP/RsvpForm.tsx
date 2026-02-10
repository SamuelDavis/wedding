import type { Targeted } from "@samueldavis/solidlib";
import RadioGroup from "../../Components/RadioGroup";
import { useNavigate } from "@solidjs/router";
import RsvpLayout from "./RsvpLayout";
import Arrow from "../../Components/Arrow";
import { entry, postEndpoint } from "../../data";

export default function RsvpForm() {
  const navigator = useNavigate();

  async function onSubmit(event: Targeted<HTMLFormElement>): Promise<void> {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    if (data.get("email")?.toString()) return navigator("/rsvp/success");

    const entries = Array.from(data.entries());
    const body = new URLSearchParams();
    for (const [key, value] of entries) body.set(entry[key], value.toString());
    fetch(postEndpoint, {
      method: "POST",
      mode: "no-cors",
      body,
    });

    return navigator("/rsvp/success");
  }

  return (
    <RsvpLayout>
      <form onSubmit={onSubmit}>
        <fieldset class="mb-12">
          <label class="body-bold block">Name(s)</label>
          <input
            id="names"
            name="names"
            type="text"
            placeholder="First and last names..."
            autocomplete="name"
            required
            class="border w-full p-2 rounded-sm"
          />
        </fieldset>
        <fieldset class="mb-12 hidden">
          <label class="body-bold">Email</label>
          <input type="email" name="email" />
        </fieldset>
        <RadioGroup
          legend="Will you be able to attend?"
          inputProps={{ name: "attending", required: true }}
          options={[
            { label: "Yes! I'll be there!", value: "yes" },
            { label: "Sorry, I can't make it.", value: "no" },
          ]}
          class="mb-12"
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
                  <small class="text-(--Secondary-Shadow-500)">
                    Vegetarian & vegan (no meat)
                  </small>
                </div>
              ),
            },
          ]}
          class="mb-12"
        />
        <fieldset class="mb-12">
          <legend class="body-bold mb-4">Anything else?</legend>
          <p>Include any allergy or dietary restrictions below.</p>
          <textarea
            id="other"
            name="other"
            rows="5"
            class="border w-full p-2 rounded-sm"
          />
        </fieldset>
        <button type="submit" class="border px-6 py-4 float-right">
          <span>Submit Form</span>
          <Arrow />
        </button>
      </form>
    </RsvpLayout>
  );
}
