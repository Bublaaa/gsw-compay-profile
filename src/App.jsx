import { Toaster } from "react-hot-toast";
import { useEffect, lazy, Suspense } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import { Loader } from "lucide-react";
import Dashboard from "./Dashboard.jsx";

const HomePage = lazy(() => import("./pages/HomePage.jsx"));
const AboutUsPage = lazy(() => import("./pages/AboutUsPage.jsx"));
const OurServicePage = lazy(() => import("./pages/OurServicePage.jsx"));
const PortofolioPage = lazy(() => import("./pages/PortofolioPage.jsx"));

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
          {/* <Route index element={<Navigate to="/" replace />} /> */}
          <Route
            path="/"
            element={
              <Suspense>
                <HomePage />
              </Suspense>
            }
          />
          <Route
            path="about-us"
            element={
              <Suspense>
                <AboutUsPage />
              </Suspense>
            }
          />
          <Route
            path="portfolio"
            element={
              <Suspense>
                <PortofolioPage />
              </Suspense>
            }
          />
          <Route
            path="our-service"
            element={
              <Suspense>
                <OurServicePage />
              </Suspense>
            }
          />
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
