import AccordionDetails from "./AccordionDetails";

const Accordion = () => {
  return (
    <section>
      <div>
        <div className="flex justify-between items-center ">
          <h2 className="text-4xl font-semibold text-gray-50">Accordion</h2>
          <div>
            <a
              href="https://github.com/twbs/bootstrap/blob/v5.3.2/site/content/docs/5.3/components/alerts.md"
              target="_blank"
              rel="noopener noreferrer"
              className="px-2 py-1 border-gray-600 border rounded hover:border-purple-600 hover:text-purple-600 transition-all duration-200 text-gray-600"
            >
              View on Github
            </a>
          </div>
        </div>
        <p className="text-xl mt-3 text-gray-300">
          Build vertically collapsing accordions in combination with our
          Collapse JavaScript plugin.
        </p>
      </div>

      <div className="bg-gray-600 md:max-w-96 p-3 rounded-md mt-4">
        <div className="flex">
          <img
            src="https://srv.carbonads.net/static/30242/cfae0bcc9eeb2652dd375b40461352efdb6057ba"
            alt="img"
            className="w-32 h-28"
          />
          <h3 className="pl-4 text-sm text-white">
            Adobe Creative Cloud for Teams. Put creativity to work.
          </h3>
        </div>
      </div>

      <div className="mt-10">
        <h2 className="text-4xl font-semibold text-gray-50">How it works</h2>
        <p className="text-sn mt-3 text-gray-300">
          The accordion uses{" "}
          <span className="text-blue-500 underline">collapse</span> internally
          to make it collapsible. To render an accordion that expanded, add the{" "}
          <span className="text-pink-500">.open</span> class on the
          <span className="text-pink-500">.accordion</span>.
        </p>
      </div>

      <div className="bg-[#032830] border-s-4 border-[#087990] mt-6 ">
        <div className="p-3">
          <p className="text-[#6edff6]">
            The animation effect of this component is dependent on the{" "}
            <span className="text-pink-500">prefers-reduced-motion</span> media
            query. See the reduced motion section of our accessibility
            documentation.The animation effect of this component is dependent on
            the prefers-reduced-motion media query. See the{" "}
            <span className="text-blue-500 underline">
              reduced motion section of our accessibility documentation
            </span>
            .
          </p>
        </div>
      </div>

      <div className="mt-10">
        <h2 className="text-4xl font-semibold text-gray-50">Example</h2>
        <p className="text-sn mt-3 text-gray-300">
          Click the accordions below to expand/collapse the accordion content.
        </p>
      </div>

      <div className="border rounded p-4  mt-4">
        <div className="my-5">
          {/* <div
            className="p-5 bg-gray-100 rounded-t font-semibold flex items-center justify-between  cursor-pointer hover:bg-gray-200"
            onClick={toggleAccordion}
          >
            <h3>Accordion Item #1</h3>
            <IoIosArrowForward className={accordionState ? "rotate-90" : ""} />
          </div>
          <div
            className={
              "bg-gray-50 p-5 " + (accordionState ? "block" : "hidden")
            }
          >
            <p>
              This is the second items accordion body. It is hidden by default,
              until the collapse plugin adds the appropriate classes that we use
              to style each element. These classes control the overall
              appearance, as well as the showing and hiding via CSS transitions.
              You can modify any of this with custom CSS or overriding our
              default variables. Its also worth noting that just about any HTML
              can go within the .accordion-body, though the transition does
              limit overflow.
            </p>
          </div> */}
          <AccordionDetails
            title="Accordion Item #1"
            description=" This is the second items accordion body. It is hidden by default,
          until the collapse plugin adds the appropriate classes that we use to
          style each element. These classes control the overall appearance, as
          well as the showing and hiding via CSS transitions. You can modify any
          of this with custom CSS or overriding our default variables. Its also
          worth noting that just about any HTML can go within the
          .accordion-body, though the transition does limit overflow."
          />
          <AccordionDetails
            title="Accordion Item #2"
            description="This is the second item's accordion body. It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the .accordion-body, though the transition does limit overflow."
          />
          <AccordionDetails
            title="Accordion Item #3"
            description="This is the third item's accordion body. It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the .accordion-body, though the transition does limit overflow."
          />
        </div>
      </div>
    </section>
  );
};

export default Accordion;
