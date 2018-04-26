import React from 'react';

const passingScore={
    PI:179,
    IST:156,
    AVIONICA:135,
    ECONOMICS:149,
    AppMath:173,
    CS:184,
  };

export default function SetArr(Component){
    return class extends React.Component{
        constructor(props){
            super(props);
            this.state={
                arr:[],
            }
        }
        setArr=()=>{
            const arr= Object.keys(passingScore).filter(key=>{
           //console.log(passingScore[key])
              return this.state.res>=passingScore[key]
             })
             this.setState({arr});
          }
          render(){
              return(
                  <Component {...this.props} arr={this.state.arr} setArr={this.setArr}/>
              )
          }

    }
}