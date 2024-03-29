'use client';

import { CustomButtonProps } from "@/types";
import Image from "next/image";

const CustomButton = ({type, text, icon, containerStyles, handleCLick}: CustomButtonProps) => {
  return (
    <button
        type={type}
        className={`custom-btn ${containerStyles}`}
        onClick={handleCLick}
    >
        <span className={`flex-1`}>
            {text}
        </span>
        
        {icon && (
          <div className='relative w-6 h-6'>
            <Image 
              src={icon}
              alt='icon'
              fill
              className='object-contain'
            />
          </div>
        )}

    </button>
  )
}

export default CustomButton