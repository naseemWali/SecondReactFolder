import React, { Component } from 'react';


export default class LifeCycle extends Component {

  componentDidUpdate(prevprops,prevstate){
    // compare prev props with current props
   if (prevprops!==this.props.number) {
    document.write('the prop number has changed');
    console.log('the prop changed');
    
   }
  // compare previuos state with the current state
  if (prevprops!==this.state.count) {
    document.write('the prop number has changed');
    console.log('the prop changed');
    
   }
    
    
  }


    
  render() {
    return (
      <div>
         <h2 id='para'>{this.props.number}</h2>
      </div>
     
    )
  }
}

