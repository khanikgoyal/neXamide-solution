import {createBrowserRouter} from "react-router-dom";
import App from "../App";
import HomePage from "../pages/HomePage";
import ServicesSection from "../pages/ServicesSection";
import Technologies from "../pages/Technologies";
import AboutUs from "../pages/AboutUs";
import ContactUS from "../pages/ContactUS";
import Work from "../pages/Work";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children:[
            { path: "/", element: <HomePage/> },
            { path: "/services", element: <ServicesSection/> },
            { path: "/technologies", element: <Technologies/> },
            { path: "/aboutus", element: <AboutUs/> },
            { path: "/contact-us", element: <ContactUS/>},
            { path: "/works", element: <Work/> },
        ]
    }
])

export default router