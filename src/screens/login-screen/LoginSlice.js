import store from "../../store/store";

export const componentKey = "AUTH_SLICE";

const { actions } = store.reducerManager.add({
  key: componentKey,
  addedReducers: {
    setLoginDetails: (state, action) => {
      state.logInDetails = action.payload;
    },
    setLoginLoadingState: (state, action) => {
      state.loginLoadingState = action.payload;
    },

    setIsLoggedIn: (state, action) => {
      state.isLoggedIn = action.payload;
    },
  },
  initialReducerState: {
    logInDetails: [],
    isLoggedIn: false,
    loginLoadingState: { state: "", message: "Loading..." },
  },
});

export const { setLoginDetails, setLoginLoadingState, setIsLoggedIn } = actions;
