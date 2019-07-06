import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import Nav from '../components/Nav';
import Modal from '../components/Modal';
import Login from  '../pages/Login';
import Form from '../components/Form';

import {connect} from 'react-redux';

const Header = props =>{
    const [modal, setModal] = useState(false);
    const showModal = () =>{
        setModal(!modal);

    };

    return (
        <div className="Header">
            <div className="Header-container">
                <div className="Header-content">
                    <div className="Header-logo">
                        <Link to='/'>
                            <img src="https://www.logoground.com/uploads/201787052017-12-0341715732017-dec-01.jpg" alt="Patitas" />
                        </Link>
                        <h1>Patitas</h1>
                    </div>
                    <div className="Header-nav">
                        <Nav showModal={showModal}></Nav>
                    </div>
                </div>
            </div>
            <Modal
                show={modal}
                close={showModal}>
                {props.login ?
                    <Form/>
                    :
                    <div className="Modal-login">
                        <Login></Login>
                    </div>
                }
            </Modal>
        </div>
    );
}

const mapStateToProps = state => {
    return{
        login: state.login
    };
};

export default  connect(mapStateToProps) (Header);