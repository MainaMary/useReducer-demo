import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Cart from "./pages/Cart";
const routesList = [
    {path:'/',
    component: <Homepage/>
},{
    path:'/cart',
    component: <Cart/>
}
]
const MainRoutes =()=>{
    return <Routes>
        {routesList.map(({path, component}, index)=><Route path={path} element={component} key={index}/>)}
    </Routes>
}
export default MainRoutes