interface InfoProps {
  selected: CharacterKey | null;
  setSelected: (open: CharacterKey | null) => void;
}

const characters = {
  aurora: { nome: "Aurora", descrizione: "Descrizione di Aurora" },
  giulia: { nome: "Giulia", descrizione: "Descrizione di Giulia" },
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
      {/* questo diventa lo sfondo */}
      <div className="bg-white p-6 rounded-lg animate-[pop-in_0.2s_ease-out]">
        {/* questo diventa il popup */}
        <span className="text-2xl font-bold text-gray-800">
          {characters[selected].nome}
        </span>
        <p className="text-gray-600 mt-2">{characters[selected].descrizione}</p>
        <button onClick={() => setSelected(null)}>Close</button>
      </div>
    </div>
  );
}
