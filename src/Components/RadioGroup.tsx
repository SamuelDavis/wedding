import { type ExtendProps, isString } from "@samueldavis/solidlib";
import { type JSX, splitProps, For } from "solid-js";

type RenderOptionFn = (value: string) => JSX.Element;

export default function RadioGroup<Value extends string>(
  props: ExtendProps<
    "fieldset",
    {
      value?: Value;
      legend: string;
      options: (Value | { value: Value; label: string | RenderOptionFn })[];
      inputProps: ExtendProps<"input", {}, "value" | "type">;
    }
  >,
) {
  const [local, parent] = splitProps(props, [
    "children",
    "value",
    "legend",
    "options",
    "inputProps",
  ]);
  const getOptions = (): { value: string; label: RenderOptionFn }[] =>
    local.options.map((option) => {
      if (isString(option)) return { value: option, label: () => option };
      const { value, label } = option;
      return {
        value,
        label: isString(label) ? () => label : label,
      };
    });

  return (
    <fieldset {...parent}>
      <legend>{local.legend}</legend>
      <For each={getOptions()}>
        {(option) => (
          <label>
            <input
              type="radio"
              value={option.value}
              checked={local.value ? local.value === option.value : undefined}
              {...local.inputProps}
            />
            {option.label(option.value)}
          </label>
        )}
      </For>
      {local.children}
    </fieldset>
  );
}
