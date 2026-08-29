import type { Dict } from "@/lib/content";
import { MINI_LEVEL } from "@/lib/levels";
import ShikakuBoard from "./ShikakuBoard";

const STEP_TONES = ["#43A860", "#5B8DEF", "#E87A55"];
const STEP_PLACED: number[][] = [[], [0, 2], [0, 1, 2, 3, 4, 5]];

/** Three-step Shikaku rules explainer with real mini boards. */
export default function HowToPlay({ howTo }: { howTo: Dict["howTo"] }) {
  return (
    <section id="how-to-play" className="px-6 py-24" aria-labelledby="howto-title">
      <div className="mx-auto max-w-5xl">
        <div className="mx-auto max-w-2xl text-center">
          <h2 id="howto-title" className="text-balance text-4xl font-extrabold tracking-tight sm:text-5xl">
            {howTo.h2}
          </h2>
          <p className="mt-5 text-lg text-ink-soft">{howTo.sub}</p>
        </div>
        <ol className="mt-14 grid gap-6 sm:grid-cols-3">
          {howTo.steps.map((step, i) => (
            <li key={step.title} className="candy-panel flex flex-col p-7">
              <span
                className="flex h-10 w-10 items-center justify-center rounded-xl text-lg font-extrabold text-white"
                style={{ background: STEP_TONES[i], boxShadow: "0 3px 0 rgba(0,0,0,0.2)" }}
                aria-hidden
              >
                {i + 1}
              </span>
              <h3 className="mt-5 text-xl font-extrabold tracking-tight">{step.title}</h3>
              <p className="mt-2 flex-1 leading-relaxed text-ink-soft">{step.body}</p>
              <div className="mx-auto mt-6 w-full max-w-[190px]" aria-hidden>
                <ShikakuBoard level={MINI_LEVEL} placed={STEP_PLACED[i]} />
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
