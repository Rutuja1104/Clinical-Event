import store from "../../../store/store";

export const componentKey = "LOADER";

const { actions } = store.reducerManager.add({
  key: componentKey,
  addedReducers: {
    showLoader: (state) => {
      state.isLoading = true;
    },
    hideLoader: (state) => {
      state.isLoading = false;
    },
  },
  initialReducerState: {
    isLoading: false,
  },
});

export const { showLoader, hideLoader } = actions;
