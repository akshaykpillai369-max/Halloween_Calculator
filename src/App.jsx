export default function App() {
  const numButton =
    "rounded-xl bg-gray-100 p-4 text-lg font-semibold text-gray-800 transition hover:bg-gray-200 active:scale-95";
  const opButton =
    "rounded-xl bg-orange-500 p-4 text-lg font-semibold text-white transition hover:bg-orange-600 active:scale-95";

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-950 p-4">
      <main className="w-full max-w-xs rounded-2xl bg-white p-5 text-gray-900 shadow-2xl">
        <h1 className="mb-4 text-center text-xl font-bold">
          Calculator
        </h1>
        <section className="output-area mb-4">
          <input
            type="text"
            id="display-screen"
            readOnly
            placeholder="0"
            className="w-full rounded-xl border border-gray-200 bg-gray-50 p-4 text-right text-3xl font-medium outline-none"
          />
        </section>
        <div className="input-area grid grid-cols-4 gap-2">
          <button className="rounded-xl bg-red-500 p-3 font-semibold text-white transition hover:bg-red-600 active:scale-95">AC</button>
          <button className={opButton}>( )</button>
          <button className={opButton}>%</button>
          <button className={opButton}>÷</button>
          <button className={numButton}>7</button>
          <button className={numButton}>8</button>
          <button className={numButton}>9</button>
          <button className={opButton}>×</button>
          <button className={numButton}>4</button>
          <button className={numButton}>5</button>
          <button className={numButton}>6</button>
          <button className={opButton}>−</button>
          <button className={numButton}>1</button>
          <button className={numButton}>2</button>
          <button className={numButton}>3</button>
          <button className={opButton}>+</button>
          <button className={numButton}>0</button>
          <button className={numButton}>.</button>
          <button className={numButton}>⌫</button>
          <button className={opButton}>=</button>
        </div>
      </main>
    </div>
  );
}
