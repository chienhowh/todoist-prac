import React from 'react';
import ReactDOM from "react-dom";
import { IoClose } from "react-icons/io5";
import styles from './Modal.module.scss';
interface Props {
    isShow: boolean;
    title?: string;
    content?: string;
    onClose: () => void;
    onConfirm: () => void
}

function Modal({ isShow, title, content, onClose, onConfirm }: Props) {
    return ReactDOM.createPortal(<>
        {
            isShow &&

            <div
                className={styles.modalContainer}
                onClick={() => onClose()}
            >
                <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
                    <header className={styles.modal_header}>
                        <h2 className={styles["modal_header-title"]}> {title ?? '提示訊息'}</h2>
                        <span className={styles.close} >
                            <IoClose />
                        </span>
                    </header>
                    <main className={styles.modal_content}>
                        {content ?? ''}
                    </main>
                    <footer className={styles.modal_footer}>
                        <button className={styles["modal-close"]} onClick={() => onClose()}>
                            Cancel
                        </button>

                        <button className={styles.submit} onClick={
                            () => onConfirm()
                        }>Submit</button>
                    </footer>
                </div>
            </div>

        }
    </>, document.getElementById('modal') as Element)
}

export default Modal