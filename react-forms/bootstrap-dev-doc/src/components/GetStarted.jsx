const GetStarted = () => {
  return (
    <>
      <section>
        <div>
          <div className="xl:flex justify-between items-center">
            <h2 className="text-4xl font-semibold text-gray-50">
              Get started with Bootstrap
            </h2>
            <div className="mt-3 xl:mt-0">
              <a
                href="https://github.com/twbs/bootstrap/blob/v5.3.2/site/content/docs/5.3/getting-started/introduction.md"
                target="_blank"
                rel="noopener noreferrer"
                className="px-2 py-1 border-gray-600 border rounded hover:border-purple-600 hover:text-purple-600 transition-all duration-200 text-gray-600"
              >
                View on Github
              </a>
            </div>
          </div>
          <p className="text-xl mt-3 text-gray-300">
            Bootstrap is a powerful, feature-packed frontend toolkit. Build
            anything—from prototype to production—in minutes.
          </p>
        </div>

        <div className="bg-gray-600 md:max-w-96 p-3 border rounded-md mt-4">
          <div className="md:flex ">
            <img
              src="https://srv.carbonads.net/static/30242/2ba64892272a689daf5cc473b26b988461df56e7"
              alt="img"
              className="w-32 h-28 mx-auto rounded"
            />
            <h3 className="pl-4 text-sm text-white mt-3 md:mt-0">
              Adobe Creative Cloud for Teams. Put creativity to work.
            </h3>
          </div>
        </div>

        <div className="mt-6">
          <h3 className="font-bold text-3xl text-white">Quick start</h3>
          <p className="text-gray-300 mt-2">
            Get started by including Bootstrap’s production-ready CSS and
            JavaScript via CDN without the need for any build steps. See it in
            practice with this{" "}
            <span className="text-blue-500 underline cursor-pointer">
              Bootstrap CodePen demo
            </span>
            .
          </p>
        </div>

        <div>
          <div className="ml-4 mt-4">
            <h2 className="text-gray-50">
              1. Create a new <span className=" text-pink-500">index.html</span>{" "}
              file in your project root. Include the{" "}
              <span className="text-pink-500">{`<meta name="viewport"></meta>`}</span>{" "}
              tag as well for{" "}
              <span className="text-blue-500 underline cursor-pointer">
                proper responsive behavior
              </span>{" "}
              in mobile devices
            </h2>
          </div>
        </div>
      </section>
    </>
  );
};

export default GetStarted;
