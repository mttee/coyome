import Dashboard from "./containers/Dashboard/Dashboard";
import Profile from "./containers/ProfileManager/Profile";
import Calendar from "./containers/Calendar/Schedule";
import Tasks from "./containers/Task/Task_Board";

const routes = [
    {path: "/", exact: true, name: "Dashboard", component: Dashboard},
    {path: "/profile", exact:true, name: "Profile", component: Profile},
    {path: "/calendar", exact:true, name: "Calendar", component: Calendar},
    {path: "/tasks", exact:true, name: "Calendar", component: Tasks},
]

export default routes;