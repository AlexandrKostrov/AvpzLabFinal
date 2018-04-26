import React from 'react';

export default function PosibilityCalcul(Component){
    return class extends React.Component{
        constructor(props){
            super(props);
            this.state={
                divBox:{},
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

        render(){
            return(
                <Component {...this.props} 
                setItemsConteinerBox={this.setItemsConteinerBox}
                handleDiv={this.handleDiv} 
                divBox={this.state.divBox}/>
            )
        }
    }
}