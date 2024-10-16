import Image from 'next/image';
import facebook from '../../../public/images/medias_social_icons/logo_facebook.svg';
import x from '../../../public/images/medias_social_icons/Logo_X.svg';
import linkedin from '../../../public/images/medias_social_icons/logo_wpp.svg';
import whatsapp from '../../../public/images/medias_social_icons/logo_linkedin.svg';
import styles from './styles.module.css';

export function MenuSocialMedia(){
    return (
        <div className={styles.navConteiner}>
            <a
                aria-label='Perfil no Facebook'
                href="https://web.facebook.com/firjanoficial?_rdc=1&_rdr" >
                <Image src={facebook} alt ="" />
            </a>
            <a aria-label='Página do Twitter'
                href="https://twitter.com/firjan" 
            >
                <Image src={x} alt ="" />
            </a>
            <a aria-label='Canal no Youtube'
                href="https://www.youtube.com/user/SistemaFIRJAN" >
                <Image src={linkedin} alt ="" />
            </a>
            <a aria-label='Perfil no Instagram'
             href="https://www.linkedin.com/company/firjan/" >
                <Image src={whatsapp} alt ="" />
            </a>
        </div>
    )
}