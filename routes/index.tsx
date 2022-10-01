import Counter from "../islands/Counter.tsx";
import Fetcher from "../islands/Fetcher.tsx";

export default function Home() {
  return (
    <div class="p-4 mx-auto max-w-screen-md">
      <img
        src="/logo.svg"
        class="w-32 h-32"
        alt="the fresh logo: a sliced lemon dripping with juice"
      />
      <Counter start={3} />
      <Fetcher />
      <section
        id="get-started-today"
        class="relative overflow-hidden bg-blue-600 py-32"
      >
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
          <div class="mx-auto max-w-lg text-center">
            <h2 class="font-display text-3xl tracking-tight text-white sm:text-4xl">
              Get started today
            </h2>
            <p class="mt-4 text-lg tracking-tight text-white">
              It’s time to take control of your books. Buy our software so you
              can feel like you’re doing something productive.
            </p>
            <a
              class="group inline-flex items-center justify-center rounded-full py-2 px-4 text-sm font-semibold focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 bg-white text-slate-900 hover:bg-blue-50 active:bg-blue-200 active:text-slate-600 focus-visible:outline-white mt-10"
              href="/register"
            >
              Get 6 months free
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
