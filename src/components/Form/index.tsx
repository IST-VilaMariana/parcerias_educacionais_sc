import styles from './styles.module.css';

export function Form(){
    return (
        <iframe
            className={styles.formIframe}
            src="https://docs.google.com/forms/d/e/1FAIpQLScvT6ShIkwPm0ehrWjytT2sr7433nt-mviVNALiMV7_7vwjTg/viewform?usp=sharing"
            title="formulário de inscrição"
            allowFullScreen
        >
        </iframe>
    )
}