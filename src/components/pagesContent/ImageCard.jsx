import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function ImageCard(props) {
  return (
    <div className="shadow-md relative bg-neutral-primary-soft max-w-xs w-full p-6 border-default rounded-base">
      <div className="flex flex-col items-center">
        <FontAwesomeIcon icon={props.icon} className="text-4xl mb-3" />
        <h5 className="mb-0.5 text-xl font-semibold text-base-content/75">
          {props.title}
        </h5>
      </div>
    </div>
  );
}
