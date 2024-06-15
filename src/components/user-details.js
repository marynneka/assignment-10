import React from "react"

const UserDetails = ({ name, userDesc, dateOfBirth, image}) => {
    return (
      <div className="card-details">
        <img className="card-img" src={image} style={{width:100}}/>
        <h3 className="card-name">{ name}</h3>
        <p className="card-bio">{userDesc} </p>
        <p className="card-date">{dateOfBirth }
        </p>
      </div>
    );
  };
  export default UserDetails;