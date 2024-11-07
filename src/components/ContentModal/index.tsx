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

const empresas_automacao_industrial = list_parceiros.automacao_industrial.map((item : Empresas) => {
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

const empresas_manutencao = list_parceiros.manutencao.map((item: Empresas) => {
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

const empresas_logistica_transporte = list_parceiros.logistica_transporte.map((item: Empresas) => {
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

const empresas_eletrica = list_parceiros.eletrica.map((item: Empresas) => {
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
            area === 1 ? empresas_automacao :
            area === 2 ? empresas_automacao_industrial :
            area === 3 ? empresas_automotiva :
            area === 4 ? empresas_const_civil : 
            area === 5 ? empresas_eletrica :
            area === 6 ? empresas_logistica_transporte :
            area === 7 ? empresas_manutencao :
            area === 8 ? empresas_tec_informacao:
            area === 9 ? empresas_textil_vestuario :
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