import banner from "../assets/bannervuoto.png";
import aurora from "../assets/aurora.png";
import giulia from "../assets/giulia.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import Info from "../components/Info.tsx";

export default function Home() {
  const [selected, setSelected] = useState<"aurora" | "giulia" | null>(null);

  return (
    <>
      <Info selected={selected} setSelected={setSelected} />
      <div className="relative mx-auto">
        <img
          src={banner}
          alt="Graphigers"
          className="object-contain block w-full h-full"
        />

        <div className="group/coppia absolute inset-0 translate-x-[-6%]">
          <button
            type="button"
            onClick={() => setSelected("aurora")}
            className="group absolute bottom-0 right-[10%] w-[43%] md:z-10 rounded-lg cursor-pointer "
          >
            <img
              src={aurora}
              alt="Aurora"
              className="transition-all duration-500 group-has-[button:hover]/coppia:brightness-75 group-hover:scale-105 group-hover:!brightness-105 group-hover:drop-shadow-[0_0_24px_rgba(255,105,150,0.6)]"
            />
            <span className="whitespace-nowrap pointer-events-none absolute left-1/2 bottom-[10%] -translate-x-1/2 text-[clamp(0.9rem,2.5vw,1.875rem)] font-bold text-white">
              Scopri Aurora{" "}
              <FontAwesomeIcon
                icon={faArrowRight}
                className="transition-transform duration-500 group-hover:translate-x-2"
              />
            </span>
          </button>
          <button
            type="button"
            onClick={() => setSelected("giulia")}
            className="group absolute bottom-0 left-[25%] w-[30%] md:z-0 rounded-lg cursor-pointer"
          >
            <img
              src={giulia}
              alt="Giulia"
              className="transition-all duration-500 group-has-[button:hover]/coppia:brightness-75 group-hover:scale-105 group-hover:!brightness-105 group-hover:drop-shadow-[0_0_24px_rgba(255,105,150,0.6)]"
            />
            <span className="whitespace-nowrap pointer-events-none absolute left-[55%] bottom-[10%] -translate-x-1/2 text-[clamp(0.9rem,2.5vw,1.875rem)] font-bold text-white">
              Scopri Giulia{" "}
              <FontAwesomeIcon
                icon={faArrowRight}
                className="transition-transform duration-500 group-hover:translate-x-2"
              />
            </span>
          </button>
        </div>

        <div className="flex justify-center gap-2 px-2 pt- md:hidden">
          {(["giulia", "aurora"] as const).map((k) => (
            <button
              key={k}
              type="button"
              onClick={() => setSelected(k)}
              className="flex items-center gap-2 rounded-full border border-white/30 bg-zinc-900/30 px-5 py-2.5 font-semibold text-white backdrop-blur-md active:scale-95"
            >
              Scopri {k === "giulia" ? "Giulia" : "Aurora"}
              <FontAwesomeIcon icon={faArrowRight} />
            </button>
          ))}
        </div>
      </div>
      <div className="mx-auto max-w-5xl p-8">
        <section className="mx-auto my-8 max-w-5xl rounded-3xl border border-white/30 bg-gradient-to-br from-zinc-900/40 to-zinc-900/15 p-8 text-left text-white">
          <h2 className="mb-4 text-3xl font-bold">Chi siamo</h2>
          <p className="leading-relaxed py-4 text-left">
            Siamo un piccolo team creativo che aiuta aziende, professionisti e
            realtà di ogni tipo a comunicare online in modo autentico e
            riconoscibile.
            <br />
            Attraverso fotografie, video, gestione social e grafiche
            personalizzate, creiamo contenuti studiati per valorizzare la tua
            immagine e raccontare al meglio ciò che ti rende unico.
            <br />
            Giovani, creative e sempre aggiornate sulle nuove tendenze,
            trasformiamo progetti e passioni in contenuti capaci di coinvolgere
            e lasciare il segno.
          </p>
        </section>
      </div>
    </>
  );
}
