
import { useState } from "react";

export default function App() {
  const [display, setDisplay] = useState("")
  const [isSpooky, setIsSpooky] = useState(false)

  function press(value) {
    setDisplay((previous) => previous + value)
  }

  function clearScreen() {
    setDisplay("")
  }

  function backspace() {
    setDisplay((previous) => previous.slice(0, -1))
  }

  const numButton =
    "rounded-xl bg-gray-100 p-4 text-lg font-semibold text-gray-800 transition hover:bg-gray-200 active:scale-95";
  const opButton =
    "rounded-xl bg-orange-500 p-4 text-lg font-semibold text-white transition hover:bg-orange-600 active:scale-95";

  return (
    <div
      className="flex min-h-screen flex-col items-center justify-center bg-cover bg-center bg-no-repeat p-4"
      style={{ backgroundImage: "url('/scary_image.png')" }}
    >
      {isSpooky ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black">
          <h1 className="text-center text-3xl font-bold text-red-600">
            YOU SHOULDN'T HAVE PRESSED THAT.
          </h1>
        </div>
      ) : (
      <main className="w-full max-w-xs rounded-2xl bg-white p-5 text-gray-900 shadow-2xl">
        <h1 className="mb-4 text-center text-xl font-bold">
          Calculator
        </h1>
        <section className="output-area mb-4">
          <input
            type="text"
            id="display-screen"
            value={display}
            readOnly
            placeholder="0"
            className="w-full rounded-xl border border-gray-200 bg-gray-50 p-4 text-right text-3xl font-medium outline-none"
          />
        </section>
        <div className="input-area grid grid-cols-4 gap-2">
          <button onClick={clearScreen} className="rounded-xl bg-red-500 p-3 font-semibold text-white transition hover:bg-red-600 active:scale-95">AC</button>
          <button onClick={() => press("()")} className={opButton}>( )</button>
          <button onClick={() => press("%")} className={opButton}>%</button>
          <button onClick={() => press("/")} className={opButton}>÷</button>
          <button onClick={() => press("7")} className={numButton}>7</button>
          <button onClick={() => press("8")} className={numButton}>8</button>
          <button onClick={() => press("9")} className={numButton}>9</button>
          <button onClick={() => press("*")} className={opButton}>×</button>
          <button onClick={() => press("4")} className={numButton}>4</button>
          <button onClick={() => press("5")} className={numButton}>5</button>
          <button onClick={() => press("6")} className={numButton}>6</button>
          <button onClick={() => press("-")} className={opButton}>−</button>
          <button onClick={() => press("1")} className={numButton}>1</button>
          <button onClick={() => press("2")} className={numButton}>2</button>
          <button onClick={() => press("3")} className={numButton}>3</button>
          <button onClick={() => press("+")} className={opButton}>+</button>
          <button onClick={() => press("0")} className={numButton}>0</button>
          <button onClick={() => press(".")} className={numButton}>.</button>
          <button onClick={backspace} className={numButton}>⌫</button>
          <button
            onClick={() => setIsSpooky(true)}
            className={opButton}
          >
            =
          </button>
        </div>
      </main>
      )}
    </div>
  )
}
