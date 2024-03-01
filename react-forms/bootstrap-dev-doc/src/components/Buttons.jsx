const Buttons = () => {
  return (
    <section>
      <div>
        <div className="flex justify-between items-center ">
          <h2 className="text-4xl font-semibold text-gray-50">Buttons</h2>
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
          Use Bootstrap custom button styles for actions in forms, dialogs, and
          more with support for multiple sizes, states, and more.
        </p>
      </div>

      <div className="bg-gray-600 md:max-w-96 p-3 rounded-md mt-4 border">
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
        <h2 className="text-4xl font-semibold text-gray-50">Base class </h2>
        <p className="text-sn mt-3 text-gray-300">
          Bootstrap has a base {<span className="text-pink-500">.btn</span>}{" "}
          class that sets up basic styles such as padding and content alignment.
          By default, {<span className="text-pink-500">.btn</span>} controls
          have a transparent border and background color, and lack any explicit
          focus and hover styles.
        </p>
      </div>

      <div className="mt-5">
        <img
          src="https://media.discordapp.net/attachments/1051517145860821044/1204642406306283610/image.png?ex=65d579aa&is=65c304aa&hm=2314b63af3453d2e8920758744ab6916827f19990bd91d52f00f1fcbf632812b&=&format=webp&quality=lossless"
          alt=""
        />
      </div>

      <div>
        <p className="text-sn mt-3 text-gray-300">
          The {<span className="text-pink-500">.btn</span>} class is intended to
          be used in conjunction with our button variants, or to serve as a
          basis for your own custom styles.
        </p>

        <div className="bg-[#332701] border-s-4 border-[#997404] mt-6 ">
          <div className="p-3">
            <p className="text-[#deb823]">
              If you are using the {<span className="text-pink-500">.btn</span>}{" "}
              class on its own, remember to at least define some explicit{" "}
              {<span className="text-pink-500">:focus</span>} and/or{" "}
              {<span className="text-pink-500">:focus-visible</span>} styles.
            </p>
          </div>
        </div>
      </div>

      <div>
        <div className="mt-7">
          <h2 className="text-2xl font-semibold text-gray-50">Variants </h2>
        </div>
        <p className="mt-3 text-gray-300">
          Bootstrap includes several button variants, each serving its own
          semantic purpose, with a few extras thrown in for more control.
        </p>
      </div>

      <div className="mt-5 border border-gray-500 border-opacity-50 p-5 rounded ">
        <div>
          <ul className="flex gap-x-2">
            <li className="bg-[#0d6efd] hover:bg-[#0d6dfdea] inline-block px-2 py-1 rounded-md text-gray-100 cursor-pointer">
              Primary
            </li>
            <li className="bg-[#6c757d] hover:bg-[#596168] inline-block px-2 py-1 rounded-md text-gray-100 cursor-pointer">
              Secondary
            </li>
            <li className="bg-[#198754] hover:bg-[#198754e6] inline-block px-2 py-1 rounded-md text-gray-100 cursor-pointer">
              Success
            </li>
            <li className="bg-[#dc3545] hover:bg-[#c32f3e] inline-block px-2 py-1 rounded-md text-gray-100 cursor-pointer">
              Danger
            </li>
            <li className="bg-[#ffc107] hover:bg-[#ffc107dd] inline-block px-2 py-1 rounded-md text-gray-600 cursor-pointer">
              Warning
            </li>
            <li className="bg-[#0dcaf0] hover:bg-[#0dcaf0eb] inline-block px-2 py-1 rounded-md text-gray-600 cursor-pointer">
              Info
            </li>
            <li className="bg-[#f8f9fa] hover:bg-[#0dcaf0eb] inline-block px-2 py-1 rounded-md text-gray-600 cursor-pointer">
              Light
            </li>
            <li className="inline-block px-2 py-1 rounded-md text-gray-200 cursor-pointer">
              Dark
            </li>
            <li className="inline-block px-2 py-1 rounded-md text-blue-400 hover:text-blue-500 underline cursor-pointer">
              Link
            </li>
          </ul>
        </div>
      </div>

      <div className="bg-[#032830] border-s-4 border-[#087990] mt-6 ">
        <div className="p-3">
          <p className="text-[#6edff6] text-sm">
          <span className="font-bold">Accessibility tip:</span> Using color to add meaning only provides a visual indication, which will not be conveyed to users of assistive technologies like screen readers. Please ensure the meaning is obvious from the content itself (e.g., the visible text with a <span className="text-blue-600">sufficient color contrast</span>) or is included through alternative means, such as additional text hidden with the <span className="text-pink-500">.visually-hidden</span> class.
          </p>
        </div>
      </div>

    </section>
  );
};

export default Buttons;
