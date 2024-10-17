import Image from "next/image";
import left from "../../../public/icons/Chevron_esquerda.svg"
import styles from "./styles.module.css";

interface ButtonLefthProps {

    backgroundColor?: string;

    color?: string;

    width?: string;

    height?: string;

    prevSlide: () => void;
}

export function ButtonPressLefth({ 
    prevSlide,
    backgroundColor,
    color,
    width,
    height
   }: ButtonLefthProps){
    return (
        <button
            type='button'
            aria-label='click para o anterior'
            onClick={prevSlide}
            className={styles.iconButton}
        >
            <Image src={left} alt={''}  />
        </button>
    )
}