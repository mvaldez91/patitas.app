import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';


const Nav = props=> (
    <div className="Nav">
        <div className="Nav-container">
            <ul>
                <li>
                    <Link to="/">Inicio</Link>
                </li>
                <li>
                    <a onClick={props.showModal}>
                        Dar en adopción
                    </a>
                </li>

                {props.login ?
                    <li>
                        <Link to="/panel">Mi cuenta</Link>
                    </li>
                    :
                    <li>
                        <Link to="/login">Iniciar sesión</Link>
                    </li>
                }


            </ul>
        </div>
    </div>
);

const mapStateToProps = state=>{
    return {
        login: state.login
    }
};

export default connect(mapStateToProps)(Nav);