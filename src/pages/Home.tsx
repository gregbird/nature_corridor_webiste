import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Section, Divider, Eyebrow, Headline, NumberMarker } from '../components/ui';

function HeroDiagram() {
  return (
    <figure className="relative">
      <img
        src="/nature_corridor.gif"
        alt="Animated sequence showing the Irish Nature Corridor mapping tool: project locations, corridor connections, and the interactive map interface."
        className="w-full h-auto"
        loading="eager"
      />
    </figure>
  );
}

export default function Home() {
  return (
    <>
      {/* Hero */}
      <Section className="pt-16 pb-20 sm:pt-24 sm:pb-28">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          <div>
            <Eyebrow>Mapping ecological connectivity across Ireland</Eyebrow>
            <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-extralight text-ink leading-[1.1] tracking-tight">
              <strong className="font-semibold">Irish Nature</strong> Corridor
            </h1>
            <p className="mt-6 text-lg font-light text-ink/80 leading-relaxed max-w-editorial">
              A free-to-use GIS mapping tool showing ecological corridors across the island of Ireland — for ecologists, restoration projects, funders, landowners and the general public.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <button
                disabled
                className="inline-flex items-center gap-2 px-6 py-3 bg-ink text-paper font-medium text-[15px] cursor-not-allowed opacity-60"
              >
                Explore the map
                <span className="text-[12px] font-light text-paper/70 border border-paper/30 px-2 py-0.5">
                  Coming end of 2026
                </span>
              </button>
              <Link
                to="/how-it-works"
                className="inline-flex items-center gap-2 px-6 py-3 border border-ink text-ink font-medium text-[15px] hover:bg-ink hover:text-paper transition-colors"
              >
                How it works
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>

          <div className="lg:pl-8">
            <HeroDiagram />
          </div>
        </div>
      </Section>

      <Divider className="max-w-6xl mx-auto" />

      {/* Why connectivity */}
      <Section className="py-20 sm:py-28">
        <div className="max-w-editorial">
          <Eyebrow>Why connectivity matters</Eyebrow>
          <Headline bold="Nature survives" light="when it can move." className="mt-5 text-3xl sm:text-4xl" />
          <p className="mt-6 text-[16px] font-light text-ink/80 leading-[1.7]">
            Hedgerows, rivers, woodlands and wetlands are more than individual habitats — they are part of a living network. When that network is broken, species become isolated, populations decline, and ecosystems lose their resilience to climate change.
          </p>
          <p className="mt-4 text-[16px] font-light text-ink/80 leading-[1.7]">
            Irish Nature Corridor maps where those connections still exist, where they have been lost, and where restoring them would have the greatest impact. It turns the idea of ecological corridors into something you can see, measure, and act on.
          </p>
        </div>
      </Section>

      <Divider className="max-w-6xl mx-auto" />

      {/* Aligned with national targets */}
      <Section className="py-20 sm:py-28">
        <div className="max-w-editorial">
          <Eyebrow>Aligned with national targets</Eyebrow>
          <Headline bold="Built to support" light="Ireland's nature goals." className="mt-5 text-3xl sm:text-4xl" />
          <div className="mt-6 space-y-5">
            <p className="text-[16px] font-light text-ink/80 leading-[1.7]">
              Ireland's fourth National Biodiversity Action Plan commits to identifying and protecting ecological corridors. The EU Nature Restoration Law sets binding targets for restoring degraded ecosystems. Irish Nature Corridor provides the mapped evidence base to help meet those commitments — at a scale that is useful for national policy and local action alike.
            </p>
            <p className="text-[16px] font-light text-ink/80 leading-[1.7]">
              It is designed to complement, not replace, existing designations and surveys. Existing protected areas are the anchors; the corridors show how to connect them.
            </p>
          </div>
        </div>
      </Section>

      <Divider className="max-w-6xl mx-auto" />

      {/* Building a movement */}
      <Section className="py-20 sm:py-28">
        <div className="max-w-editorial">
          <Eyebrow>Building a movement</Eyebrow>
          <Headline bold="When enough people" light="see the map, things shift." className="mt-5 text-3xl sm:text-4xl" />
          <p className="mt-6 text-[16px] font-light text-ink/80 leading-[1.7]">
            Research on social change suggests that when roughly a quarter of a population actively adopts a new behaviour, it can reach a tipping point and spread rapidly. Irish Nature Corridor is built on that principle: make the data free, make the map open, and let anyone contribute.
          </p>
        </div>

      </Section>

      <Divider className="max-w-6xl mx-auto" />

      {/* Turning a map into decisions */}
      <Section className="py-20 sm:py-28">
        <Eyebrow>Turning a map into decisions</Eyebrow>
        <Headline bold="From view" light="to action." className="mt-5 text-3xl sm:text-4xl" />

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          <div>
            <NumberMarker number="1" className="block mb-3" />
            <h3 className="text-lg font-medium text-ink">See the network</h3>
            <p className="mt-3 text-[15px] font-light text-ink/75 leading-[1.7]">
              Visualise where habitat patches are connected and where the gaps fall — at a regional or local scale, in seconds.
            </p>
          </div>
          <div>
            <NumberMarker number="2" className="block mb-3" />
            <h3 className="text-lg font-medium text-ink">Find the gaps</h3>
            <p className="mt-3 text-[15px] font-light text-ink/75 leading-[1.7]">
              Identify the specific places where a new hedgerow, wetland or woodland would do most to reconnect the network.
            </p>
          </div>
          <div>
            <NumberMarker number="3" className="block mb-3" />
            <h3 className="text-lg font-medium text-ink">Make the case</h3>
            <p className="mt-3 text-[15px] font-light text-ink/75 leading-[1.7]">
              Export a report pack that translates the map into evidence — ready to attach to a funding bid, a planning submission or a community plan.
            </p>
          </div>
        </div>
      </Section>

      <Divider className="max-w-6xl mx-auto" />

      {/* Status & invitation */}
      <Section className="py-20 sm:py-28">
        <div className="max-w-editorial">
          <Eyebrow>Status &amp; invitation</Eyebrow>
          <Headline bold="The map is coming." light="Your input shapes it." className="mt-5 text-3xl sm:text-4xl" />
          <p className="mt-6 text-[16px] font-light text-ink/80 leading-[1.7]">
            Irish Nature Corridor is in active development. The interactive map will be available by the end of 2026. In the meantime, we are gathering feedback from ecologists, community groups, landowners and funders to make sure the tool is useful from day one.
          </p>
          <div className="mt-10">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 border border-ink text-ink font-medium text-[15px] hover:bg-ink hover:text-paper transition-colors"
            >
              Share your thoughts
              <ArrowRight size={16} />
            </Link>
          </div>
          <p className="mt-12 text-[14px] font-light text-ink/50 leading-relaxed">
            Funded by the Lifes2Good Foundation and Dulra.
          </p>
        </div>
      </Section>
    </>
  );
}
