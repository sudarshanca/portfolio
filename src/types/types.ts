import { MouseEventHandler } from "react";


export interface CustomButtonProps {
   title : string,
   ContainerStyles?: string,
   handelclick?: MouseEventHandler<HTMLButtonElement>;
}