import React from 'react';
import Avatar from '../../Assets/icons/avatar.png';
import Return from '../../Assets/img/return.png';
import Add from '../../Assets/icons/add1.png';
import Delete from '../../Assets/icons/delete.png';
import Edit from '../../Assets/icons/edit.png';
import './InformationSaved.scss';

const InformationSaved = () => (
    <div className = 'MainContainer'>
        <div className = 'ContainerContactsInformation'>
            <header>
                <div className="ContainerImageReturn">
                    <img className="ReturnImg" src={Return} alt='return'/>
                </div> 
                <h1 className="ContactsInformationTitle">EPI-CONTROL</h1>
                <div className="ContainerImageAvatar">
                    <img className="Avatar" src={Avatar} alt='avatar'/>
                </div>
            </header>
            <div className="ContacsInformationInfoContainer">
                <h3 className="ContactsInformationText">INFORMACIÓN PERSONAL</h3>
                    <img className="EditImg" src={Edit} alt='edit'/>
                <div className="EditButton">
                </div>
                <form className="FormContactsInformation">
                    <div className="InfoContainer">
                        <label className="text">Fecha de nacimiento</label>
                            <input className="ContactInfoInput" placeholder="19/05/1987"></input>
                    </div>
                    <div className="InfoContainer">
                        <label className="text">Edad</label>
                            <input className="ContactInfoInput" placeholder="32"></input>
                    </div>
                    <div className="InfoContainer">
                        <label className="text">Dirección</label>
                            <input className="ContactInfoInput" placeholder="Av. Hidalgo No.16-B"></input>
                    </div>
                    <div className="InfoContainer">
                        <label className="text">Teléfono</label>
                            <input className="ContactInfoInput" placeholder="5555555555"></input>
                    </div>
                    <h3 className="ContactsInformationText">Contactos de emergencia</h3>
                    <div className="EmergencyContacts">
                        <label className="text"></label>
                        <input className="ContactInfoInput" placeholder=""></input>
                    </div>
                    <div className="EmergencyContacts">
                        <label className="text"></label>
                        <input className="ContactInfoInput" placeholder=""></input>
                    </div>
                    <div className="ContainerIcons">
                        <img className="Icons" src={Delete} alt='delete'/>
                        <img className="Icons" src={Edit} alt='edit'/>
                    </div>
                </form>
                <div className="AddButton">
                    <img className="AddIcons" src={Add} alt='add'/>
                </div>
            </div>
        </div>
    </div>
)

export default InformationSaved;