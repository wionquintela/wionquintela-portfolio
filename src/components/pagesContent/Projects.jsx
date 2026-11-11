import projectContent from "../projectContent.js";
import ContentCards from "../ContentCards.jsx";
export default function Projects(props) {
  return (
    <div className="mx-5 mt-20">
      <div id="projects">
        <div className="pt-5 flex flex-col justify-center items-center">
          <div className="divider">
            <h1 className="text-5xl text-base-content">My Projects</h1>
          </div>
          {/* <p className="mt-2 text-base-content/75 text-md lg:text-lg">
            Here are the projects that I had/have been working on to increase my
            programming skills.
          </p> */}
        </div>

        {/* Project Cards */}
        <div className="my-20 grid grid-cols-1 gap-6">
          {projectContent.map((item, index) => {
            return (
              <div id={index}>
                <ContentCards {...item} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
