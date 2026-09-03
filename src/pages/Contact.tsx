import { Section, Divider, Eyebrow } from '../components/ui';

const audienceBlocks = [
  {
    title: 'Ecologists',
    desc: 'If you work in ecology or conservation, we want to hear what the map would need to do to be useful in your day-to-day work — what layers you would trust, what resolution you need, and what is missing from existing tools.',
  },
  {
    title: 'Projects & communities',
    desc: 'If you are running a restoration project or part of a community group, tell us how you would use the map to plan, prioritise and make the case for your work. Your input shapes the report pack.',
  },
  {
    title: 'Funders & public bodies',
    desc: 'If you fund or oversee nature restoration, we want to understand how corridor maps could fit into your assessment and reporting processes — what evidence you need and at what scale.',
  },
  {
    title: 'Landowners & farmers',
    desc: 'If you manage land, your perspective is essential. Tell us what would make the map useful and trustworthy for you, and what concerns you have about how the data is presented.',
  },
];

export default function Contact() {
  return (
    <>
      {/* Hero */}
      <Section className="pt-16 pb-12 sm:pt-24 sm:pb-16">
        <Eyebrow>Contact</Eyebrow>
        <h1 className="mt-6 text-4xl sm:text-5xl font-extralight text-ink leading-[1.1] tracking-tight">
          <strong className="font-semibold">Get</strong> in touch
        </h1>
        <p className="mt-6 text-lg font-light text-ink/80 leading-relaxed max-w-editorial">
          Irish Nature Corridor is being shaped by the people who will use it. Whether you are an ecologist, a funder, a landowner or a curious neighbour, your input makes the tool better.
        </p>
      </Section>

      <Divider className="max-w-6xl mx-auto" />

      {/* Audience blocks */}
      <Section className="py-16 sm:py-24">
        <div className="grid gap-6 sm:grid-cols-2">
          {audienceBlocks.map((block) => (
            <div key={block.title} className="border border-ink/20 p-6 sm:p-8 bg-white/40">
              <h3 className="text-lg font-medium text-ink">{block.title}</h3>
              <p className="mt-3 text-[15px] font-light text-ink/75 leading-[1.7]">
                {block.desc}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <Divider className="max-w-6xl mx-auto" />

      {/* Contribute section */}
      <Section className="py-16 sm:py-24">
        <div className="max-w-editorial">
          <Eyebrow>Contribute</Eyebrow>
          <h2 className="mt-5 text-2xl sm:text-3xl font-extralight text-ink leading-tight">
            <strong className="font-semibold">Help us</strong> build the map
          </h2>
          <p className="mt-5 text-[16px] font-light text-ink/80 leading-[1.7]">
            Irish Nature Corridor is built on open data, and it gets better when people contribute. If you have habitat data, species records or local knowledge that could improve the models, we want to hear from you. If you are part of a project that could ground-truth corridor maps in your area, there may be opportunities to collaborate.
          </p>
          <p className="mt-4 text-[16px] font-light text-ink/80 leading-[1.7]">
            Get in touch by email at{' '}
            <span className="font-medium text-ink">hello@irishnaturecorridor.org</span>.
          </p>
        </div>
      </Section>

      <Divider className="max-w-6xl mx-auto" />

      {/* About / attribution */}
      <Section className="py-16 sm:py-24">
        <div className="max-w-editorial">
          <Eyebrow>About &amp; attribution</Eyebrow>
          <h2 className="mt-5 text-2xl sm:text-3xl font-extralight text-ink leading-tight">
            <strong className="font-semibold">Who is</strong> behind this
          </h2>
          <p className="mt-5 text-[16px] font-light text-ink/80 leading-[1.7]">
            Irish Nature Corridor is a project of Dulra (www.dulra.io), funded by the Lifes2Good Foundation. It is developed in collaboration with ecologists, data scientists and community partners across the island of Ireland.
          </p>
          <p className="mt-4 text-[15px] font-light text-ink/60 leading-[1.7]">
            The Irish Nature Corridor name and logo may not be used by third parties without written permission. For partnership or media enquiries, please use the contact details above.
          </p>
        </div>
      </Section>
    </>
  );
}
