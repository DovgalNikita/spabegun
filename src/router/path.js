import Main from "../pages/Main/Main";
import About from "../pages/About/About";
import Contacts from "../pages/Contacts/Contacts";
import Calculator from "../pages/Calculator/Calculator";

export const paths = [
    {path:'/',element:<Main />},
    {path:'/about',element:<About />},
    {path:'/contacts',element:<Contacts />},
    {path:'/calculator',element:<Calculator />},
]