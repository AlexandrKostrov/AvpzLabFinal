import React from 'react';
import stub from './components/stubs/stub';

const localStor=()=>{
 function cng(st){
    localStorage.stub=JSON.stringify(st);
  }
  if(!localStorage.stub){
  localStorage.stub=JSON.stringify(stub);}
  return {res:JSON.parse(localStorage.stub),
  cng: cng,
  }
}

export default localStor;