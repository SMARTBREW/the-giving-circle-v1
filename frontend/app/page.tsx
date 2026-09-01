import Hero from "@/components/hero";
import ChampionSection from "@/components/champion-section";
import FadeInSection from "@/components/fade-in-section";
import SectionHeading from "@/components/section-heading";
import ContactForm from "@/components/contact-form";
import { HOW_THE_CIRCLE_WORKS, InterFont, SITE } from "@/constants";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ChampionSection />

      <section id="about">
        <SectionHeading title="Why we gather" />
        <FadeInSection className="py-20 px-[4.5rem] mt-16 mx-[2rem] md:mx-[4.5rem] border border-[#BDBDBD]">
          <p
            className={`text-[#000000] text-center tracking-[-0.04em] ${InterFont.className}`}
          >
            We verify partners, enable collective giving, and report impact.
            Donations go directly to NGOs. Together, our circle turns small
            gifts into lasting change. {SITE.tagline}
          </p>
        </FadeInSection>
      </section>

      <section id="causes">
        <SectionHeading title="How our circle works" />
        <FadeInSection className="mt-16 mx-[2rem] md:mx-[4.5rem] grid grid-cols-1 md:grid-cols-3 gap-8">
          {HOW_THE_CIRCLE_WORKS.map((value) => (
            <div key={value.title} className="py-20 px-[4.5rem] border border-[#BDBDBD]">
              <h3
                className={`text-[#000000] text-2xl font-bold tracking-[-0.06em] ${InterFont.className}`}
              >
                {value.title}
              </h3>
              <p
                className={`text-[#000000] mt-8 tracking-[-0.04em] ${InterFont.className}`}
              >
                {value.body}
              </p>
            </div>
          ))}
        </FadeInSection>
      </section>

      <section id="contact">
        <SectionHeading title="Write to us" />
        <FadeInSection className="py-20 px-[4.5rem] mt-16 mx-[2rem] md:mx-[4.5rem] border border-[#BDBDBD]">
          <p
            className={`text-[#000000] text-center mb-8 tracking-[-0.04em] ${InterFont.className}`}
          >
            Champion a cause, partner as a verified NGO, or start a Young
            Champions project. Tell us who you are — we will write back.
          </p>
          <ContactForm />
        </FadeInSection>
      </section>
    </>
  );
}
