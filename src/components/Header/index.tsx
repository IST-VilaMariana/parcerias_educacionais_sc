﻿import { AiFillHome, AiOutlineRight } from 'react-icons/ai';
import styles from './styles.module.css';

export function Header(){
    return (
        <header role='banner' className={styles.headerContent}>
            <div className={styles.header_itens}>
                <AiFillHome/>
                <AiOutlineRight  />
                <span>Gestão de Parcerias</span>
            </div>
        </header>
    )
}