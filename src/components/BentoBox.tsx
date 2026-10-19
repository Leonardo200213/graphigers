import banner from "../assets/banner.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

export default function BentoBox() {
  return (
    <>
      <section className="grid grid-cols-2 md:grid-cols-4 auto-rows-[180px] gap-4 max-w-5xl mx-auto p-6 relative">
        <div className="group relative overflow-hidden col-span-2 row-span-2 rounded-3xl bg-zinc-900 text-white hover:scale-103 transition-transform duration-500 cursor-pointer">
          <img
            src={banner}
            alt="Description"
            className="w-full h-full object-cover rounded-2xl"
          />
          <h1 className="transition-transform duration-500 group-hover:-translate-y-10 absolute inset-x-0 bottom-6 text-center text-3xl font-bold z-20">
            Grande
          </h1>
          <h1 className="opacity-0 group-hover:opacity-100 duration-500 absolute inset-x-0 bottom-6 text-center text-md font-bold z-20">
            Scopri di più <FontAwesomeIcon icon={faChevronRight} />
          </h1>
          <div className="opacity-100 absolute inset-0 bg-gradient-to-t from-gray-700 via-black/10 to-transparent"></div>
          <div className="opacity-0 group-hover:opacity-100 absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent transition-opacity duration-500"></div>
        </div>
        <div className="row-span-2 rounded-2xl bg-zinc-900 p-6 text-white">
          Alto
        </div>
        <div className="rounded-2xl bg-zinc-900 p-6 text-white">Piccolo</div>
        <div className="rounded-2xl bg-zinc-900 p-6 text-white">Piccolo</div>
        <div className="col-span-2 rounded-2xl bg-zinc-900 p-6 text-white">
          Largo
        </div>
        <div className="col-span-2 rounded-2xl bg-zinc-900 p-6 text-white">
          Largo
        </div>
      </section>
    </>
  );
}
