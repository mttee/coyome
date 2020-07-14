import Dashboard from "./containers/Dashboard/Dashboard"
import Profile from "./containers/UserManager/Profile"

const routes = [
    {path: "/", exact: true, name: "Dashboard", component: Dashboard},
    {path: "/profile", exact:true, name: "Profile", component: Profile}
]

export default routes;