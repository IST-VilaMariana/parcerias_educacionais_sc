import mechanic from "../../../public/images/icons_parceiros/fluent-emoji-high-contrast_man-mechanic.svg";
// import fork from "../../../public/images/icons_parceiros/fluent_food-16-filled.svg";
// import plastic from "../../../public/images/icons_parceiros/fluent_drink-bottle-20-filled.svg";
// import computer from "../../../public/images/icons_parceiros/mdi_desktop-classic.svg";
// import automotiva from "../../../public/images/icons_parceiros/bxs_car-mechanic.svg";
// import climatizacao from "../../../public/images/icons_parceiros/icon-park-outline_air-conditioning.svg";
// import construction from "../../../public/images/icons_parceiros/construction-svgrepo-com.svg";
// import energy from "../../../public/images/icons_parceiros/energy-svgrepo-com.svg";
// import vestuario from "../../../public/images/icons_parceiros/map_clothing-store.svg";
// import automacao from "../../../public/images/icons_parceiros/carbon_ibm-cloud-pak-network-automation.svg";
// import eletronica from "../../../public/images/icons_parceiros/eletronic_icon.svg";
// import quimica from "../../../public/images/icons_parceiros/carbon_chemistry.svg";

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
                {/* <ModalRadixUI
                    title={'Alimentos'}
                    src={fork}
                    area={2}
                />
                <ModalRadixUI
                    title={'Plásticos'}
                    src={plastic}
                    area={3}
                />
                <ModalRadixUI
                    title={'Tecnologia da Informação'}
                    src={computer}
                    area={4}
                />
                <ModalRadixUI
                    title={'Refrigeração'}
                    src={climatizacao}
                    area={5}
                />
                <ModalRadixUI
                    title={'Construção Civil'}
                    src={construction}
                    area={6}
                />
                <ModalRadixUI
                    title={'Energia'}
                    src={energy}
                    area={7}
                />
                <ModalRadixUI
                    title={'Automotiva'}
                    src={automotiva}
                    area={8}
                />
                <ModalRadixUI
                    title={'Têxtil e Vestuário'}
                    src={vestuario}
                    area={9}
                />
                <ModalRadixUI
                    title="Automação"
                    src={automacao}
                    area={10}
                />
                <ModalRadixUI
                    title="Eletrônica"
                    src={eletronica}
                    area={11}
                />
                <ModalRadixUI
                    title="Quimica"
                    src={quimica}
                    area={12}
                />                  */}
        </div>
    )
}