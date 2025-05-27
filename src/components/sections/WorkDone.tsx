import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const WorkDone = () => {
  // Data for the steps (recommended for maintainability)
  const steps = [
    {
      id: 1,
      badge: "Step 1",
      titleLine1: "Consultation",
      titleLine2: "& Planning",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati doloribus dolores blanditiis id provident assumenda.",
    },
    {
      id: 2,
      badge: "Step 2",
      titleLine1: "Design",
      titleLine2: "& Construction",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati doloribus dolores blanditiis id provident assumenda.",
    },
    {
      id: 3,
      badge: "Step 3",
      titleLine1: "Final Inspection",
      titleLine2: "& Handover",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati doloribus dolores blanditiis id provident assumenda.",
    },
  ];

  return (
    <section className="py-12 bg-white sm:py-16 lg:py-20">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center sm:text-left">
          <p className="text-md font-semibold tracking-widest text-slate-900">
            - How We Work
          </p>
        </div>

        <div className="mt-4 flex flex-col items-start gap-y-6 sm:flex-row sm:items-center sm:justify-between mb-12 lg:mb-16">
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl lg:text-5xl leading-tight">
            How we <span className="text-amber-600">Get It Done</span>
          </h2>

          <div className="flex items-center gap-4">
            <a
              href="#learn-more-target"
              className="bg-amber-600 text-white font-bold text-sm px-6 py-1.5 rounded-full hover:bg-amber-600 transition-colors md:w-auto"
            >
              Learn More
            </a>

            <a
              href="#learn-more-target"
              className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-slate-900 hover:bg-slate-700 transition-colors"
              aria-label="Learn more"
            >
              <FontAwesomeIcon
                icon={faArrowRight}
                className="w-3 h-3 text-white"
                aria-hidden="true"
              />
            </a>
          </div>
        </div>

        {/* Steps Section - Using Grid for responsive columns */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {steps.map((step) => (
            <div
              key={step.id}
              className="flex flex-col items-center p-6 text-center bg-slate-50 rounded-xl shadow-lg transition-all duration-300 ease-in-out hover:shadow-xl hover:scale-105"
            >
              <span className="mb-4 inline-block rounded-full bg-slate-900 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-amber-600">
                {step.badge}
              </span>
              <h3 className="mb-3 text-xl font-bold text-slate-800">
                {step.titleLine1} <br />
                {step.titleLine2}
              </h3>
              <p className="text-sm leading-relaxed text-slate-600">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkDone;
