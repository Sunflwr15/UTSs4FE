const State = {
  nama: "",
  role: "",
  nis: "",
  isAuth: true,
};
export const isAuth = (state = State, action) => {
  if (action.type === "login") {
    return {
      ...state,
      nama: action?.nama,
      nis: action?.nis,
      role: action?.role,
      isAuth: action?.isAuth,
    };
  }
  return state;
};

// export { isAuth };
