// Reducers are functions that take the current state and an action as arguments, 
// and return a new state result. In other words, (state, action) => newState.

// main reducer
const cartItems = (state :any = [], action:any)=>{
    switch(action.type){
        case 'ADD_TO_CART':
            return [...state, action.payload]
        case 'REMOVE_FROM_CART':
            // removes all quantities
            // return state.filter((cartItem:any) => cartItem['id'] !== action.payload['id'])
            // remove one quantity match
            return filterItem(state, action)
        case 'CLEAR_CART':
            return state = []

    }
    return state
}


// helper methods
const  filterItem =(state:any, action:any) =>{
    const index = state.findIndex((cartItem:any, i: number) =>  (cartItem['id'] === action.payload['id']));     
    const result=  state.filter((cartItem:any, i:number) =>  i !== index)
    return result;
}

export default cartItems; 