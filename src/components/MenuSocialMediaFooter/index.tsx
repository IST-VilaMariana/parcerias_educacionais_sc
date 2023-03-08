import { ImFacebook, ImTwitter, ImYoutube, ImInstagram } from 'react-icons/im';

import styles from './styles.module.css';

export function MenuSocialMediaFooter(){
    return (
        <div className={styles.navConteinerFooter}>
            <a aria-label='Perfil no Facebook' href="https://www.facebook.com/www.facebook.com/senaitocantins" ><ImFacebook /></a>
            <a aria-label='Página do Twitter' href="http://twitter.com/sistemafieto" ><ImTwitter /></a>
            <a aria-label='Canal no Youtube' href="https://www.youtube.com/senaitocantinsto" ><ImYoutube /></a>
            <a aria-label='Perfil no Instagram' href="https://www.instagram.com/senaitocantins/" ><ImInstagram /></a>
        </div>
    )
}