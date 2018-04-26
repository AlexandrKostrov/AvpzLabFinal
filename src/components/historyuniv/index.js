import React from 'react';
import {compose,withProps,withHandlers} from 'recompose';
import { connect } from 'react-redux';
import {editColumn} from '../../reducers/columns';
//import stub from '../stubs/stub';
import HistoryUniv from './HistoryUniv';

export default  compose(
    connect(
        ({ stub }) => ({
            stub,
        }),
        {
         
            editColumn,
        }
      ),
)
(HistoryUniv);