import { createBrowserRouter } from "react-router";
import { Home } from "./pages/Home";
import PythonBuddyCaseStudy from "./pages/PythonBuddyCaseStudy";
import ClassroomConnectCaseStudy from "./pages/ClassroomConnectCaseStudy";
import SRFTProtocolCaseStudy from "./pages/SRFTProtocolCaseStudy";
import { Layout } from "./components/Layout";

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/projects/pythonbuddy",
        element: <PythonBuddyCaseStudy />,
      },
      {
        path: "/projects/classroomconnect",
        element: <ClassroomConnectCaseStudy />,
      },
      {
        path: "/projects/srft-protocol",
        element: <SRFTProtocolCaseStudy />,
      },
    ],
  },
]);