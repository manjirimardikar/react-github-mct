const initialdata = {
    Useralldata:[]
    
 }
 
 const Reducer = (storedata=initialdata,action) => {
   if (action.type === "Takedata") {
     return {...storedata,
      Useralldata:action.payload
     }
   
 }
 
 return storedata;
 }
 
 export default Reducer