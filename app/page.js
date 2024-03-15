import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { HomePage } from "@/components/HomePage";
import { Portfolio } from "@/components/Portfolio";

export default function Home() {
  return (
    <main className="w-screen  h-screen bg-gradient-to-b from-blue-50 to-red-100">
      <section
        id="HomePage"
        className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48"
      >
        <HomePage />
      </section>
      <section id="About">
        <About />
      </section>
      <section id="Portfolio">
        <Portfolio />
      </section>
      <section id="Contact">
        <Contact />
      </section>
    </main>
  );
}
