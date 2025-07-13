import { Toaster } from "react-hot-toast";
import { useEffect, lazy, Suspense } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import { Loader } from "lucide-react";
import Dashboard from "./Dashboard.jsx";

function App() {
  return (
    <div className="h-screen w-full bg-white-shadow flex items-center justify-center overflow-hidden">
      <Routes>
        <Route
          path="/"
          element={
            <Suspense
              fallback={<Loader className="w-6h-6 animate-spin mx-auto" />}
            >
              <Dashboard />
            </Suspense>
          }
        >
          {/* <Route index element={<Navigate to="overview" replace />} />
          <Route
            path="overview"
            element={
              <Suspense>
                <Home />
              </Suspense>
            }
          />
          <Route
            path="clock-in"
            element={
              <Suspense>
                <ClockInPage />
              </Suspense>
            }
          />
          <Route
            path="clock-out"
            element={
              <Suspense>
                <ClockOutPage />
              </Suspense>
            }
          />
          <Route
            path="schedules"
            element={
              <Suspense>
                <SchedulesSecurityPage />
              </Suspense>
            }
          /> */}
        </Route>

        {/* <Route
            path="signup"
            element={
              <Suspense>
                <SignUpPage />
              </Suspense>
            }
          /> */}
        {/* catch all routes */}
        {/* <Route path="*" element={<Navigate to="/login" replace />} /> */}
      </Routes>
      <Toaster />
    </div>
  );
}

export default App;
