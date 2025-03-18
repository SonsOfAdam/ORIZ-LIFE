import { Suspense, lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AuthProvider from "@/context/AuthContext";
import IndexPage from "@/pages/IndexPage";
import { Private, Public } from "@/pages/AuthenticatedRoute";

const SignInPage = lazy(() => import("./pages/SignInPage"));
const ForgotPasswordPage = lazy(() => import("./pages/ForgotPasswordPage"));
const ResetPasswordPage = lazy(() => import("./pages/ResetPasswordPage"));
const DashboardPage = lazy(() => import("./pages/DashboardPage"));
const TalentManagementPage = lazy(() => import("./pages/TalentManagementPage"));

const App = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<IndexPage />} />
            {/* <Route path="/signin" element={Public(<SignInPage />)} />
            <Route path="/forgot-password" element={Public(<ForgotPasswordPage />)} />
            <Route path="/reset-password" element={Public(<ResetPasswordPage />)} /> */}
            {/* TODO: Change to Private */}
            {/* <Route path="/dashboard" element={Public(<DashboardPage />)} /> */}
          </Routes>
        </Suspense>
      </AuthProvider>
    </BrowserRouter>
  );
};

export default App;
