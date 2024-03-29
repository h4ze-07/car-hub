import { CardDetailsProps } from '@/types'
import {Fragment} from 'react'
import Image from 'next/image'
import { Dialog, Transition } from '@headlessui/react'
import { generateCarImageUrl } from '@/utils'

const CarDetails = ({isOpen, closeModal, car}: CardDetailsProps) => {
  return (
    <>
        <Transition as={Fragment} appear show={isOpen}>
            <Dialog as='div' className='relative z-10' onClose={closeModal}>
                <Transition.Child as={Fragment}
                    enter='ease-in duration-300' 
                    enterFrom='opacity-0'
                    enterTo='opacity-100'
                    leave='ease-out duration-300'
                    leaveFrom='opacity-100'
                    leaveTo='opacity-0'
                >
                    <div className='fixed inset-0 bg-black bg-opacity-25' />
                </Transition.Child>

                <div className='fixed inset-0 overflow-y-auto'>
                    <div className='flex min-h-full items-center justify-center p-4 text-center'>
                    <Transition.Child 
                        as={Fragment}
                        enter='ease-in duration-300' 
                        enterFrom='opacity-0 scale-85'
                        enterTo='opacity-100 scale-100'
                        leave='ease-out duration-300'
                        leaveFrom='opacity-100 scale-100'
                        leaveTo='opacity-0 scale-85'
                    >
                        <Dialog.Panel className='car-details__dialog-panel'>
                            <button
                                onClick={closeModal}
                                className='car-details__close-btn'
                            >
                                <Image 
                                    src='/close.svg'
                                    alt='close'
                                    width={20}
                                    height={20}
                                    className='object-contain'
                                />
                            </button>

                            <div className='flex-1 flex flex-col gap-3'>
                                <div className='relative w-full h-40 bg-pattern bg-cover bg-center rounded-lg'>
                                <Image 
                                    src={generateCarImageUrl(car, '1')}
                                    alt='car'
                                    fill
                                    className='object-contain'
                                />
                                </div>

                                <div className='flex gap-3'>

                                    <div className='flex-1 relative w-full rounded-lg h-24 bg-primary-blue-100'>
                                        <Image 
                                            src={generateCarImageUrl(car, '13')}
                                            alt='car'
                                            fill
                                            className='object-contain'
                                        />
                                    </div>
                                    <div className='flex-1 relative w-full rounded-lg h-24 bg-primary-blue-100'>
                                        <Image 
                                            src={generateCarImageUrl(car, '21')}
                                            alt='car'
                                            fill
                                            className='object-contain'
                                        />
                                    </div>
                                    <div className='flex-1 relative w-full rounded-lg h-24 bg-primary-blue-100'>
                                        <Image 
                                            src={generateCarImageUrl(car, '29')}
                                            alt='car'
                                            fill
                                            className='object-contain'
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className='flex flex-col flex-1 gap-2'>
                                <h2 className='font-semibold text-xl capitalize text-gray-900'>
                                    {car.make} {car.model}
                                </h2>

                                <div className='mt-3 flex flex-wrap gap-4'>
                                    {Object.entries(car).map(([key, value]) => (
                                        <div className='flex justify-between gap-5 w-full' key={key}>
                                            <h4 className='capitalize text-gray-600'>{key.replace(/_/g, ' ')}</h4>
                                            <p className='text-black font-sem'>{value}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </Dialog.Panel>
                    </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition>
    </>
  )
}

export default CarDetails