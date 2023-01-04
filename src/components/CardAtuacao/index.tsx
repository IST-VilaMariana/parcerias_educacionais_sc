﻿import styles from "./styles.module.scss";
import Image from "next/image";

export function CardAtuacao({title, src}){
    
    return (        
        <div className={styles.container}>
            <button className={styles.card} >
                <Image src={src} alt='image' width={40} height={40} />
                <p>{title}</p>
            </button>
        </div>        
    )
}



