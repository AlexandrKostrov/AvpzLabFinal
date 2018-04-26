import React from 'react';
import Article from '../articles';

const HistoryUniv=({stub,editMode,editColumn})=>{
    return(
        <main>
        <h1>Историческая летопись</h1>
        {console.log(stub)}
        {stub.map(column=>(
            (column.id &&
            <Article column={column} onEdit={editColumn} editMode={editMode}/>))
        )}
        </main>
        
    )
}
HistoryUniv.defaultProps={
    editMode : false,
}
export default HistoryUniv;