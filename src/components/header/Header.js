import React from 'react';
import AppBar from 'material-ui/AppBar';
import Avatar from 'material-ui/Avatar';
import Button from 'material-ui/Button';
import Helper from './Helper';
import hoc from './hoc';
import './style.css';


const Header = ({count,users,checkUser,isActive,handleClick,handleRef,renderItems,renderButton,item}) =>{ 
  const user=[...users];
  console.log(user)
return(
 <AppBar title="HNURE" className="appBar">
    <img className="img" src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Logo_NURE_3_Uk_27mm.jpg/220px-Logo_NURE_3_Uk_27mm.jpg" alt="Hnure"/>
    <Helper/>
    {
     user.length!=0 ?(<Avatar 
        alt={user[0].name}
        src={user[0].avatar}
      />) : (<div ><button ref={handleRef} className={isActive?"btn":"btn-disable"} onClick={handleClick} 
             color="white">Login</button>
      </div>
      )
      }
      {!count&&renderItems()}
      {console.log(item)}
  </AppBar>
);}
Header.defaultProps={
  user : null,
}

export default hoc(Header);