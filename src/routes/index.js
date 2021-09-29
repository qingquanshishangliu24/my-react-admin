import pageNotFound from "../pages/pageNotFound/pageNotFound"
import login from "../pages/login"
import edit from "../pages/products/edit"
import list from "../pages/products/list"
import dashboard from "../pages/dashboard/dashboard"


export const mainRoutes =[{
    path:"/login",
    component:login
},
{
    path:"/404",
    component:pageNotFound
}]
export const adminRoutes =[{
    path:"/dashboard",
    component:dashboard
},{
    path:'products/list' ,
    component:list,
    exact:true
},{
    path:'/products/edit',
    component:edit
}]