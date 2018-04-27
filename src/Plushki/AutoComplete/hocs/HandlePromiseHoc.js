import React from 'react';

export default function HandlePromiseHoc(Component){
    return class extends React.Component{
        constructor(props){
            super(props);
            this.state={
                result:[],
                itemContainerBox: {},
                show:false,

            }
        }
        handleShow=()=>{
            this.setState({show:true});
        }
      
        handleChange=async (event)=>{
            this.handleShow();
            const value=event.target.value;
            console.log(typeof(this.props.getItems));
           await this.props.getItems(value).then(data=>{
                this.setState({result:data});
                 });
            
        }

        render(){
            return(
                <Component {...this.props} handleShow={this.handleShow} show={this.state.show}  itemContainerBox={this.state.itemContainerBox} onChange={this.handleChange} result={this.state.result}/>
            )
        }
    }
}