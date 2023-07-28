import { FaIndustry } from "react-icons/fa";
import styles from "./styles.module.css";
import list_parceiros from "../../../public/parceiros.json";

export interface ContentModalProps{
    area: number
}

interface Empresas {
    id: string;
    area: string;
    empresa: string;
    icon_empresa?: string;
    escola_responsavel: string;
}

const empresas_mecanica = list_parceiros.mecanica_metalurgica.map((item : Empresas) => {
    return (
        <tr key={item.id}>
            <td style={{'display':'flex', 'justifyContent': 'flex-start'}}>
                { item.icon_empresa ? (
                    <img src={item.icon_empresa} className={styles.icon} />
                    ) : (
                    <FaIndustry className={styles.icon} />
                    )
                }
                <div style={{'margin': '1rem'}}>{item.empresa}</div>
            </td>
            <td>{item.escola_responsavel}</td>
        </tr>
    )
});

const empresas_alimentos = list_parceiros.alimentos.map((item: Empresas) => {
    return (
        <tr key={item.id}>
            <td style={{'display':'flex', 'justifyContent': 'flex-start'}}>
                { item.icon_empresa ? (
                    <img src={item.icon_empresa} className={styles.icon} />
                    ) : (
                    <FaIndustry className={styles.icon} />
                    )
                }
                <div style={{'margin': '1rem'}}>{item.empresa}</div>
            </td>
            <td>{item.escola_responsavel}</td>
        </tr>
    )
});

const empresas_plasticos = list_parceiros.plasticos.map((item: Empresas) => {
    return (
        <tr key={item.id}>
            <td style={{'display':'flex', 'justifyContent': 'flex-start'}}>
                { item.icon_empresa ? (
                    <img src={item.icon_empresa} className={styles.icon} />
                    ) : (
                    <FaIndustry className={styles.icon} />
                    )
                }
                <div style={{'margin': '1rem'}}>{item.empresa}</div>
            </td>
            <td>{item.escola_responsavel}</td>
        </tr>
    )
});

const empresas_tec_informacao = list_parceiros.tecnologia_informacao.map((item: Empresas) => {
    return (
        <tr key={item.id}>
            <td style={{'display':'flex', 'justifyContent': 'flex-start'}}>
                { item.icon_empresa ? (
                    <img src={item.icon_empresa} className={styles.icon} />
                    ) : (
                    <FaIndustry className={styles.icon} />
                    )
                }
                <div style={{'margin': '1rem'}}>{item.empresa}</div>
            </td>
            <td>{item.escola_responsavel}</td>
        </tr>
    )
});

const empresas_refrigeracao = list_parceiros.refrigeracao.map((item: Empresas) => {
    return (
        <tr key={item.id}>
            <td style={{'display':'flex', 'justifyContent': 'flex-start'}}>
                { item.icon_empresa ? (
                    <img src={item.icon_empresa} className={styles.icon} />
                    ) : (
                    <FaIndustry className={styles.icon} />
                    )
                }
                <div style={{'margin': '1rem'}}>{item.empresa}</div>
            </td>
            <td>{item.escola_responsavel}</td>
        </tr>
    )
});

const empresas_const_civil = list_parceiros.construcao_civil.map((item: Empresas) => {
    return (
        <tr key={item.id}>
            <td style={{'display':'flex', 'justifyContent': 'flex-start'}}>
                { item.icon_empresa ? (
                    <img src={item.icon_empresa} className={styles.icon} />
                    ) : (
                    <FaIndustry className={styles.icon} />
                    )
                }
                <div style={{'margin': '1rem'}}>{item.empresa}</div>
            </td>
            <td>{item.escola_responsavel}</td>
        </tr>
    )
});

const empresas_energia = list_parceiros.energia.map((item: Empresas) => {
    return (
        <tr key={item.id}>
            <td style={{'display':'flex', 'justifyContent': 'flex-start'}}>
                { item.icon_empresa ? (
                    <img src={item.icon_empresa} className={styles.icon} />
                    ) : (
                    <FaIndustry className={styles.icon} />
                    )
                }
                <div style={{'margin': '1rem'}}>{item.empresa}</div>
            </td>
            <td>{item.escola_responsavel}</td>
        </tr>
    )
});

const empresas_automotiva = list_parceiros.automotiva.map((item: Empresas) => {
    return (
        <tr key={item.id}>
            <td style={{'display':'flex', 'justifyContent': 'flex-start'}}>
                { item.icon_empresa ? (
                    <img src={item.icon_empresa} className={styles.icon} />
                    ) : (
                    <FaIndustry className={styles.icon} />
                    )
                }
                <div style={{'margin': '1rem'}}>{item.empresa}</div>
            </td>
            <td>{item.escola_responsavel}</td>
        </tr>
    )
});

const empresas_textil_vestuario = list_parceiros.textil_vestuario.map((item: Empresas) => {
    return (
        <tr key={item.id}>
            <td style={{'display':'flex', 'justifyContent': 'flex-start'}}>
                { item.icon_empresa ? (
                    <img src={item.icon_empresa} className={styles.icon} />
                    ) : (
                    <FaIndustry className={styles.icon} />
                    )
                }
                <div style={{'margin': '1rem'}}>{item.empresa}</div>
            </td>
            <td>{item.escola_responsavel}</td>
        </tr>
    )
});

const empresas_automacao = list_parceiros.automacao.map((item: Empresas) => {
    return (
        <tr key={item.id}>
            <td style={{'display':'flex', 'justifyContent': 'flex-start'}}>
                { item.icon_empresa ? (
                    <img src={item.icon_empresa} className={styles.icon} />
                    ) : (
                    <FaIndustry className={styles.icon} />
                    )
                }
                <div style={{'margin': '1rem'}}>{item.empresa}</div>
            </td>
            <td>{item.escola_responsavel}</td>
        </tr>
    )
});

const empresas_eletronica = list_parceiros.eletronica.map((item: Empresas) => {
    return (
        <tr key={item.id}>
            <td style={{'display':'flex', 'justifyContent': 'flex-start'}}>
                { item.icon_empresa ? (
                    <img src={item.icon_empresa} className={styles.icon} />
                    ) : (
                    <FaIndustry className={styles.icon} />
                    )
                }
                <div style={{'margin': '1rem'}}>{item.empresa}</div>
            </td>
            <td>{item.escola_responsavel}</td>
        </tr>
    )
});

const empresas_quimica = list_parceiros.quimica.map((item: Empresas) => {
    return (
        <tr key={item.id}>
            <td style={{'display':'flex', 'justifyContent': 'flex-start'}}>
                { item.icon_empresa ? (
                    <img src={item.icon_empresa} className={styles.icon} />
                    ) : (
                    <FaIndustry className={styles.icon} />
                    )
                }
                <div style={{'margin': '1rem'}}>{item.empresa}</div>
            </td>
            <td>{item.escola_responsavel}</td>
        </tr>
    )
})

export function ContentModal({ area }: ContentModalProps){

    function verify_area(area: number){
        return (
            area === 1 ? empresas_mecanica :
            area === 2 ? empresas_alimentos :
            area === 3 ? empresas_plasticos:
            area === 4 ? empresas_tec_informacao :
            area === 5 ? empresas_refrigeracao :
            area === 6 ? empresas_const_civil : 
            area === 7 ? empresas_energia :
            area === 8 ? empresas_automotiva :
            area === 9 ? empresas_textil_vestuario :
            area === 10 ? empresas_automacao :
            area === 11 ? empresas_eletronica :
            area === 12 ? empresas_quimica :
            'no_empresas'
        )
    }
    return (
        <div className={styles.container_table}>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <th style={{'textAlign': 'left'}}>Empresa</th>
                        <th style={{'textAlign': 'left'}}>Escola Responsável</th>
                    </tr>
                </thead>
                <tbody>
                    {verify_area(area)}
                </tbody>
            </table>
        </div>
        
    )
}