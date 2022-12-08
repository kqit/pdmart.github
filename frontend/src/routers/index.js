import DefaultLayout from "../layouts/DefaultLayout";
import Home from "../page/Home";
import CartPage from "../page/CartPage";
import InformationProductPage from "../page/InformationProductPage";
import CategoryPage from "../page/CategoryPage";
import ManagerPage from "../page/ManagerPage";

const publicRouter=[
    {path:"/",component:Home,layout:DefaultLayout},
    {path:"/cart",component:CartPage,layout:DefaultLayout},
    {path:`/page`,component:InformationProductPage,layout:DefaultLayout},
    {path:`/category`,component:CategoryPage ,layout:DefaultLayout},
    {path:"/manager",component:ManagerPage,layout:DefaultLayout}
]
export {publicRouter}