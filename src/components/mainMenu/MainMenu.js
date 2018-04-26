import React from 'react';
import SignupForm from '../form/SignupForm';

const MainMenu=({users})=>{
    return( users.length!=0 || (<SignupForm/>))
}
export default MainMenu;