import InteractiveBook from "../Components/InteractiveBook";

function Libros() {
  return (
    <div className="flex flex-col grow">
      <div className="grow w-full overflow-x-hidden flex flex-col">
        <InteractiveBook />
      </div>
    </div>
  );
}

export default Libros;
