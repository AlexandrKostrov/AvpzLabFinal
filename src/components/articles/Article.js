import React from 'react';
import './style.css';
import { branch,renderComponent } from 'recompose';
import TextField from 'material-ui/TextField/'
import ChangeHandler from './ChangeHandler';
import HocOnClick from './HocOnClick';
import withRequiredRole from '../hocs/withRequiredRole';

const SimpleArticle=({column, users,checkUser,handleRef,onEnter,handleInpRef,rendering,renderComents})=>{
  const user=[...users];
  return (
      <div className='post'>
      <section className="article">
        {typeof(column.value)==='string'?(<p> {column.value.toString()}</p>):(<p> {column.value.value.toString()}</p>)}
      </section>
      <div ref={handleRef}> {rendering&&renderComents() }</div>
     
      { 
        user.length!=0 && user[0].role==="subscriber"&&(<section className="comments">
      <textarea
          ref={handleInpRef}
          type="text"
          
        />
        <button onClick={onEnter}></button>
      </section>)}
      </div>
  )
}
const EditArticle=({column, user,handleref,onChange,value,editColunmVal})=>{
    return (
        <div className='post'>
        <section className="article">
          {typeof(value)==='string'?(<textarea ref={handleref} value ={value} onChange={onChange}/> ):
          (<textarea ref={handleref} value ={value.value} onChange={onChange}/> )}
           
           <button onClick={editColunmVal}>Save</button>
        </section>
       
        </div>
    )
  }
const Article=branch(({users,editMode})=>users.length!=0 && 
editMode&&users[0].role==="admin", renderComponent(ChangeHandler(EditArticle)))(HocOnClick(SimpleArticle))

Article.defaultProps={
    user : null,
}

export default withRequiredRole("admin")(Article);