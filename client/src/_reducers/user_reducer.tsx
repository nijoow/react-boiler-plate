import {
  LOGIN_USER,
  REGISTER_USER,
  AUTH_USER,
  IS_LOGIN_USER,
} from "../_action/types";
interface UserAction {
  type: String;
  payload: any;
}

export default function user_reducer(
  state = { isLogin: false },
  action: UserAction
) {
  switch (action.type) {
    case LOGIN_USER:
      return {
        ...state,
        loginSuccess: action.payload,
      };
    case REGISTER_USER:
      return { ...state, register: action.payload };
    case AUTH_USER:
      return { ...state, userData: action.payload };
    case IS_LOGIN_USER:
      return { ...state, isLogin: action.payload };
    default:
      return state;
  }
}
