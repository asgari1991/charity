import Benefactor from "./Benefactor/Benefactor";
import Family from "./Family/Family"
import Financial from "./Financial/Financial";
import Reports from "./Reports/Reports";

import Setting from "./Setting/Setting";
import Massenger from "./Massenger/Massenger";

const routes = [
  {path: "/", element:<Family/>},
  { path: "/families", element: <Family/>},
  { path: "/benefactors", element: <Benefactor /> },
  { path: "/massenger", element: <Massenger /> },
  { path: "/financial", element: <Financial /> },
  { path: "/settings", element: <Setting /> },
  { path: "/reports", element: <Reports /> },
];
export default routes;
