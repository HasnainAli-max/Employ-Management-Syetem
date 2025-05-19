

export const addCart = (item) => {
    return{ 
        type: 'ADD_TO_CART',
        payload: item
    }
    }



    export const deleteOneItem = (item) => {
        return{ 
            type: 'Delete_One_Item',
            payload: item
        }
        }


        export const removeItem = (id) => {
            return{ 
                type: 'Clear_From_Cart',
                payload: id
            }
            }