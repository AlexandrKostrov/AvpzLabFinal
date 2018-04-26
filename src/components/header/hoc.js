import React from 'react';

export default function hoc(Component){
    return class extends React.Component{
        constructor(props){
            super(props);
            this.state={count:1,
             itemContainerBox: {},
             value:'',
             isActive:true,}
        }
        handleRef=(node)=>{
            this.but=node;
        }
        handleClick=()=>{
            this.setItemsConteinerBox();
           
          this.setState({count:this.state.count-1,
                         isActive:false});
        }
        handleChange=()=>{
            this.setState({value:this.inb.value})
        }
        renderItems=()=>{
              return(
            <div style={this.state.itemContainerBox}>
            <input ref={node=>{this.inb=node}} onChange={this.handleChange} type="text" /> 
            <button onClick={()=>this.props.checkUser(this.state.value) }>ok</button>
            </div>  )
          
        }
        getItemsContainerBox = () => {
            const rootElementBoundery = this.but.getBoundingClientRect();
            const left = rootElementBoundery.left;
            console.log(left);
            const top = rootElementBoundery.top;
            const width=this.but.offsetWidth;
            const height=this.but.offsetHeight;
            return {
              left: `${left }px`,
              top: `${top+height}px`,
              position: "absolute",
            };
          };
          setItemsConteinerBox = () => {
            const itemContainerBox = this.getItemsContainerBox();
            this.setState({
              itemContainerBox,
            });
          };
       
        render(){
            return(
                <Component {...this.props} 
                handleRef={this.handleRef}
                handleClick={this.handleClick}
                count={this.state.count} 
                renderItems={this.renderItems}
                item={this.state.value}
                isActive={this.state.isActive}/>
            )
        }
    }
}