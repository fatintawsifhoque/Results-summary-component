import "./App.css";

function App() {
  return (
    <>
      <section className="h-screen w-screen bg-[#ECF2FF] md:flex md:justify-center md:items-center ">
        <div className="md:flex h-full w-ful md:h-[480px] md:w-[700px] md:shadow-lg ">
          <div className="h-[50%] w-full md:h-full md:w-[50%] bg-linear-to-t from-[#312CE8] to-[#6844FE] rounded-b-4xl md:rounded-4xl box-border pmd:shadow-md py-7 flex flex-col items-center">
            <h1 className="font-bold text-2xl text-center text-gray-300 mb-8">
              Your Result
            </h1>
            <div className=" h-[140px] w-[140px] md:h-[190px] md:w-[190px] rounded-full bg-linear-to-t from-[#4734EE] to-[#4D22CD] flex flex-col items-center justify-center mb-10">
              <h1 className="text-white font-bold text-6xl">76</h1>
              <p className="text-gray-200 mt-2">of 100</p>
            </div>
            <h1 className="text-4xl font-bold text-white mb-3.5 md:mb-6">
              Great
            </h1>
            <p className=" text-gray-300 text-center px-24 md:px-16">
              You scored higher than 65% of the people who have taken these
              tests.
            </p>
          </div>

          <div className="p-7 md:p-10 box-border md:rounded-tr-4xl md:rounded-br-4xl h-[50%] md:h-full md:w-[50%]">
            <h2 className="font-bold text-xl mb-8">Summary</h2>

            <div className="h-[54px] w-full flex items-center bg-[#FFF6F7] mb-3.5 rounded-xl">
              <div className="flex gap-1.5 w-[70%] ">
                <img src="icon-reaction.svg" alt="icon-reaction.svg" />
                <p className="text-[#FFA7A9] font-bold ">Reaction</p>
              </div>
              <p className="font-bold text-gray-400">
                <span className="font-bold text-gray-600">80</span> / 100
              </p>
            </div>

            <div className="h-[54px] w-full flex items-center bg-[#FFFAF4]  mb-3.5 rounded-xl">
              <div className="flex gap-1.5 w-[70%] ">
                <img src="icon-memory.svg" alt="icon-reaction.svg" />
                <p className="text-[#E6C163] font-bold ">Memory</p>
              </div>
              <p className="font-bold text-gray-400">
                <span className="font-bold text-gray-600">92</span> / 100
              </p>
            </div>

            <div className="h-[54px] w-full flex items-center bg-[#F2FDF9] mb-3.5 rounded-xl">
              <div className="flex gap-1.5 w-[70%] ">
                <img src="icon-verbal.svg" alt="icon-reaction.svg" />
                <p className="text-[#3DA88A] font-bold ">Verbal</p>
              </div>
              <p className="font-bold text-gray-400">
                <span className="font-bold text-gray-600">61</span> / 100
              </p>
            </div>

            <div className="h-[54px] w-full flex items-center bg-[#F4F4FE] mb-5 md:mb-9 rounded-xl">
              <div className="flex gap-1.5 w-[70%] ">
                <img src="icon-visual.svg" alt="icon-reaction.svg" />
                <p className="text-[#4736F1] font-bold ">Visual</p>
              </div>
              <p className="font-bold text-gray-400">
                <span className="font-bold text-gray-600">80</span> / 100
              </p>
            </div>
            <button className="h-[50px] w-full bg-[#303B59] rounded-4xl hover:bg-[#372FED] ">
              <a href="https://github.com/fatintawsifhoque" className="text-white font-bold text-">Continue</a>
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
