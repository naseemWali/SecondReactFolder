// using state hook in class compoenet

import React, { Component } from 'react';


 class RenderMethod extends Component {
  constructor(){
    super()
    this.state={
        name:'naseemwali'
    }
  }
  
  render() {
    console.log('render method');
    
    return (
      <div>
        <h3>this is {this.state.name}</h3>
        <button onClick={()=>{this.setState({name:'jiya@123'})}}>Click me !</button>
      </div>
    )
  }
}
export default RenderMethod