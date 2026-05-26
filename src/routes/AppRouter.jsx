import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout"
import NotFound from "../pages/NotFound";
import Home from "../pages/Home";
import ProductDetail from "../pages/ProductDetail";
import Cart from "../pages/Cart";
import Checkout from "../pages/Checkout";

const Approuter=createBrowserRouter([
    {
        path:'/',
        element:<MainLayout/>,
        errorElement:<NotFound/>,
        children:[
            {
                index:true,
                element:<Home/>
            },
            {
                path:"product/:id",
                element: <ProductDetail />,
            },
            {
                path:"cart",
                element:<Cart/>
            },
            {
                path:"checkout",
                element:<Checkout/>
            }
        ]
    }
])

export default Approuter;