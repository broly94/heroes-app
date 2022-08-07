import { types } from '../types/types'

export const authReducer = (state = {}, action) => {

    switch (action.type) {
        case types.Login :
            return {
                ...state,
                logged: true,
                user: action.payload
            }
        
        case types.Logout :
            return {
                ...state,
                logged: false,
            }
            
        default : 
            return state;
    }

}