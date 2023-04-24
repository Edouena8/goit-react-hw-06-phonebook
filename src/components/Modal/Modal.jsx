import { useEffect } from "react";
import { createPortal  } from "react-dom";
import { useSelector, useDispatch } from "react-redux";
import { toggleModal } from "redux/modalSlice";
import { ModalBackdrop, ModalContent } from "./Modal.styled";

const modalRoot = document.querySelector('#modal-root');

export default function Modal({ children}) {
    const dispatch = useDispatch();
    const modal = useSelector(state => state.modal);
    
    useEffect(() => {
        const handleKeyDown = evt => {
            if(evt.code === 'Escape') {
                dispatch(toggleModal(modal));
            }
        };

        window.addEventListener('keydown', handleKeyDown);
 
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        }
    }, [dispatch, modal]);

    const handleBackdropClick = evt => {
        if(evt.target === evt.currentTarget) {
            dispatch(toggleModal(modal));
        }
    }

    return (
        createPortal( 
            <ModalBackdrop onClick={handleBackdropClick}>
                <ModalContent>{children}</ModalContent>
            </ModalBackdrop>, modalRoot) 
    );
};
