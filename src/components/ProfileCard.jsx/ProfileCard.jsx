import React from 'react'
import Cover from '../../img/obidattcover.png'
import Profile from '../../img/obidattprofile.png'
import './ProfileCard.css'

const ProfileCard = () => {
  return (
    <div className="ProfileCard">
        <div className="ProfileImages">
            <img src={Cover} alt="" />
            <img src={Profile} alt="" />
        </div>

        <div className="ProfileName">
            <span>Naseemah Hassan</span>
            <span>Student</span>
        </div>


        <div className="followStatus">
            <hr />
            <div>
                <div className="follow">
                    <span>824</span>
                    <span>Followings</span>
                </div>
                <div className='vl'></div>
                <div className="follow">
                    <span>6</span>
                    <span>Followers</span>
                </div>
            </div>
            <hr />
        </div>
    </div>
  )
}

export default ProfileCard