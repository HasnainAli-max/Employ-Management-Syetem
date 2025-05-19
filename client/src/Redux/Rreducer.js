const InitialState = {
    carts: []  
}

export const cartReducer = (state = InitialState, action) =>{
    console.log("data in reducer " , action)
    switch(action.type){
        case 'ADD_TO_CART':
            let itemIndex = state.carts.findIndex(item => item._id === action.payload._id)
            if(itemIndex>=0){
                state.carts[itemIndex].quantity += 1
                return{
                ...state,
                carts:[...state.carts]
                }}
            else{
                let temp = {...action.payload, quantity : 1}
                return {
                    ...state,
                    carts: [...state.carts,temp]
                }}


                case 'Delete_One_Item':
                    let existingitem = state.carts.findIndex(item => item._id === action.payload._id)
                    if(state.carts[existingitem].quantity >= 1){
                        state.carts[existingitem].quantity -= 1
                    return{
                       ...state,
                        carts:[...state.carts]
                    }
                }else if(state.carts[existingitem].quantity == 1){
                        const data = state.carts.filter(item => item._id !==action.payload._id)
                        return {
                            ...state,
                            carts: [...data]
                        }
                    }

                case 'Clear_From_Cart':
                    const data = state.carts.filter(item => item._id !==action.payload)
                        return {
                            ...state,
                            carts: data
                        }


                
            default:
                return state;
    }
}