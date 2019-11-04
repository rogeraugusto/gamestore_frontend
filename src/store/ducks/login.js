/**
 * Types
 */

export const Types = {
  LOGIN_REQUEST: 'login/LOGIN_REQUEST',
  LOGIN_SUCCESS: 'login/LOGIN_SUCCESS',
  LOGIN_FAILURE: 'login/LOGIN_FAILURE',
};

/**
 * Reducers
 */

const INITIAL_STATE = {
  loading: false,
  error: null,
};

export default function login(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.LOGIN_REQUEST:
      return { ...state, loading: true };
    case Types.LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
      };
    case Types.LOGIN_FAILURE:
      return { ...state, loading: false, error: action.payload.error };
    default:
      return state;
  }
}

/**
 * Actions
 */

export const Creators = {
  loginRequest: (email, password, history) => ({
    type: Types.LOGIN_REQUEST,
    payload: { email, password, history },
  }),

  loginSuccess: () => ({
    type: Types.LOGIN_SUCCESS,
  }),

  loginFailure: (error) => ({
    type: Types.LOGIN_FAILURE,
    payload: { error },
  }),
};
