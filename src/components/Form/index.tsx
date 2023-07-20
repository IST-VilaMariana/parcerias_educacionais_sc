import styles from './styles.module.css';

export function Form(){
    return (
        <iframe
            className={styles.formIframe}
            src="https://forms.office.com/r/z7m0HwxyUm?embed=true"
            title="formulário de inscrição"
            allowFullScreen
        >
        </iframe>
    )
}