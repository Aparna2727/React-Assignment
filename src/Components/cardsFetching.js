import React from 'react'
import './cardsFetching.css'

export function Cards({ ArrayDetails }) {
    return (
      <div className='card-content'>
        <h2>{ArrayDetails.id}</h2>
        <h3>{ArrayDetails.email}</h3>
        <h3>
          {ArrayDetails.first_name}
          {ArrayDetails.last_name}
        </h3>
        <img src={ArrayDetails.avatar} alt="avatar" />
      </div>
    );
  }