//STORE ACTION
import { Action } from '@ngrx/store';


//ACTION TYPES
export const SIGN_IN_REQ="USER.SIGNIN.REQUEST";
export const SIGN_IN_ERR="USER.SIGNIN.ERROR";
export const SIGN_IN_RES="USER.SIGNIN.RESPONSE";

export const SIGN_UP_REQ="USER.SIGNUP.REQUEST";
export const SIGN_UP_ERR="USER.SIGNUP.ERROR";
export const SIGN_UP_RES="USER.SIGNUP.RESPONSE";

export const LOG_OUT_REQ="USER.LOGOUT.REQUEST";
export const LOG_OUT_ERR="USER.LOGOUT.ERROR";
export const LOG_OUT_RES="USER.LOGOUT.RESPONSE";

//STATUS TYPES
export const LOGGEDIN='LOGGEDIN';
export const NOTLOGGEDIN='NOTLOGGEDIN';
export const LOADING='LOADING';
export const ERROR='USER_ERROR';

//default data object
const user={
  status:<string>NOTLOGGEDIN,
  msg:<string>'Press login button to activate login',
  data:{
    token:<string>null,
    name:<string>null,
    other:{}
  }
}

export function userReducer(store=user, action:Action){
  switch(action.type){

    case SIGN_IN_REQ:
      return {
        ...store,
        status: LOADING,
        msg: 'Signing in the user...'
      }

    case SIGN_IN_ERR:
      return {
        ...store,
        status: ERROR,
        msg: action['payload']
      }

    case SIGN_IN_RES:
      return{
        ...store,
        status: LOGGEDIN,
        msg: 'User logged in',
        data:{
          ...action['payload']
        }
      }

    default:
      return store;
  }

}



