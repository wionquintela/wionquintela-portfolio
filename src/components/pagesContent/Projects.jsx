import ContentCards from "../ContentCards";
import projectContent from "../projectContent";

export default function Projects(props) {
  return (
    <section>
      <div className={`container mx-auto px-4 ${props.className || ""}`}>
        <div id="projects">
          <h1 className="text-6xl text-base-content">My Projects</h1>
          <p className="mt-2 text-base-content/75 text-lg">
            Here are the projects that I had/have been working on to increase my
            programming skills.
          </p>

          {/* Project Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 justify-items-center sm:justify-items-start gap-4 mt-4">
            {projectContent.map((item, index) => (
              <div key={item.title || index} className="w-full mb-3">
                <ContentCards {...item} skills={false} expertise={false} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
