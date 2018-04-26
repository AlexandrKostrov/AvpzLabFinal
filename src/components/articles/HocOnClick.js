import React from 'react';

export default function HocOnClick(Component){
    return class extends React.Component{
        constructor(props){
            super(props);
            this.state={
                comentsContainerBox:{},
                rendering:false,
                comments:[],
            }
        }

        onKeyupHandler=()=>{
            this.setItemsConteinerBox();
            console.log(this.inp);
            //const text=this.input.value;
            console.log(this.state.comentsContainerBox);
            const comments=[...this.state.comments,this.inp.value]
            this.setState({rendering:true,comments:comments});
            console.log(this.state.comments)
              
         }
         renderComents=()=>{
            return(
                this.state.comments.map(comm=>{
                   return <p style={this.state.comentsContainerBox}>{comm}</p>
                })
               
            )
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
          handleInpRef=(node)=>{
              this.inp=node;
          }
          setItemsConteinerBox = () => {
            const comentsContainerBox = this.getComentsContainerBox();
            this.setState({
                comentsContainerBox,
            });
          };
         handleRef=(node)=>{
            this.div=node;
        }
       render(){
           return (
               <Component {...this.props} 
               handleRef={this.handleRef}
               handleInpRef={this.handleInpRef} 
               onEnter={this.onKeyupHandler}
               rendering={this.state.rendering}
               renderComents={this.renderComents}/>
           )
       }
    }
}