/**
 * Types
 */

export const Types = {
  LOAD_GAME_REQUEST: 'games/LOAD_GAME_REQUEST',
  LOAD_GAME_SUCCESS: 'games/LOAD_GAME_SUCCESS',
  LOAD_GAME_FAILURE: 'games/LOAD_GAME_FAILURE',
};

/**
 * Reducers
 */

const INITIAL_STATE = {
  loading: false,
  data: [],
  error: false,
};

export default function games(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.LOAD_GAME_REQUEST:
      return { ...state, loading: true };
    case Types.LOAD_GAME_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        data: action.payload.data,
      };
    case Types.LOAD_GAME_FAILURE:
      return { ...state, loading: false, error: true };
    default:
      return state;
  }
}

/**
 * Actions
 */

export const Creators = {
  loadGamesRequest: () => ({
    type: Types.LOAD_GAME_REQUEST,
  }),

  loadGamesSuccess: (data) => ({
    type: Types.LOAD_GAME_SUCCESS,
    payload: { data },
  }),

  loadGamesFailure: () => ({
    type: Types.LOAD_GAME_FAILURE,
  }),
};
