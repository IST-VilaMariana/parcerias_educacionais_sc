import styles from './styles.module.css';

export function Navigation(){
    return (
        <nav role='navigation'  className={styles.navigation}>
            
            <a 
                href="#depoimentos"
                aria-label='Ouça os depoimentos de quem já faz parte'
                // style={{
                //     background: 'var(--brand-700)',
                //     color: 'var(--white)',
                //     border: 'none'
                // }}
            >
                DEPOIMENTOS DE QUEM JÁ FAZ PARTE
            </a>
            <a 
                href="#editais"
                aria-label='acesse nossos editais'
                style={{
                    background: 'var(--brand-700)',
                    color: 'var(--white)',
                    border: 'none',
    
                }}
            >
                ACESSE O EDITAL PARA PARCERIAS
            </a>
            <a 
                href="#seja_parceiro"
                aria-label='Preencha nosso formulário'
                // style={{
                //     background: 'var(--brand-700)',
                //     color: 'var(--white)',
                //     border: 'none'
                // }}
            >
                SAIBA COMO SE TORNAR UM PARCEIRO
            </a>

            <a 
                href="#seja_parceiro"
                aria-label='Preencha nosso formulário'
                style={{
                    background: 'var(--brand-700)',
                    color: 'var(--white)',
                    border: 'none'
                }}
            >
                APRESENTAÇÃO INSTITUCIONAL
            </a>

            
            
        </nav>
    )
}