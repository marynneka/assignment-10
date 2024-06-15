import React from "react";
import UserDetails from "./user-details"
// import "../styles/prostyles.css";

const Profile = ({ name, userDesc, dateOfBirth, image}) => {

  return (
    <div className="card">
      <UserDetails name={name} userDesc={userDesc} dateOfBirth={dateOfBirth} image={image}/>
    </div>
  );
};

export default Profile;
























// import React from 'react';
// import logo1 from '../assets/images/img1.jpg'
// import logo2 from '../assets/images/img2.jpg'
// import logo3 from '../assets/images/img3.webp'
// import logo4 from '../assets/images/img4.webp'
// import logo5 from '../assets/images/img5.webp'
// import "../styles/index.css"

// const Profile = () => {

//     const Users = [
//         {
//           avatar: logo2,
//           name: "Akah Mary",
//           bio: "Industrial Chemist",
//           dateOfBirth: '6th October 1999',
//         },
//         { 
//             avatar: logo1,
//             name: "Ugwu Blessing", 
//         bio: "Nurse", 
//         dateOfBirth: '27th March 1999',
//          },
//         {
//             avatar: logo3,
//             name: "Chukwuemeka Anthony",
//             bio: "Footballer",
//             dateOfBirth: '4th June 2002',
//         },
//         {
//             avatar: logo4,
//             name: "Nwabueze Princewill",
//             bio: "UI/UX Designer",
//             dateOfBirth: '17thth December 2005',
//         },
//         {
//             avatar: logo5,
//             name: "Amarachi Twinkle",
//             bio: "Accountant",
//             dateOfBirth: '6th March 2001',
//         },
//       ];
//       const UsersList = Users.map(user => {
//         return <div>
//           <img src={user.avatar} alt="avatar" style={{ width: 100}}/>
//           <h3>{user.name}</h3>
//           <p>{user.bio}</p>
//           <p>{user.dateOfBirth}</p>
//         </div>
//       })
//       return (
//         <section>{UsersList}</section>
//       );
    
// }

// export default Profile