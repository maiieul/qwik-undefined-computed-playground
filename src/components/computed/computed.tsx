import { component$, useComputed$ } from "@builder.io/qwik";

export const Computed = component$(({ count }: { count?: number }) => {
  console.log("count", count);

  const double = useComputed$(() => count * 2);

  return (
    <div>
      Computed {count} {double.value}
      <br />
      <button onClick$={() => count && count++}>Child Increment</button>
    </div>
  );
});
