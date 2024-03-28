import { MouseEventHandler } from "react";

export type CustomButtonProps = {
    type: 'button' | 'submit',
    text: string,
    icon?: string,
    containerStyles?: string,
    handleCLick?: MouseEventHandler<HTMLButtonElement>,
}