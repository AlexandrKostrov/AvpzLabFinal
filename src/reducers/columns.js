//import stub from '../components/stubs/stub';
import localStor from '../localStor';
const resh=localStor();
 
export default function stateReducer(state = [...resh.res ], action) {
    console.log(state);
    switch (action.type) {
        case 'EDIT_COLUMN' : {
         const {targetColunm,value}=action.payload;
         console.log(targetColunm)

        const column=state.find(col=>{
            return col.id===targetColunm.id
        });
        column.value={value};
        const newState=state.filter(col=>{
          return col.id!==column.id
        });
       const newState1=[column, ...newState];
       resh.cng(newState1);
        return newState1;
    }
    default:
    return state;
}
}

export function editColumn(targetColunm, value) {
    return {
      type: 'EDIT_COLUMN',
      payload: {targetColunm, value },
    };
  }

  