export default function HorizontalCard(props) {
  return (
    <div className="shadow-sm rounded-md flex flex-row justify-center items-center py-2">
      <div className="w-1/4 flex justify-center items-center">
        <img
          src={props.image}
          // alt={props.title}
          className="w-2/3 object-contain lg:scale-65"
        />
      </div>
      <div className="w-3/4 flex justify-start items-center px-1 text-sm">
        <p>{props.title}</p>
      </div>
    </div>
  );
}
