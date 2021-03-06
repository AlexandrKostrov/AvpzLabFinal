import Article from './Article';
import React from 'react';
import {compose,withProps,withHandlers} from 'recompose';
import { connect } from 'react-redux';
import {checkUser} from '../../reducers/users';

export default compose(
    connect(
        ({ users }) => ({
          users,
        }),
        {
            checkUser
        }
      )
   )(Article);

