import {BrowserRouter} from "react-router";
import {AppRoutes} from "./AppRoutes.tsx";

function Router() {
  return <BrowserRouter basename={import.meta.env.BASE_URL}>
    <AppRoutes/>
  </BrowserRouter>;
}

export default Router
