import { MouseEventHandler } from "react";

export type CustomButtonProps = {
    type: 'button' | 'submit',
    text: string,
    icon?: string,
    containerStyles?: string,
    handleCLick?: MouseEventHandler<HTMLButtonElement>,
}

export type FilterProps = {
    manufacturer: string,
    model: string,
    year: number,
    fuel: string,
    limit: number,
}

export type ManufacturerProps = {
    manufacturer: string,
    setManufacturer: (manufacturer: string) => void;
}

export type Car = {
    city_mpg: number,
    class: string,
    combination_mpg: number,
    cylinders: number,
    displacement: number,
    drive: string,
    fuel_type: string,
    highway_mpg: number,
    make: string,
    model: string,
    transmission:string,
    year: number,
}

export type CardDetailsProps = {
    isOpen: boolean,
    closeModal: () => void,
    car: Car,
}

type OptionsFuels = {
    title: string,
    value: string,
}

type OptionsYears = {
    title: string,
    value: string,   
}

export type CustomFilterProps = {
    title: string,
    options: OptionsFuels[] | OptionsYears[],
}