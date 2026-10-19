import banner from "../assets/banner2.png";

export default function Home() {
  return (
    <>
      <div className="relative">
        <img src={banner} className="object-contain w-full h-full" />

        <div className="absolute inset-x-0 bottom-0 mb-[3%] flex items-center justify-center text-4xl font-bold text-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.3)]">
          Giulia e Aurora
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
