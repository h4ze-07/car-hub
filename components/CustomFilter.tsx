'use client';

import Image from "next/image";
import { useState, Fragment } from "react";
import { useRouter } from "next/navigation";

import { CustomFilterProps } from "@/types";
import { Listbox, Transition } from "@headlessui/react";
import { updateSearchParams } from "@/utils";

const CustomFilter = ({title, options}: CustomFilterProps) => {
    const router = useRouter()

    const [selectedFilter, setSelectedFilter] = useState(options[0])

    const updateFilterParams = (e: {title: string, value: string}) => {
      const newPathName = updateSearchParams(title, e.value.toLowerCase())
      router.push(newPathName, {scroll: false})
    }

    return (
      <div className="w-fit">
        <Listbox
          value={selectedFilter}
          onChange={(e) => {setSelectedFilter(e); updateFilterParams(e)}}
        >
          <div className="relative w-fit z-10">
            <Listbox.Button className='custom-filter__btn'>
              <span className="block truncate">{selectedFilter.title}</span>
              <Image 
                src='/chevron-up-down.svg'
                alt="chevron up down"
                width={20}
                height={20}
                className="ml-4 object-contain"
              />
            </Listbox.Button>
            <Transition
              as={Fragment}
              leave="transition ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className='custom-filter__options'>
                {options.map( o => (
                  <Listbox.Option key={o.title} value={o} className={({active}) => `relative cursor-default select-none py-2 px-4 
                    ${active ? 'bg-primary-blue text-white' : 'text-gray-900'}
                  `}>
                    {({selected}) => (
                      <span className={`block truncate ${selected ? 'font-bold' : 'font-[400]'}`}>{o.title}</span>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </Listbox>
      </div>
    )
}

export default CustomFilter