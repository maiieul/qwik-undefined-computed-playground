import { component$, useSignal } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Computed } from "~/components/computed/computed";

export default component$(() => {
  const count = useSignal<number>(1);

  return (
    <>
      <h1>Hi 👋</h1>
      <div>
        <Computed count={count.value} />
        <br />
        <button onClick$={() => count.value && count.value++}>Increment</button>
        <button onClick$={() => (count.value = undefined)}>undefinify</button>
        <button onClick$={() => (count.value = 1)}>redefine</button>
        <br />
        Happy coding.
      </div>
    </>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Qwik",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
