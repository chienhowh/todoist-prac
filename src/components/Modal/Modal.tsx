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
                        {/* <span className={styles.close} >
                            <IoClose />
                        </span> */}
                    </header>
                    <main className={styles.modal_content}>
                        {content ?? ''}
                    </main>
                    <footer style={{ textAlign: 'right' }}>
                        <button
                            type="button"
                            className="add-task__submit"
                            data-testid="add-task"
                            onClick={
                                () => onConfirm()}
                        >
                            Confirm
                        </button>

                        <span
                            className="add-task__cancel"
                            onClick={() => onClose()}
                            tabIndex={0}
                            role="button"
                        >
                            Cancel
                        </span>
                    </footer>
                </div>
            </div>

        }
    </>, document.getElementById('modal') as Element)
}

export default Modal