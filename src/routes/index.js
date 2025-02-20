import Home from "../components/Home";
import { PathName } from "../constants/pathname";
import { createHashRouter } from 'react-router-dom';

export const router = createHashRouter([
  {
    path: PathName.Home,
    element: <Home />,
  }
])