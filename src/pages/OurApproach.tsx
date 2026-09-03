import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { Section, Divider, Eyebrow, NumberMarker } from '../components/ui';

const tocItems = [
  { id: 'two-questions', label: 'Two questions kept separate' },
  { id: 'what-we-model', label: 'What we model' },
  { id: 'whole-island', label: 'The whole island' },
  { id: 'data-sources', label: 'Data sources' },
  { id: 'recording-effort', label: 'Correcting for recording effort' },
  { id: 'habitat-suitability', label: 'Habitat suitability' },
  { id: 'suitability-to-connectivity', label: 'From suitability to connectivity' },
  { id: 'validation', label: 'How outputs are validated' },
  { id: 'accuracy', label: 'Accuracy today and how it improves' },
  { id: 'architecture', label: 'Architecture' },
  { id: 'sensitive-species', label: 'Sensitive species' },
];

function TOC() {
  const [open, setOpen] = useState(false);
  return (
    <>
      {/* Desktop sticky sidebar */}
      <nav aria-label="On this page" className="hidden lg:block sticky top-24 self-start">
        <p className="font-medium text-[13px] uppercase tracking-[0.15em] text-ink/50 mb-4">
          On this page
        </p>
        <ul className="space-y-2.5">
          {tocItems.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className="block text-[13px] font-light text-ink/60 hover:text-cornflower transition-colors leading-snug"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Mobile collapsible */}
      <nav aria-label="On this page" className="lg:hidden mb-8">
        <button
          className="flex items-center justify-between w-full px-4 py-3 border border-ink/20 bg-white/40 text-[15px] font-medium text-ink"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
        >
          On this page
          <ChevronDown size={16} className={`transition-transform ${open ? 'rotate-180' : ''}`} />
        </button>
        {open && (
          <ul className="mt-2 px-4 py-2 border border-ink/20 bg-white/40 space-y-2">
            {tocItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={() => setOpen(false)}
                  className="block text-[14px] font-light text-ink/70 hover:text-cornflower transition-colors py-1.5"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        )}
      </nav>
    </>
  );
}

const accuracyItems = [
  { num: '1', title: 'More data, better models', desc: 'As new habitat surveys, hedgerow maps and species records are published, the engine reprocesses the island with finer inputs, and corridor maps gain resolution.' },
  { num: '2', title: 'Ground-truthing', desc: 'Partner projects and community groups can submit verified field observations that are used to check and refine model predictions.' },
  { num: '3', title: 'Method review', desc: 'The modelling approach is reviewed against published connectivity science and updated as methods in the field advance.' },
  { num: '4', title: 'User feedback', desc: 'People who know their local landscape can flag where the map looks right and where it does not, helping us identify systematic errors to correct.' },
];

const architectureItems = [
  { lead: 'Open-source by design.', body: ' The engine is built on open-source geospatial tooling. The code and methods are documented so that others can inspect, reproduce and extend the work.' },
  { lead: 'Reproducible processing.', body: ' Every output is traceable to the exact datasets and code versions that produced it. When the engine reprocesses the island, the new outputs carry their own provenance record.' },
  { lead: 'Low-cost infrastructure.', body: ' The entire pipeline is designed to run on modest computing resources. This is deliberate: it keeps the tool sustainable and allows frequent reprocessing as new data arrives.' },
  { lead: 'Open data in, open data out.', body: ' The tool consumes freely available datasets and produces outputs that are free to view and, for registered users, free to export. No paywalls, no proprietary layers.' },
];

const dataSourcesGroups = [
  {
    heading: 'Habitat & land cover',
    items: ['CORINE land cover', 'Hedgerow maps (where available)', 'Peatland surveys', 'Native woodland inventories', 'Coastal habitat maps'],
  },
  {
    heading: 'Species records',
    items: ['National Biodiversity Data Centre records', 'BirdWatch Ireland survey data', 'Bat Conservation Ireland records', 'Butterfly Monitoring Scheme data'],
  },
  {
    heading: 'Physical & environmental',
    items: ['River and waterbody layers (EPA / OSi)', 'Elevation and terrain data', 'Soil and geology maps', 'Climate normal data'],
  },
];

export default function OurApproach() {
  return (
    <>
      {/* Hero */}
      <Section className="pt-16 pb-12 sm:pt-24 sm:pb-16">
        <Eyebrow>Our approach</Eyebrow>
        <h1 className="mt-6 text-4xl sm:text-5xl font-extralight text-ink leading-[1.1] tracking-tight">
          <strong className="font-semibold">Our</strong> approach
        </h1>
        <p className="mt-6 text-lg font-light text-ink/80 leading-relaxed max-w-editorial">
          A methods statement, in plain language. This page sets out what Irish Nature Corridor models, how it models it, where the data comes from, and how the outputs are checked — so that anyone using the map can understand its strengths and its limits.
        </p>
      </Section>

      <Divider className="max-w-6xl mx-auto" />

      {/* Two-column: TOC sidebar + editorial content */}
      <Section className="py-16 sm:py-24">
        <div className="grid gap-12 lg:grid-cols-[200px_1fr] lg:gap-16">
          <TOC />

          <div className="max-w-editorial space-y-16">
            {/* Two questions kept separate */}
            <article id="two-questions" className="scroll-mt-24">
              <h2 className="text-2xl sm:text-3xl font-extralight text-ink leading-tight">
                <strong className="font-semibold">Two questions</strong> kept separate
              </h2>
              <p className="mt-5 text-[16px] font-light text-ink/80 leading-[1.7]">
                Irish Nature Corridor answers two distinct questions, and it is important not to conflate them. The first is: <em>where is suitable habitat for a given species group likely to exist?</em> The second is: <em>given those habitat patches, how well connected are they?</em>
              </p>
              <p className="mt-4 text-[16px] font-light text-ink/80 leading-[1.7]">
                The first is a question about habitat suitability — driven by environmental conditions and species preferences. The second is a question about landscape structure — driven by the spatial arrangement of patches and the ease or difficulty of moving between them. Combining the two into a single score would obscure more than it reveals. The tool reports them separately, and the connectivity outputs depend on the suitability outputs, not the other way around.
              </p>
            </article>

            <Divider />

            {/* What we model */}
            <article id="what-we-model" className="scroll-mt-24">
              <h2 className="text-2xl sm:text-3xl font-extralight text-ink leading-tight">
                <strong className="font-semibold">What</strong> we model
              </h2>
              <p className="mt-5 text-[16px] font-light text-ink/80 leading-[1.7]">
                The engine models habitat suitability and connectivity for a set of species groups rather than for individual species. This is a deliberate choice: individual-species models require more data than is consistently available across the island, and they produce outputs that are too specific to be useful for landscape-scale planning.
              </p>
              <p className="mt-4 text-[16px] font-light text-ink/80 leading-[1.7]">
                Species groups are defined by shared habitat needs and movement capabilities — for example, woodland passerines, riparian invertebrates, or wetland plants. A corridor that works for one group will often work for others with similar requirements, which makes the outputs more robust and more actionable.
              </p>
            </article>

            <Divider />

            {/* The whole island */}
            <article id="whole-island" className="scroll-mt-24">
              <h2 className="text-2xl sm:text-3xl font-extralight text-ink leading-tight">
                <strong className="font-semibold">The whole</strong> island
              </h2>
              <p className="mt-5 text-[16px] font-light text-ink/80 leading-[1.7]">
                Irish Nature Corridor covers the entire island of Ireland — all 32 counties, north and south. Ecological corridors do not respect administrative borders, and neither does the tool. Processing the island as a single unit avoids the artificial breaks that would arise from running separate models on either side of the border, where the same habitat types and species communities exist on both sides.
              </p>
              <p className="mt-4 text-[16px] font-light text-ink/80 leading-[1.7]">
                Where data sources differ in availability or resolution between jurisdictions, the engine standardises to the coarsest common resolution so that outputs are comparable across the island.
              </p>
            </article>

            <Divider />

            {/* Data sources */}
            <article id="data-sources" className="scroll-mt-24">
              <h2 className="text-2xl sm:text-3xl font-extralight text-ink leading-tight">
                <strong className="font-semibold">Data</strong> sources
              </h2>
              <p className="mt-5 text-[16px] font-light text-ink/80 leading-[1.7]">
                The engine uses only freely available, open datasets. Where a dataset covers only part of the island, it is supplemented or generalised so that the full island can be processed consistently. The main groups of data sources are:
              </p>

              <div className="mt-8 space-y-8">
                {dataSourcesGroups.map((group) => (
                  <div key={group.heading}>
                    <h3 className="text-[15px] font-medium text-ink mb-3">{group.heading}</h3>
                    <ul className="space-y-2">
                      {group.items.map((item) => (
                        <li key={item} className="flex items-start gap-3 text-[15px] font-light text-ink/75">
                          <span className="inline-block w-1 h-1 rounded-full bg-cornflower mt-2.5 shrink-0" aria-hidden="true" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </article>

            <Divider />

            {/* Correcting for recording effort */}
            <article id="recording-effort" className="scroll-mt-24">
              <h2 className="text-2xl sm:text-3xl font-extralight text-ink leading-tight">
                <strong className="font-semibold">Correcting</strong> for recording effort
              </h2>
              <p className="mt-5 text-[16px] font-light text-ink/80 leading-[1.7]">
                Species records are not evenly distributed. More records come from near roads, towns, nature reserves and popular walking routes — not because more species live there, but because more people are there to record them. Without correcting for this, the model would overestimate biodiversity in accessible areas and underestimate it in remote ones.
              </p>
              <p className="mt-4 text-[16px] font-light text-ink/80 leading-[1.7]">
                The engine adjusts for recording effort by modelling the expected number of records given accessibility, population density and survey coverage, then comparing observed records against that expectation. Areas with fewer records than expected are not assumed to be species-poor; they are flagged as under-recorded, and their suitability estimates carry lower confidence.
              </p>
            </article>

            <Divider />

            {/* Habitat suitability */}
            <article id="habitat-suitability" className="scroll-mt-24">
              <h2 className="text-2xl sm:text-3xl font-extralight text-ink leading-tight">
                <strong className="font-semibold">Habitat</strong> suitability
              </h2>
              <p className="mt-5 text-[16px] font-light text-ink/80 leading-[1.7]">
                For each species group, the engine estimates the probability that suitable habitat exists in a given location. This is based on the environmental conditions at that location — land cover, soil type, elevation, proximity to water, and where available, more detailed habitat maps — combined with what is known about the group's habitat preferences.
              </p>
              <p className="mt-4 text-[16px] font-light text-ink/80 leading-[1.7]">
                The output is a suitability surface: a grid covering the island where each cell carries a score from 0 to 1. High scores indicate habitat that is likely to support the group; low scores indicate habitat that probably does not. Suitability is not the same as confirmed presence — it is a modelled estimate, and it is reported with a confidence level.
              </p>
            </article>

            <Divider />

            {/* From suitability to connectivity */}
            <article id="suitability-to-connectivity" className="scroll-mt-24">
              <h2 className="text-2xl sm:text-3xl font-extralight text-ink leading-tight">
                <strong className="font-semibold">From suitability</strong> to connectivity
              </h2>
              <p className="mt-5 text-[16px] font-light text-ink/80 leading-[1.7]">
                The suitability surface is then used to identify habitat patches — contiguous areas of high suitability above a minimum size. These patches are the nodes of the connectivity model.
              </p>
              <p className="mt-4 text-[16px] font-light text-ink/80 leading-[1.7]">
                Connectivity between patches is modelled using two complementary approaches. Least-cost path analysis identifies the single most efficient route between two patches given the resistance of the intervening landscape. Circuit theory treats the landscape as a conductive surface and models all possible movement paths simultaneously, which better captures the diffuse, exploratory nature of how many species actually move.
              </p>
              <p className="mt-4 text-[16px] font-light text-ink/80 leading-[1.7]">
                The combination produces corridor maps that show both the most likely routes and the broader landscape context through which movement occurs.
              </p>
            </article>

            <Divider />

            {/* How outputs are validated */}
            <article id="validation" className="scroll-mt-24">
              <h2 className="text-2xl sm:text-3xl font-extralight text-ink leading-tight">
                <strong className="font-semibold">How outputs</strong> are validated
              </h2>
              <p className="mt-5 text-[16px] font-light text-ink/80 leading-[1.7]">
                Modelled outputs are checked against independent data wherever possible. This includes comparing predicted habitat patches against known designated sites, checking predicted corridors against radio-tracking or mark-recapture data where it exists, and reviewing outputs with ecologists who know specific landscapes.
              </p>
              <p className="mt-4 text-[16px] font-light text-ink/80 leading-[1.7]">
                Validation is not a one-time step. Every time the engine reprocesses the island with new data, the previous outputs are compared to the new ones, and large or unexpected changes are flagged for review. This helps distinguish genuine ecological change from artefacts of the modelling process.
              </p>
            </article>

            <Divider />

            {/* Accuracy today and how it improves */}
            <article id="accuracy" className="scroll-mt-24">
              <h2 className="text-2xl sm:text-3xl font-extralight text-ink leading-tight">
                <strong className="font-semibold">Accuracy</strong> today and how it improves
              </h2>
              <p className="mt-5 text-[16px] font-light text-ink/80 leading-[1.7]">
                The current outputs are best understood as a high-resolution starting point, not a final answer. They are more reliable in areas with better underlying data and for species groups that have been well studied. They are less reliable in under-recorded areas and for groups whose habitat needs are poorly documented. The tool is transparent about this: every output carries a confidence level, and users can see which datasets fed into it.
              </p>
              <p className="mt-4 text-[16px] font-light text-ink/80 leading-[1.7]">
                Accuracy improves over four pathways:
              </p>

              <div className="mt-8 grid gap-6 sm:grid-cols-2">
                {accuracyItems.map((item) => (
                  <div key={item.num} className="border-l border-ink/20 pl-5">
                    <NumberMarker number={item.num} className="block mb-2" />
                    <h3 className="text-[16px] font-medium text-ink">{item.title}</h3>
                    <p className="mt-2 text-[14px] font-light text-ink/70 leading-[1.6]">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </article>

            <Divider />

            {/* Architecture */}
            <article id="architecture" className="scroll-mt-24">
              <h2 className="text-2xl sm:text-3xl font-extralight text-ink leading-tight">
                <strong className="font-semibold">Architecture</strong>
              </h2>
              <div className="mt-5 space-y-4">
                {architectureItems.map((item, i) => (
                  <p key={i} className="text-[16px] font-light text-ink/80 leading-[1.7]">
                    <strong className="font-medium">{item.lead}</strong>
                    {item.body}
                  </p>
                ))}
              </div>
            </article>

            <Divider />

            {/* Sensitive species */}
            <article id="sensitive-species" className="scroll-mt-24">
              <h2 className="text-2xl sm:text-3xl font-extralight text-ink leading-tight">
                <strong className="font-semibold">Sensitive</strong> species
              </h2>
              <p className="mt-5 text-[16px] font-light text-ink/80 leading-[1.7]">
                Some species are vulnerable to disturbance, persecution or collection — raptor nesting sites, bat roosts, and rare plant populations among them. Irish Nature Corridor does not display records of sensitive species at a location or resolution that could lead to them being disturbed. Where a sensitive species record contributes to a suitability model, it is aggregated to a resolution that preserves the ecological signal without revealing the exact location.
              </p>
              <p className="mt-4 text-[16px] font-light text-ink/80 leading-[1.7]">
                The tool follows the access controls of its source datasets: if a record is withheld at source, it is withheld in the outputs. This is a standing principle, not a one-time decision, and it is reviewed as new species groups are added to the models.
              </p>
            </article>
          </div>
        </div>
      </Section>
    </>
  );
}
