import React, { useState } from 'react';
import './InfoCard.css';
import {UilPen} from '@iconscout/react-unicons';
import ProfileModal from '../ProfileModal.jsx/ProfileModal';



export const InfoCard = () => {

    const [modalOpened , setModalOpened] = useState(false);
  return (
    <div className="InfoCard">
        <div className="InfoHead">
            <h4>Your Info</h4>
            <div>
            <UilPen width='2rem' height='1.2rem'  onClick={()=>setModalOpened(true)}/>
            <ProfileModal modalOpened={modalOpened} setModalOpened={setModalOpened}/>

            </div>
        </div>

        <div className="Info">
            <span>
                <b>Gender </b>
            </span>
            <span>Female</span>
        </div>

        <div className="Info">
            <span>
                <b>State </b>
            </span>
            <span>Lagos</span>
        </div>

        <div className="Info">
            <span>
                <b>L.G.A </b>
            </span>
            <span>Ikeja</span>
        </div>


        <button className="button logout-button">Logout</button>
    </div>
  )
}
