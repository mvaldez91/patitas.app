import React from 'react';

const PetInfo = props=>{


    return(
        <div className="PetInfo">
            <div className="PetInfo-container">
                <div className="PetInfo-content">
                    <div className="PetInfo-avatar">
                        <img src={props.pet.photo} alt={props.pet.name}/>
                    </div>
                    <div className="PetInfo-profile">
                        <h2>{props.pet.name}
                        <span>
                            {props.pet.type === 'dog' && '🐶'}
                            {props.pet.type === 'cat' && '🐱'}
                        </span></h2>
                        <p>{props.pet.description}</p>

                        <div className="PetInfo-type">
                            <button>Adoptar</button>
                        </div>
                        <div className="PetInfo-profile-adopt">
                            <div className="PetInfo-item">
                                <h3>Datos de contacto: </h3>
                                <span>Dueño:</span>
                                <h4>Marco Valdez</h4>
                                <span>Correo: </span>
                                <h4>mtulio1991@live.com</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default PetInfo;