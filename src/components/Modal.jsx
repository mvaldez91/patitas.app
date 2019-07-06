import React from 'react';
import classNames from 'classnames';

const Modal = props=> {

    const modalClass = classNames('Modal-wrapper', {
        showModal: props.show,
    })
    return(
        <div className="Modal">
            {props.show &&
                <div className="Modal-overlay" onClick={props.close}></div>
            }
            <div className={modalClass}>
                {props.children}
            </div>
        </div>
    )
};

export default Modal;