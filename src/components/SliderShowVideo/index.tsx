import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

import styles from './styles.module.css';

const linkVideo = [
    {
        src : 'https://www.youtube.com/embed/iVBgjdKMLEc',
        title : '+Parceiros – Senai TO – Depoimento de quem já faz parte da nossa rede | SENAI TO',
        company: 'Brasil +Produtivo'
    },
    {
        src : 'https://www.youtube.com/embed/MCQDsudM4ZE',
        title: '+Parceiros – Senai TO – Depoimento de quem já faz parte da nossa rede | SENAI TO',
        company: 'Bolos do Cerrado' 
    },
    {
        src: 'https://www.youtube.com/embed/eMc0WLPOc28',
        title: '+Parceiros – Senai TO – Depoimento de quem já faz parte da nossa rede | SENAI TO',
        company: 'Laticínio'
    },
    {
        src: 'https://www.youtube.com/embed/DNNbdKlTS3M',
        title: '+Parceiros – Senai TO – Depoimento de quem já faz parte da nossa rede | SENAI TO',
        company: 'Santa Clara'
    },
    {
        src: 'https://www.youtube.com/embed/nJA95fVkiGA',
        title: '+Parceiros – Senai TO – Depoimento de quem já faz parte da nossa rede | SENAI TO',
        company: 'Sistema FIETO'
    }
];

const variants = {
    initial: (direction: number) => {
        return { x: direction > 0 ? 1000 : -1000, opacity: 0 }
    },
    animate: {
        x: 0,
        opacity: 1,
        transition: { 
            x : { type: 'spring', stiffness: 300, damping: 30 }, 
            opacity: { duration: 0.2 }
        }
    },
    exit: (direction: number) => {
        return { 
            x: direction > 0 ? -1000 : 1000,
            opacity: 0,
            transition: {
                x : { type: 'spring', stiffness: 300, damping: 30},
                opacity: { duration: 0.2 }
            } 
        }
    }
}

export function SliderShowVideo(){
    const [index, setIndex] = useState(0);
    const [direction, setDirection] = useState(0);

    function nextVideo(){
        setDirection(1);
        if(index === linkVideo.length -1){
            setIndex(0);
            return
        }
        setIndex(index +1);
    }

    function prevVideo(){
        setDirection(-1);
        if(index === 0){
            setIndex(linkVideo.length -1);
            return
        }
        setIndex(index-1);
    }
    return (          
        <>           
            <div className={styles.slider}>
                <AnimatePresence initial={false} custom={direction}>
                    <motion.iframe
                        key={index}
                        custom={direction}
                        variants={variants}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        aria-label='Depoimento da empresa `${linkVideo[index].company}`'
                        src={linkVideo[index].src}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    />                     
                </AnimatePresence>            
            </div>
            <div className={styles.contentButton}>
                <button aria-label='click para o vídeo anterior' className={styles.iconPrevButton} onClick={prevVideo}><AiOutlineLeft /></button>
                <div>
                    <span>{linkVideo[index].company}</span>
                </div>            
                <button aria-label='click para o vídeo posterior' className={styles.iconNextButton} onClick={nextVideo}><AiOutlineRight  /></button>
            </div>
        </>
    )
}