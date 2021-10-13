// Reducers are functions that take the current state and an action as arguments, and return a new state result. In other words, (state, action) => newState.

const cartItems = (state :any = [], action:any)=>{
    switch(action.type){
        case 'ADD_TO_CART':
            return [...state, action.payload]
        case 'REMOVE_FROM_CART':
            return state.filter((cartItem:any) => cartItem['id'] !== action.payload['id'])

    }
    return state
}


export default cartItems; 