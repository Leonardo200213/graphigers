import BentoBox from "../components/BentoBox";
import banner from "../assets/banner.png";

const bento = [
  {
    id: 1,
    image: banner,
    title: "Grande",
    className: "col-span-2 row-span-2",
  },
  {
    id: 2,
    image: banner,
    title: "Grande",
    className: "col-span-1 row-span-2",
  },
  {
    id: 2,
    image: banner,
    title: "Grande",
    className: "col-span-3 row-span-1",
  },
];

export default function Portfolio() {
  return (
    <>
      <h1 className="text-2xl font-bold text-white text-shadow-sm text-center pt-12">
        I nostri lavori più prestigiosi
      </h1>
      <section className="mx-auto grid max-w-5xl auto-rows-[180px] grid-cols-2 gap-6 py-12 md:grid-cols-4">
        {bento.map((item) => (
          <BentoBox
            key={item.id}
            image={item.image}
            title={item.title}
            className={item.className}
          />
        ))}
      </section>
    </>
  );
}
