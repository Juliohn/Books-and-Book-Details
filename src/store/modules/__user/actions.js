export function updateProfile(user) {
  return {
    type: '@user/UPDATE_PROFILE',
    payload: {
      user,
    },
  };
}

export function tokenDevice(token_device) {
  return {
    type: '@user/TOKEN_DEVICE',
    payload: {
      token_device,
    },
  };
}

export function updateUserTokenDevice(token_device, user_id) {
  return {
    type: '@user/UPDATE_USER_TOKEN_DEVICE',
    payload: {
      token_device,
      user_id,
    },
  };
}
