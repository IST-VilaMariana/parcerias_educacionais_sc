﻿import { AccordionItem } from "../AccordionItem";

import styles from "./styles.module.scss";

export function Accordion({ questionsAnswers }){
    const renderedQuestionsAnswers = questionsAnswers.map((item: {question:string, answer:string},  index: number) => {
        return(
            <AccordionItem 
                key={index}
                item={item}
                index={index}
            />
        )
    });
    return (
        <div className={styles.accordion}>
            <dl>{renderedQuestionsAnswers}</dl>
        </div>
    )
}