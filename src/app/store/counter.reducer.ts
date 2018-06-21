
import { Action } from '@ngrx/store';

//ACTION TYPES

export const INCREMENT_REQ = 'INCREMENT_REQUEST';
export const INCREMENT_ERR = 'INCREMENT_ERROR';
export const INCREMENT_RES = 'INCREMENT_RESPONSE';

export const DECREMENT_REQ = 'DECREMENT_REQUEST';
export const DECREMENT_ERR = 'DECREMENT_ERROR';
export const DECREMENT_RES = 'DECREMENT_RESPONSE';

export const RESET_COUNTER_REQ = 'RESET_COUNTER_REQUEST';
export const RESET_COUNTER_ERR = 'RESET_COUNTER_ERROR';
export const RESET_COUNTER_RES = 'RESET_COUNTER_RESPONSE';

//INITIAL store object
export const Counter={
  status:<string>null,
  msg:<string>null,
  data: 0 
}

//counter status constants
export const LOADING = "COUNTER_LOADING";
export const LOADED = "COUNTER_LOADED";
export const ERROR = "COUNTER_ERROR";
export const INIT = null;

//COUNTER REDUCER function
export function counterReducer(state=Counter, action:Action){
  console.log("counterReducer...", action);
  switch (action.type){

    case INCREMENT_REQ:
      //call service?
      return {
        ...state,
        status: LOADING,
        msg:'Working on increment request...'
      }
    
    case INCREMENT_ERR:
      return {
        ...state,
        status: ERROR,
        msg: action['payload']
      }

    case INCREMENT_RES:
      //does not need to spread 
      //state object as we return 
      //all new props here
      return {
        status: LOADED,
        msg:"SUCCESS",
        data: action['payload']
      }
  
    case DECREMENT_REQ:
      return {
        ...state,
        status: LOADING,
        msg:'Working on decrement request...'
      }
    
    case DECREMENT_ERR:
      return {
        ...state,
        status: ERROR,
        msg: action['payload']
      }

    case DECREMENT_RES:
      //does not need to spread 
      //state object as we return 
      //all new props here
      return {
        status: LOADED,
        data: action['payload'],
        msg:'SUCCESS'
      }
  
    case RESET_COUNTER_REQ:
      return {
        ...state,
        status: LOADING,
        msg:'Working on reset request...'
      }
    
    case RESET_COUNTER_ERR:
      return {
        ...state,
        status: ERROR,
        msg: action['payload']
      }

    case RESET_COUNTER_RES:
      return {
        status: LOADED,
        data: 0,
        msg:'SUCCESS'
      }

    default:
      return state;
  }
};
