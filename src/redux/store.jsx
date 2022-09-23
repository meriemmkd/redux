import { createStore } from "redux";

const initialState = {
    counter : 0 ,
    title : "Hello" ,
};

// reducer 
const reducer = (state=initialState,action) => {
    const {type, payload} = action ;
     switch (type){
             case "Increament" :
            return{...state,counter:state.counter + 1 } ;
            case "Decreament" : 
            return {...state , counter : state.counter -1} ;
            case "Changetitle" :
            return {...state , title : payload};
    
    default: 
    return state ;
     }
};

const store = createStore(reducer ,compose(
    window.REDUX_DEVTOOLS_EXTENSION && window.__REDUX_DEVTOOLS_EXTENSION()
)) ;

  export default store;