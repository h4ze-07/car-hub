'use client';

import { Car } from '@/types';
import { calculateCarRent } from '@/utils';
import Image from 'next/image';
import { useState } from 'react';
import CustomButton from './CustomButton';
import CarDetails from './CarDetails';

const CarCard = ({car}: {car: Car}) => {
    const [isOpen, setIsOpen] = useState(false);
    const { city_mpg, year, make, model, transmission, drive } = car;

    const price = calculateCarRent(city_mpg, year);

    return (
        <div className='car-card group'>
            <div className='car-card__content'>
                <h1 className='car-card__content-title'>{make} {model}</h1>
            </div>

            <p className='flex mt-6 text-[32px] font-extrabold'>
                <span className='self-start text-[14px] font-semibold'>
                    $
                </span>
                {price}
                <span className='self-end text-[14px] font-semibold'>
                    /day
                </span>
            </p>

            <div className='relative w-full h-40 my-3 object-contain'>
                <Image 
                    src={'/hero.png'}
                    alt='car'
                    fill
                    className='object-contain'
                />
            </div>

            <div className='relative flex w-full mt-2'>
                <div className='flex group-hover:invisible w-full justify-between text-gray-600'>
                    <div className='flex flex-col justify-center items-center gap-2'>
                        <Image 
                            src='/steering-wheel.svg'
                            alt='steering wheel'
                            width={20}
                            height={20}
                            className='object-contain'
                        />
                        <p className='text-[14px]'>{transmission == 'a' ? 'Automatic' : 'Manual'}</p>
                    </div>
                    <div className='flex flex-col justify-center items-center gap-2'>
                        <Image 
                            src='/tire.svg'
                            alt='tire'
                            width={20}
                            height={20}
                            className='object-contain'
                        />
                        <p className='text-[14px]'>{drive.toUpperCase()}</p>
                    </div>
                    <div className='flex flex-col justify-center items-center gap-2'>
                        <Image 
                            src='/gas.svg'
                            alt='gas'
                            width={20}
                            height={20}
                            className='object-contain'
                        />
                        <p className='text-[14px]'>{city_mpg} MPG</p>
                    </div>
                </div>

                <div className='car-card__btn-container'>
                    <CustomButton type='button' text='View More' containerStyles='w-full py-[16px] rounded-full bg-primary-blue text-white text-[14px] leading-[17px] font-bold' icon='/right-arrow.svg' handleCLick={() => setIsOpen(true)} />
                </div>
            </div>

            <CarDetails isOpen={isOpen} closeModal={() => setIsOpen(false)} car={car} />
        </div>
    )
}

export default CarCard