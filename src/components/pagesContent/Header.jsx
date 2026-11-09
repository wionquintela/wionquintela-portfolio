export default function Header(props) {
  return (
    <section className="text-center">
      {/* Container */}
      <div
        className={`mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ${props.className || ""}`}
      >
        {/* Row & Columns using CSS Grid */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-12 items-center">
          {/* Left Column (sm={8}) */}
          <div className="sm:col-span-8 pt-8 sm:pt-12 text-center sm:text-left">
            <h1 className="text-5xl sm:text-7xl font-bold tracking-tight text-gray-900">
              Hello, I am{" "}
              <span className="inline text-[#476A77]">Wion Quintela</span>
            </h1>

            <h2 className="mt-4 text-2xl sm:text-3xl text-[#414a4c] font-medium">
              Programmer/Web Developer
            </h2>

            {/* Button */}
            {/* <button>
              <a
                href="#skills"
                className="mt-6 inline-flex items-center gap-2 rounded-md bg-[#476A77] px-5 py-3 text-lg font-semibold text-white shadow-sm hover:bg-[#395560] transition-colors"
              >
                See my Skills <i className="fa-solid fa-code"></i>
              </a>
            </button> */}
            <button className="btn btn-neutral">Neutral</button>
            <button className="btn btn-primary">Primary</button>
            <button className="btn btn-secondary">Secondary</button>
            <button className="btn btn-accent">Accent</button>
            <button className="btn btn-info">Info</button>
            <button className="btn btn-success">Success</button>
            <button className="btn btn-warning">Warning</button>
            <button className="btn btn-error">Error</button>
          </div>

          {/* Right Column (sm={4}) */}
          <div className="sm:col-span-4 flex justify-center">
            <img
              src="./assets/myProfile.png"
              alt="Wion Quintela"
              className="w-[300px] h-auto rounded-lg object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
