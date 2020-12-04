const reducer = (state, action) => {
    switch (action.type) {
        case "CHANGE_PAG":
            state.page = action.payload;
            return {
                ...state
            }
        default:
            return state
    }
}

export default reducer;