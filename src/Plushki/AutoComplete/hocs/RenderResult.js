import React from 'react';
import './style.css';

export default function RenderResult(Component){
    return class extends React.Component{
        constructor(props){
            super(props);
            this.state={
            
            
            }
        }

        getItemsContainerBox = () => {
            if (!this.inp) {
              return;
            }
            const rootElementBoundery = this.inp.getBoundingClientRect();
             
            const left = rootElementBoundery.left;
            const bottom =
              rootElementBoundery.top  ;
            const top =
              bottom > window.innerHeight
                ? rootElementBoundery.bottom 
                : rootElementBoundery.top;

            return {
              width: `${this.inp.offsetWidth}px`,
              left: `${left}px`,
              top: `${top+20}px`,
            };
          };
        
          setItemsConteinerBox = () => {
            
           let icb=this.props.itemContainerBox;
             
           icb=this.getItemsContainerBox();
           return icb;
          };
         
         renderItems=()=>{
             console.log(this.props.result);
             
            const y= this.setItemsConteinerBox();
            console.log(y);
             return(
             <div id="autocomplete_result"
              style={y} ref={itemsContainer => {
            this.itemsContainerElement = itemsContainer;
          }}>
              {
                  this.props.result.map(lang=>{
                   return (<p   
              children={lang}/> )
                  })
              } 
              </div>)
         }

          handleRef=(node)=>{
              this.inp=node;
          }

        render(){
            return(
                <Component {...this.props} handleRef={this.handleRef} onKeyUp={this.renderItems}/>
            )
        }
    }
}