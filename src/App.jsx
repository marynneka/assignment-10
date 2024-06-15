import React from "react";
import "./styles/index.css";
import Profile from "./components/profile"
import logo1 from './assets/images/img1.jpg'
import logo2 from './assets/images/img2.jpg'
import logo3 from './assets/images/img3.webp'
import logo4 from './assets/images/img4.webp'
import logo5 from './assets/images/img5.webp'


const App =() =>{
  const Users = [
            {
              avatar: logo2,
              name: "Akah Mary",
              bio: "Industrial Chemist",
              dateOfBirth: '6th October 1999',
            },
            { 
                avatar: logo1,
                name: "Ugwu Blessing", 
            bio: "Nurse", 
            dateOfBirth: '27th March 1999',
             },
            {
                avatar: logo3,
                name: "Chukwuemeka Anthony",
                bio: "Footballer",
                dateOfBirth: '4th June 2002',
            },
            {
                avatar: logo4,
                name: "Nwabueze Princewill",
                bio: "UI/UX Designer",
                dateOfBirth: '17th December 2005',
            },
            {
                avatar: logo5,
                name: "Amarachi Twinkle",
                bio: "Accountant",
                dateOfBirth: '6th March 2001',
            },
          ];

          const names = Users.map((detail) => {
            const {avatar, name, bio, dateOfBirth} = detail
            return (
              <div key={name}>
                <Profile name={name} userDesc={bio} dateOfBirth={dateOfBirth} image={avatar}/>
              </div>
            );
          });

    return(
      <>
      <section className="container" >
{names}
      </section>
      </>
    )
  }
  
  
  export default App;