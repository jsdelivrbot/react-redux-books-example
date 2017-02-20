// state argument is not application state, only the state
// . this reducer is responsible for 
export default function(state = null, action){
    // ^^^ piece of ES6 syntax 
    switch(action.type){
        case 'BOOK_SELECTED': 
            return action.payload; 
    }
    
    return state; 
}