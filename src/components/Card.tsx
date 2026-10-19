type CardProps = {
  name: string;
  text: string;
  img: string;
};

export default function Card({ name, text, img }: CardProps) {
  return (
    <>
      <div className="w-xs bg-gray-700 rounded-3xl overflow-hidden m-8 transition-all duration-500">
        <div className="relative">
          <img
            src={img}
            alt={name}
            className="h-[clamp(5rem,18vw,12rem)] w-full object-cover"
          />
          <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-b from-transparent to-gray-700" />
        </div>
        <div className="text-gray-200 flex flex-col gap-4 px-8 py-4">
          <h1 className="text-2xl font-bold">{name}</h1>
          <p className="text-justify">{text}</p>
          <button
            className="group relative overflow-hidden bg-gradient-to-r from-indigo-400 to-purple-500 text-white cursor-pointer
         font-bold py-3 px-6 text-lg rounded-2xl my-4 hover:scale-105 transition-all duration-500
         shadow-lg hover:shadow-indigo-600/25"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-600 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            <span className="relative z-10">Scopri di più</span>
          </button>
        </div>
      </div>
    </>
  );
}
