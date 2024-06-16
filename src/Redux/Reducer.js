const initialState={
    data:[],
}

export const baseReducer = (state = initialState, action) => {
    switch (action.type) {
            case "SET_DETAILS":  // for updating state
            return {
                ...state, // return the updated state
                data: action.payload  
            }
        default:
            return state;
    }
}