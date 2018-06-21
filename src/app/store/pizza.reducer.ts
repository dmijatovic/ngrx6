
import { Action } from '@ngrx/store';


//ACTION TYPES 
export const LOAD_PIZZAS_REQ = 'PRODUCTS.LOAD_PIZZAS_REQUEST';
export const LOAD_PIZZAS_ERR = 'PRODUCTS.LOAD_PIZZAS_ERROR';
export const LOAD_PIZZAS_RES = 'PRODUCTS.LOAD_PIZZAS_RESPONSE';


//pizza initial state object
export const PIZZA_LOADING = "PRODUCTS.PIZZA_LOADING";
export const PIZZA_LOADED = "PRODUCTS.PIZZA_LOADED";
export const PIZZA_ERROR = "PRODUCTS.PIZZA_ERROR";
export const PIZZA_INIT = null;


export const pizzas = {
  status:<string> PIZZA_INIT,
  msg:<string> null,
  data:[]
}

export function loadPizzas (store=pizzas, action:Action){
  switch(action.type){
    //pizza request issued
    case LOAD_PIZZAS_REQ:
      return {
        ...store,
        status: PIZZA_LOADING
      }
    //pizza request returned error
    case LOAD_PIZZAS_ERR:
      return {
        ...store,
        status: PIZZA_ERROR,
        error: action['payload']
      }
    //pizza request returned response
    case LOAD_PIZZAS_RES:
      return {
        ...store,
        status: PIZZA_LOADED,
        data: action['payload']
      }
    //always return (new) store
    default:
      return store;
  }
} 