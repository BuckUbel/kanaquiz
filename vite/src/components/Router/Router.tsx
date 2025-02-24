import {BrowserRouter} from "react-router";
import {AppRoutes} from "./AppRoutes.tsx";

function Router() {
  return <BrowserRouter>
    <AppRoutes/>
  </BrowserRouter>;
}

export default Router
