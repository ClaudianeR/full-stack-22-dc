import { RouterProvider } from "react-router-dom";
import { routes } from "./routes";
<<<<<<< HEAD
import 'react-toastify/dist/ReactToastify.css';
import {ToastContainer} from "react-toastify";

export default function App() {
  return 
  <RouterProvider router={routes} />;
  <ToastContainer/>
=======
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

export default function App() {
  return (
    <>
      <RouterProvider router={routes} />;
      <ToastContainer />
    </>
  );
>>>>>>> 2c42617e3df7e6d9af6ad1d17ff2c7c94255ac6d
}

// import { List } from "./components/List";
// const convidados = ["Samuel", "Lopes", "Teste"];
{
  /* <List nome="Convidados" items={convidados} /> */
}
