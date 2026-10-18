import Card from "../components/Card.tsx";

const services: any[] = [
  {
    name: "Foto e video",
    text: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    img: "https://plus.unsplash.com/premium_photo-1674389991678-0836ca77c7f7?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
  },
  {
    name: "Gestione social",
    text: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    img: "https://images.unsplash.com/photo-1579869847557-1f67382cc158?q=80&w=1334&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
  },
  {
    name: "Brand identity",
    text: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    img: "https://plus.unsplash.com/premium_photo-1661328251929-c530c82c59a4?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
  },
];

export default function Servizi() {
  return (
    <>
      <div className="flex flex-col items-center">
        <h1 className="text-3xl font-bold text-white text-shadow-sm text-center pt-16">
          Cosa possiamo fare per te
        </h1>

        <div className="flex flex-wrap justify-center gap-4 pt-4">
          {services.map((service, i) => (
            <Card
              key={i}
              name={service.name}
              text={service.text}
              img={service.img}
            />
          ))}
        </div>
        <button className="bg-purple-500 hover:bg-purple-700 text-white cursor-pointer font-bold py-3 px-6 text-lg rounded-4xl my-4 hover:scale-105 transition-transform duration-300 shadow-lg">
          Scopri di più
        </button>
      </div>
    </>
  );
}
