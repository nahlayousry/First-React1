import {createBrowserRouter,RouterProvider} from "react-router-dom"
import Layout from "./components/Layout/Layout";
import Portfolio from "./components/Portfolio/Portfolio";
import Contact from "./components/Contact/Contact";
import About from "./components/About/About";
import Starte from "./components/Starte/Starte";



export default function App() {

let Rout= createBrowserRouter([
  {path:"",element: <Layout/> ,children:[
    { path:"about",element:<About/>},
    { path:"start",element:<Starte/>},
    { path:"contact",element:<Contact/>},
    { path:"portfolio",element:<Portfolio/>}

  ]}
])


  return (
  <>
  <RouterProvider router={Rout}></RouterProvider>
  
  </>
  )
}
