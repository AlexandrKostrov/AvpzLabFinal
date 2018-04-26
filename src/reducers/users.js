import users from '../components/stubs/users';
 
const user={};
export default function stateReducer(state = [...user], action) {
     
    switch (action.type) {
        case 'CHECK_USER' : {
      const {val}=action.payload;
      
      const us= Object.keys(users).find((key)=>{
         if(key===val){
             console.log("Hura")
             return users[key];
         }
      });
      console.log(users[us]);
      if(us!==undefined && us!==null){
       const newState=[users[us]];
       console.log(newState);
       return newState;}
    }
    default:
    return state;
}
}
export function checkUser(val){
    console.log('aaaaaaaaaa')
    return{
        type: 'CHECK_USER',
        payload : {val},
    }
}