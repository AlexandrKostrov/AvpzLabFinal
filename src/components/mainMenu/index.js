import React from 'react';
import {compose,withProps,withHandlers} from 'recompose';
import { connect } from 'react-redux';
import {editColumn} from '../../reducers/columns';
//import stub from '../stubs/stub';
import MainMenu from './MainMenu';

export default  compose(
    connect(
        ({ users }) => ({
            users,
        }),
        {
         
            editColumn,
        }
      ),
)
(MainMenu);