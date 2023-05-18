import styles from './styles.module.css';

export function Form(){
    return (
        <iframe
            className={styles.formIframe}
            src="https://forms.office.com/r/WZ28rXpcvW"
            frameBorder="0"
            allowFullScreen
        >
        </iframe>
    )
}