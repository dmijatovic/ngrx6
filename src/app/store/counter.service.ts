/**
 * COUNTER SERVICE INTEGRATED WITH NGRX EFFECTS
 * 
 */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 

import { Actions, Effect, ofType } from '@ngrx/effects';
import { Store, select } from '@ngrx/store';
import { 
  INCREMENT_REQ, INCREMENT_RES,
  DECREMENT_REQ, DECREMENT_RES,
  RESET_COUNTER_REQ, RESET_COUNTER_RES
} from './counter.reducer';

import { map, switchMap, mergeMap, withLatestFrom } from 'rxjs/operators';
import { Observable } from 'rxjs';
 
@Injectable()
export class CounterService {
  constructor(
    private http: HttpClient,
    private store$: Store<any>,
    private actions$: Actions
  ){}
  @Effect()
  increment=this.actions$.pipe(
    ofType(INCREMENT_REQ),
    map( action =>{
      //debugger 
      console.log("effect...", INCREMENT_REQ);
      console.log("action...", action);
      return new Observable((obs)=>{
        this.store$.select('counter')
        .subscribe(counter=>{
          //increase count by 1
          setTimeout(()=>{
            obs.next({
              type:INCREMENT_RES,
              payload: counter.data + action['payload']
            });
            obs.complete();
          },1000);
        },(e)=>{
          obs.error(e);
        });
      });   
    }),
    switchMap((d)=>{
      //DISPATCH NEW ACTION
      //at the end of effect 
      //new action is dispatched
      return d;
    })
  )
  @Effect()
  decrement=this.actions$.pipe(
    ofType(DECREMENT_REQ),
    //take latest counter state from store
    withLatestFrom(this.store$.select('counter')),
    //when used with latest from it returns array
    //with 2 items where 0 - action, 1 - store data 
    map( data => {
      //debugger 
      let [action, state] = data;
      console.log("effect...", DECREMENT_REQ);
      console.log("action...", data);
      //dispatch new action
      return {
        type: DECREMENT_RES,
        payload: state['data'] + action['payload']
      };
    })
  )
  @Effect()
  reset=this.actions$.pipe(
    ofType(RESET_COUNTER_REQ),
    map(action =>{
      //debugger 
      console.log("effect...", RESET_COUNTER_REQ);
      console.log("action...", action);
      //create new observable
      //to simulate api call
      return new Observable((obs)=>{
        setTimeout(()=>{
          //debugger 
          obs.next( {
            type: RESET_COUNTER_RES,
            payload: 0
          });
          obs.complete();
        },2000);
      });      
    }),
    switchMap((d)=>{
      //debugger
      //DISPATCH NEW ACTION
      //at the end of effect 
      //new action is dispatched 
      return d;
    })
  )
  getCurrentCount(){
    return new Observable((obs)=>{
      this.store$.select('counter')
      .subscribe(counter => {
        //debugger 
        obs.next(counter.data);
        obs.complete();
      },(e)=>{
        obs.error(e);
      });
    });
  }
}
