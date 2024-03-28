import Hero from "@/components/Hero";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Hero />
      <div className="max-width mt-12 padding-x padding-y">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">Car Catalogue</h1>
          <p className='text-gray-400 mt-3'>Explore the cars you might like</p>

          <div className="home__filters">

          </div>
        </div>
      </div>
    </main>
  );
}
