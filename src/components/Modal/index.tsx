import React from 'react';
interface ModalProps {
    title: string;
    body: React.ReactNode;
    onCancel?: () => void;
    onOk?: () => void;
    okLabel?: string;
    cancelLabel?: string;
}

const Modal = ( { title, body, onCancel, onOk, okLabel = 'OK', cancelLabel = 'Cancel' }: ModalProps ) => {
    return (
        <div className="liwe3-modal">
            <div className="content">
                <div className="header">
                    <h2>{title}</h2>
                </div>
                <div className="body">{body}</div>
                <div className="footer">
                    {onCancel && <button onClick={onCancel}>{cancelLabel}</button>}
                    {onOk && <button onClick={onOk}>{okLabel}</button>}
                </div>
            </div>
        </div>
    );
};

export default Modal;