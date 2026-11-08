import auroramaker from "../assets/auroramaker.png";
import giuliafoto from "../assets/giuliafoto.png";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface InfoProps {
  selected: CharacterKey | null;
  setSelected: (open: CharacterKey | null) => void;
}

const characters = {
  aurora: {
    nome: "Aurora",
    ruolo: "Videomaker",
    foto: auroramaker,
    descrizione: `"Aurora racconta storie attraverso il linguaggio del video, trasformando idee in contenuti autentici e coinvolgenti.
    Dalla prima intuizione all'ultimo frame, cura ogni dettaglio per creare produzioni che emozionano e danno valore a ogni progetto.
    Tra video, storytelling e strategie social, crea una comunicazione autentica che fa emergere l'identità dei brand e li connette alle persone."`,
  },
  giulia: {
    nome: "Giulia",
    ruolo: "Fotografa",
    foto: giuliafoto,
    descrizione: `"Giulia racconta storie attraverso la fotografia, catturando dettagli,
     emozioni e autenticità in ogni scatto. Con uno sguardo creativo e sensibile, realizza immagini che valorizzano l'identità di persone
      e brand, affiancando il suo lavoro con una gestione strategica dei social media per dare continuità e forza alla comunicazione.

"`,
  },
};
type CharacterKey = keyof typeof characters;

export default function Info({ selected, setSelected }: InfoProps) {
  if (!selected) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black/50 z-50 animate-[fade-in_0.2s_ease-out]"
      onClick={() =>
        setSelected(null)
      } /* cosi anche se si preme lo sfondo si chiude il riquadro */
    >
      <div>
        <button
          className="absolute top-4 right-4 z-10 cursor-pointer hover:rotate-90 transition-transform ease-in-out"
          onClick={() => setSelected(null)}
        >
          <FontAwesomeIcon icon={faXmark} className="text-3xl md:text-4xl" />
        </button>
      </div>
      {/* questo diventa lo sfondo */}

      <div
        onClick={(e) => e.stopPropagation()}
        className="flex h-[70vh] w-[80vw] max-w-5xl animate-[pop-in_0.2s_ease-out] flex-col overflow-hidden rounded-4xl border border-white/20 bg-zinc-900/40 backdrop-blur-md md:h-[60vh] md:flex-row"
      >
        {/* questo div diventa il popup */}
        <div className="flex flex-1 flex-col justify-center p-8 text-white vertical-align-middle">
          <h2 className="text-4xl font-bold">{characters[selected].nome}</h2>
          <h3 className="text-2xl font-bold py-2">
            {characters[selected].ruolo}
          </h3>
          <p className="pt-4 text-justify">
            {characters[selected].descrizione}
          </p>
        </div>
        <div className="flex flex-1 justify-center p-4">
          <img
            className="w-full h-full object-cover rounded-3xl"
            src={characters[selected].foto}
            alt={characters[selected].nome}
          />
        </div>
      </div>
    </div>
  );
}
