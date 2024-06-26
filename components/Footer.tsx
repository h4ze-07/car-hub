import { footerLinks } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className='flex flex-col text-black-100 mt-5'>
        <div className='flex max-md:flex-col flex-wrap justify-between gap-5 sm:px-16 px-6 py-10'>
            <div className='flex flex-col justify-start items-start gap-6'>
                <Image 
                    src={'/logo.svg'}
                    alt='logo'
                    width={118}
                    height={18}
                    className='object-contain'
                />
                <p className='text-base text-gray-300'>
                    Carhub 2024 <br /> All rigths reserved &copy;
                </p>
            </div>

            <div className='footer__links'>
                {footerLinks.map((link) => (
                    <div key={link.title} className='footer__link'>
                        <h3 className='font-bold'>{link.title}</h3>
                        {link.links.map(item => (
                            <Link key={item.title} href={item.url} className='text-gray-300'>{item.title}</Link>
                        ))}
                    </div>
                ))}
            </div>
        </div>

        <div className='flex justify-between items-center flex-wrap border-t border-gray-100 mt-10 px-6 sm:px-16 py-10'>
                <div className='flex gap-8 items-center justify-start sm:justify-center w-full'>
                    <Link href={'/'} className='text-gray-300'>Privacy Policy</Link>
                    <Link href={'/'} className='text-gray-300'>Terms of Use</Link>
                </div>
            </div>
    </footer>
  )
}

export default Footer