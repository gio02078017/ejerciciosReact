import React from 'react';
import ReactDOM from "react-dom";

//import './Modal.css';

const MyModal = (props) => {


    return ReactDOM.createPortal(
        <div>
            <div className="modal-wrapper"
                style={{
                    transform: props.show ? 'translateY(0vh)' : 'translateY(-100vh)',
                    opacity: props.show ? '1' : '0'
                }}>
                <div className="modal-header">
                    <h3>¡Atención</h3>
                    <span className="close-modal-btn" onClick={props.close}>×</span>
                </div>
                <div className="modal-body">
                    <p>
                        {props.children}
                    </p>
                </div>
                <div className="modal-footer">
                    <button className="btn-continue" onClick={props.close}>{props.nameDeny}</button>
                    <button className="btn-cancel" onClick={props.confirmDelete}>{props.nameConfirm}</button>
                </div>
            </div>
        </div>, document.getElementById("modal-root")
    )
}

export default MyModal;