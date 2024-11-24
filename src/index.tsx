import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import store from "./store/store";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Route,
  RouterProvider,
} from "react-router-dom";
import LoginScreen from "./screens/login-screen/LoginScreen";
import PrivateRoute from "./components/PrivateRoute";
import DashboardScreen from "./screens/dashboard-screen/DashboardScreen";
import ForgetPasswordScreen from "./screens/forget-password-screen/ForgetPasswordScreen";
import SetNewPasswordScreen from "./screens/set-new-password/setNewPasswordScreen";
import ReportsScreen from "./screens/reports-screen/ReportsScreen";
import PatientScreen from "./screens/patient-screen/PatientScreen";
import SettingsScreen from "./screens/settings-screen/SettingsScreen";
import PatientDetailsScreen from "./screens/patient-screen/patient-details/PatientDetailsScreen";
import CreateNewAccount from "./screens/create-account-screen/CreateNewAccount";
import SelfCareVisitFlow from "./screens/visit-flow/SelfCareVisitFlow";
import NurseCareVisitFlow from "./screens/visit-flow/NurseCareVisitFlow";
import PhysicianCareVisitFlow from "./screens/visit-flow/PhysicianCareVisitFlow";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      {/* OUR PUBLIC ROUTES COME HERE  */}
      <Route index element={<Navigate to="/login" />} />
      <Route index={true} path="/login" element={<LoginScreen />} />
      <Route
        index={true}
        path="/create-new-account"
        element={<CreateNewAccount />}
      />
      <Route
        index={true}
        path="/forget-password"
        element={<ForgetPasswordScreen />}
      />
      <Route
        index={true}
        path="/set-new-password"
        element={<SetNewPasswordScreen />}
      />
      {/* OUR PRIVATE ROUTES HERE */}
      <Route path="" element={<PrivateRoute />}>
        <Route path="/dashboard" element={<DashboardScreen />} />
        <Route path="/reports" element={<ReportsScreen />} />
        <Route path="/patient" element={<PatientScreen />} />
        <Route path="/patient/:patientId" element={<PatientDetailsScreen />} />
        <Route
          path="/patient/:patientId/view-self-care-visit-note/:visitNoteId"
          element={<SelfCareVisitFlow />}
        />
        <Route
          path="/patient/:patientId/view-nurse-care-visit-note/:visitNoteId"
          element={<NurseCareVisitFlow />}
        />
        <Route
          path="/patient/:patientId/view-physician-care-visit-note/:visitNoteId"
          element={<PhysicianCareVisitFlow />}
        />
        <Route path="/settings" element={<SettingsScreen />} />
      </Route>
    </Route>
  )
);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  // <React.StrictMode>
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
