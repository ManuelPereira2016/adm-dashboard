const initialState = {
    modal: {},
    isOpen: false
}

export default function modal(state = initialState, data) {
    switch(data.type) {
        case "RUN_MODAL":
            return {
                ...state,
                modal: data.data,
                isOpen: true
            };

        case "CLOSE_MODAL":
            return {
                ...state,
                modal: {},
                isOpen: false
            };

        default:
            return state;
    }

}
