import "./app.scss";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import React from "react";
import Navbar from "./components/navbar/Navbar.jsx";
import Footer from "./components/footer/Footer.jsx";
import Home from "./pages/home/Home.jsx";
import Gigs from "./pages/gigs/Gigs.jsx";
import Gig from "./pages/gig/Gig.jsx";
import Login from "./pages/login/Login.jsx";
import Register from "./pages/register/Register.jsx";
import Add from "./pages/add/Add.jsx";
import Orders from "./pages/orders/Orders.jsx";
import Messages from "./pages/messages/Messages.jsx";
import Message from "./pages/message/Message.jsx";
import MyGigs from "./pages/myGigs/MyGigs.jsx";
import CusPrivacy from "./pages/CustomerPrivacy/CusPrivacy.jsx";
import SupplierPrivacy from "./pages/SupplierPrivacy/SupplierPrivacy.jsx";
import {
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
// import Pay from "./pages/pay/Pay.jsx";
import Success from "./pages/success/Success.jsx";
import CustomerTerms from './pages/Terms/CustomerTerms.jsx';
import SupplierTerms from './pages/Terms/SupplierTerms.jsx';
import CustomerRelations from './pages/CustomerRelations/CustomerRelations.jsx';
import SellerAnalytics from './pages/Analytics/SellerAnalytics.jsx';
import Admin from './pages/admin/admin.jsx';
import Pay from "./pages/admin/pay.jsx";
import GigDetail from "./pages/gig/gigg.jsx";
import Profile from "./pages/profile/profile.jsx";
function App() {
  const queryClient = new QueryClient();

  const Layout = () => {
    return (
      <div className="app">
        <QueryClientProvider client={queryClient}>
          <Navbar />
          <Outlet />
          <Footer />
        </QueryClientProvider>
      </div>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/gigs",
          element: <Gigs />,
        },
        {
          path: "/myGigs",
          element: <MyGigs />,
        },
        {
          path: "/orders",
          element: <Orders />,
        },
        {
          path: "/messages",
          element: <Messages />,
        },
        {
          path: "/message/:id",
          element: <Message />,
        },
        {
          path: "/add",
          element: <Add />,
        },
        {
          path: "/gig/:id",
          element: <Gig />,
        },
        {
          path: "/register",
          element: <Register />,
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/pay",
          element: <Pay />,
        },
        {
          path: "/success",
          element: <Success />,
        },
        
        {
          path: "/customerprivacy",
          element: <CusPrivacy />,
        },
        
        {
          path: "/supplierprivacy",
          element: <SupplierPrivacy />,
        },
        
        {
          path: "/customerterms",
          element: <CustomerTerms />,
        },
        
        {
          path: "/supplierterms",
          element: <SupplierTerms />,
        },
        
        {
          path: "/customerrelations",
          element: <CustomerRelations />,
        },
        
        {
          path: "/selleranalytics",
          element: <SellerAnalytics />,
        },
        
        {
          path: "/admindash",
          element: <Admin />,
        },
        
        {
          path: "/newgig/:id",
          element: <GigDetail />,
        },
        
        {
          path: "/seller/profile",
          element: <Profile />,
        }
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
