import React from 'react';
import SignupForm from '../form/SignupForm';
import AutoComplete from '../../Plushki/AutoComplete/AutoComplete';

const MainMenu=({users})=>{
    return( users.length!=0 || (<div><SignupForm/><AutoComplete/></div> ))
}
export default MainMenu;