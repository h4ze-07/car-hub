'use client';

import { CustomButtonProps } from "@/types";
import Image from "next/image";

const CustomButton = ({type, text, containerStyles, handleCLick}: CustomButtonProps) => {
  return (
    <button
        type={type}
        className={`custom-btn ${containerStyles}`}
        onClick={handleCLick}
    >
        <span className={`flex-1`}>
            {text}
        </span>
        

    </button>
  )
}

export default CustomButton