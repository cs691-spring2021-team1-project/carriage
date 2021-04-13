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