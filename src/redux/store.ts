import { applyMiddleware, combineReducers, createStore } from 'redux';
import { profileReducer } from 'redux/profile-reducer';
import { dialogsReducer } from 'redux/dialogs-reducer';
import { usersReducer } from 'redux/users-reducer';
import { authReducer } from 'redux/auth-reducer';
import thunkMiddleware from 'redux-thunk';
import { reducer as formReducer } from 'redux-form';

export type AppStateType = ReturnType<typeof rootReducer>

const rootReducer = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  usersPage: usersReducer,
  auth: authReducer,
  form: formReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

// @ts-ignore
window.store = store;