   import React from 'react'

   class WillUnmount extends React.Component {
  
   componentWillUnmount(){
   console.log('this is componentwillunmount');
    }
    

   render() {
   return (
   <div>
   <h3 style={{fontFamily:'fantasy',margin:'3% 35%'}}>THIS IS COMPONENT WILL UNMOUNT LIFE CYCLE</h3>
   </div>
   )
   }
   }


   export default WillUnmount
