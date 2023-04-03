import "./App.css";
import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

// import Login from "./pages/Login";
const Login = lazy(() => import("./pages/Login"));
const Signup = lazy(() => import("./pages/Sign-up"));

function App() {
  return (
    <Routes>
      <Route
        path="/login"
        element={
          <Suspense fallback={<p>Loading...</p>}>
            <Login />
          </Suspense>
        }
      />
      <Route
        path="/sign-up"
        element={
          <Suspense fallback={<p>Loading...</p>}>
            <Signup />
          </Suspense>
        }
      />
    </Routes>
  );
}

export default App;
