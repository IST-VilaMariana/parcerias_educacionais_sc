﻿import { ImFacebook, ImTwitter, ImYoutube, ImLinkedin } from 'react-icons/im';

import styles from './styles.module.css';

export function MenuSocialMediaFooter(){
    return (
        <div className={styles.navConteinerFooter}>
            <a aria-label='Perfil no Facebook' href="https://web.facebook.com/firjanoficial?_rdc=1&_rdr" ><ImFacebook /></a>
            <a aria-label='Página do Twitter' href="https://twitter.com/firjan" ><ImTwitter /></a>
            <a aria-label='Canal no Youtube' href="https://www.youtube.com/user/SistemaFIRJAN" ><ImYoutube /></a>
            <a aria-label='Perfil no Instagram' href="https://www.linkedin.com/company/firjan/" ><ImLinkedin /></a>
        </div>
    )
}