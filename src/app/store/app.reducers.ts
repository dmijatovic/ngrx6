
import { ActionReducerMap } from '@ngrx/store';

//REDUCERS
import { counterReducer } from './counter.reducer';
import { userReducer } from './user.reducer';

//EXPORT GLOBAL REDUCER OBJECT 
export const appReducers:ActionReducerMap<any>={
  counter: counterReducer,
  user: userReducer
}