const RUN_MODAL = 'RUN_MODAL';
const CLOSE_MODAL = 'CLOSE_MODAL';

export const runModal = (data) => {
    return {
        type: RUN_MODAL,
        data
    }
}

export const closeModal = () => {
    return {
        type: CLOSE_MODAL
    }
}
