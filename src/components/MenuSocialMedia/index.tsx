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
                href="https://www.facebook.com/senaisc" >
                <Image src={facebook} alt ="" />
            </a>
            <a aria-label='Página do Twitter'
                href="https://www.twitter.com/SENAISC" 
            >
                <Image src={x} alt ="" />
            </a>
            <a aria-label='Canal no Linkedin'
                href="https://www.linkedin.com/school/senai-sc" >
                <Image src={linkedin} alt ="" />
            </a>
            <a aria-label='Perfil no whatsapp'
             href="https://chat.whatsapp.com/JasrOeBNORVGVeA6FWGFUS" >
                <Image src={whatsapp} alt ="" />
            </a>
        </div>
    )
}