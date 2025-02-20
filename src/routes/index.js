import Home from "../components/Home";
import { PathName } from "../constants/pathname";
import { createBrowserRouter } from 'react-router-dom';

export const router = createBrowserRouter([
  {
    path: PathName.Home,
    element: <Home />,
  }
])