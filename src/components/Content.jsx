import { useState } from "react";

const Content = () => {
  return (
    <section className="flex w-full flex-wrap justify-center gap-20 py-40">
      <SpaceHouse space="Lampu Kamar 1" />
      <SpaceHouse space="Lampu Kamar 2" />
    </section>
  );
};

const SpaceHouse = ({ space }) => {
  const [activeLamp, setActiveLamp] = useState(false);

  return (
    <div className="flex w-9/12 flex-col items-center gap-4 rounded-sm bg-slate-700 py-8 text-white shadow-sm">
      {activeLamp ? (
        <img src="/img/lampu-on.png" alt="" className="size-40" />
      ) : (
        <img src="/img/lampu-off.png" alt="" className="size-40" />
      )}

      <h2 className="text-lg font-semibold">{space}</h2>
      <button
        onClick={() => setActiveLamp(!activeLamp)}
        className={`${activeLamp ? "bg-slate-500" : "bg-slate-800"} relative w-40 overflow-hidden rounded-full py-3 font-semibold tracking-widest uppercase transition-all duration-300`}
      >
        {activeLamp ? "Matikan" : "Hidupkan"}
      </button>
    </div>
  );
};

export default Content;
