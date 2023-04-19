import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { CSSTransition } from "react-transition-group";
import "./Modal.css";
import "../App.css";

const Modal = props => {
    const closeOnEscapeKeyDown = e => {
        if ((e.charCode || e.keyCode) === 27) {
            props.onClose();
        }
    };

    useEffect(() => {
        document.body.addEventListener("keydown", closeOnEscapeKeyDown);
        return function cleanup() {
            document.body.removeEventListener("keydown", closeOnEscapeKeyDown);
        };
    }, []);

    return ReactDOM.createPortal(
        <CSSTransition
            in={props.show}
            unmountOnExit
            timeout={{ enter: 0, exit: 300 }}
        >
            <div className="modal" onClick={props.onClose}>
                <div className="modal-content rounded-lg" onClick={e => e.stopPropagation()}>
                    <div className="modal-header bg-gray-100 rounded-t-lg py-6">
                        <h4 className="modal-title text-2xl font-semibold tracking-wider">{props.title}</h4>
                    </div>
                    <div className="modal-body">{props.children}</div>
                    <div className="modal-footer bg-gray-50 rounded-b-lg">
                        <button onClick={props.onClose} className="bg-gray-400 hover:bg-gray-500 rounded-md px-4 py-2">
                            Close
                        </button>
                        <button  className="bg-indigo-500 rounded-md px-4 py-2 text-white hover:bg-indigo-600">
                            Save
                        </button>
                    </div>
                </div>
            </div>
        </CSSTransition>,
        document.getElementById("root")
    );
};

export default Modal;
