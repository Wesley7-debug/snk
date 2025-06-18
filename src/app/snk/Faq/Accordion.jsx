import FaqAccordion from "./Faq";


export default function Accordion() {
  return (
    <main className="h-full bg-bg  p-10">
      <h1 className="text-3xl lg:text-4xl font-bold font-poppins">What people are asking</h1>
      <FaqAccordion />
    </main>
  );
}
