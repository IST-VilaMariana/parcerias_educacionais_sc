import styles from "./styles.module.css";
import { AiOutlineDownload } from "react-icons/ai";

type ButtonProps = {
    endereco_url: string
}

export function ButtonDownload({ endereco_url}:ButtonProps){
    return (
        <a href={endereco_url} download={'file.pdf'} aria-label={'document'}><AiOutlineDownload className={styles.icon}/></a>
    )
}