import React from 'react'
 import './userProfierCard.css'
import profile_icon from '../Asset/samuel.jpg'


const UserProfileCard = () => {
  return (
    <div className='upc'>
      <div className="gradient"></div>
      <div className="profile-down">
        <img src={profile_icon} alt=""/>
        <div className="profile-title">Friday Samuel</div>
        <div className="profile-description">
          I am a renowed Creative and exceptional Web Developer and a Graphic Designer in the industry
        </div>
          <div className="profile-button"><a href='mailto:kingsamuel@gmail.com'>Contact Me</a></div>
      </div>
      
    </div>
  )
}

export default UserProfileCard;