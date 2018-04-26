import React from 'react';
import {lifecycle} from 'recompose';

const withRequiredRole=roleName => 
lifecycle({
    componentDidMount(){
        const {history,users}=this.props;
        if(!users && users[0].role!==roleName){
            history.goBack();
        }
    }
});
export default withRequiredRole;