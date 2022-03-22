

const INIT_STATE = {
  userInfo: [],
  isAuth: false,
};

const authReducer = (state = INIT_STATE, action) => {
  console.log('actions ', action)
  
  return {
    ...state,
    userInfo: action?.LoginData,
    isAuth: false,
  };
};

export default authReducer;
