import { login } from "../../../api/auth";
import { saveLoginToken, getLoginToken } from "../../../utils/utils";

export const AUTHENTICATING = "AUTHENTICATING";
export const AUTH_FAILED = "AUTH_FAILED";
export const IS_AUTHED = "IS_AUTHED";
export const UPDATE_USER_DATA = "UPDATE_USER_DATA";

const authenticating = () => {
  return {
    type: AUTHENTICATING
  };
};

const authFailed = message => {
  return {
    type: AUTH_FAILED,
    message
  };
};

export const isAuthed = data => {
  return {
    type: IS_AUTHED,
    data
  };
};

const updateUserData = data => {
  return {
    type: UPDATE_USER_DATA,
    data
  };
};

export const handleLogin = (email, password) => {
  return async function(dispatch) {
    dispatch(authenticating());

    try {
      const { error, data, token, campos } = await login(email, password);

      if (error === 1) {
        let error = new Error(data);

        throw error;
      } else {
        saveLoginToken(token);

        dispatch(isAuthed(campos));
      }
    } catch (err) {
      dispatch(authFailed(err.message));
    }
  };
};
