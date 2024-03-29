'use client';

import React, { useState } from "react";
import SearchManufacturer from "./SearchManufacturer";
import Image from "next/image";
import { useRouter } from "next/navigation";

const SearchButton = ({cssProp}: {cssProp: string}) => {

    return (
        <button type="submit" className={`-ml-3 z-10 ${cssProp}`}>
            <Image 
                src='/magnifying-glass.svg'
                alt="magnifying glass"
                width={40}
                height={40}
                className="object-contain"
            />
        </button>
    )
}

const SearchBar = () => {

    const [manufacturer, setManufacturer] = useState('');
    const [model, setModel] = useState('');

    const router = useRouter();

    const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        if (manufacturer == '' && model == '') {
            throw new Error('No data provided!')
        }

        updateSearchParams(model.toLowerCase(), manufacturer.toLowerCase())
    };


    const updateSearchParams = (model: string, manufacturer: string) => {
        const searchParams = new URLSearchParams(window.location.search);

        if (model) {
            searchParams.set('model', model)
        } else {
            searchParams.delete('model')
        }

        if (manufacturer) {
            searchParams.set('manufacturer', manufacturer)
        } else {   
            searchParams.delete('manufacturer')
        }

        const newPath = `${window.location.pathname}?${searchParams.toString()}`;

        router.push(newPath, {scroll: false});
    }

    return (
        <form className='searchbar' onSubmit={handleSearch}>
            <div className="searchbar__item">
                <SearchManufacturer manufacturer={manufacturer} setManufacturer={setManufacturer} />
                <SearchButton cssProp='sm:hidden' />
            </div>
            <div className="searchbar__item">
                <Image 
                    src='/model-icon.png'
                    alt='model icon'
                    width={25}
                    height={25}
                    className="absolute w-[20px] h-[20px] ml-4"
                />
                <input 
                    type="text"
                    name="model"
                    value={model}
                    onChange={(e) => setModel(e.target.value)}
                    placeholder="Touareg"
                    className="searchbar__input"
                />
                <SearchButton cssProp="sm:hidden" />
            </div>
            <SearchButton cssProp="max-sm:hidden" />
        </form>
    )
}

export default SearchBar