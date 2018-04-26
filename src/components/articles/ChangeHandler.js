import React from 'react';

const ChangeHandler=Component=>{
    
    return class extends React.Component{
        constructor(props){
            super(props);
            this.state={
                value:this.props.column.value,
            }
        }
        handleref=(node)=>{
            this.textarea=node;
        }
        editColunmVal=()=>{
            this.props.onEdit(this.props.column,this.state.value)
        }
        handleChange=(event)=>{
           this.setState({
               value:event.target.value,
           })
        }
        render(){
            return(
                <Component {...this.props} value={this.state.value}
                editColunmVal={this.editColunmVal}
                 handleref={this.handleref} onChange={this.handleChange}/>
            )
        }
    }
}
export default ChangeHandler;