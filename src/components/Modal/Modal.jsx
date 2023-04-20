import { useEffect } from "react";
import { createPortal  } from "react-dom";
import { ModalBackdrop, ModalContent } from "./Modal.styled";

const modalRoot = document.querySelector('#modal-root');

export default function Modal({onClose, children}) {
    
    useEffect(() => {
        const handleKeyDown = evt => {
            if(evt.code === 'Escape') {
                onClose();
            }
        };

        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        }
    }, [onClose]);

    const handleBackdropClick = evt => {
        if(evt.target === evt.currentTarget) {
            onClose();
        }
    }

    return (
        createPortal( 
            <ModalBackdrop onClick={handleBackdropClick}>
                <ModalContent>{children}</ModalContent>
            </ModalBackdrop>, modalRoot) 
    );
};
