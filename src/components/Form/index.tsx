import styles from './styles.module.css';

export function Form(){
    return (
        <object
            className={styles.formIframe}
            data="https://docs.google.com/forms/d/e/1FAIpQLScvT6ShIkwPm0ehrWjytT2sr7433nt-mviVNALiMV7_7vwjTg/viewform?usp=sharing"
            title="formulário de inscrição"
        >
        </object>
    )
}