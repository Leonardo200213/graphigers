type CardProps = {
  name: string;
  text: string;
  img: string;
};

export default function Card({ name, text, img }: CardProps) {
  return (
    <>
      <div className="w-xs bg-white rounded-3xl border border-gray-300 shadow-lg overflow-hidden m-8 hover:scale-105 cursor-pointer transition-transform duration-300">
        <img
          src={img}
          alt={name}
          className="h-[clamp(5rem,18vw,12rem)] w-full object-cover"
        />

        <div className="flex flex-col gap-2 p-8">
          <h1 className="text-2xl font-bold">{name}</h1>
          <p className="text-gray-700 text-justify">{text}</p>
        </div>
      </div>
    </>
  );
}
