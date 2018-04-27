import React from 'react';
import languages from '../bd';

export default function PromiseHoc(Component){
    return class extends React.Component{
        constructor(props){
            super(props);
            
        }
     
       

       
        getItems=(text)=>{
            return new Promise(function(ok,fail){
                var val =new RegExp(text, "i");
                ok(languages.filter(lang=>{return val.test(lang);})) 
            })
        }

        render(){
            return(
                <Component {...this.props} getItems={this.getItems}/>
            )
        }
    }
}