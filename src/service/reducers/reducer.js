import { ADD_TO_CART, REMOVE_FROM_CART } from '../constants'

const initialState = {
    cardData: []
}
export default function cardItems(state = initialState, action) {
    switch (action.type) {
        case ADD_TO_CART:
            // console.warn("reducer",action)
            return {
                ...state,
                cardData: [...state.cardData, action.data]
            }

        case REMOVE_FROM_CART:
            //console.log("key", action)
            const data = state.cardData.filter((e)=>e.id !== action.data)
            return {
                ...state,
                cardData:data
            }
        default:
            return state
    }

}
