import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

interface BentoBoxProps {
  image: string;
  title: string;
  className: string;
}

export default function BentoBox({ image, title, className }: BentoBoxProps) {
  return (
    <div
      className={`group relative cursor-pointer overflow-hidden rounded-3xl bg-zinc-900 text-white transition-transform duration-500 hover:scale-[1.03] ${className}`}
    >
      <img
        src={image}
        alt={title}
        className="absolute inset-0 z-0 h-full w-full object-cover"
      />

      {/* scurimento base in basso */}
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-gray-700 via-black/10 to-transparent" />
      {/* scurimento più forte all'hover */}
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/50 via-black/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      <h2 className="absolute inset-x-0 bottom-6 z-20 text-center text-3xl font-bold transition-transform duration-500 group-hover:-translate-y-10">
        {title}
      </h2>
      <p className="absolute inset-x-0 bottom-6 z-20 text-center font-bold opacity-0 transition-opacity duration-500 group-hover:opacity-100">
        Scopri di più <FontAwesomeIcon icon={faChevronRight} />
      </p>
    </div>
  );
}
