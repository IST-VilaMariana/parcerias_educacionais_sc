import { MenuSocialMediaFooter } from '../MenuSocialMediaFooter';
import { ImLocation2, ImPhone } from "react-icons/im";
import styles from './styles.module.css';

export function Footer(){
    return(
        <footer role='contentinfo' className={styles.footerConteiner}>
            <MenuSocialMediaFooter />
            <div className={styles.footerContent}>
                <div className={styles.item}>
                    <div>
                        <ImLocation2 className={styles.icon} />
                        <span>
                            Edifício Armando Monteiro Neto Plano Diretor Sul
                        </span>
                        <p>ACSE 1 Rua de Pedestre SE 03 lote-34</p>
                        <p>Palmas - TO Cep: 77020-016</p>                        
                    </div>
                </div>
                <div className={styles.item}>
                    <div>
                        <ImPhone className={styles.icon} />
                        <span>(63) 3229-5770</span>
                        <p>Horário de Atendimento:</p>
                        <p>Seg à Sex/ das 8hrs às 18hrs</p>
                    </div>
                </div>
            </div>
            <div className={styles.footerCopyright}>
                <small>Copyright 2023 © Todos os direitos reservados ao SENAI TO.</small>
            </div>
        </footer>
    )
}