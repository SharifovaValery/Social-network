import { createStore, combineReducers } from 'redux';

import profileReducer from './profile-reducer';
import dialogsReduser from './dialogs-reduser';
import sidebarReduser from './sidebar-reduser';
import usersReducer from './users-reduser';

const reducers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReduser,
  sidebar: sidebarReduser,
  usersPage: usersReducer,
});

const store = createStore(reducers);

export default store;
