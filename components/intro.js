import { CMS_NAME } from "../lib/constants";

export default function Intro() {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12 ">
      <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8">
        Zen-lancer
      </h1>
      <h4 className="tracking-tight font-normal text-blue-500 text-center md:text-left text-lg mt-5 md:pl-8">
        UI Design and Algorithms Tips for non-coders
      </h4>
    </section>
  );
}
