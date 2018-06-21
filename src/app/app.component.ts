import { Component } from '@angular/core';

import { Store, select } from '@ngrx/store';
import * as counterReducer from './store/counter.reducer';
import * as loginReducer from './store/user.reducer';
//import { CounterService } from './store/counter.service';
 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'NGNX store and effects';
  loading = counterReducer.LOADING;
  loggedin = loginReducer.LOGGEDIN;
  counter={
    data:0,
    status:null,
    error: null 
  };
  user:any={};
  constructor(
    private store: Store<any>
  ){}
  ngOnInit(){
    console.log("App component onInit");
    this.listenForCounterChange();
    this.listenForUserChange();
  }
  /**
   * We subscribe to store and listen for counter changes
   */
  listenForCounterChange(){
    this.store.pipe(select('counter'))
    .subscribe(action=>{
      //debugger;
      this.counter = action;
      console.log("store...counter", this.counter);
    });
  }
  listenForUserChange(){
    this.store.pipe(select('user'))
    .subscribe(action=>{
      //debugger;
      this.user = action;
      console.log("store...user", this.user);
    });
  }
  increment(){
    console.log("increment");
    this.store.dispatch({
      type: counterReducer.INCREMENT_REQ,
      payload: 1
    })
  }
  decrement(){
    console.log("decrement");
    this.store.dispatch({
      type: counterReducer.DECREMENT_REQ,
      payload: -1
    })
  }
  reset(){
    console.log("reset");
    this.store.dispatch({
      type: counterReducer.RESET_COUNTER_REQ,
      payload: "just testing pauload with RESET"
    })
  }
  login(){
    console.log("login user...");
  }
  logout(){
    console.log("logout user...");
  }
}
