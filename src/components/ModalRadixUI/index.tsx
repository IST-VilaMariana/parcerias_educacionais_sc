import * as Dialog from "@radix-ui/react-dialog";
import icon_close from "../../../public/icons/close_button.svg";
import Image from "next/image";
import { useState } from "react";
import { ContentModal } from "../ContentModal";
import style from "./styles.module.css";

type ModalProps = {
    title : string;
    src: string;
    area: number;
}

export function ModalRadixUI({title, src, area }:ModalProps){
    
    const [isOpen, setIsOpen] = useState(false);
    
    return (
        <Dialog.Root defaultOpen open={isOpen} onOpenChange={setIsOpen} modal>
            <Dialog.Trigger className={style.card} onClick={() => setIsOpen(true)}>
                <Image src={src} alt='image' width={40} height={40}/>
                <p>{title}</p>
            </Dialog.Trigger>
            <Dialog.Portal>
                <Dialog.Overlay className={style.modalStyle}>
                    <Dialog.Content className={style.renderContent}>                    
                        <div className={style.container}>
                            <div className={style.headermodal}>
                                <span>{title}</span>
                                <Dialog.Close onClick={() => setIsOpen(false)} style={{ background: 'transparent', border: 'none'}}>
                                    <Image src={icon_close} className={style.iconClose} alt=''/>
                                </Dialog.Close>
                            </div>
                            <ContentModal key={area} area={area}/>                        
                        </div>                    
                    </Dialog.Content>
                </Dialog.Overlay>
            </Dialog.Portal>
        </Dialog.Root>
    )
}