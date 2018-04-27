import React from 'react';
import PromiseHoc from './hocs/PromiseHoc';
import HandlePromiseHoc from './hocs/HandlePromiseHoc';
import RenderResult from './hocs/RenderResult';

class AutoComplete extends React.Component{
    constructor(props){
        super(props);
    }
   

    render(){
        return(
            <div>
            <input ref={this.props.handleRef} type="text" onChange={this.props.onChange} />
            {this.props.show&&this.props.onKeyUp()}
            </div>
        )
    }
}

export default PromiseHoc(HandlePromiseHoc(RenderResult(AutoComplete)));