import produce from 'immer';

const INITIAL_STATE = {
  token: null,
  isLoged: false,
  loading: false,
};
export default function auth(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case '@auth/SIGN_IN_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@auth/SIGN_IN_SUCCESS': {
        draft.token = action.payload.token;
        draft.isLoged = true;
        draft.loading = false;
        break;
      }
      case '@auth/SIGN_IN_FAILURE': {
        draft.isLoged = false;
        draft.loading = false;
        draft.token = null;
        break;
      }
      case '@auth/SIGN_OUT_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@auth/SIGN_OUT_SUCCESS': {
        draft.isLoged = false;
        draft.loading = false;
        draft.token = null;
        break;
      }
      default:
        return state;
    }
  });
}
