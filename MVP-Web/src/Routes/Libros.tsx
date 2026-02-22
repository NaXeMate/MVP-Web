import InteractiveBook from "../Components/InteractiveBook";

function Libros() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="grow w-full overflow-x-hidden">
        <InteractiveBook />
      </main>
    </div>
  );
}

export default Libros;
