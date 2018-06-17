export const getErrorMessage = (state) => state.authentication.errorMessage;

export const getIsAuthedFlag = (state) => state.authentication.isAuthed;

export const getIsAuthenticatingFlag = (state) => state.authentication.isAuthenticating;

export const getIsAdminFlag = (state) => state.authentication.userData.id_servicio === 9;
