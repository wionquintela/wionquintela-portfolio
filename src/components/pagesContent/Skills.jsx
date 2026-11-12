import InfiniteMarquee from "./InfiniteMarquee";
import HorizontalCard from "../HorizontalCard.jsx";
import skillContent from "../skillContent.js";
import projectContent from "../projectContent.js";

export default function Skills(props) {
  return (
    <div>
      <div className="divider">
        <h1 className="text-5xl text-base-content">My Skills</h1>
      </div>
      <div className="my-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {/* <InfiniteMarquee /> */}
        <div className="mb-5 w-full flex flex-col justify-center items-start">
          <h3 className="ml-5 font-semibold  text-md lg:text-lg">
            Primary technologies
          </h3>
          <div className="w-full grid grid-cols-2">
            {skillContent
              .filter((skill) => skill.type === "primary")
              .map((skill, index) => {
                return (
                  <div
                    id={index}
                    className={`my-1 ${index % 2 === 0 ? "mr-1 ml-5" : "ml-1 mr-5"}`}
                  >
                    <HorizontalCard {...skill} />
                  </div>
                );
              })}
          </div>
        </div>
        <div className="mb-5 w-full flex flex-col justify-center items-start">
          <h3 className="ml-5 font-semibold text-md lg:text-lg">
            Additional technologies
          </h3>
          <div className="w-full grid grid-cols-2">
            {skillContent
              .filter((skill) => skill.type === "additional")
              .map((skill, index) => {
                return (
                  <div
                    id={index}
                    className={`my-1 ${index % 2 === 0 ? "mr-1 ml-5" : "ml-1 mr-5"}`}
                  >
                    <HorizontalCard {...skill} />
                  </div>
                );
              })}
          </div>
        </div>
        <div className="mb-5 w-full flex flex-col justify-center items-start">
          <h3 className="ml-5 font-semibold  text-md lg:text-lg">
            Other tools
          </h3>
          <div className="w-full grid grid-cols-2">
            {skillContent
              .filter((skill) => skill.type === "tools")
              .map((skill, index) => {
                return (
                  <div
                    id={index}
                    className={`my-1 ${index % 2 === 0 ? "mr-1 ml-5" : "ml-1 mr-5"}`}
                  >
                    <HorizontalCard {...skill} />
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
}
