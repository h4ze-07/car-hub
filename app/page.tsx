import CarCard from "@/components/CarCard";
import CustomFilter from "@/components/CustomFilter";
import Hero from "@/components/Hero";
import SearchBar from "@/components/SearchBar";
import { fetchCars } from "@/utils";
import Image from "next/image";

export default async function Home() {

    const allCars = await fetchCars();
    const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;

    return (
      <main>
        <Hero />
        <div className="max-width mt-12 padding-x padding-y" id="discover">
          <div className="home__text-container">
            <h1 className="text-4xl font-extrabold">Car Catalogue</h1>
            <p className='text-gray-400 mt-3'>Explore the cars you might like</p>

            <div className="home__filters">

              <SearchBar />

              <div className="flex justify-start flex-wrap items-center gap-2">
                <CustomFilter title='fuel' />
                <CustomFilter title='year' />
              </div>
            </div>
          </div>

          {!isDataEmpty ? (
            <section>
              <div className="home__cars-wrapper">
                {allCars?.map( car => (
                  <CarCard car={car} />
                ))}

              </div>
            </section>
          ) : (
            <div className="home__error-container">
              <h2 className="text-black text-xl font-bold">No results...</h2>
              <p>{allCars?.message}</p>
            </div>
          )}
        </div>
      </main>
    );
}
