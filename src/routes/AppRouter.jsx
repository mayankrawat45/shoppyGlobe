import { createBrowserRouter } from "react-router-dom";
import React, { lazy, Suspense } from "react";
const MainLayout = React.lazy(() => import("../layouts/MainLayout"));
const Notfound = React.lazy(() => import("../pages/NotFound"))
const Home = React.lazy(() => import("../pages/Home"))
const ProductDetail = React.lazy(() => import("../pages/ProductDetail"))
const Cart = React.lazy(() => import("../pages/Cart"))
const Checkout = React.lazy(() => import("../pages/Checkout"))

const Approuter = createBrowserRouter([
    {
        path: '/',
        element: (
            <Suspense fallback={<h2>Loading...</h2>}>
                <MainLayout />
            </Suspense>
        ),
        errorElement: (
            <Suspense fallback={<h2>Loading...</h2>}>
                <Notfound/>
            </Suspense>
        ),
        children: [
        {
            index: true,
            element: (
                <Suspense fallback={<h2>Loading...</h2>}>
                    <Home />
                </Suspense>
            ),
        },
        {
            path: "product/:id",
            element: (
                <Suspense fallback={<h2>Loading...</h2>}>
                    <ProductDetail />
                </Suspense>
            ),
        },
        {
            path: "cart",
            element: (
                <Suspense fallback={<h2>Loading...</h2>}>
                    <Cart />
                </Suspense>
            ),
        },
        {
            path: "checkout",
            element: (
                <Suspense fallback={<h2>Loading...</h2>}>
                    <Checkout />
                </Suspense>
            ),
        }
    ]
    }
])

export default Approuter;