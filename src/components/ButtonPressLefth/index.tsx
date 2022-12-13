﻿import { AiOutlineLeft } from "react-icons/ai";
import { Default } from "../Carousel/carousel.stories";
import styles from "./styles.module.scss";

interface ButtonLefthProps {

    backgroundColor?: string;

    color?: string;

    width?: string;

    height?: string;

    prevSlide?: () => void;
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
            style={{ backgroundColor, color, width, height}}
        >
            <AiOutlineLeft />
        </button>
    )
}