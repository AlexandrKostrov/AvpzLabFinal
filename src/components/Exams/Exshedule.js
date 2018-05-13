import React from 'react';
import "./style.css";
import TestForm from '../form/TestForm';

const passingScore={
  PI:179,
  IST:156,
  AVIONICA:135,
  ECONOMICS:149,
  AppMath:173,
  CS:184,
};
const subjects=[{subj:"History of Ukraine",koef:0.2},{subj:"Mathematics",koef:0.5},
                {subj:"Phyisic or Foreign Language",koef:0.2},{subj:"Diploma",koef:0.1}];

class Exshedule extends React.Component{   
  constructor(props){
    super(props);
    this.state={
        divBox:{},
        show:false,
        res:0,
        arr:[],
    }
}
  getComentsContainerBox = () => {
    const rootElementBoundery = this.div.getBoundingClientRect();
    const left = rootElementBoundery.left;
    const top = rootElementBoundery.top;
    const width=this.div.offsetWidth;
    const height=this.div.offsetHeight;
    return {
      left: `${left }px`,
      top: `${top+height}px`,
      width: `${width}px`
       };
  };
  setItemsConteinerBox = () => {
    const divBox = this.getComentsContainerBox();
    this.setState({
      divBox:divBox
    });
  };
  handleDiv=(node)=>{
   this.div=node
  }
  turner=async()=>{
 await this.setState({show:true});
 await this.setItemsConteinerBox();
 await this.calcul();
 await  this.setArr();
  }
  calcul=()=>{
    const res= (+this.inp.value*0.2)+ (+this.inp1.value*0.5)+ (+this.inp2.value*0.2)+ (+this.inp3.value*0.1);
    this.setState({res:res});
  }
  setArr=()=>{
    const arr= Object.keys(passingScore).filter(key=>{
   //console.log(passingScore[key])
      return this.state.res>=passingScore[key]
     })
     this.setState({arr});
  }
  handleClick=()=>{
 
   return(
     <div style={this.state.divBox}>
     YOU CAN ENTER ON THE NEXT SPECIALITY
   {  this.state.arr.map(subj=>{
      return <p className="row">{subj}</p>
     })}
     </div>
   )
  
  }
  render(){
   const {show}=this.state;
  return (
    <main>
      <h1>Exams Shedule</h1>
      <div>
         <div className="checkbox-div">
          <p className="sspan">History of Ukraine <input className="myInp" placeholder="1-200" ref={node=>{this.inp=node}} type="text" /></p> 
         </div>
         <div className="checkbox-div">
          <p className="sspan">Mathematics <input className="myInp" placeholder="1-200" ref={node=>{this.inp1=node}} type="text" /></p> 
         </div>
         <div className="checkbox-div">
          <p className="sspan">Phyisic or Foreign Language <input className="myInp" placeholder="1-200" ref={node=>{this.inp2=node}} type="text" /></p> 
         </div>
         <div className="checkbox-div">
          <p className="sspan">Diploma <input className="myInp" placeholder="1-200" ref={node=>{this.inp3=node}} type="text" /></p> 
         </div>
      </div>
      <button className="but" onClick={this.turner}>Calculete</button>
     <div ref={this.handleDiv}>
     {show&&this.handleClick()}
     </div>
    {/* <TestForm/> */}
    </main>
  );}
}
export default Exshedule;