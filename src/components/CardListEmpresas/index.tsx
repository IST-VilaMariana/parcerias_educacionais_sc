import mechanic from "../../../public/images/icons_parceiros/fluent-emoji-high-contrast_man-mechanic.svg";
import Automacao from "../../../public/images/icons_parceiros/Automacao.svg";
import Automacao_industrial from "../../../public/images/icons_parceiros/Automacao-industrial.svg";
import Automotiva from "../../../public/images/icons_parceiros/Automotivo.svg";
import Construcao_civil from "../../../public/images/icons_parceiros/Construcao-civil.svg";
import Eletrica from "../../../public/images/icons_parceiros/Eletrica.svg";
import Logistica from "../../../public/images/icons_parceiros/Logistica.svg";
import Manutencao from "../../../public/images/icons_parceiros/Manutencao.svg";
import TI from "../../../public/images/icons_parceiros/TI.svg";
import Textil from "../../../public/images/icons_parceiros/Textil.svg";

import styles from "./styles.module.css";
import { ModalRadixUI } from "../ModalRadixUI"; 


export function CardListEmpresas(){

    return (
        <div className={styles.card}>
            <ModalRadixUI
                    title={'Automação'}
                    src={Automacao}
                    area={1}
                />
                <ModalRadixUI
                    title={'Automação Industrial'}
                    src={Automacao_industrial}
                    area={2}
                />
                <ModalRadixUI
                    title={'Automotiva'}
                    src={Automotiva}
                    area={3}
                />
                <ModalRadixUI
                    title={'Construção Civil'}
                    src={Construcao_civil}
                    area={4}
                />
                <ModalRadixUI
                    title={'Elétrica'}
                    src={Eletrica}
                    area={5}
                />
                <ModalRadixUI
                    title={'Logística e Transporte'}
                    src={Logistica}
                    area={6}
                />
                <ModalRadixUI
                    title={'Manutenção'}
                    src={Manutencao}
                    area={7}
                />
                <ModalRadixUI
                    title={'Tecnologia da informação'}
                    src={TI}
                    area={8}
                />
                <ModalRadixUI
                    title={'Têxtil e vestuário'}
                    src={Textil}
                    area={9}
                />
        </div>
    )
}