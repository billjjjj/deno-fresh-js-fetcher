import { JSX } from "preact";
import { IS_BROWSER } from "$fresh/runtime.ts";

export function Button(props: JSX.HTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      {...props}
      disabled={false}
      // disabled={!IS_BROWSER || props.disabled}
      class="px-10 py-5 border(gray-100 2) hover:bg-gray-200 bg-red-100"
    />
  );
}
