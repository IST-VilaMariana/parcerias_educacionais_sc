import right from "../../../public/icons/Chevron_direita.svg";
import Image from "next/image";
import styles from "./styles.module.css";

export function ButtonPressRight({ nextSlide }){
    return (
        <button
            aria-label='click para o posterior'
            onClick={nextSlide}
            className={styles.iconButton}
        >
            <Image src={right} alt={""} />
        </button>
    )
}