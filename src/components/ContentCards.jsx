export default function ContentCards(props) {
  return (
    <div
      className={`w-full shadow-lg rounded-lg overflow-hidden ${
        props.skills ? "max-w-[600px]" : "max-w-full"
      }`}
    >
      {/* Image */}
      <div className="flex justify-center items-center min-h-[100px]">
        <img
          src={props.image}
          alt={props.title}
          className={`h-auto object-contain ${
            props.skills ? "w-[80px]" : "w-full"
          }`}
        />
      </div>

      {/* Card Body */}
      <div className="p-4">
        {props.skills ? (
          <h5 className="text-[#414a4c] text-lg font-semibold mb-2">
            {props.title}
          </h5>
        ) : (
          <h5 className="font-bold text-lg mb-2">{props.title}</h5>
        )}

        <p className="text-[#414a4c] font-light mb-4">{props.text}</p>

        {/* Visit Website Button */}
        {!props.skills && (
          <a
            href={props.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white text-sm font-medium px-4 py-2 rounded transition-colors"
          >
            Visit Website
            <i className="fa-solid fa-right-to-bracket"></i>
          </a>
        )}
      </div>
    </div>
  );
}
