const initialState = {
    open: true
}

export function rootReducer(state = initialState, action : any) {
    switch (action.type) {
        case "switchsidebar":
            return {
                open: ! state.open
            }
        default:
            return state
    }
}
