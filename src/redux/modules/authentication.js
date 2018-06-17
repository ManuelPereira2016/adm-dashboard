import { AUTHENTICATING, IS_AUTHED, AUTH_FAILED, UPDATE_USER_DATA } from './actionsCreators/authentication';

const initialState = {
  isAuthenticating: false,
  isAuthed: false,
  errorMessage: '',
  userData: {}
}

export default function authentication(state = initialState, payload) {
  switch (payload.type) {
    case AUTHENTICATING:
      return {
        ...state,
        errorMessage: '',
        isAuthenticating: true
      };
    case AUTH_FAILED:
      return {
        ...state,
        errorMessage: payload.message,
        isAuthenticating: false,
        isAuthed: false
      };
    case IS_AUTHED:
      return {
        ...state,
        isAuthed: true,
        isAuthenticating: false,
        userData: {
            ...state.userData,
            ...payload.data
        }
      };

    case UPDATE_USER_DATA:
      return {
        ...state,
        userData: {
            ...state.userData,
            ...payload.data
        }
      };
    default:
      return state;
  }

}
