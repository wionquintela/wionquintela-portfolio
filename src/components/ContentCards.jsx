import { SquareArrowUpRightExit } from "lucide-react";
export default function ContentCards(props) {
  return (
    <div className="flex flex-col lg:flex-row card bg-base-100 shadow-sm">
      <figure className=" hover-gallery lg:w-2/5">
        {props.image.map((image, index) => (
          <div key={index}>
            <img
              alt={props.title}
              src={image}
              className="h-full rounded-none"
            />
          </div>
        ))}
      </figure>

      <div className="card-body lg:w-3/5">
        <h2 className="card-title">
          {props.title} &middot;{" "}
          {props.isFinished ? (
            props.year
          ) : (
            <div className="badge badge-dash badge-secondary">
              In Development
            </div>
          )}
        </h2>
        <div className="flex justify-start items-center">
          {props.role.map((role, index) => (
            <div key={index} className="mr-1">
              <div className="badge badge-soft badge-accent">{role}</div>
            </div>
          ))}
        </div>
        <p>{props.text}</p>
        <div className="lg:flex justify-end">
          {props.isPrivate ? (
            <button className="btn btn-soft w-full lg:w-auto" disabled>
              Not Yet Accessible
            </button>
          ) : (
            <a href={props.github} target="_blank" rel="noopener noreferrer">
              <button className="btn btn-soft w-full lg:w-auto">
                View on GitHub
              </button>
            </a>
          )}
          {props.isLive ? (
            <div className="my-2 lg:my-auto lg:ml-1">
              <a href={props.live} target="_blank">
                <button className="btn btn-neutral w-full lg:w-auto">
                  Live Demo <SquareArrowUpRightExit />
                </button>
              </a>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
}
