import React from 'react';
import {withProps} from 'recompose';
import users from '../stubs/users';

const withStubedUser=roleName=>
    withProps({
        user : users[roleName],
    });


export default withStubedUser;