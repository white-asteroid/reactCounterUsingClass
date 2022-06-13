import {useState} from "react";

import React from 'react';
import ReactDOM from 'react-dom/client';

export default class Counter extends React.Component{
    
  state={
      counter:0
  };
  setCounter(){
      this.setState({counter:this.state.counter +1});
  }
    render(){
    return(
        <>
            <button onClick={(()=>this.setCounter())}>click me </button>
            <p>{this.state.counter}</p>
        </>
    );
    }

}