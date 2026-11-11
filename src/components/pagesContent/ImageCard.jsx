export default function ImageCard(props) {
  return (
    <div className="relative bg-neutral-primary-soft max-w-xs w-full p-6 border-default rounded-base shadow-xs">
      <div className="flex flex-col items-center">
        <img
          className="w-24 h-24 mb-6 rounded-full"
          src="/docs/images/people/profile-picture-3.jpg"
          alt="Bonnie image"
        />
        <h5 className="mb-0.5 text-xl font-semibold tracking-tight text-heading">
          {props.title}
        </h5>
      </div>
    </div>
  );
}
