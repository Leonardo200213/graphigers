import banner from "../assets/bannervuoto.png";
import aurora from "../assets/aurora.png";
import giulia from "../assets/giulia.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  return (
    <>
      <div className="relative mx-auto">
        <img src={banner} className="object-contain block w-full h-full" />

        <div className="absolute inset-0 translate-x-[-6%]">
          <button className="group absolute bottom-0 z-10 right-[10%] rounded-lg cursor-pointer">
            <img
              src={aurora}
              className="drop-shadow-lg hover:scale-105 transition-all duration-200 hover:drop-shadow-2xl hover:brightness-103"
            />
            <span className="pointer-events-none absolute left-1/2 bottom-[10%] -translate-x-1/2 text-[clamp(0.9rem,2.5vw,1.875rem)] font-bold text-white">
              Scopri Aurora <FontAwesomeIcon icon={faArrowRight} />
            </span>
          </button>
          <button className="group absolute bottom-0 left-[25%] rounded-lg cursor-pointer">
            <img
              src={giulia}
              className="drop-shadow-lg hover:scale-105 transition-all duration-200 hover:drop-shadow-2xl hover:brightness-103"
            />
            <span className="pointer-events-none absolute left-[55%] bottom-[10%] -translate-x-1/2 text-[clamp(0.9rem,2.5vw,1.875rem)] font-bold text-white">
              Scopri Giulia <FontAwesomeIcon icon={faArrowRight} />
            </span>
          </button>
        </div>
      </div>
      <div className="mx-auto max-w-5xl p-8 text-shadow-sm">
        <h1 className="text-3xl font-bold">Chi siamo</h1>
        <div className="py-4 text-justify">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
          officia repellendus asperiores ipsum in explicabo nulla rerum,
          consequuntur, ex illo tenetur doloribus voluptate! Nihil a fugiat aut
          accusamus architecto officia autem neque vel! Quia inventore provident
          non laudantium magnam fuga delectus, optio assumenda. Accusamus natus
          dolores possimus ipsa repudiandae repellat. Nostrum harum impedit
          consectetur aliquid neque, asperiores id mollitia delectus praesentium
          quibusdam deserunt repellat eum ex blanditiis cumque quos, molestias,
          provident non. Soluta, consequatur quasi possimus non consectetur
          nihil laudantium autem eius. Numquam minima similique quo hic in
          dolorum sit a cum, vel nemo vero totam dolor nulla illum laboriosam?
        </div>
      </div>
    </>
  );
}
