const Alerts = () => {
  return (
    <>
      <section className="">
        
        <div>
          <div className="flex justify-between items-center ">
            <h2 className="text-4xl font-semibold text-gray-50">Alerts</h2>
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
            Provide contextual feedback messages for typical user actions with
            the handful of available and flexible alert messages.
          </p>
        </div>

        <div className="bg-gray-600 md:max-w-96 p-3 rounded-md mt-4 border">
          <div className="flex">
            <img
              src="https://srv.carbonads.net/static/30242/13cb3fbccbcc20e37fe4f8dfbf3820d38931fd19"
              alt="img"
              className="w-32 h-28"
            />
            <h3 className="pl-4 text-sm text-white">
              Adobe Creative Cloud for Teams. Put creativity to work.
            </h3>
          </div>
        </div>

        <div className="md:ml-4 mt-4 ">
          <div className="">
            <h1 className="text-3xl font-bold text-white">Examples</h1>
            <h2 className="text-gray-50">
              Alerts are available for any length of text, as well as an
              optional close button. For proper styling, use one of the eight
              required contextual classes
              <span className="text-pink-500">
                {`(e.g., .alert-success)`}.{" "}
              </span>
              For inline dismissal, use the{" "}
              <span className="text-blue-500 underline cursor-pointer">
                alerts JavaScript plugin
              </span>{" "}
              in mobile devices
            </h2>
          </div>

          <div className="bg-[#032830] border-s-4 border-[#087990] mt-6 ">
            <div className="p-3">
              <p className="text-[#6edff6]">
                Heads up! As of v5.3.0, the{" "}
                <span className="text-pink-500">alert-variant()</span> Sass
                mixin is deprecated. Alert variants now have their CSS variables
                overridden in a Sass loop.
              </p>
            </div>
          </div>

          <div className="border rounded border-gray-400 mt-4">
            <div className="p-5 ">
              <div className="border border-[#084298] p-4 bg-[#031633] text-[#2588fe] rounded-md mb-2">
                A simple primary alert—check it out!
              </div>

              <div className="border border-[#41464b] p-4 bg-[#161719] text-[#99aca2] rounded-md mb-2">
                A simple primary alert—check it out!
              </div>

              <div className="border border-[#0f5132] p-4 bg-[#051b11] text-[#75a95f] rounded-md mb-2">
                A simple primary alert—check it out!
              </div>

              <div className="border border-[#842029] p-4 bg-[#2c0b0e] text-[#de868f] rounded-md mb-2">
                A simple primary alert—check it out!
              </div>

              <div className="border border-[#997404] p-4 bg-[#332701] text-[#f2cc6a] rounded-md mb-2">
                A simple primary alert—check it out!
              </div>

              <div className="border border-[#087990] p-4 bg-[#032830] text-[#6edfea] rounded-md mb-2">
                A simple primary alert—check it out!
              </div>

              <div className="border border-[#495057] p-4 bg-[#343a40] text-white rounded-md mb-2">
                A simple primary alert—check it out!
              </div>

              <div className="border border-[#343a40] p-4 bg-[#1a1d20] text-gray-200 rounded-md mb-2">
                A simple primary alert—check it out!
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Alerts;
