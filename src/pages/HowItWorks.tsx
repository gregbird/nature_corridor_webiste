import { Section, Divider, Eyebrow, Headline, NumberMarker } from '../components/ui';

// Pipeline infographic: Data inputs → Data engine → Connectivity outputs
function PipelineDiagram() {
  return (
    <svg
      viewBox="0 0 900 280"
      className="w-full h-auto"
      role="img"
      aria-label="Pipeline showing data inputs flowing into the Nature Corridor data engine, which produces connectivity outputs"
    >
      {/* Column 1: Data inputs */}
      <rect x="20" y="30" width="220" height="220" fill="none" stroke="#14262B" strokeWidth="1.5" />
      <text x="130" y="55" textAnchor="middle" fontFamily="Poppins" fontSize="11" fontWeight="600" fill="#14262B">DATA INPUTS</text>
      <line x1="40" y1="65" x2="220" y2="65" stroke="#14262B" strokeWidth="0.5" opacity="0.3" />
      <text x="40" y="88" fontFamily="Poppins" fontSize="10" fontWeight="300" fill="#14262B" opacity="0.7">Open habitat data</text>
      <text x="40" y="108" fontFamily="Poppins" fontSize="10" fontWeight="300" fill="#14262B" opacity="0.7">Species records</text>
      <text x="40" y="128" fontFamily="Poppins" fontSize="10" fontWeight="300" fill="#14262B" opacity="0.7">Hedgerow &amp; field maps</text>
      <text x="40" y="148" fontFamily="Poppins" fontSize="10" fontWeight="300" fill="#14262B" opacity="0.7">River &amp; wetland layers</text>
      <text x="40" y="168" fontFamily="Poppins" fontSize="10" fontWeight="300" fill="#14262B" opacity="0.7">Land cover &amp; elevation</text>
      <text x="40" y="188" fontFamily="Poppins" fontSize="10" fontWeight="300" fill="#14262B" opacity="0.7">Recording-effort data</text>

      {/* Arrow 1 */}
      <path d="M250 140 L330 140" fill="none" stroke="#8CB6F0" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M325 135 L335 140 L325 145" fill="none" stroke="#8CB6F0" strokeWidth="2.5" strokeLinecap="round" />

      {/* Column 2: Data engine */}
      <rect x="350" y="30" width="220" height="220" fill="none" stroke="#14262B" strokeWidth="1.5" />
      <text x="460" y="55" textAnchor="middle" fontFamily="Poppins" fontSize="11" fontWeight="600" fill="#14262B">DATA ENGINE</text>
      <line x1="370" y1="65" x2="550" y2="65" stroke="#14262B" strokeWidth="0.5" opacity="0.3" />
      <text x="370" y="88" fontFamily="Poppins" fontSize="10" fontWeight="300" fill="#14262B" opacity="0.7">Clean &amp; standardise</text>
      <text x="370" y="108" fontFamily="Poppins" fontSize="10" fontWeight="300" fill="#14262B" opacity="0.7">Correct for effort</text>
      <text x="370" y="128" fontFamily="Poppins" fontSize="10" fontWeight="300" fill="#14262B" opacity="0.7">Model habitat suitability</text>
      <text x="370" y="148" fontFamily="Poppins" fontSize="10" fontWeight="300" fill="#14262B" opacity="0.7">Calculate connectivity</text>
      <text x="370" y="168" fontFamily="Poppins" fontSize="10" fontWeight="300" fill="#14262B" opacity="0.7">Validate outputs</text>
      <text x="370" y="188" fontFamily="Poppins" fontSize="10" fontWeight="300" fill="#14262B" opacity="0.7">Generate report pack</text>

      {/* Arrow 2 */}
      <path d="M580 140 L660 140" fill="none" stroke="#8CB6F0" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M655 135 L665 140 L655 145" fill="none" stroke="#8CB6F0" strokeWidth="2.5" strokeLinecap="round" />

      {/* Column 3: Connectivity outputs */}
      <rect x="680" y="30" width="200" height="220" fill="none" stroke="#14262B" strokeWidth="1.5" />
      <text x="780" y="55" textAnchor="middle" fontFamily="Poppins" fontSize="11" fontWeight="600" fill="#14262B">CONNECTIVITY OUTPUTS</text>
      <line x1="700" y1="65" x2="880" y2="65" stroke="#14262B" strokeWidth="0.5" opacity="0.3" />
      <text x="700" y="88" fontFamily="Poppins" fontSize="10" fontWeight="300" fill="#14262B" opacity="0.7">Interactive map</text>
      <text x="700" y="108" fontFamily="Poppins" fontSize="10" fontWeight="300" fill="#14262B" opacity="0.7">Corridor layers</text>
      <text x="700" y="128" fontFamily="Poppins" fontSize="10" fontWeight="300" fill="#14262B" opacity="0.7">Gap analysis</text>
      <text x="700" y="148" fontFamily="Poppins" fontSize="10" fontWeight="300" fill="#14262B" opacity="0.7">Habitat summaries</text>
      <text x="700" y="168" fontFamily="Poppins" fontSize="10" fontWeight="300" fill="#14262B" opacity="0.7">Exportable report pack</text>
    </svg>
  );
}

const engineStages = [
  { num: '1', title: 'Clean & standardise', desc: 'All incoming datasets are harmonised into a common format — consistent projections, habitat classifications and spatial resolution — so they can be combined without errors.' },
  { num: '2', title: 'Correct for effort', desc: 'Species records are adjusted for recording bias: more records exist near roads and towns, not because more species live there. The engine accounts for this before drawing conclusions.' },
  { num: '3', title: 'Model habitat suitability', desc: 'For each species group, the engine estimates where suitable habitat is likely to exist based on environmental conditions and known habitat preferences.' },
  { num: '4', title: 'Calculate connectivity', desc: 'Suitable habitat patches are linked using least-cost path and circuit-based models, producing corridor maps that show the most ecologically likely routes between them.' },
  { num: '5', title: 'Validate & generate', desc: 'Outputs are checked against independent data where available, then packaged into the interactive map and the downloadable report pack.' },
];

const mapSteps = [
  { num: '1', title: 'Choose', desc: 'Select a region — a county, a catchment, or a custom area — to focus the map on what matters to you.' },
  { num: '2', title: 'See', desc: 'View habitat patches and the corridors that connect them, colour-coded by connectivity strength and habitat type.' },
  { num: '3', title: 'Inspect', desc: 'Click any patch or corridor to see its underlying data: habitat type, species groups, data sources and confidence level.' },
  { num: '4', title: 'Export', desc: 'Download a report pack for your area — maps, tables and a habitat summary — ready to use in planning or funding applications.' },
];

const reportOutputs = [
  { num: '01', title: 'Connectivity map', desc: 'A high-resolution map of corridors and habitat patches for the selected area, in standard GIS formats.' },
  { num: '02', title: 'Gap analysis', desc: 'A ranked list of the places where restoring or creating habitat would do most to improve connectivity.' },
  { num: '03', title: 'Habitat summary', desc: 'A structured breakdown of habitat types, their extent and their connectivity status, following the specification below.' },
  { num: '04', title: 'Data provenance', desc: 'A full list of the datasets, versions and methods used to produce the outputs — for transparency and reproducibility.' },
];

export default function HowItWorks() {
  return (
    <>
      {/* Hero */}
      <Section className="pt-16 pb-12 sm:pt-24 sm:pb-16">
        <Eyebrow>How it works</Eyebrow>
        <h1 className="mt-6 text-4xl sm:text-5xl font-extralight text-ink leading-[1.1] tracking-tight">
          <strong className="font-semibold">How</strong> it works
        </h1>
        <p className="mt-6 text-lg font-light text-ink/80 leading-relaxed max-w-editorial">
          Irish Nature Corridor has two parts: a data engine that combines open ecological datasets and models connectivity across the island, and an interactive map that lets anyone explore the results and export evidence for action.
        </p>
      </Section>

      <Divider className="max-w-6xl mx-auto" />

      {/* Pipeline at a glance */}
      <Section className="py-16 sm:py-24">
        <Eyebrow>Pipeline at a glance</Eyebrow>
        <Headline bold="From raw data" light="to mapped corridors." className="mt-5 text-2xl sm:text-3xl" />

        <div className="mt-12 overflow-x-auto">
          <PipelineDiagram />
        </div>
      </Section>

      <Divider className="max-w-6xl mx-auto" />

      {/* Inside the engine */}
      <Section className="py-16 sm:py-24">
        <Eyebrow>Inside the engine</Eyebrow>
        <Headline bold="Five stages" light="from data to map." className="mt-5 text-2xl sm:text-3xl" />

        {/* Stepper */}
        <div className="mt-12 grid gap-6 md:grid-cols-5 md:gap-4">
          {engineStages.map((stage) => (
            <div key={stage.num} className="relative">
              <div className="flex items-center gap-3 md:block">
                <span className="flex items-center justify-center w-12 h-12 border border-ink/30 font-extralight text-xl text-ink shrink-0">
                  {stage.num}
                </span>
                <h3 className="text-base font-medium text-ink md:mt-4">{stage.title}</h3>
              </div>
              <p className="mt-3 text-[14px] font-light text-ink/70 leading-[1.6]">
                {stage.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Callout */}
        <div className="mt-10 border-l-2 border-cornflower pl-5 py-2">
          <p className="text-[15px] font-light text-ink/80 leading-relaxed">
            The engine is designed to be cheap to run. It uses open-source tooling and freely available data, so the entire island can be reprocessed when new data arrives — without significant cost.
          </p>
        </div>
      </Section>

      <Divider className="max-w-6xl mx-auto" />

      {/* Using the map */}
      <Section className="py-16 sm:py-24">
        <Eyebrow>Using the map</Eyebrow>
        <Headline bold="Four steps" light="from curiosity to evidence." className="mt-5 text-2xl sm:text-3xl" />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {mapSteps.map((step) => (
            <div key={step.num} className="border border-ink/20 p-6 bg-white/40">
              <NumberMarker number={step.num} />
              <h3 className="mt-3 text-lg font-medium text-ink">{step.title}</h3>
              <p className="mt-3 text-[14px] font-light text-ink/70 leading-[1.6]">
                {step.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Callout */}
        <div className="mt-10 border-l-2 border-cornflower pl-5 py-2">
          <p className="text-[15px] font-light text-ink/80 leading-relaxed">
            The map is free to view, and there is no login required to explore. Creating an account is only needed if you want to save areas or export the full report pack.
          </p>
        </div>
      </Section>

      <Divider className="max-w-6xl mx-auto" />

      {/* The report pack */}
      <Section className="py-16 sm:py-24">
        <Eyebrow>The report pack</Eyebrow>
        <Headline bold="Four outputs" light="ready to use." className="mt-5 text-2xl sm:text-3xl" />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {reportOutputs.map((out) => (
            <div key={out.num} className="border border-ink/20 p-6 bg-white/40">
              <NumberMarker number={out.num} />
              <h3 className="mt-3 text-lg font-medium text-ink">{out.title}</h3>
              <p className="mt-3 text-[14px] font-light text-ink/70 leading-[1.6]">
                {out.desc}
              </p>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
