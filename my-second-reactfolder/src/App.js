
import React, { Component } from 'react';
import LifeCycle from './Componenets/LifeCycle';
import RenderMethod from './Componenets/RenderMethod';

 class App extends Component {
   constructor(){
   super()
   console.log("hii");
   this.state={
    count:0,
   }
   // we can also pass props inside costructor like 
   // class App extends Component {
  //  constructor(props){
  //   super(props)
  //   console.log("hii");
  //   this.state={
  //    count:props.initialCount || 0,
  //   }
  // }

  //  console.log(this.stuff.count,"111");
   }

 componentDidMount(){
  console.log("componentDidMount : mounting");
 }

  
 increment(){
  this.setState({count:this.state.count + 1});
  console.log('i am increment');
  
 }

  render() {
    return (
      <div>
        

       <LifeCycle number={this.state.count}/> <LifeCycle/>
        
        <button onClick={()=>{this.increment() }}>click me!</button> 
        <div>
          <h3>this  is render  component</h3>
         <RenderMethod/>
         </div>
      </div>

     

    )
  }
}

export default App;


// <button onClick={()=>{this.increment() }}>click me!</button> here we have use arrow function to get this or we can use bind method


// what is bind method in react js?

// javascript quiz questions

// let count = 0; const increment = () => ++count; increment(); increment(); console.log(increment());
// Initial value of count: count is initialized to 0.

// First increment() call:

// The increment function uses the prefix increment (++count), which means the value of count is incremented first and then returned.
// So, after the first call to increment(), count becomes 1, but nothing is logged yet.
// Second increment() call:

// The second call again increments count from 1 to 2. Again, nothing is logged yet.
// Third increment() call within console.log:

// When increment() is called inside console.log, it first increments count from 2 to 3 and returns 3.
// This value is printed in the console.
// Thus, the final output is 3.
