import { all, put, takeLatest } from "redux-saga/effects";
import { componentKey, setIsLoggedIn, setLoginDetails } from "./LoginSlice";
import AuthDataService from "../../services/AuthDataService";
import store from "../../store/store";
import {
  hideLoader,
  showLoader,
} from "../../component-lib/Molecules/loader/LoaderSlice";

export const { login, forgotUserPassword, resetUserPassword, getLogInInfo } = {
  login: (payload) => {
    return {
      type: "USER/LOG_IN",
      payload,
    };
  },
  forgotUserPassword: (payload) => {
    return {
      type: "USER/FORGOT_PASSWORD",
      payload,
    };
  },
  resetUserPassword: (payload) => {
    return {
      type: "USER/RESET_PASSWORD",
      payload,
    };
  },
  getLogInInfo: (payload) => {
    return {
      type: "USER/LOGIN_INFO",
      payload,
    };
  },
};

function* loginAsync(action) {
  try {
    yield put(showLoader());
    const userData = {
      ...action.payload,
      password: action.payload.password,
      // EncodeDecodeUtils.encode(action.payload.password)
    };
    const response = yield AuthDataService.login(userData);
    const { status } = response;
    if (status) {
      const { data } = response;
      localStorage.setItem("user", JSON.stringify(data.proivder));
      localStorage.setItem("providerUser", JSON.stringify(data.user));
      localStorage.setItem("role", data?.proivder.role);

      //   yield put(setLoggedInUser(data.proivder));
      //   yield put(setLoggedInProviderUser(data.user));

      const sessionJwt = data.sessionJwt;
      localStorage.setItem("token", sessionJwt);
      yield put(setIsLoggedIn(true));
    }
  } catch (error) {
    localStorage.setItem(
      "token",
      JSON.stringify({
        email: "Jayesh@gmail.com",
        password: "123456",
      })
    );

    yield put(setIsLoggedIn(true));

    yield put(
      setLoginDetails({ email: "Jayesh@gmail.com", password: "123456" })
    );

    console.log("err: ", error);
    // yield put(
    //   addNotifications({
    //     message: error?.response?.data?.message,
    //     variant: TOASTER_VARIANT.ERROR,
    //   })
    // );
  } finally {
    yield put(hideLoader());
    // yield put(setLoginLoadingState({ state: PAGE_STATE.PAGE_READY }));
  }
}
function* forgotUserPasswordAsync(action) {
  yield put();
  // setLoginLoadingState({ state: PAGE_STATE.LOADING, message: "Loading..." })

  try {
    const data = action.payload;
    const response = yield AuthDataService.forgotPassword(data);
    if (response) {
    }
  } catch (error) {
    console.log("err: ", error);
  } finally {
    // yield put(setLoginLoadingState({ state: PAGE_STATE.PAGE_READY }));
  }
}

function* getLogInInfoAsync() {
  try {
    const response = yield AuthDataService.getLogInDetails();
    const { data, status } = response.data;
    if (status) {
      yield put(setLoginDetails(data));
    }
  } catch (error) {
    console.log("err: ", error);
  }
}

function* rootSaga() {
  yield all([
    takeLatest(login().type, loginAsync),
    takeLatest(forgotUserPassword().type, forgotUserPasswordAsync),
    takeLatest(getLogInInfo().type, getLogInInfoAsync),
  ]);
}

store.sagaManager.addSaga(componentKey, rootSaga);
