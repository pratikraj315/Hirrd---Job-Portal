// import {createBrowserRouter, RouterProvider} from "react-router-dom";
// import './App.css';
// import { ThemeProvider } from "./components/theme-provider"
// import AppLayout from "./layout/app-layout";
// import Onboarding from "./pages/onboarding";
// import LandingPage from "./pages/landing";
// import JobListing from "./pages/job-listing";
// import JobPage from "./pages/job";
// import PostJob from "./pages/post-job";
// import SavedJobs from "./pages/saved.job";
// import MyJobs from "./pages/my-jobs";



// const router =  createBrowserRouter([
//   {
//     element: <AppLayout />,
//     children: [
//    { path: '/',
//       element: <LandingPage />,
//    },
//    { path: '/onboarding',
//       element: <Onboarding />,
//    },
//    { path: '/jobs',
//       element: <JobListing />,
//    },
//    { path: '/job/:id',
//       element: <JobPage />,
//    },
//    { path: '/post-job',
//       element: <PostJob />,
//    },
//    { path: '/saved-job',
//       element: <SavedJobs />,
//    },
//    { path: '/my-jobs',
//       element: <MyJobs />,
//    },
//     ],
//   },
// ]);

// function App() {
//   return(
//   <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
//   <RouterProvider router={router} />;
// </ThemeProvider> 
//   );
// }

// export default App;

// 

import { RouterProvider, createBrowserRouter } from "react-router-dom";

import AppLayout from "./layout/app-layout";
import ProtectedRoute from "./components/protected-route";
import { ThemeProvider } from "./components/theme-provider";

import LandingPage from "./pages/landing";
import Onboarding from "./pages/onboarding";
import PostJob from "./pages/post-job";
import JobListing from "./pages/jobListing";
import MyJobs from "./pages/my-jobs";
import SavedJobs from "./pages/saved-jobs";
import JobPage from "./pages/job";

import "./App.css";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <LandingPage />,
      },
      {
        path: "/onboarding",
        element: (
          <ProtectedRoute>
            <Onboarding />
          </ProtectedRoute>
        ),
      },
      {
        path: "/jobs",
        element: (
          <ProtectedRoute>
            <JobListing />
          </ProtectedRoute>
        ),
      },
      {
        path: "/post-job",
        element: (
          <ProtectedRoute>
            <PostJob />
          </ProtectedRoute>
        ),
      },
      {
        path: "/my-jobs",
        element: (
          <ProtectedRoute>
            <MyJobs />
          </ProtectedRoute>
        ),
      },
      {
        path: "/saved-jobs",
        element: (
          <ProtectedRoute>
            <SavedJobs />
          </ProtectedRoute>
        ),
      },
      {
        path: "/job/:id",
        element: (
          <ProtectedRoute>
            <JobPage />
          </ProtectedRoute>
        ),
      },
    ],
  },
]);

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;