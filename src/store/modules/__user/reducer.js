import produce from 'immer';

const INITIAL_STATE_USER = {
  user: null,
  token_device: null,
};
export default function user(state = INITIAL_STATE_USER, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case '@auth/SIGN_IN_SUCCESS':
        draft.user = action.payload.user;
        break;
      case '@auth/SIGN_OUT_SUCCESS': {
        draft.user = null;
        draft.token_device = null;
        break;
      }
      case '@user/UPDATE_PROFILE':
        draft.user = action.payload.user;
        break;
      case '@user/TOKEN_DEVICE':
        draft.token_device = action.payload.token_device;
        break;
      default:
        return state;
    }
  });
}
