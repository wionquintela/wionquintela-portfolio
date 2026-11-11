import InfiniteMarquee from "./InfiniteMarquee";

export default function Skills(props) {
  return (
    <div>
      <div className="divider">
        <h1 className="text-5xl text-base-content">Tech Stack</h1>
      </div>
      <InfiniteMarquee />

      {/* <section>
      <div className={`container mx-auto px-4 ${props.className || ""}`}>
        <div id="skills" className="pt-10">
      
          <h1 className="text-5xl md:text-6xl font-bold">My Skills</h1>
          <div className="grid grid-cols-2 lg:grid-cols-3 justify-items-center sm:justify-items-start gap-4 mt-4">
            {skillContent.map((item, index) => (
              <div
                key={item.title || index}
                className="w-full mb-3 flex justify-center"
              >
                <ContentCards {...item} skills={true} />
              </div>
            ))}
          </div>
          <a
            href="#projects"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-lg font-medium px-5 py-3 rounded transition-colors"
          >
            Go to my Projects
            <i className="fa-solid fa-diagram-project"></i>
          </a>
        </div>
      </div>
    </section> */}
    </div>
  );
}
