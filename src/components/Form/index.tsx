import styles from './styles.module.css';

export function Form(){
    return (
        <iframe
            className={styles.formIframe}
            src="https://forms.office.com/Pages/ResponsePage.aspx?id=3qZIQdENBE2kxXjjdOT21uP3CeRTan5AhCePMRPro9tUNzdEVVdXUzNSSlpLUjUyRE5ROTlFNzNJOC4u"
            frameBorder="0"
            allowFullScreen
        >
        </iframe>
    )
}