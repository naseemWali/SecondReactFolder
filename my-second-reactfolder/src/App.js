
import React, { Component } from 'react';
import LifeCycle from './Componenets/LifeCycle';
import RenderMethod from './Componenets/RenderMethod';
import WillUnmount from './Componenets/WillUnmount';

//  class App extends Component {
//    constructor(){
//    super()
//    console.log("hii");
//    this.state={
//     count:0,
//    }
//    // we can also pass props inside costructor like 
//    // class App extends Component {
//   //  constructor(props){
//   //   super(props)
//   //   console.log("hii");
//   //   this.state={
//   //    count:props.initialCount || 0,
//   //   }
//   // }

//   //  console.log(this.stuff.count,"111");
//    }

//  componentDidMount(){
//   console.log("i am componenetdidmounting");
//  }


//  componentDidUpdate(){
//   console.log('i am componentdidupdate');
  
//  }
  
//  increment(){
//   this.setState({count:this.state.count + 1});
//   console.log('i am increment');
//  }

//   render() {
//     return (
//       <div>

        
//        <LifeCycle number={this.state.count}/> <LifeCycle/>
        
//         <button onClick={()=>{this.increment() }}>click me!</button> 
//         <div>
//           <h3>this  is render  component</h3>
//          <RenderMethod/>
//          </div>
//       </div>

//     )
//   }
// }


// COMPONENTDIDMOUNT(){};

 class App extends Component {
   constructor(){
   super()
   console.log("hii");
   this.state={
    count:0,
    show:true,
   }
   }

 componentDidMount(){
  console.log("this is componenetdidmount");
 }
 
 componentDidUpdate(prevprops,prevstate,snapShot){    // here we use three parameters in componentdidupdate  prevstate tells us about prvious state not present.
  console.log('this is componentdidupdate',prevstate);
  

 
  // this.setState({count:this.state.count+1}); this makes infinite loop by directly setting state in this component.
  // this is solution if we want to set state in this component then we have to  put it inside condition like
  // if(this.state.count<10){ // so this will print up to 10

  // }


  // if (prevstate.count===this.state.count) {
  //   alert('same data');
  // }
  //  we cant set state in componentdidupdate because it will go in infinite loop but we can do by putting condition like
  
  // we cant call api in componenet in componenetdidupdate if it is to make a conditional then we can call on conditional basis otherwise we call api in componenetdid mount
 }


 componentWillUnmount(){
  console.log('i am component will unmount');
  
 }

// shouldComponentUpdate(){
//   console.log('i am shouldcomponentupdate ');
//   if (this.state.count>5 && this.state.count<10) {
//     console.log('i am printing between 5 to 10');
//     return true;
//   }
//  // here we can update render/compnent by on condition
//   // 
// }
  
  render() {

    // console.log('render component');
    
    return (
      <div>
        
       <LifeCycle number={this.state.count}/> <LifeCycle/>
        
        {/* <button onClick={()=>{this.increment() }}>click me!</button>  */}
        <div>
          <h3>this  is render  component</h3>

          
         <RenderMethod/>
         
         <div className='container mx-4 my-4' style={{width:'30vw',height:'30vh',border:'2px solid black',marginTop:'2%',marginLeft:'30%',borderRadius:'1rem'}}>
          <h4 style={{marginLeft:'20%'}}>This is COMPONENTDIDMOUNT TOPIC</h4>
          <h4 style={{marginLeft:'20%'}}> {this.state.count} </h4>
           
         <button style={{marginLeft:'30%',marginTop:'7%'}} onClick={()=>{this.setState({count:this.state.count+1})}}>click me to see changes!</button> 
         {/* onClick={()=>{this.setState({count:this.state.count+1})}}  here above i make change count to count:1 because to show alert when prevState becomes equal to state*/}
         
        
         
         </div>
         {/* here i have make toggle case by using state in componentwillunmount  */}
         <div className='container' style={{border:'2px solid black',width:'35vw',height:'30vh',borderRadius:'1rem',margin:'2% 30%'}}>
          {
            this.state.show ? <WillUnmount/> : <h3 style={{margin:'3% 40%'}}>VICE VERSA</h3>
          }
         <h4 style={{margin:'4% 25%'}}>component will unmount</h4>
         <button style={{margin:'0% 30%'}} onClick={() => this.setState({show:!this.state.show})}>toggle child component</button>
         </div>
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




// let x = 5;
// let y = x;
// y = 10;
// console.log(x);
// 5 answer


// let x = 5;
// y = 10;
// let y = x;
// console.log(x);

// we will get an error because of y is already been declare.
