import React, {useState} from 'react';
import {storage, database} from "../utils/firebase";
import {connect} from 'react-redux';

const Form = props => {
    const [petPhoto, setPetPhoto] = useState('');
    const [sendForm, setSendForm] = useState(false);

    const handleSubmit = event =>{
        event.preventDefault();
        const form = new FormData(event.target);
        const newDate = new Date().toISOString();
        const data ={
            adopt: form.get('adopt'),
            date: newDate,
            description: form.get('description'),
            gender: form.get('gender'),
            name: form.get('name'),
            photo: petPhoto,
            profilePic: props.user.photoURL,
            type: form.get('type'),
            userContact: props.user.email,
            userName: props.user.displayName
        };
        database.ref('/pets').push(data)
            .then((response)=>{
                setSendForm(true)
            })
            .catch(err=> setSendForm(false))
    }

    const onChange = event =>{
        const file = event.target.files[0];
        const storageRef = storage.ref();
        const name = (new Date()) + '_' + file.name;
        const uploadFile = storageRef.child(name).put(file);
        console.log('file change');
        uploadFile
            .then((snapshot)=>{
                snapshot.ref.getDownloadURL()
                .then(url =>{
                    setPetPhoto(url);
                });
            });
    };



    return(
    <div className="Form" >
        <div className="Form-head">
            <h2>Dar en adopción</h2>
        </div>
        { sendForm &&
        <div className="Form-send">
            <span>!Guardado con éxito!</span>
        </div>
        }
        {!sendForm &&
        <div className="Form-item">
             <form onSubmit={handleSubmit}>
                <input name="name" type="text" placeholder="Nombre de tu mascota"/>
                <input name="description" type="text" placeholder="Describe tu mascota"/>
                <select name="type">
                    <option selected disabled>Seleccionar</option>
                    <option value="cat">Gato</option>
                    <option value="dog">Perro</option>
                </select>
                <select name="gender">
                    <option selected disabled>Seleccionar</option>
                    <option value="female">Femenino</option>
                    <option value="male">Masculino</option>
                </select>
                <select name="adopt">
                    <option selected disabled>Seleccionar</option>
                    <option value="true">Dar en adopcion</option>
                    <option value="false">Cuidar</option>
                </select>
                <input type="file" onChange={onChange} name="photo" placeholder="" />
                <input type="submit" value="Enviar"/>
            </form>
        </div>
        }
    </div>
)};

const mapStateToProps = state => {
    return{
      user: state.user,
    };
};

export default connect(mapStateToProps)(Form) ;