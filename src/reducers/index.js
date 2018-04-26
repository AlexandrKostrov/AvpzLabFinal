import { combineReducers } from 'redux';
import stub from './columns';
import users from './users';
import user from './user';
import { reducer as formReducer } from 'redux-form';

export default combineReducers({
    stub,
    users,user,form: formReducer 
});