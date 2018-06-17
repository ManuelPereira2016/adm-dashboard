const initialState = {
    isAppLoading: true
}

export default function app(state = initialState, payload) {
    switch(payload.type) {
        case "APP_LOADING_SUCCESS":
            return {
                ...state,
                isAppLoading: false
            };

        default:
            return state;
    }

}
