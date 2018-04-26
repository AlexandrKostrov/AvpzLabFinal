import React from 'react';

export default function ResCalcul(Component){
    return class extends React.Component{
        constructor(props){
            super(props);
            this.state={
                res:0,
                 }

        }
        calcul=()=>{
            const res=(+this.inp.value*0.2)+ (+this.inp1.value*0.5)+ (+this.inp2.value*0.2)+ (+this.inp3.value*0.1);
            this.setState({res:res});
          }
          handleInp=node=>{
              this.inp=node
          }
          handleInp1=node=>{
            this.inp1=node
        }
        handleInp2=node=>{
            this.inp2=node
        }
        handleInp3=node=>{
            this.inp3=node
        }
        render(){
            return(
                <Component calcul={this.calcul} 
                handleInp={this.handleInp}
                handleInp1={this.handleInp1}
                handleInp2={this.handleInp2}
                handleInp3={this.handleInp3}/>
            )
        }
    }
}