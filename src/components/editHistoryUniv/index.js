import React from 'react'
import {compose,withProps} from 'recompose';
import stub from '../stubs/stub';
import HistoryUniv from '../historyuniv';
import withStubedUsers from '../hocs/withStubedUser';
import withRequiredRole from '../hocs/withRequiredRole';



export default compose(withProps({...stub,editMode:true}),
                     //  withStubedUsers('admin'),
                     //  withRequiredRole('admin'),
                       )(HistoryUniv)