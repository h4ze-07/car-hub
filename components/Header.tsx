import Image from 'next/image'
import Link from 'next/link'
import CustomButton from './CustomButton'

const Navbar = () => {
  return (
    <header className='w-full absolute z-10'>
        <nav className='max-width flex-between px-6 sm:px-16 py-4'>
            <Link href={'/'}>
                <Image 
                    src='/logo.svg'
                    alt='logo'
                    width={118}
                    height={18}
                    className='object-contain'
                />
            </Link>

            <CustomButton  
                type='button'
                text='Sign In'
                containerStyles='text-primary-blue bg-white rounded-full min-w-[130px] font-bold border border-primary-blue xl:border-white'
            />
        </nav>
    </header>
  )
}

export default Navbar